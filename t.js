function addTwoNumbers () {
document.getElementById ("mybutton").onclick = function () {
   
let firstname ;
let secondname;

               firstname = document.getElementById ("textname").value ;
    console.log(firstname);
    secondname = document.getElementById ("textname1").value ;
    console.log(secondname);
    document.getElementById ("id").innerHTML = "The sum of " + firstname + " " + "and " + secondname + " " + "is:" ;

    var num1 = document.getElementById ("textname").value ;
    var num2 = document.getElementById ("textname1").value ;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById("answer").textContent = num1 + num2 ;


                firstname = document.getElementById ("textname").value ;
    console.log(firstname);
    secondname = document.getElementById ("textname1").value ;
    console.log(secondname);
    document.getElementById ("id1").innerHTML = "The difference of " + firstname + " " + "and " + secondname + " " + "is:" ;

    var num1 = document.getElementById ("textname").value ;
    var num2 = document.getElementById ("textname1").value ;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById("answer1").textContent = num1 - num2 ;

               firstname = document.getElementById ("textname").value ;
    console.log(firstname);
    secondname = document.getElementById ("textname1").value ;
    console.log(secondname);
    document.getElementById ("id2").innerHTML = "The product of " + firstname + " " + "and " + secondname + " " + "is:" ;

    var num1 = document.getElementById ("textname").value ;
    var num2 = document.getElementById ("textname1").value ;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById("answer2").textContent = num1 * num2 ;


               firstname = document.getElementById ("textname").value ;
    console.log(firstname);
    secondname = document.getElementById ("textname1").value ;
    console.log(secondname);
    document.getElementById ("id3").innerHTML = "The quotient of " + firstname + " " + "and " + secondname + " " + "is:" ;

    var num1 = document.getElementById ("textname").value ;
    var num2 = document.getElementById ("textname1").value ;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById("answer3").textContent = num1 / num2 ;

}
}