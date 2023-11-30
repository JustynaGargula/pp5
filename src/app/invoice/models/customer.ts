export class Customer {
    constructor(){
    }
    
    companyName = "";
    nip = "";
    city = "";
    street = "";
    houseNumber = "";
    flatNumber = "";
    postNumber = "";
    comment = "";
    industry = "";
    online = false;

    getAddress(){
        return this.street+" "+this.houseNumber+" "+this.city+" "+this.postNumber;
    }

  }



