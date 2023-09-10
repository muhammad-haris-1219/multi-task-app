// timer
var ms = document.getElementById('ms');
var sec = document.getElementById('sec');
var min = document.getElementById('min');
var hr = document.getElementById('hr');
var timerList = document.getElementById('timer_list');
var mS = 0;
var seC = 0;
var miN = 0;
var hrS = 0;
var countDown;

function playTimer() {

    countDown = setInterval(function () {
        mS++
        if (mS < 10) {
            mS = '0' + mS
        }
        ms.innerText = mS + ' ms';


        if (mS >= 100) {
            seC++
            if (seC < 10) {
                seC = '0' + seC
            }
            sec.innerText = seC + ' sec';
            mS = 0;
        }


        else if (seC >= 60) {
            miN++
            if (miN < 10) {
                miN = '0' + miN
            }
            min.innerText = miN + ' min';
            seC = 0;
        }


        else if (miN >= 60) {
            hrS++
            if (hrS < 10) {
                hrS = '0' + hrS
            }
            hr.innerText = hrS + ' hr';
            miN = 0;
        }
    }, 10)
    document.getElementById('play').disabled = true;

}
function pasueTimer() {
    clearInterval(countDown);
    console.log(countDown)
    document.getElementById('play').disabled = false;
}
function resetTimer() {
    mS = 0;
    seC = 0;
    miN = 0;
    hrS = 0;
    ms.innerHTML = mS + '0 ms';
    sec.innerHTML = seC + '0 sec';
    min.innerHTML = miN + '0 min';
    hr.innerHTML = hrS + '0 hrs'
    clearInterval(countDown);
    document.getElementById('play').disabled = false;
}

function lapTimer() {
    document.getElementById('ytl').style.display = "none";

    var timeData = hr.innerText + " " + min.innerText + " " + sec.innerText + " " + ms.innerText;
    var list = document.createElement('span');
    list.setAttribute('class', 'list');
    var listText = document.createTextNode(timeData);
    list.appendChild(listText);
    timerList.appendChild(list);
}

// todo_list

var todoList = document.getElementById('sub_list'); //main div
function addTask() {
    document.getElementById('none').style.display = "none";
    var todoInput = document.getElementById('todo_input');
    var taskList = document.createElement('div'); //collective div
    taskList.setAttribute('class', "task_list");
    //for getting input values
    var taskContainer = document.createElement('span');
    taskContainer.setAttribute('class', 'task_container');
    var taskContainerValue = document.createTextNode(todoInput.value);
    taskContainer.appendChild(taskContainerValue)
    // for updating/deleting got values
    var btnContainer = document.createElement('span');
    btnContainer.setAttribute('class', 'btn_container');
    var editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit_btn');
    editBtn.setAttribute('onclick', 'editBtn(this)') //'this' it's an special argument which target that specific element(current)
    btnContainer.appendChild(editBtn);
    var editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit_btn');
    editBtn.setAttribute('onclick', 'deleteBtn(this)')  //'this' it's an special argument which target that specific element(current)
    btnContainer.appendChild(editBtn);
    // for integerating elements
    taskList.appendChild(taskContainer);
    taskList.appendChild(btnContainer);
    todoList.appendChild(taskList);
    todoInput.value = ' ';
}
function clearTask() {
    todoList.parentElement.firstElementChild.innerText = '  ';
    var taskList = document.createElement('div');
    taskList.setAttribute('class', "task_list");
    var taskContainer = document.createElement('span');
    taskContainer.setAttribute('class', 'task_container');
    var taskContainerValue = document.createTextNode('Your Task');
    taskContainer.appendChild(taskContainerValue)
    var btnContainer = document.createElement('span');
    btnContainer.setAttribute('class', 'btn_container');
    var editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit_btn');
    btnContainer.appendChild(editBtn);
    var editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit_btn');
    btnContainer.appendChild(editBtn);
    taskList.appendChild(taskContainer);
    taskList.appendChild(btnContainer);
    todoList.appendChild(taskList);
}
function deleteBtn(item) {
    item.parentElement.parentElement.remove(); //using double '.parentElement'  fot targeting 'taskList' div
}
function editBtn(item) {
    var rewritetask = prompt('Rewrite Your Task', item.parentElement.parentElement.firstChild.innerHTML)
    item.parentElement.parentElement.firstChild.innerHTML = rewritetask
    console.log(rewritetask)


    //using double '.parentElement'  fot targeting 'taskList' div
    //     var a =document.getElementById('todo_input');
    // a.value = item.parentElement.parentElement.firstChild.innerHTML;
    // console.log(a.value)
}

