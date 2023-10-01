import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"

import Header from './Header';

test('renders Header component', () => {
    render(<Header />);
    
    // Check if the logo is present and has the alt text 'logo'
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();

    // Check if the navigation links are present
    const menuLink = screen.getByText('Menu');
    expect(menuLink).toBeInTheDocument();

    const orderLink = screen.getByText('Order Online');
    expect(orderLink).toBeInTheDocument();

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();

    const loginLink = screen.getByText('Login');
    expect(loginLink).toBeInTheDocument();

    // Check if the 'Reserve a Table' button is present
    const reserveButton = screen.getByText('Reserve a Table');
    expect(reserveButton).toBeInTheDocument();

    // Check if the 'Menu' link scrolls to the correct section
    const menuLinkElement = screen.getByText('Menu');
    menuLinkElement.click();
});