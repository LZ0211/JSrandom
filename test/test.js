var Random = require("../Random");

//test Uniform

function repeat(char,number){
    return new Array(number+1).join(char);
}
console.log("Test Uniform generator");
var uniform = new Random.Uniform(0.0,1.0);
var list = {};

for (var i=0;i<10000 ;i++ ){
    var num = parseInt(10 * uniform());
    list[num] = (list[num] || 0) + 1;
}

//test Gaussian generator

Object.keys(list).sort((x,y)=>x-y).forEach(function (k){
    console.log(k + ":" + repeat("*",Math.round(list[k]/100)))
});

console.log("Test Gaussian generator");
var gaussian = new Random.Gaussian(5.0,3.0);

var list = {};

for (var i=0;i<10000 ;i++ ){
    var num = parseInt(gaussian());
    list[num] = (list[num] || 0) + 1;
}

Object.keys(list).sort((x,y)=>x-y).forEach(function (k){
    if (list[k] > 50){
        console.log(k + ":" + repeat("*",Math.round(list[k]/100)))
    }
});

//test Bernoulli generator

console.log("Test Bernoulli generator");
var bernoulli = new Random.Bernoulli(0.5);

var list = {
    true:0,
    false:0,
};

for (var i=0;i<10000 ;i++ ){
    var num = bernoulli();
    list[num] = (list[num] || 0) + 1;
}

Object.keys(list).sort((x,y)=>x-y).forEach(function (k){
    console.log(k + ":" + list[k])
});

//test Binomial generator

console.log("Test Binomial generator");
var binomial = new Random.Binomial(9,0.5);

var list = {};

for (var i=0;i<10000 ;i++ ){
    var num = binomial();
    list[num] = (list[num] || 0) + 1;
}

Object.keys(list).sort((x,y)=>x-y).forEach(function (k){
    if (list[k] > 50){
        console.log(k + ":" + repeat("*",Math.round(list[k]/100)))
    }
});

//test Cauchy generator

console.log("Test Cauchy generator");
var cauchy = new Random.Cauchy(0,1);

var list = {};

for (var i=0;i<10000 ;i++ ){
    var num = parseInt(cauchy());
    list[num] = (list[num] || 0) + 1;
}

Object.keys(list).sort((x,y)=>x-y).forEach(function (k){
    if (list[k] > 50){
        console.log(k + ":" + repeat("*",Math.round(list[k]/100)))
    }
});

//test Exponential generator

console.log("Test Exponential generator");
var exponential = new Random.Exponential(3.5);

var list = {};

for (var i=0;i<10000 ;i++ ){
    var num = parseInt(exponential() * 10);
    list[num] = (list[num] || 0) + 1;
}

Object.keys(list).sort((x,y)=>x-y).forEach(function (k){
    if (list[k] > 50){
        console.log((k/10).toFixed(1) + ":" + repeat("*",Math.round(list[k]/100)))
    }
});

//test Geometric generator

console.log("Test Geometric generator");
var geometric = new Random.Geometric(0.3);

var list = {};

for (var i=0;i<10000 ;i++ ){
    var num = parseInt(geometric());
    list[num] = (list[num] || 0) + 1;
}

Object.keys(list).sort((x,y)=>x-y).forEach(function (k){
    if (list[k] > 50){
        console.log(k + ":" + repeat("*",Math.round(list[k]/100)))
    }
});

//test Weibull generator

console.log("Test Weibull generator");
var weibull = new Random.Weibull(2.0,4.0);

var list = {};

for (var i=0;i<10000 ;i++ ){
    var num = parseInt(weibull());
    list[num] = (list[num] || 0) + 1;
}

Object.keys(list).sort((x,y)=>x-y).forEach(function (k){
    if (list[k] > 50){
        console.log(k + ":" + repeat("*",Math.round(list[k]/100)))
    }
});