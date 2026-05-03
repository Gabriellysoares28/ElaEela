/* global React, DRESSES, OCCASIONS, ClientHeader, DressPh, Hair, Icon, MarkLabel, Chips */
// Catálogo desktop — editorial spread

function CatalogDesktop({ density = 3 }) {
  const [occ, setOcc] = React.useState('todas');
  const [view, setView] = React.useState('grade');
  const filtered = occ === 'todas' ? DRESSES : DRESSES.filter(d => d.occasion === occ);

  const grid = density === 2 ? 'repeat(2, 1fr)' : density === 4 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)';
  const cardH = density === 2 ? 540 : density === 4 ? 320 : 420;

  return (
    <div className="ela col" style={{ width: 1440, minHeight: 1100 }}>
      <ClientHeader active="catálogo" />

      {/* Editorial hero strip */}
      <div className="row" style={{ padding: '36px 32px 28px', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40 }}>
        <div className="col" style={{ gap: 14, maxWidth: 640 }}>
          <MarkLabel>Outono · Inverno 26 · Curadoria</MarkLabel>
          <h1 className="serif" style={{ fontSize: 84, fontWeight: 300, lineHeight: 0.92, margin: 0, letterSpacing: '-0.02em' }}>
            Vestidos<br />
            <em style={{ color: 'var(--gold)', fontWeight: 400 }}>vivos</em>, de mulher<br />
            para mulher.
          </h1>
        </div>
        <div className="col" style={{ gap: 18, maxWidth: 360, paddingBottom: 12 }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            Cada peça pertence a uma de nós. Ao alugar, você usa um vestido cuidado — e devolve com a história de mais uma noite.
          </p>
          <div className="row" style={{ gap: 12 }}>
            <button className="btn">Explorar catálogo <Icon name="arrow" size={14} /></button>
            <button className="btn outline">Como funciona</button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden', padding: '14px 0', background: 'var(--paper-2)' }}>
        <div className="marquee mono" style={{ fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
          {[...Array(2)].map((_, k) => (
            <React.Fragment key={k}>
              <span>★ Try-on virtual · veja antes de provar</span>
              <span>★ 142 vestidos disponíveis hoje</span>
              <span>★ Reserve com PIX · 30% de sinal</span>
              <span>★ Modelo colaborativo · 38 parceiras ativas</span>
              <span>★ Provas em 24h · Higi-care de atelier</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Filter bar */}
      <div className="row" style={{ padding: '20px 32px', justifyContent: 'space-between', borderBottom: '1px solid var(--line)' }}>
        <Chips items={OCCASIONS} active={occ} onChange={setOcc} />
        <div className="row" style={{ gap: 18 }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
            {filtered.length.toString().padStart(2, '0')} peças
          </span>
          <Hair vertical length={20} />
          <div className="row" style={{ gap: 8, color: 'var(--ink-3)' }}>
            <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Ordenar</span>
            <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink)' }}>Curadoria ↓</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: grid, gap: 28 }}>
        {filtered.map(d => (
          <div key={d.id} className="dress-card col" style={{ gap: 12 }}>
            <div style={{ position: 'relative' }}>
              <DressPh {...d} height={cardH} />
              {d.new && <div className="badge gold" style={{ position: 'absolute', top: 12, left: 12 }}>Novo</div>}
              {d.hot && <div className="badge ink" style={{ position: 'absolute', top: 12, left: 12 }}>Em alta</div>}
              <div style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, background: 'rgba(250,247,242,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer' }}>
                <Icon name="heart" size={14} stroke="var(--ink)" />
              </div>
            </div>
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="col" style={{ gap: 4 }}>
                <div className="serif" style={{ fontSize: 22, lineHeight: 1 }}>{d.name}</div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                  {d.occasion} · Tam {d.size}
                </div>
              </div>
              <div className="col" style={{ alignItems: 'flex-end', gap: 4 }}>
                <div className="serif" style={{ fontSize: 20 }}>R$ {d.price}</div>
                <div className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>4 dias</div>
              </div>
            </div>
            <div className="row" style={{ gap: 6, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-2)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
              de {d.owner}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="col" style={{ marginTop: 'auto', padding: '48px 32px 28px', borderTop: '1px solid var(--ink)', background: 'var(--ink)', color: 'var(--paper)', gap: 32 }}>
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

window.CatalogDesktop = CatalogDesktop;
