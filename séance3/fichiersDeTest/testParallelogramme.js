const {Point}=require("./Point.js");
const {Parallelogramme}=require("./Parallelogramme.js");

const p0 = new Point(0, 0)
const p1 = new Point(1, 1)
const p2 = new Point(3, 1)
const p3 = new Point(2, 0)
const para = new Parallelogramme(p0, p1, p2, p3)
// test de toString()
console.log(`para : ${para}`)
// perimetre du parallelogramme
console.log(`perimetre de para = ${para.perimetre()}`)
//dimension
console.log(`dimension de para = ${para.dimension()}`)
//nb cotes
console.log(`nb de cotes de para = ${para.nbCotes()}`)
//diagonales
console.log(para.diagonales())