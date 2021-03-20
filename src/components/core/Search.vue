<template>
  <section class="form-wrapper">
    <form>
      <input
        v-model="searchData"
        type="text"
        id="search"
        name="search">
        <input type="submit" value="Search">
    </form>
  </section>
</template>
<script>

export default {
  data() {
    return {
      searchData: null
    }
  },
  watch: {
    checkbox: function() {
      this.$emit("child-search", this.searchData);
    }
  }
}
</script>

<style lang="scss">
.form-wrapper {
  text-align: center;
  display:block;
  width: 100%;
  margin: 30px auto;
    input {
        height: 30px;
        display: inline-block;
        margin: 0 auto;
        padding: 5px;
        color: #fff;
       &[type="text"] {
         background: $bg-color;
         border: 2px solid $overlay-color;
         @include border-radius(15px, 0, 0, 15px);
         width: 300px;
       }
       &[type="submit"] {
          background: $overlay-color;
          border: 2px solid $overlay-color;
          @include border-radius(0, 15px, 15px, 0);
          text-transform: uppercase;
       }
    }
}
@media only screen and (max-width: $breakpoint-tablet) {
  .form-wrapper {
    input {
      &[type="text"] {
        width: 200px;
      }
    }
  }
}
</style>