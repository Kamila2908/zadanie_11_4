function Phone(condition, brand, price, color) {
    this.brand = brand;
	this.price = price;
    this.color = color;
    this.condition = condition;
}

Phone.prototype.printInfo = function() {
    console.log("The "+ this.condition + " phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("new", "Apple", 2250, "silver");
var SamsungGalaxyS6 = new Phone("used", "Samsung", 3000, "black");
var OnePlusOne = new Phone("refurbished", "One Plus", 1800, "grey");

iPhone6S.printInfo();