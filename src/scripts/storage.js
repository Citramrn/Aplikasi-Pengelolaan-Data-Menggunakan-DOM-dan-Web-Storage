//simpan di local storage
let book = [];
const LOCAL_SAVE = "save-book";
const LOCAL_KEY = "ID_APPS";
const DELETE_KEY = "delete-book";
const LOCAL_RENDER = "render-book";
const MOVE_KEY = "move-book";

//ambil data localstorage
const storageDataItem = () => {
    const serializedData = localStorage.getItem(LOCAL_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const itemset of data) {
            book.push(itemset);
        }
    }

    document.dispatchEvent(new Event(LOCAL_RENDER));
};

const helpStorageBrowser = () => {
    if (typeof (Storage) === undefined) {
        console.log('browser tidak mendukung web storage')
        return false;
    }
    return true;
}


//simpan data local storage
const saveData = () => {
    if (helpStorageBrowser()) {
        const parsed = JSON.stringify(book);
        localStorage.setItem(LOCAL_KEY, parsed);
        document.dispatchEvent(new Event(LOCAL_SAVE));
    }
};

//delete  localtorage
const deleteData = () => {
    if (helpStorageBrowser()) {
        const parsed = JSON.stringify(book);
        localStorage.setItem(LOCAL_KEY, parsed);
        document.dispatchEvent(new Event(DELETE_KEY));
    }
};

//pindah data localstorage
const move = () => {
    if (helpStorageBrowser()) {
        const parsed = JSON.stringify(book);
        localStorage.setItem(LOCAL_KEY, parsed);
        document.dispatchEvent(new Event(MOVE_KEY));
    }
};

//logika tampilan unread dan read
document.addEventListener(LOCAL_RENDER, () => {
    const unreading = document.getElementById("unreadBook");
    unreading.innerHTML = "";

    const reading = document.getElementById("readBook");
    reading.innerHTML = "";

    for (const bookList of book) {
        const bookElementView = addCardView(bookList);
        if (!bookList.isComplete) {
            unreading.append(bookElementView);
        } else {
            reading.append(bookElementView);
        }
    }

})