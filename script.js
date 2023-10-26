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
    }
]


function renderPosts() {
    let postlist = document.getElementById('postlist');
    postlist.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {// i wird die Wert 0 1 2 haben und durch die 3 jsons iterieren
        const postarray = posts[i]; // ich verkürze das aufrufen der jsonwert durch zusammenfassen der i-ten json-ansprechung in einer variable
        postlist.innerHTML += templateSinglePost(postarray, i);
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
                                <img onclick="like(${i})" id="heart${i}" class="headerIcon" src="img/herz.png" alt="">
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

function showComments(index) {// aktuelles i wird oben aus der aktuellen for-schleife genommen, index hat also heir den wert 0 oder 1 oder 2
    const postarray = posts[index];
    let updatedUsers = localStorage.getItem(`savedUsers${index}`)//hole aus dem speicher die werte hinter dme key und packe sie in die variable
    postarray['users'] = JSON.parse(updatedUsers);
    let updatedComments = localStorage.getItem(`savedComments${index}`);
    postarray['comments'] = JSON.parse(updatedComments);
    let commentDiv = document.getElementById(`commentDiv${index}`);
    commentDiv.innerHTML = '';
    renderComments(postarray, commentDiv);
}


function renderComments(postarray, commentDiv) {
    for (let j = 0; j < postarray['comments'].length; j++) {
        let commentingUser = postarray['users'][j];// wert für j-tem wert aus users array im index-ten wert aus dem array posts
        let commenttext = postarray['comments'][j];//wert für j-tem wert aus comments array im index-ten wert aus dem  array posts
        commentDiv.innerHTML +=/*html*/`
         <div class="singleComment">
                            <span class="commentinguser">${commentingUser}</span><span class="commentext">${commenttext}</span>
                        </div>
                    `    }
}


function addComment(index) {
    const postarray = posts[index];
    let newComment = document.getElementById(`commentinput${index}`).value;
    postarray['comments'].push(newComment);
    postarray['users'].push('guestUSER');
    saveInputs(`savedComments${index}`, postarray['comments']);// führt Speicherfunktion unten aus, Werte sind im localstorage
    saveInputs(`savedUsers${index}`, postarray['users']);
    showComments(index);  // falls die Kommenatre vorher nicht angezeigt wurden, erscheinen sie nun automatisch wenn ein kommentar ergänzt wird und zeigt ihn mit an
}


function saveInputs(key, array) {
    let savedArrays = JSON.stringify(array);//packe die werte aus array in string unter variable1
    localStorage.setItem(key, savedArrays);// speicher den string hinte rder Variable savedArrays in dem key ( der ist dann im local sotrage)
}


function like(index) {
    heartRed(index);
    let likes = posts[index]['likes'];
    let newLikes = likes + 1;
    document.getElementById(`likeCounter${index}`).innerHTML = `Gefällt: ${newLikes} Mal`;
}


function heartRed(i) {
    document.getElementById(`heart${i}`).src = 'img/herzred.png';
}