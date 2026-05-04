import { GATEWAY_ENDPOINT } from '../axios.config'

export const cms_api = {
    getConfig: () => GATEWAY_ENDPOINT.get('/cms'),
    updateConfig: (payload: any) => GATEWAY_ENDPOINT.patch('/cms', payload)
}
