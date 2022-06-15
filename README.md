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
if the above case both the elements will be displayed because in both the elements search word was present.

#### First word search
The first word search searches for word in first words of 'search-true' elements.
For example
```
<p class='search-true'>search is fun</p> <!-- displayed -->
<p class='search-true'>ABCD search is fun</p> <!--Not displayed -->
<script>
search({firstWordSearch:true,searchData:'search'});
</script>
```
In the first case search was present but in the second case ABCD was present befour 'search' so second one will be hidden on search.
#### Some important features.
features include:
1. hide
2. addClass
3. hideAnotherElement
4. onSearch

#### hide
As explaned in 'How it works' paragraph, it set diplay of an element to none, when not to show element. You can control weather to hide elemets on search or to show them. You can also add hide:true or hide:false in object which is to be passed.

for example
```
<p class='search-true'>search is fun</p> <!-- displayed -->
<p class='search-true'>ABCD search is fun</p> <!--displayed -->
<script>
search({firstWordSearch:true,searchData:'search',hide:false});
</script>
```
The above code will not hide any of the element. This is useful when used with addClass feature.
#### addClass
addClass feature adds a class on search to only specific elements. it will add class to elements which have given searchData. 

For example
```
<style>
.classname{
background-color:red;
}
</style>
```
```
<p class='search-true'>search is fun</p> <!-- displayed -->
<p class='search-true'>ABCD search is fun</p> <!--displayed -->
<script>
search({firstWordSearch:true,searchData:'search',hide:false,addClass:'classname'});
</script>
```
when you will run this, it will add classname class to those elements which have searchData. Add the elements which have searchData will have their background color red.
#### hideAnotherElement
hideAnotherElement hides another element on behalf of another element. This function is useful when your want to hide the parent element.
```
<div class='p'>
<p class="search-true">Hi its me </p>
<button>click me</button>
</div>
```
if you want to hide div.p but want that it should search p.search-true then it can be done through hideAnotherElement. For example

```
<div class='pa'>
<p class="search-true">Hi its me </p>
<button>click me</button>
</div>
<script>
search({normalSearch:true,searchData:'Hi',hideAnotherElement:'pa'});
```
the above code will hide div.p on behalf of p.search-true
#### onSearch
onSearch can run a function **while** searching. It is not a callback function. for exaple
```
<p class="search-true">Hi its me </p>
<script>
search({normalSearch:true,searchData:'Hi',onSearch:function(){
console.log('Hi');
}});
```
it will run the given function with ease. 
<hr> 

### Made by Baltej Singh
