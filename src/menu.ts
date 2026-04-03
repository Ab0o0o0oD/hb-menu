export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  allergens?: string;
  subcategory?: string;
};

export type MenuCategory = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  extras?: string;
};

const menu: Record<string, MenuCategory> = {
  shawarma: {
    title: 'Shawarma',
    items: [
      {
        name: 'Syriansk Shawarma i Rull / Syrian Shawarma Roll',
        description: 'kylling 130 g, syltet agurk, hvitløkssaus',
        price: '180 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma i Tallerken / Shawarma on Plate',
        description:
          'Rullet i brød skåret i biter og servert på tallerken med italiensk salat, fries og hvitløksdressing',
        price: '199 KR',
        allergens: 'E, G',
      },
      {
        name: 'Hungry Birds Shawarma',
        description:
          'kylling 130 g, ost og champignon i brød, servert med syltet agurk, italiensk salat, fries, hvitløkssaus',
        price: '130 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma Snacks Box',
        description: '100 g kylling, pommes frites, syltet agurk, hvitløkssaus',
        price: '189 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma Lam i Rull / Lamb Shawarma Roll',
        description: 'lam 130 g, persille, løk, tomat, tahinisaus, granateplesirup',
        price: '140 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma i Tallerken (Lam) / Shawarma on Plate (Lamb)',
        description:
          'lam 130 g, rullet i brød skåret i biter og servert med persille, tomat, løk, tahinisaus, granateplesirup, fries, syltet agurk',
        price: '185 KR',
        allergens: 'E, G',
      },
    ],
  },
  grill: {
    title: 'Grill Meny / Grill Menu',
    items: [
      {
        name: 'Shish kebab i rull / Shish kebab wrap',
        description: 'med salat, tomat, løk og persille',
        price: '139 KR',
      },
      {
        name: 'Kylling tikka i rull / Chicken tikka wrap',
        description: 'med salat, tomat, løk og persille',
        price: '139 KR / 199 KR',
        allergens: '*H, M',
      },
      {
        name: 'Kullgrillet Kylling / Charcoal Grilled Chicken',
        description: 'whole chicken with hummus, garlic cream',
        price: '419 KR',
      },
      {
        name: 'Kyllinglår grillet / Grilled Chicken Thigh',
        description:
          'Serveres med bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat',
        price: '225 KR',
        allergens: '*H, M',
      },
      {
        name: 'Shish kebab',
        description:
          'Serveres med bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Kylling Tikka / Chicken Tikka',
        description:
          'Serveres med bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Mix Shish Kylling Tikka / Mix Shish Chicken Tikka',
        description:
          'Serveres med bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Toshka',
        description:
          'Kjøttdeig av lam med ost i libanesisk brød, laget med en spesiell marinade. Serveres med pommes frites, hvitløkssaus, tomat og syltet agurk. Passer for 2 personer',
        price: '279 KR',
        allergens: '*H, M',
      },
      {
        name: 'Hamburger',
        description: '120/240 g minced meat, cheddar cheese, red onion, lettuce, tomato, pickled cucumber',
        price: '119 KR / 159 KR',
        allergens: '*H, M, E',
      },
      {
        name: 'Hamburger Meny',
        description: '120/240 g minced meat, cheddar cheese, red onion, lettuce, tomato, pickled cucumber',
        price: '169 KR / 199 KR',
        allergens: '*H, M, E',
      },
    ],
  },
  forretter: {
    title: 'Kalde Forretter / Cold Appetizers',
    items: [
      {
        name: 'Mutabal',
        description: 'Grillet aubergine med tahini, hvitløk og olivenolje',
        price: '79 KR',
        allergens: '*SF',
      },
      {
        name: 'Muhammara',
        description: 'Rød paprika med valnøtter, granateplesaus, kjeksbrød og olivenolje',
        price: '79 KR',
        allergens: 'VA, *SF, M',
      },
      {
        name: 'Hummus',
        description: 'Kremet dip av kikerter med olivenolje',
        price: '69 KR',
        allergens: '*SF',
      },
      {
        name: 'Tabbouleh',
        description: 'Finkuttet persille, tomater, bulgur, salat, sitronsaft og olivenolje',
        price: '99 KR',
        allergens: '*G',
      },
      {
        name: 'Fattoush Salat',
        description: 'Friske grønnsaker, paprika, tomat, salat, granateplesaus, olivenolje',
        price: '99 KR',
        allergens: '*G',
      },
      {
        name: 'Yalanji',
        description:
          '5 stk vinblader fylt med ris, grønnsaker og granateplesaus. Serveres kalde',
        price: '79 KR',
        allergens: '*V',
      },
      {
        name: 'Maza tallerken',
        description: 'Hummus, muhammara, moutabbal',
        price: '139 KR',
      },
    ],
  },
  varmeForretter: {
    title: 'Varme Forretter / Hot Appetizers',
    items: [
      {
        name: 'Falafel',
        description: 'Falafel',
        price: '79 KR',
      },
      {
        name: 'Frityrstekt kibbeh (3 stk)',
        description: 'Laget av bulgur og fylt med kjøttdeig, løk og valnøtter',
        price: '139 KR',
      },
      {
        name: 'Pommes frites med hvitløkssaus',
        description: 'French fries with garlic sauce',
        price: '69 KR',
      },
      {
        name: 'Crispy Tender',
        description: '4/6 stk fritert kyllingfilet, pommes, italiensk salat, hvitløksdressing',
        price: '189 KR / 229 KR',
        allergens: '*G, E, M, P',
      },
    ],
  },
  falafel: {
    title: 'Falafel',
    items: [
      {
        name: 'Falafel i Rull',
        description: '4 stk falafel, brød, tomat, persille, syltet agurk, mynte, tahinisaus',
        price: '85 KR',
        allergens: 'G',
      },
      {
        name: 'Pommes Frites i Rull',
        description: 'Fries, brød, italiensk salat, syltet agurk, hvitløksdressing, ketchup',
        price: '90 KR',
        allergens: 'G, E',
      },
      {
        name: 'Falafel Snacks Salat',
        description: '7 stk falafel, salat, tomat, tahinisaus',
        price: '89 KR',
        allergens: 'G',
      },
    ],
  },
  pizza: {
    title: 'Pizza Meny / Pizza Menu',
    items: [
      {
        name: 'Marinert kylling, løk og paprika, ost og tomatsaus',
        price: '179,-',
        allergens: '*H, M',
        subcategory: 'Kylling Pizza',
      },
      {
        name: 'Marinert kylling, mais, ost og tomatsaus',
        price: '179,-',
        allergens: '*H, M',
        subcategory: 'Kylling Pizza',
      },
      {
        name: 'Marinert kylling, cashewnøtter, ananas, paprika, ost og tomatsaus',
        price: '179,-',
        allergens: '*H, M, N',
        subcategory: 'Kylling Pizza',
      },
      {
        name: 'Marinert kylling, kjøttdeig, løk, paprika, ost og tomatsaus',
        price: '189,-',
        allergens: '*H, M',
        subcategory: 'Kylling Pizza',
      },
      {
        name: 'Kylling shawarma, rødløk, paprika, ost og tomatsaus',
        price: '179,-',
        allergens: '*H, M',
        subcategory: 'Kylling Pizza',
      },
      {
        name: 'Marinert kylling, løk, paprika, ananas, ost, tomatsaus og piri-piri krydder (HOT)',
        price: '189,-',
        allergens: '*H, M',
        subcategory: 'Kylling Pizza',
      },
      {
        name: 'Marinert kylling, fetaost, purreløk, cashewnøtter, oliven, ost og tomatsaus',
        price: '189,-',
        allergens: '*H, M, N',
        subcategory: 'Kylling Pizza',
      },
      {
        name: 'Marinert biff, løk, paprika, sjampinjong, ost og tomatsaus',
        price: '189,-',
        allergens: '*H, M',
        subcategory: 'Biff Pizza',
      },
      {
        name: 'Marinert biff, kjøttdeig, pepperoni, jalapeños, ost og tomatsaus',
        price: '219,-',
        allergens: '*H, M',
        subcategory: 'Biff Pizza',
      },
      {
        name: 'Marinert biff, pepperoni, skinke, sjampinjong, ost og tomatsaus',
        price: '219,-',
        allergens: '*H, M',
        subcategory: 'Biff Pizza',
      },
      {
        name: 'Marinert biff, marinert kylling, kjøttdeig, løk, ost og tomatsaus',
        price: '219,-',
        allergens: '*H, M',
        subcategory: 'Biff Pizza',
      },
      {
        name: 'Marinert biff, bearnaisesaus, løk og mais, ost og tomatsaus',
        price: '219,-',
        allergens: '*H, M, E',
        subcategory: 'Biff Pizza',
      },
      {
        name: 'Marinert biff, gorgonzola ost, løk og ost og tomatsaus',
        price: '199,-',
        allergens: '*H, M',
        subcategory: 'Biff Pizza',
      },
      {
        name: 'Margherita, ost og tomatsaus',
        price: '159,-',
        subcategory: 'Vegetar Pizza',
      },
      {
        name: 'Artisjokk, oliven, tomat, grønn pesto, ost og tomatsaus',
        price: '189,-',
        subcategory: 'Vegetar Pizza',
      },
      {
        name: 'Cashewnøtter, ananas, oliven, løk, fetaost, ost og tomatsaus',
        price: '189,-',
        subcategory: 'Vegetar Pizza',
      },
      {
        name: 'Mozzarella ost, gorgonzola ost, cheddar ost, valnøtter og honning på toppen',
        price: '209,-',
        allergens: '*H, M, N, VA',
        subcategory: 'Vegetar Pizza',
      },
      {
        name: 'Skinke og ananas, ost og tomatsaus',
        price: '179,-',
        subcategory: 'Hawaii Pizza',
      },
      {
        name: 'Skinke, kjøttdeig, løk, paprika, ost og tomatsaus',
        price: '179,-',
        subcategory: 'Hawaii Pizza',
      },
      {
        name: 'Skinke, pepperoni, sjampinjong, ost og tomatsaus',
        price: '199,-',
        subcategory: 'Hawaii Pizza',
      },
      {
        name: 'Pepperoni, fersk sjampinjong, løk, ost og tomatsaus',
        price: '189,-',
        subcategory: 'Hawaii Pizza',
      },
      {
        name: 'Marinert biff, marinert kylling, løk, paprika, ost og tomatsaus',
        price: '219,-',
        subcategory: 'Hungry Birds Favoritt',
      },
      {
        name: 'Pepperoni, skinke, marinert biff, løk, kjøttdeig, ost og tomatsaus',
        price: '219,-',
        subcategory: 'Hungry Birds Favoritt',
      },
      {
        name: 'Marinert kylling, pepperoni, kjøttdeig, løk, fetaost, ost og tomatsaus',
        price: '219,-',
        subcategory: 'Hungry Birds Favoritt',
      },
      {
        name: 'Syrisk sujuk, hjemmelaget kjøttdeig, tomatsaus, ost',
        price: '219,-',
        subcategory: 'Hungry Birds Favoritt',
      },
      {
        name: 'Skinke, kjøttdeig, løk, paprika, tacosaus, ost, tomatsaus, taco krydder',
        price: '189,-',
        subcategory: 'Taco Pizza',
      },
      {
        name: 'Kjøttdeig, jalapeños, løk, fersk tomat, oliven, ost og tomatsaus',
        price: '189,-',
        subcategory: 'Taco Pizza',
      },
      {
        name: 'Marinert biff, tacosaus, løk, kjøttdeig, salattopping med rømmedressing',
        price: '209,-',
        allergens: '*H, M, E, SN',
        subcategory: 'Taco Pizza',
      },
      {
        name: 'Tunfisk, løk, oliven, ost og tomatsaus (Fisk)',
        price: '179,-',
        subcategory: 'Tunfisk Pizza',
      },
      {
        name: 'Lag din egen pizza / Build your own pizza',
        price: '249,-',
        subcategory: 'Lag Din Egen',
      },
    ],
    extras: 'Kjøtt 40,- | Grønnsaker 25,- | Ost 30,- | Sterk saus / Rømmedressing 25,-',
  },
  frokost: {
    title: 'Frokost / Breakfast',
    subtitle: 'Serveres 11:00 - 14:00',
    items: [
      {
        name: 'Oste-manakish / Cheese Manakish',
        description: 'Laget av deig fylt med mozzarellaost',
        price: '39 KR',
        allergens: 'G, M',
      },
      {
        name: 'Sujuk Manakish',
        description: 'Laget av kjøttdeig syrisk sujuk ost',
        price: '39 KR',
        allergens: 'G',
      },
      {
        name: 'Muhammara-manakish',
        description: 'Laget av deig med paprika puré, olivenolje og ost svart frø',
        price: '35 KR',
        allergens: 'G, M',
      },
      {
        name: 'Zaatar-manakish',
        description: 'Laget av deig med zaater og olivenolje',
        price: '35 KR',
        allergens: 'G',
      },
      {
        name: 'Kjøtt-manakish / Meat Manakish',
        description: 'Laget av deig med kjøttdeig og grønnsaker',
        price: '39 KR',
        allergens: 'G',
      },
      {
        name: 'Foul tallerken / Foul Plate',
        description:
          'Fava-bønner med yoghurt, tahina sauce, hvitløk, persille, olivenolje og 2 stk ferske brød',
        price: '129 KR',
        allergens: 'SF, M, G',
      },
      {
        name: 'Falafel tallerken / Falafel Plate',
        description: 'Fem stk falafel servert med salat og tahina sauce',
        price: '99 KR',
      },
      {
        name: 'Hummus',
        description: 'Kremet dip av kikerter med olivenolje',
        price: '79 KR',
      },
    ],
  },
  dessert: {
    title: 'Dessert',
    items: [
      {
        name: 'Halawet el-Jibn',
        price: '79 KR',
        allergens: '*G, M, N',
      },
      {
        name: 'Baklava',
        price: '79 KR',
        allergens: '*G, N',
      },
    ],
  },
  drikke: {
    title: 'Drikke / Drinks',
    items: [
      {
        name: 'Brus/Vann',
        price: '35 KR',
      },
      {
        name: 'Ayran',
        price: '30 KR',
        allergens: '*M',
      },
      {
        name: 'Polo',
        description: 'Fersk sitronjuice med mynte og sukker',
        price: '75 KR',
      },
    ],
  },
};

export default menu;
