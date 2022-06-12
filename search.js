function search(props) {
    if (props.firstWordSearch) {
        if (props.hideElement != undefined) {
            for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
                let ed = document.getElementsByClassName(props.hideElement)[i];
                ed.innerHTML.slice(0, props.searchData.length).includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none";
                props.addClass != undefined ? ed.classList.add(props.addClass) : null;
            }
        }
        else {
            for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
                let ed = document.getElementsByClassName('search-true')[i];
                ed.innerHTML.slice(0, props.searchData.length).includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none";
                props.addClass != undefined ? ed.classList.add(props.addClass) : null;
            }
        }
    }
    else if (props.normalSearch) {
        if (props.hideElement != undefined) {
            for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
                let ed = document.getElementsByClassName(props.hideElement)[i];
                ed.innerHTML.includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none";
                props.addClass != undefined ? ed.classList.add(props.addClass) : null;
            }
        }
        else {
            for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
                let ed = document.getElementsByClassName('search-true')[i];
                ed.innerHTML.includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none";
                props.addClass != undefined ? ed.classList.add(props.addClass) : null;
            }
        }
    }
}
