import { GATEWAY_ENDPOINT } from '../axios.config'

export const enquiries_api = {
    create: (payload: any) => GATEWAY_ENDPOINT.post('/enquiries', payload),
}
