<template>
  <q-page class="column items-stretch text-white" padding>
    <form @submit.prevent.stop="onSubmit" class="flex flex-center">
      <!-- content -->
      <div class="column items-center content-center no-wrap">
        <div class="col-auto flex flex-center">
          <q-icon class="text-h1" name="user_filled"/>
        </div>
        <div class="col-auto flex flex-center">
          <q-input @input="changes++" color="secondary" dark input-class="text-white"
                   label="Nombre de usuario" v-model="name"/>
        </div>
        <div class="col-auto flex flex-center">
          <q-input @input="changes++" color="secondary" dark input-class="text-white" label="Contraseña"
                   type="password" v-model="password"/>
        </div>
        <div class="col-auto q-pa-md flex flex-center justify-center">

          <div class="col flex flex-center">
            <q-btn :color="changes > 0 ? 'secondary': 'white'" :disable="changes === 0"
                   icon="save" outline label="guardar"
                   style="width: 12em" type="submit"/>
          </div>
        </div>
        <q-space/>
      </div>
    </form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

let changes = 0

let og = {
  name: 'admin',
  password: 'admin'
}

export default defineComponent({
  // name: 'PageName'
  data() {
    return {
      changes,
      name: '',
      password: '',
      edit: false,
      records: true,
      confirm: [
        { icon: 'check', action: null, color: 'positive' },
        { icon: 'close', action: null, color: 'negative' }
      ]
    }
  },
  mounted(): void {
    this.reset()
  },
  methods: {
    reset() {
      this.name = og.name
      this.password = og.password
    },
    onSubmit() {
      let form = {
        name: this.name,
        password: this.password
      }
      this.$q.dialog({
        title: 'Confirmar',
        message: 'Guardar cambios?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.post('/user', form).then(resp => {
          console.log(resp)
        }).catch(e => {
          console.log(e.message)
        })
      }).onCancel(() => {
        console.log('Cancelled')
      })
    }
  }
})
</script>
<style lang="scss">
</style>
