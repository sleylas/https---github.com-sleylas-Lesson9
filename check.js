const sum = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; // Stop there and shows sum (a+b)
    sum > 60 ? (bonus = 50) : (bonus = sum);
    debugger; //Stop there and shows if sum is greater than 50 then bonus equals 50 else bonus equals sum of (a+b)
    return bonus;
};
sum(30, 30)
module.exports = sum;