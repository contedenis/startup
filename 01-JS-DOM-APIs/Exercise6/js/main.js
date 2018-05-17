window.onload = function() {
    document.getElementById('btn').addEventListener('click', tableGenerator);

    function tableGenerator() {

    let body = document.getElementsByTagName('body')[0];
    tables = document.createElement('table');
    tables.setAttribute('class', 'table table-striped mt-4');
    tables.setAttribute('align', 'center');
    tables.setAttribute('id','table');

    if(document.getElementById('table')) {
        document.getElementById('table').remove();
    }
    
    let matriz = [2];
    matriz[0] = document.getElementById('rows').value;
    matriz[1] = document.getElementById('columns').value;

    for (var i = 0; i < matriz[0]; i++) {
        tr = document.createElement('tr');
        for (var j = 0; j < matriz[1]; j++) {

                td = document.createElement('td');
                textTd = document.createTextNode('Row: '+i+'. Column: '+j);

                td.appendChild(textTd);
                tr.appendChild(td);

        }
        tables.appendChild(tr);
            
    }
    body.appendChild(tables);
}
}