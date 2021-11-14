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


//Här skapar jag ny funktion addName som har uppgift att lägga till namn.
function addName(){
   
    //Här hämtar man information som användaren skriver in. 
    var namn = document.getElementById("name").value;
    //Här använder jag if condition som gör att om input är lika med 0 dvs om man har skrivit 
    //något så körs denna.
    if(namn.length !=0){
    //Här läggs det till värde från användarens i slutet av en aray.
    studenter[studenter.length] = namn;
    document.getElementById("name").value = "";
    //Här uppdateras aray med nytt namn.
    uppdateraOutput();
    } 
}

//Här skapar jag funktion som tar bort namn med perametr "id"".
function taBort(id){
    //console-log inbyggd funktion förr att testa om funktion funkar
    console.log("Ta bort: " + id);
    //skapar en tom temperör variabel
    var studenterTemp = [];
    //för-loop metod att snurra genom array
    for(i = 0; i< studenter.length; i++){
        //om id innte sämmer används push metod att radera namn
        if(i != id){
            //sparar nya array i den temperöra arrayen
            studenterTemp.push(studenter[i]);
        }
    }
    //updater array
    studenter = studenterTemp;
    uppdateraOutput();

}
