window.onload = function(){
    document.getElementById('btn').addEventListener("click", tableGenerator);

    function tableGenerator(){
    
    let clean = document.getElementById('table');
    clean.innerHTML = '';

    var body = document.getElementsByTagName("body")[0];
    var table = document.getElementById("table");
    tables = document.createElement("table");
    bodyTable = document.createElement("tbody");
    
    let matriz = [2];
    matriz[0] = document.getElementById('rows').value;
    matriz[1] = document.getElementById('columns').value;

    for (var i = 0; i < matriz[0]; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < matriz[1]; j++) {

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