document.querySelector('.spin').addEventListener('click', slots)
document.querySelector('.betTen').addEventListener('click', minBet)
document.querySelector('.betFifty').addEventListener('click', maxBet)

document.querySelector('.left')
document.querySelector('.middle')
document.querySelector('.right')


let bank = 100
let bet = 0


function minBet(){
    if (bank >= 10){
        bet += 10
        bank -= 10
    } else{
        return
    }
    let winnings = document.querySelector('.toSeeWinnings')
    winnings.innerText = bank

    let lastBet = document.querySelector('.betPool')
    lastBet.innerText = bet
}

function maxBet(){
    if (bank >= 50){
        bet += 50
        bank -= 50
    } else{
        return
    }
    let winnings = document.querySelector('.toSeeWinnings')
    winnings.innerText = bank

    let lastBet = document.querySelector('.betPool')
    lastBet.innerText = bet
}

function getRandomFruit(){
	let randomNumber=Math.random();
	let fruit="lemon";
	if(randomNumber<.20){
		fruit="orange";
	}
	else if(randomNumber<.40){
		fruit="apple";
	}
	else if(randomNumber<.60){
		fruit="watermelon";
	}
	else if(randomNumber<.80){
		fruit="cherry";
	}
	return fruit;
}

function slots(){
    let message = document.querySelector('.msgDisplay')
   if(bet === 0 && bank === 0){
       message.innerText = 'YOURE OUTTA LUCK'
       return
   } else {
    let leftSlot = getRandomFruit()
    let middleSlot = getRandomFruit()
    let rightSlot = getRandomFruit()
    let leftSlotRoll = document.querySelector('.left')
    leftSlotRoll.innerText = leftSlot
    let midSlotRoll = document.querySelector('.middle')
    midSlotRoll.innerText = middleSlot
    let rightSlotRoll = document.querySelector('.right')
    rightSlotRoll.innerText = rightSlot
    

    
    if (leftSlot === middleSlot && middleSlot === rightSlot){
       if (leftSlot === 'apple'){
        message.innerText = 'You Win'
        bank = bank + (bet * 10)
       } else if (leftSlot === 'lemon'){
        message.innerText = 'You Win'
        bank = bank + (bet * 10)
       } else if (leftSlot === 'orange'){
        message.innerText = 'You Win'
        bank = bank + (bet * 50)
       } else if (leftSlot === 'watermelon'){
        message.innerText = 'You Win'
        bank = bank + (bet * 100)
       } else if (leftSlot === 'cherry'){
        message.innerText ='You Win'
        bank = bank + (bet * 1000)
       }
    } else {
        message.innerText = 'Tough luck!'
    }
    bet = 0
 
   }
   let winnings = document.querySelector('.toSeeWinnings')
   winnings.innerText = bank

   let lastBet = document.querySelector('.betPool')
   lastBet.innerText = bet

  

} 