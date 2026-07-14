import { ref, computed } from 'vue'
import { GATEWAY_ENDPOINT } from '@/api_factory/axios.config'

export const useDigests = () => {
  const loading = ref(false)
  const digests = ref([])
  const error = ref(null)

  const fetchDigests = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await GATEWAY_ENDPOINT.get('/digests')
      digests.value = res.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch digests'
    } finally {
      loading.value = false
    }
  }

  // Compute digests grouped by year
  const groupedDigests = computed(() => {
    const grouped = {}
    digests.value.forEach(digest => {
      if (!grouped[digest.year]) {
        grouped[digest.year] = []
      }
      grouped[digest.year].push(digest)
    })
    // Sort years descending
    const sortedYears = Object.keys(grouped).sort((a, b) => b - a)
    return sortedYears.map(year => ({
      year,
      digests: grouped[year]
    }))
  })

  return { loading, digests, error, fetchDigests, groupedDigests }
}
