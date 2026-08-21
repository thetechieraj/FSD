let car = {
   make: "Toyota",
   model: "Camry",
   year: 2020,
   displayInfo: function() {
       return this.make + " " + this.model + " (" + this.year + ")";
   }
};
console.log(car.displayInfo()); // Output: Toyota Camry (2020)