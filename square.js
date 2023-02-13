function square(a, b, c) {
    let disc = b * b - 4 * a * c;
    if (disc < 0) {
        console.log(`Less 0, no roots`)
        return "no roots";
    } else if (disc == 0) {
        x = (-b / 2) * a;
        console.log(`Equals to 0, root is ${x}`);
    } else {
        let x1 = ((-b + Math.sqrt(disc)) / 2) * a;
        let x2 = ((-b + Math.sqrt(disc)) / 2) * a;
        console.log(`More than 0, we have two roots ${x1}, ${x2}`);
        return [x1, x2];
    }

}
module.exports = square;
square(1, -3, -4)
square(9, 6, 1)
square(9, 6, 2)