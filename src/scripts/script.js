
//menampilkan card ketika ditambahkan
const addCardView = (objectView) => {
    const elementTitle = document.createElement("p");
    elementTitle.classList.add("title-year");
    elementTitle.innerHTML = `<b>Title </b> : ${objectView.title} `;

    const elementAuthor = document.createElement("p");
    elementAuthor.classList.add("title-author");
    elementAuthor.innerHTML = `<b>Author</b> :  ${objectView.author} `;

    const elementYear = document.createElement("p");
    elementYear.classList.add("title-year");
    elementYear.innerHTML = `<b>Year</b> : ${objectView.year}`;

    const descView = document.createElement("div");
    descView.classList.add("title-desc");
    descView.append(elementTitle, elementYear, elementAuthor);

    const containerId = document.createElement("div");
    containerId.classList.add("item-id");
    containerId.append(descView);
    containerId.setAttribute("id", `book-${objectView.id}`);

    const iconAction = document.createElement("div");
    iconAction.classList.add("delete-move-action");

    if (objectView.isComplete) {
        const htmlBtnMove = document.createElement("button");
        htmlBtnMove.classList.add("btn-move");
        htmlBtnMove.innerHTML = `<i class='bx bx-left-arrow-circle' ></i>`

        htmlBtnMove.addEventListener("click", () => {
            returnBook(objectView.id);
        })

        const htmlBtndelete = document.createElement("button");
        htmlBtndelete.classList.add('btn-deleted');
        htmlBtndelete.innerHTML = `<i class='bx bx-trash'></i>`;

        htmlBtndelete.addEventListener("click", () => {
            deleteBooks(objectView.id)
        })

        iconAction.append(htmlBtnMove, htmlBtndelete)
        containerId.append(iconAction)
    } else {
        const htmlBtnMoveUnread = document.createElement("button");
        htmlBtnMoveUnread.classList.add("btn-move");
        htmlBtnMoveUnread.innerHTML = `<i class='bx bx-right-arrow-circle'></i>`

        htmlBtnMoveUnread.addEventListener("click", () => {
            returnBookFinish(objectView.id)
        })

        const htmlBtndeleteUnread = document.createElement("button");
        htmlBtndeleteUnread.classList.add('btn-deleted');
        htmlBtndeleteUnread.innerHTML = `<i class='bx bx-trash'></i>`;

        htmlBtndeleteUnread.addEventListener("click", () => {
            deleteBooks(objectView.id)
        })

        iconAction.append(htmlBtnMoveUnread, htmlBtndeleteUnread)
        containerId.append(iconAction)
    }

    return containerId;
}

