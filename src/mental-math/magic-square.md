---
title: Magic Square
---

# Magic Square

Introduction
============

A magic square is a X by X grid of numbers that add up to the same number in every row, and column. In many magic squares, the diagonals, the four corners and many other ways also equal the same total, as well.

In this article, you will learn how to create various types of magic squares.

Simpler Magic Square Methods
============================

This section will describe quick, simple ways to generate magic squares of any chosen **order** (an order X magic square is one that is X by X).

Odd Order Magic Squares
-----------------------

In this section, you will learn how to easily create magic squares of an odd order.

First, decide on an odd number with which you will start. As an example, we'll start with 3, so we'll start by drawing a 3 by 3 grid:

|  |  |  |
| --- | --- | --- |
| ... | .-5.. | .0.. |
| ... | ..-1. | ... |
| ... | ..+3. | ... |

As a starting point, you will always place the number 1 in the middle **cell** (the individual squares within the grid) of the top row:

|  |  |  |
| --- | --- | --- |
| ... | 1 | ... |
| ... | ... | ... |
| ... | ... | ... |

The remaining numbers will all be placed in numerical order according to two rules. The first rule is that, starting from the last square in which a number was placed, you will move one square up and one square to the right. If this takes you off the board at any point, simply consider the board as wrapping around (the top wraps around to the bottom, and the right side wraps around to the left).

Continuing on with 2, we have to move one square up and one square to the right. Moving up from where we placed the one takes us off the board, so we wrap around to the middle square of the bottom row. Moving right from here gives us the bottom right corner square, where we place the 2:

|  |  |  |
| --- | --- | --- |
| ... | 1 | ... |
| ... | ... | ... |
| ... | ... | 2 |

Moving up from here is easy enough, but moving right requires us to wrap around to the left side, where we place the 3:

|  |  |  |
| --- | --- | --- |
| ... | 1 | ... |
| 3 | ... | ... |
| ... | ... | 2 |

Moving up and right from here, we land on the square with the 1 in it. We obviously can't place the 4 in that square. What do we do?

It is in this case that we apply the second rule. The second rule is that, when you can't move up and to the right due to a previously placed square, you drop directly down one square and place the next number there. The same wraparound rules apply to this rule, of course.

Since the previously-placed one blocks us from moving up and to the right, we drop one square directly down, and place the 4 there:

|  |  |  |
| --- | --- | --- |
| ... | 1 | ... |
| 3 | ... | ... |
| 4 | ... | 2 |

5 and 6 are easily placed via the first rule:

|  |  |  |
| --- | --- | --- |
| ... | 1 | 6 |
| 3 | 5 | ... |
| 4 | ... | 2 |

Moving up and to the right to place the 7 is impossible, though, as that space is already taken by the 4. The second rule kicks in, so we drop one square directly down and place the 7 there:

|  |  |  |
| --- | --- | --- |
| ... | 1 | 6 |
| 3 | 5 | 7 |
| 4 | ... | 2 |

Following the first rule, we move up and to the right, thus arriving at the empty upper left corner square:

|  |  |  |
| --- | --- | --- |
| 8 | 1 | 6 |
| 3 | 5 | 7 |
| 4 | ... | 2 |

Finally, we move up and to the right, giving us the only square remaining for the 9:

|  |  |  |
| --- | --- | --- |
| 8 | 1 | 6 |
| 3 | 5 | 7 |
| 4 | 9 | 2 |

This is now a complete magic square, with the rows, columns and diagonals totaling 15. This technique will work for any square of an odd order.

Moving up to a 5 by 5 magic square, the same rules apply. We start with a 5 by 5 grid with a 1 in the top of the middle row:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| ... | ... | 1 | ... | ... |
| ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |

We fill the numbers in as long as we can by the first rule:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| ... | ... | 1 | ... | ... |
| ... | 5 | ... | ... | ... |
| 4 | ... | ... | ... | ... |
| ... | ... | ... | ... | 3 |
| ... | ... | ... | 2 | ... |

