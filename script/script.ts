var weekdays: Array<menu> = [];
class menu {
    day: string;
    preCourse: string;
    mainCourse: string;
    dessert: string;
    price: number;
    // image: string;
    constructor(weekday: string, pre: string, main:string, dessert:string, price:number) {
                this.day = weekday;
                this.preCourse = pre;
                this.mainCourse = main;
                this.dessert = dessert;
                this.price = price;
                // this.image = image;

                weekdays.push(this);
    }
    menuFunction() {
        return `<div class="col">
          <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
                </div>
        </div>`
    }
}

//Create Variables for each day, Variable definition not neccessary
new menu ("Monday", "Tomato Soup", "Vegan Lasagne", "Chocolate Brownies", 20);
new menu ("Tuesday", "Garlic Cream Soup", "Vegan Bolognese", "Panna Cotta", 22);
new menu ("Wednesday", "Mixed Salad", "Vegan Curry", "Hazelnut Marzipan Cake", 18);
new menu ("Thurday", "Carot-Ginger Soup", "Vegan Burger with French Fries", "Vegan Pancakes", 17);
new menu ("Friday", "Mushroom Soup", "Tofu Masala", "Cherry Cake", 21);
new menu ("Saturday", "Miso Soup", "Crunchy Pumpkin", "Vegan Cookies", 25);
new menu ("Sunday", "Zuccini Soup", "Vegan Gyros", "Carrot Cake", 23);

var selectorEl = document.getElementsByClassName("cards")[0] as HTMLElement;

for (let val of weekdays) {
    selectorEl.innerHTML += val.menuFunction();
}