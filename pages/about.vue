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

    <div>
      <a>
        <img src="https://img.yzcdn.cn/vant/tree.jpg">
      </a>
    </div>
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
  color: #ffffff;
  background-color: #43976c;
  padding: 4px;
}
</style>
