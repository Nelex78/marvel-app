<template>
  <section class="row">
    <div class="col-3 info-block"
      v-for="comic in marvelList" 
      :key="comic.id">
    <div class="overlay"></div>
      <div class="info-text">
        <p> <span v-if="comic.name">Name:</span> {{comic.name}}</p>
        <p> <span v-if="comic.description">Description:</span> {{comic.description}}</p>
        <p> <span v-if="comic.modified">Modified:</span> {{comic.modified.slice(0, comic.modified.indexOf('-'))}}</p>
      </div>
      <img :src="comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension" />
    </div>
  </section>
</template>

<script>
import { getDataFromApi } from '@/data/fetchData.js';


export default {
  name: 'ContentList',
  data() {
    return {
      marvelList: null
    };
  },
  components: {},
  mounted() {
    getDataFromApi()
      .then(response => {
          this.marvelList = response.data.results;
           console.log(response.data.results)
         
        })
        .catch(err => {
          console.log(err);
      });
    
  }

}
</script>
