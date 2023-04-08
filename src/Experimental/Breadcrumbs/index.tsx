import React, { ReactNode } from 'react'
import { addIndex, map } from 'ramda'
import { ChevronRight as IconChevronRight } from '@/icons'
import { theme } from 'nginformatica-styleguide'
import styled from 'styled-components'
import { Typography, Breadcrumb } from '@/index'

const imap = addIndex(map)

const LinkStyled = styled.a({
    textDecoration: 'none',
    color: theme.colors.primary.main,
    ':hover': {
        textDecoration: 'underline'
    }
})

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
            <Typography key={link} color='inherit' style={{ display: 'flex' }}>
                {validChunkWord}
            </Typography>
        )

        const isLastChunk = chunkIndex === lastChunkIndex

        return validChunkWord && (isLastChunk ? text : linkWrapper(link, text))
    }, allChunks) as ReactNode[]

    return <Breadcrumb separator={<IconChevronRight />}>{links}</Breadcrumb>
}

export default Breadcrumbs
