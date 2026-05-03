/* global React */
// ELA & ELA — shared atomic components

const Wordmark = ({ size = 28, sub = true, color }) => (
  <div className="col" style={{ gap: 4, color: color || 'var(--ink)' }}>
    <div className="wordmark" style={{ fontSize: size }}>
      <span>ela</span>
      <span className="amp">&</span>
      <span>ela</span>
    </div>
    {sub && <div className="wordmark-sub">Atelier de Locação · est. 2024</div>}
  </div>
);

const Hair = ({ vertical, color = 'var(--line)', length, style }) =>
  vertical ? (
    <div style={{ width: 1, height: length || '100%', background: color, ...style }} />
  ) : (
    <div style={{ height: 1, width: length || '100%', background: color, ...style }} />
  );

const MarkLabel = ({ children, style }) => (
  <div className="row" style={{ gap: 0, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)', ...style }}>
    <span className="mark-line" />
    {children}
  </div>
);

// Editorial dress placeholder, with name + small meta line
const DressPh = ({ name, code, tone = 'bone', size, occasion, height = 360, style }) => (
  <div className={`dress-ph tone-${tone}`} style={{ height, ...style }}>
    <div className="ph-meta">
      <span>{code}</span>
      <span>{size}</span>
    </div>
    <div className="ph-name serif">{name}</div>
    <div className="ph-meta" style={{ paddingTop: 0 }}>
      <span>{occasion}</span>
      <span>·</span>
    </div>
  </div>
);

// Wordmark variant for header
const HeaderMark = () => (
  <div className="row" style={{ gap: 14, alignItems: 'baseline' }}>
    <div className="wordmark" style={{ fontSize: 22 }}>
      <span>ela</span>
      <span className="amp">&</span>
      <span>ela</span>
    </div>
  </div>
);

// Filter chip row
const Chips = ({ items, active, onChange, style }) => (
  <div className="row" style={{ gap: 8, flexWrap: 'wrap', ...style }}>
    {items.map(it => {
      const v = typeof it === 'string' ? it : it.value;
      const l = typeof it === 'string' ? it : it.label;
      return (
        <button
          key={v}
          className={`chip ${active === v ? 'active' : ''}`}
          onClick={() => onChange && onChange(v)}
        >
          {l}
        </button>
      );
    })}
  </div>
);

// Inline icon set (stroke, 1px, very minimal — never decorative)
const Icon = ({ name, size = 16, stroke = 'currentColor', strokeWidth = 1.4, style }) => {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', style };
  switch (name) {
    case 'search':
      return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case 'heart':
      return <svg {...props}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg>;
    case 'bag':
      return <svg {...props}><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>;
    case 'cal':
      return <svg {...props}><rect x="3.5" y="5" width="17" height="15.5" rx="1"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3"/></svg>;
    case 'arrow':
      return <svg {...props}><path d="M5 12h14m-5-5 5 5-5 5"/></svg>;
    case 'arrow-up':
      return <svg {...props}><path d="M12 19V5m-5 5 5-5 5 5"/></svg>;
    case 'check':
      return <svg {...props}><path d="m5 12 4 4L19 6"/></svg>;
    case 'plus':
      return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case 'menu':
      return <svg {...props}><path d="M3.5 7h17M3.5 12h17M3.5 17h17"/></svg>;
    case 'close':
      return <svg {...props}><path d="m6 6 12 12M18 6 6 18"/></svg>;
    case 'eye':
      return <svg {...props}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>;
    case 'wand':
      return <svg {...props}><path d="m4 20 12-12M14 4l2 2M18 6l2 2M14 10l2-2"/></svg>;
    case 'pix':
      return <svg {...props}><path d="M5 12 12 5l7 7-7 7-7-7Z"/><path d="M9 12h6"/></svg>;
    case 'whats':
      return <svg {...props}><path d="M4 20 5.5 15a8 8 0 1 1 3.5 3.5L4 20Z"/><path d="M9 10c.5 2 1.5 3 3.5 4 .8-.4 1.4-1.1 1.5-2"/></svg>;
    case 'upload':
      return <svg {...props}><path d="M12 16V4m-5 5 5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/></svg>;
    case 'sparkle':
      return <svg {...props}><path d="M12 4v6M12 14v6M4 12h6M14 12h6"/></svg>;
    case 'user':
      return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-7 8-7s7 2.5 8 7"/></svg>;
    case 'globe':
      return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'grid':
      return <svg {...props}><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>;
    default:
      return null;
  }
};

// Header for client-facing screens (desktop)
const ClientHeader = ({ active = 'catalogo' }) => (
  <div className="col" style={{ background: 'var(--paper)' }}>
    <div className="row" style={{ justifyContent: 'space-between', padding: '14px 32px', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)', borderBottom: '1px solid var(--line)' }}>
      <span>Frete grátis em retirada · São Paulo</span>
      <div className="row" style={{ gap: 24 }}>
        <span>+55 11 9 9876-5432</span>
        <span>seja parceira</span>
        <span>PT · BR</span>
      </div>
    </div>
    <div className="row" style={{ justifyContent: 'space-between', padding: '20px 32px', alignItems: 'center' }}>
      <div className="row" style={{ gap: 28, fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {['Catálogo', 'Ocasiões', 'Infantil', 'Como funciona'].map(x => (
          <span key={x} style={{ color: x.toLowerCase() === active ? 'var(--ink)' : 'var(--ink-3)', cursor: 'pointer' }}>{x}</span>
        ))}
      </div>
      <HeaderMark />
      <div className="row" style={{ gap: 18, color: 'var(--ink-2)' }}>
        <Icon name="search" size={18} />
        <Icon name="user" size={18} />
        <Icon name="heart" size={18} />
        <div className="row" style={{ gap: 6 }}>
          <Icon name="bag" size={18} />
          <span className="mono" style={{ fontSize: 10, letterSpacing: '0.18em' }}>(2)</span>
        </div>
      </div>
    </div>
    <Hair />
  </div>
);

Object.assign(window, { Wordmark, Hair, MarkLabel, DressPh, HeaderMark, Chips, Icon, ClientHeader });
