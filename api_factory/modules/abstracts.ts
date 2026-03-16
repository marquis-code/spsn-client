import { GATEWAY_ENDPOINT } from '../axios.config'

export const abstracts_api = {
    create: (payload: any) => GATEWAY_ENDPOINT.post('/abstracts', payload),
    getMyAbstracts: () => GATEWAY_ENDPOINT.get('/abstracts/my'),
}
