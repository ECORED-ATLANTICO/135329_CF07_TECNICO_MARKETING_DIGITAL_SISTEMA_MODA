<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Categorías de moda


    .bg-full-width.bg-fondo-1
      .px-lg-5.py-lg-4.px-0.py-0
        img(src="@/assets/curso/tema2/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text Las categorías permiten organizar la oferta y comprender diferencias de producto, posicionamiento y comercialización. Para utilizarlas correctamente es necesario identificar el criterio de clasificación. Una categoría de producto, como calzado, responde a una pregunta diferente de un nivel de mercado, como lujo. Del mismo modo, un modelo de producción no equivale a un canal de venta.



      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
          SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3")
            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img04.svg', alt='Alta costura', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Alta costura
              p.text-center.mb-0 Creación de prendas personalizadas con procesos especializados. En el contexto francés, la denominación está sujeta a reconocimiento institucional; no corresponde a cualquier prenda costosa o hecha a medida.

            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img04.svg', alt='Prêt-à-porter', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center <em>Prêt-à-porter</em>
              p.text-center.mb-0 Vestuario listo para usar, producido en tallas o series. Puede encontrarse en distintos niveles de precio y posicionamiento.

            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img04.svg', alt='Líneas de difusión y propuestas premium', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Líneas de difusión y propuestas <em>premium</em>
              p.text-center.mb-0 Ofertas que amplían el alcance de una marca o destacan atributos de diseño, materiales, servicio o diferenciación. Su clasificación requiere observar cada propuesta.

            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img04.svg', alt='Marcas diferenciadas', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Marcas diferenciadas
              p.text-center.mb-0 Construyen una posición a partir de atributos particulares, como especialización, diseño, funcionalidad o identidad.

            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img04.svg', alt='Moda de mercado masivo', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Moda de mercado masivo
              p.text-center.mb-0 Oferta dirigida a públicos amplios. No toda producción masiva corresponde al modelo de moda rápida.

            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img04.svg', alt='Fast fashion', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center <em>Fast fashion</em>
              p.text-center.mb-0 Modelo asociado con ciclos rápidos de renovación y respuesta a tendencias. Debe analizarse por su funcionamiento y sus impactos, sin reducirlo únicamente al precio.

            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img04.svg', alt='Massprestige y colaboraciones', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center <em>Massprestige</em> y colaboraciones
              p.text-center.mb-0 Propuestas que combinan alcance amplio con asociaciones de prestigio, por ejemplo mediante colaboraciones entre marcas o creadores.

            .tarjeta.bg-color-8.p-4.h-100.br-15
              img(src='@/assets/curso/tema2/img04.svg', alt='Midi couture', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center <em>Midi couture</em>
              p.text-center.mb-0 Denominación presente en el material original para propuestas intermedias que combinan recursos industriales y acabados de apariencia elaborada. Su uso es variable y debe explicarse en cada contexto.

      .container
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10.bg-color-03.p-4.br-15
            p.mb-0 Para clasificar un producto se recomienda registrar cuatro aspectos:
      
      .row.justify-content-center.mb-4
        .col-lg-6.col-xl-4.col-md-11.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img05.svg', alt='Categoría')
            .tarjeta.tarjeta--azul
              .p-4
                p.mb-0 <b>Categoría:</b> vestuario, accesorios, perfumería y cosmética, o productos para el hogar.

        .col-lg-6.col-xl-4.col-md-11.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img06.svg', alt='Tipo y uso')
            .tarjeta.tarjeta--azul
              .p-4
                p.mb-0 <b>Tipo y uso:</b> camisa casual, ropa interior, prenda para ceremonia, sombrero o artículo de viaje.

      .row.justify-content-center.mb-4
        .col-lg-6.col-xl-4.col-md-11.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img07.svg', alt='Nivel de mercado')
            .tarjeta.tarjeta--azul
              .p-4
                p.mb-0 <b>Nivel de mercado:</b> posición construida mediante precio, diseño, materiales, servicio y percepción de valor.

        .col-lg-6.col-xl-4.col-md-11.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img08.svg', alt='Ubicación comercial')
            .tarjeta.tarjeta--azul
              .p-4
                p.mb-0 <b>Ubicación comercial:</b> mercados, públicos y espacios donde participa la oferta.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img09.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 El <em>slow fashion</em> propone una mirada centrada en la duración, el uso y ritmos de producción y consumo más conscientes. Sin embargo, expresiones como «lento», «local» o «artesanal» no demuestran por sí solas todos los atributos ambientales o sociales de un producto.
        .container
          .row.align-items-center.bg-color-04.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Las categorías de moda permiten organizar y comparar las propuestas del sector según sus productos, usos y posicionamiento. Para utilizarlas correctamente es necesario distinguir entre categoría de producto, nivel de mercado y modelo de producción. Esta clasificación facilita comprender qué ofrece una marca y a quién se dirige. El siguiente paso consiste en reconocer los canales mediante los cuales esa oferta llega al consumidor.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
