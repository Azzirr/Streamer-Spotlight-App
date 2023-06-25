const express = require('express');
const Streamer = require('../models/streamerModel');
const router = express.Router();
router.use(express.json());

router.post('/streamers', async (req, res) => {
  try {
    res.statusCode = 200;
    const streamer = await Streamer.create(req.body);
    res.json(streamer);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
});

router.get('/streamers', async (req, res) => {
  try {
    res.statusCode = 200;
    const allStreamers = await Streamer.find();
    res.json(allStreamers);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
});

router.get('/streamer/:_id', async (req, res) => {
  try {
    res.statusCode = 200;
    const _id = req.params;
    const streamerByID = await Streamer.findById(_id);
    res.json(streamerByID);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
});

router.put('/streamer/:_id/vote', async (req, res) => {
  try {
    res.statusCode = 200;
    const _id = req.params;
    const streamerByID = await Streamer.findByIdAndUpdate(_id, req.body);
    if(!streamerByID){
      return res.statusCode(404).json({message: `Cannot find any streamer with ID ${_id}`});
    };
    const updatedStreamerVote = await Streamer.findById(_id);
    res.json(updatedStreamerVote);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
})

module.exports = router;