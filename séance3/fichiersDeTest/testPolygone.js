const {Point}=require("./Point.js");
const {Polygone}=require("./Polygone.js");
// creation d'un polygone à 5 sommets
    const p0= new Point(0, 0), p1= new Point(2, 0),
        p2= new Point(2,1), p3= new Point(0, 1),
        p4= new Point(-1, 2);

    const  penta = new Polygone(new Array(p0,p1,p2,p3,p4));

    //dimension
    console.log(`${penta} : dimension = ${penta.dimension()}`);
    //nb cotes
    console.log(`${penta} : nb de cotes = ${penta.nbCotes()}`);

    console.log(`${penta} : perimetre = ${penta.perimetre()}`);
