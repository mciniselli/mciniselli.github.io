$(document).ready(function () {

    /* replace TO COMPLETE token in the bold red sentence when the document is ready*/

    code = document.getElementById("snippet1");
    text = code.innerHTML;
    text = text.replace("&lt;TO COMPLETE&gt;", "<span class=\"bold-red\">&lt;TO COMPLETE&gt; </span>")
    code.innerHTML = text;

    code = document.getElementById("snippet2");
    text = code.innerHTML;
    text = text.replace("&lt;TO COMPLETE&gt;", "<span class=\"bold-red\">targetStream.download(filename=name)</span>")
    code.innerHTML = text;

    // code = document.getElementById("snippet3");
    // text = code.innerHTML;
    // text = text.replace("&lt;TO COMPLETE&gt;", "<span class=\"bold-red\">targetStream.download(filename=name)</span>")
    // code.innerHTML = text;

    // code = document.getElementById("snippet4");
    // text = code.innerHTML;
    // text = text.replace("&lt;TO COMPLETE&gt;", "<span class=\"bold-red\">targetStream.download(filename=name)</span>")
    // code.innerHTML = text;

    // code = document.getElementById("snippet5");
    // text = code.innerHTML;
    // text = text.replace("&lt;TO COMPLETE&gt;", "<span class=\"bold-red\">targetStream.download(filename=name)</span>")
    // code.innerHTML = text;
});

/* populate the two tables with the claim we asked the participants to verify*/

rowData = [
    "<div>The recommendation is <b>aware of the coding context</b></div>",
    "<div>The recommendation is <b>concise</b> (as short and simple as possible</div>",
    "<div>In case it spans acrooss many statements, the recommendation is <b>divided into multiple chunks</b> (by using a blank line), each one responsible for a sub-task</div>",
    "<div>The recommendation code relies on <b>specific types</b> (e.g., str) rather than the generic one (e.g., Any)</div>",
    "<div>The <b>comments</b> documenting the recommended code (if any) are useful</div>",
    "<div>The recommended code is <b>adapted to the code</b> the developer is writing</div>",
    "<div>The recommended code is <b>adapted to the context</b> of the recommendation by adopting the same coding layout (e.g., same indentation, spaces between code tokens).</div>",
    "<div>The recommended code is <b>easy to maintain</b></div>",
    "<div>The recommended code is <b>optimized</b> in terms of performance (e.g., it does not introduce unneeded operations)</div>",
    "<div>The recommended code is <b>robust</b> when dealing with possible erroneous situations (e.g., a null check is implemented if needed)</div>",
    "<div>The recommended code is <b>easy to reuse</b> in other situations</div>",
    "<div>The recommended code <b>meets the best coding practices</b></div>",
    "<div>The recommended code is <b>readable</b> (e.g., avoid very long statements, adopt indentation) and easy to understand.</div>",
    "<div>The recommended code is <b>bug and vulnerability free</b>.</div>",
    "<div>The recommended code is <b>accurate</b> (i.e., the recommender must able to suggest a code semantically equivalent to the one the developer was going to write)</div>",

]

var tableBody = document.createElement('tbody');



for (let i = 0; i < rowData.length; i++) {
    var row = document.createElement('tr');

    var cell = document.createElement('td');
    cellData = rowData[i];
    cell.innerHTML = cellData;

    cell.className += "description";

    row.appendChild(cell);

    for (let j = 0; j < 6; j++) {
        var cell = document.createElement('td');
        cell.innerHTML = "<input class=\"form-check-input\" type=\"radio\" name=\"claims"+i.toString()+"\" /> "
        row.appendChild(cell);


    }
    tableBody.appendChild(row);

}


document.getElementById("claims").appendChild(tableBody);

var tableBody = document.createElement('tbody');



for (let i = 0; i < rowData.length; i++) {
    var row = document.createElement('tr');

    var cell = document.createElement('td');
    cellData = rowData[i];
    cell.innerHTML = cellData;

    cell.className += "description";

    row.appendChild(cell);

    for (let j = 0; j < 6; j++) {
        var cell = document.createElement('td');
        cell.innerHTML = "<input class=\"form-check-input\" type=\"radio\" name=\"claimsrandom"+i.toString()+"\" /> "
        row.appendChild(cell);


    }
    tableBody.appendChild(row);

}

document.getElementById("claims2").appendChild(tableBody);
