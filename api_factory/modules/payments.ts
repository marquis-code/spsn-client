import { GATEWAY_ENDPOINT } from '../axios.config'

export const payments_api = {
    initiate: (payload: any) => GATEWAY_ENDPOINT.post('/payments/initiate', payload),
    verify: (reference: string) => GATEWAY_ENDPOINT.get(`/payments/verify/${reference}`),
}
