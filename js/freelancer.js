
//Calculate the day rate given an hourly rate
const dayRate = (d) => d * 8
console.log(dayRate(89));


// Calculate the number of workdays given a fixed budget
const daysInBudget = (money,days,hour) => money / days / hour;
console.log(Math.floor(daysInBudget(20000, 89, 8)));


//Calculate the discounted rate for large projects
const priceWithMonthlyDiscount = function (pricePerHour, numDays, discountPercentage) {
    //Calculate price per day based on the given price per hour.
    const pricePerDay = dayRate(pricePerHour);

    //Calculate discount to be applied
    const daysInMonth = numDays - (numDays % 22); // every month has a 22 billable days
    const discount = pricePerDay * daysInMonth * discountPercentage;

    // Calculate price for days in a month (price-discount)
    const pricePerMonth = daysInMonth * pricePerDay - discount;

    // Calculate price for remaining days
    const priceExceedingDays = numDays % 22 * pricePerDay;

    // Sum Up price for discounted Month + exceeding days
    return Math.ceil(priceExceedingDays + pricePerMonth);
};


console.log(priceWithMonthlyDiscount(89, 230, 0.42));