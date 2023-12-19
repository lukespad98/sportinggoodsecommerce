import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "adidas_sport_bag_1",
    name: "Adidas Sports Bag",
    description: `Weekends away or trips to the gym? Throw what you need in this small adidas duffel bag and go. It's made with durable fabric and a water-resistant base, so you can sling it on buses or plop it on soggy fields. Add your team logo on the ends and show the world who you play for (or root for).`,
    price: 3999, 
    image:
      "@/public/products/adidas-bag-1.jpg",
    images: [
      "@/public/products/adidas-bag-1.jpg",
      "@/public/products/adidas-bag-back-1.jpg",
      "@/public/products/adidas-bag-side-1.jpg",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["adidas"],
    currency: "CAD",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "adidas_shirt_1",
    name: "Adidas Shirt",
    description: `Born for the beautiful game. Its slim, streamlined fit, smooth fabric and moisture-absorbing AEROREADY make this adidas Tiro 23 League jersey your perfect teammate when you want to dominate the soccer pitch on a Sunday morning. The embroidered 3 Bar Logo and 3-Stripes tape show you mean business even before you cross that white line.`,
    price: 9800,
    image:
      "@/public/products/adidas-shirt-1.jpg",
    images: [
      "@/public/products/adidas-shirt-1.jpg",
      "@/public/products/adidas-shirt-2.webp",
    ],
    sizes: ['s', 'm', 'l', 'xl'],
    categories: ["shirts"],
    colors: ["adidas"],
    currency: "CAD",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "adidas_shorts_1",
    name: "Adidas Shorts",
    description: `On the pitch, it's you and your team against the world. So adidas created the Squadra 21 range to help you win in style. These soccer shorts keep you dry with moisture-absorbing AEROREADY. The fabric is made from recycled materials, a small step towards the goal of ending plastic waste.`,
    price: 5599,
    image:
      "@/public/products/adidas-shorts-1.webp",
    images: [
      "@/public/products/adidas-shorts-1.webp",
      "@/public/products/adidas-shorts-2.webp",
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["shorts"],
    colors: ["adidas"],
    currency: "CAD",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "nike_shirt_1",
    name: "Nike Jersey Grey",
    description: `Icons collide with the 2023/24 PSG Third Shirt. One of the most iconic clubs in the world meets one of the most recognisable patterns in streetwear—Jordan elephant print—to create a shirt that transcends the game. On the inside, you'll find a hidden Paris logo with the Jumpman design included in the middle. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by Les Parisiens.`,
    price: 6199,
    image:
      "@/public/products/nike-shirt-1.webp",
    images: [
      "@/public/products/nike-shirt-1.webp",
      "@/public/products/nike-shirt-2.webp",
    ],
    sizes: ["s", "m", "l"],
    categories: ["shirts"],
    colors: ["nike"],
    currency: "CAD",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "nike_sport_bag_1",
    name: "Nike Sports Bag",
    description: `The Nike Brasilia Duffel Bag keeps all your training gear—and more—at hand. A side compartment stores shoes separately, while inner and outer pockets help you stay organised. Use it for a trip to the gym or away for the weekend. We've got you covered. This product is made from at least 65% recycled polyester fibres.`,
    price: 7999,
    image:
      "@/public/products/nike-bag-1.jpg",
    images: [
      "@/public/products/nike-bag-1.jpg",
      "@/public/products/nike-bag-back-1.jpg",
      "@/public/products/nike-bag-side-1.jpg",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["nike"],
    currency: "CAD",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "puma_hat",
    name: "Puma Hat",
    description: `This sporty cap gets a street-chic makeover with sleek lines and bold branding.`,
    price: 2000,
    image:
      "@/public/products/puma-cap-1.png",
    images: [
      "@/public/products/puma-cap-1.png",
      "@/public/products/puma-cap-back-1.png",
    ],
    sizes: ["one-size"],
    categories: ["hats"],
    colors: ["puma"],
    currency: "CAD",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "puma_shirt_1",
    name: "Puma Shirt",
    description: `Cityzens, emulate your matchday heroes with the Man City Authentic Home Jersey. Its the same version Grealish, Aleixandri, and co. wear on the pitch. ULTRAWEAVE performance tech makes it the lightest jersey weve ever made, so you can rep your team with ease throughout the 90 minutes and the 24 hours.`,
    price: 11000,
    image:
      "@/public/products/puma-shirt-1.png",
    images: [
      "@/public/products/puma-shirt-1.png",
      "@/public/products/puma-shirt-2.png",
    ],
    sizes: ["xs", "s", "m", "l", "xl"],
    categories: ["shirts"],
    colors: ["puma"],
    currency: "CAD",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "puma_socks_1",
    name: "Puma Socks",
    description: `There's a reason that PUMA socks have inspired obsessive behavior the world over. They're soft. Comfortable. You can`,
    price: 1399,
    image:
      "@/public/products/puma-socks-1.png",
    images: [
      "@/public/products/puma-socks-1.png",
    ],
    sizes: ["one-size"],
    categories: ["socks"],
    colors: ["puma"],
    currency: "CAD",
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "puma_sports_bag_1",
    name: "Puma Sports Bag",
    description: `Featuring a sleek design, this spacious duffel will carry all your essentials through the day.`,
    price: 5999,
    image:
      "@/public/products/puma-bag-1.png",
    images: [
      "@/public/products/puma-bag-1.png",
      "@/public/products/puma-bag-back-1.png",
      "@/public/products/puma-bag-side-1.png",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["puma"],
    currency: "CAD",
  },
]
