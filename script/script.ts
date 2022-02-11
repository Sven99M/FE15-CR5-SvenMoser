var allAnimals: Array<animal> = [];
class animal {
    name: string;
    gender: string;
    size: string;
    age: number;
    vaccine: boolean;
    image : string;
    constructor(name: string, gender: string, size:string, age:number, vaccine: boolean,image : string) {
                this.name = name;
                this.gender = gender;
                this.size = size;
                this.age = age;
                this.vaccine = vaccine;
                this.image = image;

                allAnimals.push(this);
    }
    display() {
        return `<div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
<h5 class="card-title">${this.name}</h5>
<p class="card-text">${this.gender}</p>
<p class="card-text">${this.size}</p>
<p class="card-text">${this.age}</p>
<p class="card-text">${this.vaccine}</p>
</div>
</div>
        </div>`
    }
}

//Create Variables for each day, Variable definition not neccessary
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");
new animal ("Bacon", "Male", "30cm", 3, true,"https://cdn.pixabay.com/photo/2013/02/21/19/13/agriculture-84702_960_720.jpg");


var selectorEl = document.getElementsByClassName("cards")[0] as HTMLElement;

for (let val of allAnimals) {
    selectorEl.innerHTML += val.display();
}