require("dotenv").config({ path: "../.env" });

const randomId = () => {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var random_id = "";
  var date = Date.now().toString();
  for (var i = 0; i < characters.length; i++) {
    random_id += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return random_id + date;
};

module.exports = randomId;
