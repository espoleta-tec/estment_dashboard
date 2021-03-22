<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container>
      <q-page padding class="flex flex-center bg-primary row text-white">
        <!-- content -->
        <div class="text-center col-12 col-sm-6">
          <h3>ESTMET01</h3>
          <h5>Autenticacion</h5>
        </div>
        <q-form class="col-12 col-sm-6 bg-primary flex flex-center column q-gutter-lg text-white">
          <div class="q-ma-lg"/>
          <q-input v-model="user" dark color="accent" label="Usario" label-color="white"/>
          <q-input v-model="password" dark color="accent" label="Contraseña" label-color="white" type="password"/>
          <div class="q-ma-md"/>
          <q-btn @click="authenticate" color="secondary" label="Entrar" class="text-h6"
                 style="border-radius: 9999px; padding: 0.3rem 2rem"/>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>

</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    // name: 'PageName',
    data() {
      return {
        user: '',
        password: ''
      };
    },
    methods: {
      authenticate() {
        let data = {
          name: this.user,
          pswd: this.password
        };
        this.$axios.request({
          url: 'authenticate',
          method: 'POST',
          data: data
        }).then((response) => {
          console.log(response.data);
          if ('access_token' in response.data) {
            this.$store.commit('login/changeToken', response.data['access_token']);
            console.log(this.$store.state.login.token);
            this.$router.push('/').catch(error => {
              console.log(error.message);
            });
          }
        }).catch(error => {
          console.log(error);
        });
      }
    }
  });
</script>
<style lang="scss">
  .q-field--outlined:hover .q-field__control:before {
    border-color: $accent !important;
  }
</style>
