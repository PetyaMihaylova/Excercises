// task: Calculate Readability Score using ARI
// Description: You are tasked with creating a JavaScript function that calculates the Automated Readability Index (ARI) 
// score and corresponding grade level for a given text passage. The ARI score indicates the readability level of the text 
// based on its characters, words, and sentences.
// Skills Needed:
// Understanding of for loops to iterate over characters in a string.
// Utilization of string methods to manipulate and analyze the input text.
// Implementation of if-else statements to handle conditions and calculations.
// Requirements:
// Create a function named calculateARI that takes a text passage as its argument.
// Count the number of characters, words, and sentences in the text.
// Calculate the ARI score using the provided formula: ARI = 4.71 * (characters/words) + 0.5 * (words/sentences) - 21.43
// Determine the corresponding grade level according to the ARI scale (see below).
// Return a string containing the ARI score and the corresponding grade level.
// ARI Scale:

// If the calculated ARI score is less than 1, the grade level is "Kindergarten". if (ARI <1){console.log 'Kindergarten grade level'}
// If the score is between 1 and 3, the grade level is "Elementary School". else if (ARI>1 && ARI<3){console.log 'Elementary School grade level'}
// If the score is between 4 and 7, the grade level is "Middle School". else if (ARI>4 && ARI<7){console.log 'Middle School grade level'}
// If the score is between 8 and 10, the grade level is "High School". else if (ARI>8 && ARI<10){console.log 'High School grade level'}
// If the score is between 11 and 12, the grade level is "College". else if ((ARI>11 && ARI<12){console.log 'College grade level'})
// If the score is above 12, the grade level is "Professor". else if (ARI>12){console.log 'Professor grade level'}

// const ARI = 4.71 * (characters/words) + 0.5 * (words/sentences) - 21.43




const passage = "The Little Prince is an amazing 1974 British-American sci-fi fantasy-musical film! Are you sure? It had screenplay and lyrics by Alan Jay Lerner, music by Frederick Loewe, arranged and orchestrated by Angela Morley. It was both directed and produced by Stanley Donen and based on the 1943 classic children-adult's novella, The Little Prince (Le Petit Prince), by the writer, poet and aviator Count Antoine de Saint-Exupéry, who disappeared near the end of the Second World War some 15 months after his fable was first published."

    function calculateARI(passage) {
const arrayOfWords = passage.split(' ') 
// console.log(arrayOfWords, 'Array of Words')
const numberOfWords = arrayOfWords.length 
console.log(numberOfWords, 'Number of Words')
const arrayOfSentences = passage.split('.'|| '!' || '?') //here we need ? and !
const numberOfSentences = arrayOfSentences.length
console.log(numberOfSentences, 'Number of Sentences')

    
    let numWords = 0;
    let numChars = 0;
    let numSent = 0;

    // arrayOfWords.forEach(word => numWords++)
    // console.log(numWords, 'Number of Words')
    
    //  arrayOfSentences.forEach(sentence => numSent++)
    // console.log(numSent, 'Number of Sentences')

    for (let i = 0; i < arrayOfWords.length; i++) {
        console.log(numChars++);
    }
   return(numChars, 'Number of Characters')
   }

  


 console.log(calculateARI(passage))