console.clear();

var headlight = document.querySelector('#headlight'),
    chestlight = document.querySelector('#chestlight'),
    lc = document.querySelector('.leftclaw'),
    lcrp = document.querySelector('.leftclaw-rightpincer'),
    lclp = document.querySelector('.leftclaw-leftpincer'),
    rc = document.querySelector('.rightclaw'),
    rcrp = document.querySelector('#rightclaw-rightpincer'),
    rclp = document.querySelector('#rightclaw-leftpincer'),
    la = document.querySelector('#leftarm path'),
    ra = document.querySelector('#rightarm path');


TweenMax.to(ra, 1, {ease:Linear.easeNone, repeat: 0, repeatDelay:3, attr: {d: 'M169.35,172.71c20 0, 40 0, 80 0'}});

TweenMax.to(ra, 1, {delay: 1, ease:Linear.easeNone, repeat: 0, repeatDelay:1, attr: {d: 'M169.35,172.71c0 0, 60 30, 55 -30'}});

TweenMax.to(rc, 2, {ease:Linear.easeNone, repeat: 0, repeatDelay:3, attr: {transform: 'rotate(-190, 207, 180) rotate(-20, 40, 80) translate(-60, 30)'}});

TweenMax.to(rcrp, .25, {ease:Linear.easeNone, delay: 2, repeat: -1, yoyo:true, attr: {transform: 'rotate(-20, 86.3, 21.38)'}});

TweenMax.to(headlight, 1, {repeat: -1, yoyo:true, attr: {fill: '#ff0000'}});
TweenMax.to(chestlight, 1, {repeat: -1, yoyo:true, attr: {fill: '#ff0000'}});



TweenMax.to(lc, 2, {ease:Linear.easeNone, repeat: 0, repeatDelay:3, attr: {transform: 'rotate(-190, 207, 180) rotate(-20, 40, 80) translate(-60, 30)'}});

TweenMax.to(lcrp, .25, {ease:Linear.easeNone, delay: 2, repeat: -1, yoyo:true, attr: {transform: 'rotate(20, 186.3,231.38)'}});