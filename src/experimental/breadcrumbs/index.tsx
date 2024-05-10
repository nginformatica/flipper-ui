import React from 'react'
import type { ReactNode } from 'react'
import { ChevronRight as IconChevronRight } from '@mui/icons-material'
import { addIndex, map } from 'ramda'
import { Breadcrumb } from '@/index'
import { LinkStyled, TextTypography } from './styles'

const imap = addIndex(map)

type Props = {
    /**
     * A mapping between the pathname and the friendly name
     * eg: { "*": "Home", "foo": "Bar" }
     */
    pathMapping: Record<string, string>
    /** The Home ID (eg: '*'), must be a key of `pathMapping` */
    homeId: string
    /** The pathname to render breadcrumbs (default: window.location.pathname)*/
    pathname?: string
    linkWrapper?: (link: string, label: ReactNode) => ReactNode
}

const defaultLinkWrapper = (link: string, label: string) => (
    <LinkStyled key={link} href={link}>
        {label}
    </LinkStyled>
)

const Breadcrumbs = ({
    pathname,
    homeId,
    pathMapping,
    linkWrapper = defaultLinkWrapper
}: Props) => {
    const path = pathname || window.location.pathname
    const validChunks = path.split('/').filter(term => term in pathMapping)
    const allChunks = [homeId, ...validChunks]
    const lastChunkIndex = allChunks.length - 1

    const links = imap((term: string, chunkIndex) => {
        const validChunkWord = pathMapping[term]

        const link = '/' + allChunks.slice(1, chunkIndex + 1).join('/')

        const text = (
            <TextTypography key={link} color='inherit'>
                {validChunkWord}
            </TextTypography>
        )

        const isLastChunk = chunkIndex === lastChunkIndex

        return validChunkWord && (isLastChunk ? text : linkWrapper(link, text))
    }, allChunks) as ReactNode[]

    return <Breadcrumb separator={<IconChevronRight />}>{links}</Breadcrumb>
}

export default Breadcrumbs
