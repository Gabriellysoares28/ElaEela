/* global React, ClientHeader, Hair, Icon, MarkLabel */

function TimelineDesktop() {
  const steps = [
    { state: 'done', label: 'Reserva confirmada', date: '02 mai · 14:32', detail: 'Sinal PIX de R$ 156 recebido · código #EE-2046', who: 'Você' },
    { state: 'done', label: 'Prova agendada', date: '06 mai · 16:00', detail: 'Atelier Vila Madalena · 30 min · com Júlia', who: 'Atelier' },
    { state: 'current', label: 'Higienização final', date: '13 mai', detail: 'Vapor + costuras revisadas · 2 dias antes da retirada', who: 'Atelier' },
    { state: 'next', label: 'Retirada', date: '15 mai · após 14h', detail: 'Atelier Vila Madalena · também enviamos por moto (R$ 38)', who: 'Você' },
    { state: 'next', label: 'Sua noite', date: '16 mai', detail: 'Casamento Helena & Caio · Fazenda Vassoural', who: '—' },
    { state: 'next', label: 'Devolução', date: '19 mai · até 12h', detail: 'Sem cobrança extra de pequenas marcas · cobrimos vinho derramado', who: 'Você' },
    { state: 'next', label: 'Repasse à parceira', date: '22 mai', detail: 'Beatriz L. recebe R$ 104 (20% comissão) via PIX', who: 'ELA & ELA' },
  ];

  return (
    <div className="ela col" style={{ width: 1440, minHeight: 1100 }}>
      <ClientHeader active="catálogo" />

      <div className="row" style={{ padding: '32px', gap: 48, alignItems: 'flex-start' }}>
        {/* Left: hero of the order */}
        <div className="col" style={{ flex: '0 0 460px', gap: 24, position: 'sticky', top: 24 }}>
          <MarkLabel>Reserva #EE-2046</MarkLabel>
          <h1 className="serif" style={{ fontSize: 56, lineHeight: 0.95, fontWeight: 300, margin: 0, letterSpacing: '-0.02em' }}>
            Faltam<br />
            <em style={{ color: 'var(--gold)' }}>14 dias</em><br />
            para Selene<br />ser sua.
          </h1>

          <div className="dress-ph tone-noir" style={{ height: 360 }}>
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

          <div className="col" style={{ gap: 8, padding: '16px 18px', background: 'var(--paper-2)' }}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Total</span>
              <span className="serif" style={{ fontSize: 24 }}>R$ 520</span>
            </div>
            <Hair />
            <div className="row" style={{ justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-3)' }}>
              <span>Sinal PIX (pago)</span><span>R$ 156</span>
            </div>
            <div className="row" style={{ justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-3)' }}>
              <span>Restante na retirada</span><span>R$ 364</span>
            </div>
          </div>

          <div className="row" style={{ gap: 10 }}>
            <button className="btn outline" style={{ flex: 1 }}><Icon name="whats" size={14} />Falar com atelier</button>
            <button className="btn ghost"><Icon name="cal" size={14} />.ics</button>
          </div>
        </div>

        {/* Right: timeline */}
        <div className="col" style={{ flex: 1, gap: 8 }}>
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 16, borderBottom: '1px solid var(--ink)' }}>
            <h2 className="serif" style={{ fontSize: 36, fontWeight: 300, margin: 0 }}>Sua jornada</h2>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>2 de 7 etapas concluídas</div>
          </div>

          <div className="col" style={{ paddingTop: 32 }}>
            {steps.map((s, i) => (
              <div key={i} className={`tl-step ${s.state}`}>
                <div className="tl-dot">
                  {s.state === 'done' ? <Icon name="check" size={12} /> : i + 1}
                </div>
                <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
                  <div className="col" style={{ gap: 6, flex: 1 }}>
                    <div className="row" style={{ gap: 12, alignItems: 'baseline' }}>
                      <h3 className="serif" style={{ fontSize: 26, fontWeight: 400, margin: 0, color: s.state === 'next' ? 'var(--ink-3)' : 'var(--ink)' }}>{s.label}</h3>
                      {s.state === 'current' && <span className="badge gold">Agora</span>}
                    </div>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-3)', maxWidth: 520 }}>{s.detail}</p>
                  </div>
                  <div className="col" style={{ alignItems: 'flex-end', gap: 4, minWidth: 140 }}>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{s.who}</div>
                    <div className="serif" style={{ fontSize: 18 }}>{s.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Care card */}
          <div className="col" style={{ gap: 14, marginTop: 32, padding: '24px 28px', background: 'var(--ink)', color: 'var(--paper)' }}>
            <MarkLabel style={{ color: 'var(--gold-soft)' }}>Cuidado de atelier</MarkLabel>
            <div className="serif" style={{ fontSize: 24, lineHeight: 1.3 }}>
              "Pequenas marcas de uma noite vivida fazem parte. Vinho, batom, lágrima de alegria — <em style={{ color: 'var(--gold-soft)' }}>nós cuidamos</em>."
            </div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-4)' }}>— Atelier ELA & ELA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.TimelineDesktop = TimelineDesktop;
