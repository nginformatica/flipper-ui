import { Given } from 'cypress-cucumber-preprocessor/steps'
import { Factory } from '../../support'
import {
    AvatarVariant,
    BadgeVariant,
    ButtonVariant,
    CheckboxVariant,
    ChipVariant,
    HeaderVariant,
    IconButtonVariant
} from '../../support/types-interfaces-enums'

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
