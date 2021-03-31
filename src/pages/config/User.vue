<template>
  <q-page class="flex flex-center items-stretch text-white" padding>
    <form @submit.prevent.stop="onSubmit" class="flex flex-center">
      <!-- content -->
      <div class="column no-wrap q-gutter-md">
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
                   icon="save" outline type="submit"/>
          </div>
          <!--          <div class="col flex flex-center">-->
          <!--            <q-btn :color="edit ? 'secondary' : 'white'" @click="edit = !edit"-->
          <!--                   icon="pencil-f" outline/>-->
          <!--          </div>-->
          <!--        <div class="col flex flex-center">-->
          <!--          <q-btn :color="changes > 0 ? 'secondary': 'white'" icon="close"-->
          <!--                 outline @click="reset"/>-->
          <!--        </div>-->
        </div>
        <q-space/>
        <div class="col-auto column text-uppercase q-pa-md">
          <div class="text-h6 text-bold">Registro de accesos</div>
          <div class="flex items-center text-body2 no-wrap">
            <div>crear registro de accesos</div>
            <q-space/>
            <q-toggle color="secondary" size="lg" v-model="records"/>
          </div>
        </div>
        <q-space/>
      </div>
    </form>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  let changes = 0;

  let og = {
    name: 'admin',
    password: 'admin'
  };

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
      };
    },
    mounted(): void {
      this.reset();
    },
    methods: {
      reset() {
        this.name = og.name;
        this.password = og.password;
      },
      onSubmit() {
        this.$q.dialog({
          title: 'Confirmar',
          message: 'Guardar cambios?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          console.log('OK');
        }).onCancel(() => {
          console.log('Cancelled')
        });
      }
    }
  });
</script>
<style lang="scss">
</style>
