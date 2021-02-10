function filter(arr,callback){
    let result = []
    for(let i=0;i<arr.length;i++){
        const flag = callback(arr[i],i)
        flag && result.push(arr[i])
    }
    return result
}