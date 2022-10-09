// global var
var row_counter = 0;

/**
 * Changes the greeting color and adds to the history table.
 * 
 * @param {String} color The color selected by the user.
 */
function print_greeting(color) {
    // change the greeting color
    var greeting = document.getElementById("greeting");
    switch (color) {
        case "red":
            greeting.style.color = "red";
            break;
        case "orange":
            greeting.style.color = "orange";
            break;
        case "yellow":
            greeting.style.color = "yellow";
            break;
        case "green":
            greeting.style.color = "green";
            break;
        case "blue":
            greeting.style.color = "blue";
            break;
        case "violet":
            greeting.style.color = "violet";
            break;
    }
    greeting.style.visibility = "visible";

    // add row to the history table
    var table_history = document.getElementById("table_history");
    var row = table_history.insertRow();
    var index_cell = row.insertCell(0);
    var color_cell = row.insertCell(1);
    index_cell.innerText = ++row_counter;
    color_cell.innerText = color;
}