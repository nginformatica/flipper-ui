/* eslint-disable max-len */
import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Fab from './Fab'
import FabWrapper from './FabWrapper'
import FileCopyIcon from '@material-ui/icons/FileCopy'

describe('Fab', () => {
    it('Should call onClick', () => {
        const onClickSpy = jest.fn()
        render(
            <Fab onClick={onClickSpy}>
                <FileCopyIcon />
            </Fab>
        )

        const btn = screen.getByTestId('fab-button')

        userEvent.click(btn)

        waitFor(() => {
            expect(onClickSpy).toHaveBeenCalled()
        })
    })

    it('Should show tooltip', () => {
        const onClickSpy = jest.fn()
        render(
            <Fab onClick={onClickSpy} tooltip='tooltip-test'>
                <FileCopyIcon />
            </Fab>
        )

        const btn = screen.getByTestId('fab-button')

        userEvent.hover(btn)

        waitFor(() => {
            const tooltipMessage = screen.getByText('tooltip-test')
            expect(tooltipMessage).toBeDefined()
        })
    })

    it('Snapshot', () => {
        const onClickSpy = jest.fn()
        const miniTrue = render(
            <Fab onClick={onClickSpy}>
                <FileCopyIcon />
            </Fab>
        )
        expect(miniTrue).toMatchSnapshot()

        const miniFalse = render(
            <Fab mini={false} onClick={onClickSpy}>
                <FileCopyIcon />
            </Fab>
        )
        expect(miniFalse).toMatchInlineSnapshot(`
            {
              "asFragment": [Function],
              "baseElement": <body>
                <div>
                  <button
                    class="MuiButtonBase-root MuiFab-root MuiFab-sizeSmall"
                    data-testid="fab-button"
                    name="action-button"
                    tabindex="0"
                    type="button"
                  >
                    <span
                      class="MuiFab-label"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
                        />
                      </svg>
                    </span>
                    <span
                      class="MuiTouchRipple-root"
                    />
                  </button>
                </div>
                <div>
                  <button
                    class="MuiButtonBase-root MuiFab-root MuiFab-sizeMedium"
                    data-testid="fab-button"
                    name="action-button"
                    tabindex="0"
                    type="button"
                  >
                    <span
                      class="MuiFab-label"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
                        />
                      </svg>
                    </span>
                    <span
                      class="MuiTouchRipple-root"
                    />
                  </button>
                </div>
              </body>,
              "container": <div>
                <button
                  class="MuiButtonBase-root MuiFab-root MuiFab-sizeMedium"
                  data-testid="fab-button"
                  name="action-button"
                  tabindex="0"
                  type="button"
                >
                  <span
                    class="MuiFab-label"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
                      />
                    </svg>
                  </span>
                  <span
                    class="MuiTouchRipple-root"
                  />
                </button>
              </div>,
              "debug": [Function],
              "findAllByAltText": [Function],
              "findAllByDisplayValue": [Function],
              "findAllByLabelText": [Function],
              "findAllByPlaceholderText": [Function],
              "findAllByRole": [Function],
              "findAllByTestId": [Function],
              "findAllByText": [Function],
              "findAllByTitle": [Function],
              "findByAltText": [Function],
              "findByDisplayValue": [Function],
              "findByLabelText": [Function],
              "findByPlaceholderText": [Function],
              "findByRole": [Function],
              "findByTestId": [Function],
              "findByText": [Function],
              "findByTitle": [Function],
              "getAllByAltText": [Function],
              "getAllByDisplayValue": [Function],
              "getAllByLabelText": [Function],
              "getAllByPlaceholderText": [Function],
              "getAllByRole": [Function],
              "getAllByTestId": [Function],
              "getAllByText": [Function],
              "getAllByTitle": [Function],
              "getByAltText": [Function],
              "getByDisplayValue": [Function],
              "getByLabelText": [Function],
              "getByPlaceholderText": [Function],
              "getByRole": [Function],
              "getByTestId": [Function],
              "getByText": [Function],
              "getByTitle": [Function],
              "queryAllByAltText": [Function],
              "queryAllByDisplayValue": [Function],
              "queryAllByLabelText": [Function],
              "queryAllByPlaceholderText": [Function],
              "queryAllByRole": [Function],
              "queryAllByTestId": [Function],
              "queryAllByText": [Function],
              "queryAllByTitle": [Function],
              "queryByAltText": [Function],
              "queryByDisplayValue": [Function],
              "queryByLabelText": [Function],
              "queryByPlaceholderText": [Function],
              "queryByRole": [Function],
              "queryByTestId": [Function],
              "queryByText": [Function],
              "queryByTitle": [Function],
              "rerender": [Function],
              "unmount": [Function],
            }
        `)
    })
})

describe('FabWrapper', () => {
    it('should render correctly', () => {
        const { container } = render(
            <FabWrapper>
                <FileCopyIcon />
            </FabWrapper>
        )
        expect(container).toMatchSnapshot()
    })
})
