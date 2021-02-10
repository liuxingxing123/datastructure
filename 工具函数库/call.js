function call(Fn,obj,...args){
    if(obj===undefined || obj===null){
        obj = globalThis
    }
    obj.temp = Fn
    let result = obj.temp(...args)
    delete obj.temp
    return result
}