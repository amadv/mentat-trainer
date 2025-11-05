---
title: Binary Numbers System
---

# Binary Numbers System

Introduction
============

When you hear that the binary system is used in computer science, and that it involves long strings of ones and zeroes, it can seem very scary. The term "binary" alone simply refers to anything that is limited to one of two states. The term binary system refers to a system of counting by using a series of ones and zeroes.

In our standard system, based on powers of 10, we use the numbers 0 through 9 in each space. When I say a number like "1,302", I'm actually speaking of 1 one-thousand, plus 3 hundreds, plus 0 tens, plus 2 ones. Think of 1,302 our regular base 10 number system like this:

|  |  |  |  |
| --- | --- | --- | --- |
| 1000s | 100s | 10s | 1s |
| 1 | 3 | 0 | 2 |

In the binary system, only the numbers 0 and 1 are used in each space. The places themselves, instead of being powers of 10, as above, are powers of 2. Just like our base 10 number system above, we start with a 1s place at the rightmost place:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 32s | 16s | 8s | 4s | 2s | 1s |
|  |  |  |  |  |  |

Just like our own 10s system, the places can go as high as is needed. If we're given the binary number 11001010, we break it down like this:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 128s | 64s | 32s | 16s | 8s | 4s | 2s | 1s |
| 1 | 1 | 0 | 0 | 1 | 0 | 1 | 0 |

So, in this number there are one 128, one 64, no 32s, no 16s, one 8, no 4s, one 2 and no 1s. To find the decimal equivalent of 11001010, we simply add up the spaces where we find ones. That gives us 128 + 64 + 8 + 2, or 202 as the equivalent in our base 10 number system.

Each place (1s, 2s, 4s, and so on) is referred to as a "bit" (short for "binary digit"). If you were to talk about 3 place, you would use the term "3-bit", and so on. Eight bits, as a group, is called a "byte". Although it's rarely-used, the term for a 4-bit number is a "nybble".

Binary numbers with their long strings of 1s and 0s can seem like a more difficult challenge, but there are ways to tackle the task. Several methods will be described below.

Lewis Jones' 3-Bit Method
-------------------------

