<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistema Moda',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión del Sistema Moda, el diseño, las categorías, los canales, la cultura, las tendencias, los usuarios, los eventos y el mercadeo mediante situaciones de selección múltiple con única respuesta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! Alcanzó al menos 14 respuestas correctas de 20. Reconoció conceptos y situaciones del Sistema Moda. Revise la retroalimentación para fortalecer su comprensión.',
      mensaje_reprobado:
        'Revise los temas asociados con sus respuestas incorrectas y vuelva a intentarlo. Puede repetir la actividad para fortalecer su comprensión del Sistema Moda.',
      mensaje_final_aprobado:
        '¡Excelente! Alcanzó al menos 14 respuestas correctas de 20. Reconoció conceptos y situaciones del Sistema Moda. Revise la retroalimentación para fortalecer su comprensión.',
      mensaje_final_reprobado:
        'Revise los temas asociados con sus respuestas incorrectas y vuelva a intentarlo. Puede repetir la actividad para fortalecer su comprensión del Sistema Moda.',
      preguntas: [
        {
          id: 1,
          texto:
            'Una marca recoge opiniones sobre una camisa y ajusta su diseño. ¿Qué relación del sistema moda evidencia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La sustitución del diseño por la comercialización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La retroalimentación del consumidor hacia el diseño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La independencia del diseño frente al uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La definición del precio mediante el color.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identificó cómo la experiencia del consumidor orienta nuevas decisiones de diseño.',
          mensaje_incorrecto:
            'Revise la retroalimentación: las opiniones de los usuarios pueden orientar ajustes en el diseño.',
        },
        {
          id: 2,
          texto:
            'Una colección combina únicamente blanco, negro y grises. ¿Qué esquema de color utiliza?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Complementario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Análogo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Monocromático azul.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acromático.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoció el esquema acromático por el uso de blanco, negro y grises.',
          mensaje_incorrecto:
            'Recuerde que el esquema acromático utiliza blanco, negro y grises.',
        },
        {
          id: 3,
          texto:
            'Una marca produce camisas listas para usar en tallas definidas. ¿Qué categoría describe esta oferta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Prêt-à-porter</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alta costura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Showroom</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omnicanalidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identificó el <em>prêt-à-porter</em> como vestuario listo para usar, producido en tallas o series.',
          mensaje_incorrecto:
            'Revise el <em>prêt-à-porter</em>: corresponde al vestuario listo para usar, producido en tallas o series.',
        },
        {
          id: 4,
          texto:
            'Un fabricante vende prendas a una boutique, que las comercializa al consumidor final. ¿Qué canal utiliza?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Directo, sin intermediarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Largo, con mayorista y minorista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Corto, con un minorista.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Logístico, con un transportador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoció un canal corto porque participa un minorista entre fabricante y consumidor.',
          mensaje_incorrecto:
            'Identifique los participantes: fabricante, boutique y consumidor conforman un canal corto.',
        },
        {
          id: 5,
          texto:
            '¿Qué acción permite dar continuidad entre la consulta digital y la atención en tienda?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicar fotografías sin identificar las referencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Coordinar disponibilidad e información entre canales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gestionar cada canal sin compartir información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Confirmar tallas sin revisar el inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Relacionó la omnicanalidad con la coordinación de información y disponibilidad.',
          mensaje_incorrecto:
            'Revise la omnicanalidad: necesita coordinar información, disponibilidad y atención entre canales.',
        },
        {
          id: 6,
          texto:
            'Una campaña muestra la misma camisa combinada de distintas maneras. ¿Cómo puede analizarla sin generalizar?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Describir lo visible y contrastar sus interpretaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Deducir las creencias de cada persona por su vestuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Atribuir iguales gustos a quienes comparten edad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suponer que la marca representa a toda una cultura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Diferenció la observación de las interpretaciones que necesitan verificación.',
          mensaje_incorrecto:
            'Describa los elementos visibles y contraste sus interpretaciones antes de atribuir significados a las personas.',
        },
        {
          id: 7,
          texto:
            'Una publicación sobre bolsos se vuelve viral. ¿Qué debe hacer antes de considerarla una tendencia del mercado?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proyectar ventas usando solamente sus reacciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Extender la conclusión a todos los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar la investigación por el número de seguidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contrastar señales de distintas fuentes y periodos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoció que una tendencia requiere contrastar señales y considerar su contexto.',
          mensaje_incorrecto:
            'Recuerde que la viralidad no demuestra una tendencia: contraste fuentes, contexto y periodo.',
        },
        {
          id: 8,
          texto:
            'Una empresa compra uniformes para sus trabajadores. ¿Quiénes cumplen los roles de cliente y usuario?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los trabajadores compran y la empresa utiliza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El fabricante compra y los trabajadores distribuyen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La empresa compra y los trabajadores utilizan.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La transportadora compra y la empresa utiliza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Diferenció al cliente que adquiere el producto de quienes lo utilizan.',
          mensaje_incorrecto:
            'Identifique los roles: la empresa es cliente y los trabajadores son usuarios de los uniformes.',
        },
        {
          id: 9,
          texto:
            'Una marca organiza pantalones y chaquetas cuyo material de referencia es el <em>denim</em>. ¿Qué universo corresponde?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Jeanswear</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Sleepwear</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Swimwear</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Underwear</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Relacionó el universo <em>jeanswear</em> con productos cuyo referente principal es el <em>denim</em>.',
          mensaje_incorrecto:
            'Revise los universos: <em>jeanswear</em> agrupa productos cuyo referente principal es el <em>denim</em>.',
        },
        {
          id: 10,
          texto:
            'Una marca desea que compradores de tiendas revisen prendas, materiales y condiciones comerciales. ¿Qué formato resulta pertinente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una publicación promocional sin atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una campaña de alcance sin productos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un <em>showroom</em> con presentación de referencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un desfile sin espacio de consulta comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Seleccionó el <em>showroom</em> para facilitar la revisión de productos y condiciones comerciales.',
          mensaje_incorrecto:
            'Considere el <em>showroom</em>: permite presentar referencias y atender consultas de compradores.',
        },
        {
          id: 11,
          texto:
            '¿Qué decisión corresponde a la variable precio dentro de la mezcla de mercadeo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elegir el material de la camisa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer cuánto se cobra y bajo qué condiciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Seleccionar el canal de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir el mensaje de una publicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identificó el precio como la decisión sobre el cobro y sus condiciones.',
          mensaje_incorrecto:
            'Revise las variables: el precio establece cuánto se cobra y bajo qué condiciones.',
        },
        {
          id: 12,
          texto:
            'Una empresa de moda pasó de 20 a 28 consultas; su meta era 30. ¿Qué interpretación es correcta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alcanzó la meta porque superó el registro inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obtuvo 28 ventas, aunque solo midió consultas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Demostró que el precio causó la diferencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejoró, pero debe analizar por qué no alcanzó la meta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Distinguió el avance frente al registro inicial del cumplimiento de la meta.',
          mensaje_incorrecto:
            'Compare 28 con la meta de 30: hubo avance, pero necesita investigar las causas de la diferencia.',
        },
        {
          id: 13,
          texto:
            'Un cliente quiere comprobar la suavidad de una tela. ¿Qué acción permite valorar directamente su textura táctil?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consultar el precio de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisar el nombre de la colección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Examinar una muestra física del material.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Observar únicamente una fotografía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoció que una muestra física permite valorar directamente la textura táctil.',
          mensaje_incorrecto:
            'Distinga percepción visual y táctil: para comprobar suavidad necesita examinar físicamente el material.',
        },
        {
          id: 14,
          texto:
            'Una ficha clasifica una prenda como camisa casual de mercado intermedio. ¿Qué criterios está diferenciando?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tipo y uso del producto, y nivel de mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Canal de distribución y medio de pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Etapa de producción y costo de transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formato de evento y alcance publicitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Diferenció el tipo y uso de la prenda de su nivel de mercado.',
          mensaje_incorrecto:
            'Revise los criterios: camisa casual describe tipo y uso; mercado intermedio señala el nivel de mercado.',
        },
        {
          id: 15,
          texto:
            'Una persona adapta una tendencia a sus preferencias y rechaza algunos elementos. ¿Qué principio permite analizar esa elección?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convergencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personalización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Imperio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Autonomía.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Relacionó la autonomía con la posibilidad de seleccionar, adaptar o rechazar propuestas.',
          mensaje_incorrecto:
            'Revise la autonomía: la persona puede adaptar o rechazar elementos según sus preferencias.',
        },
        {
          id: 16,
          texto:
            'Un observatorio registra consultas sobre bolsillos con cierre. ¿Qué debe hacer antes de proponer cambios en una colección?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Considerar que la preferencia representa a todo el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contrastar la frecuencia y el contexto de las consultas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir los registros por la opinión del vendedor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Descartar las consultas que no terminaron en compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identificó la necesidad de contrastar señales antes de formular una oportunidad.',
          mensaje_incorrecto:
            'Revise frecuencia, contexto y otras fuentes antes de convertir una señal en una conclusión.',
        },
        {
          id: 17,
          texto:
            '¿Qué información permite construir un perfil de consumidor útil para una marca de vestuario?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Necesidades, ocasiones de uso y barreras de compra verificadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Preferencias deducidas únicamente por la apariencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gustos supuestos para todas las personas de igual edad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Intereses atribuidos sin consultar a los usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Seleccionó información verificable que permite comprender necesidades y comportamientos del consumidor.',
          mensaje_incorrecto:
            'Construya el perfil con evidencias sobre necesidades, actividades y dificultades de compra; evite suposiciones.',
        },
        {
          id: 18,
          texto:
            'Una marca desea vender accesorios en un local temporal durante un fin de semana. ¿Qué formato corresponde?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desfile.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Showroom</em> exclusivo para prensa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Pop-up store</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Encuentro académico sin venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identificó la <em>pop-up store</em> como un espacio comercial temporal.',
          mensaje_incorrecto:
            'Revise los eventos: la <em>pop-up store</em> permite presentar y vender una oferta en un espacio temporal.',
        },
        {
          id: 19,
          texto:
            'Una marca identifica personas que combinan bicicleta y trabajo para orientar su oferta. ¿Qué acción de mercadeo realiza?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Define el precio sin analizar necesidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Selecciona materiales antes de investigar al usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mide el alcance de una publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmenta el mercado según necesidades y actividades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoció la segmentación como identificación de grupos relevantes para orientar la oferta.',
          mensaje_incorrecto:
            'Relacione la segmentación con grupos que comparten necesidades o comportamientos relevantes para la decisión comercial.',
        },
        {
          id: 20,
          texto:
            'Una marca comunica cómo mejoró una camisa a partir de opiniones de usuarios. ¿Qué práctica fortalece su <em>storytelling</em>?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inventar resultados para hacer más atractivo el relato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Relacionar necesidades, acciones y resultados con hechos verificables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Afirmar que todos los consumidores prefieren la nueva versión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presentar como realizado un cambio que todavía está en estudio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Relacionó el <em>storytelling</em> con una narración sustentada en hechos verificables.',
          mensaje_incorrecto:
            'Compruebe los hechos del relato: la historia debe corresponder con las acciones y resultados reales.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
