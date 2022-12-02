/* eslint-disable max-lines */
import { ButtonProps } from '@material-ui/core'
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { pick } from 'ramda'
import {
    MockCats,
    MuiSelectors,
    SpyCats
} from '../../support/types-interfaces-enums'
import { Conversor, Aliases } from '../../support/utils'

Then('I should see {string}', (text: string) =>
    cy.waitUntil(() => cy.contains(text).should('exist'))
)

Then('I expect {string} mock to exist', (mockName: MockCats) => {
    cy.getMock(mockName).then(mock => {
        if (mock instanceof Array) {
            mock.forEach(el => {
                const element: string = el.toString()
                cy.waitUntil(() => cy.contains(element).should('exist'))
            })
        } else {
            const element: string = mock.toString()
            cy.waitUntil(() => cy.contains(element).should('exist'))
        }
    })
})

Then('I expect element {string} to be visible', (id: string) => {
    cy.get(`[id="${id}"]`).should('be.visible')
})

Then('I expect element {string} to be hidden', (id: string) => {
    cy.get(`[id="${id}"]`).should('not.visible')
})

Then('I should see {int} {string}', (quantity: number, element: string) => {
    cy.get(element).then(elements => {
        expect(elements.length).to.equal(quantity)
    })
})

Then('I should not see any {string}', (element: string) => {
    cy.get(element).should('not.exist')
})

Then(
    'I expect {string} spy to have been called {int} times',
    (spyName: SpyCats, quantity: number) => {
        cy.getSpy(spyName).should('have.been.called', quantity)
    }
)

Then(
    'I expect {string} spy to have been called with {string}',
    (spyName: SpyCats, value: string) => {
        cy.getSpy(spyName).should('always.have.been.calledWith', value)
    }
)

Then('I should see {int} BadgeDot', (quantity: number) =>
    cy.get(MuiSelectors.BadgeDot).then(elements => {
        expect(elements).to.length(quantity)
    })
)

Then(
    'I expect generic {string} component props and style to match with mock',
    (mockCat: MockCats) => {
        cy.getMock(mockCat).then(mock => {
            const props = pick(['name', 'id'], mock)
            const styles = pick(['padding', 'margin'], mock)
            for (const prop in props) {
                cy.get('[id="generic-testing-id"]')
                    .first()
                    .should('have.attr', prop)
            }
            for (const style in styles) {
                const List: Record<string, string> = styles
                const styleValue = List[style]
                cy.get('[id="generic-testing-id"]')
                    .first()
                    .should('have.css', style, `${styleValue}px`)
            }
        })
    }
)

Then('I expect Breadcrumb links to match with mock', () => {
    cy.getMock('breadcrumb-links').then(mockedList => {
        cy.get('a').then(elements => {
            elements.each((i, el) => {
                expect(el.getAttribute('href')).to.equal(
                    `route-${mockedList[i]}`
                )
                expect(el.innerText).to.equal(mockedList[i])
            })
        })
    })
})

Then('I expect Button label to match with mock', () => {
    cy.getMock('button-label').then(mockedLabel => {
        cy.get('[id="button-test"]')
            .first()
            .then(button => expect(button[0].textContent).to.equal(mockedLabel))
    })
})

Then('I expect button {string} to be disabled', (id: string) => {
    cy.get(`button[id=${id}]`).first().should('be.disabled')
})

Then(
    'I expect button {string} to have color {string}',
    (id: string, color: ButtonProps['color']) => {
        cy.get(`button[id=${id}]`)
            .first()
            .then(btn => {
                const list = Aliases.colorMapValues.get(color) ?? []
                const hasClass = list.some(val => btn.hasClass(val))
                expect(hasClass).equal(true)
            })
    }
)

Then(
    'I expect button {string} to have variant {string}',
    (id: string, variant: ButtonProps['variant']) => {
        cy.get(`button[id=${id}]`)
            .first()
            .then(btn => {
                const list = Aliases.variantMapValues.get(variant) ?? []
                const hasClass = list.some(val => btn.hasClass(val))
                expect(hasClass).equal(true)
            })
    }
)

Then(
    'I expect button {string} to have attr {string} with value {string}',
    (id: string, attr: string, value: string) => {
        cy.get(`button[id=${id}]`).first().should('have.attr', attr, value)
    }
)

