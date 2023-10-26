const {Point}=require("./Point.js");
// script de test
const p1 = new Point();
const p2 = new Point(4,1);
// distance entre deux points
console.log(`distance entre ${p1} et ${p2} = ${p1.distance(p2)}`);  // 4.123105625617661
