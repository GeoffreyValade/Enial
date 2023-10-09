import StatModifier from "./StatModifier";

export default class StatModifierList {
    constructor(modifiers) {
        /** @type  {StatModifier[]} @private */
        this.modifiers = modifiers;
    }

    /**
     * @returns {StatModifier[]}
     */
    getList(origin, stat) {
        return this.modifiers.filter(modifier => modifier.origin === origin && modifier.stat === stat);
    }

    /**
     * @returns {StatModifier[]}
     */
    getSum(origin, stat) {
        return this.modifiers
            .filter(modifier => modifier.origin === origin && modifier.stat === stat)
            .reduce((accum, modifier) => accum + modifier.value, 0);
    }
}
