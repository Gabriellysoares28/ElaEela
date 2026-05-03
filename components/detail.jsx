/* global React, ClientHeader, DressPh, Hair, Icon, MarkLabel */

function DetailDesktop() {
  const [tryon, setTryon] = React.useState('flat'); // flat | model | detail
  const [size, setSize] = React.useState('38');
  const [selDay, setSelDay] = React.useState(14);
  const dress = { id: 'AT-007', name: 'Selene', tone: 'noir', size: '38', occasion: 'Black Tie', price: 520, owner: 'Beatriz L.' };

  // Calendar — Maio 2026, friday=1 start (just illustrative)
  const days = Array.from({ length: 35 }, (_, i) => i - 4); // -4..-3..-2..-1..0..1..2..30
  const booked = new Set([3, 4, 9, 10, 22, 23]);
  const today = 8;

  return (
    <div className="ela col" style={{ width: 1440, minHeight: 1100 }}>
      <ClientHeader active="catálogo" />

      {/* Breadcrumb */}
      <div className="row" style={{ padding: '18px 32px', gap: 8, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)', borderBottom: '1px solid var(--line)' }}>
        <span>Catálogo</span><span>/</span><span>Black Tie</span><span>/</span><span style={{ color: 'var(--ink)' }}>{dress.name}</span>
      </div>

      <div className="row" style={{ padding: '40px 32px', gap: 48, alignItems: 'flex-start' }}>
        {/* Left: visual stage */}
        <div className="col" style={{ flex: '0 0 720px', gap: 16 }}>
          <div style={{ position: 'relative', height: 820, background: 'var(--paper-2)', overflow: 'hidden' }}>
            {tryon === 'flat' && <DressPh {...dress} height={820} style={{ height: 820 }} />}
            {tryon === 'model' && (
              <div className="tryon-stage" style={{ width: '100%', height: '100%', position: 'relative' }}>
                <div className="silhouette" />
                <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                  <span>★ Try-on virtual · IA</span>
                  <span>Modelo 1.68m · 38</span>
                </div>
                <div style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--ink)' }}>
                  como ficaria em <em style={{ color: 'var(--gold)' }}>você</em>
                </div>
              </div>
            )}
            {tryon === 'detail' && (
              <div className="dress-ph tone-noir" style={{ height: '100%' }}>
                <div className="ph-meta">
                  <span>Detalhe · costura</span>
                  <span>4× zoom</span>
                </div>
                <div className="ph-name serif">tecido · zibeline</div>
                <div className="ph-meta" style={{ paddingTop: 0 }}>
                  <span>seda 100%</span>
                  <span>—</span>
                </div>
              </div>
            )}

            {/* Stage controls */}
            <div className="row" style={{ position: 'absolute', bottom: 16, right: 16, gap: 6, background: 'rgba(250,247,242,0.94)', padding: 6 }}>
              {[
                { v: 'flat', label: 'Peça' },
                { v: 'model', label: 'Try-on', icon: 'wand' },
                { v: 'detail', label: 'Detalhe' },
              ].map(o => (
                <button key={o.v} onClick={() => setTryon(o.v)}
                  className="row"
                  style={{ gap: 6, padding: '8px 12px', border: 'none', background: tryon === o.v ? 'var(--ink)' : 'transparent', color: tryon === o.v ? 'var(--paper)' : 'var(--ink-2)', fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer' }}>
                  {o.icon && <Icon name={o.icon} size={12} />}
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* Thumbs */}
          <div className="row" style={{ gap: 8 }}>
            {['noir', 'noir', 'noir', 'noir'].map((t, i) => (
              <div key={i} style={{ flex: 1, height: 110, background: 'var(--paper-2)', cursor: 'pointer', position: 'relative', border: i === 0 ? '1px solid var(--ink)' : '1px solid transparent' }}>
                <div className={`dress-ph tone-${t}`} style={{ height: '100%' }}>
                  <div className="ph-meta" style={{ fontSize: 8 }}>
                    <span>0{i + 1}</span>
                    <span>—</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: info */}
        <div className="col" style={{ flex: 1, gap: 28, paddingTop: 8 }}>
          <div className="col" style={{ gap: 12 }}>
            <div className="row" style={{ gap: 10, alignItems: 'center' }}>
              <span className="badge gold">★ Em alta</span>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{dress.id}</span>
            </div>
            <h1 className="serif" style={{ fontSize: 64, fontWeight: 300, lineHeight: 0.95, margin: 0, letterSpacing: '-0.02em' }}>{dress.name}</h1>
            <div className="serif" style={{ fontSize: 20, color: 'var(--ink-3)', fontStyle: 'italic' }}>vestido longo · zibeline · {dress.occasion.toLowerCase()}</div>
          </div>

          {/* Owner card */}
          <div className="row" style={{ gap: 14, padding: '16px 18px', background: 'var(--paper-2)', alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,var(--rose),var(--gold-soft))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--ink)' }}>B</div>
            <div className="col" style={{ gap: 2, flex: 1 }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Confiado por</div>
              <div style={{ fontSize: 15 }}>{dress.owner} · 12 locações · ★ 4.9</div>
            </div>
            <Icon name="arrow" size={16} stroke="var(--ink-3)" />
          </div>

          {/* Price + size */}
          <div className="col" style={{ gap: 14 }}>
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div className="col" style={{ gap: 4 }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Locação · 4 dias</div>
                <div className="row" style={{ gap: 12, alignItems: 'baseline' }}>
                  <div className="serif" style={{ fontSize: 56, lineHeight: 1, fontWeight: 300 }}>R$ {dress.price}</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--gold-2)' }}>+ R$ 156 sinal PIX</div>
                </div>
              </div>
            </div>
            <Hair />
            <div className="col" style={{ gap: 10 }}>
              <MarkLabel>Tamanho</MarkLabel>
              <div className="row" style={{ gap: 8 }}>
                {['34', '36', '38', '40'].map(s => (
                  <button key={s} className={`chip ${size === s ? 'active' : ''}`} onClick={() => setSize(s)} style={{ minWidth: 56, justifyContent: 'center' }}>{s}</button>
                ))}
                <button className="chip" style={{ borderStyle: 'dashed' }}>Ajuste +</button>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="col" style={{ gap: 12 }}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <MarkLabel>Disponibilidade</MarkLabel>
              <div className="row" style={{ gap: 16, fontFamily: 'var(--sans)', fontSize: 11 }}>
                <span style={{ color: 'var(--ink-3)' }}>‹ abril</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>maio · 2026</span>
                <span style={{ color: 'var(--ink-3)' }}>junho ›</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
              {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                <div key={i} className="mono" style={{ background: 'var(--paper-2)', padding: '8px 0', textAlign: 'center', fontSize: 10, letterSpacing: '0.18em', color: 'var(--ink-3)' }}>{d}</div>
              ))}
              {days.map((d, i) => {
                const muted = d <= 0 || d > 31;
                const display = muted ? (d <= 0 ? 30 + d : d - 31) : d;
                const isBooked = booked.has(d);
                const isSel = d === selDay;
                const isRange = d > selDay && d <= selDay + 3 && !muted;
                const isToday = d === today;
                return (
                  <div
                    key={i}
                    className={`cal-day ${muted ? 'muted' : ''} ${isBooked ? 'booked' : ''} ${isSel ? 'selected' : ''} ${isRange ? 'range' : ''} ${isToday ? 'today' : ''}`}
                    style={{ background: isSel ? 'var(--ink)' : isRange ? 'var(--paper-3)' : 'var(--paper)' }}
                    onClick={() => !muted && !isBooked && setSelDay(d)}
                  >
                    {display}
                  </div>
                );
              })}
            </div>
            <div className="row" style={{ gap: 16, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
              <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--ink)', marginRight: 6 }} />retirada</span>
              <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--paper-3)', marginRight: 6 }} />em uso</span>
              <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--paper-2)', marginRight: 6, textDecoration: 'line-through' }} />reservado</span>
            </div>
          </div>

          {/* CTA */}
          <div className="col" style={{ gap: 10 }}>
            <button className="btn" style={{ padding: '18px 22px', fontSize: 12 }}>
              <Icon name="pix" size={16} />
              Reservar com sinal PIX · R$ 156
              <Icon name="arrow" size={14} />
            </button>
            <div className="row" style={{ gap: 10 }}>
              <button className="btn outline" style={{ flex: 1 }}><Icon name="cal" size={14} />Agendar prova</button>
              <button className="btn ghost" style={{ flex: 1 }}><Icon name="heart" size={14} />Salvar</button>
            </div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)', textAlign: 'center', paddingTop: 4 }}>
              Reserva mantida por 30 minutos · sem cobrança
            </div>
          </div>

          {/* Specs */}
          <div className="col" style={{ gap: 0, borderTop: '1px solid var(--line)' }}>
            {[
              ['Tecido', 'Zibeline de seda 100%'],
              ['Comprimento', 'Longo · 142cm'],
              ['Forro', 'Crepe natural'],
              ['Cuidado', 'Higienização inclusa'],
              ['Peso', '1.2kg'],
            ].map(([k, v]) => (
              <div key={k} className="row" style={{ justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--line)' }}>
                <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{k}</span>
                <span style={{ fontSize: 14 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.DetailDesktop = DetailDesktop;
