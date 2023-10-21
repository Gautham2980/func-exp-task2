var a=prompt("enter a number")
document.write("The given number="+a+" "+"The square of the number=")

let square=function(a){
    return a*a;
}

let res=square(a);
document.write(res);