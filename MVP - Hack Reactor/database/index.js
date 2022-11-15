const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/weatherUsers')
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

const weatherUserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  visitCount: Number,
});

const User = mongoose.model('user', weatherUserSchema);

const retrieve = () => User.find({});

const save = (data) => {
  const entry = new User(data);
  return entry.save();
};

module.exports.retrieve = retrieve;
module.exports.save = save;
