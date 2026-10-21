export const projects = [
  {
    slug: 'aurora',
    year: '2025',
    role: { en: 'AI Agent Architect', es: 'Arquitecto de Agentes IA' },
    stack: ['n8n', 'OpenAI GPT-4o', 'Google Gemini', 'PostgreSQL', 'Supabase', 'Redis', 'Chatwoot'],
    thumbnail: '/images/projects/aurora-thumb.jpg',
    cover: '/images/projects/aurora-cover.jpg',
    en: {
      title: 'Aurora — AI Field Assistant',
      subtitle: 'AI-Powered Virtual Coordinator for HVAC Field Technicians',
      description: 'An AI agent that lives inside WhatsApp, enabling field technicians to query, register, and generate service reports — all through natural language conversation.',
      problem: 'Field technicians wasted valuable time on bureaucracy: calling coordination for client data, manual paper reports, and back-office dependencies for every registration.',
      solution: 'Aurora is a multi-agent system with 17 specialized tools (sub-workflows in n8n). It handles CRUD operations across PostgreSQL, generates signed PDF reports via Supabase Edge Functions, transcribes voice messages with Gemini, and enforces RBAC at every layer — all through a Chatwoot/WhatsApp interface.',
      results: [
        'Self-sufficient field technicians — no office dependence',
        'Reports generated in minutes instead of days',
        'Full traceability with digital signatures and automatic email delivery',
        'Role-based access enforced at every layer',
        'WhatsApp-based password recovery without admin intervention',
      ],
      architecture: `Chatwoot Webhook → Main Agent (GPT-4o)
  ├─ Validar Rol (PostgreSQL)
  ├─ Spelling Correction (OpenAI)
  ├─ Aurora Agent (17 tools)
  │   ├─ consultar_clientes (fuzzy search with pg_trgm)
  │   ├─ registrar_cliente / sede / equipo / cronograma
  │   ├─ actualizar_* (role-gated updates)
  │   ├─ delete_all_data_client / delete_only_* 
  │   └─ generar_informe_aire_acondicionado / obra_civil
  └─ Response Parser (smart message splitting)
      └─ Chatwoot → Technician`,
    },
    es: {
      title: 'Aurora — Asistente de Campo IA',
      subtitle: 'Coordinadora Virtual con IA para Técnicos de HVAC en Campo',
      description: 'Un agente de IA que vive dentro de WhatsApp, permitiendo a técnicos en campo consultar, registrar y generar informes de servicio — todo mediante conversación en lenguaje natural.',
      problem: 'Los técnicos perdían tiempo valioso en burocracia: llamar a coordinación para datos de clientes, informes manuales en papel y dependencia de personal administrativo para cada registro.',
      solution: 'Aurora es un sistema multi-agente con 17 herramientas especializadas (sub-workflows en n8n). Maneja operaciones CRUD en PostgreSQL, genera informes PDF firmados via Supabase Edge Functions, transcribe mensajes de voz con Gemini y aplica RBAC en cada capa — todo a través de Chatwoot/WhatsApp.',
      results: [
        'Técnicos autosuficientes en campo — sin depender de oficina',
        'Informes generados en minutos, no en días',
        'Trazabilidad completa con firmas digitales y email automático',
        'Control de roles preservado en cada capa',
        'Recuperación de contraseñas por WhatsApp sin intervención administrativa',
      ],
      architecture: `Chatwoot Webhook → Agente Principal (GPT-4o)
  ├─ Validar Rol (PostgreSQL)
  ├─ Corrección Ortográfica (OpenAI)
  ├─ Agente Aurora (17 herramientas)
  │   ├─ consultar_clientes (búsqueda difusa con pg_trgm)
  │   ├─ registrar_cliente / sede / equipo / cronograma
  │   ├─ actualizar_* (actualizaciones con control de roles)
  │   ├─ delete_all_data_client / delete_only_*
  │   └─ generar_informe_aire_acondicionado / obra_civil
  └─ Response Parser (división inteligente de mensajes)
      └─ Chatwoot → Técnico`,
    },
  },
  {
    slug: 'linkedin-social-selling',
    year: '2025',
    role: { en: 'Automation Architect', es: 'Arquitecto de Automatización' },
    stack: ['n8n', 'Apify', 'NocoDB', 'Claude API', 'LinkedIn API v2'],
    thumbnail: '/images/projects/linkedin-thumb.jpg',
    cover: '/images/projects/linkedin-cover.jpg',
    en: {
      title: 'LinkedIn B2B Pre-Nurturing Engine',
      subtitle: 'Strategic Social Selling Pipeline for B2B Prospect Engagement',
      description: 'A hybrid human-AI system that detects prospect posts, generates strategic comment drafts with Claude, and publishes them via LinkedIn API — building passive familiarity before any direct outreach.',
      problem: 'Cold B2B outreach in Latin America has extremely low conversion rates. Decision makers need 7-13 touchpoints before considering a meeting, but monitoring 50-100 prospects manually takes 30+ min/day and is the first thing dropped when schedules get busy.',
      solution: 'A two-workflow pipeline that eliminates the cognitive heavy lifting: Workflow 1 detects new posts every 6 hours and generates strategic comment drafts via Claude; Workflow 2 publishes approved comments via LinkedIn API. A human reviews and approves — protecting account credibility while reducing daily effort by 70%.',
      results: [
        'Daily effort reduced from 30-45 min to ~10 min (review only)',
        'Prospects monitored: 10-15 manually → 50-100 simultaneously',
        'Touchpoints per prospect/month: 2-4 irregular → 8-12 systematic',
        'Consistency guaranteed regardless of daily workload',
        'Zero generic comments — each draft is context-aware and strategic',
      ],
      architecture: `WORKFLOW 1 — Detection & Drafting (every 6h)
Schedule → NocoDB (prospects + history)
  → SplitInBatches (1 contact per iteration)
    → Apify (linkedin-post-search)
    → Code: filter new posts (Set lookup O(1))
    → IF new post? → Claude API → draft → NocoDB (Pending)
    → No new post? → next contact

WORKFLOW 2 — Controlled Publishing (every 5 min)
Schedule → LinkedIn API (get profile URN)
  → NocoDB (filter Approved comments)
  → SplitInBatches
    → Code: normalize URN
    → LinkedIn Social Actions API (POST comment)
    → NocoDB (update: Published)`,
    },
    es: {
      title: 'Motor de Visibilidad LinkedIn B2B',
      subtitle: 'Pipeline de Social Selling Estratégico para Engagement B2B',
      description: 'Un sistema híbrido humano-IA que detecta publicaciones de prospectos, genera borradores de comentarios estratégicos con Claude y los publica vía API de LinkedIn — construyendo familiaridad pasiva antes de cualquier contacto directo.',
      problem: 'La venta fría B2B en Latinoamérica tiene tasas de conversión extremadamente bajas. Los decisores necesitan 7-13 touchpoints antes de considerar una reunión, pero monitorear 50-100 prospectos manualmente toma 30+ min/día y es lo primero que se abandona cuando la agenda se llena.',
      solution: 'Un pipeline de dos workflows que elimina el trabajo cognitivo pesado: el Workflow 1 detecta publicaciones nuevas cada 6 horas y genera borradores de comentarios estratégicos via Claude; el Workflow 2 publica los comentarios aprobados via LinkedIn API. Un humano revisa y aprueba — protegiendo la credibilidad de la cuenta mientras reduce el esfuerzo diario en 70%.',
      results: [
        'Esfuerzo diario: de 30-45 min a ~10 min (solo revisión)',
        'Prospectos monitoreados: 10-15 manual → 50-100 simultáneo',
        'Touchpoints por prospecto/mes: 2-4 irregular → 8-12 sistemático',
        'Consistencia garantizada sin importar la carga laboral',
        'Cero comentarios genéricos — cada borrador es contextual y estratégico',
      ],
      architecture: `WORKFLOW 1 — Detección y Borradores (cada 6h)
Schedule → NocoDB (prospectos + historial)
  → SplitInBatches (1 contacto por iteración)
    → Apify (linkedin-post-search)
    → Code: filtrar posts nuevos (Set lookup O(1))
    → ¿Post nuevo? → Claude API → borrador → NocoDB (Pendiente)
    → ¿Sin post? → siguiente contacto

WORKFLOW 2 — Publicación Controlada (cada 5 min)
Schedule → LinkedIn API (obtener URN perfil)
  → NocoDB (filtrar comentarios Aprobados)
  → SplitInBatches
    → Code: normalizar URN
    → LinkedIn Social Actions API (POST comentario)
    → NocoDB (actualizar: Publicado)`,
    },
  },
  {
    slug: 'contacto-automatizado',
    year: '2024',
    role: { en: 'Automation Architect', es: 'Arquitecto de Automatización' },
    stack: ['n8n', 'Odoo', 'Gmail API', 'Google Calendar', 'Google Gemini', 'OpenAI GPT-4o-mini', 'NocoDB'],
    thumbnail: '/images/projects/prospecting-thumb.jpg',
    cover: '/images/projects/prospecting-cover.jpg',
    en: {
      title: 'Automated Prospect Contact & Follow-Up',
      subtitle: 'AI-Powered Pipeline Converting CRM Leads into Scheduled Meetings',
      description: 'A fully autonomous two-stage system that contacts, nurtures, and schedules meetings with prospects — eliminating 100% of manual follow-up hours.',
      problem: 'A B2B services company had qualified leads sitting untouched for 72+ hours. With no dedicated follow-up staff, they lost an estimated 30-40% of prospects to cold leads, with only a 4% meeting conversion rate.',
      solution: 'A two-workflow system connecting Odoo CRM, Gmail, and Google Calendar. Workflow 1 triggers on new Odoo leads, generates personalized emails via Gemini with structured output parsing, and schedules follow-ups. Workflow 2 monitors replies, classifies intent with GPT-4o-mini (meeting / more info / not interested), and auto-schedules calendar events or sends contextual follow-ups with dynamic spacing (2, 4, 7, 10, 14 days).',
      results: [
        'Time to first contact: 72+ hours → < 3 minutes (-99%)',
        'Meeting conversion rate: 4% → ~13% (+200% meetings/month)',
        'Response rate: 11% → 28% (+155%)',
        'Manual follow-up hours: 15-20/week → 0 (-100%)',
        'Prospect loss from cold leads: 30-40% → 0%',
      ],
      architecture: `WORKFLOW 1 — First Contact (Odoo Webhook)
Odoo Event → Extract Lead Data
  → Gemini (personalized email via LangChain Agent + Structured Output Parser)
  → Gmail API (send)
  → Odoo (update stage)
  → NocoDB (schedule follow-up)

WORKFLOW 2 — Automated Follow-Up (every hour)
Schedule → NocoDB (pending follow-ups today)
  → SplitInBatches
    → Gmail (check thread for replies)
    → IF has_reply?
      → GPT-4o-mini (classify intent)
        → "meeting" → Google Calendar (create event) + Odoo (update) + Notify
        → "more_info" → Generate reply + Send + Reschedule
        → "not_interested" → Odoo (mark lost)
    → IF no_reply & attempts < 5?
      → Generate follow-up with dynamic spacing → Send
    → IF attempts >= 5?
      → Odoo (mark lost - no response)`,
    },
    es: {
      title: 'Contacto y Seguimiento Automatizado de Prospectos',
      subtitle: 'Pipeline Autónomo con IA que Convierte Leads del CRM en Reuniones',
      description: 'Un sistema autónomo de dos etapas que contacta, nutre y agenda reuniones con prospectos — eliminando el 100% de las horas de seguimiento manual.',
      problem: 'Una empresa de servicios B2B tenía leads calificados sin atender por 72+ horas. Sin personal dedicado al seguimiento, perdían un estimado del 30-40% de los prospectos, con solo 4% de tasa de conversión a reunión.',
      solution: 'Un sistema de dos workflows que conecta Odoo CRM, Gmail y Google Calendar. El Workflow 1 se dispara con leads nuevos en Odoo, genera emails personalizados via Gemini con structured output parsing, y programa seguimientos. El Workflow 2 monitorea respuestas, clasifica intención con GPT-4o-mini (reunión / más información / no interesado), y agenda eventos automáticamente o envía follow-ups contextuales con espaciado dinámico (2, 4, 7, 10, 14 días).',
      results: [
        'Tiempo al primer contacto: 72+ horas → < 3 minutos (-99%)',
        'Tasa de conversión a reunión: 4% → ~13% (+200% reuniones/mes)',
        'Tasa de respuesta: 11% → 28% (+155%)',
        'Horas de seguimiento manual: 15-20/semana → 0 (-100%)',
        'Pérdida de prospectos por enfriamiento: 30-40% → 0%',
      ],
      architecture: `WORKFLOW 1 — Primer Contacto (Webhook Odoo)
Evento Odoo → Extraer Datos del Prospecto
  → Gemini (email personalizado via LangChain Agent + Structured Output Parser)
  → Gmail API (enviar)
  → Odoo (actualizar etapa)
  → NocoDB (programar seguimiento)

WORKFLOW 2 — Seguimiento Automatizado (cada hora)
Schedule → NocoDB (seguimientos pendientes hoy)
  → SplitInBatches
    → Gmail (revisar hilo por respuestas)
    → ¿Hay respuesta?
      → GPT-4o-mini (clasificar intención)
        → "reunion" → Google Calendar (crear evento) + Odoo + Notificar
        → "mas_info" → Generar respuesta + Enviar + Reprogramar
        → "no_interesado" → Odoo (marcar perdido)
    → ¿Sin respuesta e intentos < 5?
      → Generar follow-up con espaciado dinámico → Enviar
    → ¿Intentos >= 5?
      → Odoo (marcar perdido - sin respuesta)`,
    },
  },
  {
    slug: 'seo-content-engine',
    year: '2024',
    role: { en: 'AI Agent Architect', es: 'Arquitecto de Agentes IA' },
    stack: ['n8n', 'OpenAI o3', 'Pinecone', 'Airtable', 'Langfuse', 'Webflow'],
    thumbnail: '/images/projects/seo-thumb.jpg',
    cover: '/images/projects/seo-cover.jpg',
    en: {
      title: 'Automated SEO Content Engine',
      subtitle: 'Multi-Clinic AI-Powered Blog Content Pipeline with RAG',
      description: 'A cascading AI agent system that generates complete, SEO-optimized blog articles from approved keywords — personalized per clinic brand identity, with zero human writing.',
      problem: 'Aesthetic clinics under a franchise model needed local SEO content at scale. Hiring copywriters per clinic was expensive and slow; generic content didn\'t rank. Without fresh content, organic traffic stagnated.',
      solution: 'A multi-stage pipeline with 7 specialized AI agents: SEO Title, Meta Description, Content Structure, Blog Body Writer (with Pinecone RAG for brand context), Content Validator, Slug Generator, and Summary Generator. Each agent has validation loops with automatic retry. Full observability via Langfuse prompt versioning. Scales to N clinics with zero marginal cost.',
      results: [
        '-90% content production time per article (3 hrs → <10 min)',
        'Immediate scalability — handles N clinics with no marginal cost',
        'Consistent quality with automatic validation loops',
        'Clear approval pipeline: Airtable → Webflow CMS with one click',
        'Full prompt observability via Langfuse versioning',
      ],
      architecture: `Webhook Trigger → Stage 1: Input Assembly
  Airtable (fetch Approved keywords + clinic metadata)

→ Stage 2: Brand Context (RAG)
  Pinecone (semantic search, topK: 27, text-embedding-3-large)
  → Clinic brand voice + services + messaging strategy

→ Stage 3: Content Generation (7 agents, each with validation loops)
  1. SEO Title Generator (55-60 char loop)
  2. Meta Description Generator (140-160 char loop)
  3. Introduction & Content Structure (JSON schema loop)
  4. Blog Body Writer (+ Pinecone RAG tool for brand grounding)
  5. Content Validator (HTML/SEO structure loop)
  6. SEO Slug Generator
  7. Blog Summary Generator

→ Stage 4: Storage & Publishing
  Airtable (status: Pending)
  → Webflow CMS (if Site ID configured)
  → Airtable (keyword status: Done)`,
    },
    es: {
      title: 'Motor de Contenido SEO Automatizado',
      subtitle: 'Pipeline de Artículos de Blog Multi-Clínica con RAG e IA',
      description: 'Un sistema de agentes IA en cascada que genera artículos de blog completos y optimizados para SEO a partir de keywords aprobadas — personalizado por clínica, sin intervención humana en la escritura.',
      problem: 'Clínicas estéticas bajo modelo de franquicia necesitaban contenido SEO local a escala. Contratar redactores por clínica era caro y lento; los textos genéricos no rankeaban. Sin contenido fresco, el tráfico orgánico se estancaba.',
      solution: 'Un pipeline multi-etapa con 7 agentes de IA especializados: generador de título SEO, meta descripción, estructura de contenido, escritor de blog (con RAG en Pinecone para contexto de marca), validador de contenido, generador de slug y generador de resumen. Cada agente tiene bucles de validación con reintento automático. Observabilidad completa via Langfuse. Escala a N clínicas con costo marginal cero.',
      results: [
        '-90% tiempo de producción por artículo (3 hrs → <10 min)',
        'Escalabilidad inmediata — atiende N clínicas sin costo marginal',
        'Calidad consistente con bucles de validación automática',
        'Pipeline de aprobación claro: Airtable → Webflow con 1 clic',
        'Observabilidad total de prompts via Langfuse',
      ],
      architecture: `Webhook Trigger → Etapa 1: Ensamblaje
  Airtable (fetch keywords Aprobadas + metadata clínica)

→ Etapa 2: Contexto de Marca (RAG)
  Pinecone (búsqueda semántica, topK: 27, text-embedding-3-large)
  → Voz de marca + servicios + estrategia de mensajería

→ Etapa 3: Generación (7 agentes, cada uno con bucle de validación)
  1. Generador Título SEO (bucle 55-60 char)
  2. Generador Meta Description (bucle 140-160 char)
  3. Estructura de Contenido (bucle schema JSON)
  4. Escritor Blog (+ RAG Pinecone para contexto de marca)
  5. Validador de Contenido (bucle estructura HTML/SEO)
  6. Generador de Slug
  7. Generador de Resumen

→ Etapa 4: Almacenamiento y Publicación
  Airtable (estado: Pendiente)
  → Webflow CMS (si tiene Site ID)
  → Airtable (keyword estado: Completado)`,
    },
  },
  {
    slug: 'social-media-engine',
    year: '2024',
    role: { en: 'AI Agent Architect', es: 'Arquitecto de Agentes IA' },
    stack: ['n8n', 'Google Gemini', 'fal.ai', 'Airtable', 'Publer', 'Slack'],
    thumbnail: '/images/projects/social-thumb.jpg',
    cover: '/images/projects/social-cover.jpg',
    en: {
      title: 'Social Media Content Engine',
      subtitle: 'AI Art Director + Image Generation Pipeline for Multi-Clinic Social Content',
      description: 'A fully automated system that generates social media carousels and stories — copy, slide-by-slide images, and ready-to-publish drafts — with automatic visual validation.',
      problem: 'Aesthetic clinics needed consistent social media presence but producing quality content required a copywriter, designer, and community manager per clinic. Multiplied across N clinics, the operational cost was unsustainable.',
      solution: 'An AI pipeline with a Social Media Copy Generator (Gemini), an Art Director agent that writes visual prompts aligned with each clinic\'s brand identity, fal.ai image generation with async queue polling, and a self-healing retry loop with Gemini Vision validation. Output lands as a ready-to-approve draft in Publer with Slack notification.',
      results: [
        'From hours to minutes — copy, design, and publishing in one autonomous flow',
        'Scales to N clinics with zero marginal cost',
        'Self-healing: failed images regenerate automatically (configurable max retries)',
        'Visual Operating System in Airtable — brand updates reflected immediately',
        'Human approval preserved: drafts in Publer, one click to publish',
      ],
      architecture: `Sub-workflow Trigger → Stage 1: Brand Context
  Airtable (Visual Operating System — brand guidelines per clinic)

→ Stage 2: Format Routing (Switch)
  Carousel → Copy Generator A → Slide Splitter A
  Stories  → Copy Generator B → Slide Splitter B

→ Stage 3: Copy Generation (per format)
  Gemini (Social Media Copy Generator)
  → Caption + slide structure

→ Stage 4: Art Direction & Image Generation
  Gemini (Art Director) → visual prompt per slide
  → fal.ai nano-banana-pro (async queue)
    → Poll status until COMPLETED
    → Download image binary

→ Stage 5: Visual Validation Loop
  Gemini Vision (analyze image)
  → Approved? → Publer media upload
  → Rejected? → retryCount < maxRetries? → regenerate
    → No? → skip slide

→ Stage 6: Draft Creation
  Publer API (POST /posts/schedule)
  → Poll job status until complete

→ Stage 7: Notification
  Slack (chat.postMessage) → Team notified`,
    },
    es: {
      title: 'Motor de Contenido para Redes Sociales',
      subtitle: 'Director de Arte IA + Pipeline de Generación de Imágenes Multi-Clínica',
      description: 'Un sistema completamente automatizado que genera carruseles y stories para redes sociales — copy, imágenes slide a slide y drafts listos para publicar — con validación visual automática.',
      problem: 'Clínicas estéticas necesitaban presencia activa en redes sociales, pero producir contenido de calidad requería copywriter, diseñador y community manager por clínica. Multiplicado por N clínicas, el costo operativo era insostenible.',
      solution: 'Un pipeline de IA con un generador de copy (Gemini), un agente director de arte que escribe prompts visuales alineados con la identidad de cada clínica, generación de imágenes con fal.ai con polling async, y un bucle de reintento auto-curativo con validación Gemini Vision. El output llega como draft listo para aprobar en Publer con notificación por Slack.',
      results: [
        'De horas a minutos — copy, diseño y publicación en un flujo autónomo',
        'Escala a N clínicas con costo marginal cero',
        'Auto-curativo: imágenes fallidas se regeneran automáticamente',
        'Sistema Operativo Visual en Airtable — actualizaciones de marca inmediatas',
        'Aprobación humana preservada: drafts en Publer, un clic para publicar',
      ],
      architecture: `Trigger Sub-workflow → Etapa 1: Contexto de Marca
  Airtable (Sistema Operativo Visual — guías de marca por clínica)

→ Etapa 2: Enrutamiento por Formato (Switch)
  Carrusel → Copy Generator A → Splitter A
  Stories  → Copy Generator B → Splitter B

→ Etapa 3: Generación de Copy (por formato)
  Gemini (Generador de Copy RRSS)
  → Caption + estructura de slides

→ Etapa 4: Dirección de Arte y Generación
  Gemini (Director de Arte) → prompt visual por slide
  → fal.ai nano-banana-pro (cola async)
    → Poll status hasta COMPLETED
    → Descargar imagen

→ Etapa 5: Validación Visual
  Gemini Vision (analizar imagen)
  → ¿Aprobada? → Publer (subir media)
  → ¿Rechazada? → retryCount < maxRetries? → regenerar
    → ¿No? → saltar slide

→ Etapa 6: Creación de Draft
  Publer API (POST /posts/schedule)
  → Poll job status hasta completar

→ Etapa 7: Notificación
  Slack (chat.postMessage) → Equipo notificado`,
    },
  },
  {
    slug: 'orbit',
    year: '2026',
    role: { en: 'Automation Architect', es: 'Arquitecto de Automatización' },
    stack: ['Shopify', 'Klaviyo', 'Gorgias', 'n8n', 'Stripe', 'OpenAI', 'PostgreSQL', 'Shopify Admin API (GraphQL)', 'Slack'],
    en: {
      title: 'Orbit — DTC Commerce Automation Suite',
      subtitle: 'Revenue recovery, retention, AI support and payment reconciliation for a Shopify brand selling across the US, Canada and Australia',
      description: 'An automation suite for a Shopify DTC brand selling in the US, Canada and Australia — recovering lost revenue, driving repeat purchases, resolving support in real time and closing the loop on off-platform payments.',
      problem: 'The brand was growing across three markets, but the operation hadn\'t kept up. Shoppers abandoned checkouts with no follow-up beyond a generic email. Customers who loved the product forgot to reorder before running out. The support team spent most of its day answering "where is my order?" by hand. And orders paid through corporate agreements sat as "pending" in Shopify until someone cross-checked the billing system and marked them paid manually — blocking fulfillment and distorting revenue reports.',
      solution: [
        'Orbit is a set of four automations that share one principle: each system does what it\'s best at. Klaviyo owns customer messaging, Shopify owns the order, Gorgias owns the human conversation, and n8n orchestrates everything that crosses those boundaries.',
        { lead: '1. Abandoned checkout recovery (Klaviyo).', text: 'A three-step email and SMS flow triggered by Shopify\'s Started Checkout event. The first message is a plain reminder with the cart contents; the second adds social proof from product reviews; the third offers a single-use incentive only to first-time buyers and carts above a value threshold — so returning customers are never trained to wait for a coupon. The flow exits the moment an order is placed, and SMS is sent only to subscribers with recorded consent under TCPA, CASL and the Australian Spam Act.' },
        { lead: '2. Replenishment and repeat purchase (Klaviyo + n8n).', text: 'Each consumable SKU has a consumption window. n8n calculates when each customer is about to run out — using their own purchase history when available and the SKU default otherwise — and writes that date to their Klaviyo profile. A date-triggered flow reaches the customer a few days before they run out, with a one-click link to a prefilled cart.' },
        { lead: '3. AI support agent (embedded chat + Gorgias).', text: 'A chat widget embedded in the storefront, backed by an AI agent with direct, read-only access to Shopify and carrier tracking. It answers order status, shipping times, product and policy questions with live data instead of canned responses. Order details are only revealed after the shopper verifies with order number and email. When a request is ambiguous, involves money, or the customer is frustrated, the agent opens a Gorgias ticket with the full transcript, the order context and a suggested next action — so the human picks up without asking the customer to repeat themselves.' },
        { lead: '4. Agreement payment reconciliation (Stripe + n8n + Shopify Admin API).', text: 'Orders placed under corporate agreements are billed through Stripe invoices, outside Shopify. Each invoice carries the Shopify order ID in its metadata. When Stripe fires the invoice.paid event, n8n verifies the webhook signature, locates the matching order, confirms the amount matches and the order is still pending, then marks it as paid through the Admin API, tags it as charged and attaches a note with the Stripe invoice ID and payment date. The workflow is idempotent: Stripe\'s retried webhooks never create duplicate updates. Any mismatch — wrong amount, missing order, already paid — is never auto-resolved: it goes to Slack for human review.' },
      ],
      decisions: [
        { title: 'Klaviyo for messaging, n8n for logic.', text: 'Klaviyo\'s flows, deliverability and consent management are hard to beat, so messaging stays there. Custom calculations like per-customer replenishment dates live in n8n and feed Klaviyo through profile properties — the marketing team keeps editing copy and timing without touching code.' },
        { title: 'Incentives are earned, not default.', text: 'Discounts in the recovery flow are gated by cart value and customer history to protect margin.' },
        { title: 'The agent reads, humans decide.', text: 'The support agent has read-only access. Anything with financial impact — refunds, cancellations — is escalated with context, never executed autonomously.' },
        { title: 'Strict matching over convenience.', text: 'Marking an order as paid affects revenue, tax reporting and fulfillment. The reconciliation only acts on exact matches; everything else is flagged.' },
        { title: 'Compliance by market.', text: 'Consent handling was designed for three different regulatory regimes from day one, not retrofitted.' },
      ],
      results: [
        'Abandoned checkouts followed up across email and SMS within the first hour, with incentives reserved for first-time buyers on qualifying carts — revenue recovered without eroding margin',
        'Replenishment reminders timed to each customer\'s own buying rhythm instead of a fixed calendar',
        'Order status, shipping and product questions answered instantly, 24/7, with live store data',
        'Escalated tickets arrive in Gorgias with full transcript and order context — no customer is asked to repeat their issue',
        'Agreement orders marked as paid within a minute of Stripe confirming payment, replacing a manual cross-check between two systems',
        'Every automated payment update leaves an audit trail with Stripe reference and timestamp',
      ],
      architecture: `Shopify (Store)
  ├─ Started Checkout ──→ Klaviyo: Abandoned Checkout Flow
  │     ├─ Email 1 · 1h  (cart reminder)
  │     ├─ Email/SMS 2 · 24h  (social proof · consent-gated SMS)
  │     ├─ Email 3 · 48h  (conditional split: new customer + cart value → incentive)
  │     └─ Exit on Placed Order
  │
  ├─ Order Fulfilled ──→ n8n: Replenishment Engine
  │     ├─ SKU consumption windows (PostgreSQL)
  │     ├─ Per-customer reorder interval from purchase history
  │     └─ Klaviyo API → profile property: next_reorder_date
  │           └─ Klaviyo: Date-Triggered Replenishment Flow → prefilled cart link
  │
  └─ Storefront Chat Widget ──→ n8n: Support Agent (LLM)
        ├─ verify_customer (order # + email)
        ├─ get_order_status (Shopify Admin API)
        ├─ track_shipment (carrier tracking)
        ├─ search_products / get_policy
        └─ escalate_to_human → Gorgias API (transcript + order context + suggested action)

Stripe (invoice.paid)
  └─ Webhook ──→ n8n: Agreement Reconciliation
        ├─ Verify Stripe signature
        ├─ Idempotency check (event already processed?)
        ├─ Read shopify_order_id from invoice metadata
        ├─ Validate amount + financial status = pending (Shopify GraphQL)
        ├─ ✓ orderMarkAsPaid → tag "charged" → note (Stripe invoice ID + date)
        └─ ✗ mismatch → Slack alert for manual review`,
    },
    es: {
      title: 'Orbit — Suite de automatización para comercio DTC',
      subtitle: 'Recuperación de ingresos, retención, soporte con IA y conciliación de pagos para una marca Shopify que vende en Estados Unidos, Canadá y Australia',
      description: 'Una suite de automatizaciones para una marca DTC en Shopify que vende en Estados Unidos, Canadá y Australia: recupera ventas perdidas, impulsa la recompra, resuelve el soporte en tiempo real y cierra el ciclo de los pagos por convenio.',
      problem: 'La marca crecía en tres mercados, pero la operación no le seguía el ritmo. Los compradores abandonaban el checkout sin más seguimiento que un correo genérico. Clientes satisfechos con el producto olvidaban recomprar antes de que se les acabara. El equipo de soporte pasaba la mayor parte del día respondiendo a mano "¿dónde está mi pedido?". Y los pedidos pagados por convenios corporativos quedaban como "pendientes" en Shopify hasta que alguien revisaba el sistema de facturación y los marcaba como pagados manualmente, lo que frenaba el despacho y distorsionaba los reportes de ingresos.',
      solution: [
        'Orbit son cuatro automatizaciones que comparten un principio: cada sistema hace lo que mejor sabe hacer. Klaviyo maneja la comunicación con el cliente, Shopify es la fuente de verdad del pedido, Gorgias maneja la conversación humana y n8n orquesta todo lo que cruza esos límites.',
        { lead: '1. Recuperación de checkouts abandonados (Klaviyo).', text: 'Un flujo de tres pasos por email y SMS que se activa con el evento Started Checkout de Shopify. El primer mensaje es un recordatorio con el contenido del carrito; el segundo suma prueba social con reseñas del producto; el tercero ofrece un incentivo de un solo uso únicamente a compradores nuevos y carritos por encima de un umbral, para no acostumbrar a los clientes recurrentes a esperar el cupón. El flujo se detiene en cuanto entra el pedido, y el SMS solo se envía a suscriptores con consentimiento registrado según TCPA, CASL y la Spam Act australiana.' },
        { lead: '2. Reabastecimiento y recompra (Klaviyo + n8n).', text: 'Cada SKU consumible tiene una ventana de consumo. n8n calcula cuándo se le va a acabar el producto a cada cliente, usando su propio historial de compras cuando existe y el valor del SKU en su defecto, y escribe esa fecha en su perfil de Klaviyo. Un flujo activado por fecha contacta al cliente unos días antes con un enlace a un carrito ya armado.' },
        { lead: '3. Agente de soporte con IA (chat embebido + Gorgias).', text: 'Un widget de chat dentro de la tienda, respaldado por un agente de IA con acceso directo y de solo lectura a Shopify y al tracking de las transportadoras. Responde estado del pedido, tiempos de envío, preguntas de producto y políticas con datos en vivo, no con respuestas predefinidas. Los datos de un pedido solo se revelan después de verificar número de pedido y email. Cuando la solicitud es ambigua, involucra dinero o el cliente está molesto, el agente abre un ticket en Gorgias con la conversación completa, el contexto del pedido y una acción sugerida, para que la persona de soporte continúe sin pedirle al cliente que repita nada.' },
        { lead: '4. Conciliación de pagos por convenio (Stripe + n8n + Shopify Admin API).', text: 'Los pedidos bajo convenios corporativos se facturan con invoices de Stripe, fuera de Shopify. Cada invoice lleva el ID del pedido de Shopify en sus metadatos. Cuando Stripe emite el evento invoice.paid, n8n verifica la firma del webhook, ubica el pedido correspondiente, confirma que el monto coincide y que sigue pendiente, lo marca como pagado mediante la Admin API, le pone la etiqueta "charged" y agrega una nota con el ID de la invoice y la fecha del pago. El flujo es idempotente: los reintentos de webhooks de Stripe nunca generan actualizaciones duplicadas. Cualquier inconsistencia (monto distinto, pedido inexistente, pedido ya pagado) nunca se resuelve sola: se envía a Slack para revisión humana.' },
      ],
      decisions: [
        { title: 'Klaviyo para comunicar, n8n para la lógica.', text: 'La entregabilidad, los flujos y el manejo de consentimiento de Klaviyo son difíciles de igualar, así que la comunicación vive ahí. Los cálculos propios, como la fecha de recompra por cliente, viven en n8n y alimentan a Klaviyo mediante propiedades de perfil: el equipo de marketing sigue editando textos y tiempos sin tocar código.' },
        { title: 'Los incentivos se ganan, no son la regla.', text: 'Los descuentos del flujo de recuperación dependen del valor del carrito y del historial del cliente para proteger el margen.' },
        { title: 'El agente consulta, las personas deciden.', text: 'El agente de soporte tiene acceso de solo lectura. Todo lo que tiene impacto financiero (reembolsos, cancelaciones) se escala con contexto, nunca se ejecuta de forma autónoma.' },
        { title: 'Coincidencia estricta antes que comodidad.', text: 'Marcar un pedido como pagado afecta ingresos, impuestos y despacho. La conciliación solo actúa sobre coincidencias exactas; todo lo demás se marca para revisión.' },
        { title: 'Cumplimiento por mercado.', text: 'El manejo de consentimiento se diseñó desde el inicio para tres marcos regulatorios distintos, no se agregó después.' },
      ],
      results: [
        'Seguimiento a los checkouts abandonados por email y SMS desde la primera hora, con incentivos reservados para compradores nuevos con carritos que califican: ventas recuperadas sin sacrificar margen',
        'Recordatorios de recompra ajustados al ritmo de compra de cada cliente, no a un calendario fijo',
        'Preguntas de estado del pedido, envíos y producto respondidas al instante, 24/7, con datos en vivo de la tienda',
        'Los tickets escalados llegan a Gorgias con la conversación completa y el contexto del pedido: ningún cliente tiene que repetir su caso',
        'Pedidos por convenio marcados como pagados en menos de un minuto desde que Stripe confirma el pago, reemplazando el cruce manual entre dos sistemas',
        'Cada actualización automática de pago deja un rastro de auditoría con la referencia de Stripe y la fecha',
      ],
      architecture: `Shopify (Store)
  ├─ Started Checkout ──→ Klaviyo: Abandoned Checkout Flow
  │     ├─ Email 1 · 1h  (cart reminder)
  │     ├─ Email/SMS 2 · 24h  (social proof · consent-gated SMS)
  │     ├─ Email 3 · 48h  (conditional split: new customer + cart value → incentive)
  │     └─ Exit on Placed Order
  │
  ├─ Order Fulfilled ──→ n8n: Replenishment Engine
  │     ├─ SKU consumption windows (PostgreSQL)
  │     ├─ Per-customer reorder interval from purchase history
  │     └─ Klaviyo API → profile property: next_reorder_date
  │           └─ Klaviyo: Date-Triggered Replenishment Flow → prefilled cart link
  │
  └─ Storefront Chat Widget ──→ n8n: Support Agent (LLM)
        ├─ verify_customer (order # + email)
        ├─ get_order_status (Shopify Admin API)
        ├─ track_shipment (carrier tracking)
        ├─ search_products / get_policy
        └─ escalate_to_human → Gorgias API (transcript + order context + suggested action)

Stripe (invoice.paid)
  └─ Webhook ──→ n8n: Agreement Reconciliation
        ├─ Verify Stripe signature
        ├─ Idempotency check (event already processed?)
        ├─ Read shopify_order_id from invoice metadata
        ├─ Validate amount + financial status = pending (Shopify GraphQL)
        ├─ ✓ orderMarkAsPaid → tag "charged" → note (Stripe invoice ID + date)
        └─ ✗ mismatch → Slack alert for manual review`,
    },
  },
];

export const getProjectBySlug = (slug) => projects.find(p => p.slug === slug);

export const getAdjacentProjects = (slug) => {
  const idx = projects.findIndex(p => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
};
