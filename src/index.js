module.exports = function reverse(n) {
    if (n >= 0) {
        return parseInt(n.toString().split("").reverse("").join(""));
    } else {
        return -parseInt(n.toString().split("").reverse("").join(""));
    }
}