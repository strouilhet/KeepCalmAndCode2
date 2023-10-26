// script de test de création d'un cercle
const p=require("./Point.js");
const c=require("./Cercle.js");
const pt1=new p.Point(0,0);
const f1=new c.Cercle(pt1, 10);
console.log(`${f1}`);