var userType; // define and name variable that will track each user type later for different functions
var userName; // define and name variable that will track each user name later for different functions

// var currentWidth = window.addEventListener("resize", function(event) { // define and name variable that constantly notes and returns the current screen width for later use
//     var newWidth = window.innerWidth;
//     return newWidth;
// });

// function getWidth() {
//     var newWidth = window.innerWidth;
//     return newWidth;
// }

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

function clearContainer() { // this will be used to clear container on demand
    var contents = document.querySelectorAll(".wrapper");
    console.log(contents);
    for (i = 0; i < contents.length; i++) {
        contents[i].remove();
    }
}

function hideLogout() { // this will be used to hide the logout text on demand
    var logout = document.getElementById("logout");
    console.log(logout);
    logout.style.display = "none";
}

function showLogout() { // this will be used to show the logout text on demand
    var logout = document.getElementById("logout");
    console.log(logout);
    logout.style.display = "block";
}

function buildWrapper() { // this will be used to build the wrapper on demand
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    console.log(wrapper);
    return wrapper;
}

function buildH1() { // this will be used to build an h1 element on demand
    var h1 = document.createElement("h1");
    console.log(h1);
    return h1;
}

function buildH3() { // this will be used to build an h1 element on demand
    var h3 = document.createElement("h3");
    console.log(h3);
    return h3;
}

function buildLgButton() { // this will be used to build a button element on demand
    var lgButton = document.createElement("button");
    lgButton.classList.add("lg-btn"); // add a class for button so CSS applies style
    console.log(lgButton);
    return lgButton;
}

function buildSmButton() { // this will be used to build a button element on demand
    var smButton = document.createElement("button");
    smButton.classList.add("sm-btn"); // add a class for button so CSS applies style
    console.log(smButton);
    return smButton;
}

function buildTextInput() { // this will be used to build an input element on demand
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    console.log(input);
    return input;
}

function buildDataCell() { // this will be used to build the wrapper on demand
    var cell = document.createElement("div");
    cell.classList.add("data-cell");
    console.log(cell);
    return cell;
}

function buildPara() {
    var para = document.createElement("p")
    console.log(para);
    return para;
}

function buildBreak(){
    var br = document.createElement("br");
    console.log(br);
    return br;
}

function rendHome() {  // function that builds landing page
    clearContainer(); // first, clear any contents currently in the container
    hideLogout(); // make sure logout is hidden when returning home
    // render text
    var rendHomeText = document.getElementById("render_0"); // assign a variable to represent where elements will go in html
    var textWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var title = buildH1(); // build an h1 element and assign it as the title
    title.append("Welcome to The CCP Connection!"); // add title text
    var instructions = buildH3(); // build an h3 element and assign it as the instructions
    instructions.append("Please select your role below to begin..."); // add instuction text
    textWrapper.append(title); // add title to wrapper
    textWrapper.append(instructions); // add instructions to wrapper
    console.log(textWrapper);
    rendHomeText.append(textWrapper); // append the html element with complete wrapper
    // render buttons
    var rendHomeButtons = document.getElementById("render_1"); // assign a variable to represent where elements will go in html
    var buttonWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var buttonNames = ["student", "parent", "counselor", "advisor"] // create array of button names
    for (i = 0; i < buttonNames.length; i++) { // run a for loop to build a button for each element in the array
        let button = buildLgButton(); // call build button method
        button.classList.add("h"); // add a class for button so CSS knows to make display element inline or block
        button.setAttribute("onclick", "rendAuth(" + "'" + buttonNames[i] + "'" + ")"); // add onclick action for each button to render authentication page and pass user to function
        button.append(buttonNames[i]); // add names to buttons
        buttonWrapper.append(button); // add button to wrapper each iteration
    }
    rendHomeButtons.append(buttonWrapper); // append the html element with complete wrapper
}

