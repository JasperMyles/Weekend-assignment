// let age1 = 27;
// let age2 = 33;

// age1 >= age2 ? age1++ : age1--;

// console.log(age1);

// 1. The above code makes use of a ternary operator to check it a condition is true or false and run a particular operation based on that.
// Without going to the console to check. try to determine the answer just be looking at the above code.

//The answer is false age1 is not greate or equal to age age2 so the age1-- will run therefore age been 26.

// let students = ["mike", "kingsley", "sammy", "ovie", "ak", "juliet"];

// 2. create a random number and use that to pick out an item from the above Array.
// i want to be able to see a different name from the above array each time i refresh the page.

// let rn = Math.floor(Math.random() * 6)
// console.log(students[rn]);

// 3. filter the above and return a new array containing only names with i.
// log the filtered array to the consoloe.

// let Newnames = students.filter((each) => {
//     if (each.includes("i")) {
//         console.log(each);
//     }
// });

// let Newstudent = students.filter((student) => {
//     return student.includes("i")
// })
// console.log(Newstudent)

// 4. using the array method called map, map through the above array and return a new array with Hello in front of each item in the array.
// i should see this ['Hello - mike', 'Hello - kingsley', 'Hello - sammy', 'Hello - ovie', 'Hello - ak', 'Hello - juliet'] logged to the console.

// let newMap = students.map((name) => {
//     return "Hello - " + name;
// });
// console.log(newMap)
// 5. Attach an EventListener to a button that should start a countdown from 1 to 50 when clicked on.
// hint: use the setInterval to start the countdown and clearInterval to stop it in a setTimeout
// let bat = document.querySelector('.btn')
// console.log(bat);
// let num = 0;
// bat.addEventListener('click', () => {
//     let countDown = setInterval(() => {
//         num++;
//         console.log(num);

//     }, 1000);

//     setTimeout(() => {
//         clearInterval(countDown);
//         console.log("I stopped the interval");
//     }, 10000)
// })
// bat.addEventListener('click', () => {
//     setTimeout(3000)
// })

let data = [
    { name: "david", status: "Tutor", age: 60, isMarried: false },
    { name: "ovie", status: "Student", age: 40, isMarried: true },
    { name: "taiwo", status: "Student", age: 40, isMarried: true },
    { name: "samil", status: "Student", age: 19, isMarried: false },
    { name: "ak", status: "Student", age: 14, isMarried: true },
    { name: "david", status: "Student", age: 70, isMarried: true },
    { name: "juliet", status: "Student", age: 20, isMarried: false },
    { name: "eggy", status: "Tutor", age: 50, isMarried: true }
];

// 6. using a foreach, loop through the above data and log only the students that are married.

// let loopOVer = data.forEach((married) => {
//     if (married.isMarried == true && married.status == 'Student') {
//         console.log(`${married.name} is married`)

//     }
// })

// 7. using the map method to loop through the above data, add a new key and value to each of the object.
// the new key should be occupation and value should be 'Junior Dev' for all students and 'Senior Dev' for all the Tutors
// hint: use spread operators

let newData = data.map((each) => {
    if (each.status == "Tutor") {
        return {...each, occupation: "Snr Dev" };
    } else {
        return {...each, Occupation: "Jnr Dev" };
    }
});
console.log(newData)
    // 8. Read up on array methods such as map, foreach, reduce, find and filter.

// 9. Read up on objects.

// 10. Have a Wonderful Weekend.