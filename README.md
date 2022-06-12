# Search

search.js is a javascript framework to search strings.

#### Syntax 
search({searchData:'-',firstWordSearch:true, normalSearch:true});

search function needs data in the form of object. search function searchs for speific words and if the word is present in a element's inner html it will set the display of element to block and if the word will not be present in the element's inner html it will set the display of the element to none. search function will only search elements which have search-true class. Example
```
<p class='search-true'>search.js is fun</p>
```
#### Types of searches
there are two types of searches
1. Normal search
2. first word search

As the name suggests the Normal search searches for the word in whole string and first word search searches word only in first words.
you have to define search type other wise it will not work. define only one.
example 

```
<p class='search-true'>search.js is fun</p> 
<p class='search-true'>A search.js is fun</p>
<script>
search({firstWordSearch:true,searchData:'search'});
</script>
```
in the above case only the first one will be displayed. 

```
<p class='search-true'>search.js is fun</p> 
<p class='search-true'>A search.js is fun</p>
<script>
search({normalSearch:true,searchData:'search'});
</script>
```
if the above case both the elements will be displayed.
