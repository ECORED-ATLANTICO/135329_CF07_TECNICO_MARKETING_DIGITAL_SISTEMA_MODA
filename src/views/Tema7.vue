<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Eventos de moda

    .bg-full-width.bg-fondo-1
      .px-lg-3.py-lg-2.px-0.py-0
        img(src="@/assets/curso/tema7/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text Los eventos de moda permiten presentar colecciones, establecer relaciones comerciales y acercar las marcas a sus públicos. Cada formato ofrece posibilidades diferentes de exhibición, intercambio y participación. En este capítulo se reconocerán la evolución y los tipos de eventos de moda. Estos conocimientos permitirán seleccionar experiencias acordes con los objetivos de una marca y relacionarlas con acciones de comunicación digital.

      separador
      
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 7.1 Historia de los eventos de moda


      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema7/img02.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-2 Las formas de presentar la moda han cambiado junto con los medios de comunicación y las relaciones comerciales. Las presentaciones privadas dieron paso a encuentros profesionales y plataformas que reúnen exhibición, negocios y experiencias para distintos públicos.
          .container
            .row.align-items-center.bg-color-06.mb-2.p-3.br-15
              .col-lg-12
                p.mb-0 Estos formatos conviven. Una marca puede realizar una presentación presencial y ampliar su alcance mediante contenidos digitales, sin que ambas experiencias sean idénticas.
          p.mb-0 La historia permite comprender cómo los eventos adquirieron funciones comerciales, culturales y comunicativas.


      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema7/img03.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
          .bg-fondo-01.px-5.py-lg-5.py-4.mb-0(style="border-radius: 0px !important")
            SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
              .row.p-3
                h4 Segunda mitad del siglo XIX
                p.mb-0 Las casas de costura consolidan formas de presentar sus creaciones y relacionarse con sus clientelas. Charles Frederick Worth constituye un referente de este proceso.

              .row.p-3
                h4 Primeras décadas del siglo XX
                p.mb-0 Las presentaciones de colecciones fortalecen la relación entre diseñadores, clientes y medios especializados.

              .row.p-3
                h4 Década de 1940
                p.mb-0 Los encuentros de prensa organizados en Nueva York contribuyen a dar visibilidad a la moda estadounidense.

              .row.p-3
                h4 Segunda mitad del siglo XX
                p.mb-0 Se fortalecen calendarios y plataformas profesionales para presentar colecciones y conectar actores del sector.

              .row.p-3
                h4 Entorno contemporáneo
                p.mb-0 Los encuentros presenciales se articulan con transmisiones, contenidos digitales y experiencias que vinculan moda, cultura y negocios.



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Un referente colombiano

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema7/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-2 Colombiamoda permite observar la combinación de propósitos en una misma plataforma. Su balance de 2026 describe una agenda con muestra comercial, pasarelas, espacios de conocimiento y experiencias de ciudad. 
        p.mb-0 Para una marca, participar puede significar presentar productos, establecer contactos o investigar propuestas del sector. Por eso, el valor de un evento debe analizarse según el objetivo de participación.

    separador
    
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Tipos de eventos de moda

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-10.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema7/img05.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        .container
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12.bg-color-c1.p-4.br-15
              p.mb-2 Los eventos se diferencian por su propósito, público y forma de participación. Reconocer estas características ayuda a seleccionar un formato y definir qué experiencia se desea ofrecer.
              p.mb-0 Un mismo encuentro puede combinar varios formatos. Por ejemplo, una presentación de colección puede acompañarse de un <em>showroom</em> y una tienda temporal.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema7/img06.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3").mb-0
          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema7/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Desfile
            p.text-center.mb-0 Presenta prendas en movimiento y comunica el concepto de una colección. Puede corresponder a <em>prêt-à-porter</em>, alta costura o colecciones de temporada y crucero, según la propuesta.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema7/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center <em>Showroom</em>
            p.text-center.mb-0 Facilita la revisión cercana de productos, materiales y referencias. Puede dirigirse a compradores profesionales, prensa u otros públicos seleccionados.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema7/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Evento patrocinado
            p.text-center.mb-0 Integra marcas o aliados que aportan recursos y participan en una experiencia. Su selección requiere afinidad entre propósito, participantes y público.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema7/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center <em>Street event</em>
            p.text-center.mb-0 Desarrolla una acción de moda o marca en un espacio urbano. Su realización requiere planear la participación del público y las condiciones de uso del lugar.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema7/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Evento con blogueros o creadores de contenido
            p.text-center.mb-0 Presenta una propuesta a personas que producen contenidos para determinadas audiencias. La afinidad con la marca y la claridad de la colaboración orientan su selección.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema7/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center <em>Fashion experience</em>
            p.text-center.mb-0 Combina producto, relato y participación mediante elementos como instalaciones, demostraciones o actividades sensoriales.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema7/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center <em>Pop-up store</em>
            p.text-center.mb-0 Espacio comercial temporal que permite presentar y vender una oferta, explorar una ubicación o acercarse a un público.



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Selección del evento


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-3.br-15
          p.mb-0.text-center Para elegir un formato es necesario relacionar el propósito con las condiciones de participación.

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema7/img08.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-0" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Objetivo")
            p.mb-0 Definir el propósito principal de la participación: presentar una nueva colección, vender productos, establecer contactos comerciales, identificar tendencias, captar clientes potenciales o fortalecer el reconocimiento de marca. Establecer metas concretas y medibles que permitan evaluar si la participación cumplió con los resultados esperados.
          .tarjeta(titulo="Público")
            p.mb-0 Identificar a quién se dirige la participación y qué características tiene ese público. Puede incluir consumidores finales, compradores profesionales, distribuidores, proveedores, medios de comunicación o aliados estratégicos. Conocer sus intereses, necesidades y expectativas ayuda a adaptar la comunicación, la exhibición y las actividades del evento.
          .tarjeta(titulo="Producto")
            p.mb-0 Determinar qué productos, servicios, prototipos o colecciones se presentarán y qué aspectos deben conocer los visitantes. Definir si el público podrá observarlos, probarlos, compararlos o recibir demostraciones. También es importante destacar sus características diferenciadoras, materiales, funcionalidades, beneficios y propuesta de valor.
          .tarjeta(titulo="Recursos")
            p.mb-0 Establecer los recursos necesarios para participar, incluyendo espacio, presupuesto, tiempo, personal, mobiliario, equipos, materiales gráficos, muestras y elementos de exhibición. Elaborar una planificación de gastos y responsabilidades permite optimizar los recursos disponibles y anticipar posibles necesidades logísticas.
          .tarjeta(titulo="Seguimiento")
            p.mb-0 Definir cómo se recopilará y analizará la información obtenida durante y después del evento. Se pueden registrar el número de visitantes, contactos comerciales, consultas, ventas, muestras entregadas, comentarios recibidos y oportunidades identificadas. Posteriormente, se deben establecer acciones de seguimiento para contactar a los interesados, evaluar los resultados y determinar mejoras para futuras participaciones.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Comunicación digital del evento


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-09.p-3.br-15
          p.mb-0.text-center La comunicación acompaña la experiencia antes, durante y después del encuentro. Cada momento necesita información y acciones acordes con el objetivo.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 8.
          span Momentos de comunicación de un evento de moda
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Momento
                th Acciones posibles
            tbody
              tr
                td Antes
                td Informar propósito, fecha, lugar, condiciones de acceso y forma de participación.
              tr
                td Durante
                td Mostrar productos y actividades, orientar consultas y compartir contenidos pertinentes.
              tr
                td Después
                td Atender contactos, ampliar información y revisar resultados frente al objetivo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.bg-color-c2.p-4
          h4.mb-2 Ejemplo aplicado
          p.mb-2 Una empresa de moda desea presentar una colección a compradores de tiendas independientes. Selecciona un <em>showroom</em> porque necesita facilitar la revisión de prendas, materiales y condiciones comerciales.
          p.mb-0 Antes del encuentro comparte información de acceso; durante la presentación registra consultas y, después, realiza seguimiento a los contactos interesados. Para valorar el resultado revisa solicitudes comerciales y pedidos, además de la asistencia.


    .container
      .row.align-items-center.bg-color-04.br-15.mb-4
        .col-lg-auto.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema7/img09.png", style="max-width: 150px").mx-auto
        .col-lg.order-1.p-4
          p.mb-0 Los eventos de moda conectan productos, marcas y públicos mediante experiencias de presentación, intercambio y comercialización. Su selección requiere comprender el propósito, los participantes y los recursos disponibles.
          p.mb-0 La comunicación digital amplía las posibilidades de informar, interactuar y dar seguimiento. Estas decisiones se integran con los fundamentos del mercadeo de moda.


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
