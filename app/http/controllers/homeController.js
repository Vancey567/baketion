const Menu = require('../../models/menu')

function homeController() {
    return {
        async index(req, res){
            const cakes = await Menu.find() // get all the cakes
            return res.render('home', {cakes : cakes}) // 1st is key and 2nd is cakes received from database
        }
    }
}

module.exports = homeController