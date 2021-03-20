<template>
  <section class="row">
    <div
      v-if="checkItem"
      class="no-item">
      No Data
    </div>
    <div class="col-3 info-block"
      v-for="comic in comicData"
      :key="comic.id">
    <div class="overlay"></div>
    <div class="info-text" >
      <p class="name"> <span v-if="comic.name">Name:</span> {{comic.name}}</p>
      <p class="modified"> <span v-if="comic.modified">Date:</span> {{comic.modified.slice(0, comic.modified.indexOf('-'))}}</p>
      <p class="description"> <span v-if="comic.description">Description:</span> {{comic.description}}</p>
    </div>
    <img :src="comic.thumbnail.path + '/portrait_uncanny.' + comic.thumbnail.extension" />
    </div>
  </section>
</template>
<script>

export default {
  props: {
    comicData: {
      type: Array,
      default: () => []
    },
    checkItem: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $overlay-color;
    opacity: 0;
  }
  section {
    .info-block {
      position: relative;
      text-align: left;
      .info-text {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 0;
        color: $light-main-font-color;
        padding: 10px;
        font-size: calc($main-font-size - 2px)
      }
      &:hover {
        .overlay {
          opacity: 0.6;
          z-index: 10;
        }
        .info-text {
          opacity: 1;
          z-index: 10;
          color: $light-main-font-color;
          span {
          color: $bg-color;
          font-weight: bold;
          }
          .modified {
            margin-bottom: 10px;
          }
          .description {
            text-align: left;
            span {
              display: block;
            }
          }
        }
      }
      
    }
    &.row {
      text-align: center;
       .no-item {
          color: $overlay-color;
        }
    }
  }

</style>