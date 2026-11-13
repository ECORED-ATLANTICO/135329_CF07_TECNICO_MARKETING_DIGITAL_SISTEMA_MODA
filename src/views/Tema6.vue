<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Mercados y usuarios de moda

    .bg-full-width.bg-fondo-1
      .px-lg-3.py-lg-2.px-0.py-0
        img(src="@/assets/curso/tema6/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text Las personas adquieren prendas y accesorios para responder a necesidades relacionadas con protección, comodidad, actividades y expresión personal. Comprender estas necesidades permite desarrollar ofertas y mensajes pertinentes. En este capítulo se diferenciarán los roles de cliente y consumidor, se estudiarán los perfiles y comportamientos de compra y se reconocerán los universos de vestuario. Estos conocimientos ayudarán a relacionar las características del producto con sus usuarios y situaciones de uso. 
      
      separador
      
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.1 Cliente o consumidor



      .container
        .row.align-items-center.bg-color-10.br-15.mb-5
          .col-lg-auto.order-2
            img.d-none.d-lg-flex(src="@/assets/curso/tema6/img02.png", style="max-width: 150px").mx-auto
          .col-lg.order-1.p-4
            p.mb-0 En una compra pueden participar personas con funciones diferentes. El cliente adquiere el producto o establece la relación comercial; el consumidor o usuario lo utiliza. Ambos roles pueden coincidir, pero no siempre corresponden a la misma persona.
            p.mb-0 Distinguirlos permite reconocer qué información necesita cada participante y orientar la atención.



      .row.mb-lg-5.mb-5.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema6/img03.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-0" data-aos="zoom-in").mb-0
            .tarjeta(titulo="Cliente")
              p.mb-0 Persona u organización que adquiere el producto. Puede comprar para su propio uso, para regalar o para atender una necesidad empresarial.
            .tarjeta(titulo="Consumidor o usuario")
              p.mb-0 Persona que utiliza el producto. Sus necesidades pueden relacionarse con ajuste, comodidad, desempeño y cuidado.
            .tarjeta(titulo="Coincidencia de roles")
              p.mb-0 Una persona compra una chaqueta para utilizarla. Es cliente y consumidor de la prenda.
            .tarjeta(titulo="Diferencia de roles")
              p.mb-0 Una empresa compra uniformes para su equipo. La organización es cliente y los trabajadores son usuarios.

      .row.justify-content-center.mb-4
        .col-lg-10.mb-lg-0
          .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
            h4 Ejemplo aplicado
            p.mb-1 Una compañía solicita a una empresa de moda camisas para su personal. Quien gestiona la compra pregunta por precio, cantidades y entrega. Las personas que utilizarán las prendas necesitan comprobar tallas, movilidad y comodidad.
            p.mb-0 La propuesta debe considerar ambos grupos de necesidades. Atender únicamente las condiciones de compra puede dejar sin resolver dificultades de uso.

    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Perfiles de consumidor

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un perfil de consumidor organiza información sobre necesidades, preferencias, actividades y comportamientos. Su utilidad consiste en orientar decisiones sobre productos, atención y comunicación.

        p.mb-0 Los perfiles deben construirse y revisarse con evidencias. Una clasificación general puede ayudar a explorar diferencias, pero no permite deducir todas las elecciones de una persona.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema6/img05.png", data-aos="zoom-in", alt="")
      .col-lg-9.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Tradicional")
            .col-md-12
              p.mb-0 Prefiere continuidad en su vestuario y referencias conocidas. Puede valorar determinados protocolos y características que reconoce en sus prendas habituales.

          .row(numero="2" titulo="Neotradicional")
            .col-md-12
              p.mb-0 Conserva referentes habituales e incorpora novedades de manera selectiva. Puede adaptar elementos actuales a combinaciones conocidas.

          .row(numero="3" titulo="Contemporáneo")
            .col-md-12
              p.mb-0 Explora propuestas relacionadas con cambios en sus actividades y formas de vida. Puede valorar versatilidad y adaptación a distintos contextos.

          .row(numero="4" titulo="Vanguardista")
            .col-md-12
              p.mb-0 Muestra disposición a experimentar con propuestas menos extendidas y combinaciones poco habituales.

          .row(numero="5" titulo="Exhibicionista")
            .col-md-12
              p.mb-0 Denominación del material original para describir una búsqueda de visibilidad y diferenciación estética. Debe emplearse con cuidado, sin convertirla en un juicio sobre la persona.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Construcción de un perfil útil para la marca

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-4.br-15
          p.mb-0.text-center Para convertir una descripción general en información aplicable es necesario precisar qué necesita la persona, cómo decide y qué dificultades encuentra.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 2.
          span Caracterización para construir el perfil de una marca.
        img.mb-0(data-aos="zoom-in-down", src="@/assets/curso/tema6/img06.png", alt="La figura 2  ilustra los aspectos clave y las preguntas orientadoras que ayudan a construir el perfil de una marca. Dentro de los aspectos claves a considerar se encuentran:  la necesidad, las actividades y ocasión del uso, los atributos valorados, el presupuesto, los canales consultados, las barreras y las evidencias.")


    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-1 En una situación hipotética, una empresa de moda identifica clientes que combinan desplazamientos urbanos y reuniones de trabajo. Consultan medidas antes de comprar y preguntan por prendas que permitan moverse con comodidad.
          p.mb-0 Esta información orienta la presentación de medidas, fotografías del ajuste y características de construcción. Antes de generalizar el perfil, la marca debe comprobar si esas necesidades se repiten y en qué grupo de clientes.

    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Personalidades de compra

          

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img07.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-2 Las personalidades de compra permiten explorar diferencias en la forma de buscar información y decidir. Para la atención comercial conviene interpretarlas mediante comportamientos observables, evitando asignar etiquetas permanentes.
        .container
          .row.align-items-center.bg-color-06.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Una misma persona puede comparar detenidamente una prenda costosa y resolver con rapidez la compra de un producto que ya conoce. El comportamiento depende también de la situación y de la experiencia previa.
        p.mb-0 La siguiente tabla registra como la clasificación se propone como ejercicio de observación. Su propósito es ajustar la respuesta a la consulta del cliente.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 6.
          span Comportamientos y necesidades de atención
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Apartado
                th Comportamiento observable
                th Orientación de atención
            tbody
              tr
                td Analiza y compara
                td Consulta materiales, medidas, precios y alternativas.
                td Ofrecer información verificable y facilitar la comparación.
              tr
                td Busca orientación
                td Expresa una necesidad, pero todavía no define el producto.
                td Formular preguntas sobre uso, preferencias y dudas.
              tr
                td Tiene una decisión definida
                td Solicita una referencia, talla o característica concreta.
                td Confirmar disponibilidad, condiciones y pasos de compra.
              tr
                td Explora novedades
                td Pregunta por propuestas diferentes o recién incorporadas.
                td Presentar alternativas y explicar sus características sin presionar la compra.


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-4.br-15
          p.mb-0 Los factores culturales, sociales, personales y psicológicos influyen en las decisiones. Por ello, observar una conducta no permite atribuirle una única causa (Albrecht, Green y Hoffman, 2023). 



    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-1 Un cliente pregunta por la composición y las medidas de dos camisas. La persona que atiende comparte la información y explica sus diferencias.
          p.mb-0 Si el cliente continúa con dudas, conviene preguntar qué actividad realizará con la prenda. Esta respuesta ayuda a orientar la elección sin suponer preferencias por su apariencia.

    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Universos de vestuario


    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/img08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-2 Los universos de vestuario agrupan prendas y accesorios según afinidades de uso, materiales y características. Permiten organizar la oferta y facilitar su presentación al consumidor.
        p.mb-0 Sus límites pueden superponerse. Para clasificar una prenda es necesario observar su finalidad y sus características; el nombre comercial o la apariencia no bastan para determinar su desempeño.
  
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 7.
          span Clasificación de los universos de la moda
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Universo
                th Características y usos de referencia
            tbody
              tr
                td Gala
                td Vestuario para celebraciones y ocasiones con requisitos particulares de presentación. Su interpretación depende del contexto cultural y del evento.
              tr
                td Formal
                td Prendas utilizadas en actividades laborales, ceremonias y situaciones que requieren determinada formalidad. Los códigos varían entre organizaciones y contextos.
              tr
                td Casual
                td Vestuario para actividades cotidianas, con diferentes grados de informalidad y posibilidades de combinación.
              tr
                td <em>Kakiwear</em>
                td Propuestas relacionadas con prendas funcionales, tejidos como <em>drill</em> y referentes de vestuario informal.
              tr
                td <em>Jeanswear</em>
                td Productos cuyo referente principal es el <em>denim</em>, como pantalones, chaquetas, camisas y otras prendas.
              tr
                td <em>Sportswear</em>
                td Denominación utilizada para propuestas deportivas o de apariencia deportiva. Su alcance debe revisarse según la marca y las características del producto.
              tr
                td <em>Activewear</em>
                td Prendas concebidas para movimiento y actividad física. Su selección debe considerar la práctica y los atributos técnicos necesarios.
              tr
                td <em>Leisurewear</em>
                td Vestuario relacionado con ocio, descanso y actividades relajadas.
              tr
                td <em>Swimwear</em> y <em>beachwear</em>
                td Prendas para natación, playa y actividades relacionadas. Incluye productos con funciones diferentes, como trajes de baño y salidas de playa.
              tr
                td <em>Sleepwear</em>
                td Prendas destinadas a dormir, considerando comodidad y condiciones de descanso.
              tr
                td <em>Underwear</em>
                td Ropa interior. Algunas propuestas se relacionan con lencería según su diseño, intención y uso.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img09.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3.mb-lg-2 Identificar el universo ayuda a organizar catálogos y orientar búsquedas. Sin embargo, la descripción debe explicar qué puede esperar el usuario de la prenda.
        .container
          .row.align-items-center.bg-color-06.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Una chaqueta de apariencia deportiva puede utilizarse en actividades cotidianas sin estar diseñada para entrenamiento. Del mismo modo, una prenda comercializada para descanso no necesariamente satisface requisitos de una actividad física.


    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-1 Una empresa de moda presenta un pantalón de <em>denim</em> dentro de <em>jeanswear</em>. Para facilitar la elección, también informa sobre corte, medidas, composición y cuidados.
          p.mb-0 La clasificación ubica el producto; la descripción permite valorar si responde a la necesidad particular del cliente.


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema6/img10.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3.mb-lg-2 Comprender los mercados y usuarios de moda exige distinguir quién compra, quién utiliza el producto y qué necesidades intervienen en la elección. Los perfiles y comportamientos orientan el análisis cuando se contrastan con evidencias y se interpretan según el contexto.
        .container
          .row.align-items-center.bg-color-09.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 Los universos de vestuario facilitan organizar la oferta y comunicar sus usos. Estos conocimientos también permiten seleccionar eventos y experiencias pertinentes para conectar productos, marcas y públicos.


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
