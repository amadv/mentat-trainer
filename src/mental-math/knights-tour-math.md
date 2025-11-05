---
title: Knights Tour Math
---

# Knights Tour Math

Algorithmic Knight's Tour
=========================

The Knight's Tour is a classic challenge based on the game of Chess. The classic challenge is to move a chess knight, using only the standard chess knight move, around an 8x8 chess board so that each square is landed on once and only once, starting from any square designated by an audience member. In the more advanced versions of this algorithmic Knight's Tour method, you will also be able to allow an audience member to choose an ending square, as well.

A chess knight moves either 1 square horizontally and 2 squares vertically, or 2 squares horizontally and 1 square vertically. From the knight's position (denoted with a **N** below), he can move to any of the squares marked with an **X** (An underscore denotes an square to which the knight cannot move).

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ |
| <#888888> \_ | <#FFFFFF> \_ | <#888888> X | <#FFFFFF> \_ | <#888888> X | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ |
| <#FFFFFF> \_ | <#888888> X | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> X | <#FFFFFF> \_ | <#888888> \_ |
| <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> N | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ |
| <#FFFFFF> \_ | <#888888> X | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> X | <#FFFFFF> \_ | <#888888> \_ |
| <#888888> \_ | <#FFFFFF> \_ | <#888888> X | <#FFFFFF> \_ | <#888888> X | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ |
| <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ |
| <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ |

Breaking Down the Problem
-------------------------

In this version of the Knight's Tour, there are a series of simple concepts you must master individually, and then learn how to work the concepts together. Don't worry, this is much simpler than it sounds. We're going to start by focusing on just one quadrant of the board:

|  |  |  |  |
| --- | --- | --- | --- |
| <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ |
| <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ |
| <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ |
| <#888888> \_ | <#FFFFFF> \_ | <#888888> \_ | <#FFFFFF> \_ |

Notice that the layout of this board is the same, and four of these quadrants placed in a 2 by 2 arrangement would make a standard chessboard.

Next, you need to learn four simple patterns of moving about in this quadrant, each of which is named after its shape.

The first pattern is called a left-handed diamond:

|  |  |  |  |
| --- | --- | --- | --- |
| X | \_ | \_ | \_ |
| \_ | \_ | X | \_ |
| \_ | X | \_ | \_ |
| \_ | \_ | \_ | X |

Note that each of thes Xs are a knight's move apart, and that you can keep moving the knight throughout this pattern, where it traces a shape that looks like a diamond tilted to the left.

The next pattern is called a right-handed diamond:

|  |  |  |  |
| --- | --- | --- | --- |
| \_ | \_ | \_ | X |
| \_ | X | \_ | \_ |
| \_ | \_ | X | \_ |
| X | \_ | \_ | \_ |

Just as in all the patterns, each of the Xs are a knight's move apart. Obviously, this shape gets its name from the fact that the knight is tracing a diamond that looks like it is tilting to the right.

Our next pattern is called a left-handed square:

|  |  |  |  |
| --- | --- | --- | --- |
| \_ | X | \_ | \_ |
| \_ | \_ | \_ | X |
| X | \_ | \_ | \_ |
| \_ | \_ | X | \_ |

This pattern gets its name from the concept that, no matter how many 90-degree rotations you put this board through, the uppermost point of the square will be in the left side of the individual quadrant.

The final pattern is called, not surprisingly, the right-handed square:

|  |  |  |  |
| --- | --- | --- | --- |
| \_ | \_ | X | \_ |
| X | \_ | \_ | \_ |
| \_ | \_ | \_ | X |
| \_ | X | \_ | \_ |

Like its left-handed counterpart, this one gets its name from the concept that no matter how many 90-degree rotations you put this board through, the uppermost point of the square will be in the right side of the quadrant.

The three important things to notice about the patterns are that:

1) None of the patterns uses squares that are used in any of the other three patterns.  
 2) You can start on any one of the squares in a given pattern, and access the other three points in that pattern.  
 3) You can move through any of the patterns in either a clockwise or counterclockwise direction.

Patterns and Systems
--------------------

Now that you're familiar with patterns, we're going to bring back the full 8 by 8 chess board and introduce the concept of systems. A **system** is merely the complete set 16 squares on the board that are made of four copies of a given pattern.

