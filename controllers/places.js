const router = require('express').Router()
const places = require('../models/places.js')

//MAIN PG
router.get('/',(req,res) => {
    res.render('places/index',{places})
})

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})
//EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})

//SHOW
router.get('/:id', (req,res) => {
  res.render('places/show',{place:places[id]})
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('places/show',{place:place[id], id})
  }  
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placepuppy.com/400x400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('../models/places')
})

//Delete
router.delete('/:id', (req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!place[id]) {
    res.render('error404')
  } else {
    places.splice(id,1)
    res.redirect('/places')
  }
})  

  
module.exports = router