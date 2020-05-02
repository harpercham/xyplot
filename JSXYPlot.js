// JSXYPlot.js
window.onload = init;
 
const SOURCE_IMAGE = "data:image/jpeg;base64,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";
const SIZE = 10;  // width and height for the image
const MARGIN_LEFT = 15;  // left-margin for the container
const MARGIN_TOP  = 180; // top-margin for the container
// x, y coordinates of the items
const X_MIN = 0;
const Y_MIN = 0;
const X_MAX = 2480 ;
const Y_MAX = 3508 ;
const WIDTH = X_MAX - X_MIN + 1;
const HEIGHT = Y_MAX - Y_MIN + 1;
 
var numItems = 0;  // number of items created so far
 
// The onload handler. Initialize the bounds
function init() {
   var box = document.getElementById("box");
   box.style.top = MARGIN_TOP + "px";
   box.style.left = MARGIN_LEFT + "px";
   box.style.width = WIDTH + "px";
   box.style.height = HEIGHT + "px";
 
   document.getElementById("btnCreate").onclick = newItem;
   document.getElementById("btnUpdate").onclick = updateItem;
}
 
// Create a new item at x, y
function newItem() {
   // Need to parseInt as it will be added.
   var x = parseInt(document.getElementById("newX").value);
   var y = parseInt(document.getElementById("newY").value);
   var displayX = x + MARGIN_LEFT;
   var displayY = y + MARGIN_TOP;
   if ((x >= X_MIN) && (x <= X_MAX) && (y >= Y_MIN) && (y <= Y_MAX)) {
      numItems++;
      // Put up an <img> to represent the item
      var itemImg = "<img class='item' name='item' src='"
            + SOURCE_IMAGE + "' style='width:" + SIZE
            + "px; height:" + SIZE + "px; top:" + displayY
            + "px; left:" + displayX + "px' />";
 
      // Put up a <p> for the item description
      var itemDesc = "<p class='itemDesc' name='itemDesc' style='top:"
            + displayY + "px; left:" + displayX
            + "px'>" + numItems + "</p>";
 
      document.getElementById('allItems').innerHTML += itemImg + itemDesc;
      // add a form's select option
      document.getElementById('updateNo').innerHTML
            += "<option>" + numItems + "</option>";
   }
}
 
// Update the position of itemNo to x, y
function updateItem() {
   var x = parseInt(document.getElementById("updateX").value);
   var y = parseInt(document.getElementById("updateY").value);
   var itemNo = document.getElementById("updateNo").value - 1;
 
   var items = document.getElementsByName("item");
   var itemDescs = document.getElementsByName("itemDesc");
   if (itemNo < items.length
       && (x >= X_MIN) && (x <= X_MAX) && (y >= Y_MIN) && (y <= Y_MAX)) {
      items[itemNo].style.left = x + MARGIN_LEFT + "px";
      items[itemNo].style.top  = y + MARGIN_TOP + "px";
      itemDescs[itemNo].style.left = x + MARGIN_LEFT + "px";
      itemDescs[itemNo].style.top  = y + MARGIN_TOP + "px";
   }
}









//zoom image

function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /* Set background properties for the result DIV */
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /* And also for touch screens: */
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}