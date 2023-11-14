const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

// Define Schemes
const cardSchema = new Schema({
  _id: { type: objectId, auto: true },
  wallet: { type: String, required: true },
  regiName: { type: String, maxlength: 20 },
  cardName: { type: String, maxlength: 20 },
  cardCate: { type: String },
  cardDesc: { type: String, maxlength: 100 },
  cardPrice: { type: Number },
  cardImg: { type: String },
  cardSale: { type: Boolean},
  idx: { type: Number, auto: true }
}, {
  versionKey: false,
  timestamps: true,
});

// Create new card document
cardSchema.statics.create = function (payload) {
  // this === Model
  const card = new this(payload);
  // return Promise
  return card.save();
};

// Find All
cardSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by cardid
cardSchema.statics.findOneByCardid = function (cardid) {
  return this.findOne({ cardid });
};

// Update by cardid
cardSchema.statics.updateByCardid = function (cardid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ cardid }, payload, { new: true });
};

// Delete by cardid
cardSchema.statics.deleteByCardid = function (cardid) {
  return this.remove({ cardid });
};

// Create Model & Export
module.exports = mongoose.model('Card', cardSchema);