function search(props) {
    if (props.firstWordSearch) {
        for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
            let ed = document.getElementsByClassName('search-true')[i];
            ed.innerHTML.slice(0, props.searchData.length).includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none";
        }
    }
    else if (props.normalSearch) {
        for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
            let ed = document.getElementsByClassName('search-true')[i];
            ed.innerHTML.includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none";
        }
    }
}

