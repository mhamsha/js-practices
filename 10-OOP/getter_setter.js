class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase() + " is my email";
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const hamza = new user("hamza@gmail.com", "abc");
console.log(hamza.password);
console.log(hamza.email);
