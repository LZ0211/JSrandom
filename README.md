# JSrandom

Random module for JavaScript


### **JSrandom.randFloat([from,] to)**
#### Arguments
###### &ensp;&ensp;from (Number): The lower bound of range, *defaut is zero*.
###### &ensp;&ensp;to (Number): The upper bound of range.
#### Returns
###### &ensp;&ensp;(Number): Returns a random number between [from,to).
#### Example
```JavaScript
JSrandom.randFloat(5);// <=> JSrandom.randFloat(0,5)
//=>1.4567891701389055
JSrandom.randFloat(-2,3);
//=>-0.37792440940529315
```
----
### **JSrandom.randInt([from,] to)**
#### Arguments
###### &ensp;&ensp;from (Number): The lower bound of range, *defaut is zero*.
###### &ensp;&ensp;to (Number): The upper bound of range.
#### Returns
###### &ensp;&ensp;(Integer): Returns a random integer between [from,to).
#### Example
```JavaScript
JSrandom.randInt(5);// <=> JSrandom.randInt(0,5)
//=>2
JSrandom.randInt(-2,3);
//=>-1
```
----
### **JSrandom.select(array [, generator])**
#### Arguments
###### &ensp;&ensp;array (ArrayLike): The array to select.
###### &ensp;&ensp;generator (function): A random number generator.*defaut is the build-in uniform generator use MT19937*
#### Returns
###### &ensp;&ensp;(any): Returns a random element in the array.
#### Example
```JavaScript
JSrandom.select("abcdefg");
//=>"f"
JSrandom.select([0,2,3,5,2,9,1],Math.random);
//=>5
```
----
### **JSrandom.choice(array)**
#### &ensp;&ensp;Equal to JSrandom.select(array), use the built-in random number generator.
----
### **JSrandom.sample(array [,number])**
#### Arguments
###### &ensp;&ensp;array (ArrayLike): The array to select.
###### &ensp;&ensp;number (Number): The element number to pick, *defaut value is a random number between [1,array.length)*.
#### Returns
###### &ensp;&ensp;(Array): A random subset of the array.
#### Example
```JavaScript
JSrandom.sample("abcdefg");
//=>["b", "e", "c", "a", "d", "f", "g"]
JSrandom.sample([0,2,3,5,2,9,1],3);
//=>[5, 0, 2]
```
----
### **JSrandom.shuffle(array)**
#### Arguments
###### &ensp;&ensp;array (ArrayLike): The array to shuffle.
#### Returns
###### &ensp;&ensp;(Array): A shuffled list, do not change the origin array.
#### Example
```JavaScript
JSrandom.shuffle("abcdefg");
//=>"bacdegf"
JSrandom.shuffle([0,2,3,5,2,9,1]);
//=>[0, 3, 2, 9, 5, 2, 1]
```
----
## **Random Constructor**
----
### **JSrandom.Uniform(lower,upper)**
#### Constructor of the random number generator obey uniform distribution.
#### Arguments
###### &ensp;&ensp;lower (Number): The lower bound of range.
###### &ensp;&ensp;upper (Number): The upper bound of range.
#### Returns
###### &ensp;&ensp;(function): An instance of Uniform which generate uniform random numbers between lower and upper.
#### Example
```JavaScript
var generator = JSrandom.Uniform(0,10);
generator();
//=>2.0685795052296387
```
----
### **JSrandom.Gaussian(mu,sigma)**
#### Constructor of the random number generator obey gaussian distribution.
#### Arguments
###### &ensp;&ensp;mu (Number): The expectation of gaussian distribution.
###### &ensp;&ensp;sigma (Number): The variance of gaussian distribution.
#### Returns
###### &ensp;&ensp;(function): An instance of Gaussian which generate random number obey normal distribution.
#### Example
```JavaScript
var generator = JSrandom.Gaussian(0,1);
generator();
//=>0.6532581496839591
```
----
### **JSrandom.Bernoulli(prob)**
#### Constructor of the random number generator obey bernoulli distribution.
#### Arguments
###### &ensp;&ensp;prob (Number): The probability of true.
#### Returns
###### &ensp;&ensp;(function): An instance of Bernoulli which return true or false.
#### Example
```JavaScript
var generator = JSrandom.Bernoulli(0.5);
generator();
//=>true
generator();
//=>false
```
----
### **JSrandom.Binomial(upper,prob)**
#### Constructor of the random number generator obey binomial distribution.
#### Arguments
###### &ensp;&ensp;upper (Integer): The upper bound of range.
###### &ensp;&ensp;prob (Number): The probability of success.
#### Returns
###### &ensp;&ensp;(function): An instance of Binomial which return integer [ 0, upper ] , the probability obey the binomial distribution.
#### Example
```JavaScript
var generator = JSrandom.Binomial(10,0.5);
generator();
//=>8
generator();
//=>3
```
----
### **JSrandom.Cauchy(location,scale)**
#### Constructor of the random number generator obey cauchy distribution.
#### Arguments
###### &ensp;&ensp;location (Number): The location of cauchy distribution.
###### &ensp;&ensp;scale (Number): The scale of cauchy distribution.
#### Returns
###### &ensp;&ensp;(function): An instance of Cauchy which return random number obey the cauchy distribution.
#### Example
```JavaScript
var generator = JSrandom.Cauchy(3,1);
generator();
//=>5.677625315054479
generator();
//=>-10.669827067906697
```
----
### **JSrandom.Exponential(lamda)**
#### Constructor of the random number generator obey exponential distribution.
#### Arguments
###### &ensp;&ensp;lamda (Number): The index coefficient of Exponential distribution.
#### Returns
###### &ensp;&ensp;(function): An instance of Exponential which return random number obey the exponential distribution.
#### Example
```JavaScript
var generator = JSrandom.Exponential(3);
generator();
//=>0.21951388774858185
generator();
//=>0.15475914346331018
```

