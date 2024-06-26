// ----------- SIMPLE CALCUATOR ----------

// display screen element
const display = document.getElementById("display");

//get all button keys
const buttons = document.querySelectorAll(".keyPad");
const calculateBtn = document.querySelector("#calculateBtn");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const switchBtn = document.querySelector("#switch");

//append buttons values to display onclick
buttons.forEach((e) => {
    e.addEventListener("click", () => {
        const char = e.innerText;
        display.value += char;
    }); 
});

// Deleting all values from display screen with Calculator (CE) Button
deleteBtn.addEventListener("click", () => { display.value = "";});

// Removing last value with Calculator (C) Button
clearBtn.addEventListener("click", () => {
    if (display.value.lenght !=="") {
        let values = "";
        values += display.value;
        display.value = values.slice(0,-1);
    }
});

// Removing last value with Keyboard (Backspace) Keys
document.addEventListener("keydown", (event) => {
    if ((event.key) == "Backspace") {
        if (display.value.lenght !=="") {
            let values = "";
            values += display.value;
            display.value = values.slice(0,-1);
        }  
     }
});

// Calculate display values with Calculator (=) Button
calculateBtn.addEventListener("click", () => {

    if (display.value.lenght !=="") {
        let result;
        try {
            result = eval(display.value);
            display.value = result;
        }
        catch(error) {
            display.value = "Error";
        }
    }  
});

// Calculate Value With Keayboard (Enter) Key
document.addEventListener("keydown", (event) => {

    if (event.key == "Enter") {

        if (display.value.lenght !=="") {
            let result;
            try {
                result = eval(display.value);
                display.value = result;
            }
            catch(error) {
                display.value = "Error";
            }
        }  
    }
});

// document.addEventListener("click", (event) => console.log(event.target));

    