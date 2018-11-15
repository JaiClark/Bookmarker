// listen for form submit
  document.getElementById("myForm").addEventListener('submit', saveBookmark);

  //Save Bookmark
  function saveBookmark() {
    // get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;


    var bookmark = {
      name: siteName,
      url: siteURL
    }

    //Test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null) {
      //Init array
      var bookmarks = [];
      // Add to array
      bookmarks.push(bookmark);
      // Set to Localstorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    e.preventDefault();
  }


// //fetch Bookmarks
function fetchBookmarks(){
//get bookmarks from LocalStorage
var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//Get output id
var bookmarksResults = document.getElementById('bookmarksResults');

//Build output
bookmarksResults.innerHTML = "" ;
for(var i = 0; i < bookmarks.length; i++){
  var name = bookmarks[i].name;
  var url = bookmarks[i].url;

  bookmarksResults.innerHTML += '<div class="well">'+
                                '<h3>'+name+
                                ' <a class="btn btn-default" target="_blank" href="'+addhttp(url)+'">Visit</a> ' +
                                ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                '</h3>'+
                                '</div>';
}
}