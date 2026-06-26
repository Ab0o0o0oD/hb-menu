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
        name: 'Syriansk Shawarma i Rull',
        description: 'kylling 130 g, syltet agurk, hvitløkssaus',
        price: '130 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma i Tallerken',
        description:
          'Rullet i brød skåret i biter og servert på tallerken med italiensk salat, fries og hvitløksdressing',
        price: '180 KR',
        allergens: 'E, G',
      },
      {
        name: 'Hungry Birds Shawarma',
        description:
          'kylling 130 g, ost og champignon i brød, servert med syltet agurk, italiensk salat, fries, hvitløkssaus',
        price: '199 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma Snacks Box',
        description: '100 g kylling, pommes frites, syltet agurk, hvitløkssaus',
        price: '130 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma Lam i Rull',
        description: 'lam 130 g, persille, løk, tomat, tahinisaus, granateplesirup',
        price: '145 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma i Tallerken (Lam)',
        description:
          'lam 130 g, rullet i brød skåret i biter og servert med persille, tomat, løk, tahinisaus, granateplesirup, fries, syltet agurk',
        price: '189 KR',
        allergens: 'E, G',
      },
    ],
  },
  grill: {
    title: 'Grill Meny',
    items: [
      {
        name: 'Shish kebab i rull',
        description: 'med salat, tomat, løk og persille',
        price: '139 KR',
      },
      {
        name: 'Kylling tikka i rull',
        description: 'med salat, tomat, løk og persille',
        price: '139 KR / 199 KR',
        allergens: '*H, M',
      },
      {
        name: 'Kullgrillet Kylling',
        description: 'whole chicken with hummus, garlic cream',
        price: '419 KR',
      },
      {
        name: 'Kyllinglår grillet',
        description: 'Serveres med bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat',
        price: '225 KR',
        allergens: '*H, M',
      },
      {
        name: 'Shish kebab',
        description: 'Serveres med bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Kylling Tikka',
        description: 'Serveres med bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Mix Shish Kylling Tikka',
        description: 'Serveres med bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Beyti Kebab Med Shish Kebab/Kylling',
        description: 'Serveres med ost inni rullen, bulgur eller pommes frites, hvitløkssaus, tomat, syltet agurk og salat. (2 spyd)',
        price: '235 KR',
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
    title: 'Kalde Forretter',
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
        price: '79 KR',
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
        description: '5 stk vinblader fylt med ris, grønnsaker og granateplesaus. Serveres kalde',
        price: '69 KR',
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
    title: 'Varme Forretter',
    items: [
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
        price: '199 KR / 239 KR',
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
        description: '5 stk falafel, salat, tomat, tahinisaus',
        price: '99 KR',
        allergens: 'G',
      },
    ],
  },
  pizza: {
    title: 'Pizza Meny',
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
        name: 'Lag din egen pizza',
        price: '249,-',
        subcategory: 'Lag Din Egen',
      },
    ],
    extras: 'Kjøtt 40,- | Grønnsaker 25,- | Ost 30,- | Sterk saus / Rømmedressing 25,-',
  },
  // frokost: {
  //   title: 'Frokost / Breakfast',
  //   subtitle: 'Serveres 11:00 - 14:00',
  //   items: [
  //     {
  //       name: 'Oste-manakish / Cheese Manakish',
  //       description: 'Laget av deig fylt med mozzarellaost',
  //       price: '39 KR',
  //       allergens: 'G, M',
  //     },
  //     {
  //       name: 'Sujuk Manakish',
  //       description: 'Laget av kjøttdeig syrisk sujuk ost',
  //       price: '39 KR',
  //       allergens: 'G',
  //     },
  //     {
  //       name: 'Muhammara-manakish',
  //       description: 'Laget av deig med paprika puré, olivenolje og ost svart frø',
  //       price: '39 KR',
  //       allergens: 'G, M',
  //     },
  //     {
  //       name: 'Zaatar-manakish',
  //       description: 'Laget av deig med zaater og olivenolje',
  //       price: '39 KR',
  //       allergens: 'G',
  //     },
  //     {
  //       name: 'Kjøtt-manakish / Meat Manakish',
  //       description: 'Laget av deig med kjøttdeig og grønnsaker',
  //       price: '39 KR',
  //       allergens: 'G',
  //     },
  //     {
  //       name: 'Foul tallerken / Foul Plate',
  //       description:
  //         'Fava-bønner med yoghurt, tahina sauce, hvitløk, persille, olivenolje og 2 stk ferske brød',
  //       price: '129 KR',
  //       allergens: 'SF, M, G',
  //     },
  //     {
  //       name: 'Falafel tallerken / Falafel Plate',
  //       description: 'Fem stk falafel servert med salat og tahina sauce',
  //       price: '99 KR',
  //     },
  //     {
  //       name: 'Hummus',
  //       description: 'Kremet dip av kikerter med olivenolje',
  //       price: '79 KR',
  //     },
  //   ],
  // },
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
    title: 'Drikke',
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