Then(
    'I expect button {string} to have size {string}',
    (id: string, size: ButtonProps['size']) => {
        Aliases.sizeMapValues.get(size)
        cy.get(`button[id=${id}]`)
            .first()
            .should('have.class', Aliases.sizeMapValues.get(size))
    }
)

Then('I expect checkbox to be checked', () => {
    cy.get(MuiSelectors.BtnBaseRoot)
        .first()
        .then(checkbox => {
            expect(checkbox.hasClass(MuiSelectors.CheckboxSelected)).to.be.true
        })
})

Then('I expect checkbox to be unchecked', () => {
    cy.get(MuiSelectors.BtnBaseRoot)
        .first()
        .then(checkbox => {
            expect(checkbox.hasClass(MuiSelectors.CheckboxSelected)).to.be.false
        })
})

Then('I expect chip to exist', () => {
    cy.get(MuiSelectors.ChipRoot).should('exist')
})

Then('I expect to see delete icon from chip', () => {
    cy.get(MuiSelectors.ChipRoot)
        .first()
        .then(el => {
            const hasClass = el
                .find('svg')
                .hasClass(MuiSelectors.ChipDeleteIcon)

            expect(hasClass).to.be.true
        })
})

Then('I expect chip to be rounded', () => {
    cy.get(MuiSelectors.ChipRound).should('not.exist')
})

Then('I expect chip to be square', () => {
    cy.get(MuiSelectors.ChipSquare).should('exist')
})

Then('I expect chip to have avatar', () => {
    cy.get(MuiSelectors.ChipAvatar).should('exist')
})

Then('I expect chip to not have avatar', () => {
    cy.get(MuiSelectors.ChipAvatar).should('not.exist')
})

Then('I expect chip to have color secondary', () => {
    cy.get(MuiSelectors.ChipSecondaryColor).should('exist')
})

Then('I expect chip to not have color secondary', () => {
    cy.get(MuiSelectors.ChipSecondaryColor).should('not.exist')
})

Then('I expect {string} mock size match with chip itens', (mock: MockCats) => {
    cy.getMock(mock).then(mockedList => {
        cy.get(MuiSelectors.ChipRoot).then(elements => {
            expect(elements.length).to.eq(mockedList.length)
        })
    })
})

Then(
    // eslint-disable-next-line max-len
    'I expect spy {string} to have been called with mocked {string} values at {int} pos',
    (spy: SpyCats, mock: MockCats, pos: number) => {
        cy.getMock(mock).then(mockedList => {
            cy.getSpy(spy).should(
                'always.have.been.calledWith',
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                mockedList[pos].value
            )
        })
    }
)

Then('I should see mocked {string} value on screen', (mock: MockCats) => {
    cy.getMock(mock).then(mockedText => {
        cy.waitUntil(() =>
            cy.contains(mockedText as unknown as string).should('exist')
        )
    })
})

Then('I expect Collapse to be visible', () => {
    cy.get(MuiSelectors.CollapseVisible).should('exist')
    cy.get(MuiSelectors.CollapseHidden).should('not.exist')
})

Then('I expect Collapse to be hidden', () => {
    cy.get(MuiSelectors.CollapseHidden).should('exist')
    cy.get(MuiSelectors.CollapseVisible).should('not.exist')
})

Then('I expect to see an Mui Dialog', () => {
    cy.get(MuiSelectors.DialogContainer).should('exist')
})

Then('I do not expect to see an Mui Dialog', () => {
    cy.get(MuiSelectors.DialogContainer).should('not.exist')
})

Then('I expect to see one divider', () => {
    cy.get(MuiSelectors.Divider).should('exist')
})

Then('I expect to see an Mui Drawer', () => {
    cy.get(MuiSelectors.Drawer).should('exist')
})

Then('I do not expect to see an Mui Drawer', () => {
    cy.get(MuiSelectors.Drawer).should('not.exist')
})

Then('I expect drawer to match mock {string} size', (mock: MockCats) => {
    cy.getMock(mock).then(mockedList => {
        if (mockedList instanceof Array) {
            cy.get(MuiSelectors.ListItem).should(
                'have.length',
                mockedList.length
            )
        }
    })
})

