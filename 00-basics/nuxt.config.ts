// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: '00-basics',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_colors.scss" as *;'
                }
            }
        }
    }
})
