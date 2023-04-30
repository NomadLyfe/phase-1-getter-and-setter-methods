class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return 2 * this.radius;
    }
    set diameter(diameter) {
        this.radius = diameter/2;
    }
    get circumference() {
        return Math.PI * this.radius * 2;
    }
    set circumference(circ) {
        this.radius = circ/(Math.PI * 2);
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
    set area(area) {
        this.radius = Math.sqrt(area/Math.PI);
    }
}
