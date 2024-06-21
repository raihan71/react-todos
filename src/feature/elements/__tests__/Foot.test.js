import { render, screen } from '@testing-library/react';
import React from 'react';
import Foot from '../Foot';

describe('Footer tests', () => {
    it('should contains the footer', () => {
        render(<Foot />);
        const heading = screen.getByText(/All rights reserved/i);
        expect(heading).toBeInTheDocument()
    });
});