// Timer

var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');
var msec = document.getElementById('msec');
var H = 10;

var mSec = 0;
var timer;
var stop;
function startSec() {
    var S = +prompt('Type Seconds');
    stop = setInterval(function () {
        mSec++
        if (mSec < 10) {
            mSec = '0' + mSec;
        }
        msec.innerHTML = mSec + ' ms';
        if (mSec >= 100) {
            S--
            if (S < 10) {
                S = '0' + S
            }
            s.innerHTML = S + ' sec';
            mSec = 0;
        }
        else if (S <= 0) {
            S = 0;
            mSec = 0;
            msec.innerHTML = '0' + mSec + ' ms'
            alert('Time Is Over')
            return clearInterval(stop)
        }
    }, 10)
}



function startMin() {
    var S = 0;
    var M = +prompt('Type Minutes');
    stop = setInterval(function () {
        mSec++
        if (mSec < 10) {
            mSec = '0' + mSec;
        }
        msec.innerHTML = mSec + ' ms';
        if (mSec >= 100) {
            S++
            if (S < 10) {
                S = '0' + S
            }
            s.innerHTML = S + ' sec';
            mSec = 0;
        }
        else if (S >= 60) {
            M--
            if (M < 10) {
                M = '0' + M;
            }
            m.innerHTML = M + ' min';
            S = 0;
        }

        else if (M <= 0) {
            M = 0;
            S = 0;
            mSec = 0;
            s.innerHTML = "0" + S + ' sec';
            msec.innerHTML = '0' + mSec + ' ms';
            alert('Time Is Over');
            return clearInterval(stop);
        }
    }, 10)
}
function startHrs() {
    var S = 0;
    var M = 0;
    var H = +prompt('Type Hours');
    stop = setInterval(function () {
        mSec++
        if (mSec < 10) {
            mSec = '0' + mSec;
        }
        msec.innerHTML = mSec + ' ms';
        if (mSec >= 100) {
            S++
            if (S < 10) {
                S = '0' + S
            }
            s.innerHTML = S + ' sec';
            mSec = 0;
        }
        else if (S >= 6) {
            M++
            if (M < 10) {
                M = '0' + M;
            }
            m.innerHTML = M + ' min';
            S = 0;
        }

        else if (M >= 2) {
            H--
            if (H < 10) {
                H = '0' + H;
            }
            h.innerHTML = H + ' hrs';
            M = 0;
        }

        else if (H <= 0) {
            H = 0;
            M = 0;
            S = 0;
            mSec = 0;
            m.innerHTML = '0' + M + ' min'
            s.innerHTML = "0" + S + ' sec';
            msec.innerHTML = '0' + mSec + ' ms';
            alert('Time Is Over');
            return clearInterval(stop);
        }
    }, 10)
}

//Game

function gameSwitch1() {
    document.getElementById('g_w2').style.display = 'block';
    document.getElementById('g_w1').style.display = 'none';
    document.getElementById('user_input').type = 'text';
    document.getElementById('comp_input').type = 'text';
    document.getElementById('r_g2').style.display = 'block';
    document.getElementById('r_g1').style.display = 'none';
}
function gameSwitch2() {
    document.getElementById('g_w1').style.display = 'block';
    document.getElementById('g_w2').style.display = 'none';
    document.getElementById('user_input').type = 'number';
    document.getElementById('comp_input').type = 'number';
    document.getElementById('r_g1').style.display = 'none';
    document.getElementById('r_g2').innerHTML = 'haris'
}


