// const Post = require("../models/post");

exports.getFeed = (req, res, next) => {
  // Post.find()
  //   .then(posts => {

  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  res.status(200).json({
    messege: "get succesfully",
    // posts: posts
    posts: [
      {
        _id: 1,
        name: "ermias",
        age: 26,
        tele: "07123456",
        email: "eri@gmail.com"
      }
    ]
  });
};

exports.createFeed = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  const email = req.body.email;

  res.status(201).json({
    messege: "created succesfully",
    posts: [
      {
        _id: new Date().getTime(),
        name: name,
        age: age,
        phone: phone,
        email: email
      }
    ]
  });
  // const post = new Post({
  //   name: name,
  //   age: age,
  //   phone: phone,
  //   email: email
  // });

  // // post
  // //   .save()
  // //   .then(result => {
  // //     console.log(result);
  // //   })
  // //   .catch(err => console.log(err));
};
