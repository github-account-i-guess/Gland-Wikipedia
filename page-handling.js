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
    "Thyroid": new Page("Thyroid", "Thyroid Hartwell White Sr., also known by his alias Thyroidberg, was a skilled human anatomist and co-founder of a biology research facility before he accepted a buy-out from his business partners. Thyroid watched his partners become billionaires while he was stuck as a high-school anatomy Anatomy and Physiology teacher in Under the Larynx, New Mexico barely able to make end meet for his family. On his 50th birthday, Thyroid was diagnosed with Stage III thyroid cancer. After discovering this, Thyroid resulted to creating and selling Thyroxine,Triiodothyronine, Reverse Triiodothyronine, and Calcatonin with his former student, Parathyroid Pinkman to ensure the security of his family after he died. Because of Thyroid's experience in anatomy, he created Triiodothyronine which had way more of an impact on the body's metabolism than Thyroxine. ", {
        birth_name:"Thyroid Hartwell White",
        birth_date:"September 7, 1958",
        birth_place:"Under the Larynx, New Mexico",
        death_date:"September 7, 2010 (Aged 52)",
        death_place:"",
        nationality:"American",
        other_names:"Thyroidberg",
        occupation:"Metabolism Lord<br>High School Biology Teacher",
        years_active:"",
        "Years&nbsp;active":"",
        known_for:"Making the Triiodothyronine",
        notable_works:`
        <ul>
            <li>Thyroxine (T4)</li>
            <li>Triiodothyronine (T3)</li>
            <li>Reverse Triiodothyronine (RT3)</li>
            <li>Calcitonin</li>
        </ul>`
    }),
    "Parathyroid": new Page("Parathyroid", "Parathyroid Bruce Pinkman is a Parathyroid cook and distributor who works with his former high school Anatomy and Physiology teacher, Thyroid White. While he started out as a low-level Parathyroid Hormone distributor, he became the business partner of Thyroid White, helping Thyroid in controlling the levels of calcium circulating in the body. He did this by distributing Parathyroid Hormone which raised blood calcium levels while Thyroid White released calcitonin to lower blood calcium levels.", {
        birth_name:"Parathyroid Bruce Pinkman",
        birth_date:"September 24, 1984",
        birth_place:"Under the Larynx, New Mexico",
        death_date:"",
        death_place:"",
        Died:"",
        nationality:"American",
        other_names:"",
        "Other&nbsp;names": "",
        occupation:"Parathyroid Hormone Manufacturer and Distributor<br>Serum Calcium Enforcer",
        years_active:"",
        "Years&nbsp;active":"",
        known_for:"Maintaining Your Blood Calcium",
        notable_works:"Parathyroid Hormone",
        // "Notable work":""
    }),
    "Adrenal Gland": new Page("Adrenal Gland", "The Adrenal Gland (born 2014) is a fictional character from the TV Show, Kidney Adventures, where Adrenal Gland, played by Jack Black, serves as the sidekick to the Kidney (played by Smurf Cat). Inside Kidney Adventures, Adrenal Gland sits on top of Kidney's head and supplies him with hormones to help him on his adventures. While Adrenal Gland is best known for helping Kidney out by giving him adrenaline and cortisol when he is in a dire situation, Adrenal Gland also produces Aldosterone to make sure that Kidney's blood PH is correct and produces Androgens to make Kidney more toxicly masculine so that he can develop as a character over the series.", {
        birth_name:"Adrenal Gland",
        birth_date:"2014",
        birth_place:"Above The Kidney",
        death_date:"",
        death_place:"",
        Died:"",
        nationality:"Russian",
        other_names:"Suprarenal Glands",
        occupation:"Hormone Production",
        years_active:"2014 - Present",
        known_for:"Being the Kidney's Hat",
        notable_works:`<ul>
            <li>Cortisol</li>
            <li>Aldosterone</li>
            <li>DHEA</li>
            <li>Androgenic Steroids</li>
            <li>Adrenaline (epinephrine)</li>
            <li>Noradrenaline(norepinephrine)</li>
    </ul>`
    }),
    "Pancreas": new Page("Pancreas", "Sir James Pancreas McCartney is a British Singer, Organ, and Gland who achieved body-wide fame for playing the organ for the band, Digestive System. However, while he is best known for his musical work, he was also a big player in the regulating blood sugar industry. In between concerts, Pancreas McCartney served as the CEO of Apple Corp Limited. This company produces insulin and glucagon to help people regulate their blood sugar. Additionally, Apple Corp helps educate people about health. In fact Pancreas actually came up with the saying, \"An Apple a Day Keeps The Doctor Away.\" ", {
        birth_name:"Pancreas James McCartney",
        birth_date:" June 18 , 1942",
        birth_place:"InferiortoLiverPool, England",
        death_date:"November 9th 1966",
        death_place:"London, England",
        nationality:"British",
        other_names:"",
        "Other&nbsp;names": "",
        occupation:"Regulating Blood Sugar",
        years_active:"1957- 1966",
        known_for:"Insulin<br>Glucagon",
        notable_works:"Sgt. Sugar's Lonely Hearts Club Band"
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