You already know that this is a right-handed diamond **pattern**:

|  |  |  |  |
| --- | --- | --- | --- |
| \_ | \_ | \_ | X |
| \_ | X | \_ | \_ |
| \_ | \_ | X | \_ |
| X | \_ | \_ | \_ |

So, this would be a complete right-handed diamond **system**:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \_ | \_ | \_ | 01 | \_ | \_ | \_ | 15 |
| \_ | 02 | \_ | \_ | \_ | 14 | \_ | \_ |
| \_ | \_ | 04 | \_ | \_ | \_ | 16 | \_ |
| 03 | \_ | \_ | \_ | 13 | \_ | \_ | \_ |
| \_ | \_ | \_ | 05 | \_ | \_ | \_ | 11 |
| \_ | 06 | \_ | \_ | \_ | 12 | \_ | \_ |
| \_ | \_ | 08 | \_ | \_ | \_ | 10 | \_ |
| 07 | \_ | \_ | \_ | 09 | \_ | \_ | \_ |

The numbers given above are merely an example of one of the myriad ways to move throughout the right-handed diamond system. Note that some quadrants were done clockwise, and others counterclockwise.

Performing a Complete Knight's Tour
-----------------------------------

When you're given a starting square by an audience member, you first have to notice which kind of pattern it's in. Is it in a square, or a diamond? Is it right-handed or left-handed?

Let's say the starting point chosen by the audience member is here:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \_ | \_ | \_ | \_ | \_ | \_ | \_ | \_ |
| \_ | \_ | \_ | \_ | \_ | \_ | \_ | \_ |
| \_ | \_ | \_ | \_ | \_ | \_ | \_ | \_ |
| \_ | \_ | \_ | \_ | \_ | \_ | \_ | \_ |
| \_ | X | \_ | \_ | \_ | \_ | \_ | \_ |
| \_ | \_ | \_ | \_ | \_ | \_ | \_ | \_ |
| \_ | \_ | \_ | \_ | \_ | \_ | \_ | \_ |
| \_ | \_ | \_ | \_ | \_ | \_ | \_ | \_ |

In this case, we would say that the starting point is in a left-handed square pattern in the lower-left quadrant.

Step 2 is to complete whatever system the starting point is in. In our example, we're starting in a left-handed square pattern, so we complete a full left-handed square system:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \_ | **15** | \_ | \_ | \_ | **11** | \_ | \_ |
| \_ | \_ | \_ | **16** | \_ | \_ | \_ | **10** |
| **14** | \_ | \_ | \_ | **12** | \_ | \_ | \_ |
| \_ | \_ | **13** | \_ | \_ | \_ | **09** | \_ |
| \_ | **01** | \_ | \_ | \_ | **05** | \_ | \_ |
| \_ | \_ | \_ | **04** | \_ | \_ | \_ | **08** |
| **02** | \_ | \_ | \_ | **06** | \_ | \_ | \_ |
| \_ | \_ | **03** | \_ | \_ | \_ | **07** | \_ |

Step 3 is to jump to a square belonging to a system of the opposite shape. If you just finished a square system, start working on either one of the diamond systems. If you just finished a diamond system, start working on either one of the square systems.

Continuing with our example, we note we can quite easily jump to a square in the right-handed diamaond system in the upper right quadrant:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \_ | 15 | \_ | \_ | \_ | 11 | \_ | \_ |
| \_ | \_ | \_ | 16 | \_ | \_ | \_ | 10 |
| 14 | \_ | \_ | \_ | 12 | \_ | \_ | \_ |
| \_ | \_ | 13 | \_ | **17** | \_ | 09 | \_ |
| \_ | 01 | \_ | \_ | \_ | 05 | \_ | \_ |
| \_ | \_ | \_ | 04 | \_ | \_ | \_ | 08 |
| 02 | \_ | \_ | \_ | 06 | \_ | \_ | \_ |
| \_ | \_ | 03 | \_ | \_ | \_ | 07 | \_ |

