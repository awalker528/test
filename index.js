async function bibleVerse(){
   await fetch("https://bible-api.com/john 3:16")
    .then(response => text = response.json())
    .then(text => verse = text.text)
    .then(verse => document.querySelector("#newData").innerHTML = verse.toString())
    .then(verse => console.log(verse))
    

}
