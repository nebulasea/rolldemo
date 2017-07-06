const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost/roll-init');
const db = mongoose.connection;

const CharacterSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  race: {
    type: String,
  },
  level: {
    type: Number
    //},
    // dm: {
    //     type: Boolean,
  }
});

const Character = module.exports = mongoose.model('Character', CharacterSchema);

module.exports.createCharacter = function (newCharacter, callback) {
  newCharacter.save(callback);
}

module.exports.getCharacterByName = function (name, callback) {
  let query = { name: name };
  Character.findOne(query, callback);
}

module.exports.getCharacterById = function (id, callback) {
  Character.findById(id, callback);
}