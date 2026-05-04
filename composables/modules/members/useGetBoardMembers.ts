import { ref } from "vue"
import { members_api } from "@/api_factory/modules/members"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useGetBoardMembers = () => {
    const loading = ref(false)
    const boardMembers = ref([])
    const { showToast } = useCustomToast()

    const getBoardMembers = async () => {
        loading.value = true
        try {
            const res = await members_api.findBoardMembers() as any
            boardMembers.value = res.data
        } catch (err: any) {
            showToast({ title: "Error", message: "Failed to fetch scientific board", toastType: "error" })
        } finally {
            loading.value = false
        }
    }

    return { loading, boardMembers, getBoardMembers }
}
