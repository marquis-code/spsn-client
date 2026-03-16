import { ref } from "vue"
import { payments_api } from "@/api_factory/modules/payments"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useInitiatePayment = () => {
    const loading = ref(false)
    const { showToast } = useCustomToast()

    const initiatePayment = async (payload: { amount: number; email: string; purpose: string; gateway?: string }) => {
        loading.value = true
        try {
            const res = await payments_api.initiate(payload) as any
            const data = res.data
            // Redirect to payment URL
            if (data?.paymentUrl) {
                window.location.href = data.paymentUrl
            }
            return data
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Payment initiation failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, initiatePayment }
}

export const useVerifyPayment = () => {
    const loading = ref(false)
    const paymentStatus = ref<string | null>(null)
    const { showToast } = useCustomToast()

    const verifyPayment = async (reference: string) => {
        loading.value = true
        try {
            const res = await payments_api.verify(reference) as any
            paymentStatus.value = res.data?.status || 'unknown'
            if (paymentStatus.value === 'successful') {
                showToast({ title: "Payment Verified", message: "Your payment was successful!", toastType: "success" })
            } else {
                showToast({ title: "Payment Status", message: `Status: ${paymentStatus.value}`, toastType: "info" })
            }
            return res.data
        } catch (err: any) {
            paymentStatus.value = 'failed'
            showToast({ title: "Error", message: "Payment verification failed", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, paymentStatus, verifyPayment }
}
