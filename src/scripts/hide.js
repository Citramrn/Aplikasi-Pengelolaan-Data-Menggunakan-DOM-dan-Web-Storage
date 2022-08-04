//mengembaikan buku ke  unread
const returnBook = (idBook) => {
    const bookReturnId = findBookSistem(idBook);
    if (bookReturnId === null) return;

    bookReturnId.isComplete = false;
    document.dispatchEvent(new Event(LOCAL_RENDER));
    move();
}

//mengembaikan buku ke  read
const returnBookFinish = (idBook) => {
    const bookReturnId = findBookSistem(idBook);
    if (bookReturnId === null) return;

    bookReturnId.isComplete = true;
    document.dispatchEvent(new Event(LOCAL_RENDER));
    move();
}
