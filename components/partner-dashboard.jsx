/* global React, Hair, Icon, MarkLabel, DressPh */

// Two related screens for the parceira (collaborative partner):
// - PartnerSubmit (cadastro de peça multi-step)
// - PartnerDashboard (ganhos + peças + repasses)

function PartnerHeader({ active = 'pecas' }) {
  return (
    <div className="col">
      <div className="row" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '10px 32px', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        <span>Painel da Parceira</span>
        <span>★ Beatriz L. · 12 peças · ativa desde nov 2024</span>
      </div>
      <div className="row" style={{ padding: '20px 32px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
        <div className="row" style={{ gap: 32, alignItems: 'baseline' }}>
          <div className="wordmark" style={{ fontSize: 22 }}>
            <span>ela</span><span className="amp">&</span><span>ela</span>
          </div>
          <div className="row" style={{ gap: 24, fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {[
              { v: 'pecas', l: 'Minhas peças' },
              { v: 'ganhos', l: 'Ganhos' },
              { v: 'repasses', l: 'Repasses' },
              { v: 'cadastrar', l: '+ Cadastrar peça' },
            ].map(t => (
              <span key={t.v} style={{ color: t.v === active ? 'var(--ink)' : 'var(--ink-3)', borderBottom: t.v === active ? '1px solid var(--ink)' : 'none', paddingBottom: 4 }}>{t.l}</span>
            ))}
          </div>
        </div>
        <div className="row" style={{ gap: 16, alignItems: 'center' }}>
          <Icon name="globe" size={16} stroke="var(--ink-3)" />
          <Icon name="search" size={16} stroke="var(--ink-3)" />
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,var(--rose),var(--gold-soft))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 16 }}>B</div>
        </div>
      </div>
    </div>
  );
}

function PartnerDashboard() {
  const earnings = [
    { month: 'Jan', value: 240 },
    { month: 'Fev', value: 380 },
    { month: 'Mar', value: 420 },
    { month: 'Abr', value: 580 },
    { month: 'Mai', value: 760 },
  ];
  const max = Math.max(...earnings.map(e => e.value));

  const myPieces = [
    { id: 'AT-007', name: 'Selene', tone: 'noir', size: '38', occasion: 'Black Tie', price: 520, locacoes: 12, status: 'Em locação', rating: 4.9 },
    { id: 'AT-018', name: 'Iris', tone: 'rose', size: '42', occasion: 'Madrinha', price: 390, locacoes: 6, status: 'Disponível', rating: 5.0 },
    { id: 'AT-046', name: 'Belmira', tone: 'noir', size: '38', occasion: 'Black Tie', price: 540, locacoes: 4, status: 'Em prova', rating: 4.8 },
    { id: 'AT-061', name: 'Estela', tone: 'cream', size: '40', occasion: 'Casamento', price: 460, locacoes: 0, status: 'Em aprovação', rating: null, owner: 'Beatriz L.' },
  ];

  return (
    <div className="ela col" style={{ width: 1440, minHeight: 1100 }}>
      <PartnerHeader active="ganhos" />

      <div className="col" style={{ padding: '32px', gap: 32 }}>
        {/* Hero stat strip */}
        <div className="row" style={{ gap: 0, alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div className="col" style={{ gap: 14, flex: 1 }}>
            <MarkLabel>Maio · 2026</MarkLabel>
            <h1 className="serif" style={{ fontSize: 56, lineHeight: 1, fontWeight: 300, margin: 0, letterSpacing: '-0.02em' }}>
              Bom dia, <em>Beatriz</em>.<br />
              Suas peças renderam<br />
              <span className="shimmer">R$ 760</span> este mês.
            </h1>
          </div>
          <div className="col" style={{ flex: '0 0 360px', gap: 12, padding: '20px 22px', background: 'var(--ink)', color: 'var(--paper)' }}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <MarkLabel style={{ color: 'var(--gold-soft)' }}>Próximo repasse</MarkLabel>
              <Icon name="pix" size={16} stroke="var(--gold-soft)" />
            </div>
            <div className="serif" style={{ fontSize: 44, fontWeight: 300, lineHeight: 1 }}>R$ 312,00</div>
            <Hair color="#2a2622" />
            <div className="col" style={{ gap: 6, fontSize: 12, color: 'var(--ink-4)' }}>
              <div className="row" style={{ justifyContent: 'space-between' }}><span>Selene · 02 mai</span><span>R$ 104</span></div>
              <div className="row" style={{ justifyContent: 'space-between' }}><span>Belmira · 28 abr</span><span>R$ 108</span></div>
              <div className="row" style={{ justifyContent: 'space-between' }}><span>Iris · 19 abr</span><span>R$ 100</span></div>
            </div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-soft)', paddingTop: 6 }}>
              ↳ PIX em até 5 dias úteis · 22 mai
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div className="row" style={{ borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--line)' }}>
          {[
            ['Locações no mês', '07', '+3 vs abr'],
            ['Comissão acumulada', 'R$ 2.380', 'desde nov 2024'],
            ['Ocupação das peças', '62%', '★ acima da média'],
            ['Avaliação média', '4.9 / 5.0', '38 avaliações'],
          ].map(([l, v, sub], i) => (
            <div key={i} className="col" style={{ flex: 1, gap: 10, padding: '24px 28px', borderRight: i < 3 ? '1px solid var(--line)' : 'none' }}>
              <div className="stat-label">{l}</div>
              <div className="stat-num">{v}</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-2)' }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Chart + insights */}
        <div className="row" style={{ gap: 32, alignItems: 'flex-start' }}>
          <div className="col" style={{ flex: 2, gap: 18 }}>
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h2 className="serif" style={{ fontSize: 32, fontWeight: 300, margin: 0 }}>Ganhos · últimos 5 meses</h2>
              <div className="row" style={{ gap: 8 }}>
                <span className="chip">Mensal</span>
                <span className="chip">Por peça</span>
              </div>
            </div>
            <div className="row" style={{ alignItems: 'flex-end', gap: 28, height: 240, paddingTop: 12, borderBottom: '1px solid var(--ink)' }}>
              {earnings.map((e, i) => (
                <div key={e.month} className="col" style={{ flex: 1, alignItems: 'center', gap: 10 }}>
                  <div className="serif" style={{ fontSize: 18, color: i === earnings.length - 1 ? 'var(--gold-2)' : 'var(--ink-3)' }}>R$ {e.value}</div>
                  <div style={{ width: '100%', height: (e.value / max) * 180, background: i === earnings.length - 1 ? 'var(--gold)' : 'var(--ink)', position: 'relative' }} />
                </div>
              ))}
            </div>
            <div className="row" style={{ gap: 28 }}>
              {earnings.map(e => (
                <div key={e.month} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{e.month}</div>
              ))}
            </div>
          </div>

          <div className="col" style={{ flex: 1, gap: 14, padding: '22px 24px', background: 'var(--paper-2)' }}>
            <MarkLabel>Insight da curadoria</MarkLabel>
            <div className="serif" style={{ fontSize: 22, lineHeight: 1.3 }}>
              Vestidos <em>tom escuro</em> Black Tie estão com fila de espera. Suas Selene e Belmira lideram.
            </div>
            <Hair />
            <div className="col" style={{ gap: 8 }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Sugestão</div>
              <div style={{ fontSize: 14, lineHeight: 1.6 }}>Considere cadastrar mais 1 peça noir no tamanho 38–40 para a temporada de casamentos.</div>
              <button className="btn sm" style={{ alignSelf: 'flex-start', marginTop: 6 }}><Icon name="plus" size={12} />Cadastrar nova peça</button>
            </div>
          </div>
        </div>

        {/* My pieces */}
        <div className="col" style={{ gap: 18 }}>
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--ink)', paddingBottom: 12 }}>
            <h2 className="serif" style={{ fontSize: 32, fontWeight: 300, margin: 0 }}>Minhas peças</h2>
            <div className="row" style={{ gap: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
              <span>{myPieces.length} peças</span>
              <span>·</span>
              <span style={{ color: 'var(--gold-2)' }}>1 em aprovação</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {myPieces.map(p => (
              <div key={p.id} className="col" style={{ gap: 12 }}>
                <div style={{ position: 'relative' }}>
                  <DressPh {...p} height={300} />
                  <div className="badge" style={{ position: 'absolute', top: 10, left: 10, background: p.status === 'Em aprovação' ? 'var(--gold-soft)' : 'rgba(250,247,242,0.92)', color: p.status === 'Em aprovação' ? 'var(--gold-2)' : 'var(--ink)' }}>
                    {p.status === 'Em locação' && <span className="badge dot" style={{ padding: 0, color: 'var(--gold-2)' }}></span>}
                    {p.status}
                  </div>
                </div>
                <div className="col" style={{ gap: 4 }}>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <div className="serif" style={{ fontSize: 22 }}>{p.name}</div>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--ink-3)' }}>{p.id}</div>
                  </div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                    {p.occasion} · {p.size}
                  </div>
                  <div className="row" style={{ justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid var(--line)', marginTop: 4 }}>
                    <div className="col" style={{ gap: 2 }}>
                      <span className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Locações</span>
                      <span className="serif" style={{ fontSize: 18 }}>{p.locacoes.toString().padStart(2, '0')}</span>
                    </div>
                    <div className="col" style={{ gap: 2, alignItems: 'flex-end' }}>
                      <span className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Comissão</span>
                      <span className="serif" style={{ fontSize: 18 }}>R$ {Math.round(p.price * 0.2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.PartnerDashboard = PartnerDashboard;
window.PartnerHeader = PartnerHeader;
