
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
        .catch(() => SignUpUi.onIndexSignUpFailure())
  
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
        .catch(() => SignUpUi.onIndexSignInFailure())
  

    
  }



const onSignOut=(event)=> {
     
    
    SignUpApi.onIndexSignOut()
 

        .then((response) => SignUpUi.onIndexSignOutSuccess(response))
        .catch(() => SignOutUi.onIndexSignOutFailure())
  
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




  const game ={
    Turn:true,
    State:[],

    WinningStates:[


        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        // Columns
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        // Diagonal
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
}


module.exports={
  onSignUp,
  onSignIn,
  onSignOut,
  boxClick

}