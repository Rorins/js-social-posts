// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie 
// per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.

//Array di 5 oggetti

const post = [
{authorName: "Phil Mangione",
profilePic: "https://unsplash.it/300/300?image=15",
date:"4 mesi fa",
text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
image:"https://unsplash.it/600/300?image=171",
likes:80
},
{authorName: "Aurora Grippaudo",
profilePic: "https://picsum.photos/id/10/300/300",
date:"4 mesi fa",
text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
image:"https://picsum.photos/id/1/600/300",
likes:50
},
{authorName: "Caty Pharron",
profilePic: "https://picsum.photos/id/1002/300/300",
date:"4 mesi fa",
text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
image:"https://picsum.photos/id/1004/600/300",
likes:20
},
{authorName: "Giovanni Giorgio",
profilePic: "https://picsum.photos/id/1005/300/300",
date:"4 mesi fa",
text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
image:"https://picsum.photos/id/1015/600/300",
likes:8
},
{authorName: "Mako Giorgini",
profilePic: "https://picsum.photos/id/1014/300/300",
date:"4 mesi fa",
text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
image:"https://picsum.photos/id/1025/600/300",
likes:100
},
]

//Vado a prendere il mio container dal DOM
const container = document.getElementById("container");

//Looppiamo gli elementi del nostro array per stamparli successivamente
for (i= 0; i<post.length; i++){
    const singlePost = post[i];

    printatrice(singlePost);
}


//Function printatrice con elementi dinamici
function printatrice(post){
container.innerHTML += `
<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${post.profilePic} alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.authorName}</div>
                        <div class="post-meta__time">${post.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.text}</div>
            <div class="post__image">
                <img src=${post.image} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
`
}