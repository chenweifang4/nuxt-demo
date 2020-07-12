<script>

</script>

<template>
  <div :class="$style.about">
    <div>
      About Page

      <p>
        <nuxt-link to="/">
          Return to Home Page
        </nuxt-link>
      </p>

      <div>
        <span :class="$style.aboutGlobalScssVariable">Using Global Scss Variable</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 18px;
}
.aboutGlobalScssVariable {
  color: $white;
  background-color: $green;
  padding: 4px;
}
</style>
