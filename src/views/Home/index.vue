<template>
    <div class="common-layout">
      <el-container>
        <el-header>
           <div class="header">
              <div class="left">
                <el-icon :size="size" :color="color" @click="myload">
                <RefreshRight />
                </el-icon>
              </div>
              <div class="right">
                <el-icon :size="size" :color="color" @click="myload1">
                <Edit />
                </el-icon>
              </div>
           </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </template>

<script setup lang="ts">
   const myload=()=>{
    location.reload()
   }
   const myload1=()=>{
    document.documentElement.requestFullscreen()
   }
</script>

<style lang="less" scoped>
.header{
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  .left{
    display: flex;
    align-items: center;
    height: 100%;
  }
}
.el-container{
    height: 100%;
    width: 100%;
}
.common-layout{
    height: 100%;
    width: 100%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
   
  }
  

  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
 
</style>