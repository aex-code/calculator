let num1 = '';
let num2 = '';
let operator = '';
let equals = false;
let result = '';

$(() => {
    $('#clear').on('click', () => {
        num1 = '';
        num2 = '';
        operator = '';
        equals = false;
        $('.output').text('0');
    })

    $('#delete').on('click', () => {
        if(num1 === '' && num2 === '' && operator === '' && equals === false){
            $('.output').text('0');
        } else if (num1 !== '' && operator === ''){
            num1 = num1.slice(0, -1);
            if (num1 === ''){
                $('.output').text('0');
            } else {
                console.log(num1);
                $('.output').text(num1);
            }
        } else if (num1 !== '' && operator !== '') {
            operator = '';
            console.log(num1);
            $('.output').text(num1);
        }
    })

    $('.num').on('click', (event) => {
        if(operator === ''){
            num1 += $(event.currentTarget).text();
            console.log(num1);
            $('.output').text(num1);
        } else {
            num2 += $(event.currentTarget).text();
            console.log(num2);
            $('.output').text(num2);

        }
    })

    $('.operator').on('click', (event) => {
        operator = $(event.currentTarget).text();
        console.log(operator);
        $('.output').text(operator);
    })

    $('#equals').on('click', (event) => {
        const showResult = (result) => {
            console.log(result);
            $('.output').text(result);
        }

        if (operator === '+'){
            result = parseFloat(num1) + parseFloat(num2);
            showResult(result);
        } else if (operator === '-'){
            result = parseFloat(num1) - parseFloat(num2);
            showResult(result);
        } else if (operator === 'x'){
            result = parseFloat(num1) * parseFloat(num2);
            showResult(result);
        } else if (operator === '/'){
            result = parseFloat(num1) / parseFloat(num2);
            showResult(result);
        }
    })
})