Since the 1 blocks us, we apply the second rule, drop straight down, and then return to the first rule:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| ... | ... | 1 | 8 | ... |
| ... | 5 | 7 | ... | ... |
| 4 | 6 | ... | ... | ... |
| 10 | ... | ... | ... | 3 |
| ... | ... | ... | 2 | 9 |

Now, the 6 blocks us, so we apply the second rule again, and then return to the first rule:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| ... | ... | 1 | 8 | 15 |
| ... | 5 | 7 | 14 | ... |
| 4 | 6 | 13 | ... | ... |
| 10 | 12 | ... | ... | 3 |
| 11 | ... | ... | 2 | 9 |

Applying the first rule to the 15 would place us at the square with 11 in it, so we apply the second rule, and place the 16 directly below it:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 17 | ... | 1 | 8 | 15 |
| ... | 5 | 7 | 14 | 16 |
| 4 | 6 | 13 | 20 | ... |
| 10 | 12 | 19 | ... | 3 |
| 11 | 18 | ... | 2 | 9 |

Dropping down once again, we continue from the 20:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 17 | 24 | 1 | 8 | 15 |
| 23 | 5 | 7 | 14 | 16 |
| 4 | 6 | 13 | 20 | 22 |
| 10 | 12 | 19 | 21 | 3 |
| 11 | 18 | 25 | 2 | 9 |

...and the magic square is complete. The magic square's rows columns and diagonals all total 65.

Even Order Magic Squares
------------------------

There are two different kinds of even order magic squares, those whose orders are evenly divisible by 4, and those whose orders are not. The latter are generally considered more difficult to construct.

### Even Order 4-Multiple Magic Squares

To teach you how to construct a magic square whose order is a multiple of 4, we'll start with an order 4 magic square first:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| ... | ... | ... | ... |
| ... | ... | ... | ... |
| ... | ... | ... | ... |

The first step is to draw two diagonals through the entire square:

|  |  |  |  |
| --- | --- | --- | --- |
| **\** |  |  | **/** |
|  | **\** | **/** |  |
|  | **/** | **\** |  |
| **/** |  |  | **\** |

Next, going from top to bottom, and from left to right, start with number 1, and increasing the number by 1 for each cell. You only actually write that number in its cell, however, if there's no diagonal in the cell already:

|  |  |  |  |
| --- | --- | --- | --- |
| **\** | 2 | 3 | **/** |
| 5 | **\** | **/** | 8 |
| 9 | **/** | **\** | 12 |
| **/** | 14 | 15 | **\** |

Now, start back at the top again, this time writing in the numbers from 16 down to 1, but only in boxes with a diagonal:

|  |  |  |  |
| --- | --- | --- | --- |
| **16** | 2 | 3 | **13** |
| 5 | **11** | **10** | 8 |
| 9 | **7** | **6** | 12 |
| **4** | 14 | 15 | **1** |

This completes our 4 by 4 magic square whose rows, columns and diagonals total 34.

To apply this principle to squares with other orders that are multiples of 4, we'll use an order 8 square as an example:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ... | ... | ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... | ... |

We start by drawing a diagonal through each 4 by 4 squares within the 8 by 8 grid:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **\** |  |  | **/** | **\** |  |  | **/** |
|  | **\** | **/** |  |  | **\** | **/** |  |
|  | **/** | **\** |  |  | **/** | **\** |  |
| **/** |  |  | **\** | **/** |  |  | **\** |
| **\** |  |  | **/** | **\** |  |  | **/** |
|  | **\** | **/** |  |  | **\** | **/** |  |
|  | **/** | **\** |  |  | **/** | **\** |  |
| **/** |  |  | **\** | **/** |  |  | **\** |

