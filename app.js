// JIN TAK

var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');


  // =================================
  // Prompt #1: VIEW ALL RESTAURANTS
  // =================================
  // var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  // if(allChoice == "all"){
  //   collection.find().toArray(function(err, doc){
  //     console.log(doc);
  //   });
  // }else {
  //   console.log("Aw, you don't want to see the restaurants?");
  // }

  // ======================================
  // Prompt #2: VIEW SPECIFIC RESTAURANT
  // ======================================
  // var specificChoice = prompt("Enter name of restaurant you wish to view: ");
  
  // collection.find({ name: specificChoice}).forEach((restaurant)=>{
  //   console.log(restaurant);
  // });

  // ==================================
  // Prompt #3: INSERT NEW RESTAURANT
  // ==================================
  // let input = prompt("Would you like to insert a new restaurant? 'y' or 'n': ");
  // let answer = input.toLowerCase();

  // if(answer === 'y'){
  //   // Retrieve and save user input
  //   let name = prompt("What is the name of the restaurant?: ");
  //   let street = prompt("What is address restaurant?: ");
  //   let zipcode = Number(prompt("What is the zip code of the restaurant?: "));
  //   let yelp = prompt("What is the restaurant's yelp address?: ");

  //   // Creating  new restaurant object with user's values
  //   let newRestaurant = {
  //     name: name,
  //     address: { 
  //       street: street,
  //       zipcode: zipcode,
  //     },
  //     yelp: yelp
  //   }
    
  //   // INSERT new restaurant into database
  //   collection.insert(newRestaurant);

  // } else console.log("END SESSION.");

  // collection.find().toArray(function(err, restaurants){
  //   console.log(restaurants);
  // });

  // ================================
  // Prompt #4: UPDATE RESTAURANT
  // ================================
  //   let input = prompt("Would you like to update a restaurant? 'y' or 'n':  ");
  //   let answer = input.toLowerCase();

  //   if(answer === 'y'){
  //     let updateRestaurant = prompt("Which restaraunt would you like to update? (Enter restaurant's name): ")
  //     let newName = prompt("What is the restaurant's new name?: ");
  //     let street = prompt("What is the restaurant's new address?: ");
  //     let zipcode = Number(prompt("What is the restaurant's new zip code?: "));
  //     let yelp = prompt("What is the restaurant's new yelp address?: ");


  //     // This function will create a new object with user's inputs, and update the desired restaurant
  //     collection.update({ name: updateRestaurant}, 
  //       {
  //         name: newName,
  //         address: {
  //           street: street,
  //           zipcode: zipcode
  //         },
  //         yelp: yelp
  //       }

  //     )} else {
  //     console.log("END SESSION.")
  //   }

  // collection.find().toArray(function(err, restaurants){
  //   console.log(restaurants);
  // });


  // ================================
  // Prompt #5: DELETE RESTAURANT
  // ================================
  // let input = prompt("Would you like to delete restaurants from the database? 'y' or 'n': ");
  // let answer = input.toLowerCase();

  // if(answer === 'y'){
  //   let restaurantName = prompt("Which restaurant(s) would you like to delete? (Enter restaurant's name): ");

  //   collection.remove({name: restaurantName});

  // } else {
  //   console.log("END SESSION.");
  // }

  // collection.find().toArray(function(err, restaurants){
  //   console.log(restaurants);
  // });

});