import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignUpPage from './SignUpPage';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();

beforeEach(() => {
    render(
        <MemoryRouter initialEntries={['/signup']}>

            <QueryClientProvider client={queryClient}>
                <SignUpPage />
            </QueryClientProvider>

        </MemoryRouter>
    );
})

afterEach(() => {
    cleanup();
})

describe('SigUpForm', () => {

    it('should render label nombre', () => {
        expect(screen.getByRole('label', {name:'name'})).toBeInTheDocument()
        expect(screen.getByLabelText(/Nombre/)).toBeInTheDocument()
    })

    it('should render label apellido', () => {
        expect(screen.getByRole('label', {name:'lastName'})).toBeInTheDocument()
        expect(screen.getByLabelText(/Apellido/)).toBeInTheDocument()
    })

    it('should render label correo', () => {
        expect(screen.getByRole('label', {name:'email'})).toBeInTheDocument()
        expect(screen.getByLabelText(/Correo/)).toBeInTheDocument()
    })

    it('should render label contraseña', () => {
        expect(screen.getByRole('label', {name:'password'})).toBeInTheDocument()
        expect(screen.getByLabelText(/Contraseña/)).toBeInTheDocument()
    })
});

describe('SignUpButton', () => {

    it('should render SignUpButton', () => {
        expect(screen.getByRole('button', {name: 'signUpBtn'})).toBeInTheDocument();
    })

    // it('should navigate to home when signUpButton is clicked', () => {
    //     fireEvent.click(screen.getByRole('button', {name: 'signUpBtn'}));
    //     expect(screen.getByText('HomePage')).toBeInTheDocument();
    // })
});
