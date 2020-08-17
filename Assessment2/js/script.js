function displayTable() {
    let cafes, places, temp = "", i = 1

    //------* Fetch cafes *------//
    fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json", {
        method: "GET"
    })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            cafes = data.cafes

            cafes.forEach((cafe) => {
                //------* Fetch places *------//
                fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json", {
                    method: "GET"
                })
                    .then((res) => {
                        return res.json()
                    })
                    .then(data => {
                        places = data.places
                        places.forEach((place) => {
                            if (cafe.location_id === place.id) {
                                temp += `<tr id="${place.id}">
                        <td class="column1">${i++}</td>
                        <td class="column2">${cafe.name}</td>
                        <td class="column3">${place.locality}</td>
                        <td class="column4">${place.postal_code}</td>
                        <td class="column5">${place.lat}</td>
                        <td class="column6">${place.long}</td>
                        </tr>`
                            }
                        })
                        document.getElementById("cafe-list").innerHTML = temp
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        })
        .catch(err => {
            console.log(err)
        })
}

displayTable()


//-----------------------------------------------* Search Filter *-----------------------------------------------//
let searchQuery = document.getElementById("search-query");

searchQuery.addEventListener('keyup', (e) => {
    let j = 1,
        query = e.target.value.toLowerCase(),
        cafes = document.querySelectorAll("td.column2")

    //------* Itertate through table row *------//
    cafes.forEach((cafe) => {
        if (cafe.innerHTML.toLowerCase().indexOf(query) === -1) {
            cafe.parentElement.style.display = "none"
        } else {
            cafe.parentElement.querySelector("td").innerHTML = j++
            cafe.parentElement.style.display = "table-row"
        }
    })
})