const button = document.querySelector("button")
button.addEventListener("click", getFetch)

const infoCard = document.querySelector("#info")
infoCard.classList.add("hide-card")
// const cardType = document.querySelector("#choice-of-card").value

// if(cardType === spells){
//   button.innerText = "get spell"
// }else if(cardType === monsters){
//   button.innerText = "get monster"
// }

function getFetch(){
    const cardName = document.querySelector("input").value
    const cardType = document.querySelector("#choice-of-card").value

    const url = `https://www.dnd5eapi.co/api/${cardType}/${cardName}`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if(data.name === undefined){
          infoCard.classList.add("hide-card")

        }else {
        console.log(data)
        infoCard.classList.remove("hide-card")

        document.querySelector("h2").innerText = "Name:" + data.name
        document.querySelector("h3").innerText = "Class:" + " " + data.classes[0].name
        document.querySelector("h4").innerText = "subclass:" + " " + data.subclasses[0].name
        document.querySelector("p").innerText = data.desc[0]
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}