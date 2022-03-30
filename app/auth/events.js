
const getFormFields = require('../../lib/get-form-fields.js')

const SignUpApi= require('./api.js')
const SignUpUi= require ('./ui.js')



const onSignUp=(event)=> {
     event.preventDefault()
    // let SignUpHtml=''
    console.log('signed up')
      const form =event.target

    console.log(event.target)
    const data= getFormFields(form)
    SignUpApi.onIndexSignUp(data)
 

        .then((response) => SignUpUi.onIndexSignUpSuccess(response))
        .catch(() => SignUpUi.onIndexSignUpFailure(response))
  
  }

  const onSignIn=(event)=>{
      event.preventDefault()
      console.log('signed in')
      const form =event.target
      console.log(event.target)
      const data= getFormFields(form)
       SignUpApi.onIndexSignIn(data)
      


       .then((response) => SignUpUi.onIndexSignInSuccess(response))
       .then(()=>SignUpApi.createGame())
       .then((response)=>console.log(response))
        .catch(() => SignUpUi.onIndexSignInFailure(response))
  

    
  }

  let currentTurn =1


  const boxClick =function(){
      console.log('click')
      
      if (currentTurn %2===1){
         $(this).text('x')
      }else{
          $(this).text('o')
      }
       currentTurn++
  }


  
  

 
//   const player1='X'
//   const player2 ='O'

//   const gameOver= false 
//   let currentPlayer =player1
//   const gameBoard =['','','','','','','','']




  module.exports={
      onSignUp ,
      onSignIn ,
      boxClick


  }