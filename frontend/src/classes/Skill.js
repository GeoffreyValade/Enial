class Skill {
    constructor(label, domaine, description, effects, actiontype1, actiontype2, actiontype3, costtype, cost, ressource, duration, prerequis, range, randbase, other) {
      this.label = label;
      this.domaine = domaine;
      this.description = description;
      this.effects = effects;
      this.actiontype1 = actiontype1;
      this.actiontype2 = actiontype2;
      this.actiontype3 = actiontype3;
      this.costtype = costtype;
      this.cost = cost;
      this.ressource = ressource;
      this.duration = duration;
      this.prerequis = prerequis;
      this.range = range;
      this.randbase = randbase;
      this.other = other;
    }
  }
  
  const skillType = {
    Technique: "technique",
    Sort: "sort",
  }