let posts = [
    {
      "logo": "hessenschau_logo.jpg",
      "author": "Hessenschau",
      "date": "3 Stunden",
      "location": "Frankfurt",
      "image": "Screenshot 2023-07-20 190354.png",
      "likes": 259,
      "description": "Teure Geldstrafe fÃ¼r Eintracht Frankfurt. Die Frankfurter wurden vom DFB-Sportgericht wegen unsportlichen Verhaltens ihrer AnhÃ¤nger in fÃ¼nf FÃ¤llen zu Geldstrafen in HÃ¶he von insgesamt 414.000 Euro verurteilt.",
      "users": ['caro.mck', 'timm.hage', 'jule_schreiber'],
      "comments": ['Das Geld flieÃŸt hoffentlich dorthin, wo es gebraucht wird und nicht in die Taschen des DFB!', 'Viel zu wenig! Wird Zeit, dass auch die Polizei Rechnungen an die Vereine schreibt.', 'Immer noch unverstÃ¤ndlich wie die Leute mit diesem Zeug ins Stadion kommen?'],
      "defaultImages": ['icons8-gefaellt-mir-48.png', 'icons8-lesezeichen-48.png']
    },
    {
      "logo": "tagesschau_logo.jpg",
      "author": "Tagesschau",
      "date": "5 Stunden",
      "location": "Berlin",
      "image": "Screenshot 2023-07-23 202047.png",
      "likes": 1052,
      "description": "Die Polizei hat auf der Suche nach einer mutmaÃŸlichen LÃ¶win Entwarnung gegeben. Sie stellt ihre Suche im Gebiet Kleinmachnow (Potsdam-Mittelmark) ein. Es gebe im geprÃ¼ften Gebiet keine ernstzunehmenden Hinweise auf die Existenz einer LÃ¶win oder eines anderen Raubtiers, sagte der Kleinmachnower BÃ¼rgermeister Michael Grubert (SPD).",
      "users": ['abidin_049er', 'bajetmir', 'kevin.brgmn'],
      "comments": ['Da hat wohl der Remmo Clan seine Nala wieder ...', 'LÃ¶win ist LÃ¶win und ein entlaufenes privates Haustierchen vom Remo Clan aus Berlin. Aber klar das man das ganze schnell vertuschen mÃ¶chte', 'Vielleicht identifiziert sich das wildschwein als lÃ¶we'],
      "defaultImages": ['icons8-gefaellt-mir-48.png', 'icons8-lesezeichen-48.png']
    },
    {
      "logo": "hessenschau_logo.jpg",
      "author": "Hessenschau",
      "date": "6 Stunden",
      "location": "Frankfurt",
      "image": "Screenshot 2023-07-20 190331.png",
      "likes": 460,
      "description": "Lkw-Fahrer streiken erneut wegen ausstehender LÃ¶hne. Der Streik osteuropÃ¤ischer Lastwagenfahrer auf der sÃ¼dhessischen RaststÃ¤tte GrÃ¤fenhausen lÃ¤uft auch am Freitag weiter. Sie sind bei derselben polnischen Spedition beschÃ¤ftigt, bei der es vor einigen Wochen schon einen langen Streik gab.",
      "users": ['jank_2001', 'stefan.ch', 'protzi1980'],
      "comments": ['In Polen kÃ¤men die SchlÃ¤gertrupps und wÃ¼rden ihre Arbeit ausfÃ¼hren. Hier in Deutschland hat man gesehen, schÃ¼tzt unsere Polizei vor solchen krimminellen und brutalen MaÃŸnahmen.', 'Diese Firma hat eine private MILIZ in einem gepanzerten Fahrzeug geschickt. Und hier fragen Leute ernsthaft wieso die in Deutschland demonstrieren mÃ¼ssen?', 'Wenn man solchen Unternehmen die EU Lizenz entziehen wÃ¼rde wÃ¤re das Problem vom Markt. Schon traurig das Unternehmen in der EU solche methode anwenden kann'],
      "defaultImages": ['icons8-gefaellt-mir-48.png', 'icons8-lesezeichen-48.png']
    },
    {
      "logo": "tagesschau_logo.jpg",
      "author": "Tagesschau",
      "date": "6 Stunden",
      "location": "Frankfurt",
      "image": "Screenshot 2023-07-23 203024.png",
      "likes": 1122,
      "description": "Verbraucher kÃ¶nnen auf Wunsch die von der Schufa gespeicherten Daten zu ihrer KreditwÃ¼rdigkeit ab sofort kostenlos per App einsehen. Notwendig ist dafÃ¼r die Registrierung bei der App der Tochter Bonify.",
      "users": ['dietmartheobald', 'cleariter', 'luis.vqb'],
      "comments": ['Die Schufa ist wie eine mafia, die Banditen machen nichts ohne Eigennutz', 'Ich darf im Austausch gegen noch mehr Daten netterweise Einblick in die Daten bekommen, die dieses Unternehmen von mir sammelt und an dritte weitergibt.', 'Es wird Zeit, dass Deutschland ein neues, transparentes und gewissenhaftes KreditwÃ¼rdigkeitssystem bekommt.'],
      "defaultImages": ['icons8-gefaellt-mir-48.png', 'icons8-lesezeichen-48.png']
    }
  ];
  
  let storys = [
    {
      "logo": ["hessenschau_logo.jpg", "tagesschau_logo.jpg", "welt_logo.jpg", "ntv_logo.jpg"],
      "author": ["Hessenschau", "Tagesschau", "Welt", "Ntv"]
    }
  ]
  
  
  function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += loadSidebar();
    content.innerHTML += loadStorys();
  
    if (localStorage.getItem('posts')) {
      posts = getArray('posts');
    }
  
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      content.innerHTML += loadPosts(i, post);
  
      let commentSection = document.getElementById(`comment-section${i}`);
  
      for (let j = 0; j < post['comments'].length; j++) {
        const comment = post['comments'][j];
        const user = post['users'][j];
        commentSection.innerHTML += /*html*/`<p><b>${user}:</b> ${comment}</p>`
      }
    }
  }
  
  function loadStorys() {
    return /*html*/`
      <div class="story-container">
          <div class="story">
            <img src="./img/${storys[0]['logo'][0]}" alt="">
            <span>${storys[0]['author'][0]}</span>
          </div>
          <div class="story">
            <img src="./img/${storys[0]['logo'][1]}" alt="">
            <span>${storys[0]['author'][1]}</span>
          </div>
          <div class="story">
            <img src="./img/${storys[0]['logo'][2]}" alt="">
            <span>${storys[0]['author'][2]}</span>
          </div>
          <div class="story">
            <img src="./img/${storys[0]['logo'][3]}" alt="">
            <span>${storys[0]['author'][3]}</span>
          </div>
        </div>
    `
  }
  
  
  function loadPosts(i, post) {
    return /*html*/`
          <div class="post-container">
              <div class="post-author">
            <img src="./img/${post['logo']}" alt="" class="circle">
            <div>
              <span>
                <b>${post['author']} </b>
                &#x2022;
                <span>${post['date']}</span> 
              </span>
              <span>
                ${post['location']}
              </span>
            </div>
            <span> <img src="./img/icons8-mehr-24.png" alt=""></span>
          </div>
            <img src="./img/${posts[i]['image']}" alt="">
            <div class="post-icons">
              <div>
                <img src="./img/${posts[i]['defaultImages'][0]}" alt="" id="like-icon${i}" class="margin-r" onclick="likePost(${i})">
                <img src="./img/icons8-kommentar-48.png" alt="" class="margin-r" onclick="toggleComments(${i})">
                <img src="./img/icons8-gesendet-48.png" alt="">
              </div>
              <div>
                <img src="./img/${post['defaultImages'][1]}" alt="">
              </div>
            </div>
            <div class="likes"><b>GefÃ¤llt <span id="likes${i}">${post['likes']}</span></b></div>
            <div class="post-text"><b>${post['author']}</b> ${post['description']}</div>
            <div class="comment-section" id="comment-section${i}">
             <div class="input-container"><input type="text" placeholder="Kommentar hinzufÃ¼gen" id="input${i}"><button onclick="addComment(${i})">senden</button></div>
            </div>
          </div>
          `
  }
  
  
  function loadSidebar() {
    return /*html*/`
     <div class="sidebar">
      <img src="./img/instagram_logo.png" alt="" id="site-logo">
      <span><img src="./img/icons8-zuhause-48.png" alt=""> Startseite</span>
      <span><img src="./img/icons8-suche-48.png" alt=""> Suchen</span>
      <span><img src="./img/icons8-kompass-48.png" alt=""> Entdecken</span>
      <span><img src="./img/instagram-reel.png" alt=""> Reels</span>
      <span><img src="./img/icons8-gesendet-48.png" alt=""> Nachrichten</span>
      <span><img src="./img/icons8-gefaellt-mir-48.png" alt=""> Benachrichtigungen</span>
      <span><img src="./img/icons8-hinzufÃ¼gen-48.png" alt=""> Erstellen</span>
      <span><img src="./img/profile_picture.jpg" alt="" class="circle"> Profil</span>
      <span><img src="./img/icons8-menÃ¼-48.png" alt=""> Mehr</span>
    </div>
    `
  }
  
  
  function likePost(index) {
    let icon = document.getElementById(`like-icon${index}`);
    let likeCount = posts[index]['likes'];
  
    if (icon.src.includes('icons8-gefaellt-mir-48.png')) {
      posts[index]["defaultImages"][0] = 'like_red.png';
      posts[index]['likes'] = likeCount + 1;
    } else {
      posts[index]["defaultImages"][0] = 'icons8-gefaellt-mir-48.png';
      posts[index]['likes'] = likeCount - 1;
    }
    setArray('posts', posts);
    render();
  }
  
  
  // function changeLikeCount(index) {
  //     posts[index]["defaultImages"] = 'icons8-gefaellt-mir-48.png';
  //     posts[index]['likes'] = likeCount - 1;
  //     setArray('posts', posts);
  // }
  
  
  function addComment(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]['comments'].push(input.value);
    posts[index]['users'].push('larsbjj');
    setArray('posts', posts)
    render();
  }
  
  
  function toggleComments(index) {
    document.getElementById(`comment-section${index}`).classList.toggle('d-none');
  }
  
  
  function setArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
  }
  
  
  function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
  }