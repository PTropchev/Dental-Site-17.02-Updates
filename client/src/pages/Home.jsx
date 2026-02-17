import React, { useEffect, useState } from "react";
import { config } from "../config";

function StarRow({ rating, relativeTime }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="review-stars">
      {stars.map((i) => (
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
      {relativeTime ? (
        <span className="text-muted small"> • {relativeTime}</span>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch("/api/reviews");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!ignore) setReviews(Array.isArray(data) ? data : []);
      } catch {
        if (!ignore) setReviews([]);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/teodorgorchovski/30min",
        text: "Запази час",
        color: "#1a73e8",
        textColor: "#ffffff",
        branding: true,
        parentElement: document.getElementById("calendly-button-container"),
      });
    };
  }, []);

  return (
    <>
      <header className="hero">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold">
                Перфектната усмивка започва при нас
              </h1>
              <p className="lead text-secondary">
                Съвременна дентална медицина с индивидуален подход, основан на
                технологии и иновации.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <a
                  className="btn btn-primary btn-lg rounded-pill px-4"
                  href="#book"
                >
                  Запазете си час
                </a>
                <a
                  className="btn btn-outline-secondary btn-lg rounded-pill px-4"
                  href="#services"
                >
                  Услуги
                </a>
              </div>
              <div className="mt-4 d-flex flex-wrap gap-3">
                <a className="pill-link" href={`tel:${config.clinicPhone1}`}>
                  {config.clinicPhone1}
                </a>
                <a className="pill-link" href={`tel:${config.clinicPhone2}`}>
                  {config.clinicPhone2}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-card shadow-sm">
                <img
                  className="img-fluid rounded-4"
                  src="/img/klinika.jpg"
                  alt="Клиника"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <div className="premium-badge">
                <div className="badge-number">10+</div>
                <div className="badge-text">Години опит</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="premium-badge">
                <div className="badge-number">3000+</div>
                <div className="badge-text">Доволни пациенти</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="premium-badge">
                <div className="badge-number">100%</div>
                <div className="badge-text">Индивидуален подход</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="premium-badge">
                <div className="badge-number">3D</div>
                <div className="badge-text">Съвременна диагностика</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-0 pb-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 pe-lg-5">
              <div
                id="clinicCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded-4">
                  <div className="carousel-item active">
                    <img
                      src="/img/brbr.jpg"
                      className="d-block w-100"
                      alt="Кабинет"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/img/zubi1.jpg"
                      className="d-block w-100"
                      alt="Зъби 1"
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/img/zubi2.jpg"
                      className="d-block w-100"
                      alt="Зъби 2"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#clinicCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#clinicCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="section-kicker mb-2">ЗАЩО ДА НИ ИЗБЕРЕТЕ</p>
              <h2 className="fw-bold">TGM-dental</h2>
              <p className="text-secondary">
                Амбициозен и енергичен екип от професионалисти, в непрекъснат
                стремеж към развитие и резултати.
              </p>

              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <div className="info-card h-100">
                    <h6 className="fw-bold mb-1">Модерно оборудване</h6>
                    <p className="text-secondary mb-0">
                      Прецизност, по-кратко време на процедурите и комфорт.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-card h-100">
                    <h6 className="fw-bold mb-1">Нашите специалисти</h6>
                    <p className="text-secondary mb-0">
                      Опит и експертиза в различни области на стоматологията.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-card h-100">
                    <h6 className="fw-bold mb-1">Безболезнено лечение</h6>
                    <p className="text-secondary mb-0">
                      Внимателен подход и съвременни техники.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-card h-100">
                    <h6 className="fw-bold mb-1">Индивидуален подход</h6>
                    <p className="text-secondary mb-0">
                      План според нуждите и предпочитанията на пациента.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-5 bg-light">
        <div className="container">
          <p className="section-kicker mb-2">НАШИТЕ ДОКТОРИ</p>
          <h2 className="fw-bold">
            Дентални лекари, на които можете да се доверите
          </h2>
          <p className="text-secondary mb-4">
            Професионализъм, етика и открита комуникация на всяка стъпка.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <img
                  className="rounded-top-4"
                  src="/img/tedo1.jpg"
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Д-р Теодор Горочвски</h5>
                  <p className="text-secondary mb-0">
                    Ортодонтия • Естетика • Комплексни планове
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <img
                  className="rounded-top-4"
                  src="/img/tedo2.jpg"
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">Д-р Теодор Горчовски</h5>
                  <p className="text-secondary mb-0">
                    Терапия • Протетика • Профилактика
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-5">
        <div className="container">
          <p className="section-kicker mb-2">НАШИТЕ УСЛУГИ</p>
          <div className="d-flex flex-wrap gap-2 align-items-end justify-content-between">
            <div>
              <h2 className="fw-bold mb-1">Основни дентални услуги</h2>
              <p className="text-secondary mb-0">
                Пълен спектър – от профилактика до комплексни възстановявания.
              </p>
            </div>
            <a
              className="btn btn-outline-primary rounded-pill px-4"
              href="/pricing"
            >
              Виж ценоразпис
            </a>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6 col-lg-3">
              <div className="info-card h-100">
                <h6 className="fw-bold mb-1">Терапия</h6>
                <p className="text-secondary mb-0">
                  Комплексна диагностика и лечение на кариеси и възпалителни
                  процеси с фокус върху запазването на естествените зъби и
                  дългосрочното орално здраве.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info-card h-100">
                <h6 className="fw-bold mb-1">Ендодонтия</h6>
                <p className="text-secondary mb-0">
                  Високопрецизно лечение на коренови канали с модерна апаратура
                  за елиминиране на инфекцията и запазване на зъба.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info-card h-100">
                <h6 className="fw-bold mb-1">Ортодонтия</h6>
                <p className="text-secondary mb-0">
                  Индивидуални решения за подреждане на зъбите и корекция на
                  захапката с цел хармонична и здрава усмивка.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info-card h-100">
                <h6 className="fw-bold mb-1">Дентална естетика</h6>
                <p className="text-secondary mb-0">
                  Естетични процедури от ново поколение за постигане на
                  естествена, сияйна и уверена усмивка..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-5">
        <div className="container">
          <p className="section-kicker mb-2">
            Доволни пациенти. Гарантиран резултат.
          </p>
          <h2 className="fw-bold mb-5">Ревюта от наши пациенти</h2>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="review-card rounded-4 p-4 h-100">
                <div className="fw-bold mb-2">Мария Иванова</div>
                <div className="text-warning mb-2">★★★★★</div>
                <p className="mb-0">
                  Изключително внимателен и професионален екип. Препоръчвам с
                  две ръце!
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="review-card rounded-4 p-4 h-100">
                <div className="fw-bold mb-2">Георги Петров</div>
                <div className="text-warning mb-2">★★★★★</div>
                <p className="mb-0">
                  Модерна клиника и отлично отношение. Часът ми беше спазен
                  точно.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="review-card rounded-4 p-4 h-100">
                <div className="fw-bold mb-2">Елена Димитрова</div>
                <div className="text-warning mb-2">★★★★★</div>
                <p className="mb-0">
                  Най-добрият зъболекар, при който съм била. Безболезнено и
                  спокойно лечение.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="py-5">
        <div className="container">
          <div className="row g-4">
            <div style={{ maxWidth: "420px", width: "100%" }}>
              <p className="section-kicker mb-2">Запазете час</p>
              <h2>Работно време</h2>
              <div className="col-lg-6 text-lg-end"></div>
              <p>Нашата клиника работи по следния график:</p>

              <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                <li>
                  <strong>Понеделник:</strong> 09:00 – 17:00
                </li>
                <li>
                  <strong>Вторник:</strong> 09:00 – 17:00
                </li>
                <li>
                  <strong>Сряда:</strong> 09:00 – 17:00
                </li>
                <li>
                  <strong>Четвъртък:</strong> 09:00 – 17:00
                </li>
                <li>
                  <strong>Петък:</strong> 09:00 – 17:00
                </li>
                <li>
                  <strong>Събота:</strong> 10:00 – 14:00
                </li>
                <li>
                  <strong>Неделя:</strong> Почивен ден
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="calendly-wrap shadow-sm rounded-4">
                <div className="calendly-wrap shadow-sm rounded-4 d-flex align-items-center justify-content-center flex-column p-5 text-center">
                  <h4 className="mb-3">Запази си час чрез Calendly</h4>

                  <p className="mb-4">
                    Избери удобен ден и час директно чрез нашата система за
                    онлайн записване.
                  </p>

                  <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.Calendly.initPopupWidget({
                          url: "https://calendly.com/teodorgorchovski/30min",
                        });
                      }}
                      className="btn btn-primary btn-lg"
                    >
                      Запази час
                    </a>

                    <a
                      href="/pricing"
                      className="btn btn-outline-primary btn-lg"
                    >
                      Виж цени
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="info" className="py-5 bg-light">
        <div className="container">
          <p className="section-kicker mb-2">Полезна информация</p>
          <h2 className="fw-bold mb-4">Статии и съвети</h2>

          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body">
                  <h6 className="fw-bold">Къде грешим при оралната хигиена?</h6>
                  <p className="text-secondary mb-0">Кратко описание…</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body">
                  <h6 className="fw-bold">Кабинетно избелване</h6>
                  <p className="text-secondary mb-0">Кратко описание…</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body">
                  <h6 className="fw-bold">Полезно за мъдреците</h6>
                  <p className="text-secondary mb-0">Кратко описание…</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
