//Snake Iframe creator
const CreateIframeElementSnake = () => {
    // Creating iframe element.
    let el = document.createElement("iframe");
  
    // setting the values for the attributes.
    el.src = `https://snake.googlemaps.com/`;
    el.width = "90%";
    el.height = "600px";
  
    // Adding the created iframe to div as a child element
    document.getElementById("displaySnake").appendChild(el);
}

//Snake Iframe closer
const RemoveIframeElementSnake = () => {
    // Remove the last child ( iframe element ) of div.
    document.getElementById("displaySnake")
        .removeChild(document
        .getElementById("displaySnake").lastChild);
}
  
//Snake button controllers
const playButtonSnake = document.getElementById('playButtonSnake');
const closeButtonSnake = document.getElementById('closeButtonSnake');
  
playButtonSnake.addEventListener('click', () => {
    playButtonSnake.classList.add('hidden');
    closeButtonSnake.classList.remove('hidden');
});

closeButtonSnake.addEventListener('click', () => {
    closeButtonSnake.classList.add('hidden');
    playButtonSnake.classList.remove('hidden');
});
  
//2048 Iframe creator
const CreateIframeElement2048 = () => {
    // Creating iframe element.
    let el = document.createElement("iframe");
  
    // setting the values for the attributes.
    el.src = `https://play2048.co/`;
    el.width = "90%";
    el.height = "800px";
  
    // Adding the created iframe to div as a child element
    document.getElementById("display2048").appendChild(el);
}

//2048 Iframe closer
const RemoveIframeElement2048 = () => {
    // Remove the last child ( iframe element ) of div.
    document.getElementById("display2048")
        .removeChild(document
        .getElementById("display2048").lastChild);
}
  
//2048 button controllers
const playButton2048 = document.getElementById('playButton2048');
const closeButton2048 = document.getElementById('closeButton2048');
  
playButton2048.addEventListener('click', () => {
    playButton2048.classList.add('hidden');
    closeButton2048.classList.remove('hidden');
});
  
closeButton2048.addEventListener('click', () => {
    closeButton2048.classList.add('hidden');
    playButton2048.classList.remove('hidden');
});

//Minesweeper Iframe creator
const CreateIframeElementMinesweeper = () => {
    // Creating iframe element.
    let el = document.createElement("iframe");
  
    // setting the values for the attributes.
    el.src = `https://minesweeper.one/`;
    el.width = "90%";
    el.height = "600px";
  
    // Adding the created iframe to div as a child element
    document.getElementById("displayMinesweeper").appendChild(el);
}

//Minesweeper Iframe closer
const RemoveIframeElementMinesweeper = () => {
    // Remove the last child ( iframe element ) of div.
    document.getElementById("displayMinesweeper")
        .removeChild(document
        .getElementById("displayMinesweeper").lastChild);
}
  
//Minesweeper button controllers
const playButtonMinesweeper = document.getElementById('playButtonMinesweeper');
const closeButtonMinesweeper = document.getElementById('closeButtonMinesweeper');
  
playButtonMinesweeper.addEventListener('click', () => {
    playButtonMinesweeper.classList.add('hidden');
    closeButtonMinesweeper.classList.remove('hidden');
});

closeButtonMinesweeper.addEventListener('click', () => {
    closeButtonMinesweeper.classList.add('hidden');
    playButtonMinesweeper.classList.remove('hidden');
});

//WordSearch Iframe creator
const CreateIframeElementWordSearch = () => {
    // Creating iframe element.
    let el = document.createElement("iframe");
  
    // setting the values for the attributes.
    el.src = `https://word-search-puzzles.appspot.com/`;
    el.width = "90%";
    el.height = "600px";
  
    // Adding the created iframe to div as a child element
    document.getElementById("displayWordSearch").appendChild(el);
}

//WordSearch Iframe closer
const RemoveIframeElementWordSearch = () => {
    // Remove the last child ( iframe element ) of div.
    document.getElementById("displayWordSearch")
        .removeChild(document
        .getElementById("displayWordSearch").lastChild);
}
  
//WordSearch button controllers
const playButtonWordSearch = document.getElementById('playButtonWordSearch');
const closeButtonWordSearch = document.getElementById('closeButtonWordSearch');
  
playButtonWordSearch.addEventListener('click', () => {
    playButtonWordSearch.classList.add('hidden');
    closeButtonWordSearch.classList.remove('hidden');
});

closeButtonWordSearch.addEventListener('click', () => {
    closeButtonWordSearch.classList.add('hidden');
    playButtonWordSearch.classList.remove('hidden');
});