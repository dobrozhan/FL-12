let a = parseInt(prompt('a'));
let b = parseInt(prompt('b'));
let c = parseInt(prompt('c'));

if (isNaN(a) || isNaN(b) || isNaN(c)){
    window.alert('input values should be ONLY numbers');
  } else if (a === 0 || b === 0 || c === 0 || a < 0 || b < 0 || c < 0){
    console.log('Triangle doesn’t exist'); 
    window.alert('A triangle must have 3 sides with a positive definite length');
    } else if (a + b > c && a + c > b && b + c > a){
        if (a === b && a === c && b === c){
            console.log('Equilateral triangle');
        } else if(a === b || a === c || b === c){
            console.log('Isosceles triangle');
        } else if(a !== b && a!== c && b !== c){
            console.log('Scalene triangle');
        }
    } else {
    console.log('Triangle doesn’t exist');
    window.alert('Triangle doesn’t exist');   
}