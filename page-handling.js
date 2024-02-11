class Page {
    constructor (title, introParagraph) {
        this.title = title;
        // this.img = img;
        this.introParagraph = introParagraph;
    }
}
const pages = {
    "Pituitary Gland": new Page("Pituitary Gland", "Sir Pituitary Gland (Born 190,0000 BCE) is a"),
    "Thyroid": new Page("Thyroid", "Queen Thyroid (Born 1512) is a")
};

const select = document.querySelector("#page-select");
const pageTitle = document.querySelector("title");
const htmlTitle = document.querySelector("#title");
const introP = document.querySelector("#intro-paragraph");
const updatePage = e => {
    const { value } = select; 
    const page = pages[value];
    if (!page) return;
    const { title, introParagraph } = page;
    pageTitle.innerHTML = title;
    htmlTitle.innerHTML = title;
    introP.innerHTML = introParagraph;
};
updatePage();
select.addEventListener("change", updatePage);
// alert("a");