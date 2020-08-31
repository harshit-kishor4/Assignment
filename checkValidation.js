const checkValidation = (userSchema) => {
    let flag = false;
    //Check name field validation
    if (!isNaN(userSchema.name)||typeof userSchema.name != "string") {
      console.log("Please enter a valid (String) name...");
      flag = true;
    }
  
     //Check Mobile field validation 
    if (isNaN(userSchema.phone)) {
      console.log("Please enter valid Mobile Number...");
      flag = true;
    }else if(userSchema.phone.length != 10){
      console.log("Please enter valid 10 digit Mobile Number.");
      flag=true;
    }
  //Check Address validation
    if (
      typeof userSchema.address.contactName != "string" ||
      !isNaN(userSchema.address.contactName)
    ) {
      console.log("Invalid contact name provided.");
      flag = true;
    }
  
    // Check address line 1 ,2 and 3 validation
    if (
      typeof userSchema.address.detailAddress.line1 != "string" ||
      typeof userSchema.address.detailAddress.line2 != "string" ||
      typeof userSchema.address.detailAddress.line3 != "string"
    ) {
      console.log("Please enter valid address.");
      flag = true;
    }
  
    //checking for pincode
  
    if (isNaN(userSchema.address.pin)) {
      console.log("Please enter a valid pincode");
      flag = true;
    }
  
    //checking for country
  
    if (typeof userSchema.address.country != "string") {
      console.log("Please enter a valid country name");
      flag = true;
    }
  
    //checking for cart
    let length = parseInt(userSchema.cart.length);
  
    for (var i = 0; i < length; i++) {
      if (typeof userSchema.cart[i].id != "string") {
        console.log("Invalid cart id " + (i + 1));
        flag = true;
      }
      if (isNaN(userSchema.cart[i].count)) {
        console.log("Invalid cart count at id:" + userSchema.cart[i].id);
        flag = true;
      }
    }
    if (flag == false) {
      console.log("Successfully checked Schema with no error....");
    }
  };

  exports.valid = checkValidation; //exporting module to use in execute.js