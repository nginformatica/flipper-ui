# CHANGELOG

## v0.39.3

- add specific icon `<IconFilePfx>`

## v0.39.2

- add props `className` and `responsive` to `<DataTableQueryPaginated>`
- adjust `customText` prop for `<NothingFound>` component to accept ReactNode

## v0.39.1

- adjust Date Calendar height and Pickers min-height based on amount of weeks

## v0.39.0

- update Node to 24.11.0 (LTS)

## v0.38.0

- update Node to 22.21.1 (LTS)

## v0.37.7

- add `<IconPictureAsPdf>` to mui icons

## v0.37.6

- add `<IconWebhook>` to mui icons

## v0.37.5

- apply sortable headers for specific table columns

## v0.37.4

- create CHANGELOG.md file
- adjust `<Actions />` component label props
- remove spread props from `<TableInteractive />` component

## v0.37.3

- add `<IconAddLink />` and `<IconRemoveLink />` to design system specific icons

## v0.37.2

- add props to table interactive
- add disabled prop to fab
- update general dependencies

## v0.37.1

- adjust `<TableInteractive />` props and styles
- add new design-system icon specific `<IconMicrosoftEntra />`

## v0.37.0

- create `<ViewMode />` component
- add new design-system icons, `<IconGridView />` and `<IconTableView />`

## v0.36.5

- fix reset preferences on confirm modal of table interactive

## v0.36.4

- reset preferences on confirm modal of table interactive

## v0.36.3

- add a reset button on the interactive table dialog to reset the original settings

## v0.36.2

- add `<IconExpand />` and `<IconVote />`
- update general dependencies

## v0.36.1

- create Interactive Table component
- add tests to new component and adjust coverage
- update general dependencies

## v0.36.0

- migrate `styled-components` to `@emotion/react`
- move `ramda` to devDependencies
- update dependencies

## v0.35.15

- add prop to adjust calendar popover from `<DateTime />` component

## v0.35.14

- apply eslint `react-hooks/rules-of-hooks`

## v0.35.13

- add new specific `<IconTrophy />`
- fix kebab-case attributes to camelCase

## v0.35.12

The following icons were added:

@mui icons:

- `<IconCircle />`
- `<IconNotifications />`

specific icons:

- `<IconCircleInner />`
- `<IconCircleReturn />`
- `<IconCircleRotate />`
- `<IconClockLate />`
- `<IconClockPending />`
- `<IconEngineer />`
- `<IconFireHydrant />`
- `<IconHumanResource />`
- `<IconImageRemove />`
- `<IconImageUpdate />`
- `<IconInventory />`
- `<IconLamp />`
- `<IconMandatesPartly />`
- `<IconNurse />`
- `<IconProcessing />`
- `<IconSecretary />`
- `<IconStorekeeper />`
- `<IconTechnician />`
- `<IconTriangleCircleDown />`
- `<IconTriangleCircleUp />`
- `<IconWaitingDelivery />`

## v0.35.11

- add `<IconLaunch />` and `<IconContentPaste />` to design-system icons

## v0.35.10

- add `<IconHeadset />` and `<IconBackHand />` to design-system icons

## v0.35.9

- remove icons `<g clip-path />` attribute;

Icons redacted:

- `<IconAccident />`
- `<IconActionPlans />`
- `<IconBrigades />`
- `<IconCalendarDay />`
- `<IconCalendarMonth />`
- `<IconCalendarWeek />`
- `<IconCircle />`
- `<IconEnvironmentalReports />`
- `<IconFirstSteps />`
- `<IconScheduleDashboardHour />`
- `<IconDoctor />`
- `<IconDownloadQRCode />`
- `<IconIPE />`
- `<IconMandates />`
- `<IconMedicalRecords />`
- `<IconReturn />`
- `<IconRotate />`

## v0.35.8

- adjust some icons props;
- add new icons: `<IconExams />` and `<IconFirstSteps />`

## v0.35.7

Add specific icons below:

- `<IconBelt />`
- `<IconBoot />`
- `<IconCoverall />`
- `<IconMask />`
- `<IconSafetyGlasses />`
- `<IconVest />`
- `<IconWeldingMask />`

## v0.35.6

- adjust `slotProps.popper` to render tooltip above calendar popover
- adjust tooltip props
- update dependencies

