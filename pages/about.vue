<script>

</script>

<template>
  <div>
    <h1>About Page</h1>
    <p>
      <a-button>
        <nuxt-link to="/">
          Return to Home Page
        </nuxt-link>
      </a-button>
    </p>

    <!-- <div>
      <div v-for="(img, index) in imgs" :key="index">
        <img :src="img">
      </div>
    </div> -->

    <CommentItem />
    <!-- <div
      v-observe-visibility="{
        callback: visibilityChanged,
        once: true,
        intersection: {},
      }"
    >
      <CommentItem3 v-if="isVisible" />
    </div> -->
    <div>
      <LazyHydrate when-visible>
        <CommentItem2
          v-if="hydrated"
          slot-scope="{ hydrated }"
        />
      </LazyHydrate>
    </div>
    <LazyHydrate when-visible>
      <CommentItem3
        v-if="hydrated"
        slot-scope="{ hydrated }"
      />
    </LazyHydrate>
  </div>
</template>

<script>
import CommentItem from '@/components/comment/CommentItem.vue'
// import CommentItem2 from '@/components/comment/CommentItem2.vue'
// import CommentItem3 from '@/components/comment/CommentItem3.vue'
import lazyLoadComponent from '@/util/lazy-load-component.js'

import LazyHydrate, { hydrateWhenVisible } from 'vue-lazy-hydration';
// import SkeletonBox from '@/components/SkeletonBox.vue'

import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)

// console.log('LazyHydrate ', LazyHydrate)

export default {
  layout () {
    return 'main'
  },
  components: {
    CommentItem,
    // CommentItem2: lazyLoadComponent({
    //   componentFactory: () => import(/* webpackChunkName: "CommentItem2" */ '@/components/comment/CommentItem2.vue'),
    //   loading: SkeletonBox
    // }),
    CommentItem2: () => import(/* webpackChunkName: "CommentItem2" */ '@/components/comment/CommentItem2.vue'),
    // CommentItem2: hydrateWhenVisible(
    //   () => import(/* webpackChunkName: "CommentItem2" */ '@/components/comment/CommentItem2.vue'),
    //   { observerOptions: { rootMargin: '100px' } },
    // ),
    CommentItem3: () => import(/* webpackChunkName: "CommentItem3" */ '@/components/comment/CommentItem3.vue'),
    LazyHydrate
  },
  data () {
    return {
      imgs: [
        'https://img.yzcdn.cn/vant/cat.jpeg'
      ],
      isVisible: false
    }
  },
  mounted () {
    // setTimeout(() => {
      this.imgs.push(
        'https://egame.gtimg.cn/club/pgg_pcweb/v2/img/578a64c.png?max_age=31536000',
        'https://egame.gtimg.cn/club/pgg_pcweb/v2/img/f8191ba.png?max_age=31536000',
        'https://egame.gtimg.cn/club/pgg_pcweb/v2/img/f538f0c.png?max_age=31536000'
      )
    // }, 1000)
  },

  methods: {
    handleClick () {
      console.log('Hello Click')
      window.location.href = '/'
    },
    visibilityChanged (isVisible, entry) {
      this.isVisible = isVisible
      console.log(entry)
    }
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
