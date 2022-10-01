const noBtn = document.getElementById('hinde');
const yesBtn = document.getElementById('yes');
const ques = document.getElementById('question');

let temp = 0;

noBtn.addEventListener('click', ()=>{
    let rand = Math.floor(Math.random() * (-30 - 40) * 5);
    let rand2 = Math.floor(Math.random() * (-50 - 65) + 20);
    noBtn.style.transform="translate("+rand+"px,"+rand2+"px)";
});

yesBtn.addEventListener("click", ()=>{
    temp++;
    if (temp == 1) {
        ques.innerHTML = "Sure ka?"
    }
    if (temp == 2) {
        ques.innerHTML = "I Love You!"
        yesBtn.innerHTML = "I Love You Too"
        yesBtn.style.width = "30%";
        yesBtn.style.height = "12%";
        yesBtn.style.transform = "translateY(190px)";
    }
    if (temp == 3) {
        ques.innerHTML = "<3"
        yesBtn.innerHTML = "Yes"
        yesBtn.style.width = "20%";
        yesBtn.style.height = "8%";
        yesBtn.style.transform = "translateY(200px)";

        temp = 0;
    }
})