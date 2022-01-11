const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res.status(400).json({ username: "User already exists" })
        } else {
            console.log(req.body);
            const newUser = new User({
                username: req.body.username,
                password: req.body.password,
                ingredients: [],
                dietary_restrictions: [],
                health_problems: [],
                saved_recipes: [],
            });

            newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        }
    })
})

router.get("/login", (req, res) => {
    User.findOne({ username: req.query.username }).then(user => {
        // res.header("Access-Control-Allow-Origin", "true");
        if (user) {
            if (user.password === req.query.password) {
                res.send("True")
            } else {
                console.log(req.query.password);
                res.send("False")
            }
        } else {
            res.send("False")
        }
    })
})

router.get("/user", (req, res) => {
    User.findOne({ username: req.query.username }).then(user => {
        if (!user) {
            return res.status(400).json({ username: "User does not exist" })
        }
        res.send(user);
    })
})



router.get('/ingredients', (req, res) => {
    const username = req.query.username;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ username: "User not found " });
        }
        const ingredients = user.ingredients;
        res.send(ingredients);

    })
});


router.get('/dietary-restrictions', (req, res) => {
    var username = req.query.username;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "User not found " });
        }

        const dietary_res = user.dietary_restrictions;
        res.status(201).send(dietary_res);
    })
});


router.get('/health-problems', (req, res) => {
    var username = req.query.username;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "User not found " });
        }
        const health_problems = user.health_problems
        res.status(201).send(health_problems);
    })
});

router.get('/allergies', (req, res) => {
    var username = req.query.username;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "User not found " });
        }
        const allergies = user.allergies
        res.status(201).send(allergies);
    })
});

router.get('/recipes', (req, res) => {
    var username = req.query.username;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "User not found " });
        }
        const recipes = user.saved_recipes
        res.status(201).send(recipes);
    })
});

router.post('/ingredients', (req, res) => {
    const username = req.body.username;
    const ingredients = req.body.ingredients;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ username: "User not found " });
        }
        user.ingredients = ingredients;
        user.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    })
});

router.post('/dietary-restrictions', (req, res) => {
    var username = req.body.username;
    var dietary_res = req.body.dietary_restrictions;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "User not found " });
        }
        user.dietary_restrictions = dietary_res;
        user.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    })
});


router.post('/health-problems', (req, res) => {
    var username = req.body.username;
    var health_problems = req.body.health_problems;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "User not found " });
        }
        user.health_problems = health_problems;
        user.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    })
});

router.post('/allergies', (req, res) => {
    var username = req.body.username;
    var allergies = req.body.allergies;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "User not found " });
        }
        user.allergies = allergies;
        user.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    })
});

router.post('/recipes', (req, res) => {
    var username = req.body.username;
    var recipes = req.body.recipes;
    User.findOne({ username: username }).then(user => {
        if (!user) {
            return res.status(400).json({ message: "User not found " });
        }
        user.saved_recipes = recipes;
        user.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    })
});


module.exports = router;