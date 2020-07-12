<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      PAGE NOT FOUNND
    </h1>
    <h1 v-else>
      APPLICATION OCCURS EXCEPTION
    </h1>
    <nuxt-link to="/">
      GO BACK HOME
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  layout: 'main' // 你可以为错误页面指定自定义的布局
}
</script>
