<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tendencias de moda y consumo

    .bg-full-width.bg-fondo-1
      .px-lg-3.py-lg-2.px-0.py-0
        img(src="@/assets/curso/tema5/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text Las preferencias de vestuario y las formas de comprar cambian con las experiencias de las personas y las transformaciones del entorno. Estos cambios pueden observarse en productos, materiales, estilos y prácticas de consumo. En este capítulo se estudiarán las tendencias, sus formas de difusión y el observatorio de tendencias. Estos conocimientos permitirán reconocer señales de cambio y valorar su utilidad para las decisiones de una marca.

      separador
      
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 Tendencias de moda


      .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-2 Una tendencia es una dirección de cambio observable durante un periodo y en un contexto determinado. Puede manifestarse en colores, siluetas, materiales o formas de adquirir y utilizar productos.
          p.mb-0 Para reconocerla es necesario contrastar información. La popularidad de una publicación o la preferencia de una persona no permiten afirmar, por sí solas, que existe una tendencia del mercado.

      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
            h3.titulo-con-imagen__texto Tendencias, preferencias y fenómenos virales

      p.mb-4 Distinguir estos conceptos ayuda a interpretar la información y evitar decisiones basadas únicamente en la visibilidad de un contenido.

        
      .row.mb-lg-5.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema5/img03.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Tendencia de moda").align-content-center
              p.mb-0 Cambio observable en propuestas y preferencias estéticas, como el uso recurrente de determinadas siluetas. Requiere identificar su presencia en un contexto y periodo.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Tendencia de consumo").align-content-center
              p.mb-0 Cambio en las formas de elegir, adquirir, utilizar o valorar productos. Puede relacionarse con servicios, experiencias y hábitos.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Fenómeno viral").align-content-center
              p.mb-0 Contenido que circula rápidamente y alcanza visibilidad. Su difusión no demuestra necesariamente una preferencia duradera ni una intención de compra.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Preferencia individual").align-content-center
              p.mb-0 Elección de una persona. Aporta información sobre su experiencia, pero no representa automáticamente a otras.


    p.mb-5 Los cambios ambientales y sociales también ofrecen asuntos para investigar. En 2025, el Día Internacional de Cero Desechos centró su atención en moda y textiles, destacando la reducción de residuos y la circularidad. Esta agenda permite formular preguntas sobre reparación, reutilización y duración de las prendas, sin asumir que todas las personas adoptan esas prácticas.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Difusión de las tendencias

    
    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-09.p-4.br-15
          p.mb-0 Las propuestas de moda circulan entre personas, comunidades, marcas y medios. Para estudiar esa circulación se conservan tres modelos históricos del componente original.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 4.
          span Modelos históricos de circulación de la moda
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Modelo
                th Descripción
                th Ejemplo hipotético
            tbody
              tr
                td <em>Trickle down</em> o difusión descendente
                td Una propuesta se difunde desde referentes de prestigio hacia otros grupos y mercados.
                td Una silueta presentada por una casa reconocida aparece reinterpretada en otras ofertas.
              tr
                td <em>Trickle across</em> o difusión horizontal
                td Una propuesta circula entre grupos y mercados mediante referentes compartidos, sin depender de una única jerarquía.
                td Diferentes comunidades y marcas incorporan combinaciones semejantes.
              tr
                td <em>Trickle up</em> o difusión ascendente
                td Una expresión de grupos o comunidades adquiere visibilidad e influye en propuestas comerciales.
                td Una forma de vestir vinculada con una escena musical es reinterpretada por una marca.


    p.mb-4 Los modelos pueden coexistir. En los entornos digitales, una propuesta puede circular en varias direcciones, modificarse y adquirir significados diferentes.


    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejercicio práctico
          p.mb-0 Una empresa de moda observa publicaciones sobre bolsos pequeños. Antes de incorporarlos a su oferta, revisa si aparecen en otras fuentes, qué usos se proponen y qué necesidades expresan sus clientes.
          p.mb-0 Esta revisión permite distinguir entre un contenido visible y una oportunidad pertinente para la marca. Todavía sería necesario comprobar aspectos como capacidad, comodidad y disposición de compra.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Observatorio de tendencias


    .px-lg-5.py-lg-4.px-0.py-0
      img(src="@/assets/curso/tema5/img04.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Un observatorio de tendencias organiza la búsqueda, el registro y el análisis de señales de cambio. Su función es aportar información para tomar decisiones y reconocer qué aspectos necesitan mayor investigación. En una empresa pequeña puede comenzar con una ficha de seguimiento. Lo importante es trabajar con una pregunta definida, fuentes identificables y criterios de comparación.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Proceso de observación



    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-4.br-15
          p.mb-0.text-center Observar tendencias requiere pasar de la recolección de ejemplos a una interpretación fundamentada. Para ello se propone la siguiente secuencia.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img05.png", data-aos="zoom-in", alt="").w-md-75.mx-auto
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Definir la pregunta")
            .col-md-12
              p.mb-2 Precisar qué se necesita conocer y cuál es el objetivo de la investigación. La pregunta debe ser concreta y estar relacionada con una necesidad del mercado, un comportamiento del consumidor o una oportunidad de innovación.
              p.mb-0 #[b Ejemplo:] ¿Qué características buscan los clientes en las prendas diseñadas para desplazarse en bicicleta?

          .row(numero="2" titulo="Delimitar el contexto")
            .col-md-12
              p.mb-2 Establecer el público objetivo, el territorio geográfico, la categoría de producto y el periodo de observación. Esta delimitación permite enfocar la investigación y obtener información pertinente para el contexto analizado.
              p.mb-0 #[b Ejemplo:] Jóvenes y adultos que utilizan la bicicleta como medio de transporte urbano en Bucaramanga durante el último año.

          .row(numero="3" titulo="Seleccionar fuentes")
            .col-md-12
              p.mb-2 Combinar diferentes fuentes para obtener una visión amplia del mercado. Se pueden consultar clientes potenciales, encuestas, entrevistas, observación de establecimientos comerciales, catálogos de marcas, redes sociales, informes de mercado y publicaciones sectoriales recientes.
              p.mb-0 La selección debe considerar la actualidad, la relevancia y la confiabilidad de cada fuente.

          .row(numero="4" titulo="Registrar señales")
            .col-md-12
              p.mb-2 Documentar los comportamientos, preferencias, novedades y cambios identificados durante la investigación. Cada registro debe incluir qué se observó, dónde y cuándo ocurrió, cuál es la fuente y qué alcance tiene la información.
              p.mb-0 También es importante conservar evidencias, como fotografías autorizadas, comentarios de consumidores, referencias de productos o datos de ventas, cuando estén disponibles.

          .row(numero="5" titulo="Contrastar información")
            .col-md-12
              p.mb-2 Comparar los hallazgos obtenidos en diferentes fuentes para identificar coincidencias, diferencias y posibles patrones. Este proceso permite distinguir entre una observación aislada y una señal que aparece de manera recurrente en distintos contextos.
              p.mb-0 Se deben considerar posibles sesgos, diferencias entre segmentos de consumidores y contradicciones que requieran una revisión adicional.

          .row(numero="6" titulo="Interpretar y verificar")
            .col-md-12
              p.mb-2 Analizar las señales identificadas para comprender qué significan para el mercado y cómo podrían influir en el diseño, desarrollo o comercialización de productos. A partir de los hallazgos, se pueden formular oportunidades de innovación, hipótesis de consumo o posibles líneas de acción.
              p.mb-0 Antes de tomar decisiones, es necesario identificar qué información falta por comprobar y definir cómo validarla, por ejemplo, mediante entrevistas, pruebas de producto, prototipos o estudios adicionales.
              
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los eventos sectoriales pueden aportar información sobre propuestas, materiales y conversaciones de la industria. Por ejemplo, el balance de Colombiamoda 2026 reúne referencias a diseño, identidad, innovación y sostenibilidad. Estos contenidos deben analizarse según su contexto; no representan por sí solos las preferencias de todos los consumidores.
    
    
    .tarjeta.bg-color-06.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema5/img07.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Lectura sugerida. Colombiamoda 2026
              p.mb-0 Para ampliar los conocimientos sobre diseño, identidad, innovación y sostenibilidad, lo invitamos a consultar el balance de Colombiamoda 2026 en el siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-botones.text-dark(:href="'https://inexmoda.org.co/colombiamoda-2026-culmina-una-edicion-que-consolida-a-colombia-como-un-referente-global/'" target="_blank")
                span Ir al recurso
                // i.fas.fa-file-download

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Registro e interpretación de señales

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-4.br-15
          p.mb-0.text-center Una señal es un indicio que merece examinarse. Para utilizarla conviene separar la observación de la interpretación.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 5.
          span Información hipotética de una empresa de moda
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Observación
                th Interpretación provisional
                th Verificación necesaria
            tbody
              tr
                td Algunos clientes preguntan por bolsillos con cierre.
                td Puede existir una necesidad de transportar objetos con seguridad.
                td Revisar frecuencia, actividades y productos consultados.
              tr
                td Se observan prendas con detalles reflectivos en diferentes ofertas.
                td Puede haber una oportunidad relacionada con visibilidad durante desplazamientos.
                td Comprobar necesidades de los usuarios y características técnicas.
              tr
                td Aparecen consultas sobre reparación de prendas.
                td Puede ser pertinente explorar un servicio de reparación.
                td Investigar demanda, costos y capacidad de atención.



    p.mb-5 Las herramientas digitales pueden complementar el registro. <em>Google Trends</em> muestra interés relativo de búsqueda en una escala de 0 a 100; sus resultados no equivalen a ventas ni a cantidades absolutas de compradores.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Adopción de propuestas

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-4.br-15
          p.mb-0.text-center Las personas no incorporan todas las novedades al mismo ritmo. El modelo de difusión de innovaciones distingue cinco categorías de adopción.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img08.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        .bg-fondo-01.px-lg-5.py-lg-5.px-4.py-4.mb-0(style="border-radius: 0px !important")
          SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
            .row.p-3
              h4 Innovadores
              p.mb-0 Son los primeros en explorar propuestas nuevas, incluso cuando todavía tienen poca difusión o existe incertidumbre sobre sus beneficios. Suelen mostrar curiosidad, disposición a experimentar y tolerancia al riesgo. Sus experiencias pueden ayudar a identificar fortalezas y aspectos por mejorar en una innovación.

            .row.p-3
              h4 Primeros adoptantes
              p.mb-0 Identifican valor en una propuesta y la incorporan tempranamente, cuando todavía no es utilizada por la mayoría. Suelen reconocer oportunidades antes que otros consumidores y pueden influir en las decisiones de su entorno al compartir sus experiencias y opiniones.

            .row.p-3
              h4 Mayoría temprana
              p.mb-0 Adopta una innovación después de observar resultados positivos y encontrar referencias confiables. Antes de incorporarla, suele buscar información, comparar alternativas y evaluar sus beneficios, costos y utilidad práctica.

            .row.p-3
              h4 Mayoría tardía
              p.mb-0 Incorpora la innovación cuando ya está ampliamente extendida y existe mayor confianza en sus resultados. Generalmente necesita evidencias claras, condiciones favorables, precios accesibles o recomendaciones que reduzcan la percepción de riesgo.

            .row.p-3
              h4 Adoptantes rezagados
              p.mb-0 Son quienes incorporan una innovación más tarde que los demás o prefieren mantener alternativas conocidas durante más tiempo. Su decisión puede estar relacionada con la costumbre, el presupuesto, la falta de acceso, la desconfianza o la percepción de que el cambio no es necesario.





    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img09.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3 Estas categorías describen la relación con una propuesta específica. Una persona puede adoptar pronto una tecnología y conservar durante años sus preferencias de vestuario.
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Reconocer tendencias exige observar cambios, contrastar señales y comprender su contexto. Los modelos de difusión y adopción ayudan a analizar cómo circulan las propuestas, mientras que el observatorio organiza la información para apoyar decisiones.
        p.mb-0 En <em>marketing</em> digital, este análisis permite valorar oportunidades sin depender únicamente de contenidos populares.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
