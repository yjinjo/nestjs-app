console.log(this === global); // false

function a() {
  console.log(this === global); // true
}
a();
