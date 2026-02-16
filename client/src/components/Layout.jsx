import React, { useEffect, useMemo, useState } from 'react'
import { config } from '../config'

function safeSetTitle(title) {
  if (typeof document !== 'undefined') document.title = title
}

export default function Layout({ children }) {
  const year = useMemo(() => new Date().getFullYear(), [])
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // theme init
    const saved = localStorage.getItem('theme')
    const isDark = saved === 'dark'
    setDark(isDark)
    document.body.classList.toggle('dark-mode', isDark)
  }, [])

  useEffect(() => {
    // Loader cleanup (if any)
    const loader = document.getElementById('loader')
    if (loader) {
      const t = window.setTimeout(() => {
        loader.style.display = 'none'
      }, 300)
      return () => window.clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    // Reveal animations
    const sections = document.querySelectorAll('section')
    sections.forEach((s) => s.classList.add('reveal'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('show')
        })
      },
      { threshold: 0.12 }
    )

    sections.forEach((s) => io.observe(s))

    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector('.navbar')
      if (nav) {
        if (window.scrollY > 50) nav.classList.add('nav-scrolled')
        else nav.classList.remove('nav-scrolled')
      }

      const scrollTop = document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      const bar = document.getElementById('scrollProgress')
      if (bar) bar.style.width = `${progress}%`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Counter animation (kept from original, only applies if elements exist)
    const counters = document.querySelectorAll('.counter')
    if (!counters.length) return

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const target = Number(el.getAttribute('data-target') || '0')
            let count = 0

            const updateCounter = () => {
              const increment = target / 100
              if (count < target) {
                count += increment
                el.innerText = String(Math.ceil(count))
                requestAnimationFrame(updateCounter)
              } else {
                el.innerText = `${target}+`
              }
            }

            updateCounter()
            counterObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.6 }
    )

    counters.forEach((c) => counterObserver.observe(c))
    return () => counterObserver.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.body.classList.toggle('dark-mode', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  // Keep title similar to Django templates based on route
  useEffect(() => {
    const path = window.location.pathname
    if (path === '/pricing') safeSetTitle(`Ценоразпис | ${config.clinicName}`)
    else safeSetTitle(`Начало | ${config.clinicName}`)
  }, [children])

  return (
    <>
      <div id="loader">
        <div className="loader-spinner"></div>
      </div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div id="scrollProgress"></div>

      <div className="topbar py-2">
        <div className="container d-flex flex-wrap gap-2 justify-content-between align-items-center">
          <div className="small text-white-50">
            <span className="me-2">📍 {config.clinicAddressSofia}</span>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <a className="topbar-link" href={`tel:${config.clinicPhone1}`}>
              {config.clinicPhone1}
            </a>
            <a className="topbar-link" href={`tel:${config.clinicPhone2}`}>
              {config.clinicPhone2}
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            Tvoeto ime
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  За нас
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#services">
                  Услуги
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#team">
                  Екип
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">
                  Ценоразпис
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contacts">
                  Контакти
                </a>
              </li>
              <li className="nav-item ms-lg-2">
                <a className="btn btn-primary rounded-pill px-4" href="/#book">
                  Запази час
                </a>
              </li>
            </ul>
            <button
              id="darkToggle"
              className="btn btn-sm btn-outline-secondary ms-3"
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle dark mode"
            >
              {dark ? '☀' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {children}

      <footer id="contacts" className="footer mt-5 pt-5 border-top">
        <div className="container pb-4">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="fw-bold">За нас</h5>
              <p className="text-secondary mb-0">
                Съвременна дентална практика с фокус върху комфорт, прецизност и
                индивидуален подход.
              </p>
            </div>

            <div className="col-lg-4">
              <h5 className="fw-bold">Контакти</h5>
              <ul className="list-unstyled mb-0 text-secondary">
                <li>
                  ✉️ <a href={`mailto:${config.clinicEmail}`}>{config.clinicEmail}</a>
                </li>
                <li>
                  📞 <a href={`tel:${config.clinicPhone1}`}>{config.clinicPhone1}</a>
                </li>
                <li>
                  📞 <a href={`tel:${config.clinicPhone2}`}>{config.clinicPhone2}</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <h5 className="fw-bold">Адреси</h5>
              <p className="text-secondary mb-2">
                <strong>София:</strong> {config.clinicAddressSofia}
              </p>
              <p className="text-secondary mb-0">
                <strong>Сапарева Баня:</strong> {config.clinicAddressSapareva}
              </p>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center pt-4 mt-4 border-top text-secondary">
            <small>
              © {year} {config.clinicName} | Всички права запазени
            </small>
            <small>
              <a href="/#book">Запазете си час</a>
            </small>
          </div>
        </div>
      </footer>
    </>
  )
}
