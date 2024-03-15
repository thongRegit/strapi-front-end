import { baseURL } from '@/utils/constants'

export function Footer(data: any) {
    const { footer } = data.data
    const { name, policy, japanese, logo } = footer[0]
    const logoUrl = baseURL + logo.url
    return (
        <footer>
            <div className="container flex">
                <div className="footer-left">
                    <img src={logoUrl} alt="" className="mb-10" />
                    <p className="name">{name}</p>
                </div>
                <div className="footer-right flex">
                    <p className="name">{policy}</p>
                    <p>{japanese}</p>
                </div>
            </div>
        </footer>
    )
}
