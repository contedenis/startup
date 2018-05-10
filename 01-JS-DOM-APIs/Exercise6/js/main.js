window.onload = function(){
    document.getElementById('btn').addEventListener("click", tableGenerator);

    function tableGenerator(){

    var body = document.getElementsByTagName("body")[0];
    var table = document.getElementById("table");
    tables = document.createElement("table");
    bodyTable = document.createElement("tbody");

    for (var i = 0; i < 10; i++) {

        tr = document.createElement("tr");

        for (var j = 0; j < 4; j++) {

            td = document.createElement("td");
            textTd = document.createTextNode("Row: "+i+". Column: "+j);

            td.appendChild(textTd);
            tr.appendChild(td);

        }

        bodyTable.appendChild(tr);

    }
    table.appendChild(bodyTable);
    table.appendChild(tables);
    body.appendChild(table);
    table.setAttribute("align", "center");
}
}