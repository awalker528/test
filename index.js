
fetch("https://bible-api.com/john 3:16")
.then(response => text = response.json())
.then(text => verse = text.text)
.then(verse => console.log(verse))
.then(verse => document.querySelector("#newData").innerText = verse.toString())
