const a = document.querySelector(".players")
const b = document.querySelector(".singlepuppy")


let players = []

window.addEventListener ("hashchange", () => {
    render()
})


async function getplayers () {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    const main = await response.json()
    players = main.data.players
    render()
}


async function render() {
    const puppieslist = players.map((puppy) => {
        return `<a href=#${puppy.name} class="tag"> ${puppy.name} </a>`
    })
    

    const name = window.location.hash.slice(1)
    console.log(name)

    

    const singlepuppy = players.find((puppy) => {
        return puppy.name === name
    })
    console.log(singlepuppy)



    // a.innerHTML = "<h1>Puppies</h1>" + puppieslist.join("")
    a.innerHTML = singlepuppy ? "" : "<h1>Puppies</h1>" + `<div class="container"> ${puppieslist.join("")} </div>`


    if(singlepuppy){
        b.innerHTML = `
        <h1>Selected Puppy</h1>
        <div class="body">
        <p id="singlepuppyname">${singlepuppy.name}</p>
        <p>Breed: ${singlepuppy.breed}</p>
        <p>Status: ${singlepuppy.status}</p>
        <p>Team Id: ${singlepuppy.teamId}</p>
        <img src=" ${singlepuppy.imageUrl} "/>
        </div>
        ` + `<div class="returnbutton"> <a href=#>Back</a> </div>`
    }
    else {
        b.innerHTML = "" //kermel em7e ma3loumet el selected puppy bas a3mol back
    }

      

  
}


getplayers()