const express = require("express")

const app = express()

const PORT = 3000

var count;

    app.post('/post', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        console.log("New express client");
        console.log("Received: ");

            var jsontext = JSON.stringify({
                name: 'name',
                email : 'email',
                user: 'user',
                pass: 'pass',
                confirm: 'confirm',
                entries: diaries

            });
            console.log(jsontext);
            console.log(account);
            res.send(jsontext);
    }) .listen(3000);
    console.log("Server is running! (listening on port " + port + ")");
    
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
    res.send(account);

    function login(){
        var logU = document.getElementById("userLogInput").value;
        var logP = document.getElementById("passLogInput").value;
        for(var i =0;i<account.length;i++){
            if((logU == account[i].user)&&(logP == account[i].pass)){
                console.log(account);
                
            }
            else{
                alert("Incorrect Username/Password");
            }
            
        }
    }

    function login(){
        var logU = document.getElementById("userLogInput").value;
        var logP = document.getElementById("passLogInput").value;
        for(var i =0;i<account.length;i++){
            if((logU == account[i].user)&&(logP == account[i].pass)){
                console.log(account);
                
            }
            else{
                res.send(JSON.stringify({'account' : "Incorrect Username/Password!"}));
            }
            
        }
    }

    function signup(){
        var signup = JSON.stringify({
            name: 'name',
            email : 'email',
            user: 'user',
            pass: 'pass',
            confirm: 'confirm',
        });
        console.log(signup);
        console.log(account);
        res.send(signup);
           
       for(var i = 0;i<account.length;i++){
        if(user == account[i].user){
            res.send(JSON.stringify({'signup' : "User is taken"}));
            return
        }
        if(email == account[i].email){
            res.send(JSON.stringify({'signup' : "Email is already in use"}));
            return
        }
       }
        if(pass.length<=8 && (pass != confirm)){
            res.send(JSON.stringify({'signup' : "Passwords don't match"}));
            return
        }
        else{
            console.log(account);
        }
        account.push(newUser);
        console.log(account);
    
        localStorage.setItem('AccountsList', JSON.stringify(newUser));
    }
    
    function save() {
        var newentry = JSON.stringify({
            title: 'newTitle',
            entry : 'newEntry',
            date: 'savedDate',
        });
        console.log(newentry);
        console.log(account);
        res.send(newentry);

        if(newTitle==""){
            res.send(JSON.stringify({'newentry' : "Please fill out title"}));
        }
        if(newEntry==""){
            res.send(JSON.stringify({'newentry' : "Please fill out entry"}));
        }
    
        else{
            console.log(recorded);
            diaries.push(newDiary);
            console.log(diaries);
        }
        
    }

    function searchentry() {
        var pastentry = JSON.stringify({
            title: 'newTitle',
            entry : 'newEntry',
            date: 'savedDate',
        });
        console.log(pastentry);
        console.log(account);
        res.send(pastentry);
       
    
        for(var i = 0;i<diaries.length;i++){
           if(savedDate == diaries[i].savedDate){
                console.log(pastentry);
            }
    
            else if (savedDate=="") {
                res.send(JSON.stringify({'pastentry' : "Please enter a date in the format D/MM/YYYY in the search bar."}));
            
            }
            else {
                res.send(JSON.stringify({'pastentry' : "The entry corresponding to this date is not available. Please try another date."}));
        
        }
    }
    res.send(JSON.stringify({"Date entered" : 'savedDate'}));
    
    }
    
    function edit_entry () {
        var pastdiary = JSON.stringify({
            title: 'newTitle',
            entry : 'newEntry',
            date: 'savedDate',
        });
        console.log(pastdiary);
        console.log(account);
        res.send(pastdiary);
       
        console.log(diaries[i]);
        newEntry();
        diaries.push(pastDiary);
    }
    
    app.listen(3000, function() {
        console.log(`Listening on port ${3000}`)
    })