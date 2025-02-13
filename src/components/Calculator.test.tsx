import Calculator from "./Calculator";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('basic render', async () => {
    render(<Calculator />);

    expect(await screen.findByText('Square of Sum')).toBeInTheDocument();
    // expect(await screen.findByText('cat facts')).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: /Calculate square of sum/i })).toBeInTheDocument();
});

test('input fields accept input', async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    const firstInput = await screen.findByPlaceholderText(/First number/i);
    const secondInput = await screen.findByPlaceholderText(/Second number/i);
    const calculateButton = await screen.findByRole('button', { name: /Calculate square of sum/i });

    await user.type(firstInput, '1');
    await user.type(secondInput, '2');
    await user.click(calculateButton);

    expect(await screen.findByText('The answer is: 9')).toBeInTheDocument();
});