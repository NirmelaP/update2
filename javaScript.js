//Här skapar jag en ny variabel som innehåller en aray.
var studenter = ['Ella', 'Bella', 'Anna', 'Lea','Selma', 'Maja' ];
// Här anropar jag en funktion som heter upptadetaOutput.
uppdateraOutput();

//Här skapar jag funktionen som heter uppdateraOutput.
function uppdateraOutput(){
//Här skapar jag en tom variabel som heter ootput.
var output = "";
//Här skapar jag for-loop metod som snurrar igenom min aray "var studenter"
for(i = 0; i< studenter.length; i++){
//Här skriver jag in data från loopmetoden som jag vill skriva ut på sidan.
    output += ("<p style='border: solid 1px black'>"+ studenter[i] + " [<span title='Ta Bort " + studenter[i]  +"' onclick='taBort("+ i+")'>X</span>]</br>")

}
//Här använder jag inbyggd metod för att koppla ihop önskad elemennt från HTML och ersätter med min variabel.
document.getElementById("output").innerHTML = output;
}

function addName(){
    var namn = document.getElementById("name").value;
    if(namn.length !=0){
    studenter[studenter.length] = namn;
    document.getElementById("name").value = "";
    uppdateraOutput();
    } 
}

function taBort(id){
    console.log("Ta bort: " + id);
    var studenterTemp = [];
    for(i = 0; i< studenter.length; i++){
        if(i != id){
            studenterTemp.push(studenter[i]);
        }
    }
    studenter = studenterTemp;
    uppdateraOutput();

}
