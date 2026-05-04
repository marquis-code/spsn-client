import { GATEWAY_ENDPOINT } from '../axios.config'

export const newsletters_api = {
    subscribe: (payload: { email: string }) => GATEWAY_ENDPOINT.post('/newsletters/subscribe', payload),
    unsubscribe: (email: string) => GATEWAY_ENDPOINT.delete(`/newsletters/${email}`),
}
