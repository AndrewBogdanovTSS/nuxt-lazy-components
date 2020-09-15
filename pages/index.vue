<template>
  <div class="container">
    <div>
      <Logo/>
      <h1 class="title">
        lazy-components
      </h1>
      <div class="links">
        <w-button
          color="white"
          to="https://nuxtjs.org/"
          target="_blank">
          Documentation
        </w-button>

        <w-button
          color="white"
          to="https://github.com/nuxt/nuxt.js"
          target="_blank">
          GitHub
        </w-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
