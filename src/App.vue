<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { icons } from 'assets/SVG/import-SVG';

  export default defineComponent({
    name: 'App',
    created(): void {
      this.$q.iconMapFn = (iconName => {
        if (iconName.indexOf('outlined_') === -1 && iconName.indexOf('outlined_') === -1 && iconName.indexOf('outlined_') === -1) {
          iconName = 'outlined_' + iconName
        }
        if (iconName in icons) {
          return { icon: `img:${icons[iconName]}` };
        }
      });
    }
  });
</script>
