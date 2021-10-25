

  document.getElementById('btnAdd').addEventListener('click', function () {

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

   let answer = 0;


    switch(operation) {
      case 'add':
        answer = parseFloat(num1 + num2);
      break;
      case 'subtract':
        answer = parseFloat(num1 - num2);
      break;
      case 'multiply':
        answer = parseFloat(num1 * num2);
      break;
      case 'divide':
        answer = parseFloat(num1 / num2);
      break;
    }



    document.getElementById('answer').value = answer;
});







 


 



 