/*
 * display thumbnails
 */
const app = new Vue({
  el: '#main',
  data: {
    search: '',
    lang: 'PT',
    documentIndex: []
  },
  computed: {
    filteredIndex: function() {
      if (this.search === '') {
        return this.documentIndex
      }

      return Object.keys(this.documentIndex)
        .filter(key => this.search.toLowerCase().includes(key.toLowerCase()))
        .reduce((obj, key) => {
          obj[key] = this.documentIndex[key]
          return obj
        }, {})
    }
  },
  methods: {
    fetchData: async function () {
      let response = await fetch('https://io.neufv.website/projects/conflitos/')
      this.documentIndex = await response.json()
    },
    setLanguage: function (lang) {
      this.lang = lang
    }
  },
  mounted: function () {
    this.fetchData()
  }
})
