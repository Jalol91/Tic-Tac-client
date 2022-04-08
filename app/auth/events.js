
const getFormFields = require('../../lib/get-form-fields.js')

const SignUpApi= require('./api.js')
const SignUpUi= require ('./ui.js')
const store= require('../store.js')


const onSignUp=(event)=> {
     event.preventDefault()
    // let SignUpHtml=''
    console.log('signed up')
      const form =event.target

    console.log(event.target)
    const data= getFormFields(form)
    $('form').trigger('reset')

    SignUpApi.onIndexSignUp(data)
 

        .then((response) => SignUpUi.onIndexSignUpSuccess(response))
        .catch(() => SignUpUi.onIndexSignUpFailure())
  
  }

  const onSignIn=(event)=>{
      event.preventDefault()
      console.log('signed in')
      const form =event.target
      console.log(event.target)
      const data= getFormFields(form)
      $('form').trigger('reset')
       SignUpApi.onIndexSignIn(data)
      


       .then((response) => SignUpUi.onIndexSignInSuccess(response))
       .then(()=>SignUpApi.createGame())
       .then((response)=>store.game=response.game)
       .then(()=>  $('.box').on('click',boxClick))
        .catch(() => SignUpUi.onIndexSignInFailure())
  

    
  }



const onSignOut=(event)=> {
     
    
    SignUpApi.onIndexSignOut()
 

        .then((response) => SignUpUi.onIndexSignOutSuccess(response))
        .catch(() => SignOutUi.onIndexSignOutFailure())
  
  }
  
  let moves =0

  let currentTurn =1

      let gameOver=false 


  const boxClick =function(event){

      console.log('click')
      // console.log(event)
      // console.log($(this).text())
      if ($(this).text()=='x'||$(this).text()=='o') return
      moves++
      if (currentTurn %2===1){
         $(this).text('x')
      }else{
          $(this).text('o')
      }
       currentTurn++  
      
      

       const index = event.target.getAttribute('data-cellindex')
      //  console.log(index)
      store.game.cells[index]=$(this).text()
        winStatus($(this).text())

       const updateValue= $(this).text()
       console.log(updateValue)


        SignUpApi.update(index,updateValue,gameOver)
 

        .then((response) => console.log(response))
        .catch((response) => console.log(response))

      
      
  }


  const winStatus=function(letter){
    const arr = store.game.cells
    console.log(arr)
    if(arr[0]=== letter&& arr[1]===letter&& arr[2]===letter){
      gameOver=true
      $('#display').text('Hey You Won')
    $('.box').off('click',boxClick)

      
    }
    
     else if  (arr[3]===letter&& arr[4]===letter&& arr[5]==letter){
       gameOver=true
       $('#display').text('Hey You Won')
       $('.box').off('click',boxClick)

     }
      
     else if (arr[6]===letter&& arr[7]===letter&& arr[8]===letter){
       gameOver=true
       $('#display').text('Hey You Won')
       $('.box').off('click',boxClick)

     } else if (arr[0]===letter&& arr[3]===letter&& arr[6]===letter){
       gameOver=true
       $('#display').text('Hey You Won')
       $('.box').off('click',boxClick)
    

      } else if (arr[1]===letter&& arr[4]===letter&& arr[7]===letter){
        gameOver=true
        $('#display').text('Hey You Won')
        $('.box').off('click',boxClick)

      }else if (arr[2]===letter&& arr[5]===letter&& arr[8]===letter){
       gameOver=true
       $('#display').text('Hey You Won')
       $('.box').off('click',boxClick)

        }else if (arr[0]===letter&& arr[4]===letter&& arr[8]===letter){

        gameOver=true
        $('#display').text('Hey You Won')
        $('.box').off('click',boxClick)
     }
      else if (arr[2]===letter&& arr[4]===letter&& arr[6]===letter){
     gameOver=true
        $('#display').text('Hey You Won')
        $('.box').off('click',boxClick)
     
}
      else if (moves ===9){
        gameOver=true
        $('#display').text('TIE')
        $('.box').off('click',boxClick)
      }
      console.log(gameOver)
}
// how to check if there is a tie 

// how to show who won 


const newGame=function(){
  // clear a board
// create a new game 
$('.box').text('')
moves=0
gameOver=false
$('#display').text('')
SignUpApi.createGame()
.then((response)=>store.game=response.game)
 .then(()=> $('.box').on('click',boxClick))
 

}










module.exports={
  onSignUp,
  onSignIn,
  onSignOut,
  boxClick,
  newGame

}