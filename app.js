let btn=document.querySelector('button');
let box=document.querySelector('.search-result');
let reqImage=document.querySelector('#input');
let body=document.querySelector('body');
let more=document.querySelector('#more');
let key='Define Your Own Access Key';
let page=1;
btn.addEventListener('click',async (event)=>{
    event.preventDefault();
    if(page!=1)box.innerHTML="";

   searching();
    
});

async function searching(){
    let url=`https://api.unsplash.com/search/photos?page=1&query=${reqImage.value}&client_id=${key}&per_page=12&page=${page}`

    let img= await axios.get(url);
    let imgArr=img.data.results;
    
    for(imgs of imgArr){
        let createdImg=document.createElement('img');
        createdImg.setAttribute('src',imgs.urls.small);
        box.append(createdImg);
    }
    more.style.display='block';
}
more.addEventListener('click',()=>{
    page++;
    searching();
});