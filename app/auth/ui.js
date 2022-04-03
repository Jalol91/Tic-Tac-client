const store= require('../store.js')

const onIndexSignUpSuccess = function (response){

  
   console.log(response)
  

}

const onIndexSignUpFailure = function (){
    $('#error').text('Sign Up Failure')

}


const onIndexSignInSuccess = function (response){
   
      console.log(response)
    // .then((response) => console.log(response))
    //     .catch(() => console.log(response ))
  
store.user=response.user

}

const onIndexSignInFailure = function (response){
    $('#error').text('Signed In Failure')

}

const onIndexSignOutSuccess =function(response){
    $('#error').text(' Sign Out Succsess ')
}

const onIndexSignOutFailure =function(response){
    $('#error').text(' Sign Out Succsess ')
    // make game stop 
}
module.exports={
    onIndexSignUpSuccess,
     onIndexSignUpFailure,
   onIndexSignInSuccess ,
      onIndexSignInFailure ,
      onIndexSignOutSuccess,
      onIndexSignOutFailure




}