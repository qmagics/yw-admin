<template>
  <div class="app-container">
    <el-row>
      <el-col :span="3">
        <el-menu
          router
          style="min-height: 600px"
          :default-active="activeMenu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            v-for="i in menuRoutes"
            :key="i.meta.fullPath"
            :class="{
              active: i.path === $route,
            }"
            :index="i.meta.fullPath"
            :route="i"
          >
            <i :class="i.meta.icon" />
            <span slot="title">{{ i.meta.title }}</span>
            <!-- <span slot="title">{{ i.meta.fullPath }}</span> -->
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21" style="padding-left: 15px">
        <pre>activeMenu:{{ activeMenu }}</pre>
        <router-view />
      </el-col>
    </el-row>
    <!-- <pre>{{ menuRoutes }}</pre> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },

  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    ...mapGetters(['permission_routes']),
    menuRoutes() {
      return this.$store.getters.getParentRouteByFullPath(this.$route.path)
        .children
    }
  },

  async mounted() {},

  methods: {}
}
</script>

<style lang="scss">
.router-link-active {
  color: red;
}
</style>
