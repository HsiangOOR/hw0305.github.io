var mylist = document.getElementById("mylist");
for (i = 1; i < 10; i++) {
    var tr = document.createElement("tr");
    for (j = 1; j < 6; j++) {
        var td = document.createElement("td");
        td.innerText = j + "x" + i + "=" + (i * j);
        tr.appendChild(td);
    }
    mylist.appendChild(tr);
  
}


var second = document.getElementById("second");
for (x = 1; x < 10; x++) {
    var tr = document.createElement("tr");
    for (y = 6; y < 10; y++) {

        var td = document.createElement("td");
        td.innerText = y + "x" + x + "=" + (y * x);
        tr.appendChild(td);
    }
    second.appendChild(tr);

}

