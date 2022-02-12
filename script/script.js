"use strict";
var allAnimals = [];
class animal {
    constructor(name, gender, size, age, vaccine, image) {
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        this.image = image;
        allAnimals.push(this);
    }
    startCard() {
        return `
        <div class = "col">
        <div class="card animate__animated animate__backInUp" style="width: 60%;">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">`;
    }
    endCard() {
        return `
          <h5 class = "cart-title text-center name">  ${this.name}</h5>
          <p class = "cart-title">Gender: ${this.gender}</p>
          <p class="card-text">Size: ${this.size}</p>
          <p class="card-text">Age: ${this.age}</p>
         <p class="card-text"> Vaccinated: ${this.vaccine}</p>
        </div>
      </div>
      </div>`;
    }
    displayCard() {
        return this.startCard() + this.endCard();
    }
}
class Cat extends animal {
    constructor(name, gender, size, age, vaccine, image, breed, furColor, URLBreed) {
        super(name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.furColor = furColor;
        this.URLBreed = URLBreed;
    }
    startCard() {
        return `
            ${super.startCard()}
            <h5 class = "cart-title"> Breed: ${this.breed}</h5>
              <h6 class = "cart-title">Color: ${this.furColor}</h6>
              <p class="card-text"><a href="${this.URLBreed}" target="_blank"><button type="button" class="btn btn-warning">More Info!</button></a></p>
              `;
    }
}
class Dog extends animal {
    constructor(name, gender, size, age, vaccine, image, breed, training, URLBreed) {
        super(name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.training = training;
        this.URLBreed = URLBreed;
    }
    startCard() {
        return `
            ${super.startCard()}
            <h5 class = "cart-title"> Breed: ${this.breed}</h5>
              <h6 class = "cart-title">Trained: ${this.training}</h6>
              <p class="card-text"><a href="${this.URLBreed}" target="_blank"><button type="button" class="btn btn-warning">More Info!</button></a></p>
              `;
    }
}
//Create Variables for each day, Variable definition not neccessary
new Dog("Billy", "Male", "80 cm", 1, true, "https://cdn.pixabay.com/photo/2021/04/21/19/40/kangal-shepherd-6197387_960_720.jpg", "Kangal", "Yes", "https://www.zooroyal.at/magazin/hunde/kangal/");
new animal("Snek", "Female", "60 cm", 8, false, "https://cdn.pixabay.com/photo/2019/02/06/17/09/snake-3979601_960_720.jpg");
new Cat("Grey's Anatomy", "Female", "30 cm", 1, true, "https://cdn.pixabay.com/photo/2020/08/16/06/17/cat-5491973_960_720.jpg", "Britisch Scottish Fold", "Gray", "https://www.zooplus.de/magazin/katze/katzenrassen/scottish-fold");
new animal("Jerry", "Male", "40 cm", 4, true, "https://cdn.pixabay.com/photo/2022/01/27/21/39/reptile-6973183_960_720.jpg");
new animal("Neon", "Female", "25 cm", 5, true, "https://cdn.pixabay.com/photo/2021/07/24/01/53/macaw-6488472_960_720.jpg");
new animal("Hammer", "Male", "50 cm", 7, false, "https://media.wired.com/photos/60300b7b091d7b01b7e2080b/191:100/w_1280,c_limit/Science_mantisshrimp-1061398692.jpg");
new Dog("Balu", "Male", "80 cm", 2, true, "https://media.tag24.de/951x634/b/1/b1syqlng2qvvoy6ixk1js9bj79mirsau.jpg", "Tibet Mastiff", "Yes", "https://www.mein-haustier.de/hunderassen/tibet-mastiff/");
new Cat("Kater", "Male", "34 cm", 17, false, "https://cdn.pixabay.com/photo/2017/08/05/21/41/cat-2585836_960_720.jpg", "Main Coon", "Greyish", "https://www.zooplus.de/magazin/katze/katzenrassen/maine-coon");
new animal("Trixy", "Female", "27 cm", 4, true, "https://www.versele-laga.com/-/media/VerseleLaga-Tenant/Global-Site/Articles/Ferrets/Header/ferret-1920x1080px.ashx?h=1080&w=1920&la=de&hash=23E365558E51CD0CEF87C7C1DB69F908");
var selectorEl = document.getElementsByClassName("cards")[0];
for (let val of allAnimals) {
    selectorEl.innerHTML += val.displayCard();
}
