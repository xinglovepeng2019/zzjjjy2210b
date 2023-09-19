import {instance} from '@/utils/request'

// 登录
export function login(data) {
    return instance({
      url: 'admin/login',
      method: 'post',
      data
    })
  }

  type Catetype = {
    page:Number,
    limit:Number
  }
  export function getCateList(cate:Catetype) {
    return instance({
      url: `admin/image_class/${cate.page}`,
      method:'GET',
      params:{
        limit:cate.limit
      }
    })
  }


  // 
  type Listtype = {
    page:Number,
    limit:Number,
    id:Number
  }

  export function getList(list:Listtype) {
    return instance({
      url: `/admin/image_class/${list.id}/image/${list.page}`,
      method:'GET',
      params:{
        limit:list.limit
      }
    })
  }

  // /getRecord/:id

  export function getRecord(id) {
    return instance({
      url: `/getRecord/${id}`
    })
  }

  // 转账 /transferAccount
  export function delete_all(data) {
    return instance({
      url: `/admin/image/delete_all`,
      method:'post',
      data
    })
  }