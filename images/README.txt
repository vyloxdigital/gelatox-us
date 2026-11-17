Gelatox US — images folder
==========================

Drop your fifteen image files into this folder, using these exact filenames.
The page references these and nothing else.

File                                 Used where                   Rendered box    Suggested source size
-----------------------------------  ---------------------------  --------------  ---------------------
gelatox-hero.webp                    Hero (LCP image)             1120 x 840 (4:3) 2240 x 1680
gelatox-6-bottles-guarantee.webp     6-bottle price card          400 x 400 (1:1)   800 x 800
gelatox-3-bottles-guarantee.webp     3-bottle price card          400 x 400 (1:1)   800 x 800
gelatox-2-bottles-guarantee.webp     2-bottle price card          400 x 400 (1:1)   800 x 800
gelatox-review-1.webp                Gallery, first               560 x 420 (4:3)  1120 x 840
gelatox-review-2.webp                Gallery, second              560 x 420 (4:3)  1120 x 840
gelatox-review-3.webp                Gallery, third               560 x 420 (4:3)  1120 x 840
gelatox-guarantee.webp               Refund section seal          400 x 400 (1:1)   800 x 800
gelatox-bonus-1.webp                 Bonus library, card 1        420 x 560 (3:4)   840 x 1120
gelatox-bonus-2.webp                 Bonus library, card 2        420 x 560 (3:4)   840 x 1120
gelatox-bonus-3.webp                 Bonus library, card 3        420 x 560 (3:4)   840 x 1120
gelatox-bonus-4.webp                 Bonus library, card 4        420 x 560 (3:4)   840 x 1120
gelatox-bonus-5.webp                 Bonus library, card 5        420 x 560 (3:4)   840 x 1120
gelatox-bonus-6.webp                 Bonus library, card 6        420 x 560 (3:4)   840 x 1120
favicon.png                          Browser tab + app icon       any              512 x 512

The bonus images map to these titles, in this order:
  1  Say Goodbye to Varicose Veins
  2  Stretch Mark Eraser Guide
  3  Facial Rejuvenation
  4  Renova Flora Protocol
  5  Flat Butts and Defined Thighs
  6  Personalized Usage Guide

If your bonus artwork arrives in a different order, swap the FILES rather than
editing the HTML — each card's heading is fixed to the number above.

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   Your real files do NOT have to match the ratios above exactly: nothing
   stretches or crops, and the layout will not shift while images load
   (cumulative layout shift stays at zero). Matching the ratio only makes the
   box sit more tightly around the artwork.

2. gelatox-hero.webp is the Largest Contentful Paint image. It is preloaded
   with fetchpriority="high" in the page head and sits in a wide 4:3 frame, so
   it is the one file worth compressing hardest — aim for under 80 KB. All
   fourteen other images are lazy-loaded and matter far less.

3. Keep the .webp extension. The filenames appear in index.html, sitemap.xml
   and the Open Graph / Twitter meta tags; renaming one means editing three.

4. favicon.png should be a square PNG. 512 x 512 covers both the browser tab
   and the Android home-screen icon declared in manifest.json.

5. Export WebP at quality 78-82. Past that the file grows without a visible
   gain at these rendered sizes.
