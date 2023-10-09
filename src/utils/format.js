export function formatBonus(bonus) {
    if (isNaN(bonus)) {
        return bonus;
    }
    return `${bonus >= 0 ? '+' : ''}${bonus}`;
}