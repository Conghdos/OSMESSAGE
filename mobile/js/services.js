angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Books', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var books = [];
  var url="";
  return {
    all: function(wid) {
		switch(wid){
			case "sstruyen":
			url="http://www.sstruyen.com/doc-truyen/truyen-moi-nhat";
			break;
		}
		var xhr = createCORSRequest('POST', url);
		  if (!xhr) {
			alert('CORS not supported');
			return;
		  }
		  xhr.onreadystatechange = function (aEvt) {
		  if (xhr.readyState == 4) {
			 if(xhr.status == 200)
			{
				var txt=xhr.responseText;
				books.splice(0);
				$('div.fixContent:eq(0) div.storyinfo',txt).each(function(){
					var b=new Object();
					b.id=1;
					b.name=$(this).find("div.listTitle").text();
					b.type="";
					b.author="";
					b.page="";
					b.update="";
					b.img="";
					b.link="";
					b.conver=false;
					b.finish=false;
					books.push(b);
				})
				alert(books.length);
				return "ok";
			}
			 else
				alert("Error loading page\n");
		  }
		};

		  xhr.onerror = function() {
			alert('Woops, there was an error making the request.');
		  };
		xhr.send();
    },
    get: function(id) {
      // Simple index lookup
      return books[id];
    }
  }
});
  var book={
	id:"",name:"",type:"",author:"",page:0,update:"",img:"",link:"",convert:true,finish:false
  }
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

