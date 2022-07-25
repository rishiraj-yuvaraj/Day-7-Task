//1. Class Movie

//a.Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values

// class movie{
//     constructor(title,studio,rating){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }
// let movie1 = new movie("vikram", "red giant", "4.5");
// console.log(movie1)


//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided

// class movie{
//     constructor(title,studio,rating){
//         this.title = title;
//         this.studio = studio;
//         //this.rating = rating;
//         if(rating==null){
//             return this.rating = "PG"
//         }
//         else{
//             return this.rating = rating
//         }
//     }
// }
// let movie1 = new movie("vikram", "red giant", "4.5");
// console.log(movie1);
// let movie2 = new movie("Shiva", "no good");
// console.log(movie2);
// let movie3 = new movie("tamil", "blue", "PG3")
// console.log(movie3);


//c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.


// class movie{
//     constructor(title,studio,rating){
//         this.title = title;
//         this.studio = studio;
//         //this.rating = rating;
//         if(rating==null){
//             return this.rating = "PG"
//         }
//         else{
//             return this.rating = rating
//         }
      
//     }  
//     getPg(array){
//         let result = array.filter((element) => element.rating=="PG");
//         return result;
//     }
// }

// let movie1 = new movie("vikram", "redgiant", "4.5");
// let movie2 = new movie("shiva", "bluegiant");
// let movie3 = new movie("Kaithi", "greengiant", "5");
// const array = [movie1,movie2,movie3];

// console.log(movie1.getPg(array));



//d.Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

// class movie{
//     constructor(title, studio, rating){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }
// let movie1 = new movie("Casino Royale", "Eon Productions", "PG13");
// console.log(movie1);


//2.Convert the UML diagram to Typescript class. - use number for double
//not completed

// class circle{
//     constructor(radius, color){
//         this.radius = radius;
//         this.color = color;
//     }
// }


//3.Write a “person” class to hold all the details.

// class person{
//     constructor(name,dpt,institute){
//         this.name = name;
//         this.dpt = dpt;
//         this.institute = institute;
//     }
//     getDetails(){
//         return (`The Name is ${this.name} and doing ${this.dpt} in ${this.institute}`)
//     }
// }
// let person1 = new person("Rishi", "Full Stack", "Guvi");
// let person2 = new person("Raj", "Python", "Zen");
// console.log(person1.getDetails());
// console.log(person2.getDetails());



//4. write a class to calculate the uber price.

// class uber{
//     constructor(distance,rate,waitingcharge){
//         this.distance = distance;
//         this.rate = rate;
//         //this.waitingcharge = waitingcharge;
//         if(waitingcharge==null){
//             return(this.waitingcharge="5");
//         }
//         else{
//             return(this.waitingcharge=waitingcharge);
//         }
//     }
//     setDistance(dist){
//         return(this.distance = dist);
//     }
//     getDistance(){
//         return(`The distance is ${this.distance} and the rate is ${this.rate} waiting charge is ${this.waitingcharge}`)
//     }
//     getPrice(){
//         return(` The Total Price of ride is ${this.distance*this.rate + this.waitingcharge}`);
//     }
// }
// let uber1 = new uber("200", "20", "15");
// let uber2 = new uber("300", "20", "15");
// let uber3 = new uber("300", "20");
// uber1.setDistance(150);
// console.log(uber1.getPrice());