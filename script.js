function onSubmit(){
  let outline = document.getElementById('Outline-input')
  let plate = document.getElementById('Sushi-plate')
  console.log(outline.value +" "+plate.value)
}

function onSubmit(){
  let topping = document.getElementsByName('Sushi-topping')
  topping.forEach(node=> console.log(node.checked))

  for (var i =0; i<topping.length; i++){
    if topping[i].checked){
      console.log(topping[i].value)
    }
  }
}