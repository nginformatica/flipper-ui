import { Delete } from '@material-ui/icons'
import { Given } from 'cypress-cucumber-preprocessor/steps'
import { ifElse } from 'ramda'
import React from 'react'
import { Factory } from '../../support'
import { generateMockList } from '../../support/component'
import {
    AvatarVariant,
    BadgeVariant,
    ButtonVariant,
    CheckboxVariant,
    ChipVariant,
    HeaderVariant,
    IconButtonVariant,
    MaskFieldVariant,
    SelectVariant,
    SliderVariant,
    SnackbarVariant,
    StepperVariant
} from '../../support/types-interfaces-enums'
import { validator } from '../../support/utils'

Given('I render Advertise', () => Factory.AdvertiseFactory())

Given('I render Avatar with {string} preset', (preset: AvatarVariant) =>
    Factory.AvatarFactory(preset)
)

Given('I render Badge with {string} preset', (preset: BadgeVariant) =>
    Factory.BadgeFactory(preset)
)

Given('I render Box', () => Factory.BoxFactory())

Given('I render Breadcrumb', () => Factory.BreadcrumbFactory())

Given('I render Button with {string} preset', (preset: ButtonVariant) =>
    Factory.ButtonFactory(preset)
)

Given('I render Button with Icon', (preset: ButtonVariant) =>
    Factory.ButtonFactory(preset, 'Icon')
)

Given('I render Card', () => Factory.CardFactory())

Given('I render Chapter', () => Factory.ChapterFactory())

Given('I render Checkbox with {string} preset', (preset: CheckboxVariant) =>
    Factory.CheckboxFactory(preset)
)

Given('I render Chip with {string} preset', (preset: ChipVariant) =>
    Factory.ChipFactory(preset)
)

Given('I render ChipField', () => Factory.ChipFieldFactory())

Given('I render Collapse', () => Factory.CollapseFactory())

Given('I render Container', () => Factory.ContainerFactory())

Given('I render Content', () => Factory.ContentFactory())

Given('I render Dialog', () => Factory.DialogFactory())

Given('I render Divider', () => Factory.DividerFactory())

Given('I render Drawer', () => Factory.DrawerFactory())

Given('I render ExpansionPanel', () => Factory.ExpansionPanelFactory())

Given('I render Fab', () => Factory.FabFactory())

Given('I render Fade', () => Factory.FadeFactory())

Given('I render Grow', () => Factory.GrowFactory())

Given('I render Header with {string} preset', (preset: HeaderVariant) =>
    Factory.HeaderFactory(preset)
)

Given('I render IconButton with {string} preset', (preset: IconButtonVariant) =>
    Factory.IconButtonFactory(preset)
)

Given('I render List', () => Factory.ListFactory())

Given('I render MaskField with {string} preset', (preset: MaskFieldVariant) =>
    Factory.MaskFieldFactory(preset)
)

Given('I render Menu', () => Factory.MenuFactory())

Given('I render Node', () => Factory.NodeFactory())

Given('I render Pagination', () => Factory.PaginationFactory())

Given('I render Paper', () => Factory.PaperFactory())

Given('I render PinInput', () => Factory.PinInputFactory())

Given('I render RadioGroup', () => Factory.RadioGroupFactory())

Given('I render Select with {string} preset', (preset: SelectVariant) =>
    Factory.SelectFactory(preset)
)
Given('I render Sidebar', () => Factory.SidebarFactory())

Given('I render Slide', () => Factory.SlideFactory())

Given('I render Slider with {string} preset', (preset: SliderVariant) => {
    Factory.SliderFactory(preset)
})

Given('I render Snackbar with {string} preset', (preset: SnackbarVariant) => {
    Factory.SnackbarFactory(preset)
})
Given('I render Stepper with {string} preset', (preset: StepperVariant) => {
    const validate = (variant: StepperVariant) =>
        validator<StepperVariant>(variant)

    const renderWithList = (preset: StepperVariant) => {
        generateMockList({
            value: 'stepper-steps-words',
            type: ['Word', 'Word', 'Word', 'Word']
        }).then(mockedWords =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            Factory.StepperFactory(preset, mockedWords)
        )
    }

    const renderWithObj = () => {
        const steps = [{ label: 'Name', icon: <Delete /> }]
        Factory.StepperFactory(preset, steps)
    }

    ifElse(
        validate('with-icon'),
        () => renderWithObj(),
        () => renderWithList(preset)
    )(preset)
})
