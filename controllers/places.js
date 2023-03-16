const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

router.get('/',(req,res) => {
    let places = [{
        name: 'The One',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Ramen,Pan-Asian',
        pic: '/images/The One.jpg'
    },{
        name: 'Asian Kitchen',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Pan-Asian,Tai',
        pic: '/images/Asian Kitchen.jpg'
    }]
    res.render('places/index',{places})
})

module.exports = router