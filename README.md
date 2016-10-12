# JSrandom

Random module for JavaScript


### JSrandom.randFloat([from,] to)
Arguments
[from] (Number): The lower bound of range, *defaut is zero*.
to (Number): The upper bound of range.
Returns
(Number): Returns a random number between [from,to).
Example
```JavaScript
JSrandom.randFloat(5);
//=>1.4567891701389055
JSrandom.randFloat(-2,3);
//=>-0.37792440940529315
```
### JSrandom.randInt([from,] to)
Arguments
[from] (Number): The lower bound of range, *defaut is zero*.
to (Number): The upper bound of range.
Returns
(Integer): Returns a random integer between [from,to).
Example
```JavaScript
JSrandom.randInt(5);
//=>2
JSrandom.randInt(-2,3);
//=>-1
```
### JSrandom.select(array [, generator])
Arguments
array (ArrayLike): The array to select.
[generator] (function): A random number generator.
Returns
(any): Returns a random element in the array.
Example
```JavaScript
JSrandom.select("abcdefg");
//=>"f"
JSrandom.select([0,2,3,5,2,9,1],Math.random);
//=>5
```
### JSrandom.choice(array)
#### Equal to JSrandom.select(array), use the built-in generator

### JSrandom.sample(array [,number])
Arguments
array (ArrayLike): The array to select.
[number] (Number): The element number to pick, *defaut value is a random number between [1,array.length)*.
Returns
(array): A random subset of the array.
Example
```JavaScript
JSrandom.sample("abcdefg");
//=>["b", "e", "c", "a", "d", "f", "g"]
JSrandom.sample([0,2,3,5,2,9,1],3);
//=>[5, 0, 2]
```
### JSrandom.shuffle(array)
Arguments
array (ArrayLike): The array to shuffle.
Returns
(array): A new shuffled list, do not change the origin array.
Example
```JavaScript
JSrandom.shuffle("abcdefg");
//=>"bacdegf"
JSrandom.shuffle([0,2,3,5,2,9,1]);
//=>[0, 3, 2, 9, 5, 2, 1]
```

## Class
### JSrandom.Uniform(lower,upper)
#### Constructor of the random number generator obey uniform distribution.
Arguments
lower (Number): The lower bound of range.
upper (Number): The upper bound of range.
Returns
(function): An instance of Uniform which generate uniform random numbers between lower and upper.
Example
```JavaScript
var generator = new JSrandom.Uniform(0,10);
generator();
//=>2.0685795052296387
```
### JSrandom.Gaussian(mu,sigma)
#### Constructor of the random number generator obey gaussian distribution.
Arguments
mu (Number): The expectation of gaussian distribution.
sigma (Number): The variance of gaussian distribution.
Returns
(function): An instance of Gaussian which generate random number obey normal distribution.
Example
```JavaScript
var generator = new JSrandom.Gaussian(0,1);
generator();
//=>0.6532581496839591
```
### JSrandom.Bernoulli(prob)
#### Constructor of the random number generator obey bernoulli distribution.
Arguments
prob (Number): The probability of true.
Returns
(function): An instance of Bernoulli which return true or false.
Example
```JavaScript
var generator = new JSrandom.Bernoulli(0.5);
generator();
//=>true
generator();
//=>false
```
### JSrandom.Binomial(upper,prob)
#### Constructor of the random number generator obey binomial distribution.
Arguments
upper (Integer): The upper bound of range.
prob (Number): The probability of success.
Returns
(function): An instance of Binomial which return integer [ 0, upper ] , the probability obey the binomial distribution.
Example
```JavaScript
var generator = new JSrandom.Binomial(10,0.5);
generator();
//=>8
generator();
//=>3
```
### JSrandom.Cauchy(location,scale)
#### Constructor of the random number generator obey cauchy distribution.
Arguments
location (Number): The location of cauchy distribution.
scale (Number): The scale of cauchy distribution.
Returns
(function): An instance of Cauchy which return random number obey the cauchy distribution.
Example
```JavaScript
var generator = new JSrandom.Cauchy(3,1);
generator();
//=>5.677625315054479
generator();
//=>-10.669827067906697
```
### JSrandom.Exponential(lamda)
#### Constructor of the random number generator obey exponential distribution.
Arguments
lamda (Number): The index coefficient of Exponential distribution.
Returns
(function): An instance of Exponential which return random number obey the exponential distribution.
Example
```JavaScript
var generator = new JSrandom.Exponential(3);
generator();
//=>0.21951388774858185
generator();
//=>0.15475914346331018
```
### JSrandom.Geometric(prob)
#### Constructor of the random number generator obey geometric distribution.
Arguments
prob (Number): The probability of success.
Returns
(function): An instance of Geometric which return random number obey the geometric distribution.
Example
```JavaScript
var generator = new JSrandom.Geometric(0.3);
generator();
//=>7
generator();
//=>0
```
### JSrandom.Weibull(shape,scale)
#### Constructor of the random number generator obey weibull distribution.
Arguments
shape (Number): The shape of weibull distribution.
scale (Number): The scale of weibull distribution.
Returns
(function): An instance of Weibull which return random number obey the weibull distribution.
Example
```JavaScript
var generator = new JSrandom.Weibull(4,2);
generator();
//=>1.763717361552961
generator();
//=>2.4733053806446406
```
    