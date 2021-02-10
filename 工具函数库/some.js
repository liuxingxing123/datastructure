function some(arr,callback){
    let flag = false
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i)){
            flag = true
            break;
        }
    }
    return flag
}