Just like in the 4 by 4 square, we start at the upper left corner with 1, and increase the number for each cell, only writing in the cell if there's no diagonal already in it:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **\** | 2 | 3 | **/** | **\** | 6 | 7 | **/** |
| 9 | **\** | **/** | 12 | 13 | **\** | **/** | 16 |
| 17 | **/** | **\** | 20 | 21 | **/** | **\** | 24 |
| **/** | 26 | 27 | **\** | **/** | 30 | 31 | **\** |
| **\** | 34 | 35 | **/** | **\** | 38 | 39 | **/** |
| 41 | **\** | **/** | 44 | 45 | **\** | **/** | 48 |
| 49 | **/** | **\** | 52 | 53 | **/** | **\** | 56 |
| **/** | 58 | 59 | **\** | **/** | 62 | 63 | **\** |

Finally, start with the highest number (64), and the leftmost box on the top, and fill in the numbers from 64 to 1, this time writing in only the squares with diagonal lines in them:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **64** | 2 | 3 | **61** | **60** | 6 | 7 | **57** |
| 9 | **55** | **54** | 12 | 13 | **51** | **50** | 16 |
| 17 | **47** | **46** | 20 | 21 | **43** | **42** | 24 |
| **40** | 26 | 27 | **37** | **36** | 30 | 31 | **33** |
| **32** | 34 | 35 | **29** | **28** | 38 | 39 | **25** |
| 41 | **23** | **22** | 44 | 45 | **19** | **18** | 48 |
| 49 | **15** | **14** | 52 | 53 | **11** | **10** | 56 |
| **8** | 58 | 59 | **5** | **4** | 62 | 63 | **1** |

This is now a complete magic square whose rows, columns and diagonals equal 260!

### Even Order Non-4-Multiple Magic Squares

These squares have orders that are even numbers, but the orders are not multiples of 4, such as 6 by 6, 10 by 10, and so on.

As an example, we'll start with a grid of 6 by 6:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |

A square like this is mentally broken up into 4 quadrants, in this case 3 by 3 (a 10 by 10 magic square would be broken up four 5 by 5 quadrants, and so on), and each quadrant is worked on separately. We start with the leftmost top quadrant, filling it in just as we learned in section 2.1:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **8** | **1** | **6** | ... | ... | ... |
| **3** | **5** | **7** | ... | ... | ... |
| **4** | **9** | **2** | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... |

Next, we move to the bottom rightmost quadrant, and continue on from the next number (10 in this case):

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 8 | 1 | 6 | ... | ... | ... |
| 3 | 5 | 7 | ... | ... | ... |
| 4 | 9 | 2 | ... | ... | ... |
| ... | ... | ... | **17** | **10** | **15** |
| ... | ... | ... | **12** | **14** | **16** |
| ... | ... | ... | **13** | **18** | **11** |

In the next step, we move to the top rightmost quadrant, and continue from the next number (19):

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 8 | 1 | 6 | **26** | **19** | **24** |
| 3 | 5 | 7 | **21** | **23** | **25** |
| 4 | 9 | 2 | **22** | **27** | **20** |
| ... | ... | ... | 17 | 10 | 15 |
| ... | ... | ... | 12 | 14 | 16 |
| ... | ... | ... | 13 | 18 | 11 |

This next step, of course, takes place in the bottom leftmost quadrant, with the next number (28):

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 8 | 1 | 6 | 26 | 19 | 24 |
| 3 | 5 | 7 | 21 | 23 | 25 |
| 4 | 9 | 2 | 22 | 27 | 20 |
| **35** | **28** | **33** | 17 | 10 | 15 |
| **30** | **32** | **34** | 12 | 14 | 16 |
| **31** | **36** | **29** | 13 | 18 | 11 |

Despite all the cells being filled, this is not a magic square yet. We need to transpose two groups of numbers.

In the upper leftmost quadrant, highlight a sideways v-shaped diagonal starting at the upper leftmost cell, going to the center cell of that quadrant, and then ending up at the lower leftmost cell in the quadrant (indicated in the diagram below with bold numbers):

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **8** | 1 | 6 | 26 | 19 | 24 |
| 3 | **5** | 7 | 21 | 23 | 25 |
| **4** | 9 | 2 | 22 | 27 | 20 |
| 35 | 28 | 33 | 17 | 10 | 15 |
| 30 | 32 | 34 | 12 | 14 | 16 |
| 31 | 36 | 29 | 13 | 18 | 11 |

