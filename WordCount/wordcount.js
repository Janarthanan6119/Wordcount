// Print the text when the page is loading... 
window.onload = () => {
    let result = countWords();
    console.log(result);
  };
  
  // function to count the words in the 'text' variable
  function countWords() {
  
    let text =
      "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";
  
 // remove the dots and commas globally and 
 // convert the letters intyo lowercase
     text=text.replace(/[,.]/g).toLowerCase();
 // wordArray will split the words in the text variable... 
    const wordArray = text.split(" ");
  
    // This loop goes through the wordArray and creates the key value pair objects
    const wordCount = {};
 // foreach checks the each word..
 // if its the first word it can count the text as '1'...
 // if its the repeating word, it can increase the count... 
    wordArray.forEach((item) => {
      if (wordCount[item] == null) wordCount[item] = 1;
      else {
        wordCount[item] += 1;
      }
    });
  
    // Turn objects into an array of arrays
    let myArray = Object.entries(wordCount);
    let bArray= myArray.sort(function(a, b)
    {
      return b[1] - a[1]
    }); 
    
    
    bArray=bArray.slice(0,6);
    
    return bArray;
    // return the first three most common words.
  }
  