<template>
  <div class="main">
    <div>
      <h1>Home page</h1>

      <nuxt-content :document="doc" />

      <p>
        <nuxt-link to="/about">
          Go to Abount Page
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const doc = await $content('content').fetch()

    return { doc }
  }
}
</script>

<style scoped>
</style>
