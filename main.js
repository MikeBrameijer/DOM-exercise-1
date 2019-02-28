function main(){
    console.log("you clicked this button");
    document.getElementById("grow-me").classList.add("big");
    document.getElementById("shrink-me").classList.remove("big");
    let lis = document.querySelectorAll("li");
    console.log(lis);
    for (let listItem of lis){
        console.log(listItem.innerText);
    }
    let exampleLink = document.querySelector(`.link`);
    exampleLink.setAttribute(`href`, `www.example.com`);
    exampleLink.innerText = "somewhere";
    
    document.getElementById("hide-me").style.display = "none";
    document.getElementById("show-me").style.display = "block";
    let inputName = document.getElementById("name").value;
    document.querySelector("h1").innerHTML = `Hello ${inputName}`;
}

