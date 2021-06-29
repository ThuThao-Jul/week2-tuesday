//Assignment 5
// for ( i=1;i<=5;i++){
//     console.log(Math.ceil(Math.random()*2))
// }



// function getRandomInt(){
//   return Math.floor(Math.random()*10)
// }
// for (i=1;i<=100;i++){
//     console.log(getRandomInt())
// }


function getRandomInt(start,end){
   let addition= Math.floor(Math.random()*(end-start+1))
   result=start+addition
   return result
}
// console.log(getRandomInt(5,9))

// let Fruit=["orange","apple","kiwi"]
// function GetRandomItem(Fruit){
//     return Fruit[Math.floor(Math.random()*Fruit.length)]
// }
// console.log(GetRandomItem(Fruit))


//Assignment 6

// function pyd(n){
// for (row=1; row<=n;row++){
//     let s=""
//     for (column=1; column<=row; column++){
//         s=s+row+" "
//     }
//     console.log(s)
// }
// }
// pyd(5)


// let lineA= "# # # #"
// lineB=" # # # #"
// j=0
// function grid(){
// for (i=1;i<=4;i++){
//    console.log(lineA);
//    if (j<=4) {
//        j=i+1
//        console.log(lineB)
//    }
// }
// }
// grid()


//Assignment 7

// let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
// for (i=0, paid=0; i<workingHours.length;i++){
//     paid=25*workingHours[i]
//     console.log(`Peter earned $ ${paid} today`)
// }


// for (i=0, paid=0,s=0; i<workingHours.length;i++){
//     paid=25*workingHours[i]
//     s=s+paid
//     console.log(`Peter earned $ ${paid} today`)
// }
// console.log(s)


// function EstimatedRevenue(NoofWeek){
// let workinghoursThisYear=[]
// for (week=1, paid=0,income=0,i=0;week<=NoofWeek;week++,i++){
// workinghoursThisYear.push(getRandomInt(6,8))
// paid=25*workinghoursThisYear[i]
// income=income+paid
// }
// console.log(`Peter's estimated yearly income is $ ${income}`)
// }
// EstimatedRevenue(40)


//Assignment 8

// function getLeapYears(start,end){
// for (year=start; year<=end; year++){
//     if (year%4==0 || year%400==0){
//         console.log(year)
//     }
// }
// }
// getLeapYears(1900,2013)



// function reverseArray(Array){
// x=Array.length
// for (i=0; i<x; i++){
//     y=Array.splice(x-i-2,1)
//     Array.push(y)
// }
// console.log(Array)
// }


// let evenNumbers=[]
// oddNumbers=[]
// for (i=1;i<=100;i++){
//     x=getRandomInt(0,101);
//     if (x%2==0){
//     evenNumbers.push(x)
//   } else {
//     oddNumbers.push(x)} 
// }
// console.log(evenNumbers)
// console.log(oddNumbers)

