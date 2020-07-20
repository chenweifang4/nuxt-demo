<script>

</script>

<template>
  <div>
    <h1>About Page</h1>
    <p>
      <span :class="$style.aboutGlobalScssVariable">Using Global Scss Variable</span>
    </p>
    <p>
      <!-- <nuxt-link to="/">
        Return to Home Page
      </nuxt-link> -->

      <a href="/" target="_blank">Return to Home Page</a>
    </p>

    <div>
      <a>
        <img 
          v-for="img in imgs"
          :key="img"
          :src="img">
        <!-- <img src="https://img.yzcdn.cn/vant/tree.jpg">
        <img src="https://egame.gtimg.cn/club/pgg_pcweb/v2/img/578a64c.png?max_age=31536000" alt="">
        <img src="https://egame.gtimg.cn/club/pgg_pcweb/v2/img/f8191ba.png?max_age=31536000" alt="">
        <img src="https://egame.gtimg.cn/club/pgg_pcweb/v2/img/f538f0c.png?max_age=31536000" alt=""> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  layout () {
    return 'main'
  },
  data () {
    return {
      imgs: [
        'https://img.yzcdn.cn/vant/tree.jpg'
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.imgs.push(
        'https://egame.gtimg.cn/club/pgg_pcweb/v2/img/578a64c.png?max_age=31536000',
        'https://egame.gtimg.cn/club/pgg_pcweb/v2/img/f8191ba.png?max_age=31536000',
        'https://egame.gtimg.cn/club/pgg_pcweb/v2/img/f538f0c.png?max_age=31536000'
      )
    }, 1000)
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
