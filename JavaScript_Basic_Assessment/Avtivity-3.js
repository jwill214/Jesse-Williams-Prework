
//Activity 3

// #1)Start off by creating an array with three student names.
const namelist=['Tkeyah','Janay','Jesse']

// #2) & #3) Create a loop that will prompt the user for three more names. After every user input, store the new name into the array.
while (namelist.length<6) {
const newname=prompt('Enter Name');
namelist.push(newname)
}

// #4) Create a new loop that will iterate through the array and console log each element of the array.

for (let i=0; i<namelist.length; i++) {
    console.log(namelist[i])
}
