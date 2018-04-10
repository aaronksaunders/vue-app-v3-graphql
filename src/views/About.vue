<template>
  <div>
    <h1>about</h1>
    <div class="demonstration">Start date time 12:00:00, end date time 08:00:00</div>
    <el-date-picker
      v-model="endValue"
      type="datetimerange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  constructor() {
    super();
  }

  data() {
    return {
      startValue:'',
      endValue:''
    }
  }
}
</script>
<style lang="scss">
@import url("//unpkg.com/element-ui@2.3.3/lib/theme-chalk/index.css");
body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
