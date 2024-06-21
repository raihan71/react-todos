import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Nav from '../Nav';

describe('Nav tests', () => {
    it('should contains button', () => {
        const handleDarkMock = jest.fn();
        render(<Nav handleDark={handleDarkMock} />);
        const button = screen.getByRole('button', { name: 'Dark Mode'});
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-pressed', 'true');
    });
    it('should render navigiation', () => {
        render(<Nav />);
        const nav = screen.getByRole('navigation', { name: 'Navigation'});
        fireEvent.click(nav);
        expect(nav).toBeInTheDocument();
    });
});