let num1 = '';
let num2 = '';
let operator = '';
let equals = false;

$(() => {
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
})
