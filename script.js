// diviser le texte en lettres
    const text = document.querySelector('.text');

    var e = document.getElementById('c');
    e.innerHTML = e.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');
    
   text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

//Gestion Hover avec id mouse Target
    const mouseTarget = document.getElementById ('mouseTarget');

// Animation

    mouseTarget.addEventListener('mouseenter', e => { //si Hover

    const animation = anime.timeline({
        targets : 'span',
        easeing : 'easeInOutExpo',
        loop : false,
    });

    animation

        .add({
            rotate : function(){
                return anime.random(-360,360)
            },
            translateX : function(){
                return anime.random(-200,200)
            },
            translateY : function(){
                return anime.random(-200,200)
            },
            duration : 3000,
            delay : anime.stagger(0),        
            })

        .add({
            rotate : 0,
            translateX : 0,
            translateY : 0,
            duration : 3000,
            delay : anime.stagger(0),
        })

    })
