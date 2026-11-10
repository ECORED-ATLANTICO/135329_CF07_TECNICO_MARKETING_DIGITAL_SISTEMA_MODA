<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

   
    p.mb-3 El componente formativo Sistema Moda articula actores y actividades relacionados con el diseño, la producción, la comercialización y el uso de prendas y accesorios. Comprender sus fundamentos, categorías y universos de vestuario permite reconocer las características de los productos y relacionarlas con las necesidades del consumidor.
    p.mb-1 La cultura, las tendencias y los comportamientos de compra aportan elementos para interpretar el mercado. Los canales de distribución, la omnicanalidad y los eventos facilitan el encuentro entre las marcas y sus públicos.
    p.mb-4 El mercadeo integra estos conocimientos mediante decisiones sobre producto, precio, distribución y comunicación. Su aplicación requiere objetivos claros, información verificable y seguimiento para ofrecer experiencias coherentes y orientar mejoras.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente formativo Sistema Moda integra diseño, producción, comercialización y consumo de prendas y accesorios. La cultura, las tendencias y los comportamientos de compra permiten interpretar las necesidades del consumidor. Los canales, la omnicanalidad y los eventos conectan marcas y públicos. El mercadeo orienta decisiones de producto, precio, distribución y comunicación, con objetivos claros y seguimiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
