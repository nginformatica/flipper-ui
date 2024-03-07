import React from 'react'
import type { ReactNode } from 'react'
import { addIndex, map } from 'ramda'
import { Breadcrumb } from '@/index'
import { LinkStyled, TextTypography } from './styles'
import { ChevronRight as IconChevronRight } from '@/icons'

const imap = addIndex(map)

const INDEX_CORRECTION = 1
const START = 1

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

/**
 * Render breadcrumbs for the provided pathname or the current
 * `window.location.pathname`.
 */
const Breadcrumbs = ({
    pathname,
    homeId,
    pathMapping,
    linkWrapper = defaultLinkWrapper
}: Props) => {
    const path = pathname || window.location.pathname
    const validChunks = path.split('/').filter(term => term in pathMapping)
    const allChunks = [homeId, ...validChunks]
    const lastChunkIndex = allChunks.length - INDEX_CORRECTION

    const links = imap((term: string, chunkIndex) => {
        const validChunkWord = pathMapping[term]

        const link =
            '/' +
            allChunks.slice(START, chunkIndex + INDEX_CORRECTION).join('/')

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
