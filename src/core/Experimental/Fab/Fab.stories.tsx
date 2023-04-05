import React from 'react'
import FabV2 from './Fab'
import FabWrapper from './FabWrapper'
import FileCopyIcon from '@material-ui/icons/FileCopy'

export const fab = () => (
    <FabV2 name='copy' tooltip='Copy file' onClick={() => alert('fab click')}>
        {<FileCopyIcon />}
    </FabV2>
)

export default {
    title: 'V2/Fab',
    component: FabV2,
    subcomponents: {
        FabWrapper
    }
}
