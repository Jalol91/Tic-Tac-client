const store= require('../store.js')


const onIndexSignUpSuccess = function (response){
    $('#error').text('Sign Up Success')

  
   console.log(response)
  

}

const onIndexSignUpFailure = function (){
    $('#error').text('Sign Up Failure')

}


const onIndexSignInSuccess = function (response){
    $('#error').text('Sign In Success')

   
      console.log(response)

    // .then((response) => console.log(response))
    //     .catch(() => console.log(response ))
     
store.user=response.user
   
//  Testining boxclick
}

const onIndexSignInFailure = function (response){
    $('#error').text('Signed In Failure')

}

const onIndexSignOutSuccess =function(response){
    $('#error').text(' Sign Out Succsess ')
}

const onIndexSignOutFailure =function(response){
    $('#error').text(' Sign Out Failure ')
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