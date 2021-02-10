function slice(arr,begin,end){
    if(arr.length===0){
        return []
    }
    begin = begin || 0
    if(begin>=arr.length){
        return []
    }
    end = end || arr.length
    if(end<begin){
        end = arr.length
    }
    const result = []
    for(let i=0;i<arr.length;i++){
        if(i>=begin && i<end){
            result.push(arr[i])
        }
    }
    return result
}