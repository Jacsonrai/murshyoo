const newArrival = [
  {
    id: 1,
    img:"../assets/cloth/cloth1.jpeg",
    price: "1000",
    name: "jeans",
  },
  { id: 2, 
    img:"../assets/cloth/cloth2.jpg",
    price: "1000",
    name:"tshirt"
  },
  { id: 3,
     img:"../assets/cloth/cloth3.jpg",
      price: "1000" ,
      name:"shock"
  },
  { id: 4, 
    img:"../assets/cloth/cloth3.jpg",
    price: "1000",
    name:"jacket"
  },
];

const popularData = [
  { id: 1, img: require("../assets/cloth/cloth6.jpg"), price: "2000" },
  { id: 2, img: require("../assets/cloth/cloth6.jpg"), price: "5000" },
  { id: 3, img: require("../assets/cloth/cloth7.jpg"), price: "290" },
];
const cartData = [
  {
    id: 1,
    img: require("../assets/cloth/cloth6.jpg"),
    price: 2000,
    discount: "N/A",
    delivery: "200",
  },
  {
    id: 2,
    img: require("../assets/cloth/cloth6.jpg"),
    price: 5000,
    discount: "200",
    delivery: "free",
  },
  {
    id: 3,
    img: require("../assets/cloth/cloth7.jpg"),
    price: 290,
    discount: "N/A",
    delivery: "free",
  },
];
const whiteListData = [
  {
    id: 1,
    img: require("../assets/cloth/cloth1.jpeg"),
    price: "1000",
  },
  { id: 2, img: require("../assets/cloth/cloth2.jpg"), price: "1000" },
  { id: 3, img: require("../assets/cloth/cloth3.jpg"), price: "1000" },
];

export { newArrival, popularData, cartData, whiteListData };
