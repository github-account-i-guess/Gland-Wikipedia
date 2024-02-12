class Page {
    constructor (title, introParagraph, cardInfo) {
        this.title = title;
        // this.img = img;
        this.introParagraph = introParagraph;
        this.cardInfo = cardInfo;
    }
}
const pages = {
    "Pituitary Gland": new Page("Pituitary Gland", "<p>Pituitary Gland (Japanese: 脳下垂体) is a Vocaloid produced by Natural Selection. However, Vocaloids began to lose popularity so Pituitary moved to the field of hormone production. They are known for creating many of the essential hormones for homeostasis.</p><p>Pituitary's career in hormone production was launched at age 10 when they discovered Follicle Stimulating Hormone or FSH. Due to their relative success after releasing FSH into the body they began to look into producing other hormones.</p><p>Since then they have produced Adrenocorticotropic Hormone, Growth Hormone, Lutenizing Hormone, Prolactin, and Thyroid Stimulating Hormone. They have also bought and resold Antidiuretic Hormone and Oxytocin from the Hypothalamus</p>", {
        name: "Pituitary Gland",
        birth_name: "Pituitary Gland",
        birth_date: "August 31st, 2007",
        birth_place: "Sella Turcica, Under the Hypothalamus",
        death_date: "",
        death_place: "",
        Died: "",
        nationality: "Japanese",
        other_names: "hypophysis",
        occupation: `Producing Hormones`,
        years_active: "2017 - Present",
        known_for: "Keeping Your Homeostasis",
        notable_works: `
        <ul>
            <li>Adrenocorticotropic Hormone</li>
            <li>Follicle-Stimulating Hormone</li>
            <li>Growth Hormone</li>
            <li>Luteinizing Hormone</li>
            <li>Prolactin</li>
            <li>Thyroid-Stimulating Hormone</li>
        </ul>
        `
    }),
    "Thyroid": new Page("Thyroid", "Queen Thyroid (Born 1512) is a", {
        name:"",
        birth_name:"",
        birth_date:"",
        birth_place:"",
        death_date:"",
        death_place:"",
        died:"",
        nationality:"",
        other_names:"",
        occupation:"",
        years_active:"",
        known_for:"",
        notable_works:""
    }),
    "Parathyroid": new Page("Thyroid", "Queen Thyroid (Born 1512) is a", {
        name:"",
        birth_name:"",
        birth_date:"",
        birth_place:"",
        death_date:"",
        death_place:"",
        died:"",
        nationality:"",
        other_names:"",
        occupation:"",
        years_active:"",
        known_for:"",
        notable_works:""
    }),
    "Adrenal Gland": new Page("Thyroid", "Queen Thyroid (Born 1512) is a", {
        name:"",
        birth_name:"",
        birth_date:"",
        birth_place:"",
        death_date:"",
        death_place:"",
        died:"",
        nationality:"",
        other_names:"",
        occupation:"",
        years_active:"",
        known_for:"",
        notable_works:""
    }),
    "Pancreas": new Page("Thyroid", "Queen Thyroid (Born 1512) is a", {
        name:"",
        birth_name:"",
        birth_date:"",
        birth_place:"",
        death_date:"",
        death_place:"",
        died:"",
        nationality:"",
        other_names:"",
        occupation:"",
        years_active:"",
        known_for:"",
        notable_works:""
    })
};

const select = document.querySelector("#page-select");
const pageTitle = document.querySelector("title");
const htmlTitle = document.querySelector("#title");
const introP = document.querySelector("#intro-paragraph");
const mainImage = document.querySelector("#main-image");
const cardInfoHtml = document.querySelector("#card-info");
const cardInfoCopy = cardInfoHtml.cloneNode(true);
const cardInfoTitle = document.querySelector("#card-info-title");
const updatePage = e => {
    const { value } = select; 
    const page = pages[value];
    if (!page) return;
    const { title, introParagraph, cardInfo } = page;
    cardInfoHtml.innerHTML   = cardInfoCopy.innerHTML;

    pageTitle.innerHTML = title + " - Wikipedia";
    htmlTitle.innerHTML = title;
    cardInfoTitle.innerHTML = title;
    introP.innerHTML = introParagraph;
    mainImage.src = `img/${value}.png`;
    console.log(mainImage.src);
    mainImage.width = 300;
    const cardInfoObj  = Object.entries(cardInfo);
    for (const [key, value] of cardInfoObj) {
        cardInfoHtml.innerHTML = cardInfoHtml
            .innerHTML
            .replace(new RegExp(`(?<=>)${key}(?=<)`, "gm"), value);
    }
};
updatePage();
select.addEventListener("change", updatePage);
// alert("a");