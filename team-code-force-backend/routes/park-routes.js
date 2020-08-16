/* eslint-disable no-console */
const parkRouter = require('express').Router();
const { Park, UserParkWishList, UserParkHistory } = require('../db/index');
const { response } = require('express');


parkRouter.post('/wishlist', (req, res) => {
  const { name, userID } = req.body;
  Park.findOrCreate({
    where: { name },
    defaults: {
      name,
    },
  }).then((park) => {
    UserParkWishList.findOrCreate({
      where: { id_park: park[0].id },
      defaults: {
        id_user: userID,
        id_park: park[0].id,
        name: park[0].name,
      }
    })
  }).then((entry) => {
    res.status(201).send({ entry });
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});

parkRouter.post('/wishlist/get', (req, res) => {
  const { userID } = req.body;

  UserParkWishList.findAll({
    where: { id_user: userID }
  })
  .then(parkName => {
    res.send(parkName);
  })
});

parkRouter.post('/history', (req, res) => {
  const { name, userID } = req.body;
  Park.findOrCreate({
    where: { name },
    defaults: {
      name,
    },
  }).then((park) => {
    UserParkHistory.findOrCreate({
      where: { id_park: park[0].id },
      defaults: {
        id_user: userID,
        id_park: park[0].id,
        name: park[0].name,
      }
    })
  }).then((test) => {
    res.status(201).send({ message: 'Added to Database' });
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});

parkRouter.post('/history/get', (req, res) => {
  const { userID } = req.body;

  UserParkHistory.findAll({
    where: { id_user: userID }
  })
  .then(parkName => {
    res.send(parkName);
  })
});

parkRouter.get('/', (req, res) => {
  res.send('Made it here');
})

module.exports = {
  parkRouter,
};
