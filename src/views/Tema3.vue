<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Canales de distribución en el Sistema Moda

    .bg-full-width.bg-fondo-1
      .px-lg-5.py-lg-4.px-0.py-0
        img(src="@/assets/curso/tema3/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text Para que una prenda llegue al consumidor se necesita coordinar su disponibilidad, comercialización y entrega. En este proceso participan marcas, intermediarios y servicios que conectan la oferta con las personas interesadas en adquirirla.


      .container
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10.bg-color-8.p-4.br-15
            p.mb-0 En este capítulo se estudiarán los tipos de canales de distribución, el comercio minorista y la omnicanalidad. Estos conceptos permitirán comprender cómo una empresa de moda organiza el acceso a sus productos y articula sus espacios físicos y digitales.

      separador
      
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Tipos de canales de distribución


      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          .container
            .row.align-items-center.bg-color-09.mb-3.p-3.br-15
              .col-lg-12
                p.mb-0 Un canal de distribución organiza las relaciones entre quienes producen, comercializan y adquieren un producto. Su elección depende del público, la cobertura deseada, los recursos disponibles y el control que la empresa necesita mantener sobre la venta.
          p.mb-0 Para reconocer sus características se pueden analizar tres criterios: longitud, tecnología de compraventa y forma de organización.


      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
            h3.titulo-con-imagen__texto Según la longitud del canal

      p.mb-4 La longitud indica los niveles de intermediación comercial entre el productor y el consumidor. Un mayor número de intermediarios puede ampliar la cobertura, pero también modifica la coordinación y las condiciones comerciales.


      .row.mb-lg-4.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Canal directo").align-content-center
              p.mb-0 El productor o la marca vende al consumidor sin un intermediario comercial. Por ejemplo, una empresa comercializa sus propias prendas mediante su tienda física o virtual.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Canal corto").align-content-center
              p.mb-0 Participa un intermediario minorista entre el productor y el consumidor. Por ejemplo, una boutique compra prendas a un fabricante y las vende al público.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Canal largo").align-content-center
              p.mb-0 Intervienen varios niveles comerciales, como mayoristas y minoristas. Por ejemplo, un fabricante vende a un distribuidor que abastece diferentes tiendas.


    p.mb-5 La presencia de una empresa transportadora no agrega necesariamente un nivel comercial. Es necesario distinguir entre quien participa en la compraventa y quien presta un servicio de entrega.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Según la tecnología de compraventa

    p.mb-5 Este criterio permite reconocer los medios utilizados para ofrecer productos y realizar transacciones. Las tecnologías pueden combinarse dentro de un mismo canal.

    .row.justify-content-center.cursor-pointer.mb-4
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false").h-100
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img04.png", alt="")
          .crd_hover_txt--body.bg-color-2
            h4.mb-3 Canales tradicionales
            p.mb-0 Desarrollan la compraventa principalmente mediante atención directa y procedimientos con poca automatización. Una tienda puede mantener esta forma de atención aunque utilice herramientas digitales de apoyo.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img05.png", alt="")
          .crd_hover_txt--body.bg-color-2
            h4.mb-3 Canales automatizados
            p.mb-0 Incorporan sistemas que ejecutan determinadas operaciones, como registrar pedidos o permitir pagos mediante dispositivos de autoservicio.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img06.png", alt="")
          .crd_hover_txt--body.bg-color-2
            h4.mb-3 Canales audiovisuales
            p.mb-0 Utilizan medios como televisión o transmisiones de video para presentar la oferta. La compra puede completarse por teléfono, internet u otro medio.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img07.png", alt="")
          .crd_hover_txt--body.bg-color-2
            h4.mb-3 Canales electrónicos
            p.mb-0 Permiten desarrollar operaciones comerciales mediante internet, como una tienda virtual o una plataforma de comercio electrónico.

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-06.p-4.br-15
          p.mb-0 Es importante identificar dónde se informa sobre el producto y dónde se realiza la compra. Una transmisión en redes sociales puede presentar una colección y dirigir al público hacia la tienda virtual.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Según la forma de organización

    p.mb-4 La organización del canal establece cómo se relacionan sus participantes y quién coordina las decisiones. Esto influye en aspectos como abastecimiento, presentación de productos y condiciones de comercialización.

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img08.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Canales independientes").align-content-center
            p.mb-0 Sus participantes conservan autonomía y negocian sus relaciones comerciales sin una dirección conjunta del canal.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Canales administrados").align-content-center
            p.mb-0 Un participante tiene capacidad para coordinar o influir en las decisiones de otros integrantes.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Canales integrados").align-content-center
            p.mb-0 Una organización controla actividades de distintos niveles del canal o reúne operaciones de un mismo nivel.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Canales asociados").align-content-center
            p.mb-0 Empresas o participantes cooperan para desarrollar funciones como compras, promoción o distribución.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejercicio práctico
          p.mb-0 Una empresa vende su producción en una tienda propia y abastece una boutique independiente. En el primer caso utiliza un canal directo; en el segundo, un canal corto.
          p.mb-0 Si una transportadora entrega los pedidos de la tienda virtual, presta un servicio logístico. Esto no la convierte automáticamente en un intermediario de venta.



    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 <em>Retail</em>

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img09.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 El <em>retail</em> o comercio minorista comprende la venta de productos al consumidor final para su uso personal. Puede desarrollarse en establecimientos físicos, entornos digitales o mediante la combinación de ambos.
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Su función incluye seleccionar y presentar la oferta, facilitar información, atender consultas y apoyar la compra. Por ello, la experiencia del consumidor depende tanto del producto como de las condiciones en las que puede conocerlo y adquirirlo.
        p.mb-0 En el Sistema Moda participan actores con funciones diferentes:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Actores del Sistema Moda y sus funciones
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Actor
                th Función principal
            tbody
              tr
                td Fabricante
                td Transforma materiales e insumos en productos.
              tr
                td Mayorista
                td Comercializa productos principalmente con otros negocios, como tiendas minoristas.
              tr
                td Minorista
                td Vende al consumidor final.
              tr
                td Consumidor
                td Utiliza el producto para satisfacer una necesidad.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img10.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Una empresa puede desempeñar varias funciones. Si produce prendas y las vende en una tienda propia, realiza actividades de fabricación y comercio minorista.
        p.mb-0 En una tienda digital de moda, la atención también se expresa mediante la información disponible. Las fotografías, medidas, materiales, cuidados y condiciones de entrega ayudan al cliente a valorar si el producto responde a sus necesidades.


    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejercicio práctico
          p.mb-0 Una persona consulta una camisa en la tienda virtual de una empresa de moda. La ficha muestra fotografías, composición y precio, pero no incluye medidas. Antes de comprar, necesita resolver una duda sobre el ajuste.
          p.mb-0 Completar la guía de medidas puede facilitar su decisión y reducir consultas repetidas. La mejora debe responder a la información que el cliente necesita.


    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Tipos de <em>retail</em>

    p.mb-4 Los establecimientos minoristas se diferencian por su surtido, especialización, forma de operación y experiencia de compra. Reconocer estas características permite comprender cómo presentan sus productos y qué servicios ofrecen.

      

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img11.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        .bg-fondo-01.px-lg-5.py-lg-5.px-4.py-4.mb-0(style="border-radius: 0px !important")
          SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
            .row.p-3
              h4 Boutique
              p.mb-0 Ofrece una selección de productos vinculada con un público, estilo o propuesta particular. Puede comercializar una marca o varias.

            .row.p-3
              h4 Tienda especializada
              p.mb-0 Se concentra en una categoría o necesidad, como calzado deportivo, ropa interior o vestuario infantil.

            .row.p-3
              h4 Tienda departamental
              p.mb-0 Reúne distintas categorías organizadas por secciones, como vestuario, accesorios, belleza y hogar.

            .row.p-3
              h4 Tienda de descuento
              p.mb-0 Desarrolla una propuesta comercial centrada en precios reducidos y condiciones específicas de surtido u operación.

            .row.p-3
              h4 <em>Outlet</em>
              p.mb-0 Puede comercializar inventarios de temporadas anteriores, excedentes u ofertas específicas. Deben verificarse las condiciones de cada establecimiento.

            .row.p-3
              h4 Hipermercado
              p.mb-0 Integra numerosas categorías de consumo, entre las que puede incluir prendas y accesorios.

            .row.p-3
              h4 Club de compra
              p.mb-0 Organiza el acceso a determinadas condiciones o beneficios mediante una membresía.

            .row.p-3
              h4 Tienda insignia
              p.mb-0 Presenta de manera destacada la identidad de una marca mediante el espacio, la exhibición y la experiencia.

            .row.p-3
              h4 Tienda virtual
              p.mb-0 Permite consultar y adquirir productos mediante un entorno digital. Requiere información, atención y coordinación de pagos y entregas.


    
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img12.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-c2.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 El formato comercial no permite determinar por sí solo la calidad de los productos o del servicio. Una tienda de descuento, por ejemplo, debe analizarse a partir de su oferta real.
        p.mb-0 Cuando una plataforma reúne varios vendedores, también es necesario identificar quién comercializa, quién cobra, quién entrega y quién atiende las solicitudes posteriores a la compra.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Omnicanalidad


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img13.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-06.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Una persona puede descubrir una prenda en redes sociales, consultar sus medidas en una página web y comprarla en una tienda física. Para que este recorrido resulte continuo, la empresa necesita coordinar la información y la atención entre sus canales.
        p.mb-0 La multicanalidad consiste en utilizar varios canales. La omnicanalidad busca integrarlos para que el cliente pueda pasar de uno a otro sin encontrar contradicciones o repetir innecesariamente su proceso.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span Aspectos comparativos de la multicanalidad y la omnicanalidad
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Aspecto
                th Multicanalidad
                th Omnicanalidad
            tbody
              tr
                td Presencia
                td La empresa participa en varios canales.
                td La empresa participa en canales coordinados.
              tr
                td Información
                td Puede gestionarse por separado.
                td Se busca coherencia y actualización entre canales.
              tr
                td Atención
                td Cada canal puede atender de manera independiente.
                td Se busca dar continuidad a la solicitud del cliente.
              tr
                td Compra
                td El recorrido puede quedar limitado a un canal.
                td El recorrido puede conectar distintos canales.


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-04.p-3.br-15
          p.mb-0 La integración requiere acuerdos operativos: identificar productos con claridad, actualizar la disponibilidad, informar condiciones y facilitar el seguimiento de solicitudes.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.png")
          h3.titulo-con-imagen__texto Recorrido de compra de una prenda

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.bg-color-09.p-3.br-15
          p.mb-0 Analizar el recorrido permite reconocer qué necesita el cliente en cada momento y dónde pueden presentarse dificultades.

    .bg-full-width.bg-fondo-01.px-5.py-lg-5.py-4.mb-5
      SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema3/img14.png", alt="").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4.mb-2 1. Descubrimiento
            p.mb-1 #[b Situación]
            p.mb-2 El cliente observa una chaqueta en una publicación.
            p.mb-1 #[b Coordinación necesaria]
            p.mb-0 La referencia debe identificarse y corresponder con la oferta disponible.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema3/img15.png", alt="").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4.mb-2 2. Consulta
            p.mb-1 #[b Situación]
            p.mb-2 Ingresa a la tienda virtual para revisar características.
            p.mb-1 #[b Coordinación necesaria]
            p.mb-0 Encuentra información sobre tallas, materiales, precio y cuidados.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema3/img16.png", alt="").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4.mb-2 3. Atención
            p.mb-1 #[b Situación]
            p.mb-2 Pregunta por mensajería si puede probarla en una tienda.
            p.mb-1 #[b Coordinación necesaria]
            p.mb-0 Recibe información actualizada sobre ubicación y disponibilidad.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema3/img17.png", alt="").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4.mb-2 4. Compra
            p.mb-1 #[b Situación]
            p.mb-2 Visita el establecimiento y solicita la referencia consultada.
            p.mb-1 #[b Coordinación necesaria]
            p.mb-0 El personal reconoce el producto y las condiciones informadas.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema3/img18.png", alt="").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4.mb-2 5. Posventa
            p.mb-1 #[b Situación]
            p.mb-2 Solicita orientación sobre cuidado o cambios.
            p.mb-1 #[b Coordinación necesaria]
            p.mb-0 La empresa consulta la información necesaria y ofrece una respuesta coherente.



    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejercicio práctico
          p.mb-0 Un cliente consulta una chaqueta disponible en una tienda virtual y solicita probarla en el establecimiento. La persona que atiende verifica la referencia, la talla y la disponibilidad antes de confirmar la visita.
          p.mb-0 Esta coordinación conecta la consulta digital con la atención presencial. Si la disponibilidad no se verifica, el cliente puede desplazarse sin encontrar la prenda.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img19.png", data-aos="zoom-in", alt="").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-06.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Los canales de distribución permiten organizar cómo llega una oferta al consumidor. Reconocer sus participantes, tecnologías y formas de coordinación ayuda a comprender las decisiones comerciales de una empresa de moda.
        p.mb-0 El <em>retail</em> conecta la oferta con la compra, mientras que la omnicanalidad busca continuidad entre los espacios físicos y digitales. Para seleccionar y coordinar estos canales es necesario comprender también los contextos culturales y significados que influyen en las elecciones del consumidor, tema que se trata a continuación.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
