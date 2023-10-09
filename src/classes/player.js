//import PlayersData from '../../datas/joueurs.json';

class Player {
    constructor(PlayersData) {
        this.joueur = PlayersData[index].joueur;
        this.nom = PlayersData[index].nom;
        this.prenom = PlayersData[index].prenom;
        this.surnom = PlayersData[index].surnom;
        this.age = PlayersData[index].age;
        this.race = PlayersData[index].race;
        this.sexe = PlayersData[index].sexe;
        this.resumerp = PlayersData[index].resumerp;
        this.description = PlayersData[index].description;
        this.portrait = PlayersData[index].portrait;
        this.caracsprincipales = PlayersData[index].caracs[0];
        this.traits = PlayersData[index].traits;
        this.domainesgenerauxJoueur = PlayersData[index].domainesgenerauxJoueur;
        this.domainesmagiquesJoueur = PlayersData[index].domainesmagiquesJoueur;
    }
}