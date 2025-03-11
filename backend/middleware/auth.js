const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        // On extrait le token de l'entête de la requête
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        // On lance une vérification de ce token pour s'assurer qu'il est valide
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        // Une fois que le token a été vérifié, on le stock dans userId afin d'indiquer que cet utilisateur a déjà été validé
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};