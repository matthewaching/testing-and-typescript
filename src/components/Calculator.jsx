import { useActionState } from 'react';

const calculateSquareOfSum = async (prevState, formData) => {
    const number1 = formData['first-number'];
    const number2 = formData['second-number'];

    await new Promise(res => setTimeout(res, 1000));

    if (number1 && number2) {
        const sum = number1 + number2;
        const square = sum * sum;
        return square;
    }
};

const Calculator = () => {
    const [answer, calculateAction, isLoading] = useActionState(calculateSquareOfSum, null);

    return (
        <div>
            <h1>Square of Sum</h1>
            <form action={calculateAction}>
                <span>{'( '}</span>
                <input type='number' name='first-number' />
                <span>+</span>
                <input type='number' name='second-number' />
                <span>{' )'}&sup2;</span>
                <br /><br />
                <button type='submit'>Calculate square of sum</button>
            </form>
            <p className='output'>{isLoading ? 'Calculating...' : `The answer is: ${answer}`}</p>
        </div>
    );
};

export default Calculator;