const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res.json({ username : "User already exists"})
        } else {
            console.log(req.body);
            const newUser = new User({
                username : req.body.username,
                password :  req.body.password,
                ingredients : [],
                dietary_restrictions : [],
                health_problems : [],
                saved_recipes : [],
            });

            newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        }
    })
})

router.get('/ingredients', (req, res) => {
  username = req.query.username;
  User.findOne({username: username}).then(user => {
      if (!user) {
          return res.status(400).json({username: "User not found "});
      }
      ingredients = user.ingredients;
      res.send({"ingredients": ingredients});

  })
});


router.get('/dietary-restrictions', (req, res, next) => {
    // get placeholder
});


router.get('/health-problems', (req, res, next) => {
    // get placeholder
});

router.post('/ingredients', (req, res, next) => {
  const username = req.body.username;
  const ingredients = req.body.ingredients;
  User.findOne({username: username}).then(user => {
    if (!user) {
        return res.status(400).json({username: "User not found "});
    }
    user.ingredients = ingredients;
    user.save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
    })
});

router.post('/dietary-problems', (req, res, next) => {
    // get placeholder
});


router.post('/health-restrictions', (req, res, next) => {
    // get placeholder
});

router.delete('/ingredients/:ingredient', (req, res, next) => {
  // delete placeholder
});

module.exports = router;