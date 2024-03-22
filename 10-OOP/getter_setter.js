class User {
  #email;
  // #password; 

  constructor() {
    this.#email = "@undefined";
    // this.#password ="undefined";
  }

  // set password(value) { 
  //   this.#password = value;
  // }
  // get password() {
  //   return this.#password;
  // }

  set email(value){
    
      this.#email = value;
    
    
  }
  get email(){
    if(this.#email.includes("@") && this.#email.includes(".") && this.#email.length > 5 ){

      return this.#email;
    }
    else{
      return "Invalid email";
    }
  }
}

const userOne = new User()

// console.log(userOne.password);
// userOne.password= "newPasswordnew"; // ^ to update password in one way by dot notation
// userOne['password'] = "newPassword"; // ^ to update password in another way by bracket notation
// console.log(userOne.password);
userOne.email = "hamza@@!@@mail.com";

console.log(userOne.email)
