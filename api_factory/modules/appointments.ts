import { GATEWAY_ENDPOINT } from '../axios.config'

export const appointments_api = {
    create: (payload: any) => GATEWAY_ENDPOINT.post('/appointments', payload),
    getAll: () => GATEWAY_ENDPOINT.get('/appointments'),
}
