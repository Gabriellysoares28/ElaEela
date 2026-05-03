/* global React, DRESSES, DressPh, Hair, Icon, MarkLabel */

// Mobile catalog + mobile partner submit (key flows for client)

function MobileFrame({ children, label }) {
  return (
    <div className="col" style={{ gap: 12 }}>
      <div className="mono" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{label}</div>
      <div style={{ width: 390, height: 844, background: 'var(--paper)', borderRadius: 44, overflow: 'hidden', border: '8px solid #1a1a1a', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.25)', position: 'relative' }}>
        {/* Status bar */}
        <div className="row" style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '14px 28px 6px', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600, zIndex: 10 }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ width: 18, height: 10, border: '1.5px solid var(--ink)', borderRadius: 2, position: 'relative' }}>
              <span style={{ position: 'absolute', inset: 1, background: 'var(--ink)' }} />
            </span>
          </span>
        </div>
        {/* Notch */}
        <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 110, height: 32, background: '#1a1a1a', borderRadius: 20, zIndex: 11 }} />
        <div className="ela col scroll-y" style={{ height: '100%', paddingTop: 50 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileCatalog() {
  const items = DRESSES.slice(0, 6);
  return (
    <MobileFrame label="Mobile · catálogo">
      {/* Header */}
      <div className="row" style={{ padding: '8px 20px 14px', justifyContent: 'space-between', alignItems: 'center' }}>
        <Icon name="menu" size={20} />
        <div className="wordmark" style={{ fontSize: 20 }}>
          <span>ela</span><span className="amp">&</span><span>ela</span>
        </div>
        <div className="row" style={{ gap: 14 }}>
          <Icon name="search" size={18} />
          <Icon name="bag" size={18} />
        </div>
      </div>

      {/* Hero */}
      <div className="col" style={{ padding: '12px 20px 18px', gap: 10 }}>
        <MarkLabel>OI · 26</MarkLabel>
        <h1 className="serif" style={{ fontSize: 44, fontWeight: 300, lineHeight: 0.92, margin: 0, letterSpacing: '-0.02em' }}>
          Vestidos <em style={{ color: 'var(--gold)' }}>vivos</em>,<br />de mulher<br />para mulher.
        </h1>
      </div>

      {/* Occasion strip */}
      <div className="row scroll-y" style={{ overflowX: 'auto', padding: '4px 20px 18px', gap: 8 }}>
        {['Todas', 'Casamento', 'Madrinha', 'Formatura', 'Black Tie'].map((o, i) => (
          <button key={o} className={`chip ${i === 1 ? 'active' : ''}`} style={{ flex: '0 0 auto' }}>{o}</button>
        ))}
      </div>

      {/* Grid 2-col */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, padding: '0 20px 20px' }}>
        {items.map(d => (
          <div key={d.id} className="col" style={{ gap: 6 }}>
            <DressPh {...d} height={220} />
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: 4 }}>
              <div className="col" style={{ gap: 2 }}>
                <div className="serif" style={{ fontSize: 16 }}>{d.name}</div>
                <div className="mono" style={{ fontSize: 8, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{d.occasion}</div>
              </div>
              <div className="serif" style={{ fontSize: 14 }}>R${d.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="row" style={{ position: 'sticky', bottom: 0, background: 'var(--paper)', borderTop: '1px solid var(--line)', padding: '12px 20px 22px', justifyContent: 'space-around', marginTop: 'auto' }}>
        {[
          { i: 'grid', l: 'Catálogo', a: true },
          { i: 'cal', l: 'Provas' },
          { i: 'heart', l: 'Salvos' },
          { i: 'user', l: 'Conta' },
        ].map(n => (
          <div key={n.l} className="col" style={{ alignItems: 'center', gap: 4, color: n.a ? 'var(--ink)' : 'var(--ink-3)' }}>
            <Icon name={n.i} size={18} />
            <span className="mono" style={{ fontSize: 8, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{n.l}</span>
          </div>
        ))}
      </div>
    </MobileFrame>
  );
}

function MobilePartner() {
  return (
    <MobileFrame label="Mobile · cadastro de peça">
      <div className="row" style={{ padding: '8px 20px 14px', justifyContent: 'space-between', alignItems: 'center' }}>
        <Icon name="close" size={18} />
        <span className="mono" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>02 / 04</span>
        <span className="mono" style={{ fontSize: 11, color: 'var(--gold-2)' }}>Salvar</span>
      </div>

      {/* Progress */}
      <div className="row" style={{ padding: '0 20px', gap: 4 }}>
        {[1, 2, 3, 4].map(s => (
          <div key={s} style={{ flex: 1, height: 2, background: s <= 2 ? 'var(--ink)' : 'var(--line)' }} />
        ))}
      </div>

      <div className="col" style={{ padding: '24px 20px 16px', gap: 8 }}>
        <MarkLabel>Modelo colaborativo</MarkLabel>
        <h1 className="serif" style={{ fontSize: 36, fontWeight: 300, lineHeight: 0.95, margin: 0, letterSpacing: '-0.02em' }}>
          Confie sua peça<br /><em style={{ color: 'var(--gold)' }}>ao armário.</em>
        </h1>
      </div>

      <div className="col" style={{ padding: '8px 20px', gap: 18 }}>
        <div className="field">
          <span className="field-label">Como você o chama?</span>
          <input className="field-input" defaultValue="Estela" style={{ fontSize: 22 }} />
        </div>

        <div className="col" style={{ gap: 8 }}>
          <span className="field-label">Ocasião</span>
          <div className="row" style={{ gap: 6, flexWrap: 'wrap' }}>
            {['Casamento', 'Madrinha', 'Black Tie', 'Formatura'].map((o, i) => (
              <button key={o} className={`chip ${i === 0 ? 'active' : ''}`}>{o}</button>
            ))}
          </div>
        </div>

        <div className="col" style={{ gap: 8 }}>
          <span className="field-label">Fotos · 2/4</span>
          <div className="row" style={{ gap: 8 }}>
            <div className="dress-ph tone-rose" style={{ height: 130, flex: 1 }}>
              <div className="ph-name serif" style={{ fontSize: 12 }}>Frente</div>
            </div>
            <div className="dress-ph tone-rose" style={{ height: 130, flex: 1 }}>
              <div className="ph-name serif" style={{ fontSize: 12 }}>Costas</div>
            </div>
            <div className="col" style={{ flex: 1, height: 130, border: '1px dashed var(--line-2)', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'var(--ink-3)' }}>
              <Icon name="upload" size={16} />
              <span className="mono" style={{ fontSize: 8, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Detalhe</span>
            </div>
          </div>
        </div>

        <div className="col" style={{ gap: 12, padding: '14px 16px', background: 'var(--paper-2)' }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <span className="mono" style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Sua comissão</span>
            <span className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', color: 'var(--gold-2)' }}>20% por locação</span>
          </div>
          <div className="row" style={{ alignItems: 'baseline', gap: 10 }}>
            <span className="serif" style={{ fontSize: 36 }}>R$ 84</span>
            <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>· R$ 420 / locação</span>
          </div>
        </div>
      </div>

      <div className="row" style={{ position: 'sticky', bottom: 0, background: 'var(--paper)', borderTop: '1px solid var(--line)', padding: '14px 20px 22px', gap: 10, marginTop: 'auto' }}>
        <button className="btn outline sm" style={{ flex: 1 }}>Voltar</button>
        <button className="btn sm" style={{ flex: 2 }}>Próxima etapa <Icon name="arrow" size={12} /></button>
      </div>
    </MobileFrame>
  );
}

function MobileTimeline() {
  return (
    <MobileFrame label="Mobile · cronograma">
      <div className="row" style={{ padding: '8px 20px 14px', justifyContent: 'space-between', alignItems: 'center' }}>
        <Icon name="arrow" size={18} style={{ transform: 'rotate(180deg)' }} />
        <span className="mono" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>#EE-2046</span>
        <Icon name="whats" size={18} />
      </div>

      <div className="col" style={{ padding: '8px 20px 18px', gap: 8 }}>
        <MarkLabel>Reserva confirmada</MarkLabel>
        <h1 className="serif" style={{ fontSize: 38, fontWeight: 300, lineHeight: 0.95, margin: 0, letterSpacing: '-0.02em' }}>
          Faltam <em style={{ color: 'var(--gold)' }}>14 dias</em> para Selene ser sua.
        </h1>
      </div>

      <div className="dress-ph tone-noir" style={{ height: 220, margin: '0 20px' }}>
        <div className="ph-meta">
          <span>AT-007</span>
          <span>38</span>
        </div>
        <div className="ph-name serif">Selene</div>
        <div className="ph-meta" style={{ paddingTop: 0 }}>
          <span>Black Tie</span>
          <span>—</span>
        </div>
      </div>

      <div className="col" style={{ padding: '24px 20px' }}>
        {[
          { state: 'done', label: 'Reserva', date: '02 mai' },
          { state: 'done', label: 'Prova agendada', date: '06 mai' },
          { state: 'current', label: 'Higienização final', date: '13 mai' },
          { state: 'next', label: 'Retirada', date: '15 mai' },
          { state: 'next', label: 'Sua noite', date: '16 mai' },
          { state: 'next', label: 'Devolução', date: '19 mai' },
        ].map((s, i) => (
          <div key={i} className={`tl-step ${s.state}`} style={{ paddingBottom: 18 }}>
            <div className="tl-dot">
              {s.state === 'done' ? <Icon name="check" size={10} /> : i + 1}
            </div>
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="serif" style={{ fontSize: 18, color: s.state === 'next' ? 'var(--ink-3)' : 'var(--ink)' }}>{s.label}</span>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--ink-3)' }}>{s.date}</span>
            </div>
          </div>
        ))}
      </div>
    </MobileFrame>
  );
}

window.MobileCatalog = MobileCatalog;
window.MobilePartner = MobilePartner;
window.MobileTimeline = MobileTimeline;
