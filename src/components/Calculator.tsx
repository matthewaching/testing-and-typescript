import { useActionState } from 'react';

const calculateSquareOfSum = async (_: number | null, formData: FormData) => {
    const number1 = formData.get('first-number');
    const number2 = formData.get('second-number');

    await new Promise(res => setTimeout(res, 1000));

    if (number1 && number2) {
        const sum = +number1 + +number2;
        const square = sum * sum;
        return square;
    } else {
        return null;
    }
};

const Calculator = () => {
    const [answer, calculateAction, isLoading] = useActionState<number | null, FormData>(calculateSquareOfSum, null);

    return (
        <div>
            <h1>Square of Sum</h1>
            <form action={calculateAction}>
                <span>{'( '}</span>
                <label>
                    First number:
                    <input type='number' name='first-number' />
                </label>
                <span>+</span>
                <label>
                    Second number:
                    <input type='number' name='second-number' />
                </label>
                <span>{' )'}&sup2;</span>
                <br /><br />
                <button type='submit'>Calculate square of sum</button>
            </form>
            <p className='output'>{isLoading ? 'Calculating...' : `The answer is: ${answer}`}</p>
        </div>
    );
};

export default Calculator;