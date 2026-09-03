import React from 'react'
import type { ReactNode } from 'react'
import type { IButtonProps } from '@/core/inputs/button'
import Button from '@/core/inputs/button'
import IconButton from '@/core/inputs/icon-button'
import { Wrapper } from './styles'

type TSize = 'small' | 'medium' | 'large'

interface ICustomActionBase {
    /** `name` attribute of the button, and the fallback for `data-testid`. */
    name?: string
    /**
     * Default: `'medium'` on a label action, `'small'` on an icon action.
     * The icon default is deliberate — a medium IconButton is 40px tall
     * against the 36.5px of a text Button, so it would drive the bar height.
     */
    size?: TSize
    /** Disables this button alone; `IActionsProps.disabled` disables all. */
    disabled?: boolean
    /** Overrides the `data-testid`, which otherwise mirrors `name`. */
    'data-testid'?: string
    /**
     * Overrides the button padding. Does not affect the gap between buttons.
     */
    padding?: number | string
    onClick(): void
}

/** A custom action rendered as a `Button`. Cannot carry an `icon`. */
export interface ILabelAction extends ICustomActionBase {
    icon?: never
    label: ReactNode
    'aria-label'?: string
    color?: IButtonProps['color']
    /** Default: `'text'`. Use `'contained'` to mark the primary action. */
    variant?: IButtonProps['variant']
}

/** A custom action rendered as an `IconButton`. Cannot carry a `label`. */
export interface IIconAction extends ICustomActionBase {
    label?: never
    /** Rendered as the only content, so the button has no text of its own. */
    icon: ReactNode
    /** Unavailable: `IconButton` has no variant. */
    variant?: never
    /** Required: an icon leaves the button with no accessible name (WCAG 4.1.2). */
    'aria-label': string
    color?: IButtonProps['color']
}

export type ICustomAction = ILabelAction | IIconAction

export interface IActionsProps {
    /** Margin of the action bar, not of the buttons. */
    margin?: number | string
    /** Padding of the action bar, not of the buttons. */
    padding?: number | string
    /**
     * Which of the default buttons to render; both when omitted.
     * Has no effect while `customActions` is informed, since the pair is
     * not rendered at all in that case.
     */
    buttons?: Array<'confirm' | 'cancel'>
    /** Horizontal position of the whole bar. Default: `'flex-end'`. */
    align?: 'flex-end' | 'flex-start' | 'center'
    /**
     * Color of the confirm button only — cancel stays neutral.
     * Default: `'secondary'`.
     */
    actionButtonColor?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
    /**
     * `name` attribute of the default buttons. Their `data-testid` stays
     * `cancel-action` / `confirm-action` regardless, so target tests by it.
     */
    names?: {
        cancel: string
        confirm: string
    }
    /**
     * Visible text of the default buttons.
     * Default: `'Cancelar'` / `'Confirmar'`.
     */
    labels?: {
        cancel: ReactNode
        confirm: ReactNode
    }
    /**
     * Extra buttons that **replace** the cancel/confirm pair — informing them
     * makes the bar be only these, in any quantity, mixing label and icon
     * actions freely. An empty array behaves as if not informed.
     */
    customActions?: ICustomAction[]
    /**
     * Size of the default buttons; custom actions carry their own.
     * Default: `'medium'`.
     */
    size?: TSize
    /** Accessible name of the `role="group"` around the bar. Default: `'Ações'`. */
    ariaLabel?: string
    /** Hides the confirm button and the custom actions — cancel still renders. */
    readonly?: boolean
    /** Disables every rendered button, custom actions included. */
    disabled?: boolean
    /** Disables the cancel button alone, on top of `disabled`. */
    disabledCancel?: boolean
    /** Disables the confirm button alone, on top of `disabled`. */
    disabledConfirm?: boolean
    /** Omitting it still renders the cancel button — with no handler attached. */
    onCancel?(): void | boolean
    /** Required even when `customActions` keeps the confirm button off the bar. */
    onConfirm(): void
}

const Actions = (props: IActionsProps) => {
    const hasCustomActions = !!props.customActions?.length

    const showButton =
        !hasCustomActions &&
        !props.readonly &&
        (!props.buttons || props.buttons.includes('confirm'))

    const showCancel =
        !hasCustomActions &&
        (!props.buttons || props.buttons.includes('cancel'))

    const renderCustomActions = () =>
        props.readonly
            ? null
            : props.customActions?.map((action, index) =>
                  action.icon ? (
                      <IconButton
                          name={action.name}
                          color={action.color}
                          key={action.name || index}
                          size={action.size || 'small'}
                          padding={action.padding || '4px'}
                          aria-label={action['aria-label']}
                          disabled={props.disabled || action.disabled}
                          data-testid={action['data-testid'] || action.name}
                          onClick={action.onClick}>
                          {action.icon}
                      </IconButton>
                  ) : (
                      <Button
                          name={action.name}
                          color={action.color}
                          padding={action.padding}
                          variant={action.variant}
                          key={action.name || index}
                          size={action.size || 'medium'}
                          aria-label={action['aria-label']}
                          disabled={props.disabled || action.disabled}
                          data-testid={action['data-testid'] || action.name}
                          onClick={action.onClick}>
                          {action.label}
                      </Button>
                  )
              )

    return (
        <Wrapper
            role='group'
            margin={props.margin}
            padding={props.padding}
            align={props.align || 'flex-end'}
            aria-label={props.ariaLabel || 'Ações'}>
            {renderCustomActions()}
            {showCancel && (
                <Button
                    data-testid='cancel-action'
                    size={props.size || 'medium'}
                    disabled={props.disabled || props.disabledCancel}
                    name={props.names ? props.names.cancel : 'cancel-action'}
                    onClick={props.onCancel}>
                    {props.labels ? props.labels.cancel : 'Cancelar'}
                </Button>
            )}
            {showButton && (
                <Button
                    variant='contained'
                    data-testid='confirm-action'
                    size={props.size || 'medium'}
                    color={props.actionButtonColor || 'secondary'}
                    disabled={props.disabled || props.disabledConfirm}
                    name={props.names ? props.names.confirm : 'confirm-action'}
                    onClick={props.onConfirm}>
                    {props.labels ? props.labels.confirm : 'Confirmar'}
                </Button>
            )}
        </Wrapper>
    )
}

export default Actions
