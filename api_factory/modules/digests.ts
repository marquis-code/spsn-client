import { GATEWAY_ENDPOINT } from '../axios.config'

export const digests_api = {
    getAll: () => GATEWAY_ENDPOINT.get('/digests'),
}
