let submitBtn = document.querySelector(".save_button");
let siteName = document.querySelector("#site-name");
let siteUrl = document.querySelector("#site-url");
let bookmarkSection = document.querySelector(".bookmarks");
if (typeof (localStorage.bookmark == "undefined")) {
    localStorage.bookmark = "";
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let patterURL =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let arrayItems;
    let check = false;
    let adr;
    let itemAdr;
    if (siteName.value === "") {
        alert("Pls fill the any site name");
    } else if (siteUrl.value === "") {
        alert("pls enter the url");
    } else if (!patterURL.test(siteUrl.value)) {
        alert("Enter correct URL");
    } else {
        arrayItems = localStorage.bookmark.split(";");
        adr = siteUrl.value;
        adr = adr.replace(/http:\/\/|https:\/\//i, "");
        arrayItems.length--;

        for (item of arrayItems) {
            itemAdr = item.split(",")[1].replace(/http:\/\/|https:\/\//i, "");
            if (itemAdr == adr) {
                check = true;
            }
        }

        if (check == true) {
            alert("This website is already bookmarked");
        } else {
            localStorage.bookmark += `${siteName.value},${siteUrl.value}`;
            addBookmark(siteName.value, siteUrl.value);
            siteUrl.value = "";
            siteName.value = "";
        }
    }
});

function addBookmark(name, url) {
    let dataLink = url;

    if (!url.includes("http")) {
        url = "//" + url;
    }
    let item = `<div class="bookmark">
                <span>${name}</span>
                <a class="visit" href="${url}" target="_blank"
                    data-link='${dataLink}'>Visit</a>
                <a onclick="removethislink(this)"
                    class="delete" href="#">delete</a>
                </div>`;
    // bookmarkSection.innerHTML = bookmarkSectionk.innerHTML + item;
    bookmarkSection.innerHTML += item;
}

function removethislink(thisItem) {
    let arrayItems = [],
        index,
        item = thisItem.parentNode,
        itemURL = item.querySelector(".visit").dataset.link,
        itemName = item.querySelector("span").innerHTML;
    arrayItems = localStorage.bookmark.split(";");

    for (i in arrayItems) {
        if (arrayItems[i] == `${itemName},${itemURL}`) {
            index = i;
            break;
        }
    }

    //update the localStorage
    index = arrayItems.indexOf(`${itemName},${itemURL}`);
    arrayItems.splice(index, 1);
    localStorage.bookmark = arrayItems.join(";");

    //update the bookmark Section
    bookmarkSection.removeChild(item);
}

(function fetchBookmark() {
    if (
        typeof localStorage.bookmark != "undefined" &&
        localStorage.bookmark !== ""
    ) {
        let arrayItems = localStorage.bookmark.split(";");
        arrayItems.length--;
        for (item of arrayItems) {
            let itemspl = item.split(",");
            addBookmark(itemspl[0], itemspl[1]);
        }
    }

    // immediately invoke function line no 102 ()
})();
