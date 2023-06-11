function objDiff(obj1, obj2) {
    if(obj1 === obj2){
        return {}
    } 
    if(obj1 === null || obj2 === null){
        return [obj1,obj2];
    }
    if(typeof obj1!== 'object' || typeof obj2!== 'object'){
        return [obj1,obj2]
    }
    if(Array.isArray(obj1) !== Array.isArray(obj2)){
        return [obj1,obj2]
    }
    const returnObject={}

    for(let x in obj1){
        if(x in obj2){
            const subdiff=objDiff(obj1[x],obj2[x]);
            if(Object.keys(subdiff).length > 0){
                returnObject[x]=subdiff;
            }
            
        }

    }
    return returnObject;

};
let obj1={"a": 1, "v": 3, "x": [], "z": {"a": null}}
let obj2={"a": 2, "v": 4, "x": [], "z": {"a": 2}}
console.log(objDiff(obj1,obj2))