import { baseURL, formatDate } from '@/utils'

export function Article(data: any) {
    const { list, title, sub_title, info } = data.data

    return (
        <div className="articles">
            <p className="title">{title}</p>
            <p className="sub-title">{sub_title}</p>
            <div className="info grid">
                {info.map((item: any) => (
                    <p key={item.id}>
                        <span>{formatDate(item.date)}</span>
                        {item.text}
                    </p>
                ))}
            </div>
            <div className="grid article-content container">
                {list.map((item: any) => (
                    <div
                        key={item.id}
                        className={`flex ${item?.image?.url ? '' : 'customer'}`}
                    >
                        {item?.image?.url && (
                            <img src={baseURL + item.image.url} alt="" />
                        )}
                        {item.extra && <p className="extra">{item.extra}</p>}
                        <p className="title">{item.title}</p>
                        <p className="content">{item.content}</p>
                        {item?.button && <button>{item.button}</button>}
                    </div>
                ))}
            </div>
        </div>
    )
}
