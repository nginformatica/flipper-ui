import { PaginationProps } from '../../../../src/core/Pagination'

interface IProps {
    onNextPageClick: () => void
    onPreviousPageClick: () => void
    onNavigate: (page: number) => void
}
export const generatePaginationProps = (props: IProps): PaginationProps => {
    const defaultProps = {
        pages: 5,
        active: 3,
        onNext: props.onNextPageClick,
        onPrevious: props.onPreviousPageClick,
        onNavigate: props.onNavigate
    }

    return defaultProps
}
