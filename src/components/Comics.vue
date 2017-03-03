<template>
  <div class="container">
    <div class="comics">
      <div class="columns">
          <comic v-for="comic in comics" v-bind:name="comic.name" v-bind:image="comic.image" v-bind:id="comic.id" v-bind:url="comic.url" :key="comic.id"></comic>
      </div>
    </div>
  </div>
</template>

<script>
  import Comic from '@/components/Comic'

  export default {
    name: 'comics',
    components: {
      'comic': Comic
    },
    data () {
      return {
        comics: [
          {
            id: 1,
            image: 'http://placehold.it/300x225',
            name: 'Folder 1',
            url: '/download/comic/1'
          },
          {
            id: 2,
            image: 'http://placehold.it/300x225',
            name: 'Folder 2',
            url: '/download/comic/2'
          },
          {
            id: 3,
            image: 'http://placehold.it/300x225',
            name: 'Folder 3',
            url: '/download/comic/3'
          },
          {
            id: 4,
            image: 'http://placehold.it/300x225',
            name: 'Folder 4',
            url: '/download/comic/4'
          }
        ]
      }
    }
  }
</script>

<style>
  html {
    background-color: #F62459;
    background-image: linear-gradient(rgba(25, 181, 254, 0.6),rgba(246, 36, 89, 0.6)),linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(../assets/comicbooks.jpg);
    background-size: cover;
  }
</style>
