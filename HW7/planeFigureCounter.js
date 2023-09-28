// Export the count module.
exports.count = {
  squareArea: function (side) {
    return "Square Area is : " + side ** 2;
  },
  squarePerimeter: function (side) {
    return "Square Perimeter is : " + side * 4;
  },
  rectangleArea: function (width, length) {
    return "Rectangle Area is : " + width * length;
  },
  rectanglePerimeter: function (width, length) {
    return "Rectangle Perimeter is : " + (width + length) * 2;
  },
};
