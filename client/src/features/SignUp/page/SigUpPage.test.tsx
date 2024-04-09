import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignUpPage from './SignUpPage';
import { MemoryRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';

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
        expect(screen.getByRole('label', {name:'name'})).toHaveTextContent('Nombre:')
    })

    it('should render label apellido', () => {
        expect(screen.getByRole('label', {name:'lastName'})).toBeInTheDocument()
        expect(screen.getByRole('label', {name:'lastName'})).toHaveTextContent('Apellido:')
    })

    it('should render label correo', () => {
        expect(screen.getByRole('label', {name:'email'})).toBeInTheDocument()
        expect(screen.getByRole('label', {name:'email'})).toHaveTextContent('Correo:')
    })

    it('should render label contraseña', () => {
        expect(screen.getByRole('label', {name:'password'})).toBeInTheDocument()
        expect(screen.getByRole('label', {name:'password'})).toHaveTextContent('Contraseña:')
    })

    // it('should display error message when wronh name is typed', async () => {
    //     await userEvent.type(screen.getByRole('textbox', {name: 'name'}), 'Ana');

    //     await userEvent.click(screen.getByRole('button', {name: 'signUpBtn'}));

    // })
});

describe('SignUpButton', () => {

    it('should render SignUpButton', () => {
        expect(screen.getByRole('button', {name: 'signUpBtn'})).toBeInTheDocument();
    })

    it('should navigate to home when signUpButton is clicked', async () => {
        await userEvent.type(screen.getByRole('textbox', {name:'name'}), 'Ana');
        await userEvent.type(screen.getByRole('textbox', {name:'lastName'}), 'Suarez');
        await userEvent.type(screen.getByRole('label', {name:'gender'}), 'femenino');
        await userEvent.type(screen.getByRole('textbox', {name:'phone'}), '612258259');
        await userEvent.type(screen.getByRole('textbox', {name:'email'}), 'ana@gmail.com');
        await userEvent.type(screen.getByRole('passwordI', {name:'passwordI'}), '123456');
        await userEvent.type(screen.getByRole('passwordI', {name:'confirmPassword'}), '123456');

        await userEvent.click(screen.getByRole('button', {name: 'signUpBtn'}));
        await new Promise ((resolve) => setTimeout(resolve, 1000));
        // screen.debug()
        await waitFor(()=> expect(screen.getByText('HomePage')).toBeInTheDocument());
    })
});

