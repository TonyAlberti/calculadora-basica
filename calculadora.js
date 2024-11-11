// montar calculadora que some 2 parametros apenas

const operacao = "+";
function calculo(n1, n2) {
  if (operacao === "+") {
    return n1 + n2;
  } else if (operacao === "-") {
    return n1 - n2;
  } else if (operacao === "*") {
    return n1 * n2;
  } else if (operacao === "/") {
    return n1 / n2;
  }
}

console.log(calculo(5, 5));

// outra forma tb

function calculadora(fn, n1, n2) {
  if (typeof fn === "function") {
    console.log(fn(n1, n2));
  }
}
function somar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
calculadora(somar, 5, 5);
calculadora(subtrair, 5, 5);
calculadora(multiplicar, 5, 5);
calculadora(dividir, 5, 5);
