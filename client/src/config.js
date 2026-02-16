export const config = {
  clinicName: import.meta.env.VITE_CLINIC_NAME || 'VDent - Дентална Клиника',
  clinicPhone1: import.meta.env.VITE_CLINIC_PHONE_1 || '+359894678799',
  clinicPhone2: import.meta.env.VITE_CLINIC_PHONE_2 || '+359889510615',
  clinicEmail: import.meta.env.VITE_CLINIC_EMAIL || 'info@example.com',
  clinicAddressSofia: import.meta.env.VITE_CLINIC_ADDRESS_SOFIA || 'София, ул. ...',
  clinicAddressSapareva: import.meta.env.VITE_CLINIC_ADDRESS_SAPAREVA || 'Сапарева Баня, ул. ...',
  calendlyInlineUrl: import.meta.env.VITE_CALENDLY_INLINE_URL || 'https://calendly.com/your-org/consultation'
}
