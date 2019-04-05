const Sequelize = require('sequelize')
const db = new Sequelize('process.env.DATABASE_URL');

const User = db.define('user', {
    Name:Sequelize.STRING,
    allowNull:false
})

const Product = db.define('product', {
    Name:Sequelize.STRING,
    allowNull:false
})

Product.belongsTo(User, {as: 'manager'})

const syncSeed = () =>{
    return Promise.all([
        User.bulkCreate([{name:'Moe'}, {name:'Larry'}, {name:'Curly'}]),
        Product.bulkCreate([{name:'foo'}, {name:'bar'}, {name:'bazz'}])
    ])
    .then(()=>{
        db.sync()
    })
}
module.exports = {db, User, Product, syncSeed}