var score = 0;
var chance = 5;
var game;
function randomGame1() {
    //Matching Numbers
    var gameScore = document.getElementById('game_score');
    var userInput1 = +document.getElementById('user_input').value;
    var compInput1 = document.getElementById('comp_input').value = Math.floor(Math.random() * 20 + 1);
    console.log(typeof (compInput1))

    if (userInput1 == '' || compInput1 == '') {
        alert('Insert value');
        return
    }

    else if (userInput1 === +compInput1) {
        score++
        gameScore.innerHTML = score
        document.getElementById('status').innerHTML = '='
        gameScore.innerHTML = 'Chances: ' + chance + ' &  Scored: ' + score
        if (score == 3) {
            alert('You won the game');
            score = 0
            window.location.href = './index.html';
        }
    }

    else if (compInput1 != userInput1) {
        chance--
        document.getElementById('status').innerHTML = '≠'
        gameScore.innerHTML = 'Chances: ' + chance + ' &  Scored: ' + score
        if (chance == 0) {
            alert('You are loser');
            window.location.href = './index.html';
        }
    }

}


function randomGame2() {
    // // Matching Alphabets
    var gameScore = document.getElementById('game_score');
    var userInput2 = document.getElementById('user_input').value.toUpperCase();
    var alphacode = Math.floor(Math.random() * (90 - 65 + 1) + 65);
    var compAlpha = String.fromCharCode(alphacode);
    var compInput2 = document.getElementById('comp_input');
    compInput2.value = compAlpha



    if (userInput2 == '' || compInput2 == '') {
        alert('Insert value');
        return
    }
    else if (userInput2 === compInput2.value) {
        score++
        gameScore.innerHTML = 'Chances: ' + chance + ' &  Scored: ' + score;
        if (score == 3) {
            alert('You won the game');
            score = 0
        }
        console.log('sahi_1')

    }
    else if (compInput2 != userInput2) {
        chance--
        gameScore.innerHTML = 'Chances: ' + chance + ' &  Scored: ' + score;
        if (chance == 0) {
            alert('You are loser');
            window.location.href = './index.html';
        }
    }

}


//Switching Screen
function switchSG() {
    document.getElementById('switch2').style.display = 'block';
    document.getElementById('switch3').style.display = 'block';
    document.getElementById('switch4').style.display = 'block';
    document.getElementById('stopwatch_game_container').style.display = 'flex';

    document.getElementById('switch1').style.display = 'none';
    document.getElementById('timer_container').style.display = 'none';
    document.getElementById('todo_container').style.display = 'none';
    document.getElementById('clock_container').style.display = 'none';
    document.getElementById('clock_container1').style.display = 'none';
}

function switchTodo() {
    document.getElementById('switch1').style.display = 'block';
    document.getElementById('switch3').style.display = 'block';
    document.getElementById('switch4').style.display = 'block';
    document.getElementById('timer_container').style.display = 'flex';

    document.getElementById('switch2').style.display = 'none'
    document.getElementById('stopwatch_game_container').style.display = 'none';
    document.getElementById('todo_container').style.display = 'none';
    document.getElementById('clock_container').style.display = 'none';
    document.getElementById('clock_container1').style.display = 'none';
}

function switchTimer() {
    document.getElementById('switch1').style.display = 'block';
    document.getElementById('switch2').style.display = 'block';
    document.getElementById('switch4').style.display = 'block';
    document.getElementById('todo_container').style.display = 'flex';

    document.getElementById('switch3').style.display = 'none'
    document.getElementById('timer_container').style.display = 'none';
    document.getElementById('stopwatch_game_container').style.display = 'none';
    document.getElementById('clock_container').style.display = 'none';
    document.getElementById('clock_container1').style.display = 'none';
}


