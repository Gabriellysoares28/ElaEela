## ElaEela

ElaEela é uma plataforma web inovadora para locação colaborativa de vestidos de festa. O projeto conecta parceiras e clientes em um ambiente digital, onde peças são disponibilizadas em um armário coletivo e as parceiras recebem comissão por cada locação.

### Funcionalidades principais
- Home com carrossel editorial e campanhas
- Catálogo com curadoria e filtros
- Detalhe do vestido com try-on virtual e calendário de disponibilidade
- Cronograma da locação (timeline pós-reserva)
- Cadastro de peça para parceiras (multi-step)
- Painel da parceira com ganhos e repasses
- Telas otimizadas para mobile

### Visual e tecnologia
O design segue uma linha editorial minimalista, com tipografia moderna e paleta sofisticada. O projeto utiliza HTML, React 18 (via UMD), Babel Standalone para JSX no browser e Google Fonts.

### Estrutura do projeto
```
.
├── index.html               # Entry point
├── styles.css               # Tokens de design + estilos base
├── design-canvas.jsx        # Wrapper do design canvas (pan/zoom de artboards)
├── tweaks-panel.jsx         # Painel de tweaks ao vivo
└── components/
    ├── atoms.jsx            # Wordmark, ícones, header, chips, placeholders
    ├── data.jsx             # Dataset de vestidos
    ├── home.jsx             # Home com hero carrossel
    ├── catalog.jsx          # Catálogo desktop
    ├── detail.jsx           # Detalhe do vestido + try-on
    ├── timeline.jsx         # Cronograma da locação
    ├── partner-submit.jsx   # Cadastro de peça (parceira)
    ├── partner-dashboard.jsx# Painel da parceira
    └── mobile.jsx           # Telas mobile
```

---

© ElaEela · São Paulo · 2026
