const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema(
  {
    _id: { type: objectId, auto: true },
    wallet: { type: String, required: true },
    regiName: { type: String, maxlength: 20 },
    profileImg: { type: String, maxlength: 20 },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

// Create new user document
userSchema.statics.create = function (payload) {
  // this === Model
  const user = new this(payload);
  // return Promise
  return user.save();
};

// Find All
userSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by userid
userSchema.statics.findOneByUserid = function (userid) {
  return this.findOne({ userid });
};

// Update by userid
userSchema.statics.updateByUserid = function (userid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findOneAndUpdate({ userid }, payload, { new: true });
};

// Delete by userid
userSchema.statics.deleteByUserid = function (userid) {
  return this.remove({ userid });
};

// Create Model & Export
module.exports = mongoose.model("User", userSchema);
