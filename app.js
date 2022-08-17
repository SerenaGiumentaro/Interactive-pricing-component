const range =  document.getElementById('range')
const viewDisplay = document.getElementById('page-view')
const priceDisplay = document.getElementById('price')
const periodBilling = document.getElementById('check')
const priceBox = document.getElementById('price-box')
const mainContent =  document.querySelector('.main-content')
const views =  document.querySelector('.views')
const containerPrice =  document.querySelector('.top')
const bottCont = document.querySelector('.bottom')
const advList = document.querySelector('.advantage-list')
const button = document.querySelector('button')
const discount = document.querySelector('.discount')
let priceList = [
   [ '10k', 8],
    ['50k', 12],
    ['100k', 16],
    ['500k', 24],
    ['1M' , 36]

]
let price = 0
let checkValue = false
viewDisplay.innerHTML = priceList[range.value][0]
priceDisplay.innerHTML = `$ ${priceList[range.value][1]},00`
// change background according to value 
function changeTrackBg(){
    let valPercent = (range.value / range.max) * 100
    range.style.background = `linear-gradient(to right, #10D8C4 ${valPercent}%,#ECF0FB ${valPercent}%)`
    viewDisplay.innerHTML = priceList[range.value][0]
    priceDisplay.innerHTML = `$ ${priceList[range.value][1]},00`
    checkValue = !checkValue
    calculateDiscount()
}

function calculateDiscount(){
    price = priceList[range.value][1]
    checkValue = !checkValue
    periodBilling.value = checkValue
    if(checkValue){
        priceDisplay.innerHTML = `$ ${(price) *  .75},00`
    }else{
        priceDisplay.innerHTML = `$ ${price},00`

    }
}

function mediaQuery(){
    
    if(window.innerWidth > 500){
        containerPrice.append(views,priceBox)   //desktop
        bottCont.append(advList,button)
        discount.innerHTML = '25% discount'

      
    }else if(window.innerWidth < 500){            // mobile 
        range.after(priceBox)
        discount.innerHTML = '25%'
    }
}
range.addEventListener('input',changeTrackBg)
periodBilling.addEventListener('change', calculateDiscount )
window.addEventListener('resize',mediaQuery)
window.addEventListener('load',mediaQuery)
