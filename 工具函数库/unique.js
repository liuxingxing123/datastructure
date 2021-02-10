function unique(arr){
    const obj = {}
    return arr.filter(item=>{
        return obj.hasOwnProperty(typeof item+item)?false:(obj[typeof item+item]=true);
    })
}

function unique2(arr){
    const result = []
    const obj = {}
    arr.forEach(item=>{
        if(obj[item] === undefined){
            obj[item] = true
            result.push(item)
        }
    })
    return result
}