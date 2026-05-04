import { ref, computed } from "vue"
import { auth_api } from "@/api_factory/modules/auth"
import { useCustomToast } from "@/composables/core/useCustomToast"
import { useUser } from "./user"

export const useRegister = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const form = ref({
        fullName: '',
        email: '',
        password: '',
        role: 'Regular Member',
        organization: ''
    })

    const register = async (payload?: any) => {
        const dataToSubmit = payload || {
            name: form.value.fullName,
            email: form.value.email,
            password: form.value.password,
            role: form.value.role,
            organization: form.value.organization
        }

        loading.value = true
        try {
            const res = await auth_api.register(dataToSubmit) as any
            showToast({ title: "Success", message: "Enrollment initiated! Our secretariat will verify your credentials.", toastType: "success" })
            return res.data
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Protocol execution failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, form, register }
}
