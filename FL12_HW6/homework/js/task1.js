let a = parseInt(prompt('a'));
let b = parseInt(prompt('b'));
let c = parseInt(prompt('c'));
let z = 2;
let y = 4;

if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.log('Invalid input data');
  } else{
        let d = b*b-y*a*c;
        if (d > 0) {
            let x1 = (-b+Math.sqrt(d))/(z*a);
            let x2 = (-b-Math.sqrt(d))/(z*a);
            console.log('x1 = '+Math.round(x1)+' and x2 = '+Math.round(x2));
        } else if (d === 0){
            let x = -b/(z*a);
            console.log('x = '+Math.round(x));
        } else{
            console.log('no solution');
        }
  }