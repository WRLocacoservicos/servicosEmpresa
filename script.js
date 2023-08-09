
let btn = document.getElementById('btn');
let res = document.getElementById('res');
let rdo = document.querySelector('.rdo');
// let usuario = document.getElementById('user').value;


// res.innerHTML=`${usuario}`

function logar(){
    
  
  let User = document.getElementById('user').value
let password = document.getElementById('password').value
// const guardando = [User]
// let usuarioGuardadado = guardando
// console.log(usuarioGuardadado)
  
  const users =
   {
     name: 'ismaile',
      password:'1234',
      name2:'ruy',
      password2:'4321',
      name3: 'alan',
      password3: '1243'
    }
    

if(User===users.name && password===users.password){
  console.log('uhuuuu')
  
    location.href='./indexx.html'
    // alert(`Bem vindo ${User}`)

} else if(User===users.name2 && password===users.password2) {
  console.log('ufa')
  location.href='./indexx.html'

  
} else if(User===users.name3 && password===users.password3) {
  console.log('graças')
  location.href='./indexx.html'
} else {
  console.log('erro')
} 


  
}


//todo

const texto = document.querySelector('#todolist')
const Todo = document.querySelector('.to-do')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const novaTarefa = document.querySelector('.novatarefa')

var itensDB = []

btnDeleteAll.onclick = () => {
  itensDB = []
  updateDB()
}

texto.addEventListener('keypress', e => {
  if (e.key == 'Enter' && texto.value != '') {
    setItemDB()
  }
})

btnInsert.onclick = () => {
  if (texto.value != '') {
    setItemDB()
  }
}

function setItemDB() {
  if (itensDB.length >= 20) {
    alert('Limite máximo de 20 itens atingido!')
    return
  }

  itensDB.push({ 'item': texto.value, 'status': '' })
  updateDB()
}

function updateDB() {
  localStorage.setItem('todolist', JSON.stringify(itensDB))
  loadItens()
}

function loadItens() {
    novaTarefa.innerHTML = "";
  itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
  itensDB.forEach((item, i) => {
    insertItemTela(item.item, item.status, i)
  })
}

function insertItemTela(text, status, i) {
  const P = document.createElement('li')

  
  P.innerHTML = `
    <div class="divLi">
      <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
      <span data-si=${i}>${text}</span>
      <button onclick="removeItem(${i})" data-i=${i}><i class='bx bx-trash'></i></button>
    </div>
    `
    novaTarefa.appendChild(P)

  if (status) {
    document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
  } else {
    document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
  }

  texto.value = ''
}

function done(chk, i) {

  if (chk.checked) {
    itensDB[i].status = 'checked' 
  } else {
    itensDB[i].status = '' 
  }

  updateDB()
}

function removeItem(i) {
  itensDB.splice(i, 1)
  updateDB()
}
let openTodo = document.querySelector("#openTodo")
let openRDO = document.querySelector("#openRDO")
let circulo = document.querySelector("#circulo")
 function openGrafico() {

  circulo.style.display= 'block'
  
 }

openTodo.addEventListener('click', ()=>{
  if(Todo) { 
    Todo.style.display= 'block'
    rdo.style.display= 'none'
    circulo.style.display= 'none'

    } 

 })
  


 openRDO.addEventListener('click', ()=>{
  if(rdo){
    rdo.style.display= 'flex'
    Todo.style.display= 'none'
  }
 })
  

loadItens()



//grafico

let valor3 = document.getElementById('valor3')
let valor4 = document.getElementById('valor4')
let inserir = document.getElementById('inserir')
let limpar = document.getElementById('limpar')

 function go(){
  let graficoCirculo = document.getElementById('graficoCirculo')
  let circle = document.getElementById('circleProgress')
  let number = document.getElementById('number').value
  document.querySelector('.number').innerHTML = number + '%'

  circle.style.strokeDashoffset =440 -  (440 * number / 100);
  localStorage.setItem('progressValue', number); 
 }

 function loadFromLocalStorage() {
  let savedValue = localStorage.getItem('progressValue');
  if (savedValue !== null) {
    document.getElementById('number').value = savedValue;
    go(); // Chamando a função go() para atualizar o gráfico
  }
}

// Chame essa função quando a página carregar
window.onload = loadFromLocalStorage;


 //menu celular
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

function openNav() {
  document.querySelector('.ul').style.left = '0';
  closeBtn.style.display = 'block'
  openBtn.style.display = 'none'
  

}
function closeNav() {
  document.querySelector('.ul').style.left = '-100%';
  closeBtn.style.display = 'none'
  openBtn.style.display = 'block'
}





// limpar.addEventListener('click', () => {
//   // Obtenha o novo valor do elemento de entrada
//   let valor = document.getElementById('valor')
  
//   // Atualize os dados do gráfico com o novo valor
//  myChart.data.datasets[0].data[0] = valor v;
//   myChart.update();
// });








 


