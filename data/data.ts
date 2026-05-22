import { Couscous, Harira, Juice, Msemn, Pastila, Tagine, Thee } from "./imagedata";

const menuData = [
  {
    id: "1",
    title: "Tagine Poulet au citron",
    subtitle: "Plat chaud",
    price: "55 MAD",
    image: Tagine,


  },
  {
    id: "2",
    title: "Couscous Royal",
    subtitle: "Plat chaud",
    price: "65 MAD",
    image: Couscous,
  },
  {
    id: "3",
    title: "Harira avec Chebakia",
    subtitle: "Soupe et dessert",
    price: "20 MAD",
    image: Harira,
  },
  {
    id: "4",
    title: "Pastilla au Pigeon",
    subtitle: "Entrée",
    price: "45 MAD",
    image: Pastila
  },
  {
    id: "5",
    title: "Thé à la Menthe",
    subtitle: "Boisson",
    price: "12 MAD",
    image: Thee
  },
  {
    id: "6",
    title: "Jus d’Orange Frais",
    subtitle: "Boisson",
    price: "18 MAD",
    image: Juice
  },
  {
    id: "7",
    title: "Msemen au Miel",
    subtitle: "Petit-déjeuner",
    price: "15 MAD",
    image: Msemn
  },
];
export default menuData;


export type MenuType = {
  id: string
  title: string
  price: string
  image: any
}