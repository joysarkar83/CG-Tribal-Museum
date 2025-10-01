document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
    const showLessBtns = document.querySelectorAll(".show-less-btn");
    const messageFulls = document.querySelectorAll(".message-full");

    // messageFull.style.display = "none";
    // showLessBtn.style.display = "none";

    readMoreBtns.forEach((readMoreBtn, index) => {
        readMoreBtn.addEventListener("click", function () {
            messageFulls[index].style.display = "flex";
            readMoreBtns[index].style.display = "none";
            showLessBtns[index].style.display = "flex";
        });
    });

    showLessBtns.forEach((showLessBtn, index) => {
        showLessBtn.addEventListener("click", function () {
            messageFulls[index].style.display = "none";
            readMoreBtns[index].style.display = "flex";
            showLessBtns[index].style.display = "none";
        });
    });
});
