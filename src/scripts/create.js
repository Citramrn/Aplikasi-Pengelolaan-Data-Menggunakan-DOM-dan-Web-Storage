//variabel menambah data
const addNewBook = () => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const yearInput = document.getElementById('year');
    const finishUnreadRead = document.getElementById('reading');
    let bookFinish;

    if (finishUnreadRead.checked) {
        bookFinish = true;
    } else {
        bookFinish = false;
    }

    book.push({
        id: +new Date(),
        title: titleInput.value,
        author: authorInput.value,
        year: Number(yearInput.value),
        isComplete: bookFinish,
    });

    titleInput.value = null;
    authorInput.value = null;
    yearInput.value = null;
    finishUnreadRead.checked = false;

    document.dispatchEvent(new Event(LOCAL_RENDER));
    saveData();
}
