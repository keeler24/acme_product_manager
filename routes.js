const express = require('express')
const router = express.Router();
const {User, Product} = require('./db');


//API Routes
/*

products belongs to a user as manager

user table:
name

product table:
name 
managerId (was userId)


*/


router.get('/products', (req, res) =>{
    console.log('adsf')
    Product.findAll()
        .then((resp)=>{
            res.send(resp)
        })
})


router.get('/users', (req, res) =>{
    User.findAll()
        .then((resp)=>{
            res.send(resp)
        })
})


// router.put('/products/:id', async (req, res) =>{
//     //product id  req.params.id 
//      //new manager entry  req.body.managerId
//     console.log(req.body.managerId)
//     console.log(req.params.id)
    
//     const product = await Product.findByPk(req.params.id)
//     console.log(product)
//     await product.update({managerId:req.body.managerId *1})
//     console.log(product)
//     res.status(204).end()


//     // Product.update(
//     //     {managerId:req.body.managerId},
//     //     {where:{id:req.params.id}})
//     //     .then((resp)=>{
//     //         console.log(resp)
//     //         res.status(204).end()
//     //     })
//     //     .catch(error => console.log(error))
// })

router.put('/products/:id', (req, res, next)=> {
    console.log('in here')
    Product.findByPk(req.params.id)
      .then( product => {
          console.log(product.name)
          console.log(req.body)
          product.update(req.body)
        })
      .then( product => res.send(product))
      .catch(next);
  });

module.exports = router