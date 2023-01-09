import React from 'react'
import { mount } from 'cypress/react18'
import { Chapter } from '../../../src'
import { generateTypedMock } from '../component'

export const ChapterFactory = () => {
    generateTypedMock<string>({ value: 'chapter-content', type: 'Word' }).then(
        mockedWord => {
            mount(<Chapter data-cy='chapter-container'>{mockedWord}</Chapter>)
        }
    )
}
