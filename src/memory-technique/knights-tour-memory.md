---
title: Knights Tour Memory
---

# Knights Tour Memory

Memorized Knight's Tour
=======================

The Knight's Tour is a classic challenge based on the game of Chess. The challenge is to move a chess knight, using only the standard chess knight move, around an 8x8 chess board so that each square is landed on once and only once, starting from any square designated by an audience member.

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

Coordinates
-----------

Each square will be given a set of coordinates, and a path that allows any one of the 64 squares to be a starting point, and covers all 64 squares, will be memorized. There are two kinds of coordinates that can be used in this challenge, and the memorization method will vary slightly with each kind.

### Linear Coordinates

Linear coordinates simply designate each square with a number from 1 to 64. This method is most effective when performing for an audience that isn't familiar with chess (which will be most audiences).

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <#FFFFFF> 01 | <#888888> 02 | <#FFFFFF> 03 | <#888888> 04 | <#FFFFFF> 05 | <#888888> 06 | <#FFFFFF> 07 | <#888888> 08 |
| <#888888> 09 | <#FFFFFF> 10 | <#888888> 11 | <#FFFFFF> 12 | <#888888> 13 | <#FFFFFF> 14 | <#888888> 15 | <#FFFFFF> 16 |
| <#FFFFFF> 17 | <#888888> 18 | <#FFFFFF> 19 | <#888888> 20 | <#FFFFFF> 21 | <#888888> 22 | <#FFFFFF> 23 | <#888888> 24 |
| <#888888> 25 | <#FFFFFF> 26 | <#888888> 27 | <#FFFFFF> 28 | <#888888> 29 | <#FFFFFF> 30 | <#888888> 31 | <#FFFFFF> 32 |
| <#FFFFFF> 33 | <#888888> 34 | <#FFFFFF> 35 | <#888888> 36 | <#FFFFFF> 37 | <#888888> 38 | <#FFFFFF> 39 | <#888888> 40 |
| <#888888> 41 | <#FFFFFF> 42 | <#888888> 43 | <#FFFFFF> 44 | <#888888> 45 | <#FFFFFF> 46 | <#888888> 47 | <#FFFFFF> 48 |
| <#FFFFFF> 49 | <#888888> 50 | <#FFFFFF> 51 | <#888888> 52 | <#FFFFFF> 53 | <#888888> 54 | <#FFFFFF> 55 | <#888888> 56 |
| <#888888> 57 | <#FFFFFF> 58 | <#888888> 59 | <#FFFFFF> 60 | <#888888> 61 | <#FFFFFF> 62 | <#888888> 63 | <#FFFFFF> 64 |

When memorizing linear coordinates, you'll simply use either your [Major System 100](http://www.ludism.org/mentat/MajorSystem) or [Dominic](http://www.ludism.org/mentat/DominicSystem) links.

### Algebraic Coordinates

Algebraic coordinates designate each column with a small letter from a-h, and each row with a number from 1-8. This method is most effective when performing for an audience of chess players, as this is standard chess notation.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <#FFFFFF> a8 | <#888888> b8 | <#FFFFFF> c8 | <#888888> d8 | <#FFFFFF> e8 | <#888888> f8 | <#FFFFFF> g8 | <#888888> h8 |
| <#888888> a7 | <#FFFFFF> b7 | <#888888> c7 | <#FFFFFF> d7 | <#888888> e7 | <#FFFFFF> f7 | <#888888> g7 | <#FFFFFF> h7 |
| <#FFFFFF> a6 | <#888888> b6 | <#FFFFFF> c6 | <#888888> d6 | <#FFFFFF> e6 | <#888888> f6 | <#FFFFFF> g6 | <#888888> h6 |
| <#888888> a5 | <#FFFFFF> b5 | <#888888> c5 | <#FFFFFF> d5 | <#888888> e5 | <#FFFFFF> f5 | <#888888> g5 | <#FFFFFF> h5 |
| <#FFFFFF> a4 | <#888888> b4 | <#FFFFFF> c4 | <#888888> d4 | <#FFFFFF> e4 | <#888888> f4 | <#FFFFFF> g4 | <#888888> h4 |
| <#888888> a3 | <#FFFFFF> b3 | <#888888> c3 | <#FFFFFF> d3 | <#888888> e3 | <#FFFFFF> f3 | <#888888> g3 | <#FFFFFF> h3 |
| <#FFFFFF> a2 | <#888888> b2 | <#FFFFFF> c2 | <#888888> d2 | <#FFFFFF> e2 | <#888888> f2 | <#FFFFFF> g2 | <#888888> h2 |
| <#888888> a1 | <#FFFFFF> b1 | <#888888> c1 | <#FFFFFF> d1 | <#888888> e1 | <#FFFFFF> f1 | <#888888> g1 | <#FFFFFF> h1 |

