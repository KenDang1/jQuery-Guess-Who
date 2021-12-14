console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    console.log('on ready');
    


};
let picture = [];
for (let person of people) {
    if (person.name !== '')
    picture += person.name;
    $('body').append(`
        <div class="avatar">${picture}</div>
    `);
};