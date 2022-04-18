const store = require("../store")

 const onIndexSignUp = function(data) {
     
   return $.ajax({
        method:'POST',
        url:'https://tic-tac-toe-api-production.herokuapp.com/sign-up',
        data

    })
}

 const onIndexSignIn = function(data) {
     
     
   return $.ajax({
        method:'POST',
        url:'https://tic-tac-toe-api-production.herokuapp.com/sign-in',
        data

    })
}


 const onIndexSignOut = function(data) {
     console.log()
     
   return $.ajax({
        method:'DELETE',
        url:'https://tic-tac-toe-api-production.herokuapp.com/sign-out',
        headers:{Authorization:'Bearer ' +store.user.token }

    })
}
    const createGame= function(){
      return $.ajax({
          method:'POST',
        url:'https://tic-tac-toe-api-production.herokuapp.com/games',
        headers:{Authorization:'Bearer ' +store.user.token },
        data:{}


      })

      
        
    }

      const  update = function(index,value,over){
      return $.ajax({
          method:'PATCH',
        url:'https://tic-tac-toe-api-production.herokuapp.com/'+store.game._id,
        headers:{Authorization:'Bearer ' +store.user.token },
        data:{
  "game": {
    "cell": {
      "index": index,
      "value": value
    },
    "over": over
  }
}



      })
    }


    

    module.exports ={
        onIndexSignUp,
        onIndexSignIn,
        onIndexSignOut,
        createGame,
        update 


    }