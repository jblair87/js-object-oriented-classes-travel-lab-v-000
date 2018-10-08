class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1);
  }
  
}


class Route {
  constructor (beginningLocation, endingLocation)
  {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  avenueToInteger(avenue){
      return eastWest.indexOf(avenue);
}
blocksTravelled(){
      let horizontalDistance =       
      this.avenueToInteger(this.endingLocation.horizontal) -
          this.avenueToInteger(this.beginningLocation.horizontal);
      let verticalDistance =
   this.avenueToInteger(this.beginningnLocation.vertical) -
 this.avenueToInteger(this.endingLocation.vertical);
}

}
