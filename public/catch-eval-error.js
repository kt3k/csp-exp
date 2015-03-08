console.log('catch-eval-error.js is loaded');


try {

    console.log(eval('this'));

} catch (e) {

    console.log('caught "%s"', e);

}

try {

    console.log(Function('return this')());

} catch (e) {

    console.log('caught "%s"', e);

}


console.log('catch-eval-error.js is finished');
