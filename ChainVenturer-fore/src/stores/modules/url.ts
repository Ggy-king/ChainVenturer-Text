import { defineStore } from "pinia"
// import { DOMAINBATH } from '@/config/config'
import { ref } from 'vue'

export const UrlStore = defineStore('base-url',() => {
    const baseUrl = 'http://localhost:5173'
    // const baseUrl = 'https://ggyking.top'

    return {
        baseUrl
    }
})