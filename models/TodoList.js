var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema
var TodoList = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: String,
      required: true,
    },
  },
  {
    collection: "TodoList",
  }
);

module.exports = mongoose.model("TodoList", TodoList);
