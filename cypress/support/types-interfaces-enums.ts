import type * as H from 'history'

export interface MemoryRouterProps {
    initialEntries?: H.LocationDescriptor[]
    initialIndex?: number
    getUserConfirmation?: (
        message: string,
        callback: (ok: boolean) => void
    ) => void
    keyLength?: number
}

export type MockTypes =
    | 'Name'
    | 'Word'
    | 'Words'
    | 'Letter'
    | 'Number'
    | 'Numbers'
    | 'JSXButton'
    | 'BoxParams'
    | 'ListOfWords'
    | 'Icon'
    | 'GenericStyleParams'
    | 'ListOfChips'
    | 'ListOfItens'
    | 'TableParams'

export type AvatarVariant = 'default' | 'primary' | 'with-children'

export type ButtonVariant =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'contained-primary'
    | 'contained-secondary'
    | 'outlined-primary'
    | 'outlined-secondary'
    | 'selected'
    | 'dashed-primary'
    | 'dashed-secondary'
    | 'add-icon'
    | 'small'
    | 'medium'
    | 'large'
    | 'disabled'

export type IconButtonVariant = 'default' | 'primary' | 'secondary' | 'disabled'

export type MaskFieldVariant = 'default' | 'with-input-adornment'

export type StepperVariant = 'default' | 'with-icon'

export type HeaderVariant = 'default' | 'primary' | 'secondary' | 'inherit'

export type ExpansionPanelVariant = 'default' | 'with-editable'

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'with-dot'

export type SelectVariant = 'default' | 'with-clear'

export type SnackbarVariant = 'default' | 'success' | 'warning' | 'error'

export type StepCardVariant = 'default' | 'without-expansion'

export type DataTableVariant =
    | 'default'
    | 'empty'
    | 'no-header'
    | 'no-pagination'
    | 'crud'

export type TypographyVariant =
    | 'default'
    | 'error-text'
    | 'primary'
    | 'secondary'
    | 'text-primary'
    | 'text-secondary'
    | 'button'
    | 'caption'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'

export type TextFieldVariant =
    | 'default'
    | 'with-adornment'
    | 'with-helper'
    | 'with-select'
    | 'with-select-clear'

export type SliderVariant =
    | 'default'
    | 'secondary'
    | 'ranged'
    | 'fixed-label'
    | 'with-marks'

export type CheckboxVariant =
    | 'default'
    | 'with-helper'
    | 'primary'
    | 'without-label'
    | 'switch'
    | 'switch-with-helper'

export type ChipVariant =
    | 'default'
    | 'squared'
    | 'with-avatar'
    | 'with-icon-avatar'
    | 'with-image-avatar'
    | 'secondary-color'

export type MockCats =
    | 'advertise-author'
    | 'advertise-comment'
    | 'avatar-children'
    | 'badge-counter'
    | 'badge-children'
    | 'box-children'
    | 'box-params'
    | 'breadcrumb-links'
    | 'button-params'
    | 'button-label'
    | 'card-params'
    | 'chapter-content'
    | 'checkbox-params'
    | 'chip-field-values'
    | 'collapse-content'
    | 'container-content'
    | 'container-style'
    | 'content-content'
    | 'content-style'
    | 'dialog-content'
    | 'drawer-content'
    | 'expansion-panel-content'
    | 'fade-content'
    | 'grow-content'
    | 'header-content'
    | 'paper-params'
    | 'slide-content'
    | 'stepper-steps-words'
    | 'paper-params'
    | 'table-params'
    | 'table-elements'
    | 'zoom-content'

export type SpyCats =
    | 'badge-children'
    | 'button-onclick'
    | 'card-top'
    | 'card-bottom'
    | 'checkbox-onchange'
    | 'checkbox-onHelper-click'
    | 'chip-field-on-add'
    | 'chip-field-on-delete'
    | 'expansion-panel-on-helper-click'
    | 'expansion-panel-on-confirm-click'
    | 'fab-onclick'
    | 'icon-button-onclick'
    | 'pagination-prev-onclick'
    | 'pagination-next-onclick'
    | 'pagination-navigation-onclick'
    | 'slider-percentage'
    | 'text-field-helper'
    | 'tooltip-onclose'
    | 'tooltip-onopen'

export type MockedTextFieldsProps = { label: string; value: string }[]

