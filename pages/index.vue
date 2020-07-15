<template>
  <div>
    <h1>Home page</h1>

    <!-- <nuxt-content :document="doc" /> -->

    <p>
      <nuxt-link to="/about">
        Go to Abount Page
      </nuxt-link>
    </p>

    <div>
      <a>
        <img src="https://img.yzcdn.cn/vant/leaf.jpg">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main'
  // async asyncData ({ $content, params }) {
  //   const doc = await $content('content').fetch()

  //   return { doc }
  // }
}
</script>

<style scoped>
</style>
