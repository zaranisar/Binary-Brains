var url = "http://localhost:3000/post";  

var count;

var diaries = [
    {
        title:"My day",
        entry:"good day",
        date: "3/12/2022"
    }
]

var account = [
    { 
        name: "Talha",
        email: "tkap1234@gmail.com",
        user: "tkapp_",
        pass: "12345678",
        confirm: "12345678",
        entries: diaries
    }
]

function chooseLogin(){
    $("#box1").css('display','none');
    $("#passResetted").css('display','none');
    $("#box2").css('display','block');

}
function chooseSignup(){
    $("#box1").css('display','none');
    $("#box3").css('display','block');
}

function forgotpsw() {
    $("#box2").css('display','none'); 
    $("#box5").css('display','block'); 
}

function resetPass(){
    var flag  = false;
    var newPass = document.getElementById("newPass").value;
    var newPassC = document.getElementById("newPassC").value;
    var user = document.getElementById("userC").value;
    for(var i = 0;i<account.length;i++){
        if(user == account[i].user){
            if(newPass == newPassC){
                account[i].pass = newPass;
                account[i].confirm = newPassC;
                flag = true;
                break;
            }
        }
    }

    if(flag==true){
        $("#box5").css('display','none'); 
        $("#passResetted").css('display','block');
    }
    else{
        alert("Error")
    }
    console.log(account);
    document.getElementById("date7").innerHTML = Date().substring(0, 15); 
}

function existing_acc() {
    $("#box3").css('display','none'); 
    $("#box2").css('display','block'); 
}

function chooseCreate() {
    $("#box2").css('display','none'); 
    $("#box3").css('display','block'); 
}

function home(){
    $("#box2").css('display','none');
    $("#box1").css('display','block');
}
function home2(){
    $("#box3").css('display','none');
    $("#box1").css('display','block');
}

function home3(){
    $("#box5").css('display','none'); 
    $("#box1").css('display','block');
}

function login(){
    var logU = document.getElementById("userLogInput").value;
    var logP = document.getElementById("passLogInput").value;
    for(var i =0;i<account.length;i++){
        if((logU == account[i].user)&&(logP == account[i].pass)){
            $("#box2").css('display','none');
            $("#box4").css('display','block');
            return
            
        }
        else{
            alert("Incorrect Username/Password");
        }
        
    }
    document.getElementById("date").innerHTML = Date().substring(0, 15);
    document.getElementById("time").innerHTML = ("Time: "+Date().substring(16,24));
}

function signup(){
    var  name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var user = document.getElementById("userInput").value;
    var pass = document.getElementById("passInput").value;
    var confirm = document.getElementById("confirmInput").value;
    var newUser = {
        name: name,
        email: email,
        user: user,
        pass: pass,
        confirm: confirm,
    }
       
   for(var i = 0;i<account.length;i++){
    if(user == account[i].user){
        alert("User is taken");
        return
    }
    if(email == account[i].email){
        alert("Email is already in use");
        return
    }
   }
    if(pass.length<=8 && (pass != confirm)){
        alert("Passwords Dont Match");
        return
    }
    else{
        $("#box3").css('display','none');
        $("#box4").css('display','block');
    }
    account.push(newUser);
    console.log(account);

    localStorage.setItem('AccountsList', JSON.stringify(newUser));
    document.getElementById("date").innerHTML = Date().substring(0, 15);
    document.getElementById("time").innerHTML = ("Time: "+Date().substring(16,24));
}

function time(){
    document.getElementById("time").innerHTML = ("Time: "+Date().substring(16,24));
    document.getElementById("pswR").innerHTML = ("Time: "+Date().substring(16,24));
    
}
function date(){
    document.getElementById("date").innerHTML = Date().substring(0, 15);
}

function logout1() {
    $("#box4").css('display','none');
    $("#box1").css('display','block');
}

function newEntry() {
    $("#box4").css('display','none');
    $("#newentry").css('display','block');
    document.getElementById("date3").innerHTML = Date().substring(0, 15);
    document.getElementById("time2").innerHTML = ("Time: "+Date().substring(16,24));
}

function save() {
    var newTitle = document.getElementById("diarytitle").value;
    var newEntry = document.getElementById("entrybox").value;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    const formattedDate = dd + '/' + mm + '/' + yyyy;
    var savedDate = document.getElementById("date2").innerHTML = formattedDate;

    var newDiary ={
        title : newTitle,
        entry : newEntry,
        date : savedDate
    }
    if(newTitle==""){
        alert("Please Fill Out Title");
    }
    if(newEntry==""){
        alert("Please Fill Out Entry");
    }

    else{
        $("#newentry").css('display','none');
        $("#journalrecorded").css('display','block');
        diaries.push(newDiary);
        console.log(diaries);
    }
    
    document.getElementById("date4").innerHTML = Date().substring(0, 15);
    document.getElementById("time3").innerHTML = ("Time: "+Date().substring(16,24));
}

function logout2() {
    $("#newentry").css('display','none');
    $("#box1").css('display','block');
}

function logout3() {
    $("#journalrecorded").css('display','none');
    $("#box1").css('display','block');
}

function logout4() {
    $("#box4").css('display','none');
    $("#box1").css('display','block');
}

