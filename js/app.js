// user defined program made by yuson, ladaga.

// #Mid Full Stack Project 1

// #Game Mechanics
// #fire is weak against water
// #electric is strong against water
// #electric is weak against fire


// #User Experiences
// # Generate Score for user vs computer
// # Display readable prompt message if user wins or loss
// # Provide a ui for electric, water, fire


// #PROGAM LOGIC
// # Create functions (win,lose, draw,getComputerChoice, game,main)
// # Identify these functions which get a parameter or argument.
// # Implements listener event everytime the user picks among the elements
// # 

// #get all the elements in the DOM and undefined variables
let userScore = 0;
let compScore = 0;

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const flash = document.getElementById('flash');

const divLeft = document.querySelector('div.left');
const divRight = document.querySelector('div.right');


// #game logic for getComputerChoice()
function getComputerChoice() {
    const choice = ["fire", "water", "flash"];

    const random = Math.floor(Math.random() * 3);
    return choice[random];
}

// #game logic for win()
function win(userChoice, compChoice) {
    userScore ++;

    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('thisResult').innerHTML = "You Win" +  "<br>" + "User's choice is "  + userChoice + "<br>" + " Computer's choice is " + compChoice;

    setTimeout(function(){
        switch (userChoice + compChoice) {
        case "waterfire":
            fire.classList.add("mali");
            water.classList.add("tama");
            flash.classList.add("mali");
            break;
        case "flashwater":
            fire.classList.add("mali");
            water.classList.add("mali");
            flash.classList.add("tama");
            break;
        case "fireflash":
            fire.classList.add("tama");
            water.classList.add("mali");
            flash.classList.add("mali");
            break;
        }
    }, 0.1);

}


// #game logic for lose()
function lose(userChoice, compChoice) {
    compScore ++;

    document.getElementById('computer-score').innerHTML = compScore;
    document.getElementById('thisResult').innerHTML = "You lose" +  "<br>" + "User's choice is " + userChoice + "<br>" + " Computer's choice is " + compChoice;

    setTimeout(function(){
        switch (userChoice + compChoice) {
        case "firewater":
            fire.classList.add("mali");
            water.classList.add("tama");
            flash.classList.add("mali");
            break;
        case "waterflash":
            fire.classList.add("mali");
            water.classList.add("mali");
            flash.classList.add("tama");
            break;
        case "flashfire":
            fire.classList.add("tama");
            water.classList.add("mali");
            flash.classList.add("mali");
            break;
        }
    }, 0.1);

}


// #game logic for draw()
function draw(userChoice, compChoice) {
    document.getElementById('thisResult').innerHTML = "Draw!!" +  "<br>" + "User's choice is " + userChoice + "<br>" + " Computer's choice is " + compChoice;

    setTimeout(function(){

        switch (userChoice + compChoice) {
            case "firefire":
                fire.classList.remove("tama", "mali");
                water.classList.remove("tama", "mali");
                flash.classList.remove("tama", "mali");
                break;
            case "waterwater":
                fire.classList.remove("tama", "mali");
                water.classList.remove("tama", "mali");
                flash.classList.remove("tama", "mali");
                break;
            case "flashflash":
                fire.classList.remove("tama", "mali");
                water.classList.remove("tama", "mali");
                flash.classList.remove("tama", "mali");
                break; 
        }
    }, 0.1);
}



// #logic for the whole game()
function game(userChoice) {
    const compChoice = getComputerChoice();
    
    switch (userChoice + compChoice){
        case "waterfire":
        case "flashwater":
        case "fireflash":
            win(userChoice, compChoice);
            break;
        case "firewater":
        case "waterflash":
        case "flashfire":
            lose(userChoice, compChoice);
            break;
        case "firefire":
        case "waterwater":
        case "flashflash":
            draw(userChoice, compChoice);
            break;
    }

    appendUser(userChoice);
    appendComp(compChoice);
}

// to append the users choice in the p element
function appendUser(userChoice) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = userChoice;
    divLeft.appendChild(paragraph);     

}

// to append the computer choice in the p element
function appendComp(compChoice) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = compChoice;
    divRight.appendChild(paragraph);
}

// #run main()
function main() {

    fire.addEventListener('click', ()=>{
        game("fire");
    });

    water.addEventListener('click', ()=>{
        game("water");
    });

    flash.addEventListener('click', ()=>{
        game("flash");
    });

}

main();