class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
    //vampire.creator.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberofVamp=0;
    let currentVampire = this;
    while (currentVampire.creator){
      currentVampire = currentVampire.creator;
      numberofVamp++;
    }
    return numberofVamp;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) { //needs to check who is closer to the original vampire
    //rootVampire.isMoreSeniorThan(offspring1)
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal; //calls the getter
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
  if (this.name){ return this}
  else{ return null}
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

