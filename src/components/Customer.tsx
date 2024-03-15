import { baseURL } from '@/utils/constants'

export function Customer(data: any) {
    const { title, image } = data.data
    const urls = image.map((e: any) => ({
        id: e.id,
        src: baseURL + e.customer_image.url,
    }))

    return (
        <div className="customer">
            <p>{title}</p>
            <div className="grid">
                {urls.map((url: any) => (
                    <div className="customer-image flex" key={url.id}>
                        <img src={url.src} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
