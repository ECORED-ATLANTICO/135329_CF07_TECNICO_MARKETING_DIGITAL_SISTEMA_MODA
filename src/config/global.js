export default {
  global: {
    Name: 'Sistema Moda',
    Description:
      'Este componente aborda las características del Sistema Moda, sus fundamentos de diseño, categorías, canales de distribución, expresiones culturales, tendencias y consumidores. Relaciona estos conocimientos con los eventos y el mercadeo de moda para orientar decisiones de comunicación digital pertinentes, responsables y coherentes con las necesidades del público.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción al Sistema Moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamentos del diseño',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Diseño dirigido al sector vestuario y moda',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Esquemas de color',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Categorías de moda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Canales de distribución en el Sistema moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de canales de distribución',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '<em>Retail</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de <em>retail</em>',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Omnicanalidad',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Cultura de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '¿Qué es cultura?',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sociología de la moda',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tendencias de moda y consumo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tendencias de moda',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Observatorio de tendencias',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Mercados y usuarios de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Cliente o consumidor',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Perfiles de consumidor',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Personalidades de compra',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Universos de vestuario',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Eventos de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Historia de los eventos de moda',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos de eventos de moda',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Fundamentos de mercadeo de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Análisis del mercado y del consumidor',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Planeación e identidad de marca',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Mezcla de mercadeo y comunicación digital',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Innovación y seguimiento de resultados',
            hash: 't_8_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'Proceso de obtener los materiales e insumos necesarios para desarrollar una actividad productiva.',
    },
    {
      termino: 'Alta costura',
      significado:
        'Creación especializada de prendas personalizadas. En Francia, esta denominación está sujeta a reconocimiento institucional.',
    },
    {
      termino: 'Canal de distribución',
      significado:
        'Conjunto de actores y actividades que permite poner un producto a disposición del comprador.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona u organización que adquiere un producto o establece una relación comercial con una empresa.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Persona que utiliza un producto para satisfacer una necesidad.',
    },
    {
      termino: 'Cultura',
      significado:
        'Conjunto de conocimientos, prácticas, valores y símbolos que las personas construyen, comparten y transforman.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de un producto que los compradores están dispuestos y pueden adquirir bajo determinadas condiciones y durante un periodo.',
    },
    {
      termino: 'Diseño',
      significado:
        'Proceso de identificar necesidades y desarrollar soluciones considerando aspectos funcionales, estéticos, técnicos y contextuales.',
    },
    {
      termino: 'Identidad de marca',
      significado:
        'Conjunto de características, valores y formas de expresión que permiten reconocer y diferenciar una marca.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida que permite observar un comportamiento o resultado y compararlo con un referente.',
    },
    {
      termino: 'Mercadeo de moda',
      significado:
        'Actividades que relacionan las necesidades del mercado con decisiones sobre productos de moda, precios, distribución y comunicación.',
    },
    {
      termino: 'Omnicanalidad',
      significado:
        'Coordinación de canales para ofrecer continuidad en la experiencia de consulta, compra y atención.',
    },
    {
      termino: 'Perfil de consumidor',
      significado:
        'Descripción de necesidades, preferencias y comportamientos relevantes para comprender a un grupo de usuarios.',
    },
    {
      termino: '<em>Prêt-à-porter</em>',
      significado: 'Vestuario listo para usar, producido en tallas o series.',
    },
    {
      termino: '<em>Retail</em>',
      significado:
        'Comercio minorista dirigido al consumidor final para su uso personal.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Identificación de grupos con características o necesidades relevantes para orientar decisiones comerciales.',
    },
    {
      termino: 'Silueta',
      significado:
        'Contorno general producido por la relación entre el cuerpo y el vestuario.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'Organización de hechos y significados mediante una narración para comunicar una historia.',
    },
    {
      termino: 'Tendencia',
      significado:
        'Dirección de cambio observable en propuestas, preferencias o prácticas dentro de un contexto y periodo.',
    },
    {
      termino: 'Universo de vestuario',
      significado:
        'Agrupación de prendas y accesorios según afinidades de uso, materiales y características.',
    },
  ],
  referencias: [
    {
      referencia:
        'Albrecht, M. G., Green, M., & Hoffman, L. (2023). Principles of marketing. OpenStax.',
      link: 'https://openstax.org/books/principles-marketing/pages/1-unit-introduction',
    },
    {
      referencia:
        'Alonso, M., & Primo, C. (2026, 21 de octubre). El debate | ¿Se está desmadrando la moda masculina? El País.',
      link: 'https://elpais.com/opinion/2026-10-21/el-debate-se-esta-desmadrando-la-moda-masculina.html',
    },
    {
      referencia:
        'Fédération de la Haute Couture et de la Mode. (2025, 7 de julio). Charles Frederick Worth at the Petit Palais.',
      link: 'https://www.fhcm.paris/en/news/charles-frederick-worth-at-the-petit-palais',
    },
    {
      referencia:
        'Inexmoda. (2025, 2 de julio). Global fashion drivers Colombia: Entorno económico, consumo e innovación tecnológica en las empresas del sector.',
      link: 'https://inexmoda.org.co/wp-content/uploads/2025/07/20250603-GFD-Colomia-tripa.pdf',
    },
    {
      referencia:
        'Inexmoda. (2026, 30 de julio). Colombiamoda 2026 culmina una edición que consolida a Colombia como un referente global del nuevo lujo desde su identidad, creatividad y talento.',
      link: 'https://inexmoda.org.co/colombiamoda-2026-culmina-una-edicion-que-consolida-a-colombia-como-un-referente-global/',
    },
    {
      referencia:
        'Mears, P. (2023, 1 de enero). The CFDA 1962–2012. Council of Fashion Designers of America.',
      link: 'https://cfda.com/news/the-cfda-1962-2012/',
    },
    {
      referencia:
        'Metropolitan Museum of Art. (2024). Sleeping beauties: Reawakening fashion.',
      link: 'https://www.metmuseum.org/es/exhibitions/sleeping-beauties-reawakening-fashion',
    },
    {
      referencia:
        'Posner, H. (s. f.). Exercises to accompany Marketing Fashion, 3rd edition [Cuaderno de ejercicios complementarios]. Laurence King Publishing.',
      link: 'https://hachette-extras.s3.eu-west-2.amazonaws.com/prod/44545553858754/download/Marketing-Fashion-3rd-ed-exercises-final1.pdf',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Medio Ambiente. (2025). International Day of Zero Waste 2025.',
      link: 'https://wedocs.unep.org/handle/20.500.11822/42819',
    },
    {
      referencia:
        'Programa de las Naciones Unidas para el Medio Ambiente & Convención Marco de las Naciones Unidas sobre el Cambio Climático. (2023). The sustainable fashion communication playbook: Shifting the narrative [El manual de comunicación de moda sostenible: Cambiando la narrativa].',
      link: 'https://wedocs.unep.org/handle/20.500.11822/42819',
    },
    {
      referencia:
        'Victoria and Albert Museum. (2024, 17 de abril). Photographing masculinities: Gender, identity and the gaze.',
      link: 'https://www.vam.ac.uk/articles/photographing-masculinities',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
