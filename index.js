
// Code your solution here

// const couponLocations = 
// [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
// ];
  
//   function ourReduce(arr, reducer, init) {
//       let accum = init;
//       for (const element of arr) {
//           accum = reducer(accum, element);
//       };
//       return accum;
//   }
  
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }
  
//   console.log(ourReduce(couponLocations, couponCounter, 0));



// const doubledAndSummedFromTen = [1, 2, 3].reduce
// (
//     function(accumulator, element)
//     { 
//         return element * 2 + accumulator
//     }, 10
// )

// const hogwartsHouses = 
// {
//     "Slytherin": [],
//     "Gryffindor": [],
//     "Hufflepuff": [],
//     "Ravenclaw": []
// }

// //sortingHat.assign(studentName) -> takes the name of a student as its argument and returns the name of the house the student should be assigned to.
// //incomingStudents = array of students [hermioneGranger, ronWeasley, harryPotter]

// incomingStudents.reduce(function(houses, student) { houses[sortingHat.assign(student)].push(student)}, hogwartsHouses)

//     incomingStudents.reduce /*The array.reduce*/
//     ( 
//         function(houses,/*The accumulator*/ student/*The element*/)  /* The reducer*/ 
//         { 
//             houses[sortingHat.assign(student)].push(student)
//             /* return houses[] + student */
//         },
//         hogwartsHouses /* The init */
//     )

//     incomingStudents.reduce
//      /* [hermioneGranger, ronWeasley, harryPotter].reduce */ 
//     (
//         function(houses/* ["Slytherin": [], "Gryffindor": [], "Hufflepuff": [], "Ravenclaw": [] ]*/, student/*hermioneGranger*/)
//         { 
//             // let init = accumulator
//             /* let hogwartsHouses = houses */
//             /*houses = ["Slytherin": [], "Gryffindor": [], "Hufflepuff": [], "Ravenclaw": [] ] */

//             //First cycle of the loop 
//             houses[sortingHat.assign(student)]
//             //sortingHat.assign(hermioneGranger) returns "Gryffindor"
//             /* With this return, houses["Gryffindor"] key is invoked. */
//             //Since its the beginging of the new school year, House Gryffindor is currently empty ("Gryffindor": []). 
//             /* Therefore, returns an empty array. (houses["Gryffindor"] = [];) */
            
//             .push(student)/*hermioneGranger*/
//             //.push(hermioneGranger)
//             // Combining these two params, and we have houses["Gryffindor"].push(hermioneGranger)
//             /* empty House Gryffindor [] + hermioneGranger = Gryffindor with [hermioneGranger]*/
//              /* AKA hermioneGranger within House Gryffindor! */
//              /* ["Slytherin": [], "Gryffindor": [hermioneGranger], "Hufflepuff": [], "Ravenclaw": [] ] */
//         }, 
//         hogwartsHouses/* init*/ 
//         /* hogwartsHouses = ["Slytherin": [], "Gryffindor": [], "Hufflepuff": [], "Ravenclaw": [] ]*/
//         //currently all houses are empty since no student are assigned yet.
//     )

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(sum, batch){return sum + batch}, 0)