From here, we would naturally complete the right-handed diamond system:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \_ | 15 | \_ | **31** | \_ | 11 | \_ | **19** |
| \_ | **30** | \_ | 16 | \_ | **18** | \_ | 10 |
| 14 | \_ | **32** | \_ | 12 | \_ | **20** | \_ |
| **29** | \_ | 13 | \_ | 17 | \_ | 09 | \_ |
| \_ | 01 | \_ | **25** | \_ | 05 | \_ | **21** |
| \_ | **28** | \_ | 04 | \_ | **24** | \_ | 08 |
| 02 | \_ | **26** | \_ | 06 | \_ | **22** | \_ |
| **27** | \_ | 03 | \_ | **23** | \_ | 07 | \_ |

Step 4 is to go back to jump to a system of the opposite shape once again.

Our example started with a left-handed square, and then we jumped to a right-handed diamond. We now have to jump to a point in a square system, but it must obviously be in the right-handed square system, as the left-handed square system has already been completed:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \_ | 15 | \_ | 31 | \_ | 11 | \_ | 19 |
| \_ | 30 | \_ | 16 | **33** | 18 | \_ | 10 |
| 14 | \_ | 32 | \_ | 12 | \_ | 20 | \_ |
| 29 | \_ | 13 | \_ | 17 | \_ | 09 | \_ |
| \_ | 01 | \_ | 25 | \_ | 05 | \_ | 21 |
| \_ | 28 | \_ | 04 | \_ | 24 | \_ | 08 |
| 02 | \_ | 26 | \_ | 06 | \_ | 22 | \_ |
| 27 | \_ | 03 | \_ | 23 | \_ | 07 | \_ |

From here, we complete the right-handed square system:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \_ | 15 | **46** | 31 | \_ | 11 | **34** | 19 |
| **47** | 30 | \_ | 16 | 33 | 18 | \_ | 10 |
| 14 | \_ | 32 | **45** | 12 | \_ | 20 | **35** |
| 29 | **48** | 13 | \_ | 17 | **36** | 09 | \_ |
| \_ | 01 | **44** | 25 | \_ | 05 | **38** | 21 |
| **43** | 28 | \_ | 04 | **37** | 24 | \_ | 08 |
| 02 | \_ | 26 | **41** | 06 | \_ | 22 | **39** |
| 27 | **42** | 03 | \_ | 23 | **40** | 07 | \_ |

Step 5, of course, is to complete the only remaining system!

Finishing up our example, we move to a square in the left-handed diamond system:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| \_ | 15 | 46 | 31 | \_ | 11 | 34 | 19 |
| 47 | 30 | \_ | 16 | 33 | 18 | \_ | 10 |
| 14 | \_ | 32 | 45 | 12 | \_ | 20 | 35 |
| 29 | 48 | 13 | \_ | 17 | 36 | 09 | \_ |
| \_ | 01 | 44 | 25 | \_ | 05 | 38 | 21 |
| 43 | 28 | **49** | 04 | 37 | 24 | \_ | 08 |
| 02 | \_ | 26 | 41 | 06 | \_ | 22 | 39 |
| 27 | 42 | 03 | \_ | 23 | 40 | 07 | \_ |

From here, we simply complete the left-handed diamond system:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **62** | 15 | 46 | 31 | **60** | 11 | 34 | 19 |
| 47 | 30 | **61** | 16 | 33 | 18 | **59** | 10 |
| 14 | **63** | 32 | 45 | 12 | **57** | 20 | 35 |
| 29 | 48 | 13 | **64** | 17 | 36 | 09 | **58** |
| **50** | 01 | 44 | 25 | **56** | 05 | 38 | 21 |
| 43 | 28 | 49 | 04 | 37 | 24 | **55** | 08 |
| 02 | **51** | 26 | 41 | 06 | **53** | 22 | 39 |
| 27 | 42 | 03 | **52** | 23 | 40 | 07 | **54** |

At this point, there are no more steps - the Knight's Tour has been completed.

