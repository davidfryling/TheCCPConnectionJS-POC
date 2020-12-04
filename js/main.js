// global variables that will be used later
var userType;
var userName;
var userTypeArray = ["student", "parent", "counselor", "advisor", "new"];
var profHeaders = ["First Name", "Last Name", "CID", "Student Email", "Parent Email", "School"];
var profData1 = ["Jane", "Doe", "1234567", "jane.doe@reyn.org", "mama.doe@rgmail.com", "HS2"]; 
var dashHeaders = ["Student", "Subject", "Course #", "Section #", "Synonym #", "Credit Hours", "Course Name", "Days/Times", "Parent Appr.", "Couns. Appr.", "Registered?"]; // 11 for data
var dashData1 = ["Jane Doe", "MATH", "1149", "001", "12345", 4.00, "Trigonometry", "M/W 2:00-3:00 pm", "Pending...", "Pending...", "No"];

function logout() { // this will refresh the page on logout so data is erased
    location.reload();
}

function clearContainer() { // this will be used to clear the container on demand
    var contents = document.querySelectorAll(".wrapper");
    //console.log(contents); // for debugging
    for (i = 0; i < contents.length; i++) {
        contents[i].remove();
    }
}

function hideLogout() { // this will be used to hide the logout text on demand
    var logout = document.getElementById("logout");
    //console.log(logout); // for debugging
    logout.style.display = "none";
}

function showLogout() { // this will be used to show the logout text on demand
    var logout = document.getElementById("logout");
    //console.log(logout); // for debugging
    logout.style.display = "block";
}

function buildWrapper() { // this will be used to build the section wrapper on demand
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    //console.log(wrapper); // for debugging
    return wrapper;
}

function buildH1() { // this will be used to build a heading 1 element on demand
    var h1 = document.createElement("h1");
    //console.log(h1); // for debugging
    return h1;
}

function buildH3() { // this will be used to build a heading 3 element on demand
    var h3 = document.createElement("h3");
    //console.log(h3); // for debugging
    return h3;
}

function buildLgButton() { // this will be used to build a button element with large button styling on demand
    var lgButton = document.createElement("button");
    lgButton.classList.add("lg-btn");
    //console.log(lgButton); // for debugging
    return lgButton;
}

function buildSmButton() { // this will be used to build a button element with small button styling on demand
    var smButton = document.createElement("button");
    smButton.classList.add("sm-btn");
    //console.log(smButton); // for debugging
    return smButton;
}

function buildTextInput() { // this will be used to build a text input element on demand
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    //console.log(input); // for debugging
    return input;
}

function buildCheckbox() { // this will be used to build a checkbox input element on demand
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    //console.log(checkbox); // for debugging
    return checkbox;
}

function buildDataCell() { // this will be used to build the data cell wrapper on demand
    var cell = document.createElement("div");
    cell.classList.add("data-cell");
    //console.log(cell); // for debugging
    return cell;
}

function buildPara() { // this will be used to build a paragraph element on demand
    var para = document.createElement("p")
    //console.log(para); // for debugging
    return para;
}

function buildBreak(){ // this will be used to build a break element on demand
    var br = document.createElement("br");
    //console.log(br); // for debugging
    return br;
}

function rendHome() {  // this will render the home page on demand
    // first, clear any contents currently in the container
    clearContainer(); 
    
    // render page title and instructions
    var rendHomeText = document.getElementById("render_0"); 
    var textWrapper = buildWrapper(); 
    var title = buildH1(); 
    title.append("Welcome to The CCP Connection!"); 
    var instructions = buildH3(); 
    instructions.append("Please select your role below to begin..."); 
    textWrapper.append(title); 
    textWrapper.append(instructions); 
    //console.log(textWrapper); // for debugging
    rendHomeText.append(textWrapper);
    
    // render buttons
    var rendHomeButtons = document.getElementById("render_1"); 
    var buttonWrapper = buildWrapper(); 
    for (i = 0; i < userTypeArray.length - 1; i++) { // run a for loop to build a button for each element in the array, minus the last element
        let button = buildLgButton();
        button.classList.add("h"); 
        button.setAttribute("onclick", "rendAuth(" + "'" + userTypeArray[i] + "'" + ")");
        button.append(userTypeArray[i]);
        buttonWrapper.append(button); 
    }
    //console.log(buttonWrapper); // for debugging
    rendHomeButtons.append(buttonWrapper); 
}

