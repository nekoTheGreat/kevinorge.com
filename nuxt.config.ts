// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        public: {
            maintenance: process.env.MAINTENANCE == 'true',
            environment: process.env.ENV || 'development',
            recaptchaKey: process.env.RECAPTCHA_SITE_KEY || '',
        }
    }
})
