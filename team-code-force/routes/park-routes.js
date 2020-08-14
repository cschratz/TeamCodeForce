const parkRouter = require('express').Router();
const sequilize = require('../db/index');
const { Park, UserParkWishList, UserParkHistory } = require('../db/index');


parkRouter.post('/wishlist', (req, res) => {
  const { name, userID } = req.body;
  Park.findOrCreate({
    where: { name },
    defaults: {
      name,
    }
  }).then((park) => {
    UserParkWishList.findOrCreate({
      where: { id_park: park[0].id },
      defaults: {
        id_user: userID,
        id_park: park[0].id,
      }
    })
  }).then((entry) => {
    res.status(201).send({ entry });
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

parkRouter.post('/wishlist/get', (req, res) => {
  const { userID } = req.body;
  UserParkWishList.findAll({
    where: { id_user: userID }
  }).then(entry => {
    const parkResult = ['heloo'];
    entry.forEach(park => {
      Park.findAll({
        where: { id: park.id_park }
      })
      .then((parkName) => {
        console.log('Park: ', park);
        console.log('Parkname"', parkName);
        //parkResult.push('parkName');
        console.log(parkResult);
      })
      .catch(err => res.status(500).send('This is loop error: ', err));
    })
    res.send(parkResult);
  })
    .catch(err => res.sendStatus(500));
});

parkRouter.post('/history', (req, res) => {
  const { name, userID } = req.body;
  Park.findOrCreate({
    where: { name },
    defaults: {
      name,
    }
  }).then((park) => {
    UserParkHistory.findOrCreate({
      where: { id_park: park[0].id },
      defaults: {
        id_user: userID,
        id_park: park[0].id,
      }
    })
  }).then((test) => {
    res.status(201).send({ message: 'Added to Database' });
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = {
  parkRouter,
}