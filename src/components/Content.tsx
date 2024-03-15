'use client'
import { About } from './About'
import { Article } from './Article'
import { Customer } from './Customer'
import { Expertise } from './Expertise'
import { Quotes } from './Quotes'
import { Technology } from './Technology'
export function Content(data: any) {
    const { content } = data.data
    const quote = content[0]
    const expertise = content[1]
    const article = content[2]
    const customer = content[3]
    const technology = content[4]
    const about = content[5]

    return (
        <div className="content">
            <Quotes data={quote} />
            <div className="detail">
                <Expertise data={expertise} />
                <Article data={article} />
            </div>
            <Customer data={customer} />
            <Technology data={technology} />
            <About data={about} />
        </div>
    )
}
