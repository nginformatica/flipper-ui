import { Given } from 'cypress-cucumber-preprocessor/steps'
import {
    AdvertiseFactory,
    AvatarFactory,
    BadgeFactory,
    BoxFactory,
    BreadcrumbFactory,
    ButtonFactory,
    CardFactory,
    ChapterFactory,
    CheckboxFactory
} from '../../support/factories'
import {
    AvatarVariant,
    BadgeVariant,
    ButtonVariant,
    CheckboxVariant
} from '../../support/types-interfaces-enums'

Given('I render Advertise', () => AdvertiseFactory())

Given('I render Avatar with {string} preset', (preset: AvatarVariant) =>
    AvatarFactory(preset)
)

Given('I render Badge with {string} preset', (preset: BadgeVariant) =>
    BadgeFactory(preset)
)

Given('I render Box', () => BoxFactory())

Given('I render Breadcrumb', () => BreadcrumbFactory())

Given('I render Button with {string} preset', (preset: ButtonVariant) =>
    ButtonFactory(preset)
)

Given('I render Button with Icon', (preset: ButtonVariant) =>
    ButtonFactory(preset, 'Icon')
)

Given('I render Card', () => CardFactory())

Given('I render Chapter', () => ChapterFactory())

Given('I render Checkbox with {string} preset', (preset: CheckboxVariant) =>
    CheckboxFactory(preset)
)
