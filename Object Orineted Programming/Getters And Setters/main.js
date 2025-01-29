class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.log("Enter Valid Number");
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.log("Enter Valid Number");
    }
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
}

const Rec = new Rectangle(10, 20);
Rec.width = 6;
Rec.height = 9;
console.log(Rec.width)