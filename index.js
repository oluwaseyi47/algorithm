const sentence = "I will work for google someday."
const vowels ={
    a: "a",
    e:"e",
    i:"i",
    o:"o",
    u :"u"
}

function algo (sentence) {
    let lengthOfWords= 0;
    let numWords = 1;
    let numOfVowels = 0;

    for (let i = 0; i < sentence.length; i++) {
        if(sentence[i] === " ") {
            numWords ++
        }
       if (sentence[i] in vowels) {
           numOfVowels++
       }
       lengthOfWords++
    }
    return{
        lengthOfWords,
        numWords,
        numOfVowels
    }
}

console.log(algo(sentence))



console.log(algo(sentence))