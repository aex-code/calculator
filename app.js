// global variables ===============
let num1 = '';
let num2 = '';
let operator = '';
let equals = false;
let result = '';

$(() => {
    //  clear function ===============
    $('#clear').on('click', () => {
        // on click, resets all values to their defaults
        num1 = '';
        num2 = '';
        operator = '';
        equals = false;
        $('.output').text('0');
    })

    // delete function ===============
    $('#delete').on('click', () => {
        // if all variables are empty, output says 0 on delete
        if(num1 === '' && num2 === '' && operator === '' && equals === false){
            $('.output').text('0');
        // if num1 is the only filled value, slice num1
        } else if (num1 !== '' && operator === ''){
            num1 = num1.slice(0, -1);
            // if after slice, num1 is empty, output says 0
            if (num1 === ''){
                $('.output').text('0');
            // if after slice, num1 is not empty, output says num1
            } else {
                $('.output').text(num1);
            }
        // if num1 and operator are only filled values, delete operator
        } else if (num1 !== '' && operator !== '' && num2 === '') {
                operator = '';
                // after deleting operator, output shows num1
                $('.output').text(num1);
        // if num1, operator, and num2 are filled, slice num2
        } else if (num1 !== '' && operator !== '' && num2 !== ''){
            num2 = num2.slice(0, -1);
            // if after slice, num2 is empty, output says operator
            if(num2 === ''){
                $('.output').text(operator);
            // if after slice, num2 is not empty, output says num2
            } else {
                $('.output').text(num2);
            }
        }
    })

    // onclick function for number buttons ===============
    $('.num').on('click', (event) => {
        // if operator is empty, concatenate to num1
        if(operator === ''){
            num1 += $(event.currentTarget).text();
            $('.output').text(num1);
        // if operator is full, concatenate to num2
        } else {
            num2 += $(event.currentTarget).text();
            $('.output').text(num2);

        }
    })

    // on click function for operator ===============
    $('.operator').on('click', (event) => {
        if(num1 !== ''){
            operator = $(event.currentTarget).text();
            $('.output').text(operator);
        }
    })

    // on click function for equals button ===============
    $('#equals').on('click', (event) => {
        // for the sake of DRY code
        const showResult = (result) => {
            $('.output').text(result);
        }

        // equations to run on click, based on chosen operator
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
        equals = true;
    })
})
