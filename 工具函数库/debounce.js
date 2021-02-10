function debounce(callback,wait){
    let timer = null
    return function(e){
        if(timer!==null){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            callback.call(this,e)
            timer = null
        },time)
    }
}

input.onkeydown = debounce(function(e){
    console.log(e.keyCode)
})