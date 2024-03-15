export const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL
export const frontEndURL = process.env.NEXT_PUBLIC_FRONT_END_URL
export const STATE_DEFAULT = {
    loading: false,
    result: {
        data: [],
    },
    error: null,
    success: false,
}
