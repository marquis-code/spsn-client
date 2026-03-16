import { ref } from "vue"
import { auth_api } from "@/api_factory/modules/auth"
import { useCustomToast } from "@/composables/core/useCustomToast"
import { useRouter } from "vue-router"
import { useUser } from "./user"

export const useLogin = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()
    const { setUser } = useUser()
    const router = useRouter()

    const login = async (payload: { email: string; password: string }) => {
        loading.value = true
        try {
            const res = await auth_api.login(payload) as any
            const data = res?.data || res

            if (data?.user) {
                setUser(data.user, data.token)
                showToast({ title: "Success", message: "Login successful", toastType: "success" })
                return { data: data }
            }

            return res
        } catch (err: any) {
            showToast({ title: "Error", message: err.message || "Login failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, login }
}
