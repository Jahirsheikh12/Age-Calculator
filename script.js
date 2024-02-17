let inputField = document.querySelector('#age-input');

let outputField = document.querySelector('#age-output').style.display = 'none';

let btn = document.querySelector('#btn');

let words = ["Generator","verifyer", "checker"];

let typeWriter = document.getElementById('typewriter');

const time = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
}

let secounds = 100;

let currentIndex = 0;

const iterator = async () => {
    while (true) {
        let curword = words[currentIndex];

        for (let i = 0; i < curword.length; i++) {
            typeWriter.innerText = curword.substring(0, i + 1);
            await time(secounds);
        }

        await time(secounds * 10);

        for (let i = curword.length; i > 0; i--) {
            typeWriter.innerText = curword.substring(0, i - 1);
            await time(secounds);
        }
        
        await time(secounds * 5)
        
        if(currentIndex === words.length - 1) {
            currentIndex = 0;
        }
        else {
            currentIndex++;
        }

    }

}

iterator();

btn.addEventListener('click', () => {

    document.querySelector('#age-input').style.display = 'none';

    document.querySelector('#age-output').style.display = 'block'

    let birthDate = new Date(inputField.value);

    let y1 = birthDate.getFullYear();

    let m1 = birthDate.getMonth() + 1;

    let d1 = birthDate.getDate();

    let currentDate = new Date();

    let y2 = currentDate.getFullYear();

    let m2 = currentDate.getMonth() + 1;

    let d2 = currentDate.getDate();

    let y3, m3, d3;

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        d3 = d1 - d2;
    }

    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        m3 = m1 - m2;
    }

    if (y2 > y1) {
        y3 = (y2 - y1) - 1;
    }
    else if (y1 == y2) {
        y3 = y2 - y1;
    }
    else {
        y3 = (y1 - y2) - 1;
    }

    document.querySelector('#age-output').value = `${y3} year ${m3} month ${d3} days`;

});