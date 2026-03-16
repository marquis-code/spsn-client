import { GATEWAY_ENDPOINT } from '../axios.config'

export const blogs_api = {
    getBlogs: () => GATEWAY_ENDPOINT.get('/blogs'),
    getBlogBySlug: (slug: string) => GATEWAY_ENDPOINT.get(`/blogs/slug/${slug}`),
    createBlog: (payload: any) => GATEWAY_ENDPOINT.post('/blogs', payload),
    updateBlog: (id: string, payload: any) => GATEWAY_ENDPOINT.patch(`/blogs/${id}`, payload),
    deleteBlog: (id: string) => GATEWAY_ENDPOINT.delete(`/blogs/${id}`),
}
