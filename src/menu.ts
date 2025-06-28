const menu = {
  pizza: {
    title: "Pizza Meny",
    items: [
      { name: "Marinert kylling, løk og paprika, ost og tomatsaus", price: "179,-" },
      { name: "Marinert kylling, mais, ost og tomatsaus", price: "179,-" },
      { name: "Marinert kylling, cashewnøtter, ananas, paprika, ost og tomatsaus", price: "179,-" },
      { name: "Marinert kylling, kjøttdeig, løk, paprika, ost og tomatsaus", price: "189,-" },
      { name: "Kylling shawarma, rødløk, paprika, ost og tomatsaus", price: "179,-" },
      { name: "Marinert kylling, løk, paprika, ananas, ost, tomatsaus og piri-piri krydder (HOT)", price: "189,-" },
      { name: "Marinert kylling, fetaost, purreløk, cashewnøtter, oliven, ost og tomatsaus", price: "189,-" },
      { name: "Marinert biff, løk, paprika, sjampinjong, ost og tomatsaus", price: "189,-" },
      { name: "Marinert biff, kjøttdeig, pepperoni, jalapeños, ost og tomatsaus", price: "219,-" },
      { name: "Marinert biff, pepperoni, skinke, sjampinjong, ost og tomatsaus", price: "219,-" },
      { name: "Marinert biff, marinert kylling, kjøttdeig, løk, ost og tomatsaus", price: "219,-" },
      { name: "Marinert biff, bearnaisesaus, løk og mais, ost og tomatsaus", price: "219,-" },
      { name: "Marinert biff, gorgonzola ost, løk og ost og tomatsaus", price: "199,-" },
      { name: "Margherita, ost og tomatsaus", price: "159,-" },
      { name: "Artisjokk, oliven, tomat, grønn pesto, ost og tomatsaus", price: "189,-" },
      { name: "Cashewnøtter, ananas, oliven, løk, fetaost, ost og tomatsaus", price: "189,-" },
      { name: "Mozzarella ost, gorgonzola ost, cheddar ost, valnøtter og honning på toppen", price: "209,-" },
      { name: "Skinke og ananas, ost og tomatsaus", price: "179,-" },
      { name: "Skinke, kjøttdeig, løk, paprika, ost og tomatsaus", price: "179,-" },
      { name: "Skinke, pepperoni, sjampinjong, ost og tomatsaus", price: "199,-" },
      { name: "Pepperoni, fersk sjampinjong, løk, ost og tomatsaus", price: "189,-" },
      { name: "Marinert biff, marinert kylling, løk, paprika, ost og tomatsaus", price: "219,-" },
      { name: "Pepperoni, skinke, marinert biff, løk, kjøttdeig, ost og tomatsaus", price: "219,-" },
      { name: "Marinert kylling, pepperoni, kjøttdeig, løk, fetaost, ost og tomatsaus", price: "219,-" },
      { name: "Skinke, kjøttdeig, løk, paprika, tacosaus, ost, tomatsaus, taco krydder", price: "189,-" },
      { name: "Kjøttdeig, jalapeños, løk, fersk tomat, oliven, ost og tomatsaus", price: "189,-" },
      { name: "Marinert biff, tacosaus, løk, kjøttdeig, salattopping med rømmedressing", price: "209,-" },
      { name: "Tunfisk, løk, oliven, ost og tomatsaus", price: "179,-" }
    ]
  },
  manakish: {
    title: "Manakish",
    items: [
      { name: "Oste-manakish (deig med mozzarellaost)", price: "35 KR" },
      { name: "Muhammara-manakish (deig med paprika puré, ost, svart frø)", price: "35 KR" },
      { name: "Zaatar-manakish (deig med zaater og olivenolje)", price: "35 KR" },
      { name: "Kjøtt-manakish (deig med kjøttdeig og grønnsaker)", price: "39 KR" }
    ]
  },
  frokost: {
    title: "Frokost (09:00 - 12:00)",
    items: [
      { name: "Foul tallerken", price: "129 KR" },
      { name: "Falafel tallerken", price: "99 KR" },
      { name: "Humus", price: "79 KR" }
    ]
  },
  shawarma: {
    title: "Shawarma",
    items: [
      { name: "Syriansk Shawarma i Rull", price: "120 KR" },
      { name: "Shawarma i Tallerken", price: "170 KR" },
      { name: "Hungry Birds Shawarma", price: "180 KR" },
      { name: "Shawarma Snacks Box", price: "130 KR" },
      { name: "Shawarma Lam i Rull", price: "140 KR" },
      { name: "Shawarma i Tallerken (Lam)", price: "185 KR" }
    ]
  },
  grill: {
    title: "Grill Meny",
    items: [
      { name: "Kullgrillet Kylling (hel kylling med hummus, hvitløksdressing, pommes og brød)", price: "399 KR" }
    ]
  },
  crispy: {
    title: "Crispy Chicken",
    items: [
      { name: "Crispy Tender (Mild/Spicy)", price: "189 KR / 229 KR" }
    ]
  },
  dessert: {
    title: "Dessert",
    items: [
      { name: "Halawet el-Jibn", price: "79 KR" },
      { name: "Baklava", price: "79 KR" }
    ]
  },
  drikke: {
    title: "Drikke",
    items: [
      { name: "Brus/Vann", price: "35 KR" },
      { name: "Ayran", price: "30 KR" },
      { name: "Polo (fersk sitronjuice med mynte og sukker)", price: "75 KR" }
    ]
  },
  forretter: {
    title: "Kalde Forretter",
    items: [
      { name: "Mutabal (grillet aubergine med tahini, hvitløk og olivenolje)", price: "79 KR" },
      { name: "Muhammara (rød paprika med valnøtter, granateplesaus, kjeksbrød og olivenolje)", price: "79 KR" },
      { name: "Hummus (kremet dip av kikerter med olivenolje)", price: "79 KR" },
      { name: "Pommes Frites", price: "65 KR" },
      { name: "Tabbouleh", price: "99 KR" },
      { name: "Fattoush Salat", price: "99 KR" }
    ]
  },
  falafel: {
    title: "Falafel",
    items: [
      { name: "Falafel i Rull", price: "85 KR" },
      { name: "Falafel Snacks Salat", price: "89 KR" },
      { name: "Pommes Frites i Rull", price: "90 KR" }
    ]
  }
};

export default menu;