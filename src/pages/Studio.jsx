const studioBlocks = [
  {
    title: '¿Qué hacemos?',
    text: [
      'Combinamos un servicio adaptado a las necesidades de nuestros clientes. Desarrollamos proyectos de arquitectura para viviendas, reformas, equipamientos y encargos profesionales.',
      'Contamos con experiencia en proyectos internacionales, colaborando con equipos multidisciplinares en diversos trabajos.',
      'Trabajamos con un único fin: proponer a nuestros clientes el mejor diseño, adaptándonos a cada cliente y tipo de proyecto.'
    ]
  },
  {
    title: 'Experiencia',
    text: [
      'Además del trabajo local, el estudio cuenta con experiencia en proyectos internacionales, que podrán encontrar en esta misma página, en la sección "proyectos".'
    ]
  },
  {
    title: '¿Cómo trabajamos?',
    text: [
      'Primero escuchamos sus necesidades, sus objetivos y después ordenamos el proceso con criterios de diseño, planos y documentación técnica.'
    ]
  },
  {
    title: '¿Dónde trabajamos?',
    text: [
      'El estudio trabaja desde Pozoblanco y Córdoba, con encargos en distintos ámbitos y escalas. Principalmente, el estudio abarca la zona del Valle de los Pedroches, y Córdoba capital.',
      'Sin embargo, también colaboramos en proyectos fuera de España cuando el encargo requiere coordinación internacional o apoyo técnico local.'
    ]
  },
  {
    title: 'Datos profesionales',
    text: [
      'El arquitecto principal de este estudio es Ricardo Javier Mendieta Cárdenas, colegiado nº 909 en el Colegio Oficial de Arquitectos de Córdoba. Para más información sobre la experiencia y estudios, pueden consultar: https://www.linkedin.com/in/ricardojmendieta/'
    ]
  }
]

export default function Studio() {
  return (
    <>
      <main className="page-hero">
        <div className="wrap studio-intro">
          <div className="kicker">Estudio</div>
          <h1>Mendieta Studio</h1>
          <p className="lead studio-lead">
            Estudio de arquitectura ubicado en Pozoblanco, Córdoba y dirigido por Ricardo Javier Mendieta Cárdenas, arquitecto colegiado nº 909 en el Colegio Oficial de Arquitectos de Córdoba.
          </p>
        </div>
      </main>

      <section className="section section-compact studio-section">
        <div className="wrap studio-editorial">
          {studioBlocks.map((block) => (
            <article key={block.title} className="box studio-block">
              <h2>{block.title}</h2>
              {block.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
