const content = document.getElementById("content")

fetch("https://cataas.com/cat")
     .then(res => res.blob())
     .then(res => {
         const url = URL.createObjectURL(res)
         const img = document.createElement("img");
         img.src = url
         content.appendChild(img)
     })
     .catch(err => {
         console.log(err)
     })