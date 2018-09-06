/*
 * display thumbnails
 */
const mainEl = document.getElementById('main')

async function fetchData() {
  let response = await fetch('https://io.neufv.website/projects/conflitos/')
  let index = await response.json()
  let count = 0

  for (let folder in index) {
    const spacerEl = document.createElement('div')
    spacerEl.classList.add('spacer')
    mainEl.appendChild(spacerEl)

    for (let caseDocument of index[folder].documents) {
      if(caseDocument.thumbnail) {
        const thumbnailEl = document.createElement('img')
        thumbnailEl.src = caseDocument.thumbnail
        thumbnailEl.classList.add('thumbnail')

        mainEl.appendChild(thumbnailEl)
      }
    }
  }
}

fetchData()