Then('I expect header to have Mui {string} class', (mock: string) => {
    const index = Object.keys(MuiSelectors).indexOf(mock)
    const selector = Object.values(MuiSelectors)[index]

    cy.get(selector).should('exist')
})

Then('I expect all spies to have been called on the list', () => {
    cy.get('@list-of-spied-items-length').then(length => {
        const value = Number(length)

        for (let i = 0; i < value; i++) {
            cy.get(`@generic-spy-${i}`).should('have.been.called', 1)
        }
    })
})

Then('I expect input to have placeholder {string}', (text: string) => {
    cy.get('input').first().invoke('prop', 'placeholder').should('equal', text)
})

Then('I expect input to be empty', () => {
    cy.get('input').first().should('have.value', '')
})

Then('I expect input not to be empty', () => {
    cy.get('input')
        .first()
        .invoke('prop', 'value')
        .should('have.length.above', 0)
})

Then('I expect input to have value {string}', (value: string) => {
    cy.get('input').first().should('have.value', value)
})

Then('I expect to see Mui Menu', () => {
    cy.get(MuiSelectors.Paper).should('exist')
})
Then('I do not expect to see Mui Menu', () => {
    cy.get(MuiSelectors.Paper).should('not.exist')
})

Then('I expect to see all Node names from mocked values', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.get('@node-schema').then(({ names }) => {
        const list: string[] = names

        list.forEach(name => {
            cy.waitUntil(() => cy.contains(name).should('exist'))
        })
    })
})

Then(
    'I expect spy {string} to have been called with {int}',
    (spy: SpyCats, value: number) => {
        cy.getSpy(spy).should('have.been.calledWith', value)
    }
)

Then('I expect first input to be focussed', () => {
    cy.get('input').first().should('be.focused')
})

Then('I expect all inputs to have errors', () => {
    cy.get('.pin-input-field').each(input => {
        const el = input.find(MuiSelectors.Error)
        expect(el).to.have.length(1)
        expect(el).to.have.class('Mui-error')
    })
})

Then('I expect success when click to validate input', () => {
    cy.get('button').first().click()
    cy.on('window:alert', txt => {
        expect(txt).to.contains('PIN is correct')
    })
})

Then('I expect {int}th option to be checked', (pos: number) => {
    cy.get('[name=options]')
        .eq(pos - 1)
        .should('be.checked')
})

Then('I expect {int}th option to be unchecked', (pos: number) => {
    cy.get('[name=options]')
        .eq(pos - 1)
        .should('not.be.checked')
})

Then('I should see all mocker options', () => {
    cy.get('@list-of-spied-items-length').then(mockedLength => {
        const length = Number(mockedLength)
        for (let i = 0; i < length; i++) {
            cy.waitUntil(() => cy.contains(`Option ${i}`).should('exist'))
        }
    })
})

Then('I expect all options spies to have been called', () => {
    cy.get('@list-of-spied-items-length').then(mockedLength => {
        const length = Number(mockedLength)
        for (let i = 0; i < length; i++) {
            cy.get(`@generic-spy-${i}`).should('have.been.called')
        }
    })
})

Then('I expect slider to have primary color', () => {
    cy.get(MuiSelectors.SliderPrimary).should('exist')
    cy.get(MuiSelectors.SliderSecondary).should('not.exist')
})

Then('I expect slider to have secondary color', () => {
    cy.get(MuiSelectors.SliderSecondary).should('exist')
    cy.get(MuiSelectors.SliderPrimary).should('not.exist')
})

Then('The snackbar should have Mui background {string}', (bg: string) => {
    const bgColor = Aliases.muiMessagesColors.get(bg) ?? ''
    const { r, g, b } = Conversor.hex2rgb(bgColor)
    cy.get(MuiSelectors.Snackbar).should(
        'have.css',
        'background-color',
        `rgb(${r}, ${g}, ${b})`
    )
})

Then('I expect {int} disabled itens on Stepper', (quantity: number) => {
    let disabledCount = 0
    cy.get(MuiSelectors.SteelPlate)
        .each(plate => {
            if (plate.hasClass(MuiSelectors.Disabled)) {
                disabledCount++
            }
        })
        .then(() => {
            expect(disabledCount).to.equal(quantity)
        })
})
