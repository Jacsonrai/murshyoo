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
const modelsData=[
  {
    id:1,
    "name":"Prapti Gurung",
    img:require('../assets/models/model1.jpg'),
    desc:"Born into the hub of kollywood, the gurung have always been in the spotlight. Signed to VMAG Models in 2014, middle child Prapti has some big shoes to fill.She currently holds contracts with brands such as Nike and Dior Cosmetics. Planning to go to Miss Nepal and winning the crown has been her forever wish from childhood.",
    email:'cuteprapti@hotmail.com'

  },  {
    id:2,
    "name":" Bianca Balti",
    img:require('../assets/models/model2.jpg'),
    desc:"The infamous Italian supermodel Bianca Balti has graced the pages of over ten international editorial magazines. From her first gig posing for L’Officiel, to her first notable campaign with Dolce & Gabbana.",
    email:'cuteprapti@hotmail.com'

  },  {
    id:3,
    "name":"Manjila Luitel",
    img:require('../assets/models/model3.jpg'),
    desc:"A beautiful combination of her parents Nepali and Pakistani heritage, lalitpur born luitel has made her mark on the industry.Her unique look found her on a plane to New York City after she was noticed through an Australian “Make Me A Super Model” competition.",
    email:'luitelmanjila1@gmail.com'

  },  {
    id:4,
    "name":"geeta sharma",
    img:require('../assets/models/model4.jpg'),
    desc:"Scouted while running errands in her hometown in jhapa, her career officially began in 2017 when she was signed with VMAG Models. Geeta’s exuberance and humour makes her a lovely asset to the modelling industry.",
    email:'gits37@hotmail.com'

  },  {
    id:5,
    "name":"Gemma’s",
    img:require('../assets/models/model5.jpg'),
    desc:"Her career took off when she was 15 and Gemma’s modelling reputation quickly reached international waters. An IMG Model’s scout saw her photographs and eventually she was represented by the agency.",
    email:'cuteprapti@hotmail.com'

  }, {
    id:6,
    "name":"swikriti gyawali",
    img:require('../assets/models/model6.jpg'),
    desc:"Swikriti Gyawali is one of the most popular model from Nepal. Her popularity in the West helped her become the oldest woman to play a Bond girl in the history of the Bipin Karki's film franchise. ",
    email:'gyawaliswikriti@gmail.com'

  }
]

export {modelsData, newArrival, popularData, cartData, whiteListData };
