<template>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import {useRouter} from 'vue-router'
  import type { FormInstance, FormRules } from 'element-plus'
  import {login} from '../../api/user'
  const router =useRouter()
  interface RuleForm {
    username: string
    password:string
  }
  
  const formSize = ref('default')
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive<RuleForm>({
    username: 'admin',
    password:"admin"
  })
  
  const rules = reactive<FormRules<RuleForm>>({
    username: [
      { required: true, message: '账号不能为空', trigger: 'blur' },
  ],
  password: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
  ]
    
  })
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
      if (valid) {
      let res= await login(ruleForm)
    //   console.log(res.data.token)
      localStorage.setItem('MY-TOKEN',res.data.token)
      router.push('/')
      
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  
  const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
  }))
  </script>
  