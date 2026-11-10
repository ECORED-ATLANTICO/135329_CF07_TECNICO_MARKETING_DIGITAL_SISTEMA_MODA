<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cultura de moda



    .bg-full-width.bg-fondo-1
      .px-lg-5.py-lg-4.px-0.py-0
        img(src="@/assets/curso/tema4/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text El vestuario cumple funciones prácticas y comunica significados. Las prendas, los accesorios y sus combinaciones pueden expresar preferencias, pertenencia a un grupo o formas de relacionarse con el entorno.

      .container
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10.bg-color-06.p-4.br-15
            p.mb-0 En este capítulo se abordarán la cultura y la sociología de la moda para comprender estas relaciones. Su estudio permitirá analizar cómo los contextos sociales influyen en el vestir y cómo pueden representarse de manera respetuosa en la comunicación de una marca.

      separador
      
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.1 ¿Qué es cultura?


      .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-2 La cultura comprende conocimientos, prácticas, valores, creencias y símbolos que las personas construyen, comparten y transforman. Se manifiesta en actividades cotidianas como la alimentación, las celebraciones, el lenguaje y las formas de vestir. 
          p.mb-0 Las personas participan en diferentes grupos y experiencias culturales. Por eso, compartir un territorio, una edad o una actividad no significa tener los mismos gustos ni interpretar de igual manera una prenda.


      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
            h3.titulo-con-imagen__texto Relación entre cultura y vestuario

      .container
        .row.align-items-center.bg-color-c2.br-15.mb-5
          .col-lg-auto.order-2
            img.d-none.d-lg-flex(src="@/assets/curso/tema4/img03.png", style="max-width: 150px").mx-auto
          .col-lg.order-1.p-4
            p.mb-0 El significado del vestuario depende de quién lo utiliza, dónde y en qué situación. Una prenda puede asociarse con una celebración, una actividad laboral, una práctica deportiva o una expresión personal.
            p.mb-0 Para interpretar estas relaciones es necesario observar el contexto y escuchar a las personas. La apariencia permite describir elementos visibles, pero no conocer automáticamente sus creencias, identidad o motivaciones.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identidad").align-content-center
            p.mb-0 Las personas seleccionan y combinan prendas para expresar preferencias y formas de reconocerse. Estas elecciones pueden cambiar según sus experiencias y actividades.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Pertenencia").align-content-center
            p.mb-0 El vestuario puede relacionarse con grupos, comunidades o prácticas compartidas. Los uniformes y determinadas prendas de celebración son ejemplos de esta relación.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Contexto").align-content-center
            p.mb-0 El lugar, el clima, la actividad y los acuerdos sociales influyen en las elecciones. Una misma prenda puede adquirir significados diferentes según la situación.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Transformación").align-content-center
            p.mb-0 Las formas de vestir cambian mediante intercambios culturales, nuevas necesidades y reinterpretaciones. Algunas prácticas permanecen y otras se modifican.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Cultura y comunicación de moda


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img05.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 En <em>marketing</em> digital, comprender la cultura ayuda a seleccionar imágenes, palabras y situaciones cercanas al público. Esta selección requiere evitar generalizaciones que reduzcan una comunidad a una apariencia o un comportamiento.
        .container
          .row.align-items-center.bg-color-09.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Cuando una propuesta incorpora técnicas, relatos o expresiones de una comunidad, es importante reconocer su procedencia y explicar la participación real de sus integrantes. La comunicación debe corresponder con lo que efectivamente se desarrolló.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejercicio práctico
          p.mb-0 Una empresa de moda prepara una publicación sobre una colección realizada con un colectivo artesanal. Antes de presentar el contenido, verifica quiénes participaron, qué técnicas se utilizaron y cuáles fueron sus aportes.
          p.mb-0 Con esta información puede explicar la colaboración y reconocer a sus participantes. Una fotografía de un tejido, por sí sola, no permite afirmar que existe una relación con una comunidad.


    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Sociología de la moda

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-2 La sociología de la moda estudia las relaciones entre vestuario, personas y sociedad. Permite analizar cómo las elecciones de apariencia se relacionan con pertenencia, diferenciación, normas y cambios sociales.
        p.mb-0 Desde esta perspectiva, la moda puede comprenderse como una práctica que combina decisiones personales e influencias del entorno. Las personas pueden adoptar referentes compartidos, reinterpretarlos o apartarse de ellos.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img07.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img08.svg', alt='Autoafirmación', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Autoafirmación
            p.text-center.mb-0 El vestuario puede participar en la expresión de la identidad. Una persona selecciona prendas con las que se siente representada y puede combinarlas de una manera particular.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img08.svg', alt='Convergencia', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Convergencia
            p.text-center.mb-0 Las elecciones pueden compartir referentes y características. Por ejemplo, integrantes de una comunidad vinculada con una actividad pueden adoptar elementos de vestuario semejantes.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img08.svg', alt='Autonomía', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Autonomía
            p.text-center.mb-0 Las personas pueden seleccionar, adaptar o rechazar propuestas disponibles. Adoptar una tendencia no implica reproducirla de la misma manera que otros.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img08.svg', alt='Personalización', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Personalización
            p.text-center.mb-0 Los creadores y referentes reconocibles pueden influir en la interpretación de una propuesta. Sus decisiones de diseño contribuyen a construir un estilo identificable.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img08.svg', alt='Simbolización', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Simbolización
            p.text-center.mb-0 Las prendas y marcas pueden asociarse con significados, como formalidad, pertenencia o diferenciación. Estos significados deben interpretarse según el contexto.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema4/img08.svg', alt='Imperio', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Imperio
            p.text-center.mb-0 Denominación del material base para analizar cómo la influencia de la moda se extiende hacia ámbitos como música, deporte, cine y entretenimiento.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Aplicación al análisis de campañas


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c2.p-4.br-15
          p.mb-0.text-center Estos principios ayudan a formular preguntas sobre lo que una campaña representa. Conviene distinguir entre describir, interpretar y verificar:



    .row.justify-content-center.mb-4
      .col-lg-6.col-xl-4.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img09.svg', alt='Categoría')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Describir:</b> identificar y registrar de manera objetiva los elementos visibles de la campaña, como prendas, colores, texturas, personas, escenarios, poses, gestos, iluminación, composición y acciones. Esta etapa se centra en reconocer qué aparece y cómo se presenta, sin atribuir significados ni emitir juicios personales.

      .col-lg-6.col-xl-4.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img09.svg', alt='Tipo y uso')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Interpretar:</b> analizar cómo los elementos visuales, estéticos y narrativos pueden transmitir ideas, emociones, valores o mensajes. Se consideran aspectos como el estilo, la identidad de marca, el público objetivo, los códigos culturales y las posibles asociaciones simbólicas, reconociendo que una misma imagen puede generar diferentes interpretaciones.


      .col-lg-6.col-xl-4.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img09.svg', alt='Verificar')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Verificar:</b> contrastar las interpretaciones con información comprobable sobre la campaña, sus objetivos, la marca, los participantes, el contexto de producción y los mensajes difundidos oficialmente. Este proceso permite distinguir los hechos de las suposiciones y determinar si las conclusiones están respaldadas por evidencias suficientes.


    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejercicio práctico
          p.mb-0 La campaña de una empresa de moda, muestra a tres personas que combinan una misma camisa de maneras diferentes. En la imagen se observa una prenda compartida y elecciones particulares de accesorios.
          p.mb-0 La situación puede analizarse mediante convergencia y autonomía: existe un elemento común, pero cada combinación es diferente. Para conocer las motivaciones de las personas sería necesario consultar información adicional.


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
                texto="La moda comunica identidad"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )

      .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-color-c1.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Para complementar los conocimientos sobre cultura de moda, se invita a consultar el pódcast La moda comunica identidad, que explora las relaciones entre vestuario, cultura y expresión personal, y su importancia para representar la diversidad en la comunicación de una marca.
        p.mb-0 La cultura permite comprender que el vestuario adquiere significados según las personas y sus contextos. La sociología de la moda aporta herramientas para analizar relaciones de identidad, pertenencia y diferenciación, sin reducir las elecciones a características fijas de un grupo.
        
    

    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12.bg-color-06.p-4.br-15
          p.mb-0.text-center En <em>marketing</em> digital, esta comprensión favorece representaciones respetuosas y mensajes contextualizados. También prepara el análisis de las tendencias, que permiten observar cómo cambian y circulan las propuestas de moda y consumo.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
