import { ref, computed } from "vue"
import { abstracts_api } from "@/api_factory/modules/abstracts"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useSubmitAbstract = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const form = ref({
        primaryAuthor: '',
        email: '',
        conference: 'THE 2ND INTERNATIONAL CONGRESS 2026 (ABUJA)',
        title: '',
        content: ''
    })

    const wordCount = computed(() => {
        const text = form.value.content.trim()
        if (!text) return 0
        return text.split(/\s+/).length
    })

    const submitAbstract = async () => {
        if (wordCount.value < 150 || wordCount.value > 250) {
            showToast({ title: "Validation", message: "Abstract must be between 150 and 250 words", toastType: "warning" })
            return null
        }
        loading.value = true
        try {
            const res = await abstracts_api.create(form.value) as any
            showToast({ title: "Success", message: "Abstract submitted successfully!", toastType: "success" })
            // Reset form
            form.value = { primaryAuthor: '', email: '', conference: form.value.conference, title: '', content: '' }
            return res.data
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Submission failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, form, wordCount, submitAbstract }
}
