import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        "~/assets/css/main.css",
        '~/assets/fonts/SolaimanLipi/SolaimanLipi.css',
    ],
    // buildModules: [
    //     '@nuxtjs/device',
    // ],
})
