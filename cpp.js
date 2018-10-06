alert("You Have Exactly 2 Minutes to Complete the test");

var i = 1;

var Employablity_chances="";

var op1, op2, op3, op4, cor, incor, qtn, type, pos = 0, test, chD, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
    ["#include<iostream>\nusing namespace std;\nint main(){\nint cin;\ncin >> cin;\ncout <<'cin'<< cin;\nreturn 0;}", "error in using cin keyword", "cin+junk value", "cin+input", "Runtime error", "B"],
    ["#include <iostream>\n#include < vector >\nusing namespace std;\nclass a{\npublic:~a()\n{\ncout <<'destroy';}};\nint main(){\nvector < a *> * v1  = new vector < a *>; \nvector < a > * v2  = new vector<a>;\nreturn 0;}", "v1", "v2", "v1 and v2", "No Destructor at call", "D"],

    ["Choose the pure virtual function definition from the following.", "virtual void f()=0 { }", "void virtual f()=0 { }", "virtual void f() {} = 0;", "virtual void f() {} = 0;", "D"],
    ["With respective to streams >> (operator) is called as", " Insertion operator",
        "Extraction operator", "Right shift operator", "Left shift operator", "B"],
    ["Runtime polymorphism is done using.", "Function overloading", "Virtual classes", "Virtual functions", "Friend function", "C"]
];

var answers = [];

/*function load(){
    document.getElementById("qno").innerHTML="Question: "+(i+1);

    qtn = questions[i][0];

    type = document.getElementById("goes");

    type.innerHTML="<p>"+qtn+"</p>";


    op1 = questions[i][1];
    op2 = questions[i][2];
    op3 = questions[i][3];
    op4 = questions[i][4];


    type.innerHTML += "< input type = 'radio' name = 'choices' value = 'A' > "+op1+" < br >";
    type.innerHTML += "< input type = 'radio' name = 'choices' value = 'B' > " + op2 + " < br >";
    type.innerHTML += "< input type = 'radio' name = 'choices' value = 'C' > " + op3 + " < br >";
    type.innerHTML += "< input type = 'radio' name = 'choices' value = 'D' > " + op4 + " < br >";
    type.innerHTML += '<button onclick="load()" id="nxt" type="button" class="btn btn-success btn-lg" style="text-align:center;padding:20px;margin-left:40%;width: 20%">Next</button>';
    
    i++;
}*/

function _(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = '<pre style="font-size:18px;font-family: Roboto, sans-serif;">You Got ' + correct + ' of ' + questions.length + ' questions correct \n' +
            '<br/>Percentage:' + (correct / questions.length) * 100 + '%\n<br/> Employability Chances:' + Employablity_chances + ' </pre><br/><br/>';
        test.innerHTML += "<button type='button'  onclick='newLoad()' class='btn btn-success btn-lg' style='width:40%;padding:10px;margin-left:30%;text-align:center'>Home</button>";
        _("test_status").innerHTML = "<br/><h2 style='font-family:Roboto, sans-serif; windo'>Test Comleted!</h2>";
        pos = 0;
        //correct = 0;
        return false;
    }

    _("test_status").innerHTML = "<h2 style='font-family:Roboto, sans-serif;'>Question " + (pos + 1) + " of " + questions.length + "</h2>";
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<pre style='font-size:16px'>" + question + "</pre>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B' style='font-size:20px'> " + chB + "<br>";
    test.innerHTML += "<input  type='radio' name='choices' value='C' style='font-size:20px'>" + chC + "<br>";
    test.innerHTML += "<input  type='radio' name='choices' value='D' style='font-size:20px'>" + chD + "<br><br>";
    test.innerHTML += "<button  type='button' class='btn btn-success btn-lg' style='width:40%;padding:10px;margin-left:30%;text-align:center' onclick='checkAnswer()'>Next</button>";
}
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][5]) {
        correct++;
    }
    pos++;
    renderQuestion();
}

var perc = (correct / questions.length) * 100;
if (perc >= 80) {
    Employablity_chances = "Excellent! you Rocks!";
}
else if (perc < 80 && perc >= 0) {
    Employablity_chances = "A Good Try! Keep re-taking to Improve & get hired!";

}


function newLoad() {
    window.location.assign("dashboard.html");

}

var timer = 120;
var min = 0;
var sec = 0;

function startTimer() {
    min = parseInt(timer / 60);
    sec = parseInt(timer % 60);
    if (timer == 0) {
        test = _("test");

        test.innerHTML = '<pre style="font-size:18px;font-family: Roboto, sans-serif;">You Got ' + correct + ' of ' + questions.length + ' questions correct<br/> \n' +
            'Percentage:' + (correct / questions.length) * 100 + '%\n<br/> Employability Chances:' + Employablity_chances + ' </pre><br/><br/>';
        test.innerHTML += "<button type='button'  onclick='newLoad()' class='btn btn-success btn-lg' style='width:40%;padding:10px;margin-left:30%;text-align:center'>Home</button>";
        _("test_status").innerHTML = "<br/><h2 style='font-family:Roboto, sans-serif; windo'>Test Comleted!</h2>";
        //pos = 0;
        //correct = 0;
        return false;



    }

    document.getElementById('timer').innerHTML = "<b>&nbsp;Time:" + min.toString() + "&nbsp;min:" + sec.toString() + "&nbsp;sec </b>";
    timer--;
    if (timer == 0) {
        timer = 0;
        clearTimeout(setTimeout(function () {
            startTimer();
        }, 1000), 1000);

        clearInterval(0);
    }

    setTimeout(function () {
        startTimer();
    }, 1000);
}




window.addEventListener("load", renderQuestion, false);


