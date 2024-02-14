<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.pinia.ts";
const { login } = useAuthStore();
const email = ref("");
const password = ref("");

const submit = async () => {
  await login({ email: email.value, password: password.value });
  alert("Login Successful");
  email.value = "";
  password.value = "";
};
</script>

<template>
  <div>
    <h3>Login Page</h3>
    <form @submit.prevent="submit" class="login">
      <p>email</p>
      <input type="email" v-model="email" />
      <p>password</p>
      <input type="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<style scoped>
h3 {
  text-align: center;
  margin-block: 20px;
}
.login {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  min-height: 300px;
  width: 300px;
  border: 1px solid #e2dfdf;
  margin: 0 auto;
  height: 100%;
}
.login button {
  background-color: rgb(83, 137, 180);
  color: white;
  padding: 14px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-top: auto;
}
.login input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #e2dfdf;
  border-radius: 5px;
}
</style>