function logout5() {
    $("#searchentry").css('display','none');
    $("#box1").css('display','block');
}

function logout6() {
    $("#searchresults").css('display','none');
    $("#box1").css('display','block');
}

function homepage() {
    $("#journalrecorded").css('display','none');
    $("#box4").css('display','block');
}

function pastEntry() {
    $("#box4").css('display','none');
    $("#searchentry").css('display','block');
    document.getElementById("date5").innerHTML = Date().substring(0, 15);
    document.getElementById("time4").innerHTML = ("Time: "+Date().substring(16,24));
}

function searchentry() {
    document.getElementById("date6").innerHTML = Date().substring(0, 15);
    document.getElementById("time5").innerHTML = ("Time: "+Date().substring(16,24));   

    var searchbtn = document.getElementById("searchbutton");
    var savedDate = document.getElementById("searchbar"); 

    $("#searchentry").css('display','none');
    $("#searchresults").css('display','block');
    
    var pastDiary = {
        title : diarytitle,
        entry : pastentry,
        date : savedDate
    }

    for(var i = 0;i<diaries.length;i++){
       if(savedDate == diaries[i].savedDate){
            $("#searchentry").css('display','none');
            $("#searchresults").css('display','block');
        }

        else if (savedDate=="") {
            alert("Please enter a date in the format D/MM/YYYY in the search bar.")
        }
        else {
            alert("The entry corresponding to this date is not available. Please try another date");
    }
}
    document.getElementById("searchbar2").innerHTML = "Date Entered: " + savedDate;
    
    var select_diary = document.getElementById("selectdiary");

    select_diary.innerHTML = diarytitle + "         " + savedDate; 
}

function edit_entry () {
    var pastDiary ={
        title : diarytitle,
        entry : pastentry,
        date : savedDate
    }
    $("#searchentry").css('display','none');
    console.log(diaries[i]);
    newEntry();
    diaries.push(pastDiary);
}

function background_change() {
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var total = month;
    var season = "";
    var body = document.getElementsByTagName("body")[0];
    
    switch(true) {
    
    case (total >= 6 && total <= 8):
        season = "Seasons/spring.jpg";
        break;
    
    case (total >= 9 && total <= 11):
        season = "Seasons/fall.jpg";    
        break;

    case (total == 12 || total == 1 || total == 2):
        season = "Seasons/winter.jpg";
        break;

    default:
        season = "Seasons/summer.jpg";
    }

    var output = "white url('" + season + "') no-repeat center center fixed";
    var checkBox = document.getElementById("mycheck");
    
    if (checkBox.checked == true){  
    
      console.log("true");
      body.style.background = output;  
    
    } else {
        console.log("false");
        body.style.removeProperty('background')
    }
    }

var Cal = function(divId) {
    //Store div id
    this.divId = divId;
    // Days of week, starting on Sunday
    this.DaysOfWeek = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];
    // Months, stating on January
    this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    // Set the current month, year
    var d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
   
  };
  // Goes to next month
  Cal.prototype.nextMonth = function() {
    if ( this.currMonth == 11 ) {
        this.currMonth = 0;
        this.currYear = this.currYear + 1;
      }
      else {
        this.currMonth = this.currMonth + 1;
      }
      this.showcurr();
    };
    // Goes to previous month
    Cal.prototype.previousMonth = function() {
      if ( this.currMonth == 0 ) {
        this.currMonth = 11;
        this.currYear = this.currYear - 1;
      }
      else {
        this.currMonth = this.currMonth - 1;
      }
      this.showcurr();
    };
    // Show current month
Cal.prototype.showcurr = function() {
    this.showMonth(this.currYear, this.currMonth);
  };
  // Show month (year, month)
  Cal.prototype.showMonth = function(y, m) {
    var d = new Date()
    // First day of the week in the selected month
    , firstDayOfMonth = new Date(y, m, 1).getDay()
    // Last day of the selected month
    , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
    // Last day of the previous month
    , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
    var html = '<table>';
    // Write selected month and year
    html += '<thead><tr>';
    html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
    html += '</tr></thead>';
    // Write the header of the days of the week
    html += '<tr class="days">';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
      html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';
      // Write the days
  var i=1;
  do {
    var dow = new Date(y, m, i).getDay();
    // If Sunday, start new row
    if ( dow == 0 ) {
      html += '<tr>';
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }
    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    // If Saturday, closes the row
    if ( dow == 6 ) {
      html += '</tr>';
      // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    }
    else if ( i == lastDateOfMonth ) {
        var k=1;
        for(dow; dow < 6; dow++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
      i++;
    }while(i <= lastDateOfMonth);
    // Closes table
    html += '</table>';
    // Write HTML to the div
    document.getElementById(this.divId).innerHTML = html;
  };
  // On Load of the window
  window.onload = function() {
    // Start calendar
    var c = new Cal("divCal");			
    c.showcurr();
    // Bind next and previous button clicks
    getId('btnNext').onclick = function() {
      c.nextMonth();
    };
    getId('btnPrev').onclick = function() {
      c.previousMonth();
    };
  }
  // Get element by id
function getId(id) {
    return document.getElementById(id);
  }