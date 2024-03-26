var data = prompt("Enter the value");

var reversetext=data.split("").reverse().join("");
// console.log(reversetext);

if(data==reversetext){
    document.write(data + " is a palindrome");
}
else{
    document.write(`${data} is not a palindrome`);
};

