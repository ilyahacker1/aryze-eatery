/* ═══════════════════════════════════════════════════════════════════════
   Aryze Eatery — single-page app
   Themes A/B/C via ?v= param. Single modal repurposed for item + cart.
   ═══════════════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  /* ───── theme selection from URL ───── */
  const params = new URLSearchParams(window.location.search);
  const variant = (params.get('v') || 'a').toLowerCase();
  const theme = ['a','b','c'].includes(variant) ? variant : 'a';
  document.body.classList.remove('theme-a','theme-b','theme-c');
  document.body.classList.add('theme-' + theme);

  /* ───── hero copy + theme-specific brand assets per variant ───── */
  const HEROES = {
    a: {
      eyebrow: 'Healthy Drive-Thru · Phoenix, AZ · EST 2026',
      h: 'A healthy<br>drive-thru,<br><em>made for the</em><br>desert<span class="accent">.</span>',
      tag: '— made fresh, made fast —',
      pitch: "Phoenix has run on gas-station food and good intentions for too long. Aryze is the drive-thru we wished existed — organic açaí, line-caught poke, cold-press juice, breakfast burritos that don't apologize. Roll up. Eat clean. Repeat.",
      art: 'desert-photo',
      wordmark: 'assets/logos/wordmark-navy.png',
      badge: 'assets/logos/oval-badge-light.png',
    },
    b: {
      eyebrow: 'The Healthy Drive-Thru · Phoenix, AZ · EST 2026',
      h: '115° outside.<br><span class="accent">Organic</span><br><span class="stroke">inside.</span>',
      tag: '— roll through · eat clean —',
      pitch: "Phoenix's first actually-healthy drive-thru. Line-caught poke, organic açaí, cold-press juice, protein shakes that actually contain protein. Served from a white-brick window faster than you can find your wallet.",
      art: 'desert-cinematic',
      wordmark: 'assets/logos/wordmark-teal.png',
      badge: 'assets/logos/oval-badge-dark.png',
    },
    c: {
      eyebrow: 'The Healthy Drive-Thru',
      h: 'Roll<br>through.<br><span class="accent">Eat clean.</span><br><span class="teal">Repeat.</span>',
      tag: '— made fresh, made fast —',
      pitch: "A drive-thru window in downtown Phoenix that hands you organic açaí, line-caught poke, cold-press juice, and protein shakes that actually contain protein. From a white-brick building. With a sun on the wall.",
      art: 'storefront',
      wordmark: 'assets/logos/wordmark-navy.png',
      badge: 'assets/logos/oval-badge-light.png',
    },
  };

  /* ───── SVG illustrations (3 variants) ───── */
  const ARTS = {
    'desert-banner': `
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d2438"/><stop offset="1" stop-color="#1a3a55"/></linearGradient>
        </defs>
        <rect width="800" height="500" fill="url(#aSky)"/>
        <!-- clouds -->
        <g fill="#fff" opacity="0.92">
          <ellipse cx="150" cy="80" rx="32" ry="9"/><ellipse cx="180" cy="74" rx="22" ry="7"/>
          <ellipse cx="540" cy="105" rx="26" ry="8"/><ellipse cx="320" cy="60" rx="20" ry="6"/>
        </g>
        <!-- sun + rays -->
        <circle cx="660" cy="130" r="44" fill="#f5c32c"/>
        <g stroke="#f5c32c" stroke-width="3" stroke-linecap="round">
          <line x1="660" y1="68" x2="660" y2="80"/><line x1="660" y1="180" x2="660" y2="192"/>
          <line x1="598" y1="130" x2="610" y2="130"/><line x1="710" y1="130" x2="722" y2="130"/>
          <line x1="616" y1="86" x2="626" y2="96"/><line x1="694" y1="164" x2="704" y2="174"/>
          <line x1="704" y1="86" x2="694" y2="96"/><line x1="626" y1="164" x2="616" y2="174"/>
          <line x1="606" y1="108" x2="616" y2="113"/><line x1="704" y1="152" x2="714" y2="157"/>
          <line x1="714" y1="108" x2="704" y2="113"/><line x1="616" y1="152" x2="606" y2="157"/>
        </g>
        <!-- back buttes/mesas (yellow) -->
        <path d="M40 360 L 90 240 Q 105 224 120 240 L 175 360 Z" fill="#f5c32c"/>
        <path d="M170 360 L 215 260 Q 228 246 245 260 L 290 360 Z" fill="#f5c32c"/>
        <path d="M560 360 L 600 250 Q 614 232 632 250 L 680 360 Z" fill="#f5c32c"/>
        <path d="M680 360 L 712 280 Q 723 268 736 280 L 770 360 Z" fill="#f5c32c"/>
        <!-- green hills in front -->
        <path d="M0 380 Q 80 320 160 380 T 320 380 L 320 420 L 0 420 Z" fill="#3e9d6e"/>
        <path d="M280 380 Q 360 310 440 380 T 600 380 L 600 420 L 280 420 Z" fill="#3e9d6e" opacity="0.95"/>
        <path d="M560 385 Q 640 315 720 385 T 800 385 L 800 420 L 560 420 Z" fill="#3e9d6e"/>
        <!-- water/lake -->
        <path d="M0 415 L 800 415 L 800 470 L 0 470 Z" fill="#2bb6a8"/>
        <g stroke="#1d8a7e" stroke-width="1.5" fill="none" opacity="0.55">
          <path d="M40 430 Q 80 425 120 430 T 200 430"/>
          <path d="M280 442 Q 320 437 360 442 T 440 442"/>
          <path d="M520 432 Q 560 427 600 432 T 680 432"/>
          <path d="M120 455 Q 160 450 200 455 T 280 455"/>
          <path d="M380 458 Q 420 453 460 458 T 540 458"/>
          <path d="M600 448 Q 640 443 680 448 T 760 448"/>
        </g>
        <!-- shore stripes -->
        <path d="M0 470 L 800 470 L 800 500 L 0 500 Z" fill="#f5c32c"/>
        <path d="M0 478 L 800 478 L 800 482 L 0 482 Z" fill="#d9a514" opacity="0.5"/>
        <!-- saguaros left -->
        <g fill="#3e9d6e">
          <path d="M30 380 L 30 295 Q 30 282 46 282 L 46 380 Z M 30 315 Q 12 315 12 335 L 12 365 L 22 365 L 22 335 Q 22 322 30 322 Z M 46 308 Q 64 308 64 328 L 64 360 L 54 360 L 54 328 Q 54 318 46 318 Z"/>
        </g>
        <!-- prickly pears -->
        <g fill="#3e9d6e">
          <ellipse cx="100" cy="378" rx="20" ry="13"/>
          <ellipse cx="125" cy="370" rx="14" ry="10"/>
          <ellipse cx="115" cy="385" rx="12" ry="8"/>
          <ellipse cx="715" cy="378" rx="22" ry="14"/>
          <ellipse cx="745" cy="370" rx="16" ry="11"/>
        </g>
        <!-- saguaros right -->
        <g fill="#3e9d6e">
          <path d="M770 380 L 770 285 Q 770 272 788 272 L 788 380 Z M 770 305 Q 752 305 752 325 L 752 360 L 762 360 L 762 325 Q 762 314 770 314 Z"/>
        </g>
        <!-- title - The Healthy Drive Thru! -->
        <text x="400" y="158" font-family="Caveat,cursive" font-weight="700" font-size="62" fill="#fff" text-anchor="middle" letter-spacing="0">The Healthy Drive Thru!</text>
        <text x="400" y="200" font-family="Caveat,cursive" font-weight="400" font-size="26" fill="#fff" text-anchor="middle">Shout Us Out!  · @aryzeeatery</text>
      </svg>`,
    'desert-cinematic': `
      <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#1c4060"/><stop offset="0.5" stop-color="#1a3650"/><stop offset="1" stop-color="#0a1c2e"/>
          </linearGradient>
          <radialGradient id="bSun" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="#f5c32c" stop-opacity="0.5"/><stop offset="1" stop-color="#f5c32c" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="800" fill="url(#bSky)"/>
        <circle cx="600" cy="280" r="280" fill="url(#bSun)"/>
        <circle cx="600" cy="280" r="80" fill="#f5c32c"/>
        <g stroke="#f5c32c" stroke-width="3" stroke-linecap="round" opacity="0.85">
          <line x1="600" y1="180" x2="600" y2="200"/><line x1="600" y1="360" x2="600" y2="380"/>
          <line x1="500" y1="280" x2="520" y2="280"/><line x1="680" y1="280" x2="700" y2="280"/>
          <line x1="528" y1="208" x2="542" y2="222"/><line x1="658" y1="338" x2="672" y2="352"/>
          <line x1="672" y1="208" x2="658" y2="222"/><line x1="542" y1="338" x2="528" y2="352"/>
        </g>
        <!-- stars -->
        <g fill="#f4ecd9" opacity="0.6">
          <circle cx="80" cy="120" r="1.5"/><circle cx="180" cy="60" r="1"/><circle cx="280" cy="100" r="1.5"/>
          <circle cx="120" cy="180" r="1"/><circle cx="380" cy="160" r="1.2"/><circle cx="50" cy="230" r="1"/>
          <circle cx="240" cy="220" r="1.2"/><circle cx="340" cy="280" r="1"/>
        </g>
        <!-- back ridges -->
        <path d="M0 500 L 80 420 L 180 470 L 280 380 L 400 470 L 520 410 L 640 470 L 800 430 L 800 800 L 0 800 Z" fill="#0a1c2e" opacity="0.7"/>
        <path d="M0 580 L 120 470 L 240 550 L 360 460 L 500 560 L 620 480 L 760 560 L 800 540 L 800 800 L 0 800 Z" fill="#091a2c"/>
        <!-- water -->
        <path d="M0 620 L 800 620 L 800 670 L 0 670 Z" fill="#2bb6a8" opacity="0.6"/>
        <path d="M0 660 L 800 660 L 800 700 L 0 700 Z" fill="#2bb6a8" opacity="0.4"/>
        <g stroke="#1d8a7e" stroke-width="1.5" fill="none" opacity="0.4">
          <path d="M60 640 Q 100 635 140 640 T 220 640"/>
          <path d="M340 650 Q 380 645 420 650 T 500 650"/>
          <path d="M580 642 Q 620 637 660 642 T 740 642"/>
        </g>
        <!-- foreground -->
        <path d="M0 700 L 800 700 L 800 800 L 0 800 Z" fill="#050d18"/>
        <!-- saguaros -->
        <g fill="#1a3a55">
          <path d="M100 700 L 100 560 Q 100 545 120 545 L 120 700 Z M 100 590 Q 75 590 75 620 L 75 660 L 88 660 L 88 620 Q 88 605 100 605 Z M 120 600 Q 145 600 145 630 L 145 670 L 132 670 L 132 630 Q 132 616 120 616 Z"/>
          <path d="M260 700 L 260 590 Q 260 578 275 578 L 275 700 Z M 260 612 Q 240 612 240 635 L 240 670 L 250 670 L 250 635 Q 250 622 260 622 Z"/>
          <path d="M620 700 L 620 510 Q 620 495 640 495 L 640 700 Z M 620 540 Q 595 540 595 575 L 595 630 L 608 630 L 608 575 Q 608 558 620 558 Z M 640 560 Q 665 560 665 590 L 665 635 L 652 635 L 652 590 Q 652 575 640 575 Z"/>
        </g>
        <!-- prickly pears -->
        <g fill="#2bb6a8" opacity="0.55">
          <ellipse cx="40" cy="694" rx="30" ry="18"/>
          <ellipse cx="75" cy="685" rx="20" ry="13"/>
          <ellipse cx="740" cy="694" rx="32" ry="20"/>
          <ellipse cx="775" cy="685" rx="22" ry="14"/>
        </g>
      </svg>`,
    'storefront': `
      <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#0d2438"/><stop offset="1" stop-color="#08182a"/>
          </linearGradient>
        </defs>
        <rect width="800" height="800" fill="url(#cSky)"/>
        <!-- Phoenix AZ EST 2026 stamp -->
        <text x="400" y="68" font-family="Caveat,cursive" font-weight="700" font-size="28" fill="#f4ecd9" text-anchor="middle" letter-spacing="2">Phoenix, AZ  ·  Est. 2026</text>
        <line x1="270" y1="80" x2="350" y2="80" stroke="#f4ecd9" stroke-width="1.5"/>
        <line x1="450" y1="80" x2="530" y2="80" stroke="#f4ecd9" stroke-width="1.5"/>
        <!-- clouds -->
        <g fill="#f4ecd9" opacity="0.5">
          <ellipse cx="120" cy="140" rx="28" ry="6"/>
          <ellipse cx="660" cy="160" rx="32" ry="7"/>
        </g>
        <!-- sign on left: Healthy Drive-Thru / Grab & Go -->
        <line x1="98" y1="220" x2="98" y2="370" stroke="#f4ecd9" stroke-width="3"/>
        <rect x="55" y="220" width="86" height="42" fill="#f4ecd9"/>
        <text x="98" y="237" font-family="Anton,sans-serif" font-size="11" fill="#0d2438" text-anchor="middle" letter-spacing="0.5">HEALTHY</text>
        <text x="98" y="251" font-family="Anton,sans-serif" font-size="14" fill="#0d2438" text-anchor="middle" letter-spacing="0.5">DRIVE-THRU</text>
        <rect x="55" y="268" width="86" height="28" fill="#2bb6a8"/>
        <text x="98" y="287" font-family="Anton,sans-serif" font-size="14" fill="#f4ecd9" text-anchor="middle" letter-spacing="0.5">GRAB &amp; GO</text>
        <!-- birds -->
        <g stroke="#f4ecd9" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6">
          <path d="M250 180 q 10 -8 20 0 q 10 -8 20 0"/>
          <path d="M540 200 q 8 -6 16 0 q 8 -6 16 0"/>
        </g>
        <!-- main building -->
        <rect x="180" y="290" width="440" height="280" fill="#f4ecd9"/>
        <polygon points="160,290 640,290 615,260 200,260" fill="#f4ecd9"/>
        <!-- side menu shelf -->
        <rect x="540" y="290" width="100" height="240" fill="#2bb6a8" stroke="#0d2438" stroke-width="2"/>
        <text x="590" y="312" font-family="Inter,sans-serif" font-weight="900" font-size="11" fill="#0d2438" text-anchor="middle">Healthy Bites</text>
        <text x="590" y="332" font-family="Inter,sans-serif" font-weight="700" font-size="10" fill="#0d2438" text-anchor="middle">Coffee</text>
        <text x="590" y="350" font-family="Inter,sans-serif" font-weight="700" font-size="10" fill="#0d2438" text-anchor="middle">Acaí Bowls</text>
        <text x="590" y="368" font-family="Inter,sans-serif" font-weight="700" font-size="10" fill="#0d2438" text-anchor="middle">Poke Bowls</text>
        <text x="590" y="386" font-family="Inter,sans-serif" font-weight="700" font-size="10" fill="#0d2438" text-anchor="middle">Protein Shakes</text>
        <text x="590" y="404" font-family="Inter,sans-serif" font-weight="700" font-size="10" fill="#0d2438" text-anchor="middle">Smoothies</text>
        <text x="590" y="422" font-family="Inter,sans-serif" font-weight="700" font-size="10" fill="#0d2438" text-anchor="middle">Matcha</text>
        <text x="590" y="440" font-family="Inter,sans-serif" font-weight="700" font-size="10" fill="#0d2438" text-anchor="middle">Juices</text>
        <text x="590" y="458" font-family="Inter,sans-serif" font-weight="700" font-size="10" fill="#0d2438" text-anchor="middle">Bone Broth</text>
        <!-- center logo block -->
        <g>
          <!-- sun rays -->
          <circle cx="350" cy="362" r="10" fill="#f5c32c"/>
          <g stroke="#f5c32c" stroke-width="2" stroke-linecap="round">
            <line x1="350" y1="342" x2="350" y2="348"/>
            <line x1="332" y1="362" x2="338" y2="362"/>
            <line x1="362" y1="362" x2="368" y2="362"/>
            <line x1="338" y1="350" x2="342" y2="354"/>
            <line x1="358" y1="350" x2="362" y2="354"/>
            <line x1="338" y1="374" x2="342" y2="370"/>
            <line x1="358" y1="374" x2="362" y2="370"/>
          </g>
          <text x="350" y="412" font-family="Caveat,cursive" font-weight="700" font-size="58" fill="#0d2438" text-anchor="middle">Aryze</text>
          <text x="350" y="438" font-family="Inter,sans-serif" font-weight="900" font-size="13" fill="#2bb6a8" text-anchor="middle" letter-spacing="4">PHOENIX</text>
          <line x1="300" y1="448" x2="400" y2="448" stroke="#0d2438" stroke-width="1.2"/>
          <text x="350" y="464" font-family="Inter,sans-serif" font-weight="900" font-size="11" fill="#0d2438" text-anchor="middle" letter-spacing="4">EATERY</text>
          <text x="350" y="478" font-family="Inter,sans-serif" font-weight="700" font-size="9" fill="#0d2438" text-anchor="middle" letter-spacing="5">ARIZONA</text>
        </g>
        <!-- window -->
        <rect x="220" y="295" width="60" height="40" fill="#0d2438"/>
        <rect x="220" y="295" width="60" height="20" fill="#2bb6a8" opacity="0.75"/>
        <!-- door -->
        <rect x="245" y="490" width="60" height="80" fill="#1a3a55"/>
        <rect x="248" y="495" width="54" height="40" fill="#2bb6a8" opacity="0.6"/>
        <!-- awning -->
        <rect x="195" y="495" width="120" height="14" fill="#2bb6a8"/>
        <!-- saguaros -->
        <g fill="#2bb6a8">
          <path d="M680 570 L 680 425 Q 680 410 700 410 L 700 570 Z M 680 450 Q 660 450 660 480 L 660 540 L 672 540 L 672 480 Q 672 462 680 462 Z M 700 470 Q 720 470 720 500 L 720 555 L 708 555 L 708 500 Q 708 482 700 482 Z"/>
        </g>
        <!-- mountains -->
        <path d="M0 570 L 80 510 L 160 555 L 260 480 L 360 555 L 460 500 L 560 560 L 660 510 L 800 560 L 800 800 L 0 800 Z" fill="#0a1a26"/>
        <!-- ground -->
        <rect x="0" y="570" width="800" height="230" fill="#08182a"/>
      </svg>`,
  };

  /* ───── menu data ───── */
  const C = { // gradient colors per item type
    acaiPurple: ['#5a1d2d','#1e0612'],
    acaiBerry: ['#3a1545','#180722'],
    chocolate: ['#4a2515','#1d0e08'],
    pokeTeal: ['#0f4a4a','#062424'],
    pokeSpicy: ['#7a2818','#2a0e07'],
    burritoGold: ['#7a5418','#2e1f08'],
    burritoBacon: ['#7a2f18','#2a0d07'],
    toastCream: ['#7a5e30','#2e2410'],
    bonebroth: ['#5a3d18','#26180a'],
    smoothieBerry: ['#5a1d3a','#1e0820'],
    smoothieGreen: ['#1d4a2a','#0a200f'],
    shakeBerry: ['#4a1530','#1a0814'],
    shakeGreen: ['#1d3a1d','#0e1a0e'],
    shakeCoffee: ['#3a2410','#160c06'],
    shakeRed: ['#5a1a1a','#1e0808'],
    matchaPink: ['#5a3a4a','#1e1018'],
    juiceOrange: ['#7a4818','#2a1808'],
  };

  const MENU = {
    bowls: [
      { id:'og-bowl', name:'The OG Bowl', price:12, sizes:[{n:'16 oz',p:12},{n:'24 oz',p:16}], desc:'Organic açaí, GF granola, banana, strawberry, blueberry, coconut, wildflower honey.', icon:'🍓', c:C.acaiPurple, boosts:true, tags:['organic'] },
      { id:'nutty-bowl', name:'The Nutty Bowl', price:12, sizes:[{n:'16 oz',p:12},{n:'24 oz',p:16}], desc:'Açaí, GF granola, banana, organic peanut butter, sliced almonds, hemp seed, bee pollen, honey.', icon:'🥜', c:C.chocolate, boosts:true },
      { id:'cheat-day', name:'Cheat Day', price:12, sizes:[{n:'16 oz',p:12},{n:'24 oz',p:16}], desc:'Açaí, banana, GF granola, Nutella, wildflower honey. Yes, with Nutella. No, we\'re not sorry.', icon:'🍫', c:C.acaiBerry, boosts:true, flag:'fan fav' },
      { id:'great-white', name:'Great White Poke', price:18, desc:'Line-caught wild ahi, GF soy, sesame oil, OJ, ginger, garlic, green onion, orange zest, black sesame, crushed macadamia.', icon:'🐟', c:C.pokeTeal, flag:'48g protein', flagType:'protein' },
      { id:'piranha-poke', name:'Piranha Poke', price:19, desc:'Great White + our house spicy "AF" sauce. Built for people who chase the heat.', icon:'🌶️', c:C.pokeSpicy, flag:'spicy 🔥', flagType:'spicy' },
      { id:'mini-acai', name:'Mini Açaí Bowl', price:7, desc:'Half-size OG bowl. Perfect snack-size — what we hand out free in the flyer.', icon:'🫐', c:C.acaiBerry },
    ],
    meals: [
      { id:'sunrise', name:'Sunrise Fuel Burrito', price:10.50, desc:'Diced potato, scrambled cage-free eggs, cheddar. Wrapped warm.', icon:'🌯', c:C.burritoGold },
      { id:'desert-charge', name:'Desert Charge Burrito', price:10.50, desc:'Fresh bacon, scrambled cage-free eggs, cheddar. The savory pick.', icon:'🥓', c:C.burritoBacon },
      { id:'nutty-toast', name:'Nutty Toast', price:10, desc:'Sourdough, sliced banana, peanut butter, wildflower honey, chia seeds.', icon:'🍞', c:C.toastCream, flag:'fan fav' },
      { id:'bone-broth', name:'Bone Broth', price:7, options:[{n:'Chicken'},{n:'Beef'}], desc:'Collagen-rich, slow-simmered with veggies, herbs, lemon, cayenne. 10g protein.', icon:'🍵', c:C.bonebroth, flag:'10g protein', flagType:'protein' },
    ],
    beverages: [
      { id:'berry-bomb', name:'Berry Bomb', price:10, desc:'Organic açaí, strawberry, banana, blueberry, raspberry, blackberry, house almond milk.', icon:'🫐', c:C.smoothieBerry, boosts:true },
      { id:'hella-green', name:'Hella Green', price:10, desc:'Spinach, banana, pineapple, kale, mango, blackberry, house almond milk.', icon:'🥬', c:C.smoothieGreen, boosts:true, flag:'fan fav' },
      { id:'dragon-slayer', name:'Dragon Slayer', price:12.50, desc:'Açaí, berries, banana, vanilla whey, organic PB, cinnamon, almond milk.', icon:'🐉', c:C.shakeBerry, boosts:true, flag:'25g protein', flagType:'protein' },
      { id:'green-goddess', name:'Green Goddess', price:12.50, desc:'Spinach, mango, pineapple, banana, organic plant protein, almond milk.', icon:'🌿', c:C.shakeGreen, boosts:true, flag:'25g protein', flagType:'protein' },
      { id:'rocket-fuel', name:'Rocket Fuel', price:12.50, desc:'Cold-brew coffee, banana, organic PB, vanilla whey, chia, flaxseed, almond milk.', icon:'🚀', c:C.shakeCoffee, boosts:true, flag:'25g protein', flagType:'protein' },
      { id:'beast-mode', name:'Beast Mode', price:12.50, desc:'Açaí, strawberry, banana, organic PB, vanilla whey, almond milk.', icon:'💪', c:C.shakeRed, boosts:true, flag:'25g protein', flagType:'protein' },
      { id:'strawberry-matcha', name:'Strawberry Jam Matcha', price:8, desc:'Ceremonial matcha, organic strawberry jam, cream top.', icon:'🍵', c:C.matchaPink, flag:'fan fav' },
      { id:'cold-assassin', name:'Cold Assassin Juice', price:11, desc:'Grapefruit, orange, lemon, turmeric, ginger, cayenne. Cold-pressed daily.', icon:'🍊', c:C.juiceOrange },
    ],
  };

  /* ───── suggestions (per category → suggested item ids from other sections) ───── */
  const SUGGEST = {
    bowls:     ['hella-green','cold-assassin','strawberry-matcha','bone-broth'],
    meals:     ['rocket-fuel','strawberry-matcha','hella-green','cold-assassin'],
    beverages: ['nutty-toast','mini-acai','og-bowl','great-white'],
  };

  /* ───── boost catalog ───── */
  const BOOSTS = [
    { id:'pb',  name:'Peanut butter',  p:1 },
    { id:'ab',  name:'Almond butter',  p:1 },
    { id:'nut', name:'Nutella',        p:1 },
    { id:'chia',name:'Chia seeds',     p:1 },
    { id:'hemp',name:'Hemp seeds',     p:1 },
    { id:'whey',name:'Vanilla whey',   p:2 },
    { id:'cre', name:'Creatine',       p:2 },
    { id:'pl',  name:'Plant protein',  p:2 },
    { id:'col', name:'Collagen',       p:2 },
  ];

  /* ───── IG synthetic data ───── */
  const IG = [
    { icon:'🍓', c:C.acaiPurple, alt:'OG Bowl close-up' },
    { icon:'🐟', c:C.pokeTeal, alt:'Great White Poke' },
    { icon:'🌅', c:C.juiceOrange, alt:'Phoenix sunrise + iced coffee' },
    { icon:'🥬', c:C.smoothieGreen, alt:'Hella Green smoothie' },
    { icon:'🍵', c:C.matchaPink, alt:'Strawberry Jam Matcha' },
    { icon:'🌯', c:C.burritoGold, alt:'Sunrise Fuel burrito' },
  ];

  /* ───── reviews synthetic data ───── */
  const REVIEWS = [
    {
      name:'Maya Rivera', initial:'M', acolor:['#f5c32c','#e85d26'],
      date:'2 weeks ago · Local Guide',
      text:'The only drive-thru in Phoenix where I roll up in workout clothes and roll away with a poke bowl that has 48 grams of protein. Strawberry Jam Matcha is a top-3 drink in the city.',
      stars:5,
    },
    {
      name:'Devon C.', initial:'D', acolor:['#2bb6a8','#1d8a7e'],
      date:'1 month ago',
      text:'Came in for the free mini açaí flyer deal, stayed for the Nutty Toast. Real eggs, real cheese, real fast — exactly what the south Central corridor was missing.',
      stars:5,
    },
    {
      name:'Sarah K.', initial:'S', acolor:['#e85d26','#f5c32c'],
      date:'3 weeks ago · 12 reviews',
      text:'Whoever runs the Insta is hilarious. Whoever runs the kitchen is even better. Beast Mode shake is the move post-lift. Always 3 min from car to bowl.',
      stars:5,
    },
    {
      name:'Anthony G.', initial:'A', acolor:['#0d2438','#2bb6a8'],
      date:'1 week ago',
      text:'Was skeptical because "healthy drive-thru" usually means soggy salad in a clamshell. Got the Great White Piranha. Wide awake the rest of the day. Will be a weekly stop.',
      stars:5,
    },
    {
      name:'Jules T.', initial:'J', acolor:['#d96a32','#f5c32c'],
      date:'2 months ago',
      text:'Cold Assassin juice + Vaccine Shot fixed a cold in 24 hours, probably placebo, do not care. Family-friendly. The staff knows my dog\'s name. EST. 2026, already feels established.',
      stars:5,
    },
  ];

  /* ═══════════════════════════════════════════════════════════════════════
     STATE + RENDER
     ═══════════════════════════════════════════════════════════════════════ */
  const state = {
    cart: [],      // [{ lineId, id, name, price, qty, size, option, boosts: [], icon, c }]
    activeTab: 'bowls',
  };

  function flatMenu() { return [...MENU.bowls, ...MENU.meals, ...MENU.beverages]; }
  function findItem(id) { return flatMenu().find(i => i.id === id); }
  function catOf(id) {
    if (MENU.bowls.find(i=>i.id===id)) return 'bowls';
    if (MENU.meals.find(i=>i.id===id)) return 'meals';
    return 'beverages';
  }
  function fmt(n) {
    const dollars = Math.floor(n);
    const cents = Math.round((n - dollars) * 100);
    return cents === 0 ? `$${dollars}` : `$${dollars}.${String(cents).padStart(2,'0')}`;
  }

  /* ───── hero render ───── */
  function renderHero() {
    const h = HEROES[theme];
    document.querySelector('[data-hero-eyebrow]').textContent = h.eyebrow;
    document.querySelector('[data-hero-h]').innerHTML = h.h;
    document.querySelector('[data-hero-tag]').textContent = h.tag;
    document.querySelector('[data-hero-pitch]').textContent = h.pitch;

    // Nav wordmark (theme-specific colorway)
    const wm = document.querySelector('[data-wordmark]');
    if (wm) wm.src = h.wordmark;

    // Hero art — either real desert banner photo (theme A) or inline SVG (B/C)
    const art = document.querySelector('[data-hero-art]');
    if (h.art === 'desert-photo') {
      art.insertAdjacentHTML('afterbegin',
        '<img class="hero-art-photo" src="assets/desert-banner.png" alt="The Healthy Drive Thru — desert banner" loading="eager">'
      );
    } else {
      art.insertAdjacentHTML('afterbegin', ARTS[h.art]);
    }

    // Oval badge corner accent (visible on desktop)
    const badge = document.createElement('img');
    badge.className = 'hero-art-badge';
    badge.src = h.badge;
    badge.alt = '';
    badge.setAttribute('aria-hidden', 'true');
    art.appendChild(badge);
  }

  /* ───── menu render ───── */
  function renderMenu() {
    const grid = document.getElementById('menu-grid');
    const items = MENU[state.activeTab];
    grid.innerHTML = items.map(item => `
      <article class="menu-card" style="--c1:${item.c[0]};--c2:${item.c[1]}">
        <div class="card-img">
          ${item.flag ? `<span class="card-flag ${item.flagType||''}">${item.flag}</span>` : ''}
          <span class="icon" aria-hidden="true">${item.icon}</span>
        </div>
        <div class="card-body">
          <h3 class="card-name">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-foot">
            <span class="card-price">${fmt(item.price)}${item.sizes ? '<small> · 16oz</small>' : ''}</span>
            <button class="card-add" data-add="${item.id}" aria-label="Add ${item.name} to cart">
              Add
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  /* ───── tabs ───── */
  function bindTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        state.activeTab = btn.dataset.tab;
        renderMenu();
      });
    });
  }

  /* ───── insta + reviews render ───── */
  function renderInsta() {
    const grid = document.getElementById('insta-grid');
    grid.innerHTML = IG.map((p,i) => `
      <a href="https://instagram.com/aryzeeatery" target="_blank" rel="noopener" class="insta-cell" style="--c1:${p.c[0]};--c2:${p.c[1]}" aria-label="${p.alt}">
        <span class="icon">${p.icon}</span>
        <span class="meta"><span>@aryzeeatery</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </span>
      </a>
    `).join('');
  }

  function star() {
    return `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9"/></svg>`;
  }

  function renderReviews() {
    const scroll = document.getElementById('reviews-scroll');
    scroll.innerHTML = REVIEWS.map(r => `
      <article class="review-card">
        <div class="review-top">
          <div class="review-avatar" style="--c1:${r.acolor[0]};--c2:${r.acolor[1]};background:linear-gradient(135deg,${r.acolor[0]},${r.acolor[1]})">${r.initial}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-meta">${r.date}</div>
          </div>
        </div>
        <div class="review-stars" aria-label="${r.stars} stars">${star().repeat(r.stars)}</div>
        <p class="review-text">${r.text}</p>
        <div class="review-foot">
          <span class="gicon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>via Google</span>
          <span>Verified visit</span>
        </div>
      </article>
    `).join('');
  }

  /* ═══════════════════════════════════════════════════════════════════════
     MODAL — item config OR cart view
     ═══════════════════════════════════════════════════════════════════════ */
  const modal = document.getElementById('modal');
  const backdrop = document.querySelector('[data-backdrop]');
  const modalContent = document.getElementById('modal-content');

  function openModal() {
    modal.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => modalContent.innerHTML = '', 250);
  }
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // local builder for the current item being configured
  let currentBuild = null;

  function priceForBuild(b) {
    if (!b) return 0;
    let p = b.price;
    if (b.size) p = b.size.p;
    if (b.boosts && b.boosts.length) p += b.boosts.reduce((s,bo)=>s + bo.p, 0);
    return p * (b.qty || 1);
  }

  /* ── render item-config view ── */
  function openItemModal(id) {
    const item = findItem(id);
    if (!item) return;
    currentBuild = {
      id: item.id,
      name: item.name,
      price: item.price,
      icon: item.icon,
      c: item.c,
      size: item.sizes ? item.sizes[0] : null,
      option: item.options ? item.options[0].n : null,
      boosts: [],
      qty: 1,
      hasBoosts: !!item.boosts,
    };
    renderItemModal();
    openModal();
  }

  function renderItemModal() {
    const b = currentBuild;
    const item = findItem(b.id);
    const cat = catOf(b.id);
    // suggestions: 3 from other categories the user doesn't already have
    const cartIds = new Set(state.cart.map(c => c.id));
    const sugIds = SUGGEST[cat].filter(sid => sid !== b.id && !cartIds.has(sid)).slice(0,3);

    modalContent.innerHTML = `
      <header class="modal-head">
        <div class="modal-thumb" style="--c1:${b.c[0]};--c2:${b.c[1]}">${b.icon}</div>
        <div class="modal-title-wrap">
          <div class="modal-cat">${cat.toUpperCase()}</div>
          <h2 class="modal-title" id="modal-title">${b.name}</h2>
          <p class="modal-desc">${item.desc}</p>
        </div>
        <button class="modal-close" data-close aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
      </header>

      <div class="modal-body">
        ${item.sizes ? `
          <section class="modal-section">
            <div class="modal-section-h"><span class="lbl">Size</span></div>
            <div class="opt-row" data-opt-group="size">
              ${item.sizes.map(s => `
                <button class="opt-pill ${b.size && b.size.n===s.n?'is-on':''}" data-opt-size='${s.n}|${s.p}'>${s.n}<span class="px">${fmt(s.p)}</span></button>
              `).join('')}
            </div>
          </section>
        ` : ''}

        ${item.options ? `
          <section class="modal-section">
            <div class="modal-section-h"><span class="lbl">Choose one</span></div>
            <div class="opt-row" data-opt-group="option">
              ${item.options.map(o => `
                <button class="opt-pill ${b.option===o.n?'is-on':''}" data-opt-option="${o.n}">${o.n}</button>
              `).join('')}
            </div>
          </section>
        ` : ''}

        ${item.boosts ? `
          <section class="modal-section">
            <div class="modal-section-h"><span class="lbl">Add a boost</span><span class="hint">+$1 or +$2 each</span></div>
            <div class="boost-grid">
              ${BOOSTS.map(bo => `
                <button class="boost ${b.boosts.find(x=>x.id===bo.id)?'is-on':''}" data-boost="${bo.id}">${bo.name}<span class="px">+${fmt(bo.p)}</span></button>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <section class="modal-section">
          <div class="qty-row">
            <span class="qty-label">Quantity</span>
            <div class="qty-ctl">
              <button class="qty-btn" data-qty="-1" aria-label="decrease">−</button>
              <span class="qty-val">${b.qty}</span>
              <button class="qty-btn" data-qty="+1" aria-label="increase">+</button>
            </div>
          </div>
        </section>

        ${sugIds.length ? `
          <section class="modal-section">
            <div class="modal-section-h"><span class="lbl">Pairs well with</span><span class="hint">tap to add</span></div>
            <div class="sug-list">
              ${sugIds.map(sid => { const s = findItem(sid); return `
                <button class="sug-card" data-sug="${s.id}">
                  <span class="sug-img" style="--c1:${s.c[0]};--c2:${s.c[1]}">${s.icon}</span>
                  <span class="sug-name">${s.name}</span>
                  <span class="sug-row"><span class="px">${fmt(s.price)}</span><span class="add">Add +</span></span>
                </button>
              `; }).join('')}
            </div>
          </section>
        ` : ''}
      </div>

      <footer class="modal-foot">
        <div class="modal-total">
          <span class="lbl">Item total</span>
          <span class="val" data-build-total>${fmt(priceForBuild(b))}</span>
        </div>
        <button class="btn btn-primary btn-arrow" data-build-add>Add to cart
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </footer>
    `;
    bindItemModal();
  }

  function bindItemModal() {
    modal.querySelector('[data-close]').addEventListener('click', closeModal);

    modal.querySelectorAll('[data-opt-size]').forEach(b => {
      b.addEventListener('click', () => {
        const [n,p] = b.dataset.optSize.split('|');
        currentBuild.size = { n, p: parseFloat(p) };
        renderItemModal();
      });
    });
    modal.querySelectorAll('[data-opt-option]').forEach(b => {
      b.addEventListener('click', () => { currentBuild.option = b.dataset.optOption; renderItemModal(); });
    });
    modal.querySelectorAll('[data-boost]').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.dataset.boost;
        const i = currentBuild.boosts.findIndex(x=>x.id===id);
        if (i >= 0) currentBuild.boosts.splice(i,1);
        else { const bo = BOOSTS.find(x=>x.id===id); currentBuild.boosts.push({ id:bo.id, name:bo.name, p:bo.p }); }
        renderItemModal();
      });
    });
    modal.querySelectorAll('[data-qty]').forEach(b => {
      b.addEventListener('click', () => {
        currentBuild.qty = Math.max(1, currentBuild.qty + parseInt(b.dataset.qty,10));
        modal.querySelector('.qty-val').textContent = currentBuild.qty;
        modal.querySelector('[data-build-total]').textContent = fmt(priceForBuild(currentBuild));
      });
    });
    modal.querySelectorAll('[data-sug]').forEach(b => {
      b.addEventListener('click', () => {
        // commit current build first, then open the sug
        commitBuild();
        openItemModal(b.dataset.sug);
      });
    });
    modal.querySelector('[data-build-add]').addEventListener('click', () => {
      commitBuild();
      openCartView();
    });
  }

  function commitBuild() {
    if (!currentBuild) return;
    const b = currentBuild;
    state.cart.push({
      lineId: Date.now() + '_' + Math.random().toString(36).slice(2,8),
      id: b.id,
      name: b.name,
      icon: b.icon,
      c: b.c,
      size: b.size ? b.size.n : null,
      option: b.option,
      boosts: b.boosts.slice(),
      qty: b.qty,
      unit: priceForBuild({ ...b, qty: 1 }),
    });
    currentBuild = null;
    updateCartUI();
  }

  /* ── render cart view ── */
  function openCartView() {
    if (!state.cart.length) {
      modalContent.innerHTML = `
        <header class="modal-head">
          <div class="modal-title-wrap" style="flex:1">
            <div class="modal-cat">YOUR CART</div>
            <h2 class="modal-title">Empty — let's fix that.</h2>
          </div>
          <button class="modal-close" data-close>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
          </button>
        </header>
        <div class="modal-body cart-view">
          <div class="cart-empty">
            <span class="emoji">🥣</span>
            <h3>Nothing in here yet</h3>
            <p>Pick a bowl, a meal, or a drink and we'll suggest what pairs with it.</p>
            <button class="btn btn-primary" data-close-and-scroll>Browse the menu →</button>
          </div>
        </div>
      `;
      modal.querySelector('[data-close]').addEventListener('click', closeModal);
      const sb = modal.querySelector('[data-close-and-scroll]');
      sb && sb.addEventListener('click', () => { closeModal(); document.getElementById('menu').scrollIntoView({behavior:'smooth'}); });
      openModal();
      return;
    }

    const subtotal = state.cart.reduce((s,l)=>s + l.unit * l.qty, 0);
    const tax = subtotal * 0.086;
    const total = subtotal + tax;

    // Cross-sell across whole cart: union of suggestions for each cat
    const cats = new Set(state.cart.map(l => catOf(l.id)));
    const cartIds = new Set(state.cart.map(l => l.id));
    const sugIds = new Set();
    cats.forEach(c => SUGGEST[c].forEach(sid => { if (!cartIds.has(sid)) sugIds.add(sid); }));
    const sug = [...sugIds].slice(0,4);

    modalContent.innerHTML = `
      <header class="modal-head">
        <div class="modal-title-wrap" style="flex:1">
          <div class="modal-cat">YOUR CART · ${state.cart.length} ${state.cart.length===1?'item':'items'}</div>
          <h2 class="modal-title">Pick up at #001</h2>
          <p class="modal-desc">1701 S Central Ave · drive-thru or walk-up window. Ready ~5 min after you submit.</p>
        </div>
        <button class="modal-close" data-close>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
      </header>
      <div class="modal-body cart-view">
        <section class="modal-section">
          ${state.cart.map(l => `
            <div class="cart-line" data-line="${l.lineId}">
              <div class="cart-line-thumb" style="--c1:${l.c[0]};--c2:${l.c[1]}">${l.icon}</div>
              <div class="cart-line-body">
                <div class="cart-line-name">${l.name}</div>
                <div class="cart-line-meta">
                  ${[l.size, l.option, ...(l.boosts.map(b=>'+ '+b.name))].filter(Boolean).join(' · ') || '—'}
                </div>
                <div class="cart-line-foot">
                  <span class="cart-line-px">${fmt(l.unit * l.qty)}</span>
                  <div class="cart-line-actions">
                    <button data-line-qty="${l.lineId}|-1" aria-label="decrease">−</button>
                    <span class="qty">${l.qty}</span>
                    <button data-line-qty="${l.lineId}|+1" aria-label="increase">+</button>
                  </div>
                </div>
                <button class="cart-line-rm" data-line-rm="${l.lineId}">Remove</button>
              </div>
            </div>
          `).join('')}
        </section>

        ${sug.length ? `
          <section class="modal-section">
            <div class="modal-section-h"><span class="lbl">Round it out</span><span class="hint">tap to add</span></div>
            <div class="sug-list">
              ${sug.map(sid => { const s = findItem(sid); return `
                <button class="sug-card" data-sug-cart="${s.id}">
                  <span class="sug-img" style="--c1:${s.c[0]};--c2:${s.c[1]}">${s.icon}</span>
                  <span class="sug-name">${s.name}</span>
                  <span class="sug-row"><span class="px">${fmt(s.price)}</span><span class="add">Add +</span></span>
                </button>
              `; }).join('')}
            </div>
          </section>
        ` : ''}

        <section class="modal-section">
          <div class="modal-section-h"><span class="lbl">Order summary</span></div>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:600;color:var(--fg-muted)">
            <div style="display:flex;justify-content:space-between"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
            <div style="display:flex;justify-content:space-between"><span>AZ sales tax</span><span>${fmt(tax)}</span></div>
          </div>
        </section>
      </div>
      <footer class="modal-foot">
        <div class="modal-total">
          <span class="lbl">Total · pickup</span>
          <span class="val">${fmt(total)}</span>
        </div>
        <button class="btn btn-primary btn-arrow" data-checkout>Checkout
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </footer>
    `;
    bindCartView();
    openModal();
  }

  function bindCartView() {
    modal.querySelector('[data-close]').addEventListener('click', closeModal);
    modal.querySelectorAll('[data-line-qty]').forEach(b => {
      b.addEventListener('click', () => {
        const [lineId, delta] = b.dataset.lineQty.split('|');
        const line = state.cart.find(l => l.lineId === lineId);
        if (!line) return;
        line.qty = Math.max(1, line.qty + parseInt(delta,10));
        openCartView();
        updateCartUI();
      });
    });
    modal.querySelectorAll('[data-line-rm]').forEach(b => {
      b.addEventListener('click', () => {
        state.cart = state.cart.filter(l => l.lineId !== b.dataset.lineRm);
        openCartView();
        updateCartUI();
      });
    });
    modal.querySelectorAll('[data-sug-cart]').forEach(b => {
      b.addEventListener('click', () => openItemModal(b.dataset.sugCart));
    });
    modal.querySelector('[data-checkout]').addEventListener('click', () => {
      const total = state.cart.reduce((s,l)=>s + l.unit * l.qty * 1.086, 0);
      modalContent.innerHTML = `
        <header class="modal-head">
          <div class="modal-title-wrap" style="flex:1">
            <div class="modal-cat">ORDER CONFIRMED · DEMO</div>
            <h2 class="modal-title">You're #${Math.floor(Math.random()*40)+12} in line.</h2>
            <p class="modal-desc">${fmt(total)} · ready in ~5 min · pull up to 1701 S Central Ave, drive-thru lane on the right.</p>
          </div>
          <button class="modal-close" data-close>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
          </button>
        </header>
        <div class="modal-body cart-view">
          <div class="cart-empty">
            <span class="emoji">✅</span>
            <h3>Order in the queue</h3>
            <p>This is a concept demo — no payment was taken. Real checkout would integrate with Toast / Square / Olo.</p>
            <button class="btn btn-ghost" data-reset>Start a new order</button>
          </div>
        </div>
      `;
      state.cart = [];
      updateCartUI();
      modal.querySelector('[data-close]').addEventListener('click', closeModal);
      modal.querySelector('[data-reset]').addEventListener('click', closeModal);
    });
  }

  /* ───── cart UI sync ───── */
  function updateCartUI() {
    const count = state.cart.reduce((s,l)=>s + l.qty, 0);
    const total = state.cart.reduce((s,l)=>s + l.unit * l.qty, 0);
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = count > 0 ? count : '';
    });
    document.querySelector('[data-cart-total]').textContent = fmt(total);
    const fab = document.querySelector('.cart-fab');
    if (count > 0) fab.classList.add('is-visible');
    else fab.classList.remove('is-visible');
  }

  /* ───── global delegation ───── */
  function bindGlobal() {
    document.addEventListener('click', e => {
      const addBtn = e.target.closest('[data-add]');
      if (addBtn) { openItemModal(addBtn.dataset.add); return; }
      const cartBtn = e.target.closest('[data-cart-open]');
      if (cartBtn) { openCartView(); return; }
    });
  }

  /* ───── init ───── */
  renderHero();
  bindTabs();
  renderMenu();
  renderInsta();
  renderReviews();
  bindGlobal();
  updateCartUI();

})();
