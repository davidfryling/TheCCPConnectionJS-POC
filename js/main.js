var user; // define and name variable that will track each user later for different functions
const newStudent = { // define and name empty dictionary that will be used to store data for a new student later
    fName : "",
    lName : "",
    cid : "",
    sEmail : "",
    pEmail : "",
    school : "",
    ssid : "",
    maxCrd : ""
};
const newRequest = { // define and name empty dictionary that will be used to store data for a new course request
    subj : "",
    courseN : "",
    sectN : "",
    synN : "",
    crdHrs : "",
    cName : "",
    daysTimes : "",
    parentApp : "",
    counsApp : "",
    reg : "",
    note: ""
};
const janeD = { // define and name demo dictionary that will be used to display data later
    fName : "Jane",
    lName : "Doe",
    cid : "1234567",
    sEmail : "jane.doe@reyn.org",
    pEmail : "mama.doe@reyn.org",
    school : "HS2",
    ssid : "",
    maxCrd : ""
}
const janeDRequest = { // define and name demo dictionary that will be used to display data later
    subj : "MATH",
    courseN : "1149",
    sectN : "001",
    synN : "12345",
    crdHrs : "4",
    cName : "Trig",
    daysTimes : "M/W 2:00-3:00 pm",
    parentApp : "",
    counsApp : "",
    reg : "",
    note: ""
}

function clearContainer() { // this will be used to clear container when a new page is rendered
    var contents = document.querySelectorAll(".wrapper");
    console.log(contents);
    for (i = 0; i < contents.length; i++) {
        contents[i].remove();
    }
}

function buildWrapper() { // this will be used to build the wrapper of each section of the container when a new page is rendered
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    console.log(wrapper);
    return wrapper;
}

function buildButton() { // this will be used to build a button element when needed
    var button = document.createElement("button");
    console.log(button);
    return button;
}

function rendHome() {  // function that builds landing page
    clearContainer(); // first, clear any contents remaining in the container
    var renderHome = document.getElementById("render_here"); // assign a variable to represent where elements will go in html
    var buttonWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var homeButtons = []; // create an empty array to hold completed buttons
    var buttonNames = ["Student", "Parent", "Counselor", "Advisor"] // create array of button names
    for (i = 0; i < buttonNames.length; i++) { // run a for loop to build a button for each element in the array
        let button = buildButton(); // call build button method
        button.classList.add("lg-btn"); // add a class for button so CSS applies style
        button.classList.add("h"); // add a class for button so CSS knows to make display element inline or block
        button.append(buttonNames[i]); // add names to buttons
        homeButtons.push(button); // add complete button to an array
    }
    for (i = 0; i < homeButtons.length; i++) { // run for loop to add each button to the wrapper
        buttonWrapper.append(homeButtons[i]); // add button to wrapper each iteration
    }
    renderHome.append(buttonWrapper); // append the html element with complete wrapper
}


// below is template of each element grouping that could be rendered for reference and use in functions

/* <div class="wrapper"> 
    <h1>Page Title</h1>
    <h3>Instructions</h3>
</div>    
<div class="wrapper">  
    <!-- cell wrapper for each peice of data -->
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
        <p class="data-cell">Data</p>
</div>
<div class="wrapper">    
    <button class="lg-btn h">large button</button>
    <button class="sm-btn h">small button</button>
</div>
<div class="wrapper">   
    <input class="lg-frm h" type="text" placeholder="form field">
    <input class="sm-frm h" type="text" placeholder="form field">
    <button class="sm-btn v">form button</button>
</div> */