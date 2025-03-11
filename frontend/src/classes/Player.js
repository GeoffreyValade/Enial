class Player {
    constructor(playersData) {
        this.joueur = playersData.joueur;
        this.nom = playersData.nom;
        this.prenom = playersData.prenom;
        this.surnom = playersData.surnom;
        this.age = playersData.age;
        this.race = playersData.race;
        this.sexe = playersData.sexe;
        this.resumerp = playersData.resumerp;
        this.description = playersData.description;
        this.portrait = playersData.portrait;

        this.caracsprincipales = playersData.caracs[0];

        this.traits = playersData.traits;

        this.domainesgenerauxJoueur = playersData.domainesgenerauxJoueur;
        this.domainesmagiquesJoueur = playersData.domainesmagiquesJoueur;
    }
}