let search = (props) => {
    if (props.firstWordSearch) {
        if (props.hideAnotherElement != undefined) {
            props.onSearch != undefined ? setTimeout(props.onSearch, 1) : null;
            for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
                let ed = document.getElementsByClassName(props.hideAnotherElement)[i];
                let md = document.getElementsByClassName('search-true')[i];
                if (props.hide === false) { null; }
                else { md.innerHTML.slice(0, props.searchData.length).includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none"; }
                props.addClass != undefined && md.innerHTML.slice(0, props.searchData.length).includes(props.searchData) ? ed.classList.add(props.addClass) : null;
            }

        }
        else {
            props.onSearch != undefined ? setTimeout(props.onSearch, 1) : null;
            for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
                let ed = document.getElementsByClassName('search-true')[i];
                let md = document.getElementsByClassName('search-true')[i];
                if (props.hide === false) { null; }
                else { md.innerHTML.slice(0, props.searchData.length).includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none"; }
                props.addClass != undefined && md.innerHTML.slice(0, props.searchData.length).includes(props.searchData) ? ed.classList.add(props.addClass) : null;
            }

        }
    }
    else if (props.normalSearch) {
        if (props.hideAnotherElement != undefined) {
            props.onSearch != undefined ? setTimeout(props.onSearch, 1) : null;
            for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
                let ed = document.getElementsByClassName(props.hideAnotherElement)[i];
                let md = document.getElementsByClassName('search-true')[i];
                if (props.hide === false) {
                    null;
                }
                else {
                    md.innerHTML.includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none";
                } props.addClass != undefined && md.innerHTML.includes(props.searchData) ? ed.classList.add(props.addClass) : null;
            }

        }
        else {
            props.onSearch != undefined ? setTimeout(props.onSearch, 1) : null;
            for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
                let ed = document.getElementsByClassName('search-true')[i];
                let md = document.getElementsByClassName('search-true')[i];
                if (props.hide === false) {
                    null;
                }
                else {
                    md.innerHTML.includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none";
                } props.addClass != undefined && md.innerHTML.includes(props.searchData) ? ed.classList.add(props.addClass) : null;
            }

        }
    }
    else {
        props.onSearch != undefined ? setTimeout(props.onSearch, 1) : null;
        for (let i = 0; i <= document.getElementsByClassName('search-true').length; i++) {
            let ed = document.getElementsByClassName(props.hideAnotherElement)[i];
            let md = document.getElementsByClassName('search-true')[i]
            if (props.hide === false) {
                null;
            }
            else { md.innerHTML.includes(props.searchData) ? ed.style.display = "block" : ed.style.display = "none"; } props.addClass != undefined && md.innerHTML.includes(props.searchData) ? ed.classList.add(props.addClass) : null;
        }
    }
}
