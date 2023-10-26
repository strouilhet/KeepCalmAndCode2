const {Point} = require("./Point.js");
const {Cercle} = require("./Cercle.js");
const {Polygone} = require("./Polygone.js");
const {Parallelogramme} = require("./Parallelogramme.js");
const {Losange} = require("./Losange.js");
const {Triangle} = require("./Triangle.js");
// création de quelques points
const p = new Array();
p.push(new Point(-1, 0));
p.push(new Point(0, 0));
p.push(new Point(0, 1));
p.push(new Point(1, 0));
p.push(new Point(1, 1));
p.push(new Point(2, 0));
p.push(new Point(2, 1));
p.push(new Point(3, 0));
p.push(new Point(4, 0));
p.push(new Point(2, -1));

// distance entre deux points
console.log(`distance p1p4 ${p[1].distance(p[4])}`);

//création d'un losange, d'un polygone à 5 côtés, d'un cercle, ...
const losange = new Losange(p[1], p[6], p[8], p[9]);
const penta = new Polygone([p[0], p[1], p[2], p[3], p[4]]);
const cercle = new Cercle(p[1], 1);
const paral = new Parallelogramme(p[1], p[4], p[6], p[3]);
const triangle = new Triangle(p[1], p[2], p[4]);

const figures = new Array();
figures.push(losange);
figures.push(paral);
figures.push(triangle);
figures.push(cercle);
figures.push(penta);

console.log("*** Dimensions de figures :");
for (let i = 0; i < figures.length; i++) {
    console.log(`${figures[i]} dimension= ${figures[i].dimension()}`);
}

console.log("*** Périmètre de figures :");
for (let i = 0; i < figures.length; i++) {
    console.log(`prérimètre de ${figures[i]} = ${figures[i].perimetre()}`);
}

const para = new Array();
para.push(losange);
para.push(paral);

console.log("*** Diagonales de parallelogrammes :");
for (i = 0; i < para.length; i++) {
    console.log(`${para[i]} : ${para[i].diagonales()}`);
}

const poly = new Array();
poly.push(losange);
poly.push(paral);
poly.push(triangle);

console.log("*** Nombre de côtés de polygones :");
for (i = 0; i < poly.length; i++) {
    console.log(`${poly[i]} = ${poly[i].nbCotes()}`);
}
