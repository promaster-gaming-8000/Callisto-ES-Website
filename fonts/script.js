const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers;

function openBook() {
}

function closeBook(isAtBeginning) {
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 3;
                document.querySelector('.arrow-left').classList.remove("blackout-button");
                document.querySelector('.arrow-left').classList.add("arrow-book");
                break;
            case 2:
                paper1.style.zIndex = 1;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                document.querySelector('.arrow-right').classList.remove("arrow-book");
                document.querySelector('.arrow-right').classList.add("blackout-button");
                break;
            default:
                throw new Error("Unkown State");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                document.querySelector('.arrow-left').classList.remove("arrow-book");
                document.querySelector('.arrow-left').classList.add("blackout-button");
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                document.querySelector('.arrow-right').classList.remove("blackout-button");
                document.querySelector('.arrow-right').classList.add("arrow-book");
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}