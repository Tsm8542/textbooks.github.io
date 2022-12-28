function x(){
    var x = document.querySelector("#branch").value;
    var t = document.querySelector("#topic");
    switch(x){
        case 'std1':
            t.innerHTML = '<option value="1maths">Maths</option>'
            break;
        case 'std2':
            t.innerHTML = '<option value="2maths">Maths</option>'
            break;
        case 'std3':
            t.innerHTML = '<option value="3maths">Maths</option>'
            break;
        case 'std4':
            t.innerHTML = '<option value="4maths">Maths</option>'
            break;
        case 'std5':
            t.innerHTML = '<option value="5maths">Maths</option><option value="5english">English</option><option value="5evs">Environmental Studies</option><option value="5history">History</option>'
            break;
        case 'std6':
            t.innerHTML = '<option value="6maths">Maths</option><option value="6english">English</option><option value="6geography">Geography</option><option value="6history">History</option><option value="6science">Science</option>'
            break;
        case 'std7':
            t.innerHTML = '<option value="7maths">Maths</option><option value="7english">English</option><option value="7geography">Geography</option><option value="7history">History</option><option value="7science">Science</option>'
            break;
        case 'std8':
            t.innerHTML = '<option value="8maths">Maths</option><option value="8english">English</option><option value="8geography">Geography</option><option value="8history">History</option><option value="8science">Science</option>'
            break;
        case 'std9':
            t.innerHTML = '<option value="9maths-I">Maths-I</option><option value="9maths-II">Maths-II</option><option value="9english">English</option><option value="9geography">Geography</option><option value="9history">History</option><option value="9science">Science</option>'
            break;
        case 'std10':
            t.innerHTML = '<option value="10maths-I">Maths-I</option><option value="10maths-II">Maths-II</option><option value="10english">English</option><option value="10geography">Geography</option><option value="10history">History</option><option value="10science-I">Science-I</option><option value="10science-II">Science-II</option>'
            break;
        case 'std11':
            t.innerHTML = '<option value="11maths-I">Maths-I</option><option value="11maths-II">Maths-II</option><option value="11english">English</option><option value="11biology">Biology</option><option value="11chemistry">Chemistry</option><option value="11physics">Physics</option>'
            break;
        case 'std12':
            t.innerHTML = '<option value="12maths-I">Maths-I</option><option value="12maths-II">Maths-II</option><option value="12english">English</option><option value="12biology">Biology</option><option value="12chemistry">Chemistry</option><option value="12physics">Physics</option>'
            break;
    }
    z();
}

function z(){
    var n = document.querySelector("#topic").value;
    var y = document.querySelector("#frame");
    switch(n){
        case '1maths':
            y.src = "Std.1/Maths/1.Maths.html"
            break;
        case '2maths':
            y.src = "Std.2/Maths/2.Maths.html"
            break;
        case '3maths':
            y.src = "Std.3/Maths/3.Maths.html"
            break;
        case '4maths':
            y.src = "Std.4/Maths/4.Maths.html"
            break;
        case '5maths':
            y.src = "Std.5/Maths/5.Maths.html"
            break;
        case '6maths':
            y.src = "Std.6/Maths/6.Maths.html"
            break;
        case '7maths':
            y.src = "Std.7/Maths/7.Maths.html"
            break;
        case '8maths':
            y.src = "Std.8/Maths/8.Maths.html"
            break;
        case '9maths-I':
            y.src = "Std.9/Maths-I/9.Maths-I.html"
            break;
        case '9maths-II':
            y.src = "Std.9/Maths-II/9.Maths-II.html"
            break;
        case '10maths-I':
            y.src = "Std.10/Maths-I/10.Maths-I.html"
            break;
        case '10maths-II':
            y.src = "Std.10/Maths-II/10.Maths-II.html"
            break;
        case '11maths-I':
            y.src = "Std.11/Maths-I/11.Maths-I.html"
            break;
        case '11maths-II':
            y.src = "Std.11/Maths-II/11.Maths-II.html"
            break;
        case '12maths-I':
            y.src = "Std.12/Maths-I/12.Maths-I.html"
            break;
        case '12maths-II':
            y.src = "Std.12/Maths-II/12.Maths-II.html"
            break;
        case '6science':
            y.src = "Std.6/Science/6.Science.html"
            break;
        case '7science':
            y.src = "Std.7/Science/7.Science.html"
            break;
        case '8science':
            y.src = "Std.8/Science/8.Science.html"
            break;
        case '9science':
            y.src = "Std.9/Science/9.Science.html"
            break;
        case '10science-I':
            y.src = "Std.10/Science-I/10.Science-I.html"
            break;
        case '10science-II':
            y.src = "Std.10/Science-II/10.Science-II.html"
            break;
        case '11physics':
            y.src = "Std.11/Physics/11.Physics.html"
            break;
        case '11chemistry':
            y.src = "Std.11/Chemistry/11.Chemistry.html"
            break;
        case '12physics':
            y.src = "Std.12/Physics/12.Physics.html"
            break;
        case '12chemistry':
            y.src = "Std.12/Chemistry/12.Chemistry.html"
            break;
        case '5english':
            y.src = "Std.5/English/5.English.html"
            break;
        case '6english':
            y.src = "Std.6/English/6.English.html"
            break;
        case '7english':
            y.src = "Std.7/English/7.English.html"
            break;
        case '8english':
            y.src = "Std.8/English/8.English.html"
            break;
        case '9english':
            y.src = "Std.9/English/9.English.html"
            break;
        case '10english':
            y.src = "Std.10/English/10.English.html"
            break;
        case '11english':
            y.src = "Std.11/English/11.English.html"
            break;
        case '12english':
            y.src = "Std.12/English/12.English.html"
            break;
        case '5evs':
            y.src = "Std.5/Environmental Studies/5.Environmental studies.html"
            break;
        case '6geography':
            y.src = "Std.6/Geography/6.Geography.html"
            break;
        case '7geography':
            y.src = "Std.7/Geography/7.Geography.html"
            break;
        case '8geography':
            y.src = "Std.8/Geography/8.Geography.html"
            break;
        case '9geography':
            y.src = "Std.9/Geography/9.Geography.html"
            break;
        case '10geography':
            y.src = "Std.10/Geography/10.Geography.html"
            break;
        case '5history':
            y.src = "Std.5/History/5.History.html"
            break;
        case '6history':
            y.src = "Std.6/History/6.History.html"
            break;
        case '7history':
            y.src = "Std.7/History/7.History.html"
            break;
        case '8history':
            y.src = "Std.8/History/8.History.html"
            break;
        case '9history':
            y.src = "Std.9/History/9.History.html"
            break;
        case '10history':
            y.src = "Std.10/History/10.History.html"
            break;
        case '11biology':
            y.src = "Std.11/Biology/11.Biology.html"
            break;
        case '12biology':
            y.src = "Std.12/Biology/12.Biology.html"
            break;
    }
}