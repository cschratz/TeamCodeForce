/* eslint-disable no-console */
const parkRouter = require('express').Router();
const { Park, UserParkWishList, UserParkHistory } = require('../db/index');
// const User = require('../db/models/User');

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
      },
    });
  }).then((entry) => {
    res.status(201).send({ entry });
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});

// parkRouter.post('./wishlist', (req, res) => {
//   UserParkWishList.findAll({
//     where: {
//       { id_user: userID }
//     }
//     include: [
//       {
//         model: Park,
//         where: {
//           id_park:
//         }
//       }
//     ]
//   })
// });
// parkRouter.post('./wishlist/get', (req, res) => {
//   User.hasMany(Park, { foreignKey: 'id_park' });

//   const { userID } = req.body;
//   const parkResult = [];
//   UserParkWishList.findAll({
//     where: { id_user: userID },

//   })
// });
// parkRouter.post('/wishlist/get', (req, res) => {
//   const { userID } = req.body;
//   const parkResult = [];
//   UserParkWishList.findAll({
//     where: { id_user: userID },
//   })
//     .then((entry) => {
//       console.log('entry', entry)
//       entry.map((park) => {
//       return  Park.findAll({
//           where: { id: park.id_park },
//         })
//           .then((parkName) => {
//             // console.log('Park: ', park);
//             // console.log('Parkname"', parkName);
//             // console.log('parkname we want', parkName[0].dataValues.name);
//             parkResult.push(parkName[0].dataValues.name);
//             console.log('parkresult array', parkResult);
//           })
//           .then(() => {
//             console.log('park result at bottom', parkResult);
//             res.send(parkResult);
//           });
//       // .catch(err => res.status(500).send('This is loop error: ', err));
//       });
//     })
//       console.log('park result at very bottom', parkResult);
//     // res.send(parkResult);
//   // .catch(err => res.sendStatus(500));
// });

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
      },
    });
  }).then(() => {
    res.status(201).send({ message: 'Added to Database' });
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});

module.exports = {
  parkRouter,
};
