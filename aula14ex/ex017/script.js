function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
if(num.value.length == 0){
  window.alert('Por favor, digite um número!')
}else {
  let n = Number(num.value)
  let c = 1
  tab.innerHTML =''
  while (c <= 10) {
    let item = document.createElement('option') // Criei um elemento option
    item.text = `${n} x ${c} = ${n*c}`
    item.value - `tab${c}` // essa serve para o php
    tab.appendChild(item) // appendChild = adcionar um elemento  filho que vai ser o item
    c++
    }
  }
}