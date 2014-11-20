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
    
    var i = splitLink(text);
    
    var movies = getMovies();
    var image = movies[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
    var title = movies[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var year = movies[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;
    var category = movies[i].getElementsByTagName("category")[0].childNodes[0].nodeValue;
    var director = movies[i].getElementsByTagName("director")[0].childNodes[0].nodeValue;
    var description = movies[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
    var trailer = movies[i].getElementsByTagName("trailer")[0].childNodes[0].nodeValue;
    var rating = movies[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue;
    var views = movies[i].getElementsByTagName("views")[0].childNodes[0].nodeValue;
    
    var infoE = document.getElementById("movie_info");
    infoE.innerHTML = "<h2>"+title+"</h2><img src='"+image+"'/>";
                        
}

function splitLink(str) {
    theleft = str.indexOf("=") + 1;
    return(str.substring(theleft));
}

