/**
 * @version 1.0
 * @author st
 */
class Robot extends HTMLElement {
    #pas = 40
    #conteneur

    /**
     * balise html customisé
     * @param conteneur la balise parente
     */
    constructor (conteneur) {
        super()
        this.style.left = 10 + "px"
        this.style.top = 10 + "px"
        this.style.width = 40 + "px"
        this.style.height = 40 + "px"
        this.style.backgroundColor = "black"
        this.style.position = "absolute"
        this.#conteneur = conteneur
        conteneur.appendChild(this)
    }

    get pas () {
        return this.#pas
    }

    set pas (val) {
        if (val > 0 && val < this.#conteneur.offsetWidth) this.#pas = val
    }

    /**
     * déplacer de 1 pas le robot vers la droite
     */
    droite () {
        if (this.offsetLeft < this.#conteneur.offsetWidth)
            this.style.left = this.offsetLeft + this.#pas + "px"
    }

    /**
     * déplacer de 1 pas le robot vers la gauche
     */
    gauche () {
        if (this.offsetLeft > 0)
            this.style.left = this.offsetLeft - this.#pas + "px"
    }

    /**
     * déplacer de 1 pas le robot vers le bas
     */
    bas () {
        if (this.offsetTop < this.#conteneur.offsetHeight)
            this.style.top = this.offsetTop + this.#pas + "px"
    }

    /**
     * déplacer de 1 pas le robot vers le haut
     */
    haut () {
        if (this.offsetTop > 0)
            this.style.top = this.offsetTop - this.#pas + "px"
    }

    /**
     *
     * @param top la position sur la hauteur
     * @param left la position sur la largeur
     */
    position (top, left) {
        if (top > 0 && top < this.#conteneur.offsetHeight
            && left > 0 && left < this.#conteneur.offsetWidth) {
            this.style.top = top + "px"
            this.style.left = left + "px"
        }
    }
}