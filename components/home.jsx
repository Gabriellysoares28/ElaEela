/* global React, DRESSES, ClientHeader, DressPh, Hair, Icon, MarkLabel */

function HomeDesktop() {
  const [slide, setSlide] = React.useState(0);
  const [editorialIdx, setEditorialIdx] = React.useState(0);

  // Hero carousel slides — editorial campaigns
  const heroSlides = [
    {
      eyebrow: 'Outono · Inverno · 26',
      title: <>Vestidos <em style={{ color: 'var(--gold)' }}>vivos</em>,<br />de mulher<br />para mulher.</>,
      copy: 'Cada peça pertence a uma de nós. Você aluga histórias confiadas — e devolve com mais uma noite a contar.',
      tone: 'rose',
      code: 'AT-014',
      name: 'Aurora',
      meta: 'Casamento · 36-38',
      cta: 'Explorar coleção',
    },
    {
      eyebrow: 'Edição limitada · Black Tie',
      title: <>O preto que<br /><em style={{ color: 'var(--gold)' }}>diz tudo</em><br />sem dizer.</>,
      copy: 'Vestidos noir confiados por nossas parceiras. Selene, Belmira, Ondine — três interpretações de uma só palavra.',
      tone: 'noir',
      code: 'AT-007',
      name: 'Selene',
      meta: 'Black Tie · 38',
      cta: 'Ver black tie',
    },
    {
      eyebrow: 'Modelo colaborativo',
      title: <>Seu vestido<br />de novo<br /><em style={{ color: 'var(--gold)' }}>em uso</em>.</>,
      copy: 'Confie uma peça que vive parada. Nós higienizamos, fotografamos e cuidamos. Você recebe 20% por locação, via PIX.',
      tone: 'cream',
      code: 'AT-029',
      name: 'Theia',
      meta: 'Casamento · 38',
      cta: 'Cadastrar peça',
    },
  ];

  React.useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const featured = DRESSES.slice(0, 6);

  // Editorial occasions carousel
  const occasions = [
    { name: 'Casamento', count: 48, tone: 'rose', sub: 'Madrinha, convidada, civil' },
    { name: 'Black Tie', count: 22, tone: 'noir', sub: 'Galas e premiações' },
    { name: 'Formatura', count: 31, tone: 'sage', sub: 'Colação e baile' },
    { name: 'Madrinha', count: 29, tone: 'cream', sub: 'Casamentos no campo' },
    { name: 'Infantil', count: 18, tone: 'rose', sub: 'Daminhas e festas' },
  ];

  return (
    <div className="ela col" style={{ width: 1440, minHeight: 1100 }}>
      <ClientHeader active="catálogo" />

      {/* HERO CAROUSEL */}
      <div className="row" style={{ position: 'relative', height: 720, borderBottom: '1px solid var(--ink)', overflow: 'hidden' }}>
        {heroSlides.map((s, i) => (
          <div key={i} className="row" style={{
            position: 'absolute', inset: 0,
            opacity: i === slide ? 1 : 0,
            transition: 'opacity 1s ease',
            pointerEvents: i === slide ? 'auto' : 'none',
          }}>
            {/* Left: copy */}
            <div className="col" style={{ flex: 1, padding: '64px 64px 48px', justifyContent: 'space-between', background: 'var(--paper)' }}>
              <div className="col" style={{ gap: 24, maxWidth: 560 }}>
                <MarkLabel>{s.eyebrow}</MarkLabel>
                <h1 className="serif" style={{ fontSize: 96, fontWeight: 300, lineHeight: 0.9, margin: 0, letterSpacing: '-0.025em' }}>
                  {s.title}
                </h1>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: 440 }}>{s.copy}</p>
                <div className="row" style={{ gap: 12, paddingTop: 8 }}>
                  <button className="btn">{s.cta} <Icon name="arrow" size={14} /></button>
                  <button className="btn outline">Como funciona</button>
                </div>
              </div>

              {/* Slide indicator + controls */}
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div className="row" style={{ gap: 18, alignItems: 'center' }}>
                  <span className="serif" style={{ fontSize: 48, fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>
                    {String(slide + 1).padStart(2, '0')}
                  </span>
                  <div style={{ width: 60, height: 1, background: 'var(--ink-4)' }} />
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--ink-3)' }}>
                    {String(heroSlides.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="row" style={{ gap: 6 }}>
                  {heroSlides.map((_, i) => (
                    <button key={i} onClick={() => setSlide(i)}
                      style={{ width: i === slide ? 32 : 10, height: 2, background: i === slide ? 'var(--ink)' : 'var(--ink-4)', border: 'none', cursor: 'pointer', transition: 'all .3s', padding: 0 }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: full-bleed editorial image */}
            <div style={{ flex: 1, position: 'relative' }}>
              <DressPh tone={s.tone} code={s.code} name={s.name} occasion={s.meta.split(' · ')[0]} size={s.meta.split(' · ')[1]} height={720} />
              {/* Floating credit card */}
              <div className="col" style={{ position: 'absolute', bottom: 32, right: 32, gap: 6, padding: '16px 20px', background: 'var(--paper)', minWidth: 240 }}>
                <span className="mono" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Em destaque</span>
                <div className="serif" style={{ fontSize: 28, lineHeight: 1 }}>{s.name}</div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-2)' }}>
                  ◌ confiado por uma de nós
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Prev / next arrows */}
        <button onClick={() => setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}
          style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, border: '1px solid var(--ink)', background: 'var(--paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
          <Icon name="arrow" size={16} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button onClick={() => setSlide(s => (s + 1) % heroSlides.length)}
          style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, border: '1px solid var(--ink)', background: 'var(--paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
          <Icon name="arrow" size={16} />
        </button>
      </div>

      {/* Stat ribbon */}
      <div className="row" style={{ borderBottom: '1px solid var(--line)', background: 'var(--paper-2)' }}>
        {[
          ['142', 'peças disponíveis'],
          ['38', 'parceiras ativas'],
          ['1.240', 'noites vividas'],
          ['4.9 / 5', 'avaliação média'],
        ].map(([n, l], i) => (
          <div key={i} className="row" style={{ flex: 1, gap: 18, padding: '24px 32px', borderRight: i < 3 ? '1px solid var(--line)' : 'none', alignItems: 'baseline' }}>
            <span className="serif" style={{ fontSize: 40, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}>{n}</span>
            <span className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* CURATED CARROSSEL — featured dresses */}
      <div className="col" style={{ padding: '64px 32px 24px', gap: 28 }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="col" style={{ gap: 12 }}>
            <MarkLabel>Curadoria · maio</MarkLabel>
            <h2 className="serif" style={{ fontSize: 56, fontWeight: 300, margin: 0, letterSpacing: '-0.02em', lineHeight: 1 }}>
              Vestidos da semana
            </h2>
          </div>
          <div className="row" style={{ gap: 10 }}>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', alignSelf: 'center', marginRight: 12 }}>
              {String(editorialIdx + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}
            </span>
            <button onClick={() => setEditorialIdx(i => Math.max(0, i - 1))}
              style={{ width: 44, height: 44, border: '1px solid var(--ink)', background: 'var(--paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="arrow" size={16} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <button onClick={() => setEditorialIdx(i => Math.min(featured.length - 4, i + 1))}
              style={{ width: 44, height: 44, border: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="arrow" size={16} stroke="var(--paper)" />
            </button>
          </div>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <div className="row" style={{
            gap: 24,
            transform: `translateX(calc(${editorialIdx} * -332px * -1 - ${editorialIdx} * 332px))`,
            transition: 'transform .6s cubic-bezier(.2,.7,.2,1)',
            willChange: 'transform',
          }}>
            {featured.map((d, i) => (
              <div key={d.id} className="dress-card col" style={{ flex: '0 0 320px', gap: 12 }}>
                <div style={{ position: 'relative' }}>
                  <DressPh {...d} height={420} />
                  {d.new && <div className="badge gold" style={{ position: 'absolute', top: 12, left: 12 }}>Novo</div>}
                  {d.hot && <div className="badge ink" style={{ position: 'absolute', top: 12, left: 12 }}>Em alta</div>}
                </div>
                <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="col" style={{ gap: 4 }}>
                    <div className="serif" style={{ fontSize: 22, lineHeight: 1 }}>{d.name}</div>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                      {d.occasion} · {d.size}
                    </div>
                  </div>
                  <div className="serif" style={{ fontSize: 20 }}>R$ {d.price}</div>
                </div>
                <div className="row" style={{ gap: 6, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-2)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
                  de {d.owner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OCCASIONS CARROSSEL — editorial cards */}
      <div className="col" style={{ padding: '48px 32px', gap: 28 }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--ink)', paddingBottom: 18 }}>
          <h2 className="serif" style={{ fontSize: 40, fontWeight: 300, margin: 0, letterSpacing: '-0.02em' }}>
            Por <em style={{ color: 'var(--gold)' }}>ocasião</em>
          </h2>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            arraste para ver mais →
          </span>
        </div>

        <div className="row scroll-y" style={{ gap: 20, overflowX: 'auto', paddingBottom: 8 }}>
          {occasions.map((o, i) => (
            <div key={o.name} className="col" style={{ flex: '0 0 280px', gap: 14, cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <DressPh tone={o.tone} code={String(i + 1).padStart(2, '0')} name="" occasion="" size="" height={360} />
                <div className="col" style={{ position: 'absolute', inset: 0, padding: 24, justifyContent: 'flex-end', background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)' }}>
                  <div className="serif" style={{ fontSize: 32, color: 'var(--paper)', fontWeight: 400, lineHeight: 1 }}>{o.name}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--paper-2)', marginTop: 6 }}>
                    {o.count} peças · {o.sub}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS — split */}
      <div className="row" style={{ borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
        {[
          {
            kicker: 'Para quem aluga',
            title: <>Escolha. Prove. <em style={{ color: 'var(--gold)' }}>Viva</em>.</>,
            steps: [
              ['01', 'Reserve com PIX', '30% de sinal'],
              ['02', 'Prove no atelier', 'em 24h, sem custo'],
              ['03', 'Retire ou receba', 'higienizado'],
              ['04', 'Devolva em 4 dias', 'sem stress'],
            ],
            cta: 'Ver catálogo',
            bg: 'var(--paper)',
          },
          {
            kicker: 'Para quem confia uma peça',
            title: <>Cadastre. <em style={{ color: 'var(--gold-soft)' }}>Receba</em>. Repita.</>,
            steps: [
              ['01', 'Cadastre em 5 min', 'fotos pelo celular'],
              ['02', 'Curadoria em 48h', 'feedback honesto'],
              ['03', 'Atelier cuida', 'higi-care incluso'],
              ['04', 'PIX a cada locação', '20% via PIX em 5 dias'],
            ],
            cta: 'Seja parceira',
            bg: 'var(--ink)',
            inverse: true,
          },
        ].map((c, i) => (
          <div key={i} className="col" style={{ flex: 1, padding: '56px 48px', gap: 32, background: c.bg, color: c.inverse ? 'var(--paper)' : 'var(--ink)', borderRight: i === 0 ? '1px solid var(--ink)' : 'none' }}>
            <div className="col" style={{ gap: 18 }}>
              <MarkLabel style={{ color: c.inverse ? 'var(--gold-soft)' : 'var(--ink-3)' }}>{c.kicker}</MarkLabel>
              <h2 className="serif" style={{ fontSize: 56, fontWeight: 300, margin: 0, lineHeight: 0.95, letterSpacing: '-0.02em' }}>{c.title}</h2>
            </div>
            <div className="col" style={{ gap: 0 }}>
              {c.steps.map(([n, t, sub]) => (
                <div key={n} className="row" style={{ padding: '18px 0', borderBottom: `1px solid ${c.inverse ? '#2a2622' : 'var(--line)'}`, gap: 24, alignItems: 'baseline' }}>
                  <span className="mono" style={{ fontSize: 12, letterSpacing: '0.22em', color: c.inverse ? 'var(--gold-soft)' : 'var(--gold-2)' }}>{n}</span>
                  <div className="col" style={{ gap: 4, flex: 1 }}>
                    <span className="serif" style={{ fontSize: 22 }}>{t}</span>
                    <span className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.inverse ? 'var(--ink-4)' : 'var(--ink-3)' }}>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className={c.inverse ? 'btn gold' : 'btn'} style={{ alignSelf: 'flex-start' }}>
              {c.cta} <Icon name="arrow" size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* TESTIMONIAL */}
      <div className="col" style={{ padding: '80px 32px', gap: 32, alignItems: 'center', textAlign: 'center', background: 'var(--paper-2)' }}>
        <MarkLabel style={{ justifyContent: 'center' }}>Histórias da casa</MarkLabel>
        <blockquote className="serif" style={{ fontSize: 44, fontWeight: 300, margin: 0, maxWidth: 880, lineHeight: 1.2, letterSpacing: '-0.015em' }}>
          "Confiei dois vestidos que dormiam no armário. Em três meses, pagaram o presente da minha afilhada — e <em style={{ color: 'var(--gold)' }}>continuam rodando</em>."
        </blockquote>
        <div className="col" style={{ gap: 4 }}>
          <div className="serif" style={{ fontSize: 18 }}>Mariana C.</div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            Parceira desde 2024 · 11 peças
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="col" style={{ padding: '48px 32px 28px', borderTop: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', gap: 32 }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="col" style={{ gap: 14, maxWidth: 380 }}>
            <div className="wordmark" style={{ fontSize: 36, color: 'var(--paper)' }}>
              <span>ela</span><span className="amp" style={{ color: 'var(--gold-soft)' }}>&</span><span>ela</span>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: 'var(--ink-4)' }}>
              Um armário coletivo, em São Paulo. Vestidos confiados por mulheres reais, alugados para mulheres reais.
            </p>
          </div>
          <div className="row" style={{ gap: 80, fontSize: 12 }}>
            {[
              { h: 'Cliente', items: ['Catálogo', 'Como alugar', 'Provas', 'FAQ'] },
              { h: 'Parceira', items: ['Cadastrar peça', 'Calcular ganhos', 'Repasses', 'Manual'] },
              { h: 'Atelier', items: ['Higienização', 'Ajustes', 'Sustentabilidade', 'Imprensa'] },
            ].map(c => (
              <div className="col" key={c.h} style={{ gap: 10 }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-soft)' }}>{c.h}</div>
                {c.items.map(i => <span key={i} style={{ color: 'var(--ink-4)' }}>{i}</span>)}
              </div>
            ))}
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'space-between', borderTop: '1px solid #2a2622', paddingTop: 20, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-4)' }}>
          <span>© ELA & ELA · São Paulo · MMXXVI</span>
          <span>Feito por mulheres, para mulheres</span>
        </div>
      </div>
    </div>
  );
}

window.HomeDesktop = HomeDesktop;
