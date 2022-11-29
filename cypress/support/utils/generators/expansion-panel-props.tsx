import React from 'react'
import { Button, Typography } from '../../../../src'
import ExpandMore from '@material-ui/icons/ExpandMore'

interface IProps {
    onHelperClick: () => void
    onConfirmClick: () => void
    summary: string
    detailsBody: string
    detailsFooter: string
}
export const generateExpansionPanelProps = (props: IProps) => {
    const defaultProps = {
        summary: props.summary,
        onHelperClick: props.onHelperClick,
        expandIcon: <ExpandMore />,
        actions: (
            <Button color='primary' onClick={props.onConfirmClick}>
                Confirm
            </Button>
        ),
        details: (
            <div>
                <Typography gutterBottom>{props.detailsBody}</Typography>
                <Typography variant='caption'>{props.detailsFooter}</Typography>
            </div>
        )
    }

    return defaultProps
}
