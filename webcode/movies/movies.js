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
    var movies = getMovies();
    var i = getIdFromUrl();
    if(!(i % 1 === 0) || i >= movies.length){ // no, it's not an Integer
        window.location.assign("index.html");
        return;
    }
    
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
    var titleRow = "<tr><td colspan='2' class='no_indent'><h1>"+title+" ("+year+")</h1></td></tr>";
    var imageCol = "<tr><td rowspan='5' class='no_indent'><img src='"+image+"'/></td>";
    var textCol = "<td>Rating: <span class='bigText'>"+rating+"/6</span></td></tr><tr><td>Views: <span class='bigText'>"+views+"</span></td></tr>";
    var textCol2 = "<tr><td>Director: <span class='bigText'>"+director+"</span></td></tr><tr><td>Category: <span class='bigText'>"+category+"</span></td></tr>";
    var textCol3 = "<tr><td>Plot:<br><span class='bigText'>"+description+"</span></td></tr><tr><td colspan='2'><a id='rent_link' href='rent.html?movieId="+i+"'><div id='rent_button'><i class='fa fa-shopping-cart'></i> Rent '"+title+"'</div></a></td></tr>";
    infoE.innerHTML = "<table id='movie_table'>"+titleRow+imageCol+textCol+textCol2+textCol3+"</table>";
    
    document.getElementById("movie_trailer").src = "http://www.youtube.com/embed/" + trailer;
                        
}

function splitLink(str) {
    theleft = str.indexOf("=") + 1;
    return(str.substring(theleft));
}

function getIdFromUrl(){
   
    
    var locate = window.location;
    idForm.value = locate;
    var text = idForm.value;    
    return splitLink(text);
}
