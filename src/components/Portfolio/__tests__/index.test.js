import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '..'

afterEach(cleanup);

describe('Portfolio is rendering',() => {

    it('renders', () => {
        render(<Portfolio />)
    })

})