const {Point}=require("./Point.js");
const {Triangle}=require("./Triangle.js");
const p0 = new Point(0, 0)
const p1 = new Point(1, 1)
const p2 = new Point(1, 2)
const triangle = new Triangle(p0, p1, p2)
// test de toString()
console.log(`triangle : ${triangle}`)
// perimetre du triangle
console.log(`perimetre de triangle (doit être 4,65...) = ${triangle.perimetre()}`)
//dimension
console.log(`dimension de triangle = ${triangle.dimension()}`)
//nb cotes
console.log(`nb de cotes de triangle = ${triangle.nbCotes()}`)