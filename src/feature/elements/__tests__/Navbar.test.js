import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from '../Navbar';

describe('Navbar tests', () => {
    it('should render navigiation', () => {
        const nav = render(<Navbar />);
        expect(nav).toBe(true);
    });
});