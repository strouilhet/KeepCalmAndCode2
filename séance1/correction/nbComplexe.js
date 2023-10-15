// nombre complexe
/**
 * précondition : le nombre complexe est bien formé
 */
function im(z) {
	//console.log("pour "+z+" " +z.slice(z.indexOf("i") + 1, z.length))
    return Number(z.slice(z.indexOf("i") + 1, z.length))
}

function re(z) {
	//console.log("reel pour "+z+" " +z.slice(0, z.indexOf("+")))
    return Number(z.slice(0, z.indexOf("+")))
}

function module(z) {
    let reel = re(z)
    let ima = im(z)
    return Math.sqrt(reel * reel + ima * ima)
}

function argument(z) {
    let reel = re(z)
    let ima = im(z)
    if (reel == 0.0) {
        if (ima >= 0)
            res=Math.PI / 2
        else
            res=-Math.PI / 2
    } else
        res=Math.atan(ima / reel)
	
	return res
}


function addC(z1, z2) {
    return `${re(z1) + re(z2)}+i${im(z1) + im(z2)}`
}

function mulC(z1, z2) {
    return `${re(z1)*re(z2) - im(z1)*im(z2)}+i${re(z1)*im(z2) + im(z1)*re(z2)}`
}


    console.log(im("1+i2"))
    console.log(re("1+i2"))
    console.log(module("1+i2"))
    console.log(argument("1+i2"))
    console.log(addC("1+i2", "2+i1"))
    console.log(mulC("1+i2", "2+i1"))

    console.log(addC("3+i4", "6+i-10"))  // 9 - i6
    console.log(mulC("2+i3", "1+i-5"))   // 17 - i7
