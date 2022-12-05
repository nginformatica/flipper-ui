import React from 'react'
import { mount } from 'cypress/react'
import { Chapter } from '../../../src'
import { generateMock } from '../component'

export const ChapterFactory = () => {
    generateMock({ value: 'chapter-content', type: 'Word' }).then(
        mockedWord => {
            mount(<Chapter>{mockedWord}</Chapter>)
        }
    )
}
