let hidden = [];
let inactive = [];
// find elements with input class and add "hidden" class to end of class="" tag
function hide(hide) {
    let x = document.getElementsByClassName(hide);
    for (i = x.length; i > 0; i--) {
        x[i - 1].className = x[i - 1].className.replace(`${hide}`, `${hide} hidden`);
    }
}
// find elements with input class and remove "hidden" class from class="" tag
function show(show) {
    let x = document.getElementsByClassName(show);
    for (i = x.length; i > 0; i--) {
        x[i - 1].className = x[i - 1].className.replace(` hidden`, "");
    }
}
// find all elements with "hidden" class and remove from class="" tag
function showAll() {
    let x = document.getElementsByClassName('hidden');
    for (i = x.length; i > 0; i--) {
        x[i - 1].className = x[i - 1].className.replace(` hidden`, "");
    }
    hidden = [];
    // reset button colours
    inactive.forEach((id, idx) => {
        let x = document.getElementById(id);
        x.style = null;
    });
}
// check if element is shown or hidden
function toggle(cls, btn) {
    // if input class is hidden
    if (hidden.includes(cls)) {
        show(cls);
        hidden.forEach((elm, idx) => {
            elm === cls ? hidden.splice(idx, 1) : null;
        });
        // set button colour
        document.getElementById(btn).style.background = "var(--colour-3)";
    } else { //else hide
        hide(cls);
        hidden.push(cls);
        inactive.push(btn);
        // set button colour
        document.getElementById(btn).style.background = "var(--colour-4)";
    }
}

    

/* html syntax
<tag id="button name" onclick="toggle("class name", "button id") </tag>

funcs will find input class name and hide or show them
*/