import React from 'react'
import type {
    ReactNode,
    MouseEvent,
    CSSProperties,
    HTMLAttributes,
    ChangeEvent,
    SyntheticEvent
} from 'react'
import { Edit, KeyboardArrowUp, Save } from '@mui/icons-material'
import MuiExpansionPanel from '@mui/material/Accordion'
import MuiExpansionPanelActions from '@mui/material/AccordionActions'
import MuiExpansionPanelDetails from '@mui/material/AccordionDetails'
import MuiExpansionPanelSummary from '@mui/material/AccordionSummary'
import type { IPaperProps } from '@/core/surfaces/paper'
import IconButton from '@/core/inputs/icon-button'
import { HelperBox } from '@/core/inputs/text-field'
import { ExpansionPanelHeaderWrapper } from './styles'

export interface ExpansionPanelProps extends Omit<IPaperProps, 'onChange'> {
    actions?: ReactNode
    defaultExpanded?: boolean
    details?: ReactNode
    disabled?: boolean
    expandIcon?: ReactNode
    expanded?: boolean
    summary?: ReactNode
    summaryStyle?: object
    detailsStyle?: object
    actionsStyle?: object
    editStyle?: CSSProperties
    headerProps?: HTMLAttributes<HTMLDivElement>
    helperIcon?: ReactNode
    editable?: boolean
    editing?: boolean
    role?: string
    helperButtonPosition?: 'left' | 'right'
    onHelperClick?: () => void
    onEditClick?: () => void
    onSaveClick?: () => void
    onChange?: (
        event?:
            | ChangeEvent<Record<string, unknown>>
            | SyntheticEvent<Element, Event>,
        expanded?: boolean
    ) => void
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

const ExpansionPanel = ({
    actions,
    details,
    expandIcon,
    margin,
    padding,
    style,
    summary,
    summaryStyle,
    detailsStyle,
    actionsStyle,
    onHelperClick,
    onEditClick,
    onSaveClick,
    onClick,
    helperIcon,
    editable,
    editing,
    headerProps,
    helperButtonPosition = 'right',
    ...otherProps
}: ExpansionPanelProps) => {
    if (editable) {
        if (!onSaveClick) {
            throw new Error('onSaveClick is required when editable is true')
        }

        if (!onEditClick) {
            throw new Error('onEditClick is required when editable is true')
        }
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onHelperClick) {
            event.stopPropagation()
            onHelperClick()
        }
    }

    const handleEditClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onEditClick) {
            event.stopPropagation()
            onEditClick()
        }
    }

    const handleSaveClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onSaveClick) {
            event.stopPropagation()
            onSaveClick()
        }
    }

    const renderHelper = (
        <>
            {onHelperClick && (
                <HelperBox
                    helperIcon={helperIcon}
                    onHelperClick={handleClick}
                />
            )}
        </>
    )

    return (
        <MuiExpansionPanel
            {...otherProps}
            style={{ margin, padding, ...style }}>
            {summary && (
                <MuiExpansionPanelSummary
                    expandIcon={expandIcon || <KeyboardArrowUp />}
                    style={summaryStyle}
                    onClick={onClick}>
                    <ExpansionPanelHeaderWrapper {...headerProps}>
                        {helperButtonPosition === 'left' && renderHelper}
                        {summary}
                        {editable && (
                            <div role='edit-box'>
                                {editing ? (
                                    <IconButton
                                        role='save-button'
                                        padding='6px 2px'
                                        onClick={handleSaveClick}>
                                        {<Save fontSize='small' />}
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        role='save-button'
                                        padding='6px 2px'
                                        onClick={handleEditClick}>
                                        {<Edit fontSize='small' />}
                                    </IconButton>
                                )}
                            </div>
                        )}
                        {helperButtonPosition === 'right' && renderHelper}
                    </ExpansionPanelHeaderWrapper>
                </MuiExpansionPanelSummary>
            )}
            {details && (
                <MuiExpansionPanelDetails style={detailsStyle}>
                    {details}
                </MuiExpansionPanelDetails>
            )}
            {actions && (
                <MuiExpansionPanelActions style={actionsStyle}>
                    {actions}
                </MuiExpansionPanelActions>
            )}
        </MuiExpansionPanel>
    )
}

export default ExpansionPanel