function rendAuth(userType) { // this will render a customized authentication page on demand
    // first, clear any contents currently in the container
    clearContainer(); 
    
    // render page title and instructions
    var rendAuthText = document.getElementById("render_0"); 
    var textWrapper = buildWrapper(); 
    var title = buildH1(); 
    var instructions = buildH3();
    // customized title and instructions based on user type
    if (userType == "student") {
        title.append("Let's find your profile!"); 
        instructions.append("Please enter your email address and cougar ID to continue... if this is your first time using this portal, click \"create profile\" below..."); 
    }
    else if (userType == "parent") { 
        title.append("Let's find your student's profile!"); 
        instructions.append("Please enter your student's cougar ID and the PIN (in your notification email) to continue...");
    }
    else if (userType == "counselor") { 
        title.append("Login"); 
        instructions.append("Please enter your username and password to continue..."); 
    }
    else if (userType == "advisor") {
        title.append("Login"); 
        instructions.append("Please enter your username and password to continue..."); 
    }
    textWrapper.append(title); 
    textWrapper.append(instructions); 
    //console.log(textWrapper); // for debugging
    rendAuthText.append(textWrapper);

    // render authentication form
    var rendAuthForm = document.getElementById("render_1");
    var formWrapper = buildWrapper(); 
    var authInput1= buildTextInput(); 
    var authInput2 = buildTextInput(); 
    var authLogin = buildSmButton();
    var authNew = buildSmButton(); 
    // customized input and buttons based on user type
    if (userType == "student") { 
        // build first input
        authInput1.classList.add("reg-frm"); 
        authInput1.classList.add("v"); 
        authInput1.setAttribute("placeholder", "enter email address here");
        // build second input
        authInput2.classList.add("reg-frm"); 
        authInput2.classList.add("v"); 
        authInput2.setAttribute("placeholder", "enter CID here");
        // build first button
        authLogin.append("find profile");
        authLogin.classList.add("h");
        authLogin.setAttribute("onclick", "rendProf('student')");
        // build second button (for student screen only)
        authNew.append("create profile");
        authNew.classList.add("h"); 
        authNew.setAttribute("onclick", "rendProf('new')"); 
    }
    else if (userType == "parent") {
        // build first input
        authInput1.classList.add("reg-frm"); 
        authInput1.classList.add("v"); 
        authInput1.setAttribute("placeholder", "enter your student's CID here"); 
        // build second input
        authInput2.classList.add("reg-frm"); 
        authInput2.classList.add("v"); 
        authInput2.setAttribute("placeholder", "enter PIN here");
        // build first button
        authLogin.append("find student"); 
        authLogin.classList.add("h"); 
        authLogin.setAttribute("onclick", "rendProf('parent')");
        // build second button
        authNew.append("create profile"); 
        authNew.classList.add("h"); 
        authNew.setAttribute("onclick", "rendProf('new')"); 
    }
    else if (userType == "counselor") { 
        // build first input
        authInput1.classList.add("reg-frm"); 
        authInput1.classList.add("v"); 
        authInput1.setAttribute("placeholder", "enter username here");
        // build second input
        authInput2.classList.add("reg-frm"); 
        authInput2.classList.add("v"); 
        authInput2.setAttribute("placeholder", "enter password here");
        // build first button
        authLogin.append("login");
        authLogin.classList.add("h"); 
        authLogin.setAttribute("onclick", "rendDash('counselor')"); 
    }
    else if (userType == "advisor") { 
        // build first input
        authInput1.classList.add("reg-frm"); 
        authInput1.classList.add("v"); 
        authInput1.setAttribute("placeholder", "enter username here"); 
        // build second input
        authInput2.classList.add("reg-frm"); 
        authInput2.classList.add("v"); 
        authInput2.setAttribute("placeholder", "enter password here"); 
        // build first button
        authLogin.append("login"); 
        authLogin.classList.add("h"); 
        authLogin.setAttribute("onclick", "rendDash('advisor')"); 
    }
    formWrapper.append(authInput1); 
    formWrapper.append(authInput2); 
    formWrapper.append(authLogin); 
    if (userType == "student") { // add second button to wrapper for student only
        formWrapper.append(authNew);
        //console.log(formWrapper); // for debugging
        rendAuthForm.append(formWrapper);
    }
    else {
        //console.log(formWrapper); // for debugging
        rendAuthForm.append(formWrapper);
    }
}

