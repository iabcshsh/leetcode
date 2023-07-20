var asteroidCollision = function(asteroids) {
    let stack=[]
    asteroids.forEach(a=>{
       while(a<0  && stack.length && stack[stack.length-1]>0){
           let diff=stack[stack.length-1]+a
           if(diff<0){
               stack.pop()
           }else if(diff>0){
               a=0;
           }else{
               a=0;
               stack.pop();
           }
       }
       if(a){
           stack.push(a)
       }
    })
    return stack;
};
