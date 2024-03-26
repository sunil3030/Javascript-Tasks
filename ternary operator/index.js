// var floorinfo=prompt("Enter your need ")

// floorinfo=="toy section" ? document.write(floorinfo +"  1st Floor") :
// floorinfo=="dress section" ? document.write(floorinfo +"  2nd floor"):
// floorinfo=="theatre" ? document.write(floorinfo +"  3rd floor") :
// floorinfo=="restaurent" ? document.write(floorinfo+ "  4th floor") :
// document.write( floorinfo + "  Enter the valid section <br/> toy section, <br/> dress section, <br/> theatre, <br/> restaurent " )

// var discount=prompt("Enter your Amount")

// discount>=100 ? document.write("your discount amount is 20 Rs"):
// discount>=50 ? document.write("your discount amount is 10 Rs"):
// discount<=50 ? document.write("no more discount for this purchase"):
// document.write("Please  Enter your amount");

var day=prompt("Enter the day");

day=="monday" || "tuesday" || "wednesday" || "thursday" || "friday" ? document.write(day+ "  is weekday"):
day=="saturday" || "sunday" ? document.write(day+ " is weekend"):
document.write("Please Enter the day");