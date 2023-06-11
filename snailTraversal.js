Array.prototype.snail = function(rowsCount, colsCount) {
    let res=[]
    let rc=0;
    let cc=0;
    for(let i=0;i<this.length;i++){
        let pos=i%rowsCount;
        if(res[pos]===undefined){
            res[pos]=[]
        }
        res[pos].push(this[i])
    }
    return res;
}
let arr=[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
arr.snail(5,4)