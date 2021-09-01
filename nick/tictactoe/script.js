const ticGridStart = [2, 0, 0, 0, 0, 0, 0, 0, 0];
//2 is O    1 is X      0 is empty

//PATTERNS --> first element is the pattern match and second element is the index
const pattern1 = [[2, 0, 1, 0, 0, 0, 0, 0, 0], 1];
const pattern2 = [[2, 2, 1, 0, 0, 1, 0, 0, 0], 7];
const pattern3 = [[2, 1, 0, 0, 0, 0, 0, 0, 0], 5];
const pattern4 = [[2, 1, 0, 0, 1, 2, 0, 0, 0], 7];
const pattern5 = [[2, 1, 0, 0, 0, 2, 1, 0, 0], 3];
const pattern6 = [[2, 1, 2, 1, 0, 2, 1, 0, 0], 8];
const pattern7 = [[2, 1, 0, 0, 1, 2, 0, 1, 2], 2];

var ticGrid = ticGridStart;
var items = document.querySelectorAll(".GridItem");
var gameStatusDiv = document.querySelector(".GameStatus");

var isUserTurn = false;
var gameFin = false;

items.forEach(item => item.addEventListener('click', () => userTurn(item)));

function userTurn(element) {
    // console.log('hello');
    if (ticGrid[element.id] == 0 && isUserTurn == true) {
        updateGrid(element.id, 1);
        // isUserTurn = false;
        botTurn();
    }
}

function botTurn() {
    //add delay???

    var indexVal = definiteMove();
    // var indexVal;
    if (indexVal == null) {
        indexVal = strategicMove();
    }

    if (indexVal == null) {
        indexVal = firstPossibleVal();
    }

    updateGrid(indexVal, 2);
    // isUserTurn = true;
}

function updateGrid(index, val) {
    if (gameFin == true) {
        return;
    }

    ticGrid[index] = val;
    items.forEach(item => item.innerHTML = symbolfy(ticGrid[item.id]))
    isUserTurn = (isUserTurn == true) ? false : true;
    checkWin();
    if (gameFin == false) {
        checkTie();
    }
    if (gameFin == true) {
        //game just finished

    }
}

function checkTie() {
    for (var i = 0; i < 9; i++) {
        if (ticGrid[i] == 0) {
            return;
        }
    }

    //tie!
    gameStatusDiv.innerHTML = 'We tied! Still haven\'t beaten me tho ;)';
    gameFin = true;
}

function symbolfy(num) {
    return (num == 2) ? 'O' : (num == 1) ? 'X' : ' ';
}

function firstPossibleVal() {
    for (var index = 0; index < ticGrid.length; index++) {
        if (ticGrid[index] == 0) {
            return index;
        }
    }
}

function checkWin() {
    for (var num = 0; num <= 3; num++) {
        //boxed
        //1,2,3
        var twoNum = num * 2;
        checkTupleWin(ticGrid[twoNum + 1], ticGrid[twoNum + 2], (twoNum + 3 > 8) ? ticGrid[1] : ticGrid[twoNum + 3]);

        //centred
        checkTupleWin(ticGrid[0], ticGrid[num + 1], ticGrid[num + 5]);
    }
}

function checkTupleWin(num1, num2, num3) {
    var tuple = [num1, num2, num3];
    // console.log(tuple)

    if (tuple[1] == tuple[0] && tuple[1] == tuple[2] && tuple[0] != 0) {
        //win!!
        console.log('Win');
        console.log(tuple);
        gameFin = true;
        gameStatusDiv.innerHTML = 'You Lost! Try better next time ;)'
    }
}

