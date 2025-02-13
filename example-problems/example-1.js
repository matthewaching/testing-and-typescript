function sumAndSquareNumbers() {
    const number1 = document.querySelector('.first-number-input').value;
    const number2 = document.querySelector('.second-number-input').value;
    if (number1 && number2) {
        const sum = number1 + number2;
        const square = sum * sum;
        document.querySelector('.output').innerText = square;
    }
}

document.querySelector('.add-button').addEventListener('click', sumAndSquareNumbers)