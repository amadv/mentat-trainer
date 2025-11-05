---
title: Numbers Near Mutiples of Ten
---

# Mentat Wiki: Numbers Near Multiples Of Ten

It's fairly easy to multiply two numbers that are close to the same multiple of 10.

The algorithm for doing it is called “Nikhilam Navatascaramam Dasata.” It is part of a system of algorithms and mnemonics to remember them, collectively known as “Vedic Math”, that was developed by Jagadguru Swami Bharati Krishna Tirthaji Maharaj in the early 20th century.

The easiest way to explain the algorithm is to give examples, and explain the algorithm along the way.

```
   7
 x 8
```

First find a suitable “base”. Since 7 and 8 are both close to 10, we'll use 10. Write the difference between the numbers to be multiplied, and the base, off to the right:

```
base 10

   7     | -3
 x 8     | -2
```

Multiply the differences. -3 x -2 = 6. We need as many total digits as we have zeros in our base (1); if we didn't have enough, we would need to pad with leading zeroes, but that's not a problem because we have one digit and that's all we need. Write it on the right side of the answer:

```
base 10

   7     | -3
 x 8     | -2
________

         | 6
```

Now add the difference between the one number to be multiplied and 10, to the other number to be multiplied. Pick either combination, because you will get the same result

```
8 + (– 3) = 5  OR  7 + (– 2) = 5
```

Put the result on the left side of the answer:

```
base 10

   7     | -3
 x 8     | -2
________

   5 | 6   

7 x 8 = 56
```

Now let's try it with significantly bigger numbers, to see why this is such an advantage.

```
   98     
 x 89
 ____
```

Since both numbers are close to 100, we will use 100 as our base. Write the difference between the numbers to be multiplied, and the base, off to the right. Because 100 has two zeroes, we need two digits on the right hand side.

```
base 100

   98      (-2)    
 x 89      (-11)
___________
87 | 22

98 x 89 = 8722
```

The 87 comes from either 89 + (-2), or 98 + (-11). The 22 comes from (-2) x (-11). You can do this problem in your head. Let's try another one, to show when you need to pad the right side with leading zeroes:

```
base 100

   98      (-2)    
 x 97      (-3)
___________
95 | 06

98 x 97 = 9506
```

The 95 comes from either 97 + (-2) or 98 + (-3). The 06 comes from (-2) x (-3). We need to pad it with a zero, because the base is 100 so we need two digits on the right-hand side.

Let's try an example where the numbers to be multiplied are a little bigger than a multiple of 10:

```
base 100

   105     (+5)
  x102     (+2)
___________
107 | 10

105 x 102 = 10710
```

The 107 comes from either 102 + 5 or 105 + 2. The 10 comes from 5 x 2 (the product of the differences on the right).

Let's try another example where the numbers to be multiplied are on either side of a multiple of 10:

```
   104     (+4)
 x  98     (-2)
__________
102 | -08
```

Uh oh, we have a negative on the right! Add it to the left hand side:

```
10200 + (-08) = 10192

104 x 98 = 10192
```

Let's try bigger numbers.

```
Base 1000

   995     (-5)
  x998     (-2)
__________
993 | 010
```

993 = 995 + (-2) OR 993 = 998 + (-5). 010 comes from (-5) x (-2) = 10, then padded with one leading zero because we need 3 digits because our base is 1000.

The method also works with multiples of powers of 10:

```
base 20 = 2 x 10

   18     (-2)
  x17     (-3)
 _________
 15 | 6         (not done yet!)
```

because we had to multiply 10 by 2 to get to the base, we need to multiply the LEFT SIDE ONLY of the answer by 2

```
base 20 = 2 x 10

   18     (-2)
  x17     (-3)
_________
30 | 6    

18 x 17 = 306
```

One more example with base 20 base 20 = 2 x 10

:   13 (-7) 15 (-5) \_
:   8 | 35

because we had to multiply 10 by 2 to get to the base, we need to multiply the LEFT SIDE ONLY of the answer by 2

:   13 (-7) 15 (-5) \_ 16 | 35

but because we only need one digit on the right hand side we need to add the 3 to the 16 to make 19

13 x 15 = 195