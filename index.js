import dogs from './data.js'
import { Dog } from './Dog.js'

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])
let btnsOn = true

document.getElementById('accept-btn').addEventListener('click', yes)
document.getElementById('reject-btn').addEventListener('click', nope)

function render() {
    document.getElementById('dog').innerHTML = currentDog.getDogHtml()
}
render();

function getNewDog() {
    if (currentDogIndex === dogs.length - 1) {
        currentDogIndex = 0
    } else {
        currentDogIndex += 1
    }
    currentDog = new Dog(dogs[currentDogIndex])
    render()
}

function yes() {
    if (btnsOn) {
        currentDog.setMatchStatus(true)
        document.getElementsByClassName('like')[0].classList.add('show')
        btnsOn = false
        setTimeout(function () {
            document.getElementsByClassName('like')[0].classList.remove('show')
            btnsOn = true
            getNewDog()
        }, 1000)
    }
}

function nope() {
    if (btnsOn) {
        currentDog.setMatchStatus(false)
        document.getElementsByClassName('nope')[0].classList.add('show')
        btnsOn = false
        setTimeout(function () {
            document.getElementsByClassName('nope')[0].classList.remove('show')
            getNewDog()
            btnsOn = true
        }, 1000)
    }
}

