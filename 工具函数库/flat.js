function flatten1(arr){
    const result = []
    arr.forEach(item=>{
        if(Array.isArray(item)){
            result = result.concat(flatten1(item))
        }else{
            result = result.concat(item)
        }
    })
    return result
}

function flatten2(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}