export enum MuiSelectors {
    BadgeDot = '.MuiBadge-dot',
    BtnBaseRoot = '.MuiButtonBase-root',
    BtnTextPrimary = 'MuiButton-textPrimary',
    BtnTextSecondary = 'MuiButton-textSecondary',
    BtnContainedPrimary = 'MuiButton-containedPrimary',
    BtnContainedSecondary = 'MuiButton-containedSecondary',
    BtnContained = 'MuiButton-contained',
    BtnOutlined = 'MuiButton-outlined',
    BtnOutlinedPrimary = 'MuiButton-outlinedPrimary',
    BtnOutlinedSecondary = 'MuiButton-outlinedSecondary',
    BtnSmall = 'MuiButton-sizeSmall',
    BtnLarge = 'MuiButton-sizeLarge',
    CheckboxSelected = 'Mui-checked',
    ChipRoot = '.MuiChip-root',
    ChipDeleteIcon = 'MuiChip-deleteIcon',
    ChipSquare = '.makeStyles-root-3',
    ChipRound = '.makeStyles-root-1',
    ChipAvatar = '.MuiAvatar-root',
    ChipSecondaryColor = '.MuiChip-colorSecondary',
    Button = '.MuiButton-root',
    CollapseHidden = '.MuiCollapse-hidden',
    CollapseVisible = '.MuiCollapse-entered',
    DialogContainer = '.MuiDialog-container',
    Divider = '.MuiDivider-root',
    Drawer = '.MuiDrawer-paper',
    ListItem = '.MuiListItem-root',
    ExpansionPanel = '.MuiExpansionPanelSummary-root',
    Icon = '.MuiIconButton-label',
    AppBarDefaultColor = '.MuiAppBar-colorDefault',
    AppBarPrimaryColor = '.MuiAppBar-colorPrimary',
    AppBarSecondaryColor = '.MuiAppBar-colorSecondary',
    AppBarInheritColor = '.MuiAppBar-colorInherit',
    Paper = '.MuiPaper-root',
    Error = '.Mui-error',
    SelectRoot = '.MuiSelect-root',
    AdornmentEnd = '.MuiInputAdornment-positionEnd',
    TextField = '.MuiTextField-root',
    PickersSlide = '.MuiPickersSlideTransition-transitionContainer',
    PickerDays = '.MuiPickersDay-day',
    PickerHiddenDays = '.MuiPickersDay-hidden',
    SliderThumb = '.MuiSlider-thumb',
    SliderPrimary = '.MuiSlider-colorPrimary',
    SliderSecondary = '.MuiSlider-colorSecondary',
    Snackbar = '.MuiSnackbarContent-root',
    SteelPlate = '.MuiStepLabel-horizontal',
    Disabled = 'Mui-disabled',
    Selected = '.Mui-selected',
    Typography = '.MuiTypography-root',
    SelectInput = '.MuiSelect-nativeInput',
    SelectPagination = '.MuiTablePagination-caption',
    TableFooter = '.MuiTableFooter-root',
    TableRow = '.MuiTableRow-root',
    TableHeader = '.MuiTableHead-root'
}

export enum MuiTypographySelectors {
    Body1 = 'MuiTypography-body1',
    Body2 = 'MuiTypography-body2',
    ColorError = 'MuiTypography-colorError',
    ColorPrimary = 'MuiTypography-colorPrimary',
    ColorSecondary = 'MuiTypography-colorSecondary',
    ColorTextPrimary = 'MuiTypography-colorTextPrimary',
    ColorTextSecondary = 'MuiTypography-colorTextSecondary',
    Button = 'MuiTypography-button',
    Caption = 'MuiTypography-caption',
    Subtitle1 = 'MuiTypography-subtitle1',
    Subtitle2 = 'MuiTypography-subtitle2',
    H1 = 'MuiTypography-h1',
    H2 = 'MuiTypography-h2',
    H3 = 'MuiTypography-h3',
    H4 = 'MuiTypography-h4',
    H5 = 'MuiTypography-h5',
    H6 = 'MuiTypography-h6'
}

export type TMockOptions = {
    max?: number
    min?: number
    length?: number
    onClick?: () => void
}

export interface GenerateMockProps {
    value: MockCats
    type: MockTypes
    options?: TMockOptions
}

export interface GenerateMockListProps {
    value: MockCats
    type: MockTypes[]
    options?: TMockOptions
}

export type TAlias = {
    original: string
    alias: string
}
