Homework 8-10 JS Menthoring proggramm
=====================================

To run builder:

1. install npm dependencies:

	> npm install

2. start a builder using default gulp task

	> gulp


Feedback (Yevhen):
----
1.  http://prntscr.com/b2bvib - incorrect hover - **FIXED**
2.  http://prntscr.com/b2bvzz - this should not be a common paragraph, plus there should exist one more element for separating current slide number. - **FIXED**
3.  http://prntscr.com/b2bwuz - 'Main news' should not be a link, that's why it's different to another headers in mockup. - **FIXED**
4.  http://prntscr.com/b2bxvw - totally incorrect BEM within block.
5.  http://prntscr.com/b2by72 - incorrect structure
6.  http://prntscr.com/b2bz64 - there is no height fix in mockup
7.  http://prntscr.com/b2bzod - due to semantics there should be a list + list items - **FIXED**
8.  http://prntscr.com/b2c06r - oops. There should not be a height fix
9.  http://prntscr.com/b2c4m9 - oops once again. Incorrect markup.
10.  http://prntscr.com/b2c53o - the same as a 7th. - **FIXED**
11.  http://prntscr.com/b2c5ra - incorrect markup, list should start below the button.
12.  http://prntscr.com/b2c6d0​ - totally incorrect naming + layout organizing
13.  Why all includes are in main.scss, instead of just generating separate CSS files and concat them (or even w/o generating) via gulp? - **FIXED**
14.  Lack of variables in SCSS, but in other things CSS part seems to be cute.
15.  BEM is incorrect [almost] everywhere.
16.  Include-media for media-queries… It seems this is overhead for that task, plus it’s plugin usage instead of creating own code.

Feedback (Olena):
----
1.  Only 1 break point (1024px). .container width is fixed (720px for small screens) -> it causes horizontal scroll.
2.  <meta name="viewport"> should be added into <head>. - **FIXED**
3.  Horizontal gaps should be added for page.
4.  Images are responsive. Would be good to add  retina icons.
5.  Good decision for cutting off long texts for .slide__content (blurring out with gradient).