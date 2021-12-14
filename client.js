console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    console.log('on ready');
    $(document).ready(postPicture);


};


function postPicture() {
    $('body').append(`
        <div class="pic">
            <button data-number=0 id="dev" class="style"> <img src="https://github.com/${people[0].githubUsername}.png?size=250" alt="Profile image of Dev"></button>
            <button data-number=1 id="dane" class="style"> <img src="https://github.com/${people[1].githubUsername}.png?size=250" alt="Profile image of Dane"></button>
            <button data-number=2 id="matt" class="style"> <img src="https://github.com/${people[2].githubUsername}.png?size=250" alt="Profile image of Matt"></button>
            <button data-number=3 id="kris" class="style"> <img src="https://github.com/${people[3].githubUsername}.png?size=250" alt="Profile image of Kris"></button>
            <button data-number=4 id="edan" class="style"> <img src="https://github.com/${people[4].githubUsername}.png?size=250" alt="Profile image of Edan"></button>
            <button data-number=5 id="liz" class="style"> <img src="https://github.com/${people[5].githubUsername}.png?size=250" alt="Profile image of Liz"></button>
            <button data-number=6 id="chris" class="style"> <img src="https://github.com/${people[6].githubUsername}.png?size=250" alt="Profile image of Chris"></button>
            <button data-number=7 id="ken" class="style"> <img src="https://github.com/${people[7].githubUsername}.png?size=250" alt="Profile image of Ken"></button>
    `);
};
