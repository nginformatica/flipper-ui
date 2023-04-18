import React from 'react'
import { mount } from 'cypress/react18'
import { DataTable } from '../../../src'
import { DataTableVariant } from '../types-interfaces-enums'
import { Generators } from '..'

export const DataTableFactory = (preset: DataTableVariant) => {
    const props = Generators.GenerateDataTableProps(preset)
    mount(<DataTable {...props} />)
}
