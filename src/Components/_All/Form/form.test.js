import React from 'react'
import { screen, render } from '@testing-library/react'
import { Form } from '../Form/Form'

describe('Form', () => {
    it('must display a placeholder', () => {
        render(<Form />)
        expect(screen.queryByPlaceholderText(/GitHub User/)).toBeInTheDocument()
    })
})