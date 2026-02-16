import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const app = express()
app.use(express.json())
app.use(morgan('dev'))

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProd = process.env.NODE_ENV === 'production'

// Simple in-memory cache for reviews
let cache = {
  at: 0,
  data: []
}

const PLACES_DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json'

async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  const limit = Number(process.env.GOOGLE_REVIEWS_LIMIT || '6')
  if (!apiKey || !placeId) return []

  const url = new URL(PLACES_DETAILS_URL)
  url.searchParams.set('place_id', placeId)
  url.searchParams.set('fields', 'reviews')
  url.searchParams.set('reviews_sort', 'newest')
  url.searchParams.set('key', apiKey)

  const res = await fetch(url, { headers: { 'Accept': 'application/json' } })
  if (!res.ok) throw new Error(`Google Places HTTP ${res.status}`)
  const data = await res.json()
  const reviews = (data?.result?.reviews || []).slice()
  reviews.sort((a, b) => (b?.time || 0) - (a?.time || 0))
  return reviews.slice(0, limit).map((r) => ({
    author_name: r?.author_name || 'Анонимен',
    rating: Number(r?.rating || 5),
    text: r?.text || '',
    time: Number(r?.time || 0),
    relative_time_description: r?.relative_time_description || '',
    profile_photo_url: r?.profile_photo_url || '',
    author_url: r?.author_url || ''
  }))
}

app.get('/api/reviews', async (_req, res) => {
  try {
    const now = Date.now()
    const ttlMs = Number(process.env.REVIEWS_CACHE_TTL_MS || String(10 * 60 * 1000))
    if (cache.data?.length && now - cache.at < ttlMs) {
      return res.json(cache.data)
    }
    const data = await fetchGoogleReviews()
    cache = { at: now, data }
    res.json(data)
  } catch (e) {
    res.status(200).json([])
  }
})

if (isProd) {
  const publicDir = path.resolve(__dirname, 'public')
  app.use(express.static(publicDir))

  // SPA fallback
  app.get('*', (_req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'))
  })
}

const port = Number(process.env.PORT || '3000')
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