Do the same thing for the lower leftmost quadrant:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **8** | 1 | 6 | 26 | 19 | 24 |
| 3 | **5** | 7 | 21 | 23 | 25 |
| **4** | 9 | 2 | 22 | 27 | 20 |
| **35** | 28 | 33 | 17 | 10 | 15 |
| 30 | **32** | 34 | 12 | 14 | 16 |
| **31** | 36 | 29 | 13 | 18 | 11 |

The highlighted numbers in the squares above are the ones you're going to transpose. Simply switch each highlighted cell for the respective cell in the opposite quadrant:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **35** | 1 | 6 | 26 | 19 | 24 |
| 3 | **32** | 7 | 21 | 23 | 25 |
| **31** | 9 | 2 | 22 | 27 | 20 |
| **8** | 28 | 33 | 17 | 10 | 15 |
| 30 | **5** | 34 | 12 | 14 | 16 |
| **4** | 36 | 29 | 13 | 18 | 11 |

The end result is a magic square that totals 111 in every row, column and diagonal! Unfortunately, this method cannot be extended as-is to higher order magic squares of order 4m + 2. Wolfram MathWorld provides a LUX Method for generation of magic squares of singly even order at <http://mathworld.wolfram.com/MagicSquare.html>

Simple Magic Square Formula
---------------------------

There is a simple formula that will determine the magic total for any square of any order generated by the above methods:  
 1) Cube the order of the square.  
 2) Add the order of the square to that total.  
 3) Divide that total by two.

With an order 3 magic square (3 by 3, that is), we cube the number 3, giving us 27. We add 3, resulting in 30. Dividing that by two, we get 15.

With an order 4 magic square, we would cube the number 4, giving us 64. Adding 4 gives us 68. Dividing that by two gives us 34.

An order 7 magic square would total 175, while an order 10 magic square would equal 505.

Custom Magic Squares
====================

More impressive than simply remembering how to generate a pre-determined magic square is the ability to generate a magic square for any number requested. In this section, you'll learn various methods for achieving this with 4 by 4 magic squares.

Simple Custom Magic Square
--------------------------

The advantage of this particular magic square is speed. A number from 33 to 99 is requested, and you can create a 4x4 magic square giving that total very quickly.

### The Simple Base Magic Square

First, we need a base 4 by 4 magic square as our starting point:

|  |  |  |  |
| --- | --- | --- | --- |
| 8 | 11 | ... | 1 |
| ... | 2 | 7 | 12 |
| 3 | ... | 9 | 6 |
| 10 | 5 | 4 | ... |

The empty cells will be filled in later. To remember this base magic square, we're going to apply the [MajorSystem](/memory-technique/major-system). Each row will be remembered as a phrase, with a space between words to remind us where the empty square needs to be.

The first phrase, for the first row is "FADED TIE". The F and two distinct D sounds in "FADED" remind us that the first two numbers are 8 and 11. The space between the words denotes the empty square, and the word "TIE" keys reminds us that 1 is at the final square of the first row.

