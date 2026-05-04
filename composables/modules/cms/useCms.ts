import { ref } from "vue"
import { cms_api } from "@/api_factory/modules/cms"

export const useCms = () => {
    const loading = ref(false)
    const cmsConfig = ref(null)

    const getCmsConfig = async () => {
        loading.value = true
        try {
            const res = await cms_api.getConfig() as any
            cmsConfig.value = res.data
            return res.data
        } catch (err) {
            console.error('Failed to fetch CMS config:', err)
        } finally {
            loading.value = false
        }
    }

    return { loading, cmsConfig, getCmsConfig }
}
