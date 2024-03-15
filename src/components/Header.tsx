'use client'
import Link from 'next/link'
import { formatUrl } from '@/utils'
import { homeSelector } from '@/stores'
import { useAppDispatch, useAppSelector } from '@/app/hook'

export function Header(data: any) {
    const { header } = data.data
    const { logo, top, service, consultant, profile } = header[0]
    const { urlLogo, consultantUrl } = formatUrl(
        ['urlLogo', 'consultantUrl'],
        [logo.url, consultant.icon.url]
    )
    const { topUrl } = formatUrl(['topUrl'], [top.url ?? ''], false)

    return (
        <header>
            <div className="flex container">
                <img src={urlLogo} alt="" />
                <div className="content flex">
                    <Link className="top" href={topUrl}>
                        {top.text}
                    </Link>
                    <Link href="#" className="service">
                        {service.text}
                    </Link>
                    <Link href="#" className="profile">
                        {profile.text}
                    </Link>
                </div>
                <button className="flex">
                    {consultant.title}
                    <img src={consultantUrl} alt="" />
                </button>
            </div>
        </header>
    )
}
