const express = require('express');

const router = express.Router()
const Model = require('../model/model');

//Post Method
router.post('/post', async (req, res) => {
  // console.log(req.body);

  const data = new Model({
    equipid: req.body.equipid,
    name: req.body.name,
    plantype: req.body.plantype,
    imgsrc: req.body.imgsrc,
    price: req.body.price
  })
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Get all Method
router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get by ID Method
router.get('/getOne/:equipid', async (req, res) => {
  try {
    const data = await Model.findOne({ equipid: req.params.equipid });
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Update by ID Method
router.put('/update/:equipid', async (req, res) => {
  try {
    const equipid = req.params.equipid;
    const updatedData = req.body;

    const result = await Model.findOneAndUpdate(
      { "equipid": equipid }, updatedData)

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Delete by ID Method
router.delete('/delete/:equipid', async (req, res) => {
  try {
    const equipid = req.params.equipid;
    const result = await Model.findOneAndDelete({ "equipid": equipid })
    console.log(result);
    res.send(`Document with ${result.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router;