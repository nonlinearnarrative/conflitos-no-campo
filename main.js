/*
 * display thumbnails
 */
const app = new Vue({
  el: '#main',
  data: {
    index: []
  },
  methods: {
    fetchData: async function () {
      let response = await fetch('https://io.neufv.website/projects/conflitos/')
      this.index = await response.json()
    }
  },
  mounted: function () {
    this.fetchData()
  }
})
