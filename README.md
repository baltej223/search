# Search
search.js is a light weight frame work with many function to search words in strings. 
#### How to use it ?
Put this script link in your website's head tag.
```
<script src='https://baltej223.github.io/search/search.js'></script>
```
#### Syntax 
*search({searchData,type of search,should hide elements or not,hide another elements on behalf of another element,any function to run while searching,if to add class to specific elements});*

**search function needs data in the form of object.**
You can even shuffle all of these values.
#### How it works
This function need value in object form. It searches for specific given String in search-true elements and if the function will find that string it will do as directed. It searches the innerHTML of elements so it will work on all kind of elements.
for example.
```
<p class='search-true'>search is fun</p>
<!-- it will only search elements which have class 'search-true' -->
```

#### Types of searches
there are two types of searches
1. Normal search
2. First word search


#### Normal search
the Normal search searches for the word(given string) in whole inner html of element
example 

```
<p class='search-true'>search is fun</p> <!-- displayed -->
<p class='search-true'>ABCD search is fun</p> <!-- displayed -->
<script>
search({normalSearch:true,searchData:'search'});
</script>
```
if the above case both the elements will be displayed because in both the elements search word was included

made by Baltej Singh