function rendProf(userType) { // this will render a customized profile page on demand
   // first, clear any contents currently in the container
    clearContainer(); 
    
    // render page title and instructions
    var rendProfileText = document.getElementById("render_0"); 
    var textWrapper = buildWrapper(); 
    var title = buildH1(); 
    var instructions = buildH3();
    // customized title and instructions based on user type
    if (userType == "student") { 
        title.append("Is this you?"); 
        instructions.append("If this is your information, press \"continue\"... if not, press \"retry\"..."); 
    }
    else if (userType == "parent") { 
        title.append("Is this your student?"); 
        instructions.append("If this is your student's information, press \"continue\"\"retry\"..."); 
    }
    else if (userType == "counselor") { 
        title.append("Student Profile"); 
        instructions.append("Make sure all studnet information is up to date and share notes with the student's advisor"); 
    }
    else if (userType == "advisor") { 
        title.append("Student Profile"); 
        instructions.append("Make sure all studnet information is up to date and share notes with the student's counselor");  
    }
    else if (userType == "new") { 
        title.append("Student Profile"); 
        instructions.append("Enter information into each field and press \"create profile\"");
    }
    textWrapper.append(title); 
    textWrapper.append(instructions); 
    //console.log(textWrapper); // for debugging
    rendProfileText.append(textWrapper); 
    
    // render profile data
    var rendProfData = document.getElementById("render_1"); 
    var dataWrapper = buildWrapper(); 
    // customized profile data contents based on user type
    if (userType == "student" || userType == "parent") { 
        var dataCell; 
        var dataWrapper = buildWrapper();
        for (i=0; i < profHeaders.length; i++) {
            var dataCell = buildDataCell(); 
            var header = buildPara(); 
            var data = buildPara(); 
            header.setAttribute("id", "data_header"); 
            header.append(profHeaders[i]); 
            data.setAttribute("id", "data_cell"); 
            data.append(profData1[i]); 
            dataCell.classList.add("cell6");
            dataCell.append(header); 
            dataCell.append(data);
            dataWrapper.append(dataCell);
        }
    }
    if (userType == "counselor" || userType == "advisor") { 
        var dataCell; 
        var dataWrapper = buildWrapper(); 
        for (i=0; i < profHeaders.length; i++) {
            var dataCell = buildDataCell(); 
            var header = buildPara(); 
            var data = buildPara(); 
            var editInput = buildTextInput();
            var editButton = buildSmButton();
            header.setAttribute("id", "data_header"); 
            header.append(profHeaders[i]); 
            data.setAttribute("id", "data_cell"); 
            data.append(profData1[i]); 
            editInput.classList.add("cell-frm");
            editInput.setAttribute("placeholder", "edit here");
            editButton.append("edit");
            dataCell.classList.add("cell6");
            dataCell.append(header); 
            dataCell.append(data); 
            dataCell.append(editInput);
            dataCell.append(editButton);
            dataWrapper.append(dataCell); 
        }
    }
    if (userType == "new") { 
        var dataCell; 
        var dataWrapper = buildWrapper(); 
        for (i=0; i < profHeaders.length; i++) {
            var dataCell = buildDataCell(); 
            var header = buildPara(); 
            var editInput = buildTextInput();
            header.setAttribute("id", "data_header"); 
            header.append(profHeaders[i]); 
            editInput.classList.add("cell-frm");
            editInput.setAttribute("placeholder", "please complete");
            dataCell.classList.add("cell6");
            dataCell.append(header);
            dataCell.append(editInput);
            dataWrapper.append(dataCell);
        }
    }
    //console.log(dataWrapper); // for debugging
    rendProfData.append(dataWrapper); 

    // render buttons
    var rendProfButtons = document.getElementById("render_2"); 
    var buttonWrapper = buildWrapper(); 
    // customized buttons based on user type
    if (userType == "student") { 
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
    if (userType == "parent") { 
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
    if (userType == "new") {
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
    //console.log(buttonWrapper); // for debugging
    rendProfButtons.append(buttonWrapper);
    
    // render note section for counselor and advisor only
    if (userType == "counselor" || userType == "advisor") { 
        var rendNoteText = document.getElementById("render_3"); 
        var textWrapper = buildWrapper(); 
        var title = buildH1(); 
        var instructions = buildH3();
        title.append("Notes Log"); 
        instructions.append("Click the add note button below to add a note for this student... make sure to include the current tuerm (e.g., autumn 2021)...");
        textWrapper.append(title); 
        textWrapper.append(instructions); 
        //console.log(textWrapper); // for debugging
        rendNoteText.append(textWrapper); 
    }
}

function rendDash(userType) { // this will render the dashboard on demand
    // first, clear any contents currently in the container
    clearContainer(); 
    
    // customize and show logout with username
    if (userType == "counselor") {
        userName = " David"
        addName = document.getElementById("logout");
        addName.append(userName);
        showLogout();
    }
    if (userType == "advisor") {
        userName = " Simonne"
        addName = document.getElementById("logout");
        addName.append(userName);
        showLogout();
    }

    // render page title and instructions
    var rendDashText = document.getElementById("render_0"); 
    var textWrapper = buildWrapper(); 
    var title = buildH1(); 
    var instructions = buildH3();
    // customized title and instructions based on user type
    if (userType == "student") { 
        title.append("Add Course"); 
        instructions.append("Enter the course information in all fields and press  \"add\"..."); 
    }
    else if (userType == "parent") { 
        title.append("Course Approval"); 
        instructions.append("If you approve the current course request, please check the box next to the course and press \"approve\"..."); 
    }
    else if (userType == "counselor") { 
        title.append("Counselor Dashboard"); 
        instructions.append("Note: Max credits and SSID's must be completed in the student's profile before you can approve courses..."); 
    }
    else if (userType == "advisor") { 
        title.append("Advisor Dashboard");  
    }
    textWrapper.append(title); 
    textWrapper.append(instructions); 
    //console.log(textWrapper); // for debugging
    rendDashText.append(textWrapper); 

    // render dashboard data for adding courses for student only
    var rendDashAdd = document.getElementById("render_1"); 
    var dataWrapper = buildWrapper(); 
    // customized profile data contents based on user type
    if (userType == "student") { 
        var dataCell; 
        var dataWrapper = buildWrapper();
        // build first cell
        var decisionCell = buildDataCell();
        var decisionButton = buildSmButton();
        var br = buildBreak();
        var decisionCheck = buildCheckbox();
        decisionButton.classList.add("cell-btn");
        decisionButton.append("add");
        decisionCheck.classList.add("cell-box");
        decisionCell.classList.add("cell11");
        decisionCell.append(decisionButton);
        decisionCell.append(br);
        decisionCell.append(decisionCheck);
        dataWrapper.append(decisionCell);
        // build remaining cells
        for (i=1; i < dashHeaders.length; i++) {
            var dataCell = buildDataCell(); 
            var header = buildPara(); 
            var editInput = buildTextInput();
            header.setAttribute("id", "data_header"); 
            header.append(dashHeaders[i]); 
            editInput.classList.add("cell-frm");
            editInput.setAttribute("placeholder", "please complete");
            dataCell.classList.add("cell11");
            dataCell.append(header);
            dataCell.append(editInput);
            dataWrapper.append(dataCell);
        }
        //console.log(dataWrapper); // for debugging
        rendDashAdd.append(dataWrapper);
    }

    // render second page title and instructions for student only
    var rendDashText = document.getElementById("render_2"); 
    var textWrapper = buildWrapper(); 
    var title = buildH1(); 
    var instructions = buildH3();
    // customized title and instructions based on user type
    if (userType == "student") { 
        title.append("Drop Course"); 
        instructions.append("Check the course(s) you wish to drop and press \"add\"..."); 
        textWrapper.append(title); 
        textWrapper.append(instructions); 
        //console.log(textWrapper); // for debugging
        rendDashText.append(textWrapper); 
    }


    // render dashboard data for current courses
    var rendDashData = document.getElementById("render_3"); 
    var dataWrapper = buildWrapper(); 
    // customized profile data contents based on user type
    if (userType == "student") { 
        var dataCell; 
        var dataWrapper = buildWrapper();
        // build first cell
        var decisionCell = buildDataCell();
        var decisionButton = buildSmButton();
        var br = buildBreak();
        var decisionCheck = buildCheckbox();
        decisionButton.classList.add("cell-btn");
        decisionButton.append("drop");
        decisionCheck.classList.add("cell-box");
        decisionCell.classList.add("cell11");
        decisionCell.append(decisionButton);
        decisionCell.append(br);
        decisionCell.append(decisionCheck);
        dataWrapper.append(decisionCell);
        // build remaining cells
        for (i=1; i < dashHeaders.length; i++) {
            var dataCell = buildDataCell(); 
            var header = buildPara(); 
            var data = buildPara(); 
            header.setAttribute("id", "data_header"); 
            header.append(dashHeaders[i]); 
            data.setAttribute("id", "data_cell"); 
            data.append(dashData1[i]); 
            dataCell.classList.add("cell11");
            dataCell.append(header); 
            dataCell.append(data);
            dataWrapper.append(dataCell);
        }
    }
    if (userType == "parent") { 
        var dataCell; 
        var dataWrapper = buildWrapper();
         // build first cell
         var decisionCell = buildDataCell();
         var decisionButton = buildSmButton();
         var br = buildBreak();
         var decisionCheck = buildCheckbox();
         decisionButton.classList.add("cell-btn");
         decisionButton.append("approve");
         decisionCheck.classList.add("cell-box");
         decisionCell.classList.add("cell11");
         decisionCell.append(decisionButton);
         decisionCell.append(br);
         decisionCell.append(decisionCheck);
         dataWrapper.append(decisionCell);
         // build remaining cells
        for (i=1; i < dashHeaders.length; i++) {
            var dataCell = buildDataCell(); 
            var header = buildPara(); 
            var data = buildPara(); 
            header.setAttribute("id", "data_header"); 
            header.append(dashHeaders[i]); 
            data.setAttribute("id", "data_cell"); 
            data.append(dashData1[i]); 
            dataCell.classList.add("cell11");
            dataCell.append(header); 
            dataCell.append(data);
            dataWrapper.append(dataCell);
        }
    }
    if (userType == "counselor") { 
        var dataCell; 
        var dataWrapper = buildWrapper();
         // build first cell
         var decisionCell = buildDataCell();
         var decisionButton = buildSmButton();
         var br = buildBreak();
         var decisionCheck = buildCheckbox();
         decisionButton.classList.add("cell-btn");
         decisionButton.append("approve");
         decisionCheck.classList.add("cell-box");
         decisionCell.classList.add("cell12");
         decisionCell.append(decisionButton);
         decisionCell.append(br);
         decisionCell.append(decisionCheck);
         dataWrapper.append(decisionCell);
        // build second cell
        var studentCell = buildDataCell(); 
        var sHeader = buildPara(); 
        var sData = buildPara(); 
        sHeader.setAttribute("id", "data_header"); 
        sHeader.append(dashHeaders[0]); 
        sData.setAttribute("id", "data_cell");
        sData.classList.add("student-click");
        sData.setAttribute("onclick", "rendProf('counselor')"); 
        sData.append(dashData1[0]); 
        studentCell.classList.add("cell12");
        studentCell.append(sHeader); 
        studentCell.append(sData); 
        dataWrapper.append(studentCell); 
         // build remaining cells 
        for (i=1; i < dashHeaders.length; i++) {
            var dataCell = buildDataCell(); 
            var header = buildPara(); 
            var data = buildPara(); 
            header.setAttribute("id", "data_header"); 
            header.append(dashHeaders[i]); 
            data.setAttribute("id", "data_cell"); 
            data.append(dashData1[i]); 
            dataCell.classList.add("cell12");
            dataCell.append(header); 
            dataCell.append(data); 
            dataWrapper.append(dataCell); 
        }
    }
    if (userType == "advisor") { 
        var dataCell; 
        var dataWrapper = buildWrapper(); 
         // build first cell
         var decisionCell = buildDataCell();
         var decisionButton = buildSmButton();
         var br = buildBreak();
         var decisionCheck = buildCheckbox();
         decisionButton.classList.add("cell-btn");
         decisionButton.append("register");
         decisionCheck.classList.add("cell-box");
         decisionCell.classList.add("cell12");
         decisionCell.append(decisionButton);
         decisionCell.append(br);
         decisionCell.append(decisionCheck);
         dataWrapper.append(decisionCell);
         // build second cell
        var studentCell = buildDataCell(); 
        var sHeader = buildPara(); 
        var sData = buildPara(); 
        sHeader.setAttribute("id", "data_header"); 
        sHeader.append(dashHeaders[0]); 
        sData.setAttribute("id", "data_cell");
        sData.classList.add("student-click");
        sData.setAttribute("onclick", "rendProf('advisor')"); 
        sData.append(dashData1[0]); 
        studentCell.classList.add("cell12");
        studentCell.append(sHeader); 
        studentCell.append(sData); 
        dataWrapper.append(studentCell); 
         // build remaining cells
        for (i=1; i < dashHeaders.length; i++) {
            var dataCell = buildDataCell(); 
            var header = buildPara(); 
            var data = buildPara(); 
            header.setAttribute("id", "data_header"); 
            header.append(dashHeaders[i]); 
            data.setAttribute("id", "data_cell"); 
            data.append(dashData1[i]); 
            dataCell.classList.add("cell12");
            dataCell.append(header); 
            dataCell.append(data); 
            dataWrapper.append(dataCell); 
        }
    }
    //console.log(dataWrapper); // for debugging
    rendDashData.append(dataWrapper);

}