const cars = [
    {
        name: 'cadillac',
        img: 'https://photos.classiccars.com/cc-temp/listing/169/4815/37231600-1956-cadillac-series-62-thumb.jpg'
    },
    {
        name: "chevrolet",
        img: 'https://photos.classiccars.com/cc-temp/listing/138/4253/27902233-1955-chevrolet-nomad-thumb.jpg'
    },
    {
        name: "dodge",
        img: 'https://photos.classiccars.com/cc-temp/listing/166/8240/35769365-1968-dodge-charger-thumb.jpg'
    },
    {
        name: 'ford',
        img: 'https://photos.classiccars.com/cc-temp/listing/170/2179/37674355-1965-ford-falcon-srcset-sm.jpg'
    },
    {
        name: 'mustang',
        img: 'https://photos.classiccars.com/cc-temp/listing/170/2076/37667400-1968-ford-mustang-thumb.jpg'
    },
    {
        name: "porsche",
        img: 'https://photos.classiccars.com/cc-temp/listing/170/2032/37664854-2018-porsche-911-thumb.jpg'
    },
    {
        name: 'ferrari',
        img: 'https://photos.classiccars.com/cc-temp/listing/170/2237/37677919-2014-ferrari-458-thumb.jpg'
    },
    {
        name: "aston martin",
        img: 'https://photos.classiccars.com/cc-temp/listing/167/8915/36388446-1962-aston-martin-db4-thumb.jpg'
    },
    {
        name: 'mercedes',
        img: 'https://photos.classiccars.com/cc-temp/listing/165/5327/35047079-2006-mercedes-benz-slr-mclaren-thumb.jpg'
    }
]
const mainContainer = document.querySelector('#container')
const input = document.querySelector('#car');
const buttonsContainer = document.querySelector('.btn-container')
const enter = document.querySelector('.previous')
const next = document.querySelector('.next')
const startBtn = document.createElement('button')
const startCounter = document.createElement('span')
startBtn.innerText = 'Start'
input.classList.add('disappear')
buttonsContainer.classList.add('disappear')
mainContainer.classList.add('starter-section')
startBtn.classList.add('starter-btn')
mainContainer.append(startBtn)



startBtn.addEventListener('click', function () {
    setTimeout(function () {
        startCounter.innerText = '1'
        startCounter.style.color = '#f28482'
        startCounter.style.fontSize = '40px'
        startCounter.style.justifySelf = 'center'
        input.insertAdjacentElement('beforebegin', startCounter)

    }, 450)
    setTimeout(function () {
        startCounter.innerText = '2'

    }, 900)
    setTimeout(function () {
        startCounter.innerText = '3'

    }, 1350)
    setTimeout(function () {
        startCounter.remove()
        input.classList.remove('disappear')
        buttonsContainer.classList.remove('disappear')
        mainContainer.classList.replace('starter-section', 'cars-container')
        mainContainer.style.backgroundImage = `url(${cars[0].img})`
        mainContainer.style.backgroundSize = 'cover'

    }, 1700)
    this.classList.add('disappear')
})

let points = 0;
let tries = 0;
let nextMove = 0;
const answer = document.createElement('span')
const hint = document.createElement('span')
enter.addEventListener('click', function () {
    const currentCar = cars.filter(x => x.img === mainContainer.style.backgroundImage.slice(5, -2))
    if (input.value === currentCar[0]['name']) {
        hint.remove()
        answer.innerText = "Correct Answer"
        answer.classList.remove('incorrect')
        answer.classList.add('correct')
        mainContainer.insertAdjacentElement('afterend', answer)
        enter.classList.remove('incorrect-enter')
        input.classList.remove('incorrect-input')
        enter.classList.add('correct-enter')
        input.classList.add('correct-input')
        points++
    } else if (input.value !== currentCar[0]['name'] && input.value) {
        tries++
        answer.innerText = "Incorrect Answer"
        answer.classList.add('incorrect')
        mainContainer.insertAdjacentElement('afterend', answer)
        enter.classList.add('incorrect-enter')
        input.classList.add('incorrect-input')
        input.value = ''
    }
    else if (!input.value) {
        answer.innerText = 'Not a valid name'
        answer.classList.add('incorrect')
        mainContainer.insertAdjacentElement('afterend', answer)
        enter.classList.remove('incorrect-enter')
        input.classList.remove('incorrect-input')

    }
    if (tries === 5) {

        hint.classList.add('hint')
        hint.innerText = `${currentCar[0].name.slice(0, currentCar[0].name.length / 2 - 1)}...`
        next.insertAdjacentElement('afterend', hint)
    }

})


next.addEventListener('click', function () {
    if (nextMove < cars.length - 1) {
        hint.remove()
        tries = 0
        nextMove++
        mainContainer.style.backgroundImage = `url(${cars[nextMove].img})`
        answer.remove()
        enter.classList.remove('correct-enter')
        input.classList.remove('correct-input')
        enter.classList.remove('incorrect-enter')
        input.classList.remove('incorrect-input')
        input.value = ''
    } else {
        const result = document.createElement('button')
        answer.remove()
        result.innerText = 'Result'
        result.classList.add('result')
        enter.remove()
        mainContainer.style.background = 'none'
        mainContainer.classList.replace('cars-container', 'final')
        input.remove()
        this.replaceWith(result)
        result.addEventListener('click', function () {
            const point = document.createElement('span')
            point.classList.add('hint')
            point.innerText = `you took ${points} points`
            this.replaceWith(point)
            const restart = document.createElement('a');
            restart.innerText = 'Restart'
            restart.classList.add('restart')
            point.insertAdjacentElement('afterend', restart)
            restart.setAttribute('href', 'cars_guessing.html')
        })
    }

})