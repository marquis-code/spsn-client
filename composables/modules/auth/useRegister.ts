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

    const register = async () => {
        if (!form.value.fullName || !form.value.email || !form.value.password) {
            showToast({ title: "Validation", message: "Please fill in all required fields", toastType: "warning" })
            return null
        }
        loading.value = true
        try {
            const res = await auth_api.register({
                name: form.value.fullName,
                email: form.value.email,
                password: form.value.password,
                role: form.value.role,
                organization: form.value.organization
            }) as any
            showToast({ title: "Success", message: "Registration successful! Please check your email.", toastType: "success" })
            return res.data
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Registration failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, form, register }
}
