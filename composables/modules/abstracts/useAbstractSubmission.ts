import { ref } from "vue"
import { abstracts_api } from "@/api_factory/modules/abstracts"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useAbstractSubmission = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const submitAbstract = async (payload: any) => {
        loading.value = true
        try {
            const res = await abstracts_api.create(payload) as any
            showToast({ title: "Success", message: "Abstract submitted successfully", toastType: "success" })
            return res.data
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Failed to submit abstract", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, submitAbstract }
}
