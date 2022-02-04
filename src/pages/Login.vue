<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container>
      <q-page padding class="row bg-dark row text-white">
        <!-- content -->
        <div class="text-center col-12 flex flex-center col-sm-6">
          <Logo class="text-h4"/>
        </div>
        <q-form class="col-12 col-sm-6 flex flex-center column q-gutter-lg text-white">
          <div class="q-ma-lg"/>
          <q-input v-model="user" outlined dark color="secondary" label="Usario" label-color="white"/>
          <q-input v-model="password" outlined dark color="secondary" label="Contraseña" label-color="white"
                   type="password"/>
          <div class="q-ma-md"/>
          <q-btn @click="authenticate" color="secondary" outline label="Entrar" class="text-h6"/>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // name: 'PageName',
  data() {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    authenticate() {
      let data = {
        name: this.user,
        password: this.password
      }
      this.$axios.request({
        url: 'authenticate',
        method: 'POST',
        data: data
      }).then(async (response) => {
        if ('access_token' in response.data) {
          this.$store.commit('login/changeToken', response.data['access_token'])
          await this.$store.dispatch('api/changeMaster')
          console.log(this.$store.state.login.token)
          this.$router.push('/').catch(error => {
            console.log(error.message)
          })
        }
      }).catch(error => {
        console.log(error)
        this.$q.notify({
          message: `Error ${error.message}`,
          color: 'negative'
        })
      })
    }
  }
})
</script>
<style lang="scss">
//.q-field--outlined:hover .q-field__control:before {
//  border-color: $secondary !important;
//}
</style>