## v0.35.5

- initialize `<DataTable />` `data` prop as an empty array, in case there's no value availabe on the first moment
- replace the `useMemo` for the `useEffect` to set the rows variable, to avoid a `Maximum update depth exceeded` error
- update dependencies

## v0.35.4

- adjust `@mui` and `date-fns/locale` import paths to optimize bundle size
- update dependencies

## v0.35.3

- adjust typography stories to render all Typography component props
- refactor some typographys props
- update dependencies

## v0.35.2

Implement Design System icons:

- the `@mui` icons are exported from `flipper-ui/icons/mui`
- the `specific` icons are exported from `flipper-ui/icons/specific/IconName`

## v0.35.1

- move date-fns to devDependencies

## v0.35.0

- update eslint from `v8` to `v9`
- refact eslint config file to the new pattern
- general adjusts

## v0.34.9

- update `date-fns` from `v2` to `v4`

## v0.34.8

- refact components stories from CSF2 to CSF3
- replace `makeStyles` for the `sx` prop
- remove the `@mui/styles` dependency
- replace the `sprintf-js` function for the javascript `.replace()`
- remove the `sprintf-js` dependency
- update `storybook` from v7 to v8
- general components props adjusts

## v0.34.7

- add the new Design System color palette
- update general dependencies

## v0.34.6

- create a `<ChipField />` component, based on the `@mui` `<Autocomplete multiple />` component, with extra keys to add values to the input, as `comma, semicolon, space and enter`
- create tests for the new component
- update dependencies

## v0.34.5

- remove `<div>` from dialog content

## v0.34.4

- migrate `react-number-format` from v4 to v5
- v5 brings to separated components, insted of one general
- create and adjust tests for the migrated component
- update `@typescript-eslint` to v8, the `@typescript-eslint/ban-types` no longer exists
- update `ramda`
- update general dps patch versions

## v0.34.3

- create `<TableFooter />` and `<TablePagination />`  component
- create tests for the new components
- update dependencies patch versions

## v0.34.2

- dialog scroll
- dialog snippet position
- add DateTime component id on TextField
- update dependencies
- add __snapshots__ to .gitignore

## v0.34.1

- fix dialog scroll when set to paper

## v0.34.0

- migrate all the `@material-ui` components to the `@mui/material` package
- migrate the `<Autocomplete />` component from `@material-ui/lab` to `@mui/material`
- migrate the  `<KeyboardDatePicker />`, `<KeyboardTimePicker />` and `<KeyboardDateTimePicker />` components from the `@material-ui/pickers` to the new `@mui/x-date-pickers` package
- removed the `<ChipField />` component and the `material-ui-chip-input` package, from now on, to use a field with chips, it can be used directly from the `<Autocomplete multiple />` component
- removed the  `@material-ui/core`, `@material-ui/lab` and `@material-ui/pickers` packages

## v0.33.1

- downgrade yarn from `4.3.1` to `1.22.22`

## v0.33.0

- update yarn version to latest stable `(berry - 4.3.1)`
- update node version to latest stable `(hydrogen - 20.15.0)`
- adjust pipelines for the latest versions of node and yarn
- `yarn.lock` file was regenerated by yarn new version

## v0.32.0

- removed unused components
- moved the `experimental` components to the `core` components
- tests adjusts
- general components adjusts

## v0.31.7

- optimize imports and dependencies to reduce bundle size
- remove unused dependencies
- remove all exports from `@mui/icons-material` from `src/icons`, it was causing and excessive size of the package
- all icons imports are now made directly from `@mui/icons-material` , with `tree shaking` using the `babel-import-plugin`

## v0.31.6

- add key to table row
- adjust textfield character count position

## v0.31.5

- add a regex validation for emojis and remove them if typed on TextField component

## v0.31.4

- the tests for all the components were analysed
- tests were created for components that did not have tests
- all components have a snapshot, except the table components, because with each rendering, the class of the table material changes, thus always requiring a new snapshot

## v0.31.3

- remove navigator input tooltip
- resolve eslint warnings
- general code refact
- adjust release version

## v0.31.1

- add input characters counter

## v0.31.0

- created data-table field componet
- applied lint and prettier patterns

## v0.30.10

