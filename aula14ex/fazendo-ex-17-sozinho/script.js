function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('tabsel')
if(num.value.length == 0) {
  window.alert('Digite um Número')
}else {
  let n = Number(num.value)
  let c = 1
  tab.innerHTML = ''
  while (c <= 10) {
    let item = document.createElement('option') // Criei um elemento option
    item.text = `${n} x ${c} = ${n*c}`
    tab.appendChild (item)
    c++
  
    }
  } 
}