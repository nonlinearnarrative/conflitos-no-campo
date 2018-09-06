/*
 * display thumbnails
 */
const mainEl = document.getElementById('main')
async function fetchData() {
  let response = await fetch('https://io.neufv.website/projects/conflitos/')
  let index = await response.json()

  for (let folder in index) {
    const spacerEl = document.createElement('div')
    spacerEl.classList.add('spacer')
    spacerEl.innerHTML = folder + ' &rarr;'
    mainEl.appendChild(spacerEl)

    for (let caseDocument of index[folder].documents) {
      if (caseDocument.id) {
        const thumbnailAnchorEl = document.createElement('a')
        thumbnailAnchorEl.href = caseDocument.link
        thumbnailAnchorEl.target = '_blank'

        const thumbnailEl = document.createElement('img')
        thumbnailEl.src = 'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=' + caseDocument.id
        thumbnailEl.classList.add('thumbnail')

        thumbnailAnchorEl.appendChild(thumbnailEl)
        mainEl.appendChild(thumbnailAnchorEl)
      }
    }
  }
}

fetchData()
