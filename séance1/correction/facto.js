/**
 * précondition : n est positif
 */
function factoIteratif(n) {
    let f = 1.0
    for (i=2; i<=n; i++) {
		f=f*i
	}
    return f
}

function factoRecursif(n) {
    if (n <= 1) return 1
    else return n * factoRecursif(n - 1)
}

console.log(factoIteratif(12))
console.log(factoRecursif(12))