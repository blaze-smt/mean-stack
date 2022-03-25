const express = require('express');
const app = express();
const userRoute = express.Router();

// User model
let User = require('../../models/user');

// Add user
userRoute.route('/create').post((req, res, next) => {
  user.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Users
userRoute.route('/').get((req, res) => {
  user.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get Single User
userRoute.route('/read/:id').get((req, res) => {
  user.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Update User
userRoute.route('/update/:id').put((req, res, next) => {
  user.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
});

// Delete User
userRoute.route('/delete/:id').delete((req, res, next) => {
  user.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
});

module.exports = userRoute;