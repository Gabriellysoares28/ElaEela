/* global React, PartnerHeader, Hair, Icon, MarkLabel, DressPh */

function PartnerSubmit() {
  const [step, setStep] = React.useState(2);
  const [occasion, setOccasion] = React.useState('Casamento');
  const [tone, setTone] = React.useState('rose');
  const [photos, setPhotos] = React.useState(2);
  const [price, setPrice] = React.useState(420);

  const steps = [
    { n: '01', label: 'Sobre a peça' },
    { n: '02', label: 'Fotos' },
    { n: '03', label: 'Preço & condições' },
    { n: '04', label: 'Revisão' },
  ];

  return (
    <div className="ela col" style={{ width: 1440, minHeight: 1100 }}>
      <PartnerHeader active="cadastrar" />

      {/* Title */}
      <div className="col" style={{ padding: '40px 32px 24px', gap: 12, borderBottom: '1px solid var(--ink)' }}>
        <MarkLabel>Modelo colaborativo · cadastro de peça</MarkLabel>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h1 className="serif" style={{ fontSize: 56, fontWeight: 300, margin: 0, letterSpacing: '-0.02em', lineHeight: 1 }}>
            Confie sua peça<br />
            <em style={{ color: 'var(--gold)' }}>ao nosso armário.</em>
          </h1>
          <div className="row" style={{ gap: 24 }}>
            {steps.map((s, i) => (
              <div key={s.n} className="row" style={{ gap: 10, alignItems: 'baseline', opacity: i + 1 === step ? 1 : 0.45 }}>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: i + 1 === step ? 'var(--gold-2)' : 'var(--ink-3)' }}>{s.n}</span>
                <span className="serif" style={{ fontSize: 18 }}>{s.label}</span>
                {i < steps.length - 1 && <span style={{ color: 'var(--ink-4)', marginLeft: 12 }}>—</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row" style={{ padding: '40px 32px', gap: 56, alignItems: 'flex-start' }}>
        {/* Left form */}
        <div className="col" style={{ flex: 1, gap: 36 }}>
          {/* Step 01 */}
          <div className="col" style={{ gap: 20 }}>
            <div className="row" style={{ gap: 12, alignItems: 'baseline' }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--gold-2)' }}>01</span>
              <h2 className="serif" style={{ fontSize: 28, fontWeight: 300, margin: 0 }}>Conte sobre o vestido</h2>
            </div>

            <div className="row" style={{ gap: 24 }}>
              <div className="field" style={{ flex: 2 }}>
                <span className="field-label">Como você o chama?</span>
                <input className="field-input" defaultValue="Estela" />
              </div>
              <div className="field" style={{ flex: 1 }}>
                <span className="field-label">Tamanho</span>
                <input className="field-input" defaultValue="40" />
              </div>
            </div>

            <div className="col" style={{ gap: 10 }}>
              <span className="field-label">Ocasião</span>
              <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
                {['Casamento', 'Madrinha', 'Formatura', 'Black Tie', 'Festa', 'Infantil'].map(o => (
                  <button key={o} className={`chip ${occasion === o ? 'active' : ''}`} onClick={() => setOccasion(o)}>{o}</button>
                ))}
              </div>
            </div>

            <div className="row" style={{ gap: 24 }}>
              <div className="field" style={{ flex: 1 }}>
                <span className="field-label">Tecido principal</span>
                <input className="field-input" defaultValue="Crepe de seda" />
              </div>
              <div className="field" style={{ flex: 1 }}>
                <span className="field-label">Comprimento</span>
                <input className="field-input" defaultValue="Longo" />
              </div>
            </div>

            <div className="field">
              <span className="field-label">História da peça <span style={{ color: 'var(--ink-4)', textTransform: 'none', letterSpacing: 0, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13 }}>(opcional · vai com ele)</span></span>
              <textarea className="field-input" rows={2} style={{ fontSize: 16, lineHeight: 1.5, fontFamily: 'var(--serif)', resize: 'none' }}
                defaultValue="Usei no casamento da minha irmã, na fazenda. Foi uma noite leve — quero que ele rode mais." />
            </div>
          </div>

          <Hair />

          {/* Step 02 — Photos with editorial uploader */}
          <div className="col" style={{ gap: 20 }}>
            <div className="row" style={{ gap: 12, alignItems: 'baseline' }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--gold-2)' }}>02</span>
              <h2 className="serif" style={{ fontSize: 28, fontWeight: 300, margin: 0 }}>Fotografias</h2>
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)', marginLeft: 'auto' }}>{photos}/4 · mínimo 3</span>
            </div>
            <div className="row" style={{ gap: 12 }}>
              {[
                { l: 'Frente · corpo inteiro', filled: true },
                { l: 'Costas', filled: true },
                { l: 'Detalhe · tecido', filled: false },
                { l: 'Etiqueta', filled: false },
              ].map((slot, i) => (
                <div key={i}
                  onClick={() => i >= photos && setPhotos(p => Math.min(4, p + 1))}
                  style={{ flex: 1, aspectRatio: '3/4', position: 'relative', cursor: 'pointer', border: slot.filled ? 'none' : '1px dashed var(--line-2)', background: slot.filled ? 'var(--paper-2)' : 'transparent' }}>
                  {slot.filled ? (
                    <div className={`dress-ph tone-${tone}`} style={{ height: '100%' }}>
                      <div className="ph-meta" style={{ fontSize: 9 }}>
                        <span>{String(i + 1).padStart(2, '0')}</span>
                        <span>4032×6048</span>
                      </div>
                      <div className="ph-name serif" style={{ fontSize: 14 }}>{slot.l}</div>
                      <div className="ph-meta" style={{ paddingTop: 0, fontSize: 9 }}>
                        <span>—</span>
                        <span>★</span>
                      </div>
                    </div>
                  ) : (
                    <div className="col" style={{ alignItems: 'center', justifyContent: 'center', height: '100%', gap: 10, color: 'var(--ink-3)' }}>
                      <Icon name="upload" size={20} />
                      <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', textAlign: 'center', padding: '0 12px' }}>{slot.l}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="row" style={{ gap: 14, padding: '14px 16px', background: 'var(--paper-2)', alignItems: 'center' }}>
              <Icon name="sparkle" size={16} stroke="var(--gold-2)" />
              <div style={{ flex: 1, fontSize: 13, color: 'var(--ink-2)' }}>
                <span className="serif" style={{ fontStyle: 'italic' }}>Ajuda da nossa IA: </span>
                clareamos o fundo e geramos o try-on automaticamente. Você revisa antes de publicar.
              </div>
              <button className="btn ghost sm">Aplicar</button>
            </div>
          </div>

          <Hair />

          {/* Step 03 — Pricing */}
          <div className="col" style={{ gap: 20 }}>
            <div className="row" style={{ gap: 12, alignItems: 'baseline' }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--gold-2)' }}>03</span>
              <h2 className="serif" style={{ fontSize: 28, fontWeight: 300, margin: 0 }}>Preço sugerido</h2>
            </div>

            <div className="col" style={{ gap: 14, padding: '24px 28px', background: 'var(--paper-2)' }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="field-label">Locação por 4 dias</span>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-2)' }}>★ Faixa sugerida pela curadoria</span>
              </div>
              <div className="row" style={{ alignItems: 'baseline', gap: 14 }}>
                <span className="serif" style={{ fontSize: 64, fontWeight: 300, letterSpacing: '-0.02em' }}>R$ {price}</span>
                <input type="range" min={300} max={600} step={10} value={price} onChange={e => setPrice(+e.target.value)}
                  style={{ flex: 1, accentColor: 'var(--ink)' }} />
              </div>
              <div className="row" style={{ justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                <span>R$ 320 · piso</span>
                <span style={{ color: 'var(--gold-2)' }}>R$ 380–460 · faixa ideal</span>
                <span>R$ 600 · teto</span>
              </div>
              <Hair />
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div className="col" style={{ gap: 6 }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Sua comissão por locação</span>
                  <span className="serif" style={{ fontSize: 28 }}>R$ {Math.round(price * 0.2)}</span>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: 'var(--ink-4)' }}>20% via PIX · em até 5 dias úteis</span>
                </div>
                <div className="col" style={{ gap: 6, alignItems: 'flex-end' }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Projeção 6 meses</span>
                  <span className="serif" style={{ fontSize: 28, color: 'var(--gold-2)' }}>R$ {Math.round(price * 0.2 * 7)}</span>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: 'var(--ink-4)' }}>~7 locações estimadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right preview */}
        <div className="col" style={{ flex: '0 0 380px', gap: 20, position: 'sticky', top: 24 }}>
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
            <MarkLabel>Pré-visualização ao vivo</MarkLabel>
            <span className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Vista da cliente</span>
          </div>
          <div className="col" style={{ gap: 14, padding: '20px 22px', border: '1px solid var(--line)', background: 'var(--paper)' }}>
            <DressPh name="Estela" code="AT-061" tone={tone} size="40" occasion={occasion} height={420} />
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="col" style={{ gap: 4 }}>
                <div className="serif" style={{ fontSize: 24 }}>Estela</div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{occasion} · Tam 40</div>
              </div>
              <div className="serif" style={{ fontSize: 22 }}>R$ {price}</div>
            </div>
            <div className="row" style={{ gap: 6, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-2)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
              de Beatriz L.
            </div>
          </div>

          <div className="col" style={{ gap: 8 }}>
            <span className="field-label">Tom de placeholder (preview)</span>
            <div className="row" style={{ gap: 6 }}>
              {['rose', 'cream', 'sage', 'noir', 'ink'].map(t => (
                <button key={t} onClick={() => setTone(t)}
                  className={`chip ${tone === t ? 'active' : ''}`}
                  style={{ minWidth: 48, justifyContent: 'center', textTransform: 'capitalize' }}>{t}</button>
              ))}
            </div>
          </div>

          <div className="col" style={{ gap: 10, padding: '16px 18px', background: 'var(--ink)', color: 'var(--paper)' }}>
            <MarkLabel style={{ color: 'var(--gold-soft)' }}>Como será aprovado</MarkLabel>
            <div className="col" style={{ gap: 6, fontSize: 13, lineHeight: 1.5 }}>
              {['Curadoria revisa em até 48h', 'Atelier higieniza e fotografa', 'Vai ao catálogo com seu nome', 'PIX automático a cada locação'].map((t, i) => (
                <div key={i} className="row" style={{ gap: 10, alignItems: 'flex-start' }}>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--gold-soft)', marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'var(--paper-2)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col" style={{ gap: 8 }}>
            <button className="btn">Enviar para curadoria <Icon name="arrow" size={14} /></button>
            <button className="btn ghost">Salvar rascunho</button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.PartnerSubmit = PartnerSubmit;
