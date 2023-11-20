/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let mPointer=-1;
    let pPointer=-1;
    let gPointer =-1;
    let mCounter=0;
    let pCounter=0;
    let gCounter=0;
    for(let i=0;i<garbage.length;i++){
        //split and count type of garbage
        let garb=garbage[i].split('')
        //filter m
        let ml=garb.filter((a)=>a=='M')
        //filter p
        let pl=garb.filter((a)=>a=='P')
        //filter g
        let gl=garb.filter((a)=>a=='G')
        //length of ml,pl,gl
        let mc=ml.length
        let pc=pl.length
        let gc=gl.length
        if(mc){
            mCounter+=mc*1;
            mPointer=i
        }
        if(pc){
            pCounter+=pc*1;
            pPointer=i
        }
        if(gc){
            gCounter+=gc*1;
            gPointer=i
        }


    }
    let total=0;
    let j=0;
    while(j<mPointer){
        total+=travel[j]
        j++
    }
    j=0
    while(j<gPointer){
        total+=travel[j]
        j++
    }
    j=0
    while(j<pPointer){
        total+=travel[j]
        j++
    }
    total+=pCounter+mCounter+gCounter

    return total

};
