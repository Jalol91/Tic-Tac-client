const store= require('../store.js')

const onIndexSignUpSuccess = function (response){

  
   console.log(response)
  

}

const onIndexSignUpFailure = function (){
    $('#error-message').text('There was an error')

}


const onIndexSignInSuccess = function (response){
   
      console.log(response)
    // .then((response) => console.log(response))
    //     .catch(() => console.log(response ))
  
store.user=response.user

}

const onIndexSignInFailure = function (response){
    $('#error-message').text('There was an error')

}

module.exports={
    onIndexSignUpSuccess,
     onIndexSignUpFailure,
   onIndexSignInSuccess ,
      onIndexSignInFailure 




}