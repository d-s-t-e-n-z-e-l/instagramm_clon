function viewRecommendations(){
    document.getElementById('recommentProfils').classList.remove('d-none')
}

let posts = [
    {
        "profilbild": "profilmom.jpg" ,
        "username": "codingMom",
        "location": "Kellerbüro",
        "Stunden": 1,
        "image": "codemom.jpg",
        "header": "Voll bei der Sache",
        "description": "Wenn man plötzlich an nichts anderes mehr denken kann...",
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
        "description": "Bin ich aus oder ist Frauchen eingesperrt??????",
        "comments": ['ich würde eher fragen ob es es drinnen warm ist!', 'du darfst tagsüber raus?', 'du ausgesperrt! ganz klar! '],
        "users": ['blackPanther', 'catInside', 'Abra Catdabra'],
    },
    {
        "profilbild": "profilmatti.jpg" ,
        "username": "Matti73",
        "location": "Postdam",
        "Stunden": 15,
        "image": "matticold.jpg",
        "header": "Its cold as ice!",
        "description": "Ich war heute das erste mal in der Kältekammer in Postdam und habe 3 Minuten bei -110 Grad Celsius voll abgedanct! Sehr erfrischend und gesund",
        "comments": ['Ich geh auch öfter hin, es ist echt toll!', 'Freiwillig?', 'Wie klein ääh ich mein kalt war es denn :D'],
        "users": ['codingMom', 'The Miezer', 'SBenni'],
    }
]