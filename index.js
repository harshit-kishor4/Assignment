const { valid } = require('./checkValidation');
const userSchema = {
  name: 'Harshit Kishor',
  phone: "9621162566",
  address: {
    contactName: "Harshit Kishor",
    detailAddress: {
      line1: "Vill-Chandauli",
      line2: "Po-Tikra(Usma)",
      line3: "Barabanki(Uttar Pradesh)",
    },
    pin: "225121",
    country: "India",
  },
  cart: [
    {
      id: "Pant",
      count: "7",
    },
    {
      id: "Shirt",
      count: "8",
    },
  ],
};

valid(userSchema)