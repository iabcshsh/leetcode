var distanceTraveled = function(mainTank, additionalTank) {
    let distance =0;
    
    while(mainTank>0){
            distance+=10;
            mainTank--;
         if(distance%50 == 0 && additionalTank>0 && distance!= 0){
           distance+=10
           additionalTank--;
            
        }
    }
    
    return distance;
    
};
console.log(distanceTraveled(9,1))