- fix help icon color

## v0.30.9

- remove nginformatica-styleguide dependency

## v0.30.8

- creation of the initial structure of the validation dialog, waiting for the product to complete the respective screens and mutations to adjust as needed
- migration of the content from the styleguide repository to flipper-ui, in order to centralize functionalities
- general refactorings and dependency updates

## v0.30.7

- update dependencies

## v0.30.6

- add export to interfaces to use it on Hermes Frontend

## v0.30.5

- rollback number format version

## v0.30.4

- add semicolons in input formatting
- from the test regarding the mask field
- update version flipper

## v0.30.3

- update libs

## v0.30.2

- upgrade libs

## v0.30.1

- fix the style of select options in the textfield

## v0.30.0

- add button border style
- add typography to combobox select labels

## v0.29.8

- replace border style

## v0.29.7

- add options in DataTable Row

## v0.29.6

Implements a new prop in TextField, the options.

- if you pass the options it will become a combobox.

## v0.29.5

- fix dialog: conditionally render title prop

## v0.29.4

- fix(experimental/card): fix add buton label not being showed

## v0.29.3

- configure module resolver to convert project aliases in normal imports and avoid path errors

## v0.29.2

- refactor(text-field): exported interface extending mui props making those props importable

## v0.29.1

- hotfix(select): onChange props with event instead of its target value

## v0.29.0

- update Storybook to v7

## v0.28.0

- feature: TDD

## v0.27.2

- frontend-core components migration

## v0.27.1

- fix experimental exports

## v0.27.0

- frontend-core components migration

## v0.26.23

- feat(steap-card): component image accepts jsx elements as well

## v0.26.22

- fix(pin-input): trim input on paste

## v0.26.21

- refactor(StepCardSkeleton): improvements on component

## v0.26.20

- refactor(StepCard): improve component code

## v0.26.19

- feat(StepCard): component can have fullWidth param

## v0.26.18

- refactor(StepCard): styled-components instead of css file and remove useCallbacks

## v0.26.17

- chore(StepCard): improve component and create skeleton

## v0.26.16

- feature: new Step Card Component

## v0.26.15

- feat(Checkbox): ensure checkbox can spread props when using switch variant

## v0.26.14

- feat(ExpansionPanel): editable variant

## v0.26.13

- feature: Datatable support hidden values variant

## v0.26.12

- fix: add history types

## v0.26.11

- chore: update lib dependencies versions

## v0.26.10

- refactor: export datetime type

## v0.26.9

- feature: ensure components can spread props

## v0.26.8

- fix: Avatar component with optional children

## v0.26.7

- components creation with new react syntax and React 18 upgrade

## v0.26.1

- refactor: change publish command

## v0.26.0

- NodeJS and core libs Update
- fix: incorrect package version

## v0.25.17

- refactor(DataTableQueryPaginated): change clickable validation to make it more logic

## v0.25.16

- chore/update edit table

## v0.25.15

- chore(EditableTable): validate if actions is undefined

## v0.25.14

- chore: export new datatable component

## v0.25.13

- feat/new paginated datatable

## v0.25.12

- remove numbers limit length in DataTable

## v0.25.11

- update: expose event on close mui dialog callbac

## v0.25.10

- fix: export new chapter component

## v0.25.9

- feat: create chapter component

## v0.25.8

- fix: Datatable style bug in datepick and components

## v0.25.7

- add prop name to DateTime

## v0.25.6

- fix: PinInput Zero Character

## v0.25.5

- expose onPaste prop on TextField

## v0.25.4

- update Pin Input component

## v0.25.3

- create Pin Input component

## v0.25.2

- add to TextField component option to show a clear button, allowing user to clear the input without having to manually setting it to an empty option

## v0.25.1

- add to Select component option to show a clear button, allowing user to clear the input without having to manually setting it to an empty option

## v0.25.0

- create a new component for DataTable, with pagination, controller and columns suporting text, number and datetime

## v0.24.13

- used the `material-table` error handling beside the custom error handler on numeric and date fields
- to use it, it's necessary add the field `validate` on the `columns` object and not pass the `errors` array to `EditableTable` component
- added a more specific example using that new approach

## v0.24.12

- pass a default `fontFamily` (Roboto) as `rowStyle` prop to `EditableTable` to avoid fonts inheritance issues

