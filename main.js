/*
 * display thumbnails
 */
const app = new Vue({
  el: '#main',
  data: {
    lang: 'PT',
    index: []
  },
  methods: {
    fetchData: async function () {
      let response = await fetch('https://io.neufv.website/projects/conflitos/')
      this.index = await response.json()
    },
    setLanguage: function (lang) {
      this.lang = lang
    }
  },
  mounted: function () {
    this.fetchData()
  }
})
