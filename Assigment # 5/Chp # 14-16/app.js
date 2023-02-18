// Question # 1

// var studentsnames = [];

// Question # 2

// studentsnames.push("ali");
// studentsnames.push("adnan");

// console.log(studentsnames);

// Question # 3

// let names = ["ali" , "nafay" , "shahid"];

// console.log(names);

// Question # 4

// var names = ["nafay"];

// names[1] = "shahid"
// names[2] = "abdul"
// names[3] = "majeed"

// console.log(names);

// Question # 5

// boolArray = ["true" , "false" ,"true"]

// Question # 6

// let mixedArray = [1, hello,];

// console.log(mixedArray);

// Question # 7

// var Qualifications = ["All Given Education"];
// Qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil." , "PhD"];

// document.write(Qualifications [0] + " <br/> ");
// document.write(Qualifications [1] + " <br/> ");
// document.write(Qualifications [2] + " <br/> ");
// document.write(Qualifications [3] + " <br/> ");
// document.write(Qualifications [4] + " <br/> ");
// document.write(Qualifications [5] + " <br/> ");
// document.write(Qualifications [6] + " <br/> ");
// document.write(Qualifications [7] + " <br/> ");

// Question # 8

// var totalMarks = ["500"];
// var studentsMarks = ["320" , "230" , "480"];
// var studentsNames = ["Ali" , "Nafay" , "Shahid"];
// // var percentage = [ studentsMarks *100 %totalMarks ]
// document.write = ("Ali Scored" + studentsMarks + "out of" + totalMarks, + "Which is" )


// Question 8

//  var student = ["Nafay" , "Kamil" , "Ausaf"];
//  var score = [ 450 , 380 , 350];
//  var p1 = ((score[0])/500) * 100;
//  var p2 = ((score[1])/500) * 100;
//  var p3 = ((score[2])/500) * 100;

// document.write("Score of Nafay is " + score[0] +". Percentage: " + p1 + "%" + "</br>");
// document.write("Score of Kamil is " + score[1] +". Percentage: " + p2 + "%" + "</br>");
// document.write("Score of Ausaf is " + score[2] +". Percentage: " + p3 + "%"  + "</br>");
// document.write("</br>")

// Question 9

//  document.write("<h2> Intial List</h2>");
//  var colourNames = [" Orange " , " Blue " , " Black " , " Green " , " Yellow " , " White "];
//  document.write(colourNames);

 // A
//  document.write("</br>");
//  document.write("<h2> Added colour in the begining</h2>");
//  var startNewColour = prompt("What colour do you want to add in the begining?");
//  colourNames.unshift( startNewColour);
//  document.write(colourNames);

// B
//  document.write("</br>");
// document.write("<h2> Added colour in the end</h2>");
// var endNewColour = prompt("What colour do you want to add in the end?");
// colourNames.push(endNewColour);
// document.write( colourNames );

// C
// document.write("</br>");
// document.write("<h2> Added two new colours in the begining</h2>");
// colourNames.unshift(" Indigo ");
// colourNames.unshift(" Teal ");
// document.write(colourNames);

// D
// document.write("</br>");
// document.write("<h2> Deleted a colour in the begining</h2>");
// colourNames.shift();
// document.write(colourNames);

// E
// document.write("</br>");
// document.write("<h2> Deleted a colour in the end</h2>");
// colourNames.pop();
// document.write(colourNames);

// F

// document.write("</br>");
// document.write("<h2>Added colours at the desired position </h2>");
// var positionC = prompt("At which position do you want to add a new colour?")
// var nameColour = prompt("Enter the name of colour at desired position.");
// if(positionC = colourNames.length){
//     colourNames.slice(positionC , 0 , nameColour)
//     document.write(colourNames);
// }
// else{
//     alert("Enter valid position!")
// };

// G

// document.write("</br>");
// document.write("<h2>Deleted colours from the desired position </h2>");
// var positionCEnd = +prompt("At which position do you want to start deleting the colours?");
// var numColourDel = +prompt("How many colours do you want to delete?");
// colourNames.splice(positionCEnd , numColourDel);
// document.write(colourNames);

// Question 10

// var scoresOfStudent = [320 , 230 , 480 , 120];
// var OrderedScoresOfStudent = [320 , 230 , 480 , 120].sort();


// document.write( "Scores of Student : "   +scoresOfStudent + "<br/>");
// document.write( "Ordered scores of Student : "   +OrderedScoresOfStudent);

// Question 11

// document.write("<h2> Cities List</h2>")
// var cities = [" Karachi " , " Islamabad " , " Lahore " , " Peshawar " , " Quetta "];
// document.write(cities);

// document.write("<h2> Selected Cities List</h2>");
// var selectedCities = cities.slice(1 , 4);
// document.write(selectedCities);

// Question 12

// var arr = ["This" , "is" , "my" ,"cat" ]
// document.write(arr.join(" "));

// Question 14

// LIFO

// var arr = new Array();
// arr.push('keyboard')

// var element = arr.pop();
// document.write(element + "<br/>");

// var arr = new Array();
// arr.push('Mouse')

// var element = arr.pop();
// document.write(element + "<br/>");

// var arr = new Array();
// arr.push('Printer')

// var element = arr.pop();
// document.write(element + "<br/>");

// var arr = new Array();
// arr.push('Monitor')

// var element = arr.pop();
// document.write(element + "<br/>");

// Question 15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
 
for (var i = 0; i < phoneManufacturers.length; i++){
    document.write("<option>" + phoneManufacturers[i] + "</option>")

}
document.write("</select>");















