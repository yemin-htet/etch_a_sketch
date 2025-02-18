const btn = document.querySelector('#btn');
btn.addEventListener('click' ,() => {

    let grid = parseInt(prompt("Enter number"), 10);
    let onesquareColumn= Math.floor(1000/grid);
    let onesquareRow = Math.floor(800/grid)
    let container = document.querySelector('.container');
    container.setAttribute('style',` grid-template-columns: repeat(${grid},${onesquareColumn}px);
    grid-template-rows: repeat(${grid},${onesquareRow}px); display: grid;`)

    for(let i=0; i < grid**2 ; i++){
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id','theDiv');
        container.appendChild(newDiv);
    }
    alert('Created');
    let savedColor = NaN;
    const divs = document.querySelectorAll('#theDiv');
    divs.forEach((d)=>
    d.addEventListener("mouseover",()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        savedColor = `#${randomColor}`
        d.setAttribute('style',`background: #${randomColor}; opacity ; 0.2`);
        d.style.boxShadow = `0 0 15px #${randomColor}`;
    })
);
    divs.forEach((d)=>
    d.addEventListener("mouseenter", ()=>{
        d.setAttribute('style', "border: 1px solid black");
    }));

    divs.forEach((d)=>
        d.addEventListener("mouseleave", ()=>{
            d.setAttribute('style', `border: none;`);
            d.style.backgroundColor = savedColor;
            d.style.boxShadow = `0 0 15px ${savedColor}`;
            savedColor = 'white';
        }));
});

const reset = document.querySelector('#reset');
 reset.addEventListener("click", ()=> {
    const divs = document.querySelectorAll('#theDiv');
    divs.forEach((d)=>
        d.setAttribute('style','background: white;')
    )
 }
    
);