### **Other Random Distributions**
### Lognormal(mu,sigma)
### negativeBinomial(times,prob)
### Gumbel(location,scale)
### Logistic(location,scale)
### Geometric(prob)
### Gamma(shape,scale)
### Chisquared(degree)
### Poisson(mean)
### Weibull(shape,scale)
### Rayleigh(scale)

----
##**Random generator**
----
### **JSrandom.uniform()**
#### Returns
###### &ensp;&ensp;(Number): random number between between [0, 1) and obey uniform distribution.
#### Example
```JavaScript
JSrandom.uniform();
//=>0.22049420430347985
```
----
### **JSrandom.gaussian(mu,sigma)**
#### Arguments
###### &ensp;&ensp;mu (Number): The expectation of gaussian distribution, *defaut value is 0*.
###### &ensp;&ensp;sigma (Number): The variance of gaussian distribution, *defaut value is 1*.
#### Returns
###### &ensp;&ensp;(Number): random number obey normal distribution.
#### Example
```JavaScript
JSrandom.gaussian();
//=>1.7041861226289101
```

----
### **JSrandom.bernoulli(prob)**
#### Arguments
###### &ensp;&ensp;prob (Number): The probability of true, *defaut value is 0.5*.
#### Returns
###### &ensp;&ensp;(Bool): true or false.
#### Example
```JavaScript
JSrandom.bernoulli(0.8);
//=>true
```
----
### **JSrandom.exponential(lamda)**
#### Arguments
###### &ensp;&ensp;lamda (Number): The index coefficient of Exponential distribution.
#### Returns
###### &ensp;&ensp;(Number): random number obey the exponential distribution.
#### Example
```JavaScript
JSrandom.exponential(3);
//=>0.29350827394207385
```
----
###**Other generator**
### lognormal(mu,sigma)
### cauchy(location,scale)
### gumbel(location,scale)
### logistic(location,scale)
### poisson(mean)
### gamma(shape,scale)
### chisquared(degree)
### geometric(prob)
### binomial(up,prob)
### weibull(shape,scale)