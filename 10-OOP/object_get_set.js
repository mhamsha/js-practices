const user = {
  _email: "hamza@gmail.com",
  _password: "12345",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};
const tea = Object.create(user);
console.log(tea.email);
