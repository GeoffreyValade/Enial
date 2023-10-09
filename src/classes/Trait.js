import StatModifier from "./StatModifier";

export default class Trait {
    constructor(id, titre, description, statsetbonus) {
        this.id = id;
        this.titre = titre !== '' ? titre : '?';
        this.description = description;
        this.statsetbonus = statsetbonus;
    }

    /**
     * Obtient la liste des modificateurs de statistiques.
     * @returns {StatModifier[]} - Un tableau des modificateurs de statistiques.
     */
    getStatModifierList() {
        const modifiers = [];
        this.statsetbonus.forEach(sets => {
            const listOfSets = Object.entries(sets);
            for (const [stat, bonus] of listOfSets) {
                modifiers.push(new StatModifier("trait", this.titre, stat, bonus));
            }
        })
        return modifiers;
    }
}