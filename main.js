const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';


    axios.get(endpoint).then((response) => {
        viewCd(response)
    }).catch((error) => {
        console.log(error);
    });


    function viewCd(response) {
        for(let i = 0; i < 10; i++){
    
        const imgUrl = response.data.response[i].poster;
        console.log(imgUrl);
    
        const div = document.createElement('box');
        div.classList.add('card', 'col-3', 'px-0', 'm-3');
    
        const img = document.createElement('img');
        img.src = imgUrl;
        img.className = 'img-fluid';
        div.appendChild(img);
        document.getElementById('box').appendChild(div);

        const author = response.data.response[i].author;
        authorElement = document.createElement('h2');
        authorElement.innerText = author;
        div.appendChild(authorElement);

        const title = response.data.response[i].title;
        titleElement = document.createElement('h3');
        titleElement.innerText = title;
        div.appendChild(titleElement);

        const year = response.data.response[i].year;
        yearElement = document.createElement('h4');
        yearElement.innerText = year;
        div.appendChild(yearElement);
        
    
        }
    }