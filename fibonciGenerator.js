var fibGenerator = function*() {
    let prev=0;
    let curr=1;
    while(true){
        yield prev;
        const temp = prev;
        prev=curr;
        curr +=temp;
    }
};


 const gen = fibGenerator();
 gen.next().value;
  gen.next().value; // 1
 