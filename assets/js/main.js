// 2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos números
// diferentes y mayores a cero. Para ambos números, calcular lo siguiente

// alert('Ingresar dos nuemros diferentes y mayores a cero');
// var num1 = +prompt("Ingresar numero 1: ");
// var num2 = +prompt("Ingresar numero 2: ");
// console.log(`Salida de la suma es: ${num1 + num2}`);
// console.log(`Salida de la resta es: ${num1 - num2}`);
// console.log(`Salida de la multiplicacion es: ${num1 * num2}`);
// console.log(`Salida de la division es: ${num1 / num2}`);
// console.log(`Salida del modulo es: ${num1 & num2}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////


// 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que
// la transforme a grados Kelvin y Fahrenheit

// const kelvin = 273.15
// let tenperaturaCelsiu = +prompt("Ingrese temperatura en grados celsius");
// let conversionKelvin = tenperaturaCelsiu + kelvin
// let conversionFahrenheit = (tenperaturaCelsiu * (9 / 5)) + 32;

// document.write(`<h3> La conversion de ${tenperaturaCelsiu} celsius a kelvin es ${conversionKelvin} </h3>`)
// document.write(`<h3> La conversion de ${tenperaturaCelsiu} celsius a fahrenheit es ${conversionFahrenheit} </h3>`)


///////////////////////////////////////////////////////////////////////////////////////////////////////


// 4. Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos)
// Se debe considerar lo siguiente: 

// let dias = +prompt("Ingrese la cantidad de dias: ");

// let anio = Math.floor(dias / 365);
// let resto = dias % 365;
// let semanas = Math.floor(resto / 7);
// let sobra = resto % 7;
// document.write(`<h3>Los equivalente en Años son: ${anio} años, ${semanas} semanas, ${sobra} dias </h3>`)


///////////////////////////////////////////////////////////////////////////////////////////////////////


// 5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
// a continuación. 

let num1 = +prompt("Ingrese el primer numero: ");
let num2 = +prompt("Ingrese el segundo numero: ");
let num3 = +prompt("Ingrese el tercer numero: ");
let num4 = +prompt("Ingrese el cuarto numero: ");
let num5 = +prompt("Ingrese el quinto numero: ");

let suma = num1 + num2 + num3 + num4 + num5;
let promedio = suma / 5;

document.write(`<h3>La suma es : ${suma} </h3>`)
document.write(`<h3>el promedio es : ${promedio} </h3>`)