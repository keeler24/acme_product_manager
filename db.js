const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL);

const User = db.define('user', {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

const Product = db.define('product', {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

Product.belongsTo(User, {as: 'manager'})

const syncSeed = () =>{
    return db.sync({force:false})
        // .then(()=>{
        //     // Promise.all([
        //     //     User.bulkCreate([{name:'Moe'}, {name:'Larry'}, {name:'Curly'}]),
        //     //     Product.bulkCreate([{name:'foo'}, {name:'bar'}, {name:'bazz'}])
        //     // ])
        // })
}


module.exports = {User, Product, syncSeed}