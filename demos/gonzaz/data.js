// Contenu du site Gonza'z (démo) — en 3 langues : nl (par défaut), en, fr.
// Les modifications faites dans admin.html sont enregistrées dans le navigateur (localStorage)
// et remplacent ces valeurs. Dans la vraie version, ce serait un fichier/base sur le serveur.
const T3 = (nl, en, fr) => ({ nl, en, fr });

window.GZ_LANGS = ['nl', 'en', 'fr'];
window.GZ_DEFAULT = {
  annonce: T3('', '', ''),
  slogan: T3(
    'Geïnspireerd door Latin Jazz, aangeraakt door Caribisch bloed. Van je ochtendkoffie tot de laatste cocktail, in het licht van de neon.',
    'Inspired by Latin Jazz, touched by Caribbean blood. From your morning coffee to the last cocktail, under the neon glow.',
    'Inspiré par le Latin Jazz, touché par le sang caribéen. Du café du matin au dernier cocktail, sous la lumière du néon.'),
  histoire1: T3(
    "Bij Gonza'z draait alles om warmte: speciality coffee in de ochtend, Latijns-Amerikaanse tapas om te delen 's middags en huisgemaakte cocktails wanneer de zon ondergaat.",
    "At Gonza'z it's all about warmth: speciality coffee in the morning, Latin tapas to share at lunchtime and house-made cocktails when the sun goes down.",
    "Chez Gonza'z, tout tourne autour de la chaleur : café de spécialité le matin, tapas latino à partager à midi et cocktails faits maison quand le soleil se couche."),
  histoire2: T3(
    'Vergulde spiegels, oude luiken, een saxofoon aan de muur en Latin Jazz op de achtergrond: kom binnen als gast, vertrek als amigo.',
    'Gilded mirrors, old shutters, a saxophone on the wall and Latin Jazz in the background: come in as a guest, leave as an amigo.',
    'Miroirs dorés, volets anciens, saxophone au mur et Latin Jazz en fond : entrez en client, repartez en amigo.'),
  citation: T3('La vida comienza después de un café', 'La vida comienza después de un café', 'La vida comienza después de un café'),
  adresse: 'Donkersteeg\n9000 Gent',
  instagram: 'https://www.instagram.com/gonzaz_bar/',
  carte: [
    { nom: T3('Ontbijt', 'Breakfast', 'Petit-déj'), photo: 'img/petit-dej.jpg', plats: [
      { n: T3("Tostada Gonza'z", "Tostada Gonza'z", "Tostada Gonza'z"), p: '11,50',
        d: T3('Geroosterd brood, spiegelei, krokante spek, scheuten', 'Toasted bread, fried egg, crispy bacon, micro greens', 'Pain grillé, œuf au plat, bacon croustillant, jeunes pousses') },
      { n: T3('Huisgemaakt bananenbrood', 'Homemade banana bread', 'Banana bread maison'), p: '4,50',
        d: T3('Smeuïg, met chocoladestukjes', 'Moist, with chocolate chips', 'Moelleux, aux pépites de chocolat') },
      { n: T3('Croissant', 'Croissant', 'Croissant'), p: '2,50', d: T3('Roomboter', 'All butter', 'Pur beurre') },
      { n: T3('Chocoladekoek', 'Pain au chocolat', 'Pain au chocolat'), p: '2,80', d: T3('Voor bij de ochtendkoffie', 'For your morning coffee', 'La chocoladekoek du matin') },
      { n: T3('Gezond sapje', 'Fresh juice', 'Jus frais'), p: '5,00', d: T3('Vers geperst, volgens het seizoen', 'Freshly squeezed, seasonal', 'Pressé minute, selon la saison') } ] },
    { nom: T3('Koffie', 'Coffee', 'Café'), photo: 'img/cafe-frappe.jpg', plats: [
      { n: T3('Espresso', 'Espresso', 'Espresso'), p: '2,80', d: T3('Speciality coffee', 'Speciality coffee', 'Café de spécialité') },
      { n: T3('Flat White', 'Flat White', 'Flat White'), p: '4,20', d: T3('Dubbele shot, zijdezachte melk', 'Double shot, silky milk', 'Double shot, lait soyeux') },
      { n: T3('Matcha latte', 'Matcha latte', 'Matcha latte'), p: '4,80', d: T3('Melk naar keuze: kokos, amandel of haver', 'Choice of milk: coconut, almond or oat', 'Lait au choix : coco, amande ou avoine') },
      { n: T3('Chai latte', 'Chai latte', 'Chai latte'), p: '4,50', d: T3('Kruidig en verwarmend', 'Spiced and comforting', 'Épicé et réconfortant') },
      { n: T3('Café frappé', 'Café frappé', 'Café frappé'), p: '5,50', d: T3('IJskoud, chocolade en kaneel', 'Iced, chocolate and cinnamon', 'Glacé, chocolat et cannelle') } ] },
    { nom: T3('Tapas', 'Tapas', 'Tapas'), photo: 'img/empanadas.jpg', plats: [
      { n: T3('Empanadas & salsas', 'Empanadas & salsas', 'Empanadas & salsas'), p: '8,00',
        d: T3('Krokant, met drie huisgemaakte sauzen en limoen', 'Crispy, with three house sauces and lime', 'Croustillantes, avec trois sauces maison et citron vert') },
      { n: T3('Papas rellenas', 'Papas rellenas', 'Papas rellenas'), p: '7,50',
        d: T3('Gevulde aardappelen, looksaus', 'Stuffed potatoes, garlic sauce', "Pommes de terre farcies, sauce à l'ail") },
      { n: T3('Gevulde patacones', 'Loaded patacones', 'Patacones garnis'), p: '9,00',
        d: T3('Krokante bakbanaan, guacamole en gestoofd vlees', 'Crispy plantain, guacamole and slow-cooked meat', 'Banane plantain croustillante, guacamole et viande mijotée') },
      { n: T3('Pimientos de Padrón', 'Pimientos de Padrón', 'Pimientos de Padrón'), p: '6,50',
        d: T3('Gebakken, fleur de sel en limoen', 'Pan-fried, sea salt and lime', 'Poêlés, fleur de sel et citron vert') },
      { n: T3('Kippentenders', 'Chicken tenders', 'Tenders de poulet'), p: '9,50',
        d: T3('Gepaneerd, huisgemaakte koriandersaus', 'Breaded, house coriander sauce', 'Panés, sauce maison à la coriandre') },
      { n: T3('Driekleurige nachos', 'Tricolour nachos', 'Nachos tricolores'), p: '8,00',
        d: T3('Guacamole, room, rode ui, koriander', 'Guacamole, sour cream, red onion, coriander', 'Guacamole, crème, oignon rouge, coriandre') } ] },
    { nom: T3('Cocktails', 'Cocktails', 'Cocktails'), photo: 'img/espresso-martini.jpg', plats: [
      { n: T3('Espresso Martini', 'Espresso Martini', 'Espresso Martini'), p: '11,50',
        d: T3('Vodka, verse espresso, koffielikeur', 'Vodka, fresh espresso, coffee liqueur', 'Vodka, espresso frais, liqueur de café') },
      { n: T3('Mojito', 'Mojito', 'Mojito'), p: '10,00',
        d: T3('Rum, munt, limoen, rietsuiker', 'Rum, mint, lime, cane sugar', 'Rhum, menthe, citron vert, sucre de canne') },
      { n: T3('Piña Colada', 'Piña Colada', 'Piña Colada'), p: '11,00', d: T3('Rum, ananas, kokos', 'Rum, pineapple, coconut', 'Rhum, ananas, coco') },
      { n: T3('Caipirinha', 'Caipirinha', 'Caipirinha'), p: '10,50',
        d: T3('Cachaça, limoen, rietsuiker', 'Cachaça, lime, cane sugar', 'Cachaça, citron vert, sucre de canne') } ] },
    { nom: T3('Wijnen', 'Wines', 'Vins'), photo: 'img/vin-rouge.jpg', plats: [
      { n: T3('Notas del Medievo — Rioja', 'Notas del Medievo — Rioja', 'Notas del Medievo — Rioja'), p: '5,50 / glas',
        d: T3('Rood, Rioja DOCa', 'Red, Rioja DOCa', 'Rouge, Rioja DOCa') },
      { n: T3('Notas del Medievo — Tempranillo Blanco', 'Notas del Medievo — Tempranillo Blanco', 'Notas del Medievo — Tempranillo Blanco'), p: '5,50 / glas',
        d: T3('Wit, Rioja DOCa', 'White, Rioja DOCa', 'Blanc, Rioja DOCa') },
      { n: T3('Fles', 'Bottle', 'Bouteille'), p: '26,00', d: T3('Rood of wit', 'Red or white', 'Rouge ou blanc') } ] }
  ],
  // jour 0 = lundi
  horaires: [
    { ouvert: false, de: '08:30', a: '18:00' },
    { ouvert: true, de: '08:30', a: '18:00' },
    { ouvert: true, de: '08:30', a: '18:00' },
    { ouvert: true, de: '08:30', a: '00:00' },
    { ouvert: true, de: '08:30', a: '01:00' },
    { ouvert: true, de: '09:00', a: '01:00' },
    { ouvert: true, de: '09:00', a: '17:00' }
  ],
  affiche: 'img/affiche-live.jpg',
  events: [
    { n: 'Tony Ávila', d: T3('Cubaanse muzikant, rechtstreeks uit Cuba', 'Cuban musician, straight from Cuba', 'Musicien cubain, venu tout droit de Cuba') },
    { n: 'Flamenco', d: T3('Ritme · passie · soul', 'Rhythm · passion · soul', 'Rythme · passion · soul') },
    { n: 'Pragana', d: T3('Live duo — bossa, samba, MPB', 'Live duo — bossa, samba, MPB', 'Duo live — bossa, samba, MPB') },
    { n: 'Boleros & more', d: T3('Boleros, ballads en nog veel meer', 'Boleros, ballads and more', 'Boleros, ballades et plus encore') },
    { n: 'Mi Tierra', d: T3('Live duo — traditionele Cubaanse muziek', 'Live duo — traditional Cuban music', 'Duo live — musique cubaine traditionnelle') }
  ],
  galerie: [
    'img/tableau-neon.jpg', 'img/patacones.jpg', 'img/miroir-verres.jpg', 'img/padron.jpg',
    'img/banana-bread.jpg', 'img/salle.jpg', 'img/poulet.jpg', 'img/mur-miroirs.jpg', 'img/papas-rellenas.jpg'
  ]
};

window.GZ_DAYS = {
  nl: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  fr: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
};

window.GZ_KEY = 'gonzaz_demo_v2';
window.GZ_load = function () {
  const base = JSON.parse(JSON.stringify(window.GZ_DEFAULT));
  try {
    const s = localStorage.getItem(window.GZ_KEY);
    if (s) return Object.assign(base, JSON.parse(s));
  } catch (e) {}
  return base;
};
window.GZ_save = function (data) {
  localStorage.setItem(window.GZ_KEY, JSON.stringify(data));
};
window.GZ_reset = function () {
  try { localStorage.removeItem(window.GZ_KEY); } catch (e) {}
};
// Texte dans la langue demandée (avec repli sur les autres langues si vide)
window.GZ_tr = function (v, lang) {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  return v[lang] || v.nl || v.en || v.fr || '';
};
window.GZ_esc = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
};
