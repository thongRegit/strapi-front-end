import { baseURL } from '@/utils/constants'

export function About(data: any) {
    const { title, sub_title, left, right, image } = data.data
    const imageUrl = baseURL + image.url
    return (
        <div className="about">
            <div className="image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="about-info">
                <div className="container">
                    <p className="title">{title}</p>
                    <p className="sub-title">{sub_title}</p>
                    <div className="about-detail flex">
                        <div className="left">
                            {left.map((item: any) => (
                                <div key={item.id} className="grid">
                                    <p className="about-title">{item.title}</p>
                                    <p className="about-content">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="right">
                            {right.map((item: any) => (
                                <div key={item.id} className="grid">
                                    <p className="about-title">{item.title}</p>
                                    <p className="about-content">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
