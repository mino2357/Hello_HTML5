function isPrime(x : number) : boolean {
  let flag : boolean = true;
  for(let i : number = 2; i < x; ++i){
    if(x % i === 0){
      flag = false;
      break;
    }
  }
  return flag;
}

function checkPrimeNumber() {
  let x = Number(document.input_form.e.value);
  if(isPrime(x)){
    console.log(x + "は素数です．");
  }else{
    console.log(x + "は素数ではありません．");
  }
}
