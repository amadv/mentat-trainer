---
title: Physio Arithmetics
---

# Physio Arithmetics

Phyabin
-------

Physiological arithmetics describes the Phyabin method for finger-counting. Most people use their fingers to count from one to ten; that is quite inefficient. Many use improvised grouping systems that lets them count a bit higher, but none of these systems is as simple and efficient as the Phyabin method.

The key to a better finger-counting system is binary numeration; this requires binary arithmetics to be be taught alongside Phyabin. There are plenty of binary tutorials on the Web; but as a quick reminder, the two binary digits 0 and 1 are doubled in value for each step away from the rightmost digit. Therefore, binary->decimal: 1->1, 10->2, 1000->8, 100000->32, 11->3, 1100->12, 10001->17.

Phyabin uses varying finger positions to store bits. All fingers but the pinky are used, and each finger can be either up or down (raised or lowered), and it can be either straight or curled. That gives us four different finger positions, for a total of 16 possible bits. Each wrist can also be straight or curled, and each palm can either be up or down. The wrists and the palms give us another 4 bits, for a total of 20.

Those 20 bits are grouped in 5 registers of 4. Within each register, there is an LSB and a MSB: the LSB is the least-significant bit, of value 1, and the MSB is the most-significant bit, of value 8. The resting state, where all bits are at 0, has all fingers up and straight, palms up and wrists straight.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Register | B3=8 | B2=4 | B1=2 | B0=1 | Description |
| 0 | Ring | Index | Fore | Thumb | Right hand, finger-up=0, down=1 |
| 1 | Ring | Index | Fore | Thumb | Left hand, finger-up=0, down=1 |
| 2 | Ring | Index | Fore | Thumb | Right hand, finger-straight=0, curled=1 |
| 3 | Ring | Index | Fore | Thumb | Left hand, finger-straigh=0, curled=1 |
| 4 | Palm(L) | Wrist(L) | Palm(R) | Wrist(R) | palm-up=0, down=1, wrist-straight=0, curled=1 |

Three flag bits are also used:

|  |  |  |
| --- | --- | --- |
| Flag | Contraction | Description |
| 0 | Right quadriceps | General-purpose |
| 1 | Left quadriceps | General-purpose |
| 2 | Abdomen | Remainder bit |

These are the possible groupings for the five availaible registers:

|  |  |
| --- | --- |
| R-group size | Maximum value |
| 1 | 15 |
| 2 | 255 |
| 3 | 4095 |
| 4 | 65535 |
| 5 | 1048575 |

This method requires converting to and from decimal numbers for every calculation. Using registers to store decimal values (0 to 9) wastes the remaining 6 possibilities, and makes register groups impossible to use. To use Phyabin, it is critical to be proficient in binary arithmetics, which are easy to learn and master. A binary to decimal mental conversion is a very fast and easy task for an habitual user of the system.

Phyabin and binary may seem complicated and difficult to learn. That is why it will not become popular among the adult population. However, schoolchildren would benefit from learning binary and hexadecimal alongside decimal. By teaching them to use three bases, they would better understand mathematics. And Phyabin is an excellent method to assist in paperless computations.

Someone who has used Phyabin for long enough will develop the ability to use the method without moving his hands or fingers. Instead, that person will rely on mental states and minute muscle contractions to represent the registers. Phyabin is not meant to be used alone: short-term memory is able to store numbers as well, and Phyabin adds to it 20 bits that live in muscle memory.

I like it. This technique could lets me could count to 1000 (actually 1023) on one arm (right hand, right wrist); most people can only count to 5 on one hand.

* ["Count 31 With One Hand"](http://www.metacafe.com/watch/428366/count_31_with_one_hand/)
* ["How to Count to 1,023 on Your Fingers"](http://intuitor.com/counting/) (this is like register 0 and 2 of Phayabin)
* [instructables: "Binary Counting"](http://www.instructables.com/id/Binary-Counting/) (this is like register 0 and 2 of Phayabin)
* [instructables: "How to count higher than 10 on your fingers"](http://www.instructables.com/id/How-to-count-higher-than-10-on-your-fingers/) gives several different methods.

fingers against table
---------------------

* chisenbop

Fingers are pressed against the table to indicate numbers. Pressing 0 to 4 fingers indicates the values 0 to 4. Pressing the thumb, on the other hand, adds 5 to the value. So 2 fingers --> "2". 2 fingers plus thumb --> "7".

[Wikipedia: chisenbop](http://en.wikipedia.org/wiki/chisenbop)

* Press down with fingers in a chord, like on a piano, ( pressing = 1, lifted = 0 ) gives 5 bits on one hand, from 0 to 31. (This is like Register 0 of Phyabin, but everyone I know that does this uses the pinky as the least-significant bit).

thumb-against-fingers
---------------------

* holding thumb against one of the phalanges of the fingers. Since each finger has 3 phalanges, one can count from 1 to 12 on one hand.[[1]](http://en.wikipedia.org/wiki/Hour) ["12 ... is easy to count on one hand."](http://www.rattlesnake.com/notions/base-12.html)
* ["Versatile Numbers: Self-Organization, Emergence and Economics"](http://www.earth360.com/math-versatile.html) by Bill Lauritzen, briefly mentions "simply counting with the thumb on the three bony segments of each four fingers, which gives a versatile twelve."
* holding thumb against one of the finger joints, or against the very tip of the finger. Start with base of first finger, first joint, second joint, tip, then base of next finger, ... etc. One can count from 1 to 16 on one hand.[[2]](http://everything2.com/index.pl?node_id=1689139) ["Hexadecimal counting? Use your fingers" 1981](http://www.iop.org/EJ/abstract/0031-9120/16/1/011/); ["Hexadecimal counting with the fingers (from 00 to FF)"](http://www.flickr.com/photos/hexadecimal_time/2397868049/)

["digital numerics"](http://www.iit.edu/~smart/sandest/digital_numerics.htm) by Estellvenia Sanders describes yet another thumb-against-fingers method of counting to 12 using one hand (one thumb pressed against the fingers of the same hand) ... is it possible to explain this better? Then it explains chisenbop.

other techniques
----------------

One would think that after millenia of humans, we would have figured out everything the human body is capable of. But we keep pushing the limits, a little at a time. [I wonder what I'll discover next year ?](http://futures.wiki.taoriver.net/moin.cgi/PeopleWillMeasureAndRespond) 

With the [American one-hand manual alphabet](http://en.wikipedia.org/wiki/American_manual_alphabet), the signs from 0 to 5 stick out 0 to 5 fingers (thumb only sticks out for 3 and 5).

Using only 1 hand to indicate digits greater than 5 is a bit less mnemonic, but the standard has digits 0 through 9. I suppose one could use the standard hexadecimal notation ("a" means ten, "c" means a dozen) to count from 0 to 35 ("z") on one hand using the American one-hand manual alphabet.

[Applying hexagrams as 'body shapes'](http://uazu.net/notes/iching.html) describes holding 6 more bits with the torso.

["Teaching Children to Add by Counting-On With One-Handed Finger Patterns"](http://www.leaonline.com/doi/abs/10.1207/s1532690xci0303_5?cookieSet=1&journalCode=ci) by Karen C. Fuson, Walter G. Secada, 1986

very tangentially related:

* ["How people around the world count money"](http://www.boingboing.net/2008/02/27/how-people-around-th.html) posted by Cory Doctorow, February 27, 2008 ... some discussion at [[3]](http://www.neatorama.com/2008/02/16/how-do-you-count-your-cash/).
* [halfbakery: "count in gray code -- no more rollover"](http://www.halfbakery.com/idea/count_20in_20gray_20code)

---
