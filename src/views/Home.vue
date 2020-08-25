<!--
 * @Author: zhangyong
 * @Date: 2020-08-25 18:03:31
 * @LastEditTime: 2020-08-25 18:59:21
 * @LastEditors: zhangyong
 * @Description: 
-->
<template>
  <div class="home">
    <el-button @click="download">导出</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    download() { 
      this._axios({
        url: this.CONFIG['testApi'] + '/exportExcel/download',
        method: 'get',
        params: {},
        responseType: 'blob', //二进制流
      })
      .then((res) => { 
        if(!res) return
        let blob = new Blob([res.data], {type: 'application/vnd.ms-excel;charset=utf-8'})
        let url = window.URL.createObjectURL(blob);
        let aLink = document.createElement("a");
        aLink.style.display = "none";
        aLink.href = url;
        aLink.setAttribute("download", `高端配课表-${new Date().getTime()}.xlsx`);
        document.body.appendChild(aLink);
        aLink.click();
        document.body.removeChild(aLink); 
        window.URL.revokeObjectURL(url); 
      })
    }
  }
};
</script>
