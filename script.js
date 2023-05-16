const grajdCat = document.querySelector(".grajd-cat")
const grajdDog = document.querySelector(".grajd-dog")
const grajdHorse = document.querySelector(".grajd-horse")
const grajdPig = document.querySelector(".grajd-pig")

window.addEventListener("keypress", (event)=>{
    if(event.key==="w"){
        const image = document.createElement("img");
        image.src = "./Images/Cat.png";
        image.style.width = "70px";
        image.style.height = "70px";
        image.style.position = "absolute";
        image.style.left = "40px";
        image.style.left = Math.floor(Math.random() * 180) + "px";
        image.style.top = Math.floor(Math.random() * 180) + "px";
        grajdCat.appendChild(image)
    }
    if(event.key==="s"){
        const image = document.createElement("img")
        image.src= "./Images/Dog.png"
        image.style.width = "70px";
        image.style.height = "70px";
        image.style.position = "absolute";
        image.style.left = "40px";
        image.style.left = Math.floor(Math.random() * 180) + "px";
        image.style.top = Math.floor(Math.random() * 180) + "px";
        grajdDog.appendChild(image)
    }
    if(event.key==="d"){
        const image = document.createElement("img")
        image.src= "./Images/Pig.png"
        image.style.width = "70px";
        image.style.height = "70px";
        image.style.position = "absolute";
        image.style.left = "40px";
        image.style.left = Math.floor(Math.random() * 180) + "px";
        image.style.top = Math.floor(Math.random() * 180) + "px";
        grajdPig.appendChild(image)
    }
    if(event.key==="a"){
        const image = document.createElement("img")
        image.src= "./Images/Horse.png"
        image.style.width = "70px";
        image.style.height = "70px";
        image.style.position = "absolute";
        image.style.left = "40px";
        image.style.left = Math.floor(Math.random() * 180) + "px";
        image.style.top = Math.floor(Math.random() * 180) + "px";
        grajdHorse.appendChild(image)
    }
})
