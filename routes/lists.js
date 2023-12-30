const express  = require('express');
const router = express.Router();
const List = require('../models/List')

  // Get all todoList
router.get('/', async (req, res) => {
  try {
    const todoList = await List.find();
    res.json({ success: true, data: todoList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' })
  }
});

  // Get Single list
router.get('/:id', async (req, res) => {
  const list = todoList.find((list) => list.id === +req.params.id);
  try {
    const list = await List.findById(req.params.id);
    res.json({ success: true, data: list })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

  // Create list
router.post('/', async (req, res) => {

  const list = new List ({
    title: req.body.title,
    listItem: req.body.listItem
  });

try {
  const savedList = await list.save();
  res.json({ success: true, data: savedList });

} catch (error) {
  console.log(error);
  return res.status(500).json({ success: false, error: 'Something went wrong' });
}
})

  // Update List
router.put('/:id', async (req, res)=> {
  try {
    const updatedList = await List.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          listItem: req.body.listItem,
        }
      },
       {new: true }
    );
    res.json({ success: true, data: updatedList }); 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

  // Delete List
router.delete('/:id', async (req, res)=> {
  try {
    const list = await List.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} }); 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

module.exports = router;