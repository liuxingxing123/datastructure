function every(arr,callback){
    let flag = true
    for(let i=0;i<arr.length;i++){
        if(!callback(arr[i],i)){
            flag = false
        }
    }
    return flag
}