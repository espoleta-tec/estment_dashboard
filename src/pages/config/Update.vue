<template>
  <q-page class="column items-center q-gutter-lg text-white" padding>
    <!-- content -->
    <div class="q-pa-lg"/>
    <div class="q-pa-md">
      <Logo class="text-white text-h5"/>
    </div>
    <div class="column items-center">
      <span>Version Actual</span>
      <span class="text-secondary text-h6">0.5</span>
    </div>
    <div style="width: 20em">
      <q-file dark v-model="file">
        <template v-slot:append>
          <q-icon name="folder-f"/>
        </template>
      </q-file>
    </div>
    <q-btn @click="upload" icon="upload" label="actualizar" outline v-if="!uploading"/>
    <div class="q-pa-md self-stretch" v-else>
      <q-linear-progress color="white" track-color="accent" v-model="progress"/>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api'

  export default defineComponent({
    // name: 'PageName'
    data() {
      return {
        OTASuccess: false,
        file: '',
        type: 'firmware',
        uploading: false,
        progress: 0
      }
    },
    methods: {
      upload() {
        // const request = new XMLHttpRequest();
        const formData = new FormData()

        if (this.file == null) {
          return
        }
        if (this.file.length === 0) return
        formData.append(this.type, this.file)

        this.uploading = true
        this.$axios.post('update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progress: ProgressEvent) => {
            this.progress = progress.loaded / progress.total
          }
        }).then((resp) => {
          this.uploading = false
          console.log(resp.statusText)
          if (resp.status === 200) {
            this.$q.notify({
              message: 'Actualizacion exitosa',
              color: 'positive',
              position: 'top'
            })
          }
        }).catch(e => {
          this.uploading = false
          console.log(e.message)
          this.$q.notify({
            message: `Error ${e.message}`,
            color: 'negative'
          })
        })
      }
    }
  })
</script>
