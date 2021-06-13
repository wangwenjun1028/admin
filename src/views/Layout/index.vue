<template>
  <div class="layout-container">
    <el-container style="height: 100%; width: 100%; border: 1px solid #eee">
      <el-aside width="210px">
        <el-menu :default-openeds="['1', '3']" style="height: 100%">
          <el-submenu
            v-for="(p, i) of getRoutes"
            :key="p.path"
            :index="(i + 1).toString()"
          >
            <template slot="title"
              ><i class="el-icon-message"></i>首页{{ p.name }}</template
            >
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px; height: 50px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  mounted() {
    console.log(this["permisstion/getConstRoute"]);
    console.log(this.$store.getters["permisstion/getConstRoute"]);
  },
  computed: {
    ...mapGetters(["permisstion/getConstRoute"]),
    getRoutes() {
      return this.$store.getters["permisstion/getConstRoute"];
    },
  },
};
</script>
<style  scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
}
.el-menu {
  background-color: #304156;
}
.el-header {
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.el-main {
  background-color: #f0f2f5;
}
</style>