<template>
  <Search @child-search="searchValue"/>
  <CardPreview 
    :comicData="marvelList"
    :checkItem="noItem"
  />
</template>

<script>
import { getDataFromApi } from '@/data/fetchData.js';
import CardPreview from '@/components/views/CardPreview.vue';
import Search from '@/components/core/Search.vue';

export default {
  name: 'ContentList',
  data() {
    return {
      marvelList: null,
      searchDataFromChild: null,
      noItem: false
    };
  },
  components: { CardPreview, Search },
  methods: {
    searchValue: function(searchData) {
      this.searchDataFromChild = searchData;
    },
    submitForm(fromSearch) {
      let filterData = this.marvelList.filter( c => {
         return c.modified.slice(0, c.modified.indexOf('-')).startsWith(fromSearch)
      })
      this.noItem = false;
      if(filterData.length === 0){
        this.noItem = true
      }
      this.marvelList = filterData;
    }
  },
  mounted() {
    getDataFromApi()
      .then(response => {
          this.marvelList = response.data.results;
          if(this.$route.query.search){
            this.submitForm(this.$route.query.search);
          }
        })
        .catch(err => {
          console.log(err);
      });
  }
}
</script>
