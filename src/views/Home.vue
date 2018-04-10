<template>
  <div class="home">
    <router-link to="/">
      <el-button>HOME</el-button>
    </router-link>
        <router-link to="/hello-world">
      <el-button>HELLLO WORLD</el-button>
    </router-link>
    <router-link to="/about">
      <el-button>ABOUT</el-button>
    </router-link>
    <router-link to="/conference-room">
      <el-button>Reserve A Room</el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>


<style>
.router-link-active button {
  background-color: blueviolet;
}
.router-link-active {
  font-style: italic;
}
</style>
