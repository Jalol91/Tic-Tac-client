const store = require("../store")

 const onIndexSignUp = function(data) {
     
   return $.ajax({
        method:'POST',
        url:'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
        data

    })
}

 const onIndexSignIn = function(data) {
     
     
   return $.ajax({
        method:'POST',
        url:'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
        data

    })
}


 const onIndexSignOut = function(data) {
     console.log()
     
   return $.ajax({
        method:'DELETE',
        url:'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
        data 

    })
}
    const createGame= function(){
      return $.ajax({
          method:'POST',
        url:'https://tic-tac-toe-api-development.herokuapp.com/games',
        headers:{Authorization:'Bearer ' +store.user.token },
        data:{}


      })
        
    }




    module.exports ={
        onIndexSignUp,
        onIndexSignIn,
        onIndexSignOut,
        createGame


    }