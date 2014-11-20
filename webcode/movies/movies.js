function getMovies(){
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","movies.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML; 
                        
    var x=xmlDoc.getElementsByTagName("movie");
    return x;
}

var idForm;

function initMovie() {
    idForm = document.idContainer.id;
    displayMovie();
}

function displayMovie() {
    var locate = window.location;
    idForm.value = locate;

    var text = idForm.value;
    console.log(splitLink(text));
}

function splitLink(str) {
    theleft = str.indexOf("=") + 1;
    return(str.substring(theleft));
}

