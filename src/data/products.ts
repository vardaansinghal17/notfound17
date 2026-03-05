export interface Product {
  id: string;
  name: string;
  drop: string;
  price: number;
  remaining: number;
  image: string;
  imageAlt: string;
  description: string;
  story: string;
}

import jacket1 from "@/assets/jacket-1.jpg";
import jacket2 from "@/assets/jacket-2.jpg";
import jacket3 from "@/assets/jacket-3.jpg";

export const products: Product[] = [
  {
    id: "void-classic",
    name: "The Void Classic",
    drop: "DROP 001",
    price: 289,
    remaining: 7,
    image: jacket1,
    imageAlt: "The Void Classic - black oversized denim jacket",
    description: "Pure black oversized denim. No noise. No compromise. The foundation piece of NF17.",
    story: "Born from the idea that true identity starts with silence. The Void Classic strips away everything unnecessary, leaving only the essence of who you are.",
  },
  {
    id: "rebel-patch",
    name: "The Rebel Patch",
    drop: "DROP 002",
    price: 349,
    remaining: 4,
    image: jacket2,
    imageAlt: "The Rebel Patch - distressed denim jacket with patches",
    description: "Distressed charcoal denim adorned with hand-selected patches. Each one tells a story of defiance.",
    story: "Every patch was chosen to represent a moment of rebellion — against expectations, against the ordinary. This jacket is your personal manifesto.",
  },
  {
    id: "shadow-embroidered",
    name: "The Shadow",
    drop: "DROP 003",
    price: 319,
    remaining: 11,
    image: jacket3,
    imageAlt: "The Shadow - washed black denim with embroidered details",
    description: "Washed black denim with intricate tonal embroidery. Subtlety that speaks volumes.",
    story: "Some stories don't need to be told loudly. The Shadow carries its meaning in whispered details — embroidery that reveals itself only to those who look closely.",
  },
];
