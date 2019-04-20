(function () {

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '">' + item.title + '</a>';
        // appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  // GET VARIABLES FROM URL QUERY STRING 
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  function startSearch(blogSearchMeta) {
    if (searchTerm) {
      document.getElementById('search-box').setAttribute("value", searchTerm);

      // Initalize lunr with the fields it will be searching on. I've given title
      // a boost of 10 to indicate matches on this field are more important.
      var idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('author');
        // this.field('category');
        this.field('content');
        for (var key in blogSearchMeta) { // Add the data to lunr
          this.add({
            'id': key,
            'title': blogSearchMeta[key].title,
            'author': blogSearchMeta[key].author,
            // 'category': blogSearchMeta[key].category,
            'content': blogSearchMeta[key].content
          });
        }
      });

        var results = idx.search(searchTerm); // Get lunr to perform a search
        console.log(results);
        displaySearchResults(results, blogSearchMeta);
      }
    }

  var searchTerm = getQueryVariable('query');

  fetch("../../search-data.JSON")
    .then(res => res.json())
    .then(blogSearchMeta => startSearch(blogSearchMeta));


  
})();