const menuEn: Record<string, MenuCategory> = {
  shawarma: {
    title: 'Shawarma',
    items: [
      {
        name: 'Syrian Shawarma Roll',
        description: 'chicken 130 g, pickled cucumber, garlic sauce',
        price: '130 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma on Plate',
        description:
          'Rolled in bread cut into pieces and served on a plate with Italian salad, fries and garlic dressing',
        price: '180 KR',
        allergens: 'E, G',
      },
      {
        name: 'Hungry Birds Shawarma',
        description:
          'chicken 130 g, cheese and mushroom in bread, served with pickled cucumber, Italian salad, fries, garlic sauce',
        price: '199 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma Snacks Box',
        description: '100 g chicken, french fries, pickled cucumber, garlic sauce',
        price: '130 KR',
        allergens: 'E, G',
      },
      {
        name: 'Lamb Shawarma Roll',
        description: 'lamb 130 g, parsley, onion, tomato, tahini sauce, pomegranate molasses',
        price: '145 KR',
        allergens: 'E, G',
      },
      {
        name: 'Shawarma on Plate (Lamb)',
        description:
          'lamb 130 g, rolled in bread cut into pieces and served with parsley, tomato, onion, tahini sauce, pomegranate molasses, fries, pickled cucumber',
        price: '189 KR',
        allergens: 'E, G',
      },
    ],
  },
  grill: {
    title: 'Grill Menu',
    items: [
      {
        name: 'Shish kebab wrap',
        description: 'with salad, tomato, onion and parsley',
        price: '139 KR',
      },
      {
        name: 'Chicken tikka wrap',
        description: 'with salad, tomato, onion and parsley',
        price: '139 KR / 199 KR',
        allergens: '*H, M',
      },
      {
        name: 'Charcoal Grilled Chicken',
        description: 'whole chicken with hummus, garlic cream',
        price: '419 KR',
      },
      {
        name: 'Grilled Chicken Thigh',
        description: 'Served with bulgur or french fries, garlic sauce, tomato, pickled cucumber and salad',
        price: '225 KR',
        allergens: '*H, M',
      },
      {
        name: 'Shish kebab',
        description: 'Served with bulgur or french fries, garlic sauce, tomato, pickled cucumber and salad',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Chicken Tikka',
        description: 'Served with bulgur or french fries, garlic sauce, tomato, pickled cucumber and salad',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Mix Shish Chicken Tikka',
        description: 'Served with bulgur or french fries, garlic sauce, tomato, pickled cucumber and salad',
        price: '225 KR',
        allergens: '*M',
      },
      {
        name: 'Beyti Kebab with Shish Kebab/Chicken',
        description: 'Served with cheese inside the roll, bulgur or french fries, garlic sauce, tomato, pickled cucumber and salad. (2 skewers)',
        price: '235 KR',
        allergens: '*M',
      },
      {
        name: 'Toshka',
        description:
          'Minced lamb with cheese in Lebanese bread, made with a special marinade. Served with french fries, garlic sauce, tomato and pickled cucumber. Suitable for 2 people',
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
        name: 'Hamburger Meal',
        description: '120/240 g minced meat, cheddar cheese, red onion, lettuce, tomato, pickled cucumber',
        price: '169 KR / 199 KR',
        allergens: '*H, M, E',
      },
    ],
  },
  forretter: {
    title: 'Cold Appetizers',
    items: [
      {
        name: 'Mutabal',
        description: 'Grilled eggplant with tahini, garlic and olive oil',
        price: '79 KR',
        allergens: '*SF',
      },
      {
        name: 'Muhammara',
        description: 'Red pepper with walnuts, pomegranate sauce, cracker bread and olive oil',
        price: '79 KR',
        allergens: 'VA, *SF, M',
      },
      {
        name: 'Hummus',
        description: 'Creamy chickpea dip with olive oil',
        price: '79 KR',
        allergens: '*SF',
      },
      {
        name: 'Tabbouleh',
        description: 'Finely chopped parsley, tomatoes, bulgur, salad, lemon juice and olive oil',
        price: '99 KR',
        allergens: '*G',
      },
      {
        name: 'Fattoush Salad',
        description: 'Fresh vegetables, pepper, tomato, salad, pomegranate sauce, olive oil',
        price: '99 KR',
        allergens: '*G',
      },
      {
        name: 'Yalanji',
        description: '5 pcs vine leaves stuffed with rice, vegetables and pomegranate sauce. Served cold',
        price: '69 KR',
        allergens: '*V',
      },
      {
        name: 'Maza plate',
        description: 'Hummus, muhammara, moutabbal',
        price: '139 KR',
      },
    ],
  },
  varmeForretter: {
    title: 'Hot Appetizers',
    items: [
      {
        name: 'Deep-fried kibbeh (3 pcs)',
        description: 'Made of bulgur and filled with minced meat, onion and walnuts',
        price: '139 KR',
      },
      {
        name: 'French fries with garlic sauce',
        description: 'French fries with garlic sauce',
        price: '69 KR',
      },
      {
        name: 'Crispy Tender',
        description: '4/6 pcs fried chicken fillet, fries, Italian salad, garlic dressing',
        price: '199 KR / 239 KR',
        allergens: '*G, E, M, P',
      },
    ],
  },
  falafel: {
    title: 'Falafel',
    items: [
      {
        name: 'Falafel Roll',
        description: '4 pcs falafel, bread, tomato, parsley, pickled cucumber, mint, tahini sauce',
        price: '85 KR',
        allergens: 'G',
      },
      {
        name: 'French Fries Roll',
        description: 'Fries, bread, Italian salad, pickled cucumber, garlic dressing, ketchup',
        price: '90 KR',
        allergens: 'G, E',
      },
      {
        name: 'Falafel Snack Salad',
        description: '5 pcs falafel, salad, tomato, tahini sauce',
        price: '99 KR',
        allergens: 'G',
      },
    ],
  },
  pizza: {
    title: 'Pizza Menu',
    items: [
      {
        name: 'Marinated chicken, onion and peppers, cheese and tomato sauce',
        price: '179,-',
        allergens: '*H, M',
        subcategory: 'Chicken Pizza',
      },
      {
        name: 'Marinated chicken, corn, cheese and tomato sauce',
        price: '179,-',
        allergens: '*H, M',
        subcategory: 'Chicken Pizza',
      },
      {
        name: 'Marinated chicken, cashew nuts, pineapple, peppers, cheese and tomato sauce',
        price: '179,-',
        allergens: '*H, M, N',
        subcategory: 'Chicken Pizza',
      },
      {
        name: 'Marinated chicken, minced meat, onion, peppers, cheese and tomato sauce',
        price: '189,-',
        allergens: '*H, M',
        subcategory: 'Chicken Pizza',
      },
      {
        name: 'Chicken shawarma, red onion, peppers, cheese and tomato sauce',
        price: '179,-',
        allergens: '*H, M',
        subcategory: 'Chicken Pizza',
      },
      {
        name: 'Marinated chicken, onion, peppers, pineapple, cheese, tomato sauce and piri-piri spice (HOT)',
        price: '189,-',
        allergens: '*H, M',
        subcategory: 'Chicken Pizza',
      },
      {
        name: 'Marinated chicken, feta cheese, leek, cashew nuts, olives, cheese and tomato sauce',
        price: '189,-',
        allergens: '*H, M, N',
        subcategory: 'Chicken Pizza',
      },
      {
        name: 'Marinated beef, onion, peppers, mushroom, cheese and tomato sauce',
        price: '189,-',
        allergens: '*H, M',
        subcategory: 'Beef Pizza',
      },
      {
        name: 'Marinated beef, minced meat, pepperoni, jalapeños, cheese and tomato sauce',
        price: '219,-',
        allergens: '*H, M',
        subcategory: 'Beef Pizza',
      },
      {
        name: 'Marinated beef, pepperoni, ham, mushroom, cheese and tomato sauce',
        price: '219,-',
        allergens: '*H, M',
        subcategory: 'Beef Pizza',
      },
      {
        name: 'Marinated beef, marinated chicken, minced meat, onion, cheese and tomato sauce',
        price: '219,-',
        allergens: '*H, M',
        subcategory: 'Beef Pizza',
      },
      {
        name: 'Marinated beef, béarnaise sauce, onion and corn, cheese and tomato sauce',
        price: '219,-',
        allergens: '*H, M, E',
        subcategory: 'Beef Pizza',
      },
      {
        name: 'Marinated beef, gorgonzola cheese, onion and cheese and tomato sauce',
        price: '199,-',
        allergens: '*H, M',
        subcategory: 'Beef Pizza',
      },
      {
        name: 'Margherita, cheese and tomato sauce',
        price: '159,-',
        subcategory: 'Vegetarian Pizza',
      },
      {
        name: 'Artichoke, olives, tomato, green pesto, cheese and tomato sauce',
        price: '189,-',
        subcategory: 'Vegetarian Pizza',
      },
      {
        name: 'Cashew nuts, pineapple, olives, onion, feta cheese, cheese and tomato sauce',
        price: '189,-',
        subcategory: 'Vegetarian Pizza',
      },
      {
        name: 'Mozzarella, gorgonzola, cheddar, walnuts and honey on top',
        price: '209,-',
        allergens: '*H, M, N, VA',
        subcategory: 'Vegetarian Pizza',
      },
      {
        name: 'Ham and pineapple, cheese and tomato sauce',
        price: '179,-',
        subcategory: 'Hawaii Pizza',
      },
      {
        name: 'Ham, minced meat, onion, peppers, cheese and tomato sauce',
        price: '179,-',
        subcategory: 'Hawaii Pizza',
      },
      {
        name: 'Ham, pepperoni, mushroom, cheese and tomato sauce',
        price: '199,-',
        subcategory: 'Hawaii Pizza',
      },
      {
        name: 'Pepperoni, fresh mushroom, onion, cheese and tomato sauce',
        price: '189,-',
        subcategory: 'Hawaii Pizza',
      },
      {
        name: 'Marinated beef, marinated chicken, onion, peppers, cheese and tomato sauce',
        price: '219,-',
        subcategory: 'Hungry Birds Favourite',
      },
      {
        name: 'Pepperoni, ham, marinated beef, onion, minced meat, cheese and tomato sauce',
        price: '219,-',
        subcategory: 'Hungry Birds Favourite',
      },
      {
        name: 'Marinated chicken, pepperoni, minced meat, onion, feta cheese, cheese and tomato sauce',
        price: '219,-',
        subcategory: 'Hungry Birds Favourite',
      },
      {
        name: 'Syrian sujuk, homemade minced meat, tomato sauce, cheese',
        price: '219,-',
        subcategory: 'Hungry Birds Favourite',
      },
      {
        name: 'Ham, minced meat, onion, peppers, taco sauce, cheese, tomato sauce, taco spice',
        price: '189,-',
        subcategory: 'Taco Pizza',
      },
      {
        name: 'Minced meat, jalapeños, onion, fresh tomato, olives, cheese and tomato sauce',
        price: '189,-',
        subcategory: 'Taco Pizza',
      },
      {
        name: 'Marinated beef, taco sauce, onion, minced meat, salad topping with sour cream dressing',
        price: '209,-',
        allergens: '*H, M, E, SN',
        subcategory: 'Taco Pizza',
      },
      {
        name: 'Tuna, onion, olives, cheese and tomato sauce (Fish)',
        price: '179,-',
        subcategory: 'Tuna Pizza',
      },
      {
        name: 'Build your own pizza',
        price: '249,-',
        subcategory: 'Build Your Own',
      },
    ],
    extras: 'Meat 40,- | Vegetables 25,- | Cheese 30,- | Hot sauce / Sour cream dressing 25,-',
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
    title: 'Drinks',
    items: [
      {
        name: 'Soda/Water',
        price: '35 KR',
      },
      {
        name: 'Ayran',
        price: '30 KR',
        allergens: '*M',
      },
      {
        name: 'Polo',
        description: 'Fresh lemon juice with mint and sugar',
        price: '75 KR',
      },
    ],
  },
};

export { menuEn };
