import { theme } from '@/theme'

const { gray, primary } = theme.colors

export interface IIconProps {
    color?: string
    card?: boolean
    white?: boolean
    active?: boolean
    viewBox?: string
    disabled?: boolean
    selected?: boolean
    height?: number | string
    width?: number | string
    isTransparent?: boolean
}

export const getIconColor = ({ active = false, card = false }: IIconProps) => {
    if (card) {
        return gray[900]
    }

    if (active) {
        return primary.main
    }

    return gray[400]
}
