(function (root){
    //This random generator use MT19937
    //generate a random seed for Mersenne twister algorithm.
    var SEED = Math.random() * new Date();
    var MT = [parseInt(SEED)];
    var RAND_MAX = 0x7fffffff;
    var index = 0;

    //Initialize the generator from the seed
    for (var i=1;i<624 ;i++ ){
        MT[i] = (1812433253 * (MT[i-1] ^ (MT[i-1] >> 30)) + i) & 0xffffffff;
    }

    //genarate random number
    function msRand(){
        if (index === 0){
            msRenerate();
        }
        var y = MT[index];
        y = y ^ (y >> 11);
        y = y ^ ((y << 7) & 0x9d2c5680);
        y = y ^ ((y << 15) & 0xefc60000);
        y = y ^ (y >> 18);
        index = (index + 1) % 624;
        return y;
    }

    function msRenerate(){
        var i,y;
        for (i=0;i<624 ;i++ ){
            y = (MT[i] & 0x80000000) + (MT[(i+1) % 624] & 0x7fffffff);
            MT[i] = MT[(i + 397) % 624] ^ (y >> 1);
            if ( y % 2 !== 0){
                MT[i] = MT[i] ^ 0x9908b0df;
            }
        }
    }

    //Return a random number between [0,1)
    function uniform(){
        return msRand()/ RAND_MAX;
    }

    /*
        Return random Float number between (start,end).
        the defaut value of `start` and `end` is 0 and 1.
        randFloat() <--> [0,1)
        randFloat(a) <--> [0,a)
        randFloat(a,b) <--> [a,b)
    */
    function randFloat(start,end){
        if (undefined == start){
            return uniform();
        }
        if (undefined == end){
            return start * uniform();
        }
        return start + uniform()*(end-start);
    }

    function randInt(){
        return parseInt(randFloat.apply(null,arguments));
    }

    function Int32(){
        return msRand();
    }

    function toHex(number){
        return number.toString(16);
    }

    function hex(){
        return toHex(randInt(0,16));
    }

    function color(){
        return [randInt(0,256),randInt(0,256),randInt(0,256)];
    }

    function leftpad(str,len,char){
        len = len || 4;
        char = char || "0";
        return new Array(len + 1 - str.length).join(char) + str;
    }

    function colorHex(){
        return "#" + color().map(toHex).map(v=>leftpad(v,2,0)).join("");
    }

    function select(list,fn){
        fn = fn || uniform;
        var randNum = Math.abs(fn());
        if (randNum > 1){
            randNum = randNum % 1.0;
        }
        randNum = Math.floor(randNum * list.length);
        return list[randNum];
    }

    function choice(list){
        return select(list);
    }

    function shuffle(list){
        if (typeof list === "string"){
            return shuffle(list.split('')).join('');
        }
        if (Array.isArray(list)){
            return list.concat([]).sort(function(a,b){return uniform()-0.5});
        }
        return list;
    }

    function range(head,tail,step){
        var argv = [].slice(arguments);
        var head = 0,tail = 0,step = 1,array = [];
        switch(argv.length){
            case 1:
                tail = argv[0];
                break;
            case 2:
                head = argv[0];
                tail = argv[1];
                break;
            case 3:
                head = argv[0];
                tail = argv[1];
                step = argv[2];
                break;
        }
        for (var i=head;i<=tail ;i += step){
            array.push(i);
        }
        return shuffle(array);
    }

    function uuid(len, radix){
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
            uuid = [],
            radix = radix || chars.length,
            i;
        if (len){
            for (var i = 0; i < len; i++){
                uuid[i] = chars[0|uniform()*radix];
            }
        }
        else {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | uniform()*16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    }

    function sample(array,num){
        var copy = [].map.call(array,function(v){return v});
        num = num || randInt(1,copy.length);
        if (num >= copy.length){
            return shuffle(copy);
        }else {
            var arr = [];
            while(arr.length<num){
                copy=this.shuffle(copy);
                arr.push(copy.shift());
            }
            return arr;
        }
    }

    function Uniform(lower,upper){
        return function (){
            return lower + uniform()*(upper-lower);
        }
    }

    function Gaussian(mu,sigma){
        mu = mu || 0;
        sigma = sigma || 1;
        sigma = Math.abs(sigma);
        return function (){
            return normal()*Math.sqrt(sigma)+mu;
        }
    }

    //Box–Muller transform
    var normal = (function (){
        var generate = false;
        var v1=0.0, v2=0.0, x=0.0;
        var uniform = new Uniform(-1,1);
        return function (){
            if (generate){
                generate = false;
                return  v2 * x;
            }else {
                var s;
                do{
                    v1 = uniform();
                    v2 = uniform();
                    s = v1*v1 + v2*v2;
                }while(s == 0 || s >= 1)
                x = Math.sqrt(-2 * Math.log(s) / s);
                generate = true;
                return v1 * x;
            }
        }
    })();

    function Bernoulli(prob){
        var prob = prob;
        return function (){
            return uniform() < prob;
        }
    }

    //factorial f(N) = N!
    var factorial = (function(){
        var record = [1,1];
        return function (n){
            if (!record[n]){
                record[n] = n*arguments.callee(n-1);
            }
            return record[n];
        }
    })()

    function Binomial(up,prob){
        var probs = [];
        for (var i=0;i<=up ;i++ ){
            probs[i] = factorial(up) / factorial(up-i) / factorial(i) * Math.pow(prob,i) * Math.pow(1-prob,up-i);
        }
        for (var i=1;i<=up ;i++ ){
            probs[i] = probs[i] + probs[i-1];
        }
        return function (){
            var num = uniform();
            for (var i=0;i<=up ;i++ ){
                if (probs[i] > num){
                    return i;
                }
            }
        }
    }

    function Cauchy(location,scale){
        return function (){
            return Math.tan((uniform() - 0.5) * Math.PI) * scale + location;
        }
    }

    function Gamma(alph,beta){
    }

    function chiSquared(freedomDegree){
    }

    function Poisson(mean){
        var c = Math.exp(-mean);
        return function (){
            var x=0,b=1;
            do {
                x += 1;
                b *= uniform();
            }
            while(b>=c);
            return x;
        }
    }

    function Exponential(lamda){
        return function (){
            return -Math.log(uniform())/lamda;
        }
    }

    function Geometric(prob){
        var temp = Math.log(1-prob);
        return function (){
            return Math.ceil(Math.log(1-uniform())/temp) - 1;
        }
    }

    function Weibull(shape,scale){
        var temp = -Math.pow(scale,shape);
        return function (){
            return Math.exp(Math.log(temp*Math.log(1-uniform())) / shape);
        }
    }

    var JSrandom = {
        randFloat:randFloat,
        randInt:randInt,
        select:select,
        choice:choice,
        sample:sample,
        shuffle:shuffle,
        Uniform:Uniform,
        Gaussian:Gaussian,
        Bernoulli:Bernoulli,
        Cauchy:Cauchy,
        Poisson:Poisson,
        Exponential:Exponential,
        Geometric:Geometric,
        Binomial:Binomial,
        Weibull:Weibull
    };

    if (typeof define === "function" && define.amd) {
        define(function () {
            return JSrandom;
        });
    }else if(typeof module !== "undefined" && typeof require === "function") {
        module.exports = JSrandom;
    }else {
        (function () {
            var oldGlobal = root.JSrandom;
            JSrandom.noConflict = function () {
                root.JSrandom = oldGlobal;
                return this;
            };
        })();
        root.JSrandom = JSrandom;
    }
})(this)


