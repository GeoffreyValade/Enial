import { formatBonus } from "../utils/format";

export default class StatModifier {
    constructor(origin, label, stat, value) {
        /** @type {string} */
        this.origin = origin;
        /** @type {string} */
        this.label = label;
        /** @type {string} */
        this.stat = stat;
        /** @type {number} */
        this.value = value;
    }

    toString() {
        return `${this.label} : ${formatBonus(this.value)}`;
    }
}
