/* global React */
// ELA & ELA — dataset of sample dresses (collaborative model — each has owner)

const DRESSES = [
  { id: 'AT-014', name: 'Aurora', tone: 'rose', size: '36-38', occasion: 'Casamento', price: 380, owner: 'Mariana C.', new: true },
  { id: 'AT-007', name: 'Selene', tone: 'noir', size: '38', occasion: 'Black Tie', price: 520, owner: 'Beatriz L.' },
  { id: 'AT-021', name: 'Veronique', tone: 'cream', size: '40', occasion: 'Madrinha', price: 410, owner: 'Joana R.' },
  { id: 'AT-033', name: 'Chiara', tone: 'sage', size: '36', occasion: 'Formatura', price: 360, owner: 'Patrícia M.', hot: true },
  { id: 'AT-002', name: 'Margaux', tone: 'bone', size: '38-40', occasion: 'Casamento', price: 440, owner: 'Helena V.' },
  { id: 'AT-040', name: 'Ondine', tone: 'ink', size: '36', occasion: 'Black Tie', price: 480, owner: 'Camila S.' },
  { id: 'AT-018', name: 'Iris', tone: 'rose', size: '42', occasion: 'Madrinha', price: 390, owner: 'Beatriz L.' },
  { id: 'AT-029', name: 'Theia', tone: 'cream', size: '38', occasion: 'Casamento', price: 460, owner: 'Sofia A.', new: true },
  { id: 'AT-051', name: 'Calista', tone: 'sage', size: '40', occasion: 'Formatura', price: 350, owner: 'Mariana C.' },
  { id: 'AT-046', name: 'Belmira', tone: 'noir', size: '38', occasion: 'Black Tie', price: 540, owner: 'Helena V.' },
  { id: 'AT-035', name: 'Luna', tone: 'bone', size: '36', occasion: 'Casamento', price: 400, owner: 'Joana R.' },
  { id: 'AT-058', name: 'Solange', tone: 'rose', size: '40-42', occasion: 'Madrinha', price: 430, owner: 'Camila S.' },
];

const OCCASIONS = [
  { value: 'todas', label: 'Todas' },
  { value: 'Casamento', label: 'Casamento' },
  { value: 'Madrinha', label: 'Madrinha' },
  { value: 'Formatura', label: 'Formatura' },
  { value: 'Black Tie', label: 'Black Tie' },
  { value: 'Infantil', label: 'Infantil' },
];

window.DRESSES = DRESSES;
window.OCCASIONS = OCCASIONS;
