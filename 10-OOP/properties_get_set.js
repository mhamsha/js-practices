function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email ;
    },
    set: function (value) {
      this._email = value;
    },
  });
}
const hamza = new user("hamza", "abc");
console.log(hamza.email);