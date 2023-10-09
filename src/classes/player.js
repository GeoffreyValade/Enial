//import playersData from '../../datas/joueurs.json';
import Trait from './Trait.js';
import StatModifier from './StatModifier.js';
import StatModifierList from './StatModifierList.js';

export default class Player {
    constructor(playersData) {
        this.id = playersData.id;
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
        this.caracsPrincipales = playersData.caracs[0];
        /** @type {Trait[]} */
        this.traits = playersData.traits.map(t => new Trait(t.id, t.titre, t.description, t.statsetbonus));
        this.domainesGeneraux = playersData.domainesgeneraux;
        this.domainesMagiques = playersData.domainesmagiques;

        // make StatModifierList
        const fromTraits = this.traits.map(t => t.getStatModifierList());
        /** @type {StatModifier[]} */
        const allModifiers = [].concat(...fromTraits);
        /** @type {StatModifierList} */
        this.statModifiers = new StatModifierList(allModifiers);
    }
}