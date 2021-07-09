async function getCategories() {
    let response = await fetch('https://striveschool-api.herokuapp.com/api/movies/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjUyMTA2NjAsImV4cCI6MTYyNjQyMDI2MH0.UDqgEnO5AQmzavdaPDpTs4jRCo019Xay9HfQ6bOLUIk",
            "Content-Type": "application/json",
        },
    })
    let categories = await response.json()
    categories.pop()
    createSections(categories)
     loadTitles(categories)

}


function createSections(categories) {
    let categoriesDeck = document.querySelector('.sectionsDecker')

    categories.forEach(category => {
        let newSection = document.createElement('section')
        newSection.classList.add('row', 'flex-column', 'mx-5')

        let sectionTitle = document.createElement('h2')
        sectionTitle.classList.add('row', 'mx-0')
        sectionTitle.innerText = category
        newSection.appendChild(sectionTitle)

        let productDeck = document.createElement('div')
        productDeck.classList.add('row', 'mx-0' , 'productsDeck')
        productDeck.id = category
        newSection.insertAdjacentElement('beforeend', productDeck)

        categoriesDeck.insertAdjacentElement('afterbegin', newSection)
    });

}

window.onload = () => {
   getCategories()
   
}

const loadTitles = async (categories) => {
        
        await categories.forEach(async function (category) {
        let titles = await getTitles(category)

        titles.forEach(title => {  
            let categorySection = document.querySelector(`#${title.category}`)
            categorySection.insertAdjacentHTML("afterbegin", `${generateTitlesHTML(title)}`)

        })
        cardsResponsive(category)
    })

    removeSpinner()
    
}

async function getTitles(category) {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${category}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjUyMTA2NjAsImV4cCI6MTYyNjQyMDI2MH0.UDqgEnO5AQmzavdaPDpTs4jRCo019Xay9HfQ6bOLUIk",
            "Content-Type": "application/json",
        },
    })
    let titles = await response.json()
    return titles
}


function generateTitlesHTML(title) {
    return `
        <div class="card d-none col align-items-center mb-4 py-4 px-1">
                <img src="${title.imageUrl}" class="card-img-top img-fluid" alt="...">       
            <a href="./backoffice.html?movie_Id=${title._id}&category=${title.category}" class="mt-3"> Edit</a>
        </div>
    `
}



function removeSpinner() {
    document.querySelector('.loading').remove()
}


let test 
function cardsResponsive(category) {
    let cards = document.querySelectorAll(`#${category} .card`)
    let aux = 0
    cards.forEach((card, i) =>{
        console.log(i)

        if(aux === 0 || aux === 1){
            card.classList.add('d-sm-flex')   
        }

        if(aux === 2 || aux === 3 ){
            card.classList.add('d-md-flex')  
        }


        if(aux === 4){
            card.classList.add('d-lg-flex')
        }
        if(aux === 5){
            card.classList.add('d-xl-flex')
        }

        if(aux === 6){
            card.classList.add('d-xl-flex')
            aux = 0
            return
        }
        aux++
    })
    
}