<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 El Sistema Moda reúne actividades de diseño, producción, comercialización y consumo de prendas y accesorios. Su comprensión permite reconocer cómo se relacionan los productos con la cultura, las tendencias y las necesidades de las personas.

        .container
          .row.align-items-center.bg-color-01.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 En este componente se abordarán los fundamentos del diseño, las categorías de moda, los canales de distribución, los consumidores y los eventos del sector. Estos temas permitirán comprender las características del mercado de la moda y su relación con el <em>marketing</em> digital.
          
        p.mb-0(data-aos="fade-right") A partir de ejemplos y recursos didácticos, se analizará cómo estos conocimientos orientan la comunicación de productos y marcas de manera clara, pertinente y responsable.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
