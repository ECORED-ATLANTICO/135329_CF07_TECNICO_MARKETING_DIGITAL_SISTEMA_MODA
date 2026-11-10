<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Fundamentos de mercadeo de moda

    .bg-full-width.bg-fondo-1
      .px-lg-3.py-lg-2.px-0.py-0
        img(src="@/assets/curso/tema8/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text 
            | El mercadeo de moda relaciona las necesidades del consumidor con las decisiones sobre productos, precios, distribución y comunicación. Su aplicación requiere comprender el mercado y reconocer el valor que ofrece la marca.
            | En este capítulo se integrarán estos conocimientos mediante cuatro aspectos: análisis del mercado, planeación de marca, mezcla de mercadeo e innovación y seguimiento.


      separador
      
      #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 8.1 Análisis del mercado y del consumidor

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema8/img02.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-3 Conocer el mercado permite identificar necesidades, reconocer alternativas y orientar decisiones comerciales. Este análisis reúne la investigación, la comprensión de la demanda y la segmentación del público.
          .container
            .row.align-items-center.bg-color-06.mb-0.p-3.br-15
              .col-lg-12
                p.mb-0 La investigación comienza con una pregunta concreta. Puede utilizar publicaciones sectoriales y registros existentes, o recoger información mediante observación, entrevistas, encuestas, grupos de discusión y pruebas de producto. Los resultados deben interpretarse según el alcance de la información obtenida.
      
      .row.justify-content-center.mb-4
        .col-lg-4.col-md-11.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema8/img04.svg', alt='Investigación de mercado')
            .tarjeta.tarjeta--azul
              .p-4
                h4 Investigación de mercado
                p.mb-0 Reúne y analiza información para resolver una pregunta comercial. Exige identificar fuentes, contexto y limitaciones.

        .col-lg-4.col-md-11.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema8/img05.svg', alt='Tipo y uso')
            .tarjeta.tarjeta--azul
              .p-4
                h4 Demanda
                p.mb-0 Considera la disposición y capacidad de adquirir una oferta bajo determinadas condiciones de precio, disponibilidad y contexto.

        .col-lg-4.col-md-11.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema8/img06.svg', alt='Tipo y uso')
            .tarjeta.tarjeta--azul
              .p-4
                h4 Segmentación
                p.mb-0 Reconoce grupos con necesidades o comportamientos relevantes para orientar productos y acciones comerciales.

      .row.justify-content-center.mb-4
        .col-lg-10
          .cajon.bg-color-c2.p-4
            h4.mb-2 Ejemplo aplicado
            p.mb-0 Una empresa de moda recibe consultas sobre camisas para combinar desplazamientos y trabajo. Antes de desarrollar una propuesta, investiga actividades, atributos valorados y dificultades de uso. Las consultas aportan indicios, pero no demuestran por sí solas una demanda suficiente.


    separador
    
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Planeación e identidad de marca

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema8/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-2 La planeación establece qué se pretende lograr y cómo se relaciona ese propósito con la identidad de la marca. Integra objetivos, metas y mensajes que deben corresponder con la oferta real.
        p.mb-0 Conocer el ADN de marca implica reconocer su propósito, público, atributos y diferenciación. Estos elementos orientan tanto las decisiones comerciales como las historias que se comunican.

    .row.justify-content-center.mb-4
      .col-lg-6.col-xl-4.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/img08.svg', alt='Investigación de mercado')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Objetivos y metas	
              p.mb-0 Establecer los resultados que se desean alcanzar, definiendo metas específicas, medibles y con plazos determinados. Para ello, es necesario considerar la situación inicial de la empresa, sus prioridades, los recursos disponibles y los indicadores que permitirán evaluar el progreso y el cumplimiento de los objetivos.

      .col-lg-6.col-xl-4.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/img09.svg', alt='Tipo y uso')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Identidad de marca
              p.mb-0 Definir con claridad qué ofrece la empresa, a quién se dirige y qué la diferencia de sus competidores. Esto implica establecer su propuesta de valor, personalidad, atributos y beneficios, respaldándolos con características demostrables que permitan construir una imagen coherente, reconocible y confiable ante el público.

      .col-lg-12.col-xl-4.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/img10.svg', alt='Tipo y uso')
          .tarjeta.tarjeta--azul
            .p-4
              h4 <em>Storytelling</em>
              p.mb-0 Construir una narración que comunique la esencia, los valores y la propuesta de la marca mediante una historia clara, relevante y auténtica. La narrativa puede organizarse a partir de una situación inicial, una necesidad o desafío, la respuesta de la empresa y los resultados obtenidos, utilizando hechos verificables para generar conexión con el público y transmitir el valor de la propuesta.


    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.bg-color-c2.p-4
          h4.mb-2 Ejemplo aplicado
          p.mb-0 Una empresa de moda se propone aumentar de 20 a 30 las consultas calificadas sobre camisas durante cuatro semanas. Para apoyar esta meta, comunica características comprobables del producto y explica cómo respondió a necesidades identificadas en sus usuarios.

    separador
    
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 Mezcla de mercadeo y comunicación digital

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-3.br-15
          p.mb-0.text-center La mezcla de mercadeo articula producto, precio, plaza y promoción. Estas decisiones deben responder a una misma necesidad y ofrecer una experiencia coherente.


    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta--azul.h-100
          .p-3
            h4 Producto
            p.mb-0 Definir atributos, tallas, materiales, cuidados y servicios asociados.
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta--azul.h-100
          .p-3
            h4 Precio
            p.mb-0 Establecer cuánto se cobra y bajo qué condiciones, considerando costos, propuesta de valor y público.
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta--azul.h-100
          .p-3
            h4 Plaza
            p.mb-0 Seleccionar canales y coordinar disponibilidad, acceso y entrega.
      .col-lg-3.col-md-6.mb-4
        .tarjeta.tarjeta--azul.h-100
          .p-3
            h4 Promoción
            p.mb-0 Comunicar información pertinente mediante mensajes, formatos y medios acordes con el objetivo.
            

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema8/img11.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-2 En comunicación digital se deben relacionar objetivo, público, mensaje, formato, canal y acción esperada. Las imágenes y descripciones deben corresponder con el producto; las colaboraciones con creadores requieren afinidad y claridad de participación.

        .container
          .row.align-items-center.bg-color-06.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 La coordinación entre canales también es fundamental. El cliente necesita encontrar información consistente durante sus consultas y compras.

    p.mb-5 Para profundizar en la experiencia del consumidor, se invita a consultar el pódcast Del descubrimiento a la compra, que aborda la coordinación entre canales físicos y digitales y la importancia de ofrecer información y atención coherentes durante el recorrido de compra.


    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-7.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
        .container.h-100
          .row.bg-color-03.br-15.p-0.h-100.justify-content-center.align-content-center
            .col-md-8.col-lg-5.mb-2.mb-lg-0.order-2.order-md-2.order-lg-1.p-0
              figure
                img(src="@/assets/curso/tema4/img11.png", data-aos="fade-right").w-md-75.mx-md-auto
            .col-lg-6.order-1.order-md-1.order-lg-2.p-4.p-lg-4
              h4 ¿Sabías que?
              p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast: 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-0(
                texto="Del descubrimiento a la compra"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast2.mp3')"
              )

    separador
    
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.4 Innovación y seguimiento de resultados

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema8/img11.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-2 La innovación permite desarrollar o mejorar productos, servicios y procesos. El seguimiento ayuda a comprobar sus resultados y orientar ajustes mediante información.

        .container
          .row.align-items-center.bg-color-03.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Una guía de medidas más clara o un servicio de reparación pueden aportar valor si responden a necesidades verificadas. También conviene observar la evolución comercial del producto: introducción, crecimiento, madurez y declive son referencias de análisis, no etapas de duración fija. Las herramientas digitales y la inteligencia artificial pueden apoyar propuestas, pero sus resultados requieren revisión.


 
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 9.
          span Relación entre objetivos e indicadores
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Objetivo
                th Indicador posible
            tbody
              tr
                td Generar reconocimiento.
                td Alcance en el público definido.
              tr
                td Aumentar interés comercial.
                td Consultas calificadas.
              tr
                td Favorecer compras digitales.
                td Pedidos respecto a sesiones de la tienda.
              tr
                td Mejorar atención.
                td Tiempo de respuesta y resolución.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.bg-color-c2.p-4
          h4.mb-2 Ejemplo aplicado
          p.mb-1 Si una empresa de moda esperaba 30 consultas y obtuvo 28, superó su registro inicial de 20, pero no alcanzó la meta. Antes de modificar la acción, debe revisar información sobre contenido, disponibilidad y atención. El resultado aislado no explica sus causas.
          p.mb-0 El mercadeo de moda integra el conocimiento del consumidor con la planeación de marca y las decisiones comerciales. La innovación y el seguimiento permiten reconocer oportunidades de mejora.

    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10.bg-color-c1.p-4.br-15
          p.mb-0 Los conocimientos del componente ayudan a interpretar el mercado y comunicar el valor de los productos mediante información verificable y atención a la experiencia del usuario.

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
