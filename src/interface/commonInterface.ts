export interface initialStateProps {
    [key: string]: {
        loading: boolean | string
        result: any
        error: any
        success: boolean
        status_code?: number
        [key: string]: any
    }
}
