/*
- [x]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/
  function Sum (firstNumber, secondNumber) {
    return firstNumber + secondNumber
  }

  function Subtraction (firstNumber, secondNumber) {
    return firstNumber - secondNumber
  }

  function Multiplication (firstNumber, secondNumber) {
    return firstNumber * secondNumber
  }

  function Division (firstNumber, secondNumber) {
    return firstNumber / secondNumber
  }

  function RestOfDivision (firstNumber, secondNumber) {
    return firstNumber % secondNumber
  }

function IsSumEvenOrOdd (firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber

  if ((sum % 2) != 0) {
    alert(`A soma dos dois números é impar: ${sum}`)
  } else {
    alert(`A soma dos dois números é par: ${sum}`)
  }
}

function IsEqual (firstNumber, secondNumber) {
  if (firstNumber == secondNumber) {
    alert(`Os números inseridos são iguais.`)
  } else {
    alert(`Os números inseridos são diferentes.`)
  }
}

let firstNumber = Number(prompt("Digite o primeiro número:"))
let secondNumber = Number(prompt("Digite o segundo número:"))

alert(`A soma dos dois números é: ${Sum(firstNumber, secondNumber)}`)
alert(`A subtração dos dois números é: ${Subtraction(firstNumber, secondNumber)}`)
alert(`A multiplicação dos dois números é: ${Multiplication(firstNumber, secondNumber)}`)
alert(`A divisão dos dois números é: ${Division(firstNumber, secondNumber)}`)
alert(`O resto da divisão dos dois números é: ${RestOfDivision(firstNumber, secondNumber)}`)

IsSumEvenOrOdd(firstNumber, secondNumber)

IsEqual(firstNumber, secondNumber)