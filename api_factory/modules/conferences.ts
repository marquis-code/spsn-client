import { GATEWAY_ENDPOINT } from '../axios.config'

export const conferences_api = {
    getConferences: () => GATEWAY_ENDPOINT.get('/conferences'),
    getConference: (id: string) => GATEWAY_ENDPOINT.get(`/conferences/${id}`),
    createConference: (payload: any) => GATEWAY_ENDPOINT.post('/conferences', payload),
    updateConference: (id: string, payload: any) => GATEWAY_ENDPOINT.patch(`/conferences/${id}`, payload),
    deleteConference: (id: string) => GATEWAY_ENDPOINT.delete(`/conferences/${id}`),
}
