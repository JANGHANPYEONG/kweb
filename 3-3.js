const ellipse = {
  width: 10,
  height: 5,
  getArea() {
    return Math.PI * this.width * this.height;
  },

  getArea() {
    return Math.PI * this.width * this.height
  },

  getPerimeter() {
    return Math.PI * 2 * Math.sqrt((Math.pow(this.width, 2) + Math.pow(this.height, 2))/2)
  },

  getEccentricity() {
    return Math.sqrt(1 - (Math.pow(this.height, 2) / Math.pow(this.width, 2)));
  }

};