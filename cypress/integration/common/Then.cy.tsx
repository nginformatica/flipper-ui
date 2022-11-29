import { ButtonProps } from '@material-ui/core'
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { pick } from 'ramda'
import {
    MockCats,
    MuiSelectors,
    SpyCats
} from '../../support/types-interfaces-enums'
import { Utils } from '../../support'

Then('I should see {string}', (text: string) =>
    cy.waitUntil(() => cy.contains(text).should('exist'))
)

Then('I expect {string} mock to exist', (mockName: MockCats) => {
    cy.getMock(mockName).then(mock => {
        const element: string = mock.toString()
        cy.waitUntil(() => cy.contains(element).should('exist'))
    })
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

Then('I expect Box component style to match with mock', () => {
    cy.getMock('box-params').then(mock => {
        const props = pick(['name', 'id'], mock)
        const styles = pick(['padding', 'margin', 'minHeight'], mock)
        for (const prop in props) {
            cy.get('[id="box-testing-id"]').first().should('have.attr', prop)
        }
        for (const style in styles) {
            const List: Record<string, string> = styles
            const styleValue = List[style]
            cy.get('[id="box-testing-id"]')
                .first()
                .should('have.css', style, `${styleValue}px`)
        }
    })
})

Then(
    'I expect generic {string} component props and style to match with mock',
    (mockCat: MockCats) => {
        cy.getMock(mockCat).then(mock => {
            const props = pick(['name', 'id'], mock)
            const styles = pick(['padding', 'margin'], mock)
            for (const prop in props) {
                cy.get('[id="card-testing-id"]')
                    .first()
                    .should('have.attr', prop)
            }
            for (const style in styles) {
                const List: Record<string, string> = styles
                const styleValue = List[style]
                cy.get('[id="card-testing-id"]')
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
                const list = Utils.colorMapValues.get(color) ?? []
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
                const list = Utils.variantMapValues.get(variant) ?? []
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
        Utils.sizeMapValues.get(size)
        cy.get(`button[id=${id}]`)
            .first()
            .should('have.class', Utils.sizeMapValues.get(size))
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
