import { baseURL } from '@/utils'
import qs from 'qs'
import { flattenAttributes } from '@/utils/index'

export default async function getHomePage() {
    const query = qs.stringify({
        populate: {
            header: {
                populate: {
                    logo: {
                        fields: ['url', 'alternativeText'],
                    },
                    top: {
                        populate: true,
                    },
                    service: {
                        populate: true,
                    },
                    consultant: {
                        populate: {
                            icon: {
                                fields: ['url', 'alternativeText'],
                            },
                        },
                    },
                    profile: {
                        populate: true,
                    },
                },
            },
            footer: {
                populate: {
                    logo: {
                        fields: ['url', 'alternativeText'],
                    },
                },
            },
            content: {
                // asking to populate the blocks dynamic zone
                on: {
                    // using a detailed population strategy to explicitly define what you want
                    'components.quotes': {
                        populate: {
                            open_quote: {
                                fields: ['url', 'alternativeText'],
                            },
                            close_quote: {
                                fields: ['url', 'alternativeText'],
                            },
                            image: {
                                fields: ['url', 'alternativeText'],
                            },
                        },
                    },
                    'components.aritcle-list': {
                        populate: {
                            list: {
                                populate: {
                                    image: {
                                        fields: ['url', 'alternativeText'],
                                    },
                                },
                            },
                            info: {
                                populate: '*',
                            },
                        },
                    },
                    'components.customer': {
                        populate: {
                            image: {
                                populate: {
                                    customer_image: {
                                        fields: ['url', 'alternativeText'],
                                    },
                                },
                            },
                        },
                    },
                    'components.teachnology': {
                        populate: {
                            image: {
                                fields: ['url', 'alternativeText'],
                            },
                        },
                    },
                    'components.about': {
                        populate: {
                            right: {
                                populate: '*',
                            },
                            left: {
                                populate: '*',
                            },
                            image: {
                                fields: ['url', 'alternativeText'],
                            },
                        },
                    },
                },
            },
            seo: {
                populate: '*',
            },
        },
    })
    const url = new URL('/api/home', baseURL)
    url.search = query
    try {
        const response = await fetch(url.href)
        const { data } = await response.json()
        return flattenAttributes(data)
    } catch (error) {
        console.error(error)
    }
}
