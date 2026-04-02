/*------------------------------------Amazon Name Card------------------------------------*/

//object
const Product = {
    Title : "Ball Pen",
    Ratting : 4,
    RattingCount : 7002,
    Deal : true,
    Badge : "Deal of the day",
    Price : 275,
    MRP : 300,
    Off_Percentage : 5
};

// Set Title
document.getElementById("title").innerText = Product.Title;

// Generate Stars ⭐
let stars = "";
for(let i = 1; i <= 5; i++){
    stars += (i <= Product.Ratting) ? "★" : "☆";
}
document.getElementById("stars").innerText = stars;

// Rating count
document.getElementById("count").innerText = Product.RattingCount;

// Deal Badge
if(Product.Deal){
    document.getElementById("deal").innerText = Product.Badge;
} else {
    document.getElementById("deal").style.display = "none";
}

// Price
document.getElementById("price").innerText = "₹" + Product.Price;
document.getElementById("mrp").innerText = "M.R.P.: ₹" + Product.MRP;
document.getElementById("off").innerText = "(" + Product.Off_Percentage + "% off)";