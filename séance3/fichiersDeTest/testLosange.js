// script de test de création d'un losange
const {Point}=require("./Point.js");
const {Losange}=require("./Losange.js");

const pt1=new Point(0,0);
const pt2=new Point(-1,2);
const pt3=new Point(0,4);
const pt4=new Point(1,2);

const f1=new Losange(pt1,pt2, pt3, pt4);
console.log(`${f1}`);
console.log(`perimetre du losange = ${f1.perimetre()}`);
console.log(`dimension de losange = ${f1.dimension()}`);
console.log(`nb de cotes de losange = ${f1.nbCotes()}`);
console.log(f1.diagonales());