<template>
  <div class="column">
      <div class="card">
        <a :href="url">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="image" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              {{ name }}
            </div>
          </div>
        </a>
        <footer class="card-footer">
          <a class="card-footer-item">Edit Metadata</a>
        </footer>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'comic',
    props: ['image', 'name', 'id', 'url']
  }
</script>

<style scoped>
</style>
