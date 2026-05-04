import { ref } from "vue"
import { newsletters_api } from "@/api_factory/modules/newsletters"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useNewsletter = () => {
    const loading = ref(false)
    const email = ref('')
    const { showToast } = useCustomToast()

    const subscribe = async () => {
        if (!email.value) {
            showToast({ title: "Validation", message: "Please enter your email", toastType: "warning" })
            return
        }
        loading.value = true
        try {
            await newsletters_api.subscribe({ email: email.value })
            showToast({ title: "Subscribed!", message: "You have successfully joined our network.", toastType: "success" })
            email.value = ''
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Failed to subscribe", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, email, subscribe }
}