## v0.24.11

- altered the props onRowAddCancelled and onRowUpdateCancelled to optional in order to avoid errors/warns

## v0.24.10

- aligned the MaskField of the EditableTable component on the right with the column title
- moved the localization object to a function getLocalization, created a file for that function on the new lib directory

## v0.24.9

- updated the material-table dependency to the last version
- changes on data add/update of the `EditableTable` in order to keep the row opened if input errors happens
- added more use examples of `EditableTable` component

## v0.24.8

- pass only `id` and `name`attributes instead all the props to `Switch` and `CheckBox` material-ui components
- improve `CheckBox` examples

## v0.24.7

- add a specific `ExpansionPanelHeaderWrapper` on the `ExpansionPanel` component instead use the generic wrapper
- propagated the default `props` to the `CheckBox` component

## v0.24.5

- added the default helper button option on the `CheckBox` component (switch mode also). It's necessary to pass the `onHelperClick` as prop in the `CheckBox` for render it correctly
- added option that allow the positioning of the helper button on the `ExpansionPanel` component
- added some examples for these two cases above
- created the `HelperButton` component that can be used on all the fields in the future. For now, it's used only on `TextField`, `CheckBox` and `ExpansionPanel`

## v0.24.1

- use the correct type functions for `onDelete` and `OnAdd` props
- use 4 spaces identation instead 2
- changed the style pattern of `ChipField` to take the `TextField` component's sytle

## v0.24.0

- material-ui-chip-input dependency added
- ChipField component and his example created

## v0.23.1

- added disableAddHeader prop, to disable the Add button on table's header
- allowed the errors prop that receive a list of errors when the values of fields are changed

## v0.23.0

- remove AutocompleteNew
- export several types from autocomplete

## v0.22.23

- fixed some examples that crash application

## v0.22.21

- upgrade material-ui/core to 4.11.0

## v0.22.20

- update @babel dependecies

## v0.22.19

- MaskField on EditableTable component is accepting only integers

## v0.22.18

- was enabled the use of MaskField inside EditableTable
- allowed the onRowClick prop on EditableTable
- removed unecessary props
- updated the react-number-format and material-table dependency

## v0.22.17

- fixed renderInput method override
- separation of properties for better organization

## v0.22.16

- new Autocomplete component implemented to fix usability problems

## v0.22.15

- fixed the pagination tooltips when the `noExpandRows` is passed to the `EditableTable` component
- added verification to put a fixed size only when `noExpandRows` is active
- updated the Material-Table dependency to the last stable version

## v0.22.14

- fix the pagination components position at Editable Table

## v0.22.13

- fix the pagination div position

## v0.22.12

- allowed the use of `noRowsExpand` prop to don't show the select number of rows menu
- added a fixed size to the editable table body

## v0.22.10

- allowed passing of props to render the autocomplete at Editable Table component
- added example of use of autocomplete at editable table

## v0.22.9

- added name to inputs and buttons inside the EditableTable component
- added fontWeight style to text inside AddRow div

## v0.22.8

- fixed the problem with the toolbar actions in editable table

## v0.22.7

- changed the editable table header toolbar to take the flipper-ui pattern
- general fixes (fixed wrong characters, added title on component) on `EditableTable.mdx` example

## v0.22.6

- removed the default functions (add, remove and update data)
- added properties to not render pagination and toolbar components when is not necessary
- removed pointer cursor on hovering

## v0.22.5

- upgrade `material-ui/core` to `4.9.2`
- upgrade `material-ui/icons` to `4.9.1`
- upgrade `material-ui/lab` to `4.0.0-alpha.42`
- update types of the `lab/Autocomplete`

## v0.22.4

- added hook to watch the datastage is updated
- added the correct types to TCounterColumn type
- removed sort by Date on table update

## v0.22.3

- changed to the "default export" the EditableTable component export

## v0.22.2

- new component Breadcrumb
- remove default prop color from Badge and Chip

## v0.22.1

- Editable table

## v0.22.0

- add Autocomplete from material-ui/lab
- remove Charts
- upgrade material-ui/core to 4.7.x
- upgrade styled-components to 5.0.0
- upgrade docz to 1.3.x
- remove unused deps
