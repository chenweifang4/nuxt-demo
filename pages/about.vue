<script>

</script>

<template>
  <div>
    <h1>About Page</h1>
    <p>
      <span :class="$style.aboutGlobalScssVariable">Using Global Scss Variable</span>
    </p>
    <p>
      <nuxt-link to="/">
        Return to Home Page
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  layout () {
    return 'main'
  }
}
</script>

<style lang="scss" module>
.aboutGlobalScssVariable {
  color: $white;
  background-color: $green;
  padding: 4px;
}
</style>
