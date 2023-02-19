let tabtwo = document.querySelector('#working');
let work = document.querySelector('.work');


let tab0ne = document.querySelector('.education');
let edu = document.querySelector('.edu');


tabtwo.onclick = () =>{
    console.log("hi working");
    // edu.classList.toggle('fa-times')
    work.classList.toggle('active');
    // edu.classList.remove('active')
}


tab0ne.onclick = () =>{
    console.log("hi education");
    // edu.classList.toggle('fa-times')
    work.classList.toggle('active');
    // edu.classList.remove('active')
}

