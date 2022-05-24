const devBaseURL = "https://httpbin.org"
const proBaseURL = "https://production.org"

export const BASE_URL = process.env.NODE_ENV === "production" ? proBaseURL : devBaseURL

export const TIMEOUT = 5000