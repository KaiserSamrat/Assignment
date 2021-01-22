// https://github.com/KaiserSamrat/Assignment

//Problem of kilometer to meter conversion

function kilometerToMeter(kilometer) {
    if (kilometer < 0 || typeof (kilometer) == "string") {           //Check if the kilometer value is negative
        return "The number can not be negative or string";
    }
    var totalMeter = 1000 * kilometer;                            //multiply 1000 with the value of kilometer
    return totalMeter;                                            //return after converting
}


// Problem of Calculate the budget

function budgetCalculator(watch, phone, laptop) {

    if (watch < 0 || phone < 0 || laptop < 0) {            //check wheather any value is negative
        return "All the values should be positive";
    }
    else if (typeof (watch) == "string" || typeof (phone) == "string" || typeof (laptop) == "string") {
        return "Values can not be string";
    }

    else {
        watchTotal = watch * 50;
        phoneTotal = phone * 100;
        laptopTotal = laptop * 500;
        totalBudget = watchTotal + phoneTotal + laptopTotal;       //sum of watchTotal,phoneTotal and laptop
        return totalBudget;
    }
}

// Problem of calculate the hotel cost

function hotelCost(dayNumber) {

    var totalHotelCost = 0;

    if (dayNumber <= 0 || typeof (dayNumber) == "string") {       //check if the day is negative value or string
        return "Day can not be zero or negative or string";
    }
    else if (dayNumber <= 10) {                                 //if day number is less than or equla 10
        totalHotelCost = dayNumber * 100;                       //mulitply 100 with dayNumber

    }
    else if (dayNumber <= 20) {                                 //if day number is less than or equal 20
        var firstHalf = 10 * 100;                               //multiply first 10 day with 100
        var remaining = dayNumber - 10;
        var secondHalf = remaining * 80;                        //multiply remaining day with 80
        totalHotelCost = firstHalf + secondHalf;                //add two values and store in totalHotelCost
    }
    else {
        var firstHalf = 10 * 100;                               //when day number is grether than 20
        var secondHalf = 10 * 80;                               //calculate separately for all 3 situation
        var remaining = dayNumber - 20;
        var thirdHalf = remaining * 50;
        totalHotelCost = firstHalf + secondHalf + thirdHalf;    //add three values and store in totalHotelCost

    }
    return totalHotelCost;

}

// Problem of finding the largest String in array 

function megaFriend(friendList) {
    if (friendList.length == 0) {                               //check wheather the array is empty or not
        return "No element found";
    }
    else {
        var largestSize = friendList[0].length;
        var largestelement = friendList[0];                    //Initialize first element as a largest
        for (var i = 0; i < friendList.length; i++) {
            if (friendList[i].length > largestSize) {          // if the current element size is larger
                largestSize = friendList[i].length;            //update the largest size          
                largestelement = friendList[i];                //update the largest element
            }
        }
    }


    return largestelement;

}


