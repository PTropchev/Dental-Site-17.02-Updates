# Dental Site (React + Express + Bootstrap)

Това е пренаписана версия на проекта без Python/Django.

## Стартиране (dev)
1) Копирай `.env.example` -> `.env` и (ако трябва) редактирай стойностите.
2) Инсталирай зависимостите:

```bash
npm install
```

3) Стартирай сървъра + клиента паралелно:

```bash
npm run dev
```

- React (Vite): http://localhost:5173/
- Express API: http://localhost:3000/api/reviews

## Production build
```bash
npm run build
npm start
```
След build, Express сервира статичния React build от `server/public`.

## Google Reviews
За да се показват "Последни Google ревюта" в секцията на началната страница, попълни:
- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`

в `.env`. Ако не са попълнени, секцията остава със съобщение „Все още няма налични ревюта.”
