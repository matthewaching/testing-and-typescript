import CatPics from "./CatPics";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('basic render', async () => {
    render(<CatPics />);

    expect(await screen.findByText(/this is a/i)).toBeInTheDocument();
});

test('button click works', async () => {
    const user = userEvent.setup();
    render(<CatPics />);

    const latButton = await screen.findByRole('button', { name: 'l' });

    await user.click(latButton);

    expect(await screen.findByText(/the gainz/i)).toBeInTheDocument();
});