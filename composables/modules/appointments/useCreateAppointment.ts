import { ref } from "vue"
import { appointments_api } from "@/api_factory/modules/appointments"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useCreateAppointment = () => {
    const loading = ref(false)
    const success = ref(false)
    const { showToast } = useCustomToast()

    const appointment = ref({
        fullName: '',
        email: '',
        purpose: '',
        date: '',
        message: ''
    })

    const submitAppointment = async () => {
        if (!appointment.value.fullName || !appointment.value.email) {
            showToast({ title: "Validation", message: "Please fill in all required fields", toastType: "warning" })
            return null
        }
        loading.value = true
        try {
            const res = await appointments_api.create(appointment.value) as any
            success.value = true
            showToast({ title: "Success", message: "Appointment booked successfully!", toastType: "success" })
            appointment.value = { fullName: '', email: '', purpose: '', date: '', message: '' }
            return res.data
        } catch (err: any) {
            showToast({ title: "Error", message: err?.response?.data?.message || "Failed to book appointment", toastType: "error" })
            return null
        } finally {
            loading.value = false
        }
    }

    return { loading, success, appointment, submitAppointment }
}