function definiteMove() {
    // console.log('definitie moveeeeeeeeeeeeeeeeeeee............')
    var hasInstantWin = true;
    for (var num = 0; num <= 3; num++) {
        //boxed
        //1,2,3
        var twoNum = num * 2;
        var temp;
        temp = checkTupleDefinite(twoNum + 1, twoNum + 2, (twoNum + 3 > 8) ? 1 : twoNum + 3, hasInstantWin);
        if (temp != null) {
            return temp;
        }
        //centred
        temp = checkTupleDefinite(0, num + 1, num + 5, hasInstantWin);
        if (temp != null) {
            return temp;
        }
    }

    hasInstantWin = false;
    for (var num = 0; num <= 3; num++) {
        //boxed
        //1,2,3
        var twoNum = num * 2;
        var temp;
        temp = checkTupleDefinite(twoNum + 1, twoNum + 2, (twoNum + 3 > 8) ? 1 : twoNum + 3, hasInstantWin);
        if (temp != null) {
            return temp;
        }
        //centred
        temp = checkTupleDefinite(0, num + 1, num + 5, hasInstantWin);
        if (temp != null) {
            return temp;
        }
    }

    return null;
}

function checkTupleDefinite(num1, num2, num3, winCheck) {
    // console.log(num1 + ' ' + num2 + ' ' + num3)
    var tuple = [ticGrid[num1], ticGrid[num2], ticGrid[num3]];

    // console.log('Checking tuple: ' + tuple);

    var zeroIndex;
    if (ticGrid[num1] == 0) {
        zeroIndex = num1;
    } else if (ticGrid[num2] == 0) {
        zeroIndex = num2;
    } else if (ticGrid[num3] == 0) {
        zeroIndex = num3;
    }

    // console.log('zero index is: ' + zeroIndex);

    tuple.sort();

    if (tuple[0] == 0 && tuple[1] == tuple[2] && tuple[1] != 0) {
        //definite move... return index
        if (winCheck == false) {
            return zeroIndex;
        } else {
            if (tuple[1] == 2) {
                // console.log('INSTANT WIN')
                return zeroIndex;
            }
        }

    }

    return null;
}

function strategicMove() {
    var temp;

    //for each of the 7 patterns
    temp = checkPattern(pattern1);
    if (temp != null) {
        return temp;
    }
    temp = checkPattern(pattern2);
    if (temp != null) {
        return temp;
    }
    temp = checkPattern(pattern3);
    if (temp != null) {
        return temp;
    }
    temp = checkPattern(pattern4);
    if (temp != null) {
        return temp;
    }
    temp = checkPattern(pattern5);
    if (temp != null) {
        return temp;
    }
    temp = checkPattern(pattern6);
    if (temp != null) {
        return temp;
    }
    temp = checkPattern(pattern7);
    if (temp != null) {
        return temp;
    }
}

function checkPattern(pattern) {
    var patternMatch = pattern[0];
    patternMatch = patternMatch.slice(1);
    var gridMatch = ticGrid.slice(1);
    console.log(patternMatch)
    console.log(gridMatch)

    for (var i = 0; i < 4; i++) {
        shiftedPatternMatch = shiftPattern(patternMatch, i);      //need to write this
        console.log('shifted pattern: ')
        console.log(shiftedPatternMatch)
        if (checkEquals(shiftedPatternMatch, gridMatch)) {
            console.log('PAttern mached!')
            var tempIndex = pattern[1] + (2 * i);
            return (tempIndex <= 8) ? tempIndex : tempIndex - 8; //still have to alter this
        }
    }
}

function checkEquals(a, b) {
    for (var i = 0; i < 8; i++) {
        if (a[i] != b[i]) {
            console.log('did not match')
            return false;

        }
    }
    return true;
}

function shiftPattern(pattern, shiftNum) {
    if (shiftNum == 0) {
        return pattern;
    }

    var separator = 8 - (shiftNum * 2);

    var rightSide = pattern.slice(separator);
    //6 for i = 1
    //4 for i = 2
    //2 for i = 3
    var leftSide = pattern.slice(0, separator);
    console.log('Separator: ' + separator)
    console.log('Leftside: ' + leftSide + 'Right side: ' + rightSide)
    var newPattern = rightSide.concat(leftSide);
    return newPattern;

}

//game begins
updateGrid();