function rendAuth(userType) { // function that builds authentication page
    clearContainer(); // first, clear any contents currently in the container
    // render text
    var rendAuthText = document.getElementById("render_0"); // assign a variable to represent where elements will go in html
    var textWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var title = buildH1(); // build an h1 element and assign it as the title
    var instructions = buildH3(); // build an h3 element and assign it as the instructions
    if (userType == "student") { // customized title and instructions based on user type
        title.append("Let's find your profile!"); // add title text
        instructions.append("Please enter your email address and cougar ID to continue... if this is your first time using this portal, click \"create profile\" below..."); // add instuction text 
    }
    else if (userType == "parent") { // customized title and instructions based on user type
        title.append("Let's find your student's profile!"); // add title text
        instructions.append("Please enter your student's cougar ID and the PIN (in your notification email) to continue..."); // add instuction text 
    }
    else if (userType == "counselor") { // customized title and instructions based on user type
        title.append("Login"); // add title text
        instructions.append("Please enter your username and password to continue..."); // add instuction text 
    }
    else if (userType == "advisor") { // customized title and instructions based on user type
        title.append("Login"); // add title text
        instructions.append("Please enter your username and password to continue..."); // add instuction text 
    }
    textWrapper.append(title); // add title to wrapper
    textWrapper.append(instructions); // add instructions to wrapper
    console.log(textWrapper);
    rendAuthText.append(textWrapper); // append the html element with complete wrapper
    // render auth form
    var rendAuthForm = document.getElementById("render_1"); // assign a variable to represent where elements will go in html
    var formWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var authInput1= buildTextInput(); // build an input and assign it to a variable
    var authInput2 = buildTextInput(); // build another input and assign it to a variable
    var authLogin = buildSmButton(); // build two buttons and assign it to a variable
    var authNew = buildSmButton(); // build another button for students only
    if (userType == "student") { // customized title and instructions based on user type
        // build first input
        authInput1.classList.add("sm-frm"); // add a class for input so CSS applies style
        authInput1.classList.add("v"); // add a class for input so CSS applies style
        authInput1.setAttribute("placeholder", "enter email address here"); // add placeholder text 
        // build second input
        authInput2.classList.add("sm-frm"); // add a class for input so CSS applies style
        authInput2.classList.add("v"); // add a class for  input so CSS applies style
        authInput2.setAttribute("placeholder", "enter CID here"); // add placeholder text 
        // build first button
        authLogin.append("find profile"); // add name to button
        authLogin.classList.add("h"); // add a class for input so CSS applies style
        authLogin.setAttribute("onclick", "rendProf('student')"); // add onclick action for button to render student info page and pass user to function
        // build second button
        authNew.append("create profile"); // add name to button
        authNew.classList.add("h"); // add a class for input so CSS applies style
        authNew.setAttribute("onclick", "rendProf('new')"); // add onclick action for button to render student info page and pass user to function
    }
    else if (userType == "parent") { // customized title and instructions based on user type
        // build first input
        authInput1.classList.add("sm-frm"); // add a class for input so CSS applies style
        authInput1.classList.add("v"); // add a class for input so CSS applies style
        authInput1.setAttribute("placeholder", "enter your student's CID here"); // add placeholder text 
        // build second input
        authInput2.classList.add("sm-frm"); // add a class for input so CSS applies style
        authInput2.classList.add("v"); // add a class for  input so CSS applies style
        authInput2.setAttribute("placeholder", "enter PIN here"); // add placeholder text 
        // build first button
        authLogin.append("find student"); // add name to button
        authLogin.classList.add("h"); // add a class for input so CSS applies style
        authLogin.setAttribute("onclick", "rendProf('parent')"); // add onclick action for button to render student info page and pass user to function
        // build second button
        authNew.append("create profile"); // add name to button
        authNew.classList.add("h"); // add a class for input so CSS applies style
        authNew.setAttribute("onclick", "rendProf('new')"); // add onclick action for button to render student info page and pass user to function 
    }
    else if (userType == "counselor") { // customized title and instructions based on user type
        // build first input
        authInput1.classList.add("sm-frm"); // add a class for input so CSS applies style
        authInput1.classList.add("v"); // add a class for input so CSS applies style
        authInput1.setAttribute("placeholder", "enter username here"); // add placeholder text 
        // build second input
        authInput2.classList.add("sm-frm"); // add a class for input so CSS applies style
        authInput2.classList.add("v"); // add a class for  input so CSS applies style
        authInput2.setAttribute("placeholder", "enter password here"); // add placeholder text 
        // build first button
        authLogin.append("login"); // add name to button
        authLogin.classList.add("h"); // add a class for input so CSS applies style
        authLogin.setAttribute("onclick", "rendDash('counselor')"); // add onclick action for button to render student info page and pass user to function
    }
    else if (userType == "advisor") { // customized title and instructions based on user type
        // build first input
        authInput1.classList.add("sm-frm"); // add a class for input so CSS applies style
        authInput1.classList.add("v"); // add a class for input so CSS applies style
        authInput1.setAttribute("placeholder", "enter username here"); // add placeholder text 
        // build second input
        authInput2.classList.add("sm-frm"); // add a class for input so CSS applies style
        authInput2.classList.add("v"); // add a class for  input so CSS applies style
        authInput2.setAttribute("placeholder", "enter password here"); // add placeholder text 
        // build first button
        authLogin.append("login"); // add name to button
        authLogin.classList.add("h"); // add a class for input so CSS applies style
        authLogin.setAttribute("onclick", "rendDash('advisor')"); // add onclick action for button to render student info page and pass user to function 
    }
    formWrapper.append(authInput1); // add input 1 to wrapper
    formWrapper.append(authInput2); // add input 1 to wrapper
    formWrapper.append(authLogin); // add first button to wrapper
    if (userType == "student") {
        formWrapper.append(authNew); // add second button to wrapper for student only
        console.log(formWrapper);
        rendAuthForm.append(formWrapper); // append the html element with complete wrapper
    }
    else {
        console.log(formWrapper);
        rendAuthForm.append(formWrapper); // append the html element with complete wrapper
    }
}

