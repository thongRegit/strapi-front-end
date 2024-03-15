import { baseURL } from '@/utils'

export function Expertise(data: any) {
    const { list } = data.data

    return (
        <div className="grid expertise container">
            {list.map((item: any) => (
                <div
                    key={item.id}
                    className={`flex ${item?.image?.url ? '' : 'customer'}`}
                >
                    {item?.image?.url && (
                        <img src={baseURL + item.image.url} alt="" />
                    )}
                    <p className="title">{item.title}</p>
                    <p className="content">{item.content}</p>
                    {item?.button && (
                        <button>
                            <p>{item.button}</p>
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}
