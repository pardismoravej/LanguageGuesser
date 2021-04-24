// define variables
const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const args = process.argv[2].toString();

// guessing the language
let detectedLang = franc(args);

if(detectedLang === 'und'){
    console.log("Could not match a language, try a longer text submission".red)
} else{
    let result = langs.where('3', detectedLang).name;
    console.log(result.green);
}