The phrase for the first row, "FADED TIE", needs to be linked to the phrase for the second row, "SPOT OF NICOTINE". Imagine a spot of nicotine appearing without warning on the tie, and growing on its own. "SPOT OF" denotes where the space is (since just having a space at the beginning wouldn't be much help), and "NICOTINE" denotes that the numbers 2, 7 and 12 occupy the next three spaces in the second row.

The third row is remembered as "MY BEACH". Imagine the spot of nicotine becoming so large that it takes over your own private beach! "MY" helps you remember the 3 at the beginning of the first line, the space between "MY" and "BEACH", helps you remember the space right after the 3, and "BEACH" denotes the 9 and 6 in the remaining cells.

The final row is remembered as "DAZZLER". Above your own private beach, imagine seeing spectacular fireworks. "DAZZLER" helps remind us of the numbers 10, 5 and 4 at the beginning of the final row, while the lack of a space in the phrase suggests that it must be at the end.

Once you've linked "FADED TIE" to "SPOT OF NICOTINE" to "MY BEACH" to "DAZZLER", you're ready to do the magic square anytime, anywhere.

### Demonstrating the Simple Custom Magic Square

Draw a 4 by 4 grid, and ask for a number from 33 to 99. When a number is chosen, mentally subtract 21 from it to get your key number. This is most easily done by simply subtracting 20 from the number, and then subtracting 1.

For example, if you are given the number 57, you would subtract 20, giving 37, and then 1, resulting in 36 as your key number.

Once you've determined your key number, fill your grid in with your memorized pattern:

|  |  |  |  |
| --- | --- | --- | --- |
| 8 | 11 | ... | 1 |
| ... | 2 | 7 | 12 |
| 3 | ... | 9 | 6 |
| 10 | 5 | 4 | ... |

Next, put your key number in the leftmost empty space:

|  |  |  |  |
| --- | --- | --- | --- |
| 8 | 11 | ... | 1 |
| **36** | 2 | 7 | 12 |
| 3 | ... | 9 | 6 |
| 10 | 5 | 4 | ... |

Finally, fill in the remaining blanks clockwise, with each number increasing by 1. In our example, we would place 37, 38 and 39 as follows:

|  |  |  |  |
| --- | --- | --- | --- |
| 8 | 11 | **37** | 1 |
| 36 | 2 | 7 | 12 |
| 3 | **39** | 9 | 6 |
| 10 | 5 | 4 | **38** |

The magic square is now complete, and you will now show the ways in which the square gives their requested total (57, in our example).

### Ways That Give the Magic Total

Here are the myriad ways in which groups of 4 cells will give the requested total (with pink representing a group of 4, and red representing another distinct group of 4):

Rows:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF0000> ... | <#FF0000> ... | <#FF0000> ... | <#FF0000> ... |
| <#FF8888> ... | <#FF8888> ... | <#FF8888> ... | <#FF8888> ... |
| ... | ... | ... | ... |
| ... | ... | ... | ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| ... | ... | ... | ... |
| <#FF0000> ... | <#FF0000> ... | <#FF0000> ... | <#FF0000> ... |
| <#FF8888> ... | <#FF8888> ... | <#FF8888> ... | <#FF8888> ... |

Columns:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | <#FF0000> ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | ... | ... |

...and..

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | <#FF8888> ... | <#FF0000> ... |

Diagonals:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | ... | ... | <#FF0000> ... |
| ... | <#FF8888> ... | <#FF0000> ... | ... |
| ... | <#FF0000> ... | <#FF8888> ... | ... |
| <#FF0000> ... | ... | ... | <#FF8888> ... |

Pan Diagonals:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | <#FF0000> ... | <#FF8888> ... | ... |
| <#FF0000> ... | ... | ... | <#FF8888> ... |
| <#FF8888> ... | ... | ... | <#FF0000> ... |
| ... | <#FF8888> ... | <#FF0000> ... | ... |

2x2 cells with one cell in a corner:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | <#FF8888> ... | <#FF0000> ... | <#FF0000> ... |
| <#FF8888> ... | <#FF8888> ... | <#FF0000> ... | <#FF0000> ... |
| ... | ... | ... | ... |
| ... | ... | ... | ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| ... | ... | ... | ... |
| <#FF0000> ... | <#FF0000> ... | <#FF8888> ... | <#FF8888> ... |
| <#FF0000> ... | <#FF0000> ... | <#FF8888> ... | <#FF8888> ... |

Four center cells:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| ... | ... | ... | ... |

3x3 cells with one cell in a corner:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | ... | ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |

Four corners:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF0000> ... | ... | ... | <#FF0000> ... |
| ... | ... | ... | ... |
| ... | ... | ... | ... |
| <#FF0000> ... | ... | ... | <#FF0000> ... |

Top and side middle cells:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| <#FF8888> ... | ... | ... | <#FF8888> ... |
| <#FF8888> ... | ... | ... | <#FF8888> ... |
| ... | <#FF0000> ... | <#FF0000> ... | ... |

2x2 cells, with two cells on top or bottom:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| ... | <#FF8888> ... | <#FF8888> ... | ... |
| ... | <#FF8888> ... | <#FF8888> ... | ... |

Advanced Custom Magic Square
----------------------------

In the Simple Custom Magic Square, 12 of the 16 numbers will always be the same. If you're just doing this for one person, and infrequently, this is not a problem. However, if you perform the Simple Custom Magic Square for several people in a short time, they may compare magic squares, and begin to realize the manner in which you created it. With the Advanced Custom Magic Square, every square will be different.

The impressive part of the generation of the Simple Custom Magic Square was the speed. In the Advanced Custom Magic Square, the impressive part of the generation is that the audience member may ask you about any of the cells, in any order they choose, and can even be created blindfolded if you so desire.

### The Advanced Base Magic Square

Before you learn to make the advanced custom magic square, you'll need to learn an entirely different base magic 4 by 4 magic square. We'll start with a 4 by 4 grid labeled with the letters A-P:

|  |  |  |  |
| --- | --- | --- | --- |
| A | B | C | D |
| E | F | G | H |
| I | J | K | L |
| M | N | O | P |

In each cell, we'll arrange the numbers 0-15 so that they total 30 in several different ways:

|  |  |  |  |
| --- | --- | --- | --- |
| 9 | 2 | 12 | 7 |
| 4 | 15 | 1 | 10 |
| 3 | 8 | 6 | 13 |
| 14 | 5 | 11 | 0 |

This is the base magic square that you're going to need to memorize, with the aid of the [MajorSystem](/memory-technique/major-system). Each of the numbers will converted into their phonetic equivalents, and then these will be combined with the letter denoting the square to form words.

Here are all the mnemonic phrase needed to remember these 16 cells:

|  |  |  |
| --- | --- | --- |
| Letter | Number | Mnemonic |
| A | 9 | APE |
| B | 2 | BONE |
| C | 12 | COTTON |
| D | 7 | DUCK |
| E | 4 | EAR |
| F | 15 | FIDDLE |
| G | 1 | GUT |
| H | 10 | HOTTIES |
| I | 3 | IMAX |
| J | 8 | JAVA |
| K | 6 | KITSCH |
| L | 13 | LET 'EM |
| M | 14 | MOTOR |
| N | 5 | NAIL |
| O | 11 | ODDITY |
| P | 0 | PEACE |

Don't worry that some of them like "Let 'Em", "Kitsch" and "Peace" aren't easy to picture, as you won't need to link anything to them. The phrases are simply there to help you remember the base magic square.

### Getting a Key Number

Ask for any whole number from an audience member. Once this number is obtained, you must adjust the given number to get a key number.

In each case, the adjustment starts by subtracting 30 from the given number and then dividing the resulting number by 4. This will give you a key number to use.

Let's say you are given the number 66. From this number, you subtract 30, giving you 36. This number is divided by 4, giving the final key number of 9.

Frequently (75% of the time, in fact), the number given won't result in a nice even key number. If you were given a number like 97, you can still easily subtract 30, getting 67. However, 67 doesn't divide evenly by 4.

In a case like this, you simply divide the number, and remember the key number **and** the remainder. In our example of 97, after subtracting 30 and getting 67, we'd divide by four, resulting in 16, with a remainder of 3. Remember 16 as the key number, and the 3 as the remainder.

If you are lucky enough to get a number that results in no remainder, the result will be what is called a **perfect** magic square, which has some advantages that will be explored later. If you get a remainder in your calculation, the result will be an **imperfect** magic square, which will still be amazing.

### Using the Key Number (and Remainder)

Once the key number, and any potential remainder are obtained, you need to apply it to adjust the base magic square memorized earlier.

In the first example, we took 66 and calculated the key number as 9. All you would have to do in this case is add 9 to each cell, giving us the following magic square:

|  |  |  |  |
| --- | --- | --- | --- |
| 18 | 11 | 21 | 16 |
| 13 | 24 | 10 | 19 |
| 12 | 17 | 15 | 22 |
| 23 | 14 | 20 | 9 |

When there's a remainder, there's an extra adjustment to make. You not only add the key number to each individual cell, as above, but you must also add the remainder to the squares in the base magic square that have a number 12 or greater (C, L, M and F).

In our earlier example with 97, we got a key number of 16 with a remainder of 3. First, we take all the cells of the base magic square that total 11 or less, and add 16 to them:

|  |  |  |  |
| --- | --- | --- | --- |
| 25 | 18 |  | 23 |
| 20 |  | 17 | 26 |
| 19 | 24 | 22 |  |
|  | 21 | 27 | 16 |

To the remaining squares, we not only add 16 to our base magic square, but the remainder (3), as well:

|  |  |  |  |
| --- | --- | --- | --- |
| 25 | 18 | **31** | 23 |
| 20 | **34** | 17 | 26 |
| 19 | 24 | 22 | **32** |
| **33** | 21 | 27 | 16 |

If you get a number lower than 30, the magic square will involve negative numbers. For example, if you were given the number 18, you would subtract 30, for a total of -12. Divided by 4, our key number becomes -3. The magic square that results is:

|  |  |  |  |
| --- | --- | --- | --- |
| 6 | -1 | 9 | 4 |
| 1 | 12 | -2 | 7 |
| 0 | 5 | 3 | 10 |
| 11 | 2 | 8 | -3 |

This is still a magic square, albeit an unusual one.

It can get tricky when using negative numbers and imperfect (see section 3.2.2) magic squares. You need to remember that the remainder will also be negative.

If you're given 13, then simply subtract 30, which totals -17. -17 divided by 4 is -4 remainder -1. First, the simpler cells are filled in (all but C, L, M and F):

|  |  |  |  |
| --- | --- | --- | --- |
| 5 | -2 |  | 3 |
| 0 |  | -3 | 6 |
| -1 | 4 | 2 |  |
|  | 1 | 7 | -4 |

Then, in the remaining cells, add in the key number **and** the remainder:

|  |  |  |  |
| --- | --- | --- | --- |
| 5 | -2 | **7** | 3 |
| 0 | **10** | -3 | 6 |
| -1 | 4 | 2 | **8** |
| **9** | 1 | 7 | -4 |

### Presenting the Magic Square

Since you've used mnemonics, you can have your audience not only give you a number, but ask you the squares in **any** order, as well. This makes the magic square a fantastic demonstration of both math and memory.

### Ways That Give the Magic Total

In order to impress your audience, you not only need to create the magic square, but to show how the total they requested appears in the magic square, as well. Here are the myriad ways in which groups of 4 cells will give the requested total (with pink representing a group of 4, and red representing another distinct group of 4):

Rows:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF0000> ... | <#FF0000> ... | <#FF0000> ... | <#FF0000> ... |
| <#FF8888> ... | <#FF8888> ... | <#FF8888> ... | <#FF8888> ... |
| ... | ... | ... | ... |
| ... | ... | ... | ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| ... | ... | ... | ... |
| <#FF0000> ... | <#FF0000> ... | <#FF0000> ... | <#FF0000> ... |
| <#FF8888> ... | <#FF8888> ... | <#FF8888> ... | <#FF8888> ... |

Columns:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | <#FF0000> ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | ... | ... |

...and..

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | <#FF8888> ... | <#FF0000> ... |

Diagonals:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | ... | ... | <#FF0000> ... |
| ... | <#FF8888> ... | <#FF0000> ... | ... |
| ... | <#FF0000> ... | <#FF8888> ... | ... |
| <#FF0000> ... | ... | ... | <#FF8888> ... |

Pan Diagonals:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | <#FF0000> ... | <#FF8888> ... | ... |
| <#FF0000> ... | ... | ... | <#FF8888> ... |
| <#FF8888> ... | ... | ... | <#FF0000> ... |
| ... | <#FF8888> ... | <#FF0000> ... | ... |

2x2 cells with one cell in a corner:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | <#FF8888> ... | <#FF0000> ... | <#FF0000> ... |
| <#FF8888> ... | <#FF8888> ... | <#FF0000> ... | <#FF0000> ... |
| ... | ... | ... | ... |
| ... | ... | ... | ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| ... | ... | ... | ... |
| <#FF0000> ... | <#FF0000> ... | <#FF8888> ... | <#FF8888> ... |
| <#FF0000> ... | <#FF0000> ... | <#FF8888> ... | <#FF8888> ... |

2x2 cells with two cells on a side:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| <#FF0000> ... | <#FF0000> ... | <#FF8888> ... | <#FF8888> ... |
| <#FF0000> ... | <#FF0000> ... | <#FF8888> ... | <#FF8888> ... |
| ... | ... | ... | ... |

Four center cells:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| ... | ... | ... | ... |

3x3 cells with one cell in a corner:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | ... | ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |
| ... | ... | ... | ... |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |

Four corners:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF0000> ... | ... | ... | <#FF0000> ... |
| ... | ... | ... | ... |
| ... | ... | ... | ... |
| <#FF0000> ... | ... | ... | <#FF0000> ... |

Top and side middle cells:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| <#FF8888> ... | ... | ... | <#FF8888> ... |
| <#FF8888> ... | ... | ... | <#FF8888> ... |
| ... | <#FF0000> ... | <#FF0000> ... | ... |

"Broken" horizontal lines:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF0000> ... | <#FF0000> ... | ... | ... |
| <#FF8888> ... | <#FF8888> ... | ... | ... |
| ... | ... | <#FF0000> ... | <#FF0000> ... |
| ... | ... | <#FF8888> ... | <#FF8888> ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | <#FF0000> ... | <#FF0000> ... |
| ... | ... | <#FF8888> ... | <#FF8888> ... |
| <#FF0000> ... | <#FF0000> ... | ... | ... |
| <#FF8888> ... | <#FF8888> ... | ... | ... |

The above connections will work with any magic square generated by the above method. With a **perfect** magic square (see section 3.2.2), there are more connections that will also make the requested total:

2x2 cells, with two cells on top or bottom:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| ... | <#FF0000> ... | <#FF0000> ... | ... |
| ... | <#FF8888> ... | <#FF8888> ... | ... |
| ... | <#FF8888> ... | <#FF8888> ... | ... |

"Broken" pan diagonals:

|  |  |  |  |
| --- | --- | --- | --- |
| ... | <#FF8888> ... | ... | <#FF0000> ... |
| <#FF0000> ... | ... | <#FF8888> ... | ... |
| ... | <#FF0000> ... | ... | <#FF8888> ... |
| <#FF8888> ... | ... | <#FF0000> ... | ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF8888> ... | ... | <#FF0000> ... | ... |
| ... | <#FF0000> ... | ... | <#FF8888> ... |
| <#FF0000> ... | ... | <#FF8888> ... | ... |
| ... | <#FF8888> ... | ... | <#FF0000> ... |

"Broken" vertical lines:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FF0000> ... | <#FF8888> ... | ... | ... |
| <#FF0000> ... | <#FF8888> ... | ... | ... |
| ... | ... | <#FF0000> ... | <#FF8888> ... |
| ... | ... | <#FF0000> ... | <#FF8888> ... |

...and...

|  |  |  |  |
| --- | --- | --- | --- |
| ... | ... | <#FF0000> ... | <#FF8888> ... |
| ... | ... | <#FF0000> ... | <#FF8888> ... |
| <#FF0000> ... | <#FF8888> ... | ... | ... |
| <#FF0000> ... | <#FF8888> ... | ... | ... |