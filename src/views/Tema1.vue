<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción al Sistema Moda

    .bg-full-width.bg-fondo-1
      .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El Sistema Moda integra actores y actividades relacionados con el diseño, la producción, la comercialización, el uso y el aprovechamiento de prendas y accesorios. Proveedores, diseñadores, fabricantes, comerciantes y consumidores se relacionan para responder a las necesidades del mercado.


      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold Figura 1.
            span Sistema Moda: etapas y retroalimentación.
          img.mb-0.d-none.d-lg-flex(data-aos="zoom-in-down", src="@/assets/curso/tema1/img02.png", alt="La figura 1 ilustra el esquema del Sistema Moda con seis etapas conectadas: investigación y diseño, abastecimiento, producción, comercialización, uso y reparación, reutilización o aprovechamiento. Desde el uso, una flecha de retorno representa cómo las necesidades, preferencias y opiniones del consumidor orientan nuevas decisiones de investigación y diseño.")
          img.mb-0.d-lg-none(data-aos="zoom-in-down", src="@/assets/curso/tema1/img03.png", alt="La figura 1 ilustra el esquema del Sistema Moda con seis etapas conectadas: investigación y diseño, abastecimiento, producción, comercialización, uso y reparación, reutilización o aprovechamiento. Desde el uso, una flecha de retorno representa cómo las necesidades, preferencias y opiniones del consumidor orientan nuevas decisiones de investigación y diseño.")

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Fundamentos del diseño

      
    .row.justify-content-center.mb-5
      .col-lg-12.mb-lg-0
        .cajon.bg-color-c1.px-5.py-4.h-100.align-content-center
          p.mb-0 El diseño es un proceso de identificación de necesidades y desarrollo de soluciones que considera aspectos funcionales, estéticos, técnicos y contextuales. En el vestuario, permite tomar decisiones sobre cómo se verá una prenda, cómo se utilizará y cómo podrá producirse.
          p.mb-0 Para comprender el proceso se pueden reconocer cuatro momentos:

    .row.justify-content-center.cursor-pointer.mb-lg-4.mb-xl-5
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img04.png", alt="Observar y analizar")
          .crd_hover_txt--body
            h4.mb-3 Observar y analizar
            p.mb-0 Conocer a las personas, sus actividades y las condiciones de uso. Identificar comportamientos, dificultades y oportunidades de mejora para comprender el contexto.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img05.png", alt="Definir necesidades")
          .crd_hover_txt--body
            h4.mb-3 Definir necesidades
            p.mb-0 Precisar qué problema o expectativa se atenderá. Establecer los requerimientos y objetivos que orientarán el desarrollo de la solución.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img06.png", alt="Proponer y representar")
          .crd_hover_txt--body
            h4.mb-3 Proponer y representar
            p.mb-0 Explorar alternativas mediante bocetos, muestras o prototipos. Visualizar las ideas y evaluar su viabilidad antes de desarrollarlas.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img07.png", alt="Desarrollar y verificar")
          .crd_hover_txt--body
            h4.mb-3 Desarrollar y verificar
            p.mb-0 Comprobar si la solución responde a las necesidades identificadas. Evaluar su funcionamiento y realizar los ajustes necesarios para cumplir los objetivos establecidos.


    .container
      .row.align-items-center.bg-color-03.br-15.mb-5
        .col-lg-auto.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/img08.png", style="max-width: 150px").mx-auto
        .col-lg.order-1.p-4
          p.mb-0 Estos momentos pueden repetirse. Una prueba de uso puede revelar que es necesario modificar el material o ajustar una parte de la prenda. Los elementos del diseño se organizan en cuatro grupos, los cuales se relacionan y detallan en la siguiente tabla:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 1.
          span Elementos de diseño, grupos y aplicaciones
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Grupo
                th Elementos
                th Aplicación al análisis de una prenda
            tbody
              tr
                td Conceptuales
                td Punto, línea, plano y volumen.
                td Permiten comprender su estructura y organización.
              tr
                td Visuales
                td Forma, medida, color y textura.
                td Corresponden a características que pueden percibirse.
              tr
                td De relación
                td Dirección, posición, espacio y gravedad.
                td Explican cómo se organizan e interactúan sus partes.
              tr
                td Prácticos
                td Representación, significado y función.
                td Relacionan la propuesta con su uso y su interpretación.

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .container
          .row.align-items-center.bg-color-03.br-15.mb-0
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img09.png", style="max-width: 180px").mx-auto
            .col-lg.order-1.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de diseño de vestuario desarrolla una camisa para personas que combinan desplazamientos urbanos y actividades laborales. La propuesta debe considerar movilidad, comodidad, apariencia y cuidado. La comunicación digital deberá explicar los beneficios que puedan comprobarse en el producto.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Diseño dirigido al sector vestuario y moda

    p.mb-4 Para describir un producto de moda es necesario reconocer sus elementos y utilizar un vocabulario preciso.

    .bg-full-width.bg-fondo-01.px-lg-5.py-lg-5.px-5.py-4.mb-5
      SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img11.png", alt="Silueta").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Silueta
            p.mb-0 Contorno general que produce la relación entre cuerpo y vestuario. Puede observarse en prendas ajustadas, rectas o amplias. Las formas corporales son diversas; las clasificaciones descriptivas no establecen cuerpos ideales.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img12.png", alt="Volumen").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Volumen
            p.mb-0 Espacio ocupado o sugerido por la prenda. Se modifica mediante amplitudes, pliegues, capas, estructuras y características del material.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img13.png", alt="Forma").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Forma
            p.mb-0 Configuración de la prenda y de sus partes: cuello, manga, bolsillo, escote o pieza de construcción. Éste elemento dialoga a cómo se percibe de manera externa la prenda ya sea en su apariencia o estructura.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img14.png", alt="Textura").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Textura
            p.mb-0 Hace relación al material de una superficie. Existen dos tipos de textura en la moda, la primera se conoce como natural o superpuesta y la segunda como textura con sensación táctil y visual. Una fotografía puede mostrar relieve, pero no permite comprobar todas las sensaciones del material.

        .row.justify-content-center.align-items-center.p-4
          .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img15.png", alt="Color").mx-auto
          .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
            h4 Color
            p.mb-0 Es uno de los elementos que se perciben con mayor rapidez en el instante de ver por primera vez un diseño. El color tiene una gran influencia en la intención de una colección ya que se encuentra relacionado a generar sensaciones. Por lo tanto, es vital poseer un conocimiento básico de la teoría del color y de cómo se crean y se combinan los colores.


    .container
      .row.align-items-center.bg-color-03.mb-5.p-3.br-15
        .col-lg-12
          p.mb-2 En una ficha digital, expresiones como «corte recto», «manga amplia» o «superficie con relieve» ofrecen información más precisa que calificativos generales como «perfecta» o «increíble».
          p.mb-0 Asimismo, la representación de prendas, detalles, tejidos y acabados es también un campo de estudio de la ilustración de moda. 

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejercicio práctico
          p.mb-0 Seleccione una prenda y describa su silueta, volumen, forma, textura y color. Distinga lo que observa de aquello que necesitaría verificar mediante contacto físico o información del fabricante.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Esquemas de color
      
    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img16.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-04.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Los esquemas de color organizan combinaciones cromáticas. Ayudan a construir relaciones visuales en colecciones, fotografías, exhibiciones y piezas digitales.
        p.mb-0 Para esta aproximación se utiliza el círculo cromático tradicional de enseñanza artística. Sus colores primarios no deben confundirse con los sistemas RGB (<em>Red, Green, Blue</em>), empleados en pantallas, o Sistema CMYK (<em>Cyan, Magenta, Yellow, Key</em>), utilizados en impresión.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.mb-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-05" data-aos="zoom-in").mb-0
          .tarjeta(titulo="1. Esquemas basados en la relación entre los colores")
            .row.mb-lg-0.mb-0.justify-content-center.align-items-center.ms-lg-5.ms-4
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img17.png", data-aos="zoom-in").mx-auto
              .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-1 Estos esquemas se construyen a partir de la posición de los colores en el círculo cromático. Permiten crear combinaciones armónicas, contrastantes o equilibradas, según la cercanía o la oposición entre los tonos.
                ul.lista-ul--color
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema acromático:] es aquel esquema sin color, en el que solo se encuentra el negro, el blanco y la escala de grises.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema análogo:] utiliza cualquiera de los tres tonos consecutivos o cualquiera de sus tintes y matices del círculo cromático.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema complementario:] utiliza los colores opuestos directos del círculo cromático, generando un contraste marcado.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema complementario dividido:] consta de un tono y los dos tonos situados a ambos lados de su complemento dentro del círculo cromático.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema de choque:] combina un color con el tono que está a la derecha o a la izquierda de su complemento en el círculo cromático.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema monocromático:] utiliza un tono en combinación con cualquiera de sus tintes y matices, o con todos los presentes.

          .tarjeta(titulo="2. Esquemas basados en la composición y combinación cromática")
            .row.mb-lg-0.mb-0.justify-content-center.align-items-center.ms-5
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in").mx-auto
              .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-1 Estos esquemas se organizan según la naturaleza de los colores que los componen, su origen y la cantidad de tonos que intervienen en la combinación. Permiten construir paletas a partir de colores fundamentales y de relaciones cromáticas más complejas.
                ul.lista-ul--color
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema primario:] está compuesto por los tonos puros del rojo, amarillo y azul.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema secundario:] surge de la combinación de los tonos primarios para obtener verde, violeta y naranja.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema triada terciario:] surge de una de dos combinaciones: naranja rojizo, verde amarillento y violeta azulado; o verde azulado, naranja amarillento y violeta rojizo. Todos los colores se encuentran equidistantes entre sí en el círculo cromático.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema de tétradas:] está formado por dos pares de colores complementarios, para obtener una combinación de cuatro colores. Con esta combinación se logran resultados muy llamativos.

          .tarjeta(titulo="3. Esquemas basados en la variación, neutralización y complejidad del color")
            .row.mb-lg-0.mb-0.justify-content-center.align-items-center.ms-5
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img19.png", data-aos="zoom-in").mx-auto
              .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-1 Estos esquemas exploran las modificaciones que experimenta un color al cambiar su luminosidad, intensidad o composición. Permiten crear transiciones, profundidad visual y efectos cromáticos particulares.
                ul.lista-ul--color
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Esquema neutral:] utiliza un tono que se ha disminuido o neutralizado con el agregado de su complemento o del negro; es decir, trabaja con variaciones de claros a oscuros dentro de una misma gama.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Colores complejos:] son aquellos colores que, al combinarse, representan cambios de textura o matiz. Entre ellos se encuentran los colores metalizados y los fluorescentes.

          .tarjeta(titulo="4. Esquemas basados en la experimentación y el contraste visual")
            .row.mb-lg-0.mb-0.justify-content-center.align-items-center.ms-5
              .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in").mx-auto
              .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
                p.mb-1 Estos esquemas permiten explorar combinaciones que se apartan de las reglas cromáticas convencionales. Se utilizan para generar tensión, dinamismo, originalidad y propuestas visuales llamativas, especialmente en áreas como la moda, el diseño gráfico y las artes visuales.
                ul.lista-ul--color
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Discordancia y disonancia:] en este tipo de combinación se puede experimentar con colores que no necesariamente siguen las reglas tradicionales de armonía. En el sector de la moda suele utilizarse para generar una estructura visual que integre las prendas y produzca una unidad visual llamativa.

          .tarjeta(titulo="5. Paletas basadas en la temperatura del color")
            .row.mb-lg-0.mb-0.justify-content-center.align-items-center.ms-5
              .col-lg-12
                p.mb-1 Estas paletas se clasifican según la percepción térmica que transmiten los colores. Permiten generar sensaciones visuales diferentes y organizar combinaciones de acuerdo con su carácter cálido o frío, considerando también las variaciones de luminosidad.
                ul.lista-ul--color
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Paletas cálidas:] se construyen con colores que transmiten sensaciones de calidez y energía.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Paletas frías:] se construyen con colores que transmiten sensaciones de frescura y tranquilidad.
                  li.mb-1.d-flex
                    i.fas.fa-circle.fa-xs.mt-2(style="max-width:50px")
                    p.mb-0 #[b Temperatura de color de claro a oscuro:] considera las variaciones de luminosidad dentro de las gamas cálidas y frías, desde los tonos claros hasta los oscuros.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejercicio práctico
          p.mb-0 Una colección de prendas azules puede utilizar una composición monocromática. Para una pieza promocional, la marca puede incorporar un contraste complementario, siempre que conserve la legibilidad de los textos.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img21.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-04.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Comprender el Sistema Moda permite reconocer las relaciones entre diseño, materiales, producción, comercialización y experiencia del consumidor. Los fundamentos del diseño y los esquemas de color aportan herramientas para describir prendas y comunicar sus características con precisión.
        p.mb-0 Estos conocimientos permiten avanzar hacia la clasificación de los productos y reconocer cómo se diferencian las propuestas que participan en el mercado de la moda.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
