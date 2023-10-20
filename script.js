function viewRecommendations(){
    document.getElementById('recommentProfils').classList.remove('d-none')
}

function setAbo(i){
    let buttonID = 'abo'+i;
    document.getElementById(buttonID).innerHTML = 'Abonniert';
    
}

let posts = [
    {
        "profilbild": "profilmom.jpg" ,
        "username": "codingMom",
        "location": "Kellerbüro",
        "Stunden": 1,
        "image": "codemom.jpg",
        "header": "Voll bei der Sache",
        "comments": ['SAAAME, aber mit Schoki', 'Ist das Styropor?', 'Hat deine kleine denn einen Bug gefunden?? :)'],
        "users": ['chantalG', 'anni', 'SvenB85'],
    },
    {
        "profilbild": "profilkater.jpg" ,
        "username": "The Miezer",
        "location": "Wald",
        "Stunden": 3,
        "image": "katerchen.jpg",
        "header": "Ausgesperrt?",
        "comments": ['ich würde fragen ob es es drinnen warm ist!', 'du darfst tagsüber raus?', 'du ausgesperrt! ganz klar! '],
        "users": ['blackPanther', 'catInside', 'Abra Catdabra'],
    },
    {
        "profilbild": "profilmatti.jpg" ,
        "username": "Matti73",
        "location": "Postdam",
        "Stunden": 15,
        "image": "matticold.jpg",
        "header": "Its cold as ice!",
        "comments": ['Ich geh auch öfter hin, es ist echt toll!', 'Freiwillig?', 'Wie klein ääh ich mein kalt war es denn :D'],
        "users": ['codingMom', 'The Miezer', 'SBenni'],
    }
]