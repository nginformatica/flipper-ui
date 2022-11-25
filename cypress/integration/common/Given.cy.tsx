import { Given } from 'cypress-cucumber-preprocessor/steps'
import {
    AdvertiseFactory,
    AvatarFactory,
    BadgeFactory,
    BoxFactory,
    BreadcrumbFactory
} from '../../support/factories'
import {
    AvatarVariant,
    BadgeVariant
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
