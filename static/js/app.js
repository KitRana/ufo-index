// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!

// var button = d3.select("#datetime");

// button.on("click", function() {

    data.forEach((searchReport) => {
        console.log(searchReport)
        var row = tbody.append("tr");

        Object.entries(searchReport).forEach(([key, value]) => {
            console.log(key, value)
            var cell = row.append("td");
            cell.text(value);
        });
    });


// Dynamic keyword search
var searchInput = document.getElementById('datetime');

searchInput.addEventListener('keyup', anyFilter);

function anyFilter(){
    var anyValue = document.getElementById('datetime').value.toUpperCase();
    // console.log(anyValue)

    var tbody = document.getElementById('table-id');

    var tr = tbody.querySelectorAll('tr');
    // console.log(td)

    // var td = tr.querySelectorAll('td');

    for (var i = 0; i < tr.length; i++) {
        if (tr[i].textContent.toUpperCase().indexOf(anyValue) > -1) {
            tr[i].style.display = '';
        } 
        else {
            tr[i].style.display = 'none';
        }
    }
    
}

// Advanced filter row hide/show
document.querySelector('button').addEventListener('click', function () {
    if (this.textContent == 'Advanced Filter') {
        this.textContent = 'Hide';
    } else {
        this.textContent = 'Advanced Filter';
    }
    var hidden = document.querySelector('div.hidden') //.style.display == 'flex';
    console.log(hidden)
        if (hidden.style.display == 'flex'){
            hidden.style.display = 'none';
        } else {
            hidden.style.display = 'flex'
        }
});

// Advanced filter using jQuery
var $rows = $('#table-id tr');
$('#dateSearch').keyup(function () {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase().split(' ');

    $rows.hide().filter(function () {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        var matchesSearch = true;
        $(val).each(function (index, value) {
            matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value);
        });
        return matchesSearch;
    }).show();
});