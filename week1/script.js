'use strict';
const books = ['of_mice_and_men', 'inferno', 'broer', 'het_verloren_symbool', 'the_book_thief'
    , 'the_hunger_game', 'harry_potter', 'the_giving_tree', 'twilight', 'the_host'
]
let root = document.getElementById('root');
let ul = document.createElement('ul');
root.appendChild(ul);
let info = {
    Titel: ['of mice and men', 'inferno', 'broer', 'het verloren symbool', 'the book thief'
        , 'the hunger game', 'harry potter', 'the giving tree', 'twilight', 'the host'
    ],
    language: ['english', 'english', 'Dutch', 'english', 'english', 'english', 'english', 'english', 'english', 'english'],
    more: ['Of Mice and Men is a novella[1][2] written by author John Steinbeck. Published in 1937, it tells the story of George Milton and Lennie Small, two displaced migrant ranch workers, who move from place to place in California in search of new job opportunities during the Great Depression in the United States.',
        'inferno is a 2013 mystery thriller novel by American author Dan Brown and the fourth book in his Robert Langdon series, following Angels & Demons, The Da Vinci Code and The Lost Symbol. The book was published on May 14, 2013, ten years after publication of The Da Vinci Code (2003), by Doubleday.[1] It was number one on the New York Times Best Seller list for hardcover fiction and Combined Print & E-book fiction for the first eleven weeks of its release, and also remained on the list of E-book fiction for the first seventeen weeks of its release. A film adaptation was released in the United States on October 28, 2016.',
        'Het boekenweekgeschenk 2016 is geschreven door Esther Gerritsen. In Broer komen de onderlinge verhoudingen in de familie van Olivia onder druk te staan als haar broer plotseling belt met de mededeling dat zijn been afgezet zal worden. Het verlies van het been van haar broer grijpt Olivia onverwacht aan, terwijl ze eerder nauwelijks een band met haar broer had.',
        'Het Verloren Symbool (The Lost Symbol) is een boek geschreven door de Amerikaanse schrijver Dan Brown. Het werd op 15 september 2009 gepubliceerd en is het derde boek waarin protagonist Robert Langdon verschijnt. De gebeurtenissen vinden plaats na Het Bernini Mysterie en De Da Vinci Code en spelen zich af in een tijdsperiode van twaalf uur.',
        'The Book Thief is een Duits-Amerikaanse film uit 2013 onder regie van Brian Percival. De film is gebaseerd op het gelijknamige boek van Markus Zusak. De film ging in première op 3 oktober op het Mill Valley Film Festival.',
        'De Hongerspelen (Engels: The Hunger Games) is een adolescentenroman, afkomstig uit de gelijknamige trilogie geschreven door de Amerikaanse schrijfster Suzanne Collins. Het boek werd voor het eerst uitgebracht in 2008 door uitgeverij Scholastic en werd gevolgd door Vlammen (2009) en Spotgaai (2010).',
        'Harry Potter is een zevendelige fantasyserie geschreven door de Britse schrijfster J.K. Rowling. De boeken volgen chronologisch de puberteit en de adolescentie van leerling-tovenaar Harry Potter en zijn beste vrienden Ronald Wemel en Hermelien Griffel, met wie hij samen studeert aan Zweinsteins Hogeschool voor Hekserij en Hocus-Pocus. Het hoofdverhaal concentreert zich op Harrys gevecht tegen de duistere tovenaar Heer Voldemort, die Harrys ouders vermoordde in een poging onsterfelijkheid te verwerven en de tovergemeenschap aan zich te onderwerpen.',
        'The Giving Tree is a children s picture book written and illustrated by Shel Silverstein. First published in 1964 by Harper & Row, it has become one of Silversteins best known titles and has been translated into numerous languages.',
        'Twilight (stylized as twilight) (2005) is a young adult vampire-romance novel[3][4] by author Stephenie Meyer. It is the first book in the Twilight series, and introduces seventeen-year-old Isabella "Bella" Swan, who moves from Phoenix, Arizona to Forks, Washington. She is endangered after falling in love with Edward Cullen, a vampire. Additional novels in the series are New Moon, Eclipse, and Breaking Dawn.',
        'The Host is a romance novel by Stephenie Meyer. The book is about Earth, in a post apocalyptic time, being invaded by a parasitic alien race, known as "Souls", and follows one Soul s predicament when the consciousness of her human host refuses to co-operate with the takeover of her body.']
};

let images = {
    of_mice_and_men: 'https://upload.wikimedia.org/wikipedia/en/0/01/OfMiceAndMen.jpg',
    inferno: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Inferno-cover.jpg',
    broer: 'https://i.mgtbk.nl/boeken/9789059653610-480x600.jpg?_=AP2S4cmf',
    het_verloren_symbool: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/7/6/1/8/9200000059528167.jpg',
    the_book_thief: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg/220px-The_Book_Thief_by_Markus_Zusak_book_cover.jpg',
    the_hunger_game: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Hunger_Games.jpg/220px-The_Hunger_Games.jpg',
    harry_potter: 'https://vignette.wikia.nocookie.net/harrypotter/images/1/14/Harry_Potter_and_the_Cursed_Child_Script_Book_Cover.jpg/revision/latest?cb=20160726165903',
    the_giving_tree: 'https://upload.wikimedia.org/wikipedia/en/7/79/The_Giving_Tree.jpg',
    twilight: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Twilightbook.jpg/220px-Twilightbook.jpg',
    the_host: 'https://vignette.wikia.nocookie.net/thehostseries/images/e/e1/9780316230780_p0_v1_s260x420.jpg/revision/latest?cb=20130216084053'

};

let li;

function creater(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        li = document.createElement('li');
        ul.appendChild(li);
        li.setAttribute('id', arrays[i]);
        let h = document.createElement('h1');
        h.innerHTML = 'book Name : ' + info.Titel[i];
        li.appendChild(h);
        let h2 = document.createElement('h2');
        h2.innerText = 'book langauge :' + info.language[i];
        li.appendChild(h2);
        let par = document.createElement('p');
        par.innerHTML = 'more information : ' + info.more[i];
        li.appendChild(par);

    }


}/*  */
creater(books);


function setImages(){
for (let key in images) {
    let li = document.getElementById(key);
    console.log(key + " -> " + images[key]);
    let img = document.createElement('img');
    img.setAttribute('src', images[key]);
    li.appendChild(img);
}

}
setImages();



