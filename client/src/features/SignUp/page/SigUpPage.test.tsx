import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
// import SignUpPage from './SignUpPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignUpForm from '../components/SignUpForm';
import SignUpButton from '../components/SignUpButton';
import SignUpPage from './SignUpPage';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const MockSignUpForm = () => {
    return(
        <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <SignUpForm />
        </QueryClientProvider>
        </BrowserRouter>
    )
};

const MockSignUpPage = () => {
    return(
        <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <SignUpPage />
        </QueryClientProvider>
        </BrowserRouter>
    )
};


describe('SigUpForm', () => {
    it('shuld render label nombre', () => {
        //ARRANGE
        render(<MockSignUpForm/>);
        //EXPECT
        expect(screen.getByLabelText(/Nombre/)).toBeDefined()
    });

    it('shuld render label apellido', () => {
        render(<MockSignUpForm/>);
        expect(screen.getByLabelText(/Apellido/)).toBeInTheDocument()
    });

    it('shuld render label correo', () => {
        render(<MockSignUpForm/>);
        expect(screen.getByLabelText(/Correo/)).toBeDefined()
    });


});

describe('SignUpButton', () => {
    const onSubmitSpy= vi.fn()

    it('should render SignUpBUtton', () => {
        render(<MockSignUpPage />);
        expect(screen.getByTestId(/subtn/)).toBeInTheDocument();
    })

    it('should fetch when click', () => {
        render(<SignUpButton onSubmit={onSubmitSpy} />);

        const btnElement =screen.getByTestId(/subtn/);
        fireEvent.click(btnElement, {});

        expect(btnElement).toBeDefined();
    })
})
