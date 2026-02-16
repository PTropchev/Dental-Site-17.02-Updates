import React from 'react'
import { config } from '../config'

export default function Pricing() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-3">Ценоразпис</h1>
            <p className="text-secondary">Цените са ориентировъчни и могат да варират според сложността на случая.</p>

            <div className="accordion" id="priceAcc">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#p1"
                  >
                    Преглед и терапия
                  </button>
                </h2>
                <div
                  id="p1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#priceAcc"
                >
                  <div className="accordion-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Преглед</span><strong>40 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Обтурация с фотополимер</span><strong>100–160 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Щифтово изграждане</span><strong>200 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Кореново лечение (1 канал)</span><strong>160 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Кореново лечение (2 канала)</span><strong>220 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Кореново лечение (3+ канала)</span><strong>300 лв.</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#p2"
                  >
                    Ортодонтия
                  </button>
                </h2>
                <div id="p2" className="accordion-collapse collapse" data-bs-parent="#priceAcc">
                  <div className="accordion-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Ортодонтски анализ и план</span><strong>200 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Метални брекети (2 челюсти)</span><strong>4500–6500 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Естетични брекети (2 челюсти)</span><strong>5500–7500 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Алайнери</span><strong>5000–10000 лв.</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#p3"
                  >
                    Хирургия и протетика
                  </button>
                </h2>
                <div id="p3" className="accordion-collapse collapse" data-bs-parent="#priceAcc">
                  <div className="accordion-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Екстракция (еднокоренов)</span><strong>100 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Екстракция (многокоренов)</span><strong>150–200 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Металокерамична корона</span><strong>350 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Циркониева корона</span><strong>650 лв.</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Шина за бруксизъм</span><strong>200 лв.</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: 90 }}>
              <div className="card border-0 shadow-sm rounded-4 mb-3">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">Запази час</h5>
                  <p className="text-secondary mb-3">Онлайн записване през Calendly.</p>
                  <a className="btn btn-primary w-100 rounded-pill" href="/#book">
                    Отвори записване
                  </a>
                </div>
              </div>

              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">Контакти</h5>
                  <div className="d-grid gap-2">
                    <a className="btn btn-outline-secondary rounded-pill" href={`tel:${config.clinicPhone1}`}>
                      📞 {config.clinicPhone1}
                    </a>
                    <a className="btn btn-outline-secondary rounded-pill" href={`tel:${config.clinicPhone2}`}>
                      📞 {config.clinicPhone2}
                    </a>
                    <a className="btn btn-outline-secondary rounded-pill" href={`mailto:${config.clinicEmail}`}>
                      ✉️ {config.clinicEmail}
                    </a>
                  </div>
                  <hr />
                  <p className="text-secondary mb-2"><strong>София:</strong> {config.clinicAddressSofia}</p>
                  <p className="text-secondary mb-0"><strong>Сапарева Баня:</strong> {config.clinicAddressSapareva}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
