import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('cp-user', () => {
  // 用户信息
  let isLongin =ref(false)
  const setIsLogin =()=>{
    isLongin.value =true
  }
  const setLoginOut=()=>{
    isLongin.value = false
  }
  return { isLongin, setIsLogin, setLoginOut }
},
{
  persist: true
}
)
