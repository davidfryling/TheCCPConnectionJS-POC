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

function buildH1() { // this will be used to build an h1 element when needed
    var h1 = document.createElement("h1");
    console.log(h1);
    return h1;
}

function buildH3() { // this will be used to build an h1 element when needed
    var h3 = document.createElement("h3");
    console.log(h3);
    return h3;
}

function buildButton() { // this will be used to build a button element when needed
    var button = document.createElement("button");
    console.log(button);
    return button;
}

function rendHome() {  // function that builds landing page
    clearContainer(); // first, clear any contents remaining in the container
    // render text
    var rendHomeText = document.getElementById("render_0"); // assign a variable to represent where elements will go in html
    var textWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var title = buildH1(); // build an h1 element and assign it as the title
    title.append("Welcome to The CCP Connection!"); // add title text
    var instructions = buildH3(); // build an h3 element and assign it as the instructions
    instructions.append("Please select your role below to begin...")
    textWrapper.append(title); // add title to wrapper
    textWrapper.append(instructions); // add instructions to wrapper
    console.log(textWrapper);
    rendHomeText.append(textWrapper); // append the html element with complete wrapper
    // render buttons
    var rendHomeButtons = document.getElementById("render_1"); // assign a variable to represent where elements will go in html
    var buttonWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var homeButtons = []; // create an empty array to hold completed buttons
    var buttonNames = ["student", "parent", "counselor", "advisor"] // create array of button names
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
    rendHomeButtons.append(buttonWrapper); // append the html element with complete wrapper
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