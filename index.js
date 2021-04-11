let tableCount = document.querySelectorAll("td.tableNumber").length+1;

document.getElementById("addRow").addEventListener("click", () => {
    let table = document.getElementById("mainList");
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = tableCount++;
    row.insertCell(1).innerHTML = document.getElementById("nameInput").value;
    row.insertCell(2).innerHTML = document.getElementById("numberInput").value;
    row.insertCell(3).innerHTML = document.getElementById("costInput").value;
    document.getElementById("nameInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("costInput").value = "";
    //console.log("clicking works");
});

//console.log(document.all);
//console.log(document.querySelectorAll("td.tableNumber"));


