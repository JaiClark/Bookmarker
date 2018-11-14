// listen for form submit
window.onload=function(){
 
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e){
    // get form values
    var siteName =document.getElementById('siteName').value;
    var siteURL =document.getElementById('siteURL').value;

    var bookmark = {
        name: siteName,
        url: siteURL
    }
    

    /*
    // Local Storage Test
    //Local Storage only stores strings
    localStorage.setItem('test', "Hello World");
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    //Test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
        //Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to Localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }


    //prevent form from submitting
    e.preventDefault();
}

}