// elements
const dishListElem = document.querySelector(".dishes"); 
const dishElems = document.getElementsByClassName("dish");
const buttonsDiv = document.querySelector(".buttons");
const buttonsList = document.querySelectorAll(".buttons button");

// variables
const filters = ["all", "sandwish", "salad", "desert"];
// arrays
const dishes = [
    dish1 = {
        name: "Crispy Sandwish",
        price: "4.75",
        type: "sandwish",
        img: "../img/Crispy Sandwish.jpg",
        description: `So crunchy that it must be tamed in a fluffy paste, wrapped in the aroma of home-baked 
        goodies, it tempts you with its sunny color and promises you the taste of penetrating chicken that you find 
        inside, full of flavor and nourishment.`
    },

    dish2 = {
        name: "Shawarma Sandwish",
        price: "4.75",
        type: "sandwish",
        img: "../img/Shawarma Sandwish.jpg",
        description: `Wrapped in mystery and full of appetizing aromas, it lets you see just enough to arouse your 
        appetite. Chest in front, with the shapes undulating under the finest "fabric" of the dough, shaorma is a 
        temptation that invites you to taste the secrets of the Orient.`
    },

    dish3 = {
        name: "Pita Gyros",
        price: "4.75",
        type: "sandwish",
        img: "../img/Pita Gyros.jpg",
        description: `Descended as if from the legends of Olympus, the baked pita on the stove and the tender meat cut
        into thick slices swims in the tzatziki sauce like nymphs in the swirling waters of ancient Greece.`
    },

    dish4 = {
        name: "Tuna Salad",
        price: "5.75",
        type: "salad",
        img: "../img/Tuna Salad.jpg",
        description: `The best fish is the one that finds its way to your lunch salad. For meat-free days, but with the 
        right protein ration, try a new mix: lettuce and fresh vegetables, accompanied by Greek olives, red beans, tuna 
        strips and boiled egg. Tired and light, exactly as you thought!`
    },

    dish5 = {
        name: "Chicken Salad",
        price: "5.50",
        type: "salad",
        img: "../img/Chicken Salad.jpg",
        description: `Salads are said to be very good if they are accompanied by a… steak. Well, after eating the 
        chicken salad from Class, you don't need the main course. Chicken breast cut into consistent strips, rolled 
        over an assorted mix of vegetables, ensures your nutritional balance after a hectic day of work.`
    },

    dish6 = {
        name: "Pancakes With Chocolate",
        price: "2.50",
        type: "desert",
        img: "../img/Pancakes With Chocolate.jpg",
        description: `With chocolate cream, it's perfect!
        When you feel like pancakes during the lunch break or on weekend mornings, we heat the pan for you. We send you 
        a fragrant, fluffy and with the exact dose of sweet that stimulates your zest for life.`
    },

    dish7 = {
        name: "Black Forest Pancakes",
        price: "3.00",
        type: "desert",
        img: "../img/Black Forest Pancakes.jpg",
        description: `Chef for something sweet today? We only say this: pancakes with cocoa, generously filled with 
        cheese and cream, plus fruit jam. Pădurea Neagră pancakes are a tasteful trip with a stop at your home, a set 
        for breakfast or a pampering after lunch`
    },

    dish8 = {
        name: "Pancakes With Jam",
        price: "2.50",
        type: "desert",
        img: "../img/Pancakes With Jam.jpg",
        description: `Be sweet!
        When you feel like pancakes during the lunch break or on weekend mornings, we heat the pan for you. We send you 
        a fragrant, fluffy and with the exact dose of sweet that stimulates your zest for life.`
    }
    
]

// function call
displayDishes();

// functions
function displayDishes (type = filters[0]){
    let pass = false;
    for (let i = 0; i < dishes.length; i++){
        if(type === filters[0])
            pass = true;
        else if (dishes[i].type === type)
            pass = true;
        else pass = false;

        if(!pass) continue;

        const mainDiv = document.createElement("div");
        mainDiv.classList.add("dish");

        mainDiv.style.opacity = "0";
        setTimeout(() => {
            mainDiv.style.opacity = "100";
        }, 100);

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("dish-img");
        const dishImg = document.createElement("img");
        dishImg.src = dishes[i].img; 
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("dish-name");
        nameDiv.textContent = dishes[i].name;
        const priceDiv = document.createElement("div");
        priceDiv.classList.add("dish-price");
        priceDiv.textContent = "$" + dishes[i].price;
        const descDiv = document.createElement("div");
        descDiv.classList.add("dish-desc");
        descDiv.textContent = dishes[i].description;

        imgDiv.appendChild(dishImg);
        mainDiv.appendChild(imgDiv);
        mainDiv.appendChild(nameDiv);
        mainDiv.appendChild(priceDiv);
        mainDiv.appendChild(descDiv);
        dishListElem.appendChild(mainDiv);
    }
};

buttonsDiv.addEventListener('click', e => {
    if(e.target.nodeName === "BUTTON"){
        // display dishes
        dishListElem.innerHTML = "";
        displayDishes(e.target.textContent);

        // button highlight
        const buttonName = e.target.textContent;
        buttonsList.forEach(btn => {
            if(btn.textContent === buttonName)
                btn.classList.add("selected");
            else btn.classList.remove("selected");
        })
    } 
})