import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import React, { ReactNode, MouseEvent } from 'react'
import styled from 'styled-components'
import { PaperProps } from './Paper'
import { EditBox, HelperBox } from './TextField'
import { HTMLElementWithDataCy } from './types'

export interface ExpansionPanelProps extends PaperProps {
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
    editStyle?: React.CSSProperties
    headerProps?: HTMLElementWithDataCy<HTMLDivElement>
    helperIcon?: React.ReactNode
    editable?: boolean
    editing?: boolean
    helperButtonPosition?: 'left' | 'right'
    onHelperClick?: () => void
    onEditClick?: () => void
    onSaveClick?: () => void
    onChange?: (
        event?: React.ChangeEvent<Record<string, unknown>>,
        expanded?: boolean
    ) => void
}

const ExpansionPanelHeaderWrapper = styled.div`
    display: flex;
    flex-direction: rows;
    align-items: center;
    button {
        display: none;
    }
    :hover button {
        display: flex;
    }
`

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
    editStyle,
    onHelperClick,
    onEditClick,
    onSaveClick,
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

    const renderEdit = (
        <>
            {editable && (
                <EditBox
                    editing={!!editing}
                    style={editStyle}
                    onEditClick={handleEditClick}
                    onSaveClick={handleSaveClick}
                    saveButtonProps={{ 'data-cy': 'save-button' }}
                    editButtonProps={{ 'data-cy': 'edit-button' }}
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
                    expandIcon={expandIcon}
                    style={summaryStyle}>
                    <ExpansionPanelHeaderWrapper {...headerProps}>
                        {helperButtonPosition === 'left' && renderHelper}
                        {summary}
                        {renderEdit}
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
