import { baseURL } from '@/utils/constants'

export function Technology(data: any) {
    const { title, image, sub_title } = data.data
    const imageUrl = baseURL + image.url
    return (
        <div className="technology">
            <div className="container">
                <p className="title"> {title}</p>
                <p className="sub-title"> {sub_title}</p>
                <img src={imageUrl} alt="" />
            </div>
        </div>
    )
}
