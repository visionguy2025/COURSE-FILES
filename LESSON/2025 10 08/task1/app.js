const arr1 = [
    {
        ageStat: '13',
        drinks: ['whiskey', 'tequila'],
        menu: ['doner', 'pizza']
    },
    {
        ageStat: '18',
        drinks: ['cola', 'fanta', 'sprite'],
        menu: ['burger']
    },
    {
        ageStat: '0',
        drinks: ['su', 'cay', 'kofe'],
        menu: ['sogan', 'pendir', 'corek']
    }
]

let selectionAge
window.addEventListener('click', () => {
    selectionAge = prompt('Age: ')

    if(selectionAge > 18) {
        console.log("Ickiler: " + arr1[2].drinks)
        console.log("Yemekler: " + arr1[2].menu)
    } else if(selectionAge > 13 && selectionAge <= 18) {
        console.log("Ickiler: " + arr1[1].drinks)
        console.log("Yemekler: " + arr1[1].menu)
    } else {
        console.log("Ickiler: " + arr1[0].drinks)
        console.log("Yemekler: " + arr1[0].menu)
    }
})
