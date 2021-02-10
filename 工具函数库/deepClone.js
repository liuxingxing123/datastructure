function deepClone(target){
    return JSON.parse(JSON.stringify(target))
}

function deepClone2(target){
    if(typeof target === 'object' && target!==null){
        const result = Array.isArray(target)?[]:{}
        for(let key in target){
            if(target.hasOwnProperty(key)){
                result[key] = deepClone2(target[key])
            }
        }
    }else{
        return target
    }
}

function deepClone3(target,map=new Map()){
    if(typeof target === 'object' && target!==null){
        let cache = map.get(target)
        if(cache){ return cache;}
        const result = Array.isArray(target)?[]:{}
        map.set(target,result)
        for(let key in target){
            if(target.hasOwnProperty(key)){
                result[key] = deepClone3(target[key],map)
            }
        }
    }else{
        return target
    }
}

function deepClone4(target,map=new Map()){
    if(typeof target === 'object' && target!==null){
        let cache = map.get(target)
        if(cache){ return cache;}
        const isArray = Array.isArray(target)
        const result = isArray?[]:{}
        map.set(target,result)
        if(isArray){
            target.forEach((item,index)=>{
                result[index] = deepClone4(item,map)
            })
        }else{
            Object.keys(target).forEach(key=>{
                result[key] = deepClone4(target[key,NamedNodeMap])
            })
        }
    }else{
        return target
    }
}