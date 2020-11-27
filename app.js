let right = 0;
let wrong = 0;

window.addEventListener("load", () => {
    document.querySelector(".next").addEventListener("click", () => {
        startGame();
    })
     document.querySelector(".start").addEventListener("click", () => {
        startGame();
    })
})



const startGame = () => {
    closeMenu();
    document.querySelector(".colors-container").style.pointerEvents = "all";
    document.querySelector(".color-code").style.color = "#000000";
    document.querySelector(".notification").classList.remove("open")
    let colors_container = document.querySelector(".colors-container");
    let color_name = document.querySelector(".color-code");
    
    colors_container.innerHTML = '';
    correct_color = random_color();
    color_name.innerText = correct_color;
    
    
    let colors_array = new Array;
    for (let i = 0; i < 5; i++){
        let tile = createTile(0)
        tile.addEventListener("click", () => {
            showNotification(0, correct_color, correct_tile)
        })
            
        
        colors_array[i] = tile;
    }
    
    correct_tile = createTile(correct_color)
    correct_tile.addEventListener("click", () => {
            
            showNotification(1, correct_color, correct_tile)
            
            })
    colors_array[5] = correct_tile;
    
    colors_array = colors_array.sort(() => Math.random()*Math.random()-Math.random()*Math.random());
    
    for (let i = 0; i < 6; i++){
        colors_container.appendChild(colors_array[i])
    }
}


const random_color = () => {
    return `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
}

const createTile = (color) => {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    if (color === 0){
        tile.style.background = `${random_color()}`;
    } else {
        tile.style.background = color;
    }
    
    return tile;
}


const showNotification = (isCorrect, revealColor, correct_tile) => {
document.querySelector(".colors-container").style.pointerEvents = "none";
    let descript = document.querySelector(".descript")
    let next = document.querySelector(".next") 
    let notification = document.querySelector(".notification");
    notification.classList.add("open");
    document.querySelector(".color-code").style.color = revealColor;
    correct_tile.style.transform = "scale(0.9)";
    correct_tile.style.transition = "transform 0.2s ease"
    if (isCorrect) {
        notification.style.background = `rgb(67, 162, 30)`
        next.style.background = `transparent`
        descript.innerText = "Correct!"
        right++;
        document.querySelector(".correct").innerText="Correct: "+right;
        
    } else {
        notification.style.background = `rgb(249,  52, 59)`
        next.style.background = `transparent`
        descript.innerText = "Wrong"
        wrong++
        document.querySelector(".wrong").innerText="Wrong: "+wrong;
    }
}

const closeMenu = () => {
    document.querySelector(".introduction").classList.remove("open");
    
}
