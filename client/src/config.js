export const config = {
  clinicName: import.meta.env.VITE_CLINIC_NAME || 'Дентална клиника София',
  clinicPhone1: import.meta.env.VITE_CLINIC_PHONE_1 || '+359887758283',
  clinicPhone2: import.meta.env.VITE_CLINIC_PHONE_2 || '+359889510615',
  clinicEmail: import.meta.env.VITE_CLINIC_EMAIL || ' teodorgorchovski2@gmail.com',
  clinicAddressSofia: import.meta.env.VITE_CLINIC_ADDRESS_SOFIA || ' ул. Царевец 2, София',
  calendlyInlineUrl: import.meta.env.VITE_CALENDLY_INLINE_URL || 'https://calendly.com/your-org/consultation'
}