To summarize the steps:  
   
 1) Determine which system the starting point is in. Is it a square or a diamond? Is it right-handed or left-handed?  
 2) Complete that system.  
 3) Jump to an empty space in a system that is of the opposite shape of the one you've just completed. Complete that system.  
 4) Jump to an empty space in a system that is of the opposite shape of the one you've just completed. Complete that system.  
 5) Jump to an empty space in the only remaining system (of the opposite shape of the one you've just completed, of course). Complete that system.

At that point, you will have solved the Knight's Tour.

The Danger Zone
---------------

Even with all the information you've learned so far in this lesson, there are times that you will get stuck and can't complete a system. While most squares on the board allow you 6 or more moves initially, there are some that, even on an empty board, allow you only 4 or fewer moves. These squares are collectively called "The Danger Zone" and are highlighted in red below:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... |
| <#FF0000> ... | <#FF8888> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#FF0000> ... | <#FF8888> ... |
| <#FF8888> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#FF0000> ... |
| <#FF0000> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FF8888> ... |
| <#FF8888> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#FF0000> ... |
| <#FF0000> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FF8888> ... |
| <#FF8888> ... | <#FF0000> ... | <#FFFFFF> ... | <#888888> ... | <#FFFFFF> ... | <#888888> ... | <#FF8888> ... | <#FF0000> ... |
| <#FF0000> ... | <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... | <#FF8888> ... | <#FF0000> ... | <#FF8888> ... |

In either of the square patterns, two of the four spaces in the pattern will be in the danger zone. In some of the diamond patterns, there will only be one space in the danger zone, while other diamond patterns will actually have **three out of the four spaces** in the danger zone!

To avoid getting stuck in the danger zone, simply deal with the danger zone squares as early as possible in each pattern, and make sure that you complete each system outside of the danger zone. In other words, as you complete any system, make sure you're as close to the center of the board as possible, so as to maximize your possibility for moves.

Once you've [practiced](http://members.cox.net/beagenius/knightquiz.html#ref) (use level one) these concepts and are comfortable with them, it is time to move on to the next level.

Advanced Algorithmic Knight's Tour
----------------------------------

One of the most impressive ways to present the Knight's Tour is to allow an audience member to choose a starting square *and* an ending square for the knight.

You may have noticed that each time the knight moves, it lands on a space opposite of the color of the space it just left (knights leaving a black square will land on a white square and vice versa). Because there is an even number of squares on the chessboard (64), the starting and ending squares **must be of opposite colors**. The best way to ask an audience member is to simply tell them to choose a black square and a white square. Once they choose the spaces, ask them which they would like to be the starting square and which they would like to be the ending square.

Getting to a particular ending square is only slightly more difficult than the method previously taught. Despite the appearance of many possibilities, there are really only three possibilities:

### Starting and Ending Systems are Systems of Opposite Shapes

This one is simple. Just as you've learned previously, you'll complete one system, then skip to a system of the opposite shape. Make sure, though, that the second system you enter **DOES NOT** contain the ending space. After you complete three full systems, make sure to enter the final system in such a way that your last move is the designated ending space. With practice, this isn't difficult.

**Summary:** Diamond / square / 2nd diamond / 2nd square **- OR -** square / diamond / 2nd square / 2nd diamond (Just make sure to choose your systems with respect to the location of the ending space)

### Starting and Ending Spaces are Systems of the Same Shape, but Different Orientations

This one is a little trickier. Complete the first system, then move to a system of the opposite shape and complete that one, just as you originally learned. The third system you enter, though, will contain the ending space. When you enter this third system, take care of 2, 3 or 4 spaces in one pattern (preferably "Danger Zone" spaces) that are not the ending square, and then move into an opposite system and complete it. After that, go back to the remaining system and complete it. Again, practice will help you solve any minor problems you encounter doing this.

**Summary:** Diamond / square / partial 2nd diamond / 2nd square / remainder of 2nd diamond **- OR -** square / diamond / partial 2nd square / 2nd diamond / remainder of 2nd square

### Starting and Ending Spaces are Systems of the Same Shape and Orientation

This one employs the shape-portioning idea from Situation 2 (above). In this case, you complete only 2, 3 or 4 squares of the initial system. From there, fully complete the other three systems (remembering to alternate systems). Finally, go back and complete the initial system.

**Summary:** Partial 1st diamond / 1st square / 2nd diamond / 2nd square / remainder of 1st diamond **- OR -** partial 1st square / 1st diamond / 2nd square / 2nd diamond / remainder of 1st square

[Practice](http://members.cox.net/beagenius/knightquiz.html#ref) the advanced Knight's Tour by easing into it with level 2, and eventually by moving on to level 3.
