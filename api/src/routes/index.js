const { Router } = require('express');
const axios = require ('axios');
const { Genders, Videogame } = require ('../db');
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 const getApiInfo = async () => {
    const apiUrl = await axios.get('https://api.rawg.io/api/games?key={API_KEY}');
    const apiInfo = await apiUrl.data.map(e => {
        return {
            name: e.name,
            image: e.image,
            plataform: e.plataform,
            rating: e.rating,
            date: e.date,
            description: e.description,
            id: e.id
        }
    });
    return apiInfo;
} 

const getDbInfo = async () => {
    return await Videogame.findAll ({
        include: {
            model: Genders,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

const getAllVideogames = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allInfo = apiInfo.concat(dbInfo);
    return allInfo;
}

router.get('/videogames', async (req, res) => {
    const name = req.query.name;
    let allVideogames = await getAllVideogames();
    if (name) {
        let videogameName = await allVideogames.filter( e => e.name.toLowerCase().includes(name.toLowerCase()))
        videogameName.length ? 
        res.status(200).send(videogameName) :
        res.status(404).send('Dont exist.');
    } else {
       res.status(200).send(allVideogames) 
    }

})

module.exports = router;
