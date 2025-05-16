const promise1 = new Promise(function(resolve, reject){
    // Do an async task
    setTimeout(function(){
        console.log('Async task is complete')
    },1000)
})

promise1.then(function(resole){

    
})