function switchClock() {
    document.getElementById('switch1').style.display = 'block';
    document.getElementById('switch2').style.display = 'block';
    document.getElementById('switch3').style.display = 'block';
    document.getElementById('clock_container').style.display = 'grid';
    document.getElementById('clock_container1').style.display = 'grid';

    document.getElementById('switch4').style.display = 'none';
    document.getElementById('timer_container').style.display = 'none';
    document.getElementById('todo_container').style.display = 'none';
    document.getElementById('stopwatch_game_container').style.display = 'none';
}








setInterval(function () {
    var currentWqt = new Date();
    var copyTime = currentWqt.toString().slice(0, 15);
    var currentSec = currentWqt.getSeconds();
    var currentMin = currentWqt.getMinutes();
    var currentHr = currentWqt.getHours();


    var aMpM = document.createElement('span');
    var aM = document.createTextNode(' ');
    aMpM.setAttribute('class', 'mm')

    if (currentHr >= 12) {
        aM = document.createTextNode('PM');
    }
    else {
        aM = document.createTextNode('AM');
    }
    aMpM.appendChild(aM)
    // console.log(aM)



    var currentTime = document.getElementById('current_time');
    var cSec = document.getElementById('c_sec');
    var circleSec = document.getElementById('circle_sec');
    var cMin = document.getElementById('c_min');
    var circleMin = document.getElementById('circle_min');
    var chr = document.getElementById('c_hr');
    var circleHr = document.getElementById('circle_hr');

    // Hidden
    var currentTime1 = document.getElementById('current_time1');
    var cSec1 = document.getElementById('c_seci');
    var circleSec1 = document.getElementById('circle_seci');
    var cMin1 = document.getElementById('c_mini');
    var circleMin1 = document.getElementById('circle_mini');
    var chr1 = document.getElementById('c_hri');
    var circleHr1 = document.getElementById('circle_hri');


    if (currentHr > 12) {
        currentHr = currentHr - 12;
        if (currentHr < 10) {
            currentHr = "0" + currentHr;
        }
    }
    if (currentSec < 10) {
        currentSec = "0" + currentSec;
    }
    if (currentMin < 10) {
        currentMin = "0" + currentMin;
    }




    cSec1.innerHTML = cSec.innerHTML = "Seconds" + ' <br>' + currentSec
    circleSec1.style.strokeDashoffset = circleSec.style.strokeDashoffset = 630 - (630 * currentSec) / 60;

    cMin1.innerHTML = cMin.innerHTML = "Minutes" + ' <br>' + currentMin
    circleMin1.style.strokeDashoffset = circleMin.style.strokeDashoffset = 630 - (630 * currentMin) / 60;

    chr1.innerHTML = chr.innerHTML = "Hours" + ' <br>' + currentHr
    circleHr1.style.strokeDashoffset = circleHr.style.strokeDashoffset = 630 - (630 * currentHr) / 12;

    circleSec1.style.strokeDashoffset = 408 - (408 * currentSec) / 60;
    circleMin1.style.strokeDashoffset = 408 - (408 * currentMin) / 60;
    circleHr1.style.strokeDashoffset = 408 - (408 * currentHr) / 12



    currentTime1.innerHTML = currentTime.innerHTML = copyTime;

    // console.log(aMpM)
    currentTime.appendChild(aMpM);
    currentTime1.appendChild(aMpM);










}, 1000)





function swipeTime() {
    document.getElementById('stopwatch_game_container').style.display = 'none';
    document.getElementById('todo_container').style.display = 'none';
    document.getElementById('timer_container').style.display = 'none';
    document.getElementById('clock_container').style.display = 'grid';
    document.getElementById('swipe_container').style.display = 'flex';
    document.getElementById('swipe_clock').style.display = 'none';

}
function swipeContainer() {
    document.getElementById('stopwatch_game_container').style.display = 'flex';
    document.getElementById('todo_container').style.display = 'flex';
    document.getElementById('timer_container').style.display = 'flex';
    document.getElementById('clock_container').style.display = 'none';
    document.getElementById('swipe_container').style.display = 'none';
    document.getElementById('swipe_clock').style.display = 'flex';
}






























