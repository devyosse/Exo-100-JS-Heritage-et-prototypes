function Vehicules(couleur, roues, marque) {
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;

    this.demarrer = function () {
        console.log("Mon véhicule démarre");
    }
    this.arreter = function () {
        console.log("Nous sommes arrivés");
    }
}

Vehicules.prototype.specificite = function () {
    return "Couleur: " + this.couleur + ", " + " NombreRoues: " + this.roues + ", Marque: " + this.marque;
};

let vehicule = new Vehicules('Noir', "4", "Audi");

console.log(vehicule.specificite());
vehicule.demarrer()
vehicule.arreter();


//Velo
let Velo = function (couleur, roue, marque, rayonRoues, typePeinture) {
    Vehicules.call(this, couleur, roue, marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    this.monter = function () {
        console.log("Je monte sur mon vélo");
    }
}

Velo.prototype = Object.create(Vehicules.prototype);
Velo.prototype.constructor = Velo;

let velo = new Velo("Noir", "2", "BMC", "20pouces", "Pétant");

console.log(velo.specificite());
velo.monter();
console.log(Velo);

//Voiture
let Voiture = function (couleur, roue, marque, assurance, proprietaire) {
    Vehicules.call(this, couleur, roue, marque);
    this.assurance = assurance;
    this.proprietaire = proprietaire;

    this.passerAuCarWash = function () {
        console.log("Ma voiture va être nettoyé");
    }
}

Voiture.prototype = Object.create(Vehicules.prototype);
Voiture.prototype.constructor = Voiture;

let voiture = new Voiture("Noir", "4", "BMW", "Jsp", "Moi");

console.log(voiture.specificite());
voiture.passerAuCarWash();
console.log(Voiture);