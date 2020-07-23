var express = require("express");
var app = express();
var router = express.Router();

//Schema
var TodoList = require("../models/TodoList");

// // Get Specific
// router.route("/:id").get(function (req, res) {
//   var id = req.params.id;
//   TodoList.findById(id, function (err, item) {
//     res.json(item);
//   });
// });

// Get All Items
router.get("/", async (req, res) => {
  try {
    const todos = await TodoList.find();
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
});

// Add item
router.post("/add", async (req, res) => {
  try {
    const item = await new TodoList(req.body).save();
    item.save();
    return res.json(item.id);
  } catch (err) {
    res.status(400).send("unable to save to database");
  }
});

// Delete Item
router.delete("/delete/:id", async (req, res) => {
  try {
    await TodoList.findOneAndRemove({ _id: req.params.id });
    res.json("Deleted", item);
  } catch (err) {
    console.log(err);
  }
});

// router.post("/update/:id", async (req, res) => {
//   try {
//     console.log(req.body);

//     const item = await TodoList.findOne({ _id: req.params.id });
//     console.log(req.body);

//     item.save({ isCompleted: "ppppppp" });
//     return res.json(item.id);
//   } catch (err) {
//     res.status(400).send("unable update save to database");
//   }
// });
// router.route("/add").post(function (req, res) {
//   var item = new TodoList(req.body);
//   item
//     .save()
//     .then((item) => {
//       res.json(`Added, ${item}`);
//     })
//     .catch((err) => {
//       res.status(400).send("unable to save to database");
//     });
// });

//  Update Specific
router.route("/update/:id").post(function (req, res) {
  TodoList.findById(req.params.id, function (err, item) {
    // console.log(req.params.id);

    if (!item) return next(new Error("Could not load Document"));
    else {
      item.isCompleted = req.body.isCompleted;
      item
        .save()
        .then((item) => {
          res.json("Updated");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// router.route("/update/:id").post(function (req, res) {
//   console.log(req.params.id);
//   TodoList.findById(req.params.id, function (err, item) {
//     if (!item) return next(new Error("Could not load Document"));
//     else {
//       console.log(item._id);
//       // item._id.isCompleted = req.body.isCompleted;
//       Todo;

//       item
//         .save()
//         .then((item) => {
//           res.json("Updated");
//         })
//         .catch((err) => {
//           res.status(400).send("unable to update the database");
//         });
//     }
//   });
// });

// // Delete Specific
// router.route("/delete/:id").get(function (req, res) {
//   TodoList.findByIdAndRemove({ _id: req.params.id }, function (err, item) {
//     if (err) res.json(err);
//     else res.json("Deleted");
//   });
// });

module.exports = router;
