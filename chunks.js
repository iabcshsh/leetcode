var chunk = function(arr, size) {
    let re=[]
    let f;
    function chunkit(a,s){
        while(a.length!==0){
            r=a.splice(0,s)
            re.push(r)
        }
    }
    chunkit(arr,size)
    return re;
};
console.log(chunk([1,2,3,4,5,6,7],2))