<template>
  <div>
    <h1>Home page</h1>

    <!-- <nuxt-content :document="doc" /> -->

    <div>
      <a>
        <!-- <img src="https://img.yzcdn.cn/vant/leaf.jpg"> -->
        <img src="https://img.yzcdn.cn/vant/tree.jpg">
      </a>
    </div>

    <p>
      <a-button>
        <nuxt-link to="/about">
          Go to Abount Page
        </nuxt-link>
      </a-button>

      <!-- <a href="/about" target="_blank">Go to Abount Page</a> -->
    </p>
  </div>
</template>

<script>
export default {
  layout: 'main',
  // async asyncData ({ $content, params }) {
  //   const doc = await $content('content').fetch()
  //   return { doc }
  // }
  mounted () {
    // navigator.serviceWorker.getRegistrations().then(function(registrations) {
    //   console.log('registrations ', registrations)
    //   for(let registration of registrations) {
    //     registration.unregister()
    //   }
    // })
  },

  methods: {
    handleClick () {
      console.log('Hello Click')
    }
  }

}
</script>

<style scoped>
p {
  margin: 20px 0px;
}
</style>
