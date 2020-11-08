// Arrays

let num = [5, 8, 2, 9, 3]

num.push(1) // push vai adcionar um numero no final.
num.sort() // sort vai deixar tudo em ordem!. Se deixar o push depois do sort, ele não vai organizar o push

console.log(num)
console.log(`O veteor tem ${num.length} posições`) // length serve para mostrar quantos vetores existe.
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostra o primeiro vetor.

let pos = num.indexOf(8)

if(pos == -1) {
  console.log('O valor não foi encontrado!')
}else {
  console.log(`O valor 8 está na posição ${pos}`)
}
