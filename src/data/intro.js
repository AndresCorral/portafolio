// Vista "intro": respuesta corta sobre experiencia con Make, n8n, APIs, LLMs y entrega práctica.
// Mismo slug en EN y ES (/intro y /es/intro) para que el selector de idioma del Nav funcione.
// `related` son slugs de projects.js; los títulos se leen de allí para no duplicar texto.
export const intro = {
  slug: 'intro',
  related: ['shopify', 'aurora', 'contacto-automatizado', 'seo-content-engine'],
  en: {
    title: 'Automations, APIs and LLMs in practice',
    subtitle: 'A short introduction to how I build: Make and n8n, API integrations (Shopify in particular), LLMs, and practical solutions across business areas.',
    back: 'Home',
    label: 'Introduction',
    sections: [
      {
        heading: 'In short',
        paragraphs: [
          'I\'m a hands-on builder who connects business systems with automations and LLMs, and delivers solutions people actually use. I\'ve spent 5+ years shipping production automation for B2B companies, across e-commerce, sales, marketing, field operations and healthcare-adjacent teams.',
        ],
      },
      {
        heading: 'Make and n8n',
        paragraphs: [
          'I know Make and have built automations there, but n8n is where I\'m strongest. It\'s my main orchestration layer: multi-stage workflows, webhooks, retries and validation loops, error alerts and AI agents with tools. The thinking transfers directly between the two (triggers, routers, iterators, error handling), so moving between them is a matter of syntax, not of approach.',
        ],
      },
      {
        heading: 'Integrating APIs, Shopify in particular',
        paragraphs: [
          'I integrate with the APIs a business actually runs on. In my Shopify project I combined the Shopify Admin API (GraphQL), Klaviyo, Gorgias, Stripe and n8n into four automations: abandoned checkout recovery, replenishment reminders timed to each customer\'s own buying rhythm, an AI support agent with read-only access to live order data, and a payment reconciliation flow where Stripe webhooks mark Shopify orders as paid.',
          'That last flow shows how I treat integrations that touch money: webhook signature verification, idempotency checks, exact-match validation, an audit trail on every update, and a Slack alert for anything that doesn\'t match instead of guessing.',
          'Beyond Shopify, I\'ve worked with Odoo, Gmail, Google Calendar, LinkedIn, Airtable, Webflow, Chatwoot, Publer and WhatsApp. At Adoreal I\'ve built integrations with Vista Social (social media), Missive (email and newsletters) and ClickUp (task intake).',
        ],
      },
      {
        heading: 'Working with LLMs',
        paragraphs: [
          'LLMs are a daily working tool and a component inside the products I ship. At Adoreal I work with Claude Code to design, build and test full-stack tools: a Partner Portal for practices (Next.js, Supabase, Vercel), and a Before & After vault that handles patient photos and consent under strict privacy rules (signed links only, real deletion, synthetic data outside production).',
          'I focus on connecting LLMs to real business systems rather than demos. In production that has meant a WhatsApp agent for field technicians, a multi-agent SEO pipeline with RAG on Pinecone and Langfuse for observability, and Claude drafting LinkedIn comments that a person reviews before anything is published. I also built Groundwork, an app where business and tech teams agree on a project\'s brief, with an MCP server so agents can read the brief and propose changes without rewriting it.',
        ],
      },
      {
        heading: 'Practical solutions across business areas',
        items: [
          { lead: 'Sales.', text: 'CRM leads contacted and scheduled automatically: time to first contact went from 72+ hours to under 3 minutes and the meeting rate from 4% to about 13%.' },
          { lead: 'Marketing and content.', text: 'Blog articles produced in under 10 minutes instead of 3 hours, and social carousels generated end to end with automatic visual validation, for multiple clinic brands.' },
          { lead: 'Operations.', text: 'Field technicians generating service reports in minutes instead of days, straight from WhatsApp.' },
          { lead: 'E-commerce and support.', text: 'Recovered checkouts, repeat purchases, instant order answers and reconciled payments for a Shopify brand selling in three markets.' },
          { lead: 'Compliance and internal tooling.', text: 'Tools that handle patient photos and consent under strict privacy rules, and internal apps that keep business and tech aligned.' },
        ],
      },
      {
        heading: 'How I work',
        paragraphs: [
          'Across marketing, operations, healthcare-adjacent compliance and internal tooling, my approach is the same. I start from the real workflow, keep a human approval step where the stakes are high, put guardrails on data and costs, and test end to end before calling something done.',
        ],
      },
      {
        heading: 'What I haven\'t done yet',
        paragraphs: [
          'I haven\'t worked with AWS yet. It\'s nothing that can\'t be achieved with the documentation and Claude.',
        ],
      },
    ],
    relatedHeading: 'Case studies behind this',
  },
  es: {
    title: 'Automatizaciones, APIs y LLMs en la práctica',
    subtitle: 'Una introducción corta a cómo construyo: Make y n8n, integraciones de APIs (Shopify en particular), LLMs y soluciones prácticas en distintas áreas de negocio.',
    back: 'Inicio',
    label: 'Introducción',
    sections: [
      {
        heading: 'En corto',
        paragraphs: [
          'Soy un constructor práctico que conecta sistemas de negocio con automatizaciones y LLMs, y entrega soluciones que la gente realmente usa. Llevo más de 5 años entregando automatización en producción para empresas B2B, en e-commerce, ventas, marketing, operaciones de campo y equipos cercanos al sector salud.',
        ],
      },
      {
        heading: 'Make y n8n',
        paragraphs: [
          'Conozco Make y he construido automatizaciones allí, pero n8n es donde me muevo mejor. Es mi capa principal de orquestación: flujos de varias etapas, webhooks, reintentos y bucles de validación, alertas de error y agentes de IA con herramientas. La forma de pensar se traslada directo de una a otra (disparadores, routers, iteradores, manejo de errores), así que pasar de una a otra es cuestión de sintaxis, no de enfoque.',
        ],
      },
      {
        heading: 'Integración de APIs, Shopify en particular',
        paragraphs: [
          'Integro las APIs sobre las que realmente corre un negocio. En mi proyecto de Shopify combiné la Admin API de Shopify (GraphQL), Klaviyo, Gorgias, Stripe y n8n en cuatro automatizaciones: recuperación de checkouts abandonados, recordatorios de recompra ajustados al ritmo de compra de cada cliente, un agente de soporte con IA con acceso de solo lectura a datos de pedidos en vivo, y un flujo de conciliación de pagos donde los webhooks de Stripe marcan como pagados los pedidos de Shopify.',
          'Ese último flujo muestra cómo trato las integraciones que tocan dinero: verificación de la firma del webhook, control de idempotencia, validación por coincidencia exacta, rastro de auditoría en cada actualización y una alerta en Slack para todo lo que no coincide, en lugar de adivinar.',
          'Además de Shopify, he trabajado con Odoo, Gmail, Google Calendar, LinkedIn, Airtable, Webflow, Chatwoot, Publer y WhatsApp. En Adoreal he construido integraciones con Vista Social (redes sociales), Missive (correo y newsletters) y ClickUp (entrada de tareas).',
        ],
      },
      {
        heading: 'Trabajo con LLMs',
        paragraphs: [
          'Los LLMs son una herramienta de trabajo diaria y un componente dentro de los productos que entrego. En Adoreal trabajo con Claude Code para diseñar, construir y probar herramientas full-stack: un Partner Portal para clínicas (Next.js, Supabase, Vercel) y una bóveda de Antes y Después que maneja fotos de pacientes y consentimiento bajo reglas estrictas de privacidad (solo enlaces firmados, borrado real, datos sintéticos fuera de producción).',
          'Me enfoco en conectar los LLMs a sistemas de negocio reales, no en demos. En producción eso ha sido un agente de WhatsApp para técnicos de campo, un pipeline SEO multiagente con RAG en Pinecone y Langfuse para observabilidad, y Claude redactando comentarios de LinkedIn que una persona revisa antes de publicar nada. También construí Groundwork, una app donde los equipos de negocio y tecnología acuerdan el brief de un proyecto, con un servidor MCP para que los agentes puedan leer el brief y proponer cambios sin reescribirlo.',
        ],
      },
      {
        heading: 'Soluciones prácticas en distintas áreas',
        items: [
          { lead: 'Ventas.', text: 'Leads del CRM contactados y agendados automáticamente: el tiempo al primer contacto pasó de más de 72 horas a menos de 3 minutos y la tasa de reuniones de 4% a cerca de 13%.' },
          { lead: 'Marketing y contenido.', text: 'Artículos de blog producidos en menos de 10 minutos en lugar de 3 horas, y carruseles para redes generados de punta a punta con validación visual automática, para varias marcas de clínicas.' },
          { lead: 'Operaciones.', text: 'Técnicos de campo generando reportes de servicio en minutos en lugar de días, directamente desde WhatsApp.' },
          { lead: 'E-commerce y soporte.', text: 'Checkouts recuperados, recompra, respuestas inmediatas sobre pedidos y pagos conciliados para una marca de Shopify que vende en tres mercados.' },
          { lead: 'Cumplimiento y herramientas internas.', text: 'Herramientas que manejan fotos de pacientes y consentimiento bajo reglas estrictas de privacidad, y apps internas que mantienen alineados a negocio y tecnología.' },
        ],
      },
      {
        heading: 'Cómo trabajo',
        paragraphs: [
          'En marketing, operaciones, cumplimiento cercano al sector salud y herramientas internas, mi enfoque es el mismo. Parto del flujo de trabajo real, dejo un paso de aprobación humana donde lo que está en juego es alto, pongo límites a los datos y a los costos, y pruebo de punta a punta antes de dar algo por terminado.',
        ],
      },
      {
        heading: 'Lo que aún no he hecho',
        paragraphs: [
          'Todavía no he trabajado con AWS. No es nada que no se pueda lograr con la documentación y Claude.',
        ],
      },
    ],
    relatedHeading: 'Casos de estudio detrás de esto',
  },
};
