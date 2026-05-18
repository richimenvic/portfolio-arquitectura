import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteUrl } from '../seo'

const pagePath = '/arquitecto-pozoblanco/'

export default function ArchitectPozoblanco() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ArchitecturalService',
          '@id': `${siteUrl}${pagePath}#architectural-service`,
          name: 'Mendieta Studio',
          url: `${siteUrl}${pagePath}`,
          areaServed: ['Pozoblanco', 'Córdoba', 'Los Pedroches'],
          description: 'Estudio de arquitectura en Pozoblanco especializado en proyectos de vivienda, reformas, rehabilitaciones, licencias de obra, cambios de uso, documentación técnica, interiorismo y BIM.'
        },
        {
          '@type': 'Service',
          '@id': `${siteUrl}${pagePath}#service`,
          serviceType: 'Servicios de arquitectura',
          provider: {
            '@type': 'ArchitecturalService',
            name: 'Mendieta Studio'
          },
          areaServed: ['Pozoblanco', 'Córdoba', 'Los Pedroches'],
          offers: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Proyectos de vivienda' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reformas y rehabilitaciones' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Licencias de obra y cambios de uso' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Documentación técnica, interiorismo y BIM' } }
          ]
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-page-schema', 'arquitecto-pozoblanco')
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <>
      <main className="page-hero">
        <div className="wrap">
          <h1>Arquitecto en Pozoblanco</h1>
          <p className="lead">Mendieta Studio es un estudio de arquitectura en Pozoblanco, Córdoba, especializado en proyectos de vivienda, reformas, rehabilitaciones, licencias de obra, cambios de uso, documentación técnica, interiorismo y modelado BIM.</p>
        </div>
      </main>

      <section className="section section-compact">
        <div className="wrap">
          <h2>Estudio de arquitectura en Pozoblanco</h2>
          <p>Trabajamos con clientes particulares, empresas y promotores que necesitan soluciones claras, funcionales y bien documentadas, desde la idea inicial hasta la tramitación y desarrollo técnico del proyecto.</p>

          <h2>Proyectos de vivienda</h2>
          <p>Desarrollamos proyectos de vivienda adaptados al programa, al lugar y a la normativa, cuidando la calidad arquitectónica y la viabilidad técnica de cada propuesta.</p>

          <h2>Reformas y rehabilitaciones</h2>
          <p>Intervenimos en inmuebles existentes para mejorar su uso, su confort y su rendimiento, planteando reformas y rehabilitaciones coherentes con las condiciones reales de cada edificio.</p>

          <h2>Licencias de obra y cambios de uso</h2>
          <p>Preparamos la documentación y el soporte técnico necesarios para la tramitación de licencias de obra y cambios de uso, con un enfoque ordenado y ajustado a la normativa aplicable.</p>

          <h2>Documentación técnica, interiorismo y BIM</h2>
          <p>Ofrecemos servicios de documentación técnica, interiorismo y modelado BIM para mejorar la definición del proyecto, la coordinación y la toma de decisiones durante todo el proceso.</p>

          <h2>Zona de trabajo: Pozoblanco, Córdoba y Los Pedroches</h2>
          <p>Ofrecemos servicios de arquitectura en Pozoblanco, Córdoba y la comarca de Los Pedroches, adaptando cada encargo a las necesidades del cliente, la normativa aplicable y las condiciones reales de cada inmueble o parcela.</p>

          <p>
            Puede ampliar información en <Link to="/servicios">servicios</Link>, revisar trabajos en <Link to="/proyectos">proyectos</Link> o solicitar asesoramiento en <Link to="/contacto">contacto</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
