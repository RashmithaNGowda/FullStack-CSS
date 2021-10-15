const button = document.querySelector('button')
const input=document.querySelector('input')
const div=document.querySelector('div')

// div.innerHTML=localStorage.getItem('InputValue')
// // console.log(button,input,div)
// button.addEventListener('click',(req,res)=>{
//     localStorage.setItem('InputValue',input.value)
//     div.innerHTML=input.value

// })
const arr=[1,2,3,4,5]

// console.log(arr)
// console.log(val)
localStorage.setItem('val',JSON.stringify(arr))
console.log(JSON.parse(localStorage.getItem('val')))


