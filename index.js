class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }
  
  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear() -1 
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  blocksTravelled() {
    return  this.endingLocation.vertical - this.beginningLocation.vertical
  }
}

// let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})