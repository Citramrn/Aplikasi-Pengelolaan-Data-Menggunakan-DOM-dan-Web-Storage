//membuat click button ketika di tambahkan dan bisa di tampilkan
document.addEventListener("DOMContentLoaded", () => {
    const saveForm = document.getElementById("formDataBook");
    saveForm.addEventListener("submit", (event) => {
        event.preventDefault();
        addNewBook();
    });

    if (helpStorageBrowser()) {
        storageDataItem()
    }
});

const deleteBooks = (idBook) => {
    const books = findBookSistem(idBook)
    if (books === -1) return;

    book.splice(books, 1)
    document.dispatchEvent(new Event(LOCAL_RENDER));
    deleteData();
};

// mencari buku berdasarkan index untuk dihapus di localStorage
const indexBoox = (idBook) => {
    for (const key in book) {
        if (book[key].id === idBook) {
            return key;
        }
    }
}

//mencari buku untuk dihapus dan di pindahkan  ke read dan unread
const findBookSistem = (idBook) => {
    for (const bookItems of book) {
        if (bookItems.id === idBook) {
            return bookItems;
        }
    }
}
