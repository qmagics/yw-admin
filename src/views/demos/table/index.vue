<template>
  <!-- <router-view /> -->
  <div>
    <pre>{{ cachedViews }}{{ key }}</pre>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Demo_Table",
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },

  // created() {
  //   const route = this.$route.matched.find(
  //     (item) => item.name === this.$options.name
  //   );
  //   this.$store.dispatch("tagsView/addCachedView", route);
  // },
};
</script>