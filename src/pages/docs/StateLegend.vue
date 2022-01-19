<template>
  <q-page padding class="text-body2">
    <!-- content -->
    <div class="flex heading">ESTADO</div>
    <br/>
    <p>
      Ofrece una panoramica general del estado actual de la Estacion Meteorologica.
      Mediante el desglose de sus diferentes secciones, podra el usuario estar al tanto de las configuraciones
      principales
      del equipo.
      <br/>
    </p>

    <div class="flex heading">LAN</div>
    <br/>
    Seccion de informacion acerca de la configuracion de red cableada ETHERNET detectada en el sistema.

    <section>
      <li>Direccion MAC</li>
      Direccion fisica del dispositivo de red.

      <li> Direccion IP</li>
      Direccion IP asignada al dispositivo fisico de red.
      <br/>
      <p/>
    </section>


    La marcacion <span class="bg-black text-white">ESTATICA | DHCP</span> informa acerca del tipo de asignacion de
    direccion IP establecida.
    <p/>

    <div class="flex heading">WIFI</div>

    Descripcion de la conectividad inalambrica del dispositivo.
    <p/>

    <li> RSSID
    </li>
    Red inalambrica a la cual se ha establecido conexion.

    <li> Direccion IP
    </li>
    Direccion IP asignada al dispositivo mediante conexion de red inalambrica.

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style scoped lang="scss">
.text-body2 {
  font-size: 9pt;
}
</style>
