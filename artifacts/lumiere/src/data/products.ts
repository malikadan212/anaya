export interface Product {
  id: string;
  name: string;
  category: "rings" | "necklaces" | "earrings" | "bracelets";
  price: number;
  material: string;
  description: string;
  images: string[];
  badge?: "New" | "Bestseller" | "Limited";
}

export const products: Product[] = [
  {
    id: "1",
    name: "Anaya Solitaire Ring",
    category: "rings",
    price: 1840,
    material: "18k Gold, Rose-Cut Diamond",
    description: "A timeless solitaire featuring a rose-cut diamond that captures light from every angle. Each facet tells a story of craftsmanship and elegance.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80"
    ],
    badge: "Bestseller"
  },
  {
    id: "2",
    name: "Arc Pavé Band",
    category: "rings",
    price: 2240,
    material: "Platinum, Micro-Pavé Diamonds",
    description: "Delicate micro-pavé diamonds set in platinum create a continuous arc of light around your finger. Modern luxury with classical restraint.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80"
    ],
    badge: "New"
  },
  {
    id: "3",
    name: "Croissant Ring",
    category: "rings",
    price: 680,
    material: "18k Gold, Textured Finish",
    description: "Inspired by Parisian architecture, this textured gold band adds sculptural dimension to any composition. Wear alone or stacked.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80",
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80"
    ]
  },
  {
    id: "4",
    name: "Celestial Pendant",
    category: "necklaces",
    price: 420,
    material: "Sterling Silver, Moonstone",
    description: "A luminous moonstone captures the mystery of moonlight on water. Delicate yet unforgettable.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    badge: "New"
  },
  {
    id: "5",
    name: "Rivière Necklace",
    category: "necklaces",
    price: 1650,
    material: "18k Gold, Diamond Bar",
    description: "A flowing line of diamonds set in gold. French elegance meets Tokyo minimalism in this signature piece.",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    badge: "Bestseller"
  },
  {
    id: "6",
    name: "Lune Choker",
    category: "necklaces",
    price: 890,
    material: "Platinum, Crescent Motif",
    description: "A crescent moon rests at the collarbone — a whisper of night sky against skin. Limited production.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    badge: "Limited"
  },
  {
    id: "7",
    name: "Étoile Drop Earrings",
    category: "earrings",
    price: 760,
    material: "18k Gold, Star Sapphire",
    description: "Star sapphires catch the light with each movement. A celestial accent for evening or everyday elegance.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ]
  },
  {
    id: "8",
    name: "Arc Ear Cuff",
    category: "earrings",
    price: 340,
    material: "Sterling Silver, Sculptural Design",
    description: "Sculptural silver curves around the ear without the need for piercing. Architecture for the body.",
    images: [
      "https://images.unsplash.com/photo-1596944946731-e7763d67c26b?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
    ],
    badge: "New"
  },
  {
    id: "9",
    name: "Petal Studs",
    category: "earrings",
    price: 580,
    material: "18k Rose Gold, Pink Sapphire",
    description: "Delicate pink sapphires bloom in rose gold petals. A subtle accent with lasting presence.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ]
  },
  {
    id: "10",
    name: "Tennis Bracelet",
    category: "bracelets",
    price: 3200,
    material: "Platinum, Brilliant Diamonds",
    description: "A continuous line of brilliant-cut diamonds. Timeless refinement for the wrist.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    badge: "Bestseller"
  },
  {
    id: "11",
    name: "Serpent Bangle",
    category: "bracelets",
    price: 1120,
    material: "18k Gold, Coiled Design",
    description: "A coiled serpent wraps around the wrist — ancient symbolism reimagined in modern form.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
    ],
    badge: "Limited"
  },
  {
    id: "12",
    name: "Mist Bracelet",
    category: "bracelets",
    price: 290,
    material: "Sterling Silver, Delicate Chain",
    description: "Ethereal silver links create a barely-there presence on the wrist. Layer or wear alone.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ]
  }
];
