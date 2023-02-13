const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; // Stop there and shows sum (a+b)
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; //Stop there and shows if sum is greater than 50 then bonus equals 50 else bonus equals sum of (a+b)
    return bonus;
};
calculateBonus(20, 33) //if run code without the function nothing happen, because calculateBonus is not called.