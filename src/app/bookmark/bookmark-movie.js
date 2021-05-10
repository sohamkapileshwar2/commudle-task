// Adds Movie object to local storage
function bookmarkMovie(movie) {
    // List of all bookmarks
    let bookmark_list = JSON.parse(localStorage.getItem('bookmark-list')) ? JSON.parse(localStorage.getItem('bookmark-list')) : [];
    bookmark_list.push(movie);
    localStorage.setItem('bookmark-list', JSON.stringify(bookmark_list));
}

