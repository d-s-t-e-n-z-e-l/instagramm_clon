function viewRecommendations() {
    document.getElementById('recommentProfils').classList.remove('d-none')
}

function setAbo(i) {
    let buttonID = 'abo' + i;
    document.getElementById(buttonID).innerHTML = 'Abonniert';
}

let posts = [
    {
        "profilbild": "profilmom.jpg",
        "username": "codingMom",
        "location": "Kellerbüro",
        "Stunden": 1,
        "image": "codemom.jpg",
        "likes": 89,
        "header": "Voll bei der Sache",
        "description": "Ich seh plötzlich überall code und denke in if-Abfragen beim Gang zum Wickeltisch^^",
        "comments": ['SAAAME, aber mit Schoki', 'Ist das Styropor?', 'Hat deine kleine denn einen Bug gefunden?? :)'],
        "users": ['chantalG', 'anni', 'SvenB85'],
        "heartcolors":['herz.png', 'herzred.png'],
    },
    {
        "profilbild": "profilkater.jpg",
        "username": "The Miezer",
        "location": "Wald",
        "Stunden": 3,
        "image": "katerchen.jpg",
        "likes": 15,
        "header": "Ausgesperrt?",
        "description": "Schau ich so durch das Fenster bei dem Wetter, frage ich mich: bin ich aus- oder sind die eingesperrt?",
        "comments": ['ich würde fragen ob es es drinnen warm ist!', 'du darfst tagsüber raus?', 'du ausgesperrt! ganz klar! '],
        "users": ['blackPanther', 'catInside', 'Abra Catdabra'],
        "heartcolors":['herz.png', 'herzred.png'],
    },
    {
        "profilbild": "profilmatti.jpg",
        "username": "Matti73",
        "location": "Postdam",
        "Stunden": 15,
        "image": "matticold.jpg",
        "likes": 64,
        "header": "Its cold as ice!",
        "description": "War wieder in der Kältekammer in Postdam. Beste Laune nach 110 Grad Celsius Minus!",
        "comments": ['Ich geh auch öfter hin, es ist echt toll!', 'Freiwillig?', 'Wie klein ääh ich mein kalt war es denn :D'],
        "users": ['codingMom', 'The Miezer', 'SBenni'],
        "heartcolors":['herz.png', 'herzred.png'],
    }
]

function load() {
    if (localStorage.getItem('savedJsonArray')) {// wenn etwas i locstor existiert, dann lese diese werte für das array posts aus
        posts = getArray('savedJsonArray');//dem array posts werden die neuen werte aus dem local storage zugewiesen und sind bereit zum rendern
    }
    renderPosts(posts);
}


function renderPosts(currentposts) {
    let postlist = document.getElementById('postlist');
    postlist.innerHTML = '';

    for (let i = 0; i < currentposts.length; i++) {// i wird die Wert 0 1 2 haben und durch die 3 jsons iterieren
        postlist.innerHTML += templateSinglePost(posts[i], i);
    }
}


function templateSinglePost(postarray, i) {
    return /*html*/`
        <section class="singlepost">
                    <header class="postheader">
                        <div class="profildata">
                            <img class="profilImage" src="img/${postarray['profilbild']}" alt="">
                            <div class="userdata">
                                <span>${postarray['username']} • ${postarray['Stunden']} Stunden</span>
                                <span>${postarray['location']}</span>
                            </div>
                        </div>
                        <img class="headerIcon" src="img/punkte.png" alt="">
                    </header>
                    <figure class="postdata">
                        <img class="postImage" src="img/${postarray['image']}" alt="">
                        <div class="postIconDiv">
                            <div class="postIconsLeft">
                                <img onclick="like(${i})" id="heart${i}" class="headerIcon" src="img/${postarray['heartcolors'][0]}" alt="">
                                <img onclick="showComments(${i})" class="headerIcon" src="img/comment.png" alt="">
                                <img class="headerIcon" src="img/direktes-instagram.png" alt="">
                            </div>
                            <div class="postIconsRight">
                                <img class="headerIcon" src="img/instagram-speichern.png" alt="">
                            </div>
                        </div>
                        <p class="imagesubtext">
                            <span id="likeCounter${i}" class="likes">Gefällt: ${postarray['likes']} Mal</span>
                        <div class="descriptionDiv">
                            <span class="descriptionheader">${postarray['header']}</span>
                            <span>${postarray['description']}</span>
                        </div>
                        </p>
                    </figure>
                    <figure id="commentDiv${i}" class="commentDiv">
                     </figure>
                    <figure class="postsubline">
                        <input id="commentinput${i}" class="commentInput" type="comment" placeholder="Kommentar hinzufügen ...">
                        <button onclick="addComment(${i})" class="postbutton">Posten</button>
                </section>
    `;
}


function showComments(index) {
    let commentDiv = document.getElementById(`commentDiv${index}`);
    commentDiv.innerHTML = '';
    for (let j = 0; j < posts[index]['comments'].length; j++) {
        let commentingUser = posts[index]['users'][j];// wert für j-tem wert aus users array im index-ten wert aus dem array posts
        let commenttext = posts[index]['comments'][j];//wert für j-tem wert aus comments array im index-ten wert aus dem  array posts

        commentDiv.innerHTML +=/*html*/`
         <div class="singleComment">
                            <span class="commentinguser">${commentingUser}</span><span class="commentext">${commenttext}</span>
                        </div>
                    `    }
}


function addComment(index) {
    if (document.getElementById(`commentinput${index}`).value == '') { alert('Fülle das Kommentarfeld') }
    else {
        let newComment = document.getElementById(`commentinput${index}`).value;
        posts[index]['comments'].push(newComment);
        posts[index]['users'].push('guestUSER');
        saveArray(`savedJsonArray`, posts);// führt Speicherfunktion 171 aus, Werte sind im locstor unter key savedJsonarray(ges. jsonArray)
        document.getElementById(`commentinput${index}`).value = '';//leert das inputfeld
        showComments(index);// falls die Kommenatre vorher nicht angezeigt wurden, erscheinen sie nun automatisch wenn ein kommentar ergänzt wird
    }
}


function like(index) {
    let heart = document.getElementById(`heart${index}`);
    let countedLikes = posts[index]['likes'];//aktueller wert wird in die variable cou..gepackt
    if (heart.src.includes('img/herz.png')){// wenn das Herz weiß ist
        posts[index]['heartcolors'][0]= 'herzred.png';// Herz wird rot
        posts[index]['likes'] = countedLikes + 1;//neuer höherer Wert bekommt eine Variable
    }
    else {// wenn das Herz nicht weiß, also Rot ist
        posts[index]['heartcolors'][0]= 'herz.png';// setzt das Herz auf weiß
        posts[index]['likes'] = countedLikes - 1;
    }
    saveArray(`savedJsonArray`, posts)// Der jetzige stand des gesamten jsonarrays wird gespeichert
    load(posts);//seite wird mit allen neuen werten aus locstor aufgebaut
}


function saveArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}


function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
}