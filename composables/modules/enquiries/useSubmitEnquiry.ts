import { ref } from "vue"
import { enquiries_api } from "@/api_factory/modules/enquiries"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useSubmitEnquiry = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const form = ref({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const submitEnquiry = async () => {
        if (!form.value.name || !form.value.email || !form.value.message) {
            showToast({ title: "Validation", message: "Please fill in all required fields", toastType: "warning" })
            return null
        }
        loading.value = true
        try {
            const res = await enquiries_api.create(form.value) as any
            showToast({ title: "Success", message: "Your message has been sent!", toastType: "success" })
            form.value = { name: '', email: '', subject: '', message: '' }
            return res.data
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Failed to send message", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, form, submitEnquiry }
}