When memorizing algebraic coordinates, the simplest method is to use the letter as the initial sound, followed by the [phonetic equivalent](http://www.ludism.org/mentat/MajorSystem) of the number. For example, **A1** might translate into **ATE**, **B1** might translate into **BAT**, and so on.

To prevent confusion, it is a good idea to avoid words that you already have as pegs. If you use the [Major System 100](http://www.ludism.org/mentat/MajorSystem), and you already use **BAT** as your peg for 91, you should use **BOAT** as your peg for **B1** instead.

The Path
--------

There are many possible paths that cover all 64 squares and are re-entrant (the final square is one knight's move away from the first square), thus allowing you to start from any square. Here is the path that will be taught in this tutorial:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 59 | 30 | 35 | 24 | 57 | 22 | 15 | 18 |
| 36 | 25 | 58 | 29 | 16 | 19 | 56 | 21 |
| 31 | 60 | 27 | 34 | 23 | 54 | 17 | 14 |
| 26 | 37 | 32 | 49 | 28 | 13 | 20 | 55 |
| 39 | 04 | 61 | 12 | 33 | 48 | 53 | 10 |
| 62 | 01 | 38 | 07 | 50 | 11 | 44 | 47 |
| 05 | 40 | 03 | 64 | 45 | 42 | 09 | 52 |
| 02 | 63 | 06 | 41 | 08 | 51 | 46 | 43 |

In linear coordinates, the list of spaces is as follows: 1, 18, 35, 41, 58, 52, 42, 57, 51, 34, 49, 59, 44, 61, 55, 40, 46, 36, 30, 24, 7, 13, 23, 8, 14, 31, 16, 6, 21, 4, 10, 25, 19, 29, 12, 2, 17, 27, 37, 20, 3, 9, 26, 43, 33, 50, 60, 54, 64, 47, 53, 63, 48, 38, 28, 45, 62, 56, 39, 22, 32, 15, 5, 11, and return to 1

In algebraic coordinates, the list of spaces is as follows: a8, b6, c4, a3, b1, d2, b3, a1, c2, b4, a2, c1, d3, e1, g2, h4, f3, d4, f5, h6, g8, e7, g6, h8, f7, g5, h7, f8, e6, d8, b7, a5, c6, e5, d7, b8, a6, c5, e4, d6, c8, a7, b5, c3, a4, b2, d1, f2, h1, g3, e2, g1, h3, f4, d5, e3, f1, h2, g4, f6, h5, g7, e8, c7, and return to a8

Memorizing the Path
-------------------

To memorize the path, you'll simply [link](http://www.ludism.org/mentat/LinkSystem) each coordinate to the following coordinate in the path list.

With the linear coordinates, you might link **TIE** (1) to **DOVE** (18), then **DOVE** (18) to **MULE** (35), and so on, finishing with linking **TOT** (11) to **TIE** (1).

With the algebraic coordinates, you might link **A VOW** (a8) to **BEACH** (b6), then **BEACH** (b6) to **CAR** (c4), and so on, finishing with linking **CAKE** (c7) to **A VOW** (a8).

Performing the Knight's Tour
----------------------------

To perform the Knight's Tour, you only need a pencil and paper. Draw an 8x8 grid, and fill in the coordinates (algebraic and linear). You can also carry around a portable chess board, with each square marked. Remember that you'll also need some way to mark squares that have already been landed upon.

To begin the performance, you may need to explain the nature of the challenge first. Introduce the board, and explain how the knight moves, and that you have to hit each square. You can also offer to look away or be blindfolded during the challenge.

To start the challenge itself, have your spectator choose a starting square.

From this point, simply recall your links, and have the audience member cross out the squares as you call them, until you get to the final square. Don't forget the square on which you started, so you don't overshoot the final square.

Other Resources
---------------

[KnightsTourMath](/mental-math/knights-tour-math)  
