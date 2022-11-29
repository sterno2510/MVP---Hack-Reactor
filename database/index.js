const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/weatherUsers')
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

const weatherUserSchema = new mongoose.Schema({
  email: String,
  visitCount: { type: Number, default: 0 },
});

const User = mongoose.model('user', weatherUserSchema);

const updateEntry = (data) => {
  const filter = { email: JSON.stringify(data) };
  const update = { $inc: { visitCount: 1 } };
  return User.findOneAndUpdate(filter, update, { new: true, upsert: true });
};

module.exports.updateEntry = updateEntry;
