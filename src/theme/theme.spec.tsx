import React from 'react'
import MuiTable from '@mui/material/Table'
import MuiTableCell from '@mui/material/TableCell'
import MuiTableHead from '@mui/material/TableHead'
import MuiTableRow from '@mui/material/TableRow'
import { render } from '@testing-library/react'
import { muiThemeOptions } from './theme'
import ThemeProviderFlipper from './ThemeProvider'

describe('muiThemeOptions', () => {
    it('should paint the sticky head cell white instead of background.default', () => {
        const { container } = render(
            <ThemeProviderFlipper options={muiThemeOptions}>
                <MuiTable stickyHeader>
                    <MuiTableHead>
                        <MuiTableRow>
                            <MuiTableCell>Head</MuiTableCell>
                        </MuiTableRow>
                    </MuiTableHead>
                </MuiTable>
            </ThemeProviderFlipper>
        )
        const cell = container.querySelector('th') as HTMLElement

        expect(getComputedStyle(cell).backgroundColor).toBe(
            'rgb(255, 255, 255)'
        )
    })
})
