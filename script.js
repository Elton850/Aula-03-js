// const numero1 = Number(prompt("Digite um número:"))
// const numero2 = Number(prompt("Digite outro número:"))
// const numero3 = Number(prompt("Digite outro número:"))

// if (numero1 > numero2 && numero1 > numero3) {
//     console.log(`O número ${numero1} é o Maior`)
// } else if (numero2 > numero1 && numero2 > numero3) {
//     console.log(`O número ${numero2} é o Maior`)
// } else if (numero3 > numero1 && numero3 > numero2) {
//     console.log(`O número ${numero3} é o Maior`)
// } else {
//     console.log("Mais do que um número são iguais")
// }

// const cor = prompt(`Digite uma cor dentre as opções abaixo:\nVERMELHO\nAMARELO\nVERDE`)

// switch(cor.toLowerCase()) {
//     case "vermelho":
//         console.log("PARE!")
//         break
//     case "amarelo":
//         console.log("ATENÇÃO!")
//         break
//     case "verde":
//         console.log("PROSSIGA!")
//         break
//     default:
//         console.log("VALOR INVÁLIDO")
//         break
// }

// let contador = 1;

// while (contador <= 100) {
//     console.log(contador);
//     contador++
// }

// let contador = 2;

// while (contador <= 100) {
//     console.log(contador);
//     contador+=2
// }

// QUESTÃO 1

// let numero = Number(prompt("Digite um número:"))

// while (numero > 0) {
//     console.log(numero)
//     numero--
// }

// QUESTÃO 2

// let nota = Number(prompt("Digite suas notas:"))
// let media = 0
// let soma_nota = 0

// while (nota > 0) {
//     soma_nota += nota
//     media++
//     nota = Number(prompt("Digite suas notas:"))
// }

// console.log(soma_nota/media)

// QUESTÃO 3

// let numero = Number(prompt("Digite um número:"))
// let soma = 0

// while (numero > 0) {
//     soma += numero
//     numero = Number(prompt("Digite um número:"))
// }

// console.log(soma)

// QUESTÃO 4

// while(true) {
//     let user = prompt("Digite o usuário:")
//     let password = prompt("Digite a senha:")
//     if (user === password) {
//         console.log("Usuário e senha iguais")
//     } else {
//         break
//     }
// }

// QUESTÃO 5

// let contador = 0
// let soma_idade = 0

// while (contador < 5) {
//     let idade = Number(prompt("Digite a idade"))
//     soma_idade += idade
//     contador++
// }

// if ((soma_idade/5) > 0 && (soma_idade/5) <= 25) {
//     console.log("Turma Jovem")
// } else if ((soma_idade/5) <= 60) {
//     console.log("Turma Adulta")
// } else {
//     console.log("Turma Idosa")
// }

// QUESTÃO 6-1

// while (true) {
//     let numero1 = Number(prompt("Digite um número:"))
//     let numero2 = Number(prompt("Digite outro número:"))
    
//     if (numero1 > 0 && numero1 < 51 && numero2 > 0 && numero2 < 51) {
//         console.log(numero1+numero2)
//         break
//     }
// }

// QUESTÃO 6-2

// const menu = Number(prompt("Escolha um valor de 1 a 7"))

// switch (menu) {
//     case 1:
//         console.log("Segunda-Feira")
//         break    
//     case 2:
//         console.log("Terça-Feira")
//         break    
//     case 3:
//         console.log("Quarta-Feira")
//         break    
//     case 4:
//         console.log("Quinta-Feira")
//         break    
//     case 5:
//         console.log("Sexta-Feira")
//         break    
//     case 6:
//         console.log("Sábado")
//         break    
//     case 7:
//         console.log("Domingo")
//         break    
//     default:
//         console.log("Valor Inválido")
//         break
// }

// QUESTÃO 7

// let numero = Number(prompt("Digite um número:"))
// let contador = 1
// let validador = 0

// while (contador < numero+1) {
//     if ((numero % contador) === 0) {
//         validador++ 
//     }
//     contador++
// }

// if (validador < 3) {
//     console.log("O número é primo")
// } else {
//     console.log("O número não é primo")
// }