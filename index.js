// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger
    }
    return gifts
}
wrapGifts(gifts)

function writeCards(cards, string) {
    const array = []
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
        array.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return array
    
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
}
console.log(countDown(10))