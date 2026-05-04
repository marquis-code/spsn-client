import { GATEWAY_ENDPOINT } from '../axios.config'

export const auth_api = {
    login: (payload: { email: string; password: string }) => GATEWAY_ENDPOINT.post('/auth/login', payload),
    register: (payload: any) => {
        const data = payload instanceof FormData ? payload : { ...payload, userType: 'customer' }
        return GATEWAY_ENDPOINT.post('/auth/register', data)
    },
    refreshToken: (refreshToken: string) => GATEWAY_ENDPOINT.post('/auth/refresh', { refreshToken }),
    logout: () => GATEWAY_ENDPOINT.post('/auth/logout'),
    forgotPassword: (email: string) => GATEWAY_ENDPOINT.post('/auth/forgot-password', { email }),
    resetPassword: (payload: { token: string; newPassword: string }) => GATEWAY_ENDPOINT.post('/auth/reset-password', payload),
    verifyOtp: (payload: { email: string; otpCode: string }) => GATEWAY_ENDPOINT.post('/auth/verify-otp', payload),
    resendOtp: (payload: { email: string }) => GATEWAY_ENDPOINT.post('/auth/resend-otp', payload),
    updateProfile: (payload: any) => GATEWAY_ENDPOINT.patch('/auth/profile', payload),
}
