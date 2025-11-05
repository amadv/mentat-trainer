---
title: Logarithm Technique
---
# Logarithm Technique

What are Logarithms?
====================

The concept of logarithms was published in 1614 by John Napier (but were probably independently invented by swiss clockmaker Joost Bürgi around 1588). The idea behind logarithms is to make multiplication much faster by using the simpler techniques of addition and subtraction.

If your are given the equation a^b^=c, your can re-write the equation as log,,a,,(c)=b, read as, "the log (logarithm) in base a of c equals b," to solve for b. For example, 10^4^=10,000, so mathematically speaking, log,,10,,(10,000)=4. In other words, the base 10 log of 10,000 is 4.

Base 10 Logarithms
==================

We'll start with logarithms in base 10, because that is the number base familiar to most people.

Powers of 10
------------

The logarithm of any power of 10 in base 10 is simple to figure out, as they are always whole numbers equal to the number of trailing zeros.

log,,10,,1=0  
 log,,10,,10=1  
 log,,10,,100=2  
 log,,10,,1,000=3  
 log,,10,,10,000=4  
 log,,10,,100,000=5

...and so on.

Logs of Other Whole Numbers
---------------------------

The base 10 log of other numbers are expressed with trailing decimal places. Since log,,10,,1=0 and log,,10,,10=1, all the logarithms of the numbers from 1 through 10 will be between 0 and 1.

### Logs of Primes Between 1 and 10

As you already know, the base 10 log of 1 is 0. Here are the logarithms to four decimal places of all the primes between 1 and 10:

log,,10,,2=.3010 (because 10^.3010^=2)  
 log,,10,,3=.4771  
 log,,10,,5=.6990  
 log,,10,,7=.8451

You can use [MemoryTechnique](/memory-technique/) to remember these numbers, but using logs will be simpler and more direct if you learn these numbers through repetition.

*(Some people prefer to memorize things the "other way around".* *Instead of memorizing the logs of the integers 1, 2, 3, 4, ... 10,* *they memorize the values that, after you take the log of them and multiply them by 10,* *give the integers 0, 1, 2, 3, ... 10.* *See <http://en.wikipedia.org/wiki/Decibel#Reckoning> ).*

### Logs of Other Non-Primes Between 1 and 10

Here are the logs of the remaining numbers between 1 and 10 to four decimal places:

log,,10,,4=.6020  
 log,,10,,6=.7781  
 log,,10,,8=.9031  
 log,,10,,9=.9542

These logs, you don't have to remember. Why not? Because you can use the prime base 10 logs you learned in the previous section to determine these!

If you want to know the logarithms for any number from 1 to 10, simply break it down into it's prime factors, and add the logs for those prime factors together. Mathematically speaking, the formula looks like this:

log,,10,,(x\*y)=log,,10,,(x) + log,,10,,(y)

To figure out these log for 4, the process would look something like this:

log,,10,,4=log,,10,,(2\*2)=log,,10,,2 + log,,10,,2=.3010 + .3010=.6020

Notice that you solved a multiplication problem by addition? You've just had you first taste of the power of logarithms!

Here is how the other non-prime logarithms break down:

log,,10,,6=log,,10,,(2\*3)=log,,10,,2 + log,,10,,3=.3010 + .4771=.7781  
 log,,10,,8=log,,10,,(2\*2\*2)=log,,10,,2 + log,,10,,2 + log,,10,,2=.3010 + .3010 + .3010=.9030  
 log,,10,,9=log,,10,,(3\*3)=log,,10,,3 + log,,10,,3=.4771 + .4771=.9542

Note that log,,10,,8 isn't exact, but it is only off by 1/10,000th!

Practice quizzing yourself on the base 10 logs of all the numbers from 1 to 10 before moving on to the next sections.

Also, note that the logs don't progess in a simple linear scale. As they get closer to 10, the amount the logs increase by gets smaller and smaller. This, not surprisingly, is referred to as a "logarithmic" scale.

Logs of Other Numbers Greater Than 10 With Trailing Zeros
---------------------------------------------------------

Just as all the base 10 logs of the numbers 1 through 10 fall between 0 and 1, the logs of numbers between 10 and 100 would all fall between 1 and 2. The base 10 logs of numbers between 100 and 1000 would fall between 2 and 3, and so on.

The process of finding the logs for any number that ends in trailing zeros adds just one step to the process you've already learned. Start by writing the number in exponential form (a \* 10^b^). Write down "b" as the first number. Next, take the leftmost digit (the "a" in a \* 10^b^), and write down its base 10 log. These two numbers together will give a good approximation of the base 10 log for that number.

As an example, let's find the log of 20. 20=2 \* 10^1^, so we start by writing "1". The leftmost digit is a 2, and the base 10 log of 2, as we learned earlier, is .3010, so we write ".3010" next to the "1" we wrote down previously, giving us a result of 1.3010.

How about a larger number like 300,000? 300,000=3 \* 10^5^, so we write "5". The leftmost digit is a 3, so we add ".4771" to the 5, so we know that log,,10,,300,000=5.4771!

What does log,,10,,8,000 equal? It's "3" (8 \* 10^3^) plus ".9030" for the leftmost 8 (log,,10,,2 + log,,10,,2 + log,,10,,2), giving us log,,10,,8,000=3.9030!

Logs of Other Numbers Greater Than 10 Without Trailing Zeros
------------------------------------------------------------

For most numbers, you will only be able to approximate the log. With what you've learned already, however, you'll be able to create an amazing approximation of the log, however.

As a starting example, we'll try an approximate the log of 2,087. We start by converting the number into its exponential form, which gives us 2.087 \* 10^3^.

Next, we need to round the number to the nearest 10th, so we have an easier equation to work with. Rounding our example up, we get 2.1 \* 10^3^. We already known from this equation that the first number we need is 3.

In this example, we know that the log,,10,,2=.3010 and log,,10,,3=.4771, so how do figure out log,,10,,2.1? We can get a good estimate by assuming that the log,,10,,2.1 is 1/10 of the distance between .3010 and .4771. The distance between these numbers is about .17, so 1/10 of the distance is .017. Adding .017 to .3010 gives us .3180.

Adding this to our previous result, gives 3.3180 as an approximate base 10 log for 2,087. Checking with a calculator, we find that the actual answer for log,,10,,2,087 is 3.3195. Our mental approximation was only off by little more than 1/1000th!

To help reinforce the process, let's try a trickier challenge, such as log,,10,,85,412. 85,412 translates roughly to 8.5 \* 10^4^.

Approximating 5/10 of the distance between .9030 (log,,10,,8) and .9542 (log,,10,,9), we get .929, so we can approximate log,,10,,85,412 as 4.9286. A calculator will show that log,,10,,85,412 is 4.9315, giving us a difference of little more than 5/1000! That's not a bad approximation for some brief mental work.

The more you practice with these logs, the better a feel you'll get for better approximation, too. Notice too, that while the logs run on a logarithmic scale, approximating with a linear scale still helps get quite close.