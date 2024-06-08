const form = document.querySelector('#form');
const imgUrl = document.querySelector('#img');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const hazMeme = document.querySelector('#result')
const btn = document.querySelector('#submit')


form.addEventListener('submit', function (e){
    e.preventDefault();

    // values of the inputs
    const url = imgUrl.value;
    const top  = topText.value;
    const bottom = bottomText.value;

    // create a contaner for meme
    const memeContainer = document.createElement('div');
    memeContainer.classList.add('memeContainer');

    // create the image element
    const img = document.createElement('img');
    img.src = url;

    // create div for top text
    const topDiv = document.createElement('div');
    topDiv.classList.add('topText');
    topDiv.innerText = top

    // create div for bottom text 
    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottomText');
    bottomDiv.innerText = bottom;

    // create a btn with text X
    const btn = document.createElement('button');
    btn.innerText = 'X'
    btn.classList.add('deletBtn')

    // append child the img and texts
    memeContainer.append(img);
    memeContainer.append(topDiv);
    memeContainer.append(bottomDiv);
    memeContainer.append(btn)


    // append everything in the section 
    hazMeme.append(memeContainer)


    // add remove event in img
    img.addEventListener('click', function(){
        memeContainer.remove();
    })

    imgUrl.value = '';
    topText.value= '';
    bottomText.value = '';

})





