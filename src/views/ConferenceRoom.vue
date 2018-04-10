<template>
<div id="app">
<el-form ref="form" :model="form" label-width="140px">
  <el-form-item label="Activity name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-col :span="24">
      <el-select  :span="24" v-model="form.region" placeholder="please select your conference room or class room">
        <el-option label="conference room one" value="shanghai"></el-option>
        <el-option label="conference room two" value="beijing"></el-option>
        <el-option label="board room" value="beijing"></el-option>
        <el-option label="class room one" value="shanghai"></el-option>
        <el-option label="class room two" value="beijing"></el-option>
        <el-option label="class room large" value="beijing"></el-option>
      </el-select>
    </el-col>
  </el-form-item>
  <el-form-item label="Activity time">
    <!-- <el-col :span="11">
      <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">&nbsp;&nbsp;&nbsp;-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col> -->
    <div class="block">
      <el-date-picker 
        v-model="form.date1" 
        type="datetimerange" 
        align="right" start-placeholder="Start Date" 
        end-placeholder="End Date" 
        :default-time="['12:00:00', '08:00:00']">
      </el-date-picker>
    </div>
  </el-form-item>
  <el-form-item label="Member">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Activity type" :span="24">
    <el-checkbox-group v-model="form.type">
      <el-col :span="11">
      <el-checkbox  style="margin:0px" label="Online activities" name="type"></el-checkbox>
      <el-checkbox  style="margin:0px" label="Promotion activities" name="type"></el-checkbox>
      </el-col>
      <el-col :span="11">
      <el-checkbox style="margin:0px" label="Offline activities" name="type"></el-checkbox>
      <el-checkbox style="margin:0px" label="Simple brand exposure" name="type"></el-checkbox>
      </el-col>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>

    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query= "require('../graphql/queries').GET_MESSAGE"
      :variables="{ id: '100' }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">
          An error occured
          {{error.graphQLErrors[0].message}}
        </div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">{{ data.msg }}</div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "element-ui/lib/theme-chalk/index.css";

// GRAPHQL
import * as graphQLQuery from "../graphql/queries";

@Component({
  components: {}
  //   apollo: {
  //   // Simple query that will update the 'hello' vue property
  //   hello: graphQLQuery.HELLO,
  //   msg: {
  //     query: graphQLQuery.GET_MESSAGE,
  //     variables: {
  //       id: "10"
  //     }
  //   }
  // }
})
export default class ConferenceRoom extends Vue {
  constructor() {
    super();
  }

  onSubmit() {
    debugger;
  }
  data() {
    return {
      hello: "",
      msg: {},
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  }
}
</script>
<style lang="scss">
* {
  font-family: sans-serif;
}
form {
  display: block;
  margin-top: 0em;
  width: 540px;
}
.el-select {
  width: 100%;
}
</style>