[Lewis Jones](http://www.hutch.demon.co.uk/lewis/) originally developed this system for use with playing cards (see [PlayingCardSystems](/memory-technique/playing-card-systems), section 1.1), but works well with any type of binary information (including, obviously, binary numbers). In this system the binary numbers are broken into groups of three digits. With binary numbers, there's only eight possible arrangements of a three-digit group:  
   
 000  
 001  
 010  
 011  
 100  
 101  
 110  
 111

Each group is then given a name that describes the locations of the 1s in the number:  
   
 000 - **N**one  
 001 - **T**op  
 010 - **M**iddle  
 011 - **U**pper  
 100 - **B**ottom  
 101 - **O**uter  
 110 - **L**ower  
 111 - **A**ll

One of the advantages of the binary system is that we can focus on the 1s like this. After all, if it isn't a 1, it must be a 0.

You should also note that each group's label begins with a different letter: N, T, M, U, B, O, L, A. This letter alone can be used to instantly identify any three-digit group of binary numbers. If you want to remember several three-digit sequences of binary numbers, you can put the letters together to form a memorable image.

Let's say you want to remember the binary sequence 010101110001. First, you would break the sequence up into groups of three digits: 010 101 110 001. Next, you would convert each group to the appropriate letter:  
   
 010 - **M**iddle  
 101 - **O**uter  
 110 - **L**ower  
 001 - **T**op

To remember the sequence 010101110001, you simply remember the phrase "MOLT"!

Unfortunately, you may not always get a nice, neat word like "MOLT" in this system. If this happens, you're free to insert extra i's and e's into the "words", as they have no meaning in this system. NMAU could become NIMAU (which you can thing of as the name of an imaginary country), and TTLN becomes TITELINE.

Nybble (4-Bit) Method
---------------------

To remember more bits at a single glance, the above method can be adapted to use 4-bit words instead of 3. With 4 bits, there are now 16 possibilities to cover, so they will be described in small groups. Once again, the descriptions will focus on where the 1s in the number are.

The first two are the easiest:  
 0000 - **N**one  
 1111 - **E**very

The next four all involve a single 1 in their number, and are also easy to remember:  
 0001 - **F**irst  
 0010 - **S**econd  
 0100 - **T**hird  
 1000 - **B**ottom  
 (In this method, the leftmost bit is invariably considered to be "lower" than the rightmost bit)

This group involves two 1s next to each other:  
 0011 - **H**ighest (The two highest numbers are both ones)  
 0110 - **I**nside (The two ones are "inside" the zeroes)  
 1100 - **M**inor (The two ones are in the most minor position)

There are several 4-bit numbers in which have two 1s which aren't next to each other:  
 1001 - **O**uter (The outer two digits are 1s)  
 0101 - **R**otating  
 1010 - **A**lternating

The "Alternating" and "Rotating" patterns are easily confused with each other, so there's a built-in mnemonic in the words themselves. The first vowel in the word "Alternating" is an "A", the 1st letter of the alphabet, so the leftmost bit is a 1. The first vowel in the word "Rotating" is an "O", which looks like the number 0, therefore the leftmost bit is a 0.

This next group contains three 1s next to each other:  
 0111 - **U**pper (the three uppermost numbers are all 1s)  
 1110 - **L**ower (the three lowermost numbers are all 1s)

The final two remaining combinations contain three 1s each, with a zero somewhere in the middle:  
 1011 - **G**rowing (If you break up this 4-bit combination, it looks like the numbers are growing - "10...11...")  
 1101 - **C**ountdown (Think of a rocket ship countdown from "11" to "01")

As with the previous 3-bit method, each pattern has a name beginning with a different letter (N, E, F, S, T, B, H, I, M, O, R, A, U, L, G or C), so each pattern can be recalled just by its first letter. When remembering letter combinations together, however, you no longer have freedom to place unused vowels among the letters, as all five of the regular vowels (A, E, I, O, U) have a particular meaning in this system.

There are two ways to deal with this. First, you could get lucky and have the letters you're recalling make a word (such as ACHE, ALIEN or ORANGES). The second is to remember the numbers in pairs, with the important letters being the first and last letters of a word (If you have to remember F and S, you might think of the word "FrieS[?](https://www.ludism.org/mentat?action=edit;id=FrieS "Click to edit this page")", for example). In this way, you're free to add any letters you wish to make a word, because the only letters that matter will be the first and last ones. With this approach, you'll be able to remember long strings of binary digits as simply as remembering [linked lists](http://www.ludism.org/mentat/LinkSystem).

"Conversion" Method
-------------------

Like the Lewis Jones method above, this system works with groups of three digits. In this system, however, we start by converting each group of three to its binary equivalent:  
   
 000 - 0  
 001 - 1  
 010 - 2  
 011 - 3  
 100 - 4  
 101 - 5  
 110 - 6  
 111 - 7

These equivalents must be memorized before proceeding any further. You can use the [MajorSystem](/memory-technique/major-system) or the [DominicSystem](/memory-technique/dominic-system) to link each binary group to its binary equivalent.

To remember a sequence in this manner, you would once again break down the number into three digit groups, and then label each group with the appropriate number.

For example, let's use the number 011100001000. Breaking this up into groups of three, we get 011 100 001 000. These groups convert into 3410.

It is important to realize, at this point, that 3410 is a result of the way we broke the number up, and that 3410 is **NOT** the binary equivalent of 011100001000 (the actual base 10 equivalent of this binary number is 1800).

With the [MajorSystem](/memory-technique/major-system), you would remember this number as "MARTS".

With the [DominicSystem](/memory-technique/dominic-system), you would remember the first two groups of three as the person you associate with CD (the equivalent of 34). You would then picture CD performing the action or using the prop of AO.

Presentation of Binary Memory Feats
-----------------------------------

The feat of being able to remember long strings of 1s and 0s is certainly impressive, but 1s and 0s themselves have no real meaning. To make the concept of memorizing more interesting, there are many interesting ways to give binary information a real-world meaning:

* Red or black cards
* Picture or number cards
* High or low cards
* Odd or even cards
* Face-up or face-down cards
* Good or bad gambling hands
* Heads or tails on coins
* Odd or even spots on dice

Here are some more concepts to spark ideas for various binary memory demonstrations:  
 add/subtract  
 alive/dead  
 alone/in a crowd  
 big/small  
 day/night  
 early/late  
 easy/difficult  
 enlarge/reduce  
 equal/unequal  
 good/bad  
 hard/soft  
 hot/cold  
 in/out  
 in front/behind  
 long/short  
 loose/compact  
 love/hate  
 male/female  
 motion/stillness  
 multiply/divide  
 near/far  
 on/off  
 open/close  
 over/under  
 pass/fail  
 past/future  
 rich/poor  
 right/left  
 right/wrong  
 safe/dangerous  
 start/finish  
 stop/go  
 tall/short  
 true/false  
 up/down  
 us/them  
 wet/dry  
 wide/narrow  
 young/old

A little imagination here can yield a wealth of meaningful and amazing binary memory demonstrations.

There are two different approaches to binary memory demonstrations, as well. In the first, you simply remember the binary combination, and later recall it perfectly (such as memorizing the order of reds and blacks in a deck). In the second, you memorize the binary combination (such as the heads-or-tails status of several coins), have someone alter a few of the factors (someone turns some coins from heads to tails and other coins from tails to heads), and then you're able to identify which factors have changed.