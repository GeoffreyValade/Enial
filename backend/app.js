const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Import des routes user
const authRoutes = require('./routes/user')
// A venir : Import des routes data

// Configuration de Mongoose pour le connecter à la database MongoDB
// ID = EnialArchimage
// Password = hWTw47KIlFwIXo40
mongoose.connect('mongodb+srv://EnialArchimage:hWTw47KIlFwIXo40@clusterenial.szvknin.mongodb.net/Enial?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


// Gestion des CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Nous permet de receptionner les corps des requêtes
// Equivalent de bodyparser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Gestion des requêtes liées à User (login / inscription)
app.use('/api/auth', authRoutes);

module.exports = app;