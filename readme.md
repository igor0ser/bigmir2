Homework 8-10 JS Menthoring proggramm
=====================================

To run builder:

1. install npm dependencies:

	> npm install

2. start a builder using default gulp task

	> gulp


Task:
----
Evaluation Criteria:

1.  Correct visual page rendering according to PSD source, using best practices and semantic rules.
2.  Requirements above + correct BEM + correct adaptivity.
3.  Requirements above + PostCSS and its plugins usage
4.  Well... Surprise me with something (smile)

Mandatory requirements:
  * Using BEM methodology and its file structure.
  * Using one of CSS preprocessors, mentees can choose. 
  * Best practices.
  * Support adaptivity for two different breakpoints (for example, 1024 and 768).
  * Progressive enhancement & graceful degradation.

What I have made for 4th point:
--------------------------------
  * Created almost pixel-perfect-markup.
  * Used gulp.spritesmith that creates one png-file from many and creates scss-file with @mixins for all sprites.
  * Used gulp-rigger for building html file from blocks.
  * Used include-media for creating media queries.
  * Used CSS Comb for sorting selectors during coding.
  * Used attr() for content in pseudo-elements for links.
