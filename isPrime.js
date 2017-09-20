function isPrime(x) {
    var flag = true;
    for (var i = 2; i < x; ++i) {
        if (x % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function checkPrimeNumber() {
    var x = Number(document.input_form.e.value);
    if (isPrime(x)) {
        console.log(x + "は素数です．");
    }
    else {
        console.log(x + "は素数ではありません．");
    }
}