function rendProf(userType) { // function that builds student profile page
    clearContainer(); // first, clear any contents currently in the container
    // render text
    var rendProfileText = document.getElementById("render_0"); // assign a variable to represent where elements will go in html
    var textWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var title = buildH1(); // build an h1 element and assign it as the title
    var instructions = buildH3(); // build an h3 element and assign it as the instructions
    if (userType == "student") { // customized title and instructions based on user type
        title.append("Is this you?"); // add title text
        instructions.append("If this is your information, press \"continue\"... if not, press \"retry\"..."); // add instuction text 
    }
    else if (userType == "parent") { // customized title and instructions based on user type
        title.append("Is this your student?"); // add title text
        instructions.append("If this is your student's information, press \"continue\"\"retry\"..."); // add instuction text 
    }
    else if (userType == "counselor") { // customized title and instructions based on user type
        title.append("Student Profile"); // add title text
        instructions.append("Make sure all studnet information is up to date and share notes with the student's advisor"); // add instuction text 
    }
    else if (userType == "advisor") { // customized title and instructions based on user type
        title.append("Student Profile"); // add title text
        instructions.append("Make sure all studnet information is up to date and share notes with the student's counselor"); // add instuction text 
    }
    else if (userType == "new") { // customized title and instructions based on user type
        title.append("Student Profile"); // add title text
        instructions.append("Enter information into each field and press \"create profile\""); // add instuction text 
    }
    textWrapper.append(title); // add title to wrapper
    textWrapper.append(instructions); // add instructions to wrapper
    console.log(textWrapper);
    rendProfileText.append(textWrapper); // append the html element with complete wrapper
    // student data
    var rendProfileData = document.getElementById("render_1"); // assign a variable to represent where elements will go in html
    var dataWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    var dataHeaders = ["First Name", "Last Name", "CID", "Student Email", "Parent Email", "School"]; // // define and name demo array that will be used to display headers
    var dataDemos = ["Jane", "Doe", "1234567", "jane.doe@reyn.org", "mama.doe@rgmail.com", "HS2"]; // define and name demo array that will be used to display data
    if (userType == "student" || userType == "parent") { // checking user type
        var dataCell; // define and name variable for use in proper scope
        var dataWrapper = buildWrapper(); // build a wrapper and assign it to a variable
        for (i=0; i < dataHeaders. length; i++) {
            var dataCell = buildDataCell(); // call build data cell method
            var header = buildPara(); // call build paragraph method
            var data = buildPara(); // call build paragraph method
            header.setAttribute("id", "data_header"); // add id to header for css styling
            header.append(dataHeaders[i]); // add text from array at index i to header
            data.setAttribute("id", "data_cell"); // add id to data for css styling
            data.append(dataDemos[i]); // add text from array at index i to data
            dataCell.setAttribute("id", "cell6");
            dataCell.append(header); // add complete header to cell
            dataCell.append(data); // add complete data to cell
            dataWrapper.append(dataCell); // add cell to wrapper
        }
    }
    if (userType == "counselor" || userType == "advisor") { // checking user type
        var dataCell; // define and name variable for use in proper scope
        var dataWrapper = buildWrapper(); // build a wrapper and assign it to a variable
        for (i=0; i < dataHeaders. length; i++) {
            var dataCell = buildDataCell(); // call build data cell method
            var header = buildPara(); // call build paragraph method
            var data = buildPara(); // call build paragraph method
            var editInput = buildTextInput();
            var editButton = buildSmButton();
            header.setAttribute("id", "data_header"); // add id to header for css styling
            header.append(dataHeaders[i]); // add text from array at index i to header
            data.setAttribute("id", "data_cell"); // add id to data for css styling
            data.append(dataDemos[i]); // add text from array at index i to data
            editButton.append("edit");
            dataCell.setAttribute("id", "cell6");
            dataCell.append(header); // add complete header to cell
            dataCell.append(data); // add complete data to cell
            dataCell.append(editInput);
            dataCell.append(editButton);
            dataWrapper.append(dataCell); // add cell to wrapper
        }
    }
    if (userType == "new") { // checking user type
        var dataCell; // define and name variable for use in proper scope
        var dataWrapper = buildWrapper(); // build a wrapper and assign it to a variable
        for (i=0; i < dataHeaders. length; i++) {
            var dataCell = buildDataCell(); // call build data cell method
            var header = buildPara(); // call build paragraph method
            var editInput = buildTextInput();
            header.setAttribute("id", "data_header"); // add id to header for css styling
            header.append(dataHeaders[i]); // add text from array at index i to header
            dataCell.setAttribute("id", "cell6");
            dataCell.append(header); // add complete header to cell
            dataCell.append(editInput);
            dataWrapper.append(dataCell); // add cell to wrapper
        }
    }
    console.log(dataWrapper);
    rendProfileData.append(dataWrapper); // append the html element with complete wrapper
    // render buttons
    var rendProfButtons = document.getElementById("render_2"); // assign a variable to represent where elements will go in html
    var buttonWrapper = buildWrapper(); // build a wrapper and assign it to a variable
    if (userType == "student") { // checking user type
        var profCont = buildSmButton();
        var profRetry = buildSmButton();
        profCont.classList.add("h");
        profCont.setAttribute("onclick", "rendDash('student')");
        profCont.append("continue");
        profRetry.classList.add("h");
        profRetry.setAttribute("onclick", "rendAuth('student')");
        profRetry.append("retry");
        buttonWrapper.append(profRetry);
        buttonWrapper.append(profCont);
    }
    if (userType == "parent") { // checking user type
        var profCont = buildSmButton();
        var profRetry = buildSmButton();
        profCont.classList.add("h");
        profCont.setAttribute("onclick", "rendDash('parent')");
        profCont.append("continue");
        profRetry.classList.add("h");
        profRetry.setAttribute("onclick", "rendAuth('parent')");
        profRetry.append("retry");
        buttonWrapper.append(profRetry);
        buttonWrapper.append(profCont);
    }
    if (userType == "new") { // checking user type
        var profCont = buildSmButton();
        var profBack = buildSmButton();
        profCont.classList.add("h");
        profCont.setAttribute("onclick", "rendProf('student')");
        profCont.append("create");
        profBack.classList.add("h");
        profBack.setAttribute("onclick", "rendAuth('student')");
        profBack.append("back");
        buttonWrapper.append(profBack);
        buttonWrapper.append(profCont);
    }
    rendProfButtons.append(buttonWrapper);
    // render note section
    if (userType == "counselor" || userType == "advisor") { // customized title and instructions based on user type
        var rendNoteText = document.getElementById("render_3"); // assign a variable to represent where elements will go in html
        var textWrapper = buildWrapper(); // build a wrapper and assign it to a variable
        var title = buildH1(); // build an h1 element and assign it as the title
        var instructions = buildH3(); // build an h3 element and assign it as the instructions
        title.append("Notes Log"); // add title text
        instructions.append("Click the add note button below to add a note for this student... make sure to include the current tuerm (e.g., autumn 2021)..."); // add instuction text 
        textWrapper.append(title); // add title to wrapper
        textWrapper.append(instructions); // add instructions to wrapper
        console.log(textWrapper);
        rendNoteText.append(textWrapper); // append the html element with complete wrapper
    }
}


function rendDash(userType) { // function that builds student profile page
    clearContainer(); // first, clear any contents currently in the container
    if (userType == "counselor" || userType == "advisor") {
        showLogout();
    }
}

// below is template of each element grouping that could be rendered for reference and use in functions