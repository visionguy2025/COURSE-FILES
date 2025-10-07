// ================================# PRACTICE #================================
// var a = 'awhdvoayubwcdaw'

// try {
//     console.log(
//         Number(a) ? a : '123123'
//     )
//     console.log(
//         Number(a) || 'nope'
//     )
// } catch (error) {
//     console.log(error)
// }



// ================================# TASK 1 #================================
let arr1 = [
    {
        firstname: 'Puawnd',
        lastname: 'Aoinfw',
        age: 20
    },
    {
        firstname: 'John',
        lastname: 'Smith',
        age: 30
    },
    {
        firstname: 'Lorem',
        lastname: 'Ipsum',
        age: 40
    },
]

function randomBGcolor() {
    let newColor = `rgb(
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)}
    )`
    return newColor
}

function loadContainer() {
    let contents = ``
    for (let profileID=0; profileID<arr1.length; profileID++) {
        contents += `
            <div class="userCard">
                <div style="background-color: ${randomBGcolor()}"></div>
                <p> ${arr1[profileID].firstname} ${arr1[profileID].lastname} </p>
                <p> Age: ${arr1[profileID].age} </p>
                <br>
                <p> ID: #${profileID}
            </div>
        `
    }
    document.querySelector('.container').innerHTML = contents
}

document.addEventListener('DOMContentLoaded', loadContainer())

function add_new() {
    let newUser = {
        firstname: prompt('Firstname: '),
        lastname: prompt('Lastname: '),
        age: Number(prompt('Age: '))
    }

    arr1.push(newUser)

    loadContainer()
}

function remove_profile() {
    let selectedUserID = Number(prompt('Enter ID: '))

    if(confirm()) {
        arr1 = arr1.filter(
            (profile, index) => {return index != selectedUserID}
        )
    
        loadContainer()
    }
}



// ================================# TASK 2 #================================
// console.log(
//     arr1[arr1.length-1].firstname,
//     arr1[arr1.length-1].lastname,
//     arr1[arr1.length-1].age
// )



// ================================# TASK 3 #================================
// arr1[0].status = 'K.I.A.'
// console.log(arr1)



// ================================# TASK 4 #================================
// .



// ================================# TASK 5 #================================
// arr1.shift()
// console.log(arr1)
// arr1.pop()
// console.log(arr1)
