

  document.getElementById('btnAdd').addEventListener('click', function () {

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let sum = parseFloat(num1 + num2);

    document.getElementById('answer').value = sum;
});




 