//creating array of 10 numbers

Array10 =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log(Array10);

//deleting last 2 elements 

Array10.pop(8);
Array10.pop(9);
console.log(Array10);

//change into an array p\of animals

Array10[0] = "Gorilla"
Array10[1] = "Butterfly"
Array10[2] = "Elephant"
Array10[3] = "Dolphin"
Array10[4] = "Cheetah"
Array10[5] = "Koala"
Array10[6] = "Penguin"
Array10[7] = "Kangaroo"
Array10[8] = "Octopus"
Array10[9] = "Lion"
console.log(Array10);

//conditions

console.log("enter student's score (0-100):");

const score = 0

if( score>=70 && score <=100 ){
    console.log("Grade: A");
} else if(score>=60){
    console.log("Grade: B ");

}else if(score>=50){
    console.log("Grade: C ");
}else if(score>=45){
    console.log("Grade: D ");
}else if(score>=40){
    console.log("Grade: E ");
}else if(score>=0){
    console.log("Grade: F ");
}else {
    console.log("invalide score");
}

