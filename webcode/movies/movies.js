function getMovies(){
if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}
                          
else {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 xmlhttp.open("GET","movies.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
                        
var x=xmlDoc.getElementsByTagName("movie");
return x;
}

