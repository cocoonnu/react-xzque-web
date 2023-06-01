import axiosInstance from '@/utils/axiosInstance'

export function createQuestionApi() {
    return axiosInstance.post('/api/question')
}