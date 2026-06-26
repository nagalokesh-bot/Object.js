<body>
    <button onclick="change1()">change</button>
    <h1 id="head">Naga Lokesh</h1>
    <br><br><br>

<button onclick="change2()">Change</button>
<h1 class="user"> Shashank </h1>
<h1 class="user"> Bhanu </h2>
<h1 class="user"> Akhil </h3>
<br><br><br><br>

<button onclick="change3()">CHANGE</button>
<h2>cricket</h2>
<h2>kabbadi</h2>
<h2> shuttel</h2>
<br><br><br><br>

 <button onclick="change4()">change</button>
    <h1 id="head1"> I AM AN INDIAN</h1>
    <br><br><br>

    <button onclick="change5()">Change</button>
<h1 class="politics">  NTR </h1>
<h1 class="politics"> YSR </h2>
<h1 class="politics"> KIRAN KUMAR</h3>

    <script>
        // DOCUMENT OBJECT MODEL(D O M)
        // FEATURES OF DOM 
        // i) TO MODIFY HTML ELEMENTS
        // ii) TO CHANGE STYLES
        // iii) TO HANDLE E-BELTS
        // DOM WILL COMES UNDER BOM 
        
        // // BROWSER OBJECT MODEL(B O M)
// BROWSER OBJECT MODEL ALLOWS JAVASCRIPT TO INTERACT WITH BROWSER.(OUTSIDE THE PAGE CONTENT,LIKE CONTROLING " BROWSER-WINDOW, LOCATION, HISTORY..")
// BOM OBJECTS :-
   //1) WINDOWS(GLOBAL OBJECT)
   //2) NAVIGATOR(INFORMATION ABOUT BROWSER)
   //3) SCREEN(INFORMATION ABOUT SCREEN RESOLUTION)
   //4)HISTORY(ABOUT BROWSER HISTORY)
   

// DOM TREE:- WHENEVER BROWSER LOADS AN HTML FILE OR CODE IT CREATES A TREE LIKE STRUCTURE, THAT STRUCTURE IS NOTHING BUT A DOM TREE.

// DOM SELECTORS:-
        // 1)document.getElementbyid()
        // 2)document.getElementbyclassname()
        // 3)document.getElementbyTagname()
        // 4)document.querySelector()
        // 5)document.querySelcotorALL()

        
 // 1)document.getElementbyid():-

 // -> .getElementbyid() method is used to targert html elements by it's id
 // -> It returns single element
 // ex:-

 function change1(){
    let name= document.getElementById("head")
    console.log(typeof(name));
    name.innerText="Hari";
    name.style.color= " deeppink";
    name.style.backgroundColor="black";
    name.style.width="fit-content"
    name.style.padding="20px";
}

// 2)document.getElementbyclassname():-
// -> .getElementbyclassname() method is used to targert multiple elements based on the class name
 // -> It returns html collections
 // -> it is a input Array

function change2(){
    let head=document.getElementsByClassName("user");
    head[0].innerText="Lokesh";
    head[1].style.color="gold";
    head[2].style.color="red";
    head[0].style.color="red";
    head[0].style.padding="20px";
    head[0].style.backgroundColor="black";
    head[0].style.width="fit-content";
    head[1].style.padding="20px";
    head[1].style.backgroundColor="green";
    head[1].style.width="fit-content";
    head[2].style.padding="20px";
    head[2].style.backgroundColor="black";
    head[2].style.width="fit-content";

}



// 3)document.getElementbyTagname():-

// -> .getElementbytagname() method is used to targert multiple elements based on the Tagname name
// -> It returns html collections

function change3(){
    let head1= document.getElementsByTagName("h2");
    head1[0].innerText="Indian Cricket";
    head1[0].style.color= " deeppink";
    head1[0].style.backgroundColor="black";
    head1[0].style.width="fit-content"
    head1[0].style.padding="20px";

}

  // 4)document.querySelector():- 
    // -> .queryselector is used to target html element using css selectors.and it returns a single element

    function change4(){
        let name4=document.querySelector("#head1");
        name4.innerText=" WE  ARE  ALL   INDIANS";
        name4.style.color="green";
        name4.style.backgroundColor="yellow";
        name4.style.width="fit-content";

    }

// 5)document.querySelectorALl():- 
    // -> .queryselector is used to target multiple  element using css selectors.and it returns a node list.

    function change5(){
        let name5=document.querySelectorAll(".politics");
        name5[0].style.color="white";
        name5[0].style.backgroundColor="yellow";
        name5[0].style.width="fit-content";

        name5[1].style.color="white";
        name5[1].style.backgroundColor="blue";
        name5[1].style.width="fit-content";
        
        name5[2].style.color="white";
        name5[2].style.backgroundColor="orange";
        name5[2].style.width="fit-content";


    }


    </script>
</body>
