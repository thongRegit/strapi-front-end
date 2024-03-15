import { formatUrl } from '@/utils'

export function Quotes(data: any) {
    const { open_quote, close_quote, image, line, line_second, title } =
        data.data
    const { openQuoteUrl, closeQuoteUrl, imageUrl } = formatUrl(
        ['openQuoteUrl', 'closeQuoteUrl', 'imageUrl'],
        [open_quote.url, close_quote.url, image.url]
    )
    return (
        <div className="quotes">
            <div className="container flex">
                <div className="content">
                    <p>
                        <img src={openQuoteUrl} className="open" alt="" />
                        <span className="title">{title}</span>
                        <img src={closeQuoteUrl} className="close" alt="" />
                    </p>
                    <div>
                        <p className="line">{line}</p>
                        <p className="line">{line_second}</p>
                    </div>
                </div>
                <img src={imageUrl} alt="" />
            </div>
        </div>
    )
}
