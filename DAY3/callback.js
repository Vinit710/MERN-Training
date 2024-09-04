function square(a){
    
    return a*a;
    

    
}

function cube(a){
    return a*a*a;
    
}

function sum(a){
    return a+a;
    

}

function callback1(a,fn,c,ss){
    var sq=fn(a);
    var cu=c(a);
    var s= ss(a);
    console.log(sq,cu,s);
}

console.log(callback1(2,square,cube,sum));