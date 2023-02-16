const articlesDiv = document.getElementById("articles-content")
const padTo2Digits = (num) => num.toString().padStart(2, '0');
const formatDate = (date) => [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate()),].join('-')
const setLinkStyles = (element) => {
  element.classList.add("text-decoration-none")
  element.classList.add("btn")
  element.classList.add("btn-link")
  element.classList.add("link-light")
  element.classList.add("text-start")
  element.target = 'blank'
}

const moreButton = document.getElementById('more')

const fetchDataPage = (page) => {
  const baseUrl = `https://dev.to/api/articles?per_page=30&page=${page}&sort_by=published_at&username=valravnx`
//TODO add pagination using storage session
  fetch(baseUrl)
    .then(articles =>
      articles.json()
        .then(articles => {
            articles.map(article => {
                const publishDate = formatDate(new Date(article.published_at))

                const rowDiv = document.createElement("div")
                rowDiv.classList.add("row")

                const dateDiv = document.createElement("div")
                dateDiv.classList.add("col-3")

                const titleDiv = document.createElement("div")
                titleDiv.classList.add("col-9")

                const smallElement = document.createElement("small")
                smallElement.innerText = publishDate

                const titleLink = document.createElement("a")
                setLinkStyles(titleLink)
                titleLink.innerText = `${article.title}`
                titleLink.href = article.url

                const dateLink = document.createElement("a")
                setLinkStyles(dateLink)
                dateLink.href = article.url

                dateLink.appendChild(smallElement)
                titleDiv.appendChild(titleLink)
                dateDiv.appendChild(dateLink)
                rowDiv.appendChild(titleDiv)
                rowDiv.appendChild(dateDiv)
                articlesDiv.appendChild(rowDiv)
              }
            )
          }
        )
    )
}

let currentPage = 0
fetchDataPage(currentPage)
moreButton.onclick = () => {
  currentPage += 1
  fetchDataPage(currentPage)
}


