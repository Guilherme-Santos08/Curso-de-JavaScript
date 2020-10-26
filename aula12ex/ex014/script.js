function carregar () {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
 
  msg.innerHTML = `Agora são ${hora} horas.`
  if(hora >=0 && hora < 12) {
    // BOM DIA!
    img.src = 'fotoatarde.png'
    document.body.style.background = 'rgb(193, 207, 66)'
    
  } else if (hora >= 12 && hora <=18){
    // BOA TARDE
    img.src = 'fotomanha.png'
    document.body.style.background = 'rgb(243, 152, 66)'
    
  } else {
    // BOA NOITE
    img.src = 'fotoanoite.png'
    document.body.style.background = '#515154'
  }
}

