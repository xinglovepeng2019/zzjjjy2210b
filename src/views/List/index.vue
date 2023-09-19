<template>
    <el-card class="box-card">
       <template #header>
        <div class="my-header">
        <el-button type="primary" size="mini">新增图片分类</el-button>
         <el-button type="warning" size="mini">上传图片</el-button>
       </div>
       </template>
       <div class="list">
         <div class="left">
            <div class="item " 
            :class="{'active':item.id===activeId}" 
            v-for="item in cates" :key="item.id"
            @click="getLists(item.id)">
                <span class="title">{{item.name}}</span>
                <span class="iright">
                    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
                    <Close style="width: 1em; height: 1em; margin-right: 8px"  />
                </span>
            </div>
             <!-- 分页 -->
             <el-pagination 
                background layout="prev, pager, next" 
                :total="total"
                :current-page="page"
                :default-page-size="limit"
                @current-change="curchange"
            />
         </div>
         <div class="right"  >
            <div class="clist" >
               <div class="itemlist" v-for="item in imgList" :key="item.id">
                <img :src="item.url" alt="">
                <p>{{ item.name }}</p>
                <div class="but">
                    <a href="javascript:;">重命名</a>
                    <a href="javascript:;" @click="del(item)">删除</a>
                </div>
               </div>
            </div>
            <!-- 分页 -->
            <el-pagination 
            v-if="imgList.length>0"
            background layout="prev, pager, next" 
            :total="ctotal"
            :current-page="mpage"
            :default-page-size="mlimit"
            @current-change="ccurchange"
            @size-change="cschange"
            />
         </div>
       </div>
    </el-card>
</template>
<script setup lang="ts">
    import {ref,onMounted,h } from 'vue'
    import {getCateList,getList,delete_all} from '../../api/user'
    import { ElLoading,ElMessage, ElMessageBox } from 'element-plus'


    // 获取左侧图片数据
    let page =ref(1)
    let limit =ref(10)
    let cates=ref([])
    let activeId = ref("") //初始id
    let total =ref(0)
    const getCates=async ()=>{
      let res= await getCateList({page:page.value,limit:limit.value})
    //   console.log(res.data.list,"fenl")
      cates.value = res.data.list
      activeId.value =res.data.list[0].id
      total.value = res.data.totalCount
    }
 
    let mpage =ref(1)
    let mlimit =ref(10)
    let imgList = ref([])
    let loading = ref(true)
    let ctotal = ref(0)
    const getLists=async (id)=>{
        const loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        activeId.value = id
        let res =await getList({id,page:mpage.value,limit:mlimit.value})
        console.log(res.data,0)
        imgList.value =res.data.list
        ctotal.value = res.data.totalCount
        setTimeout(()=>{
            loading.close()
        },500)
    }
    onMounted(async () => {
       await getCates()
       await getLists(activeId.value)
    })

    // 分页
    const ccurchange=(val)=>{
    console.log(val,1)
    mpage.value = val
    getLists(activeId.value)
}
// 分页
const curchange=(val)=>{
   
    page.value = val
    getCates()
}

// 删除
const del=async (item)=>{
    await delete_all({ids:[item.id]})
    await getLists(activeId.value)
//     ElMessageBox({
//     message: h('p', null, [
//       h('span', null, '是否删除该 ')
//     ]),
//     showCancelButton: true,
//     confirmButtonText: 'OK',
//     cancelButtonText: 'Cancel',
//     beforeClose: async (action, instance, done) => {
//       if (action === 'confirm') {
//         instance.confirmButtonLoading = true
//         instance.confirmButtonText = 'Loading...'
//         await del([item.id])
        
//       } else {
//         done()
//       }
//     },
//   }).then((action) => {
//     ElMessage({
//       type: 'info',
//       message: `action: ${action}`,
//     })
//   })
}
   
</script>
<style lang="less" scoped>
.example-showcase .el-loading-mask {
  z-index: 9;
}
.el-card{
    height: 100%;
}
.my-header{
    padding: 10px;
}
.list{
    display: flex;
    justify-content: space-around;
    border:1px solid #ddd;
    height: 500px;
    
    .left{
        // background-color: red;
        width: 300px;
        height: 100%;
        padding: 0 5px;
        .item{
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom:1px solid #ddd;
            &.active{
                background-color: bisque;
            }
            .title{
                font-size: 14px;
            }
        }
    }
    .right{
        background-color: yellow;
        flex: 1;
        height: 100%;
        .clist{
           padding: 10px;
           background-color: #fff;
           display: flex;
           flex-wrap: wrap;
           .itemlist{
            width: 200px;
            border: 1px solid #ddd;
            margin: 10px;
            
             img{
              width: 100%;
              height: 200px;
              .but{
                height: 30px;
                display: flex;
                justify-content: center;
              }
             }
           }
        }
    }
}
</style>