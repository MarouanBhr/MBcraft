/* ── TRADUCTIONS ── */
const translations = {
  fr: {
    'nav-services': 'Services',
    'nav-method': 'Méthode',
    'nav-portfolio': 'Portfolio',
    'nav-pricing': 'Tarifs',
    'nav-contact': 'Contact',
    'hero-badge': 'Studio · Création web',
    'hero-title': 'Des sites qui<br><em>attirent</em><br>des clients.',
    'hero-desc': 'Nous créons des sites web sur-mesure — vitrines, boutiques en ligne, portfolios — pensés pour convertir vos visiteurs en clients.',
    'hero-btn1': 'Démarrer un projet',
    'hero-btn2': 'Voir nos réalisations',
    'hero-discover': 'Découvrir',
    'section-tag-services': 'Ce que nous proposons',
    'section-title-services': 'Nos<br>services',
    'section-sub-services': 'Des solutions adaptées à chaque besoin, livrées clé en main.',
    's1-name': 'Site Vitrine', 's1-desc': 'Présentez votre activité avec élégance. Un site soigné, rapide et optimisé pour le référencement naturel.',
    's2-name': 'Boutique en ligne', 's2-desc': 'Vendez 24h/24. E-commerce complet avec gestion de stocks, paiement sécurisé et tableaux de bord.',
    's3-name': 'Portfolio & Blog', 's3-desc': 'Mettez en valeur votre travail ou publiez du contenu facilement via une interface d\'administration intuitive.',
    's4-name': 'Landing Page', 's4-desc': 'Une page unique et percutante pour lancer un produit, capturer des leads ou promouvoir un événement.',
    's5-name': 'Refonte & Maintenance', 's5-desc': 'Votre site est vieillissant ? Nous le modernisons, l\'accélérons et assurons son bon fonctionnement dans la durée.',
    's6-name': 'SEO & Analytics', 's6-desc': 'Apparaissez sur Google. Audit, optimisation technique et mise en place du suivi de vos performances.',
    's7-name': 'Logo & identité visuelle', 's7-desc': 'Pas encore de logo ? Nous créons le vôtre : un logo unique, vos couleurs et vos polices, prêts pour votre site, vos réseaux sociaux et vos cartes de visite.', 'opt-logo': 'Logo / identité visuelle',
    'video-sound': 'Activer le son', 'video-mute': 'Couper le son',
    'section-tag-process': 'Comment ça marche',
    'section-title-process': 'Notre<br>méthode',
    'section-sub-process': 'Un processus clair et transparent de la première idée à la mise en ligne.',
    'step1-title': 'Découverte', 'step1-desc': 'Appel gratuit pour comprendre vos objectifs, votre cible et votre budget.',
    'step2-title': 'Devis & Contrat', 'step2-desc': 'Proposition détaillée, planning et signature. Aucune surprise.',
    'step3-title': 'Design', 'step3-desc': 'Maquettes visuelles à valider avant tout développement.',
    'step4-title': 'Développement', 'step4-desc': 'Intégration, tests et accès à un lien de prévisualisation.',
    'step5-title': 'Mise en ligne', 'step5-desc': 'Déploiement, formation et 30 jours de support inclus.',
    'section-tag-portfolio': 'Nos réalisations',
    'section-title-portfolio': 'Portfolio',
    'section-sub-portfolio': 'Nos réalisations — et bientôt la vôtre.',
    'pf5-type': 'Application web · Réservations & panel admin', 'pf1-type': 'Site vitrine · 3D', 'pf2-type': 'Prochain projet', 'pf2-name': 'Votre site ici ?<br>Devis gratuit →',
    'section-tag-pricing': 'Combien ça coûte ?',
    'section-title-pricing': 'Devis gratuit<br><em style="color:var(--or);font-style:italic;">& sans engagement</em>',
    'section-sub-pricing': 'Des prix clairs, sans surprise.',
    'pr-from': 'dès', 'pr-elsewhere': 'Au lieu de', 'pr-btn': 'Demander un devis',
    'pr1-name': 'Essentiel', 'pr1-desc': 'Une page complète : accueil, services, contact et Google Maps. Adaptée au mobile, avec formulaire de contact.',
    'pr2-name': 'Vitrine', 'pr2-desc': 'Jusqu\'à 5 pages, design sur-mesure, référencement Google de base et formation pour modifier vos textes.',
    'pr3-name': 'Boutique', 'pr3-desc': 'Boutique en ligne WooCommerce, jusqu\'à 20 produits, paiement en ligne sécurisé.',
    'pr-note': 'Maintenance en option : 15 €/mois. Nom de domaine et hébergement non inclus.',
    'pricing-banner-title': 'Un simple échange suffit',
    'pricing-banner-desc': 'Décrivez-nous votre projet par message ou par téléphone. Nous vous répondons sous 24h avec une estimation claire, honnête et gratuite. Aucune obligation de suite.',
    'pricing-banner-btn': 'Demander mon devis →',
    'pricing-tag': 'Ce qui influence le prix',
    'p1-name': 'Nombre de pages', 'p1-desc': 'Un site 3 pages (accueil, services, contact) coûte moins cher qu\'un site 15 pages avec blog.',
    'p2-name': 'Fonctionnalités', 'p2-desc': 'Boutique en ligne, système de réservation, espace membre : chaque fonctionnalité ajoutée influence le prix.',
    'p3-name': 'Niveau de design', 'p3-desc': 'Un design simple et efficace ou un site haut de gamme avec animations ? À vous de choisir.',
    'p4-name': 'Contenu fourni', 'p4-desc': 'Si vous fournissez textes et photos, c\'est plus rapide. Sinon nous pouvons vous aider à les créer.',
    'p5-name': 'Délai souhaité', 'p5-desc': 'Un projet urgent demande plus d\'organisation. En général, nous livrons en 2 à 6 semaines.',
    'p6-name': 'Maintenance', 'p6-desc': 'Nous proposons un suivi après livraison : mises à jour, corrections, petites modifications.',
    'section-tag-contact': 'Parlons de votre projet',
    'section-title-contact': 'Contact',
    'section-sub-contact': 'Premier échange gratuit et sans engagement.',
    'contact-title': 'Votre projet mérite un site à la hauteur.',
    'review-btn': 'Laisser un avis Google', 'review-footer': 'Laisser un avis', 'contact-social': 'Suivez-nous', 'contact-desc': 'Que vous ayez une idée précise ou que vous débutiez, nous vous accompagnons de A à Z. Décrivez-nous votre projet et nous vous recontactons sous 24h.',
    'label-firstname': 'Prénom', 'label-lastname': 'Nom', 'label-phone': 'Téléphone', 'label-email': 'Email',
    'label-project': 'Type de projet', 'label-budget': 'Budget indicatif', 'label-message': 'Décrivez votre projet',
    'placeholder-firstname': 'Jean', 'placeholder-lastname': 'Dupont', 'placeholder-email': 'jean@exemple.be',
    'placeholder-message': 'Parlez-nous de votre activité, de vos besoins, de votre délai...',
    'btn-send': 'Envoyer ma demande →',
    'form-sending': 'Envoi en cours…',
    'form-fallback': 'Le formulaire est en maintenance. Appelez-nous ou envoyez un SMS au +32 4 95 94 17 06.',
    'form-success': 'Merci ! Votre demande est bien envoyée. Nous vous répondons sous 24h.',
    'form-error': 'Oups, l\'envoi n\'a pas fonctionné. Réessayez dans un instant.',
    'opt-select': 'Sélectionner...', 'opt-vitrine': 'Site vitrine', 'opt-ecom': 'Boutique e-commerce',
    'opt-portfolio': 'Portfolio / Blog', 'opt-landing': 'Landing page', 'opt-refonte': 'Refonte de site existant',
    'opt-seo': 'Maintenance / SEO', 'opt-other': 'Autre',
    'opt-budget0': 'Sélectionner...', 'opt-budget1': 'Dès 199 € – Essentiel', 'opt-budget2': 'Dès 399 € – Vitrine',
    'opt-budget3': 'Dès 790 € – Boutique', 'opt-budget4': '+ de 799 €', 'opt-budget5': 'À définir',
    'footer-copy': '© 2025 MBCraft — Création de sites web sur-mesure',
    'footer-legal': 'Mentions légales', 'footer-privacy': 'Politique de confidentialité',
  },
  en: {
    'nav-services': 'Services', 'nav-method': 'Method', 'nav-portfolio': 'Portfolio',
    'nav-pricing': 'Pricing', 'nav-contact': 'Contact',
    'hero-badge': 'Studio · Web Design',
    'hero-title': 'Websites that<br><em>attract</em><br>customers.',
    'hero-desc': 'We create custom websites — showcase sites, online stores, portfolios — designed to turn your visitors into clients.',
    'hero-btn1': 'Start a project', 'hero-btn2': 'View our work',
    'hero-discover': 'Discover',
    'section-tag-services': 'What we offer', 'section-title-services': 'Our<br>services',
    'section-sub-services': 'Tailored solutions for every need, delivered turnkey.',
    's1-name': 'Showcase Website', 's1-desc': 'Present your business with elegance. A polished, fast site optimised for search engines.',
    's2-name': 'Online Store', 's2-desc': 'Sell 24/7. Full e-commerce with stock management, secure payment and dashboards.',
    's3-name': 'Portfolio & Blog', 's3-desc': 'Showcase your work or publish content easily via an intuitive admin interface.',
    's4-name': 'Landing Page', 's4-desc': 'A sharp single page to launch a product, capture leads or promote an event.',
    's5-name': 'Redesign & Maintenance', 's5-desc': 'Is your site outdated? We modernise it, speed it up and keep it running smoothly.',
    's6-name': 'SEO & Analytics', 's6-desc': 'Rank on Google. Technical audit, optimisation and performance tracking setup.',
    's7-name': 'Logo & Visual Identity', 's7-desc': 'No logo yet? We design yours: a unique logo, your colours and fonts, ready for your website, social media and business cards.', 'opt-logo': 'Logo / visual identity',
    'video-sound': 'Turn sound on', 'video-mute': 'Mute',
    'section-tag-process': 'How it works', 'section-title-process': 'Our<br>method',
    'section-sub-process': 'A clear and transparent process from first idea to launch.',
    'step1-title': 'Discovery', 'step1-desc': 'Free call to understand your goals, target audience and budget.',
    'step2-title': 'Quote & Contract', 'step2-desc': 'Detailed proposal, timeline and signature. No surprises.',
    'step3-title': 'Design', 'step3-desc': 'Visual mockups to approve before any development begins.',
    'step4-title': 'Development', 'step4-desc': 'Integration, testing and access to a preview link.',
    'step5-title': 'Go Live', 'step5-desc': 'Deployment, training and 30 days of support included.',
    'section-tag-portfolio': 'Our work', 'section-title-portfolio': 'Portfolio',
    'section-sub-portfolio': 'Our work — and soon yours.',
    'pf5-type': 'Web app · Bookings & admin panel', 'pf1-type': 'Showcase site · 3D', 'pf2-type': 'Next project', 'pf2-name': 'Your site here?<br>Free quote →',
    'section-tag-pricing': 'How much does it cost?',
    'section-title-pricing': 'Free quote<br><em style="color:var(--or);font-style:italic;">& no commitment</em>',
    'section-sub-pricing': 'Clear prices, no surprises.',
    'pr-from': 'from', 'pr-elsewhere': 'Instead of', 'pr-btn': 'Request a quote',
    'pr1-name': 'Essential', 'pr1-desc': 'One complete page: home, services, contact and Google Maps. Mobile-friendly, with a contact form.',
    'pr2-name': 'Showcase', 'pr2-desc': 'Up to 5 pages, custom design, basic Google SEO and training to edit your texts.',
    'pr3-name': 'Shop', 'pr3-desc': 'WooCommerce online shop, up to 20 products, secure online payment.',
    'pr-note': 'Optional maintenance: €15/month. Domain name and hosting not included.',
    'pricing-banner-title': 'A simple conversation is enough',
    'pricing-banner-desc': 'Tell us about your project by message or phone. We\'ll get back to you within 24h with a clear, honest and free estimate. No obligation.',
    'pricing-banner-btn': 'Get my free quote →',
    'pricing-tag': 'What affects the price',
    'p1-name': 'Number of pages', 'p1-desc': 'A 3-page site costs less than a 15-page site with a blog.',
    'p2-name': 'Features', 'p2-desc': 'Online store, booking system, member area: each added feature affects the price.',
    'p3-name': 'Design level', 'p3-desc': 'Simple and effective or high-end with animations? Your choice.',
    'p4-name': 'Content provided', 'p4-desc': 'If you provide texts and photos, it\'s faster. Otherwise we can help create them.',
    'p5-name': 'Deadline', 'p5-desc': 'An urgent project requires more organisation. We usually deliver in 2 to 6 weeks.',
    'p6-name': 'Maintenance', 'p6-desc': 'We offer ongoing support after delivery: updates, fixes, small changes.',
    'section-tag-contact': 'Let\'s talk about your project', 'section-title-contact': 'Contact',
    'section-sub-contact': 'First conversation free and without commitment.',
    'contact-title': 'Your project deserves a website that delivers.',
    'review-btn': 'Leave a Google review', 'review-footer': 'Leave a review', 'contact-social': 'Follow us', 'contact-desc': 'Whether you have a clear idea or are just starting out, we guide you from A to Z. Describe your project and we\'ll get back to you within 24h.',
    'label-firstname': 'First name', 'label-lastname': 'Last name', 'label-phone': 'Phone', 'label-email': 'Email',
    'label-project': 'Project type', 'label-budget': 'Estimated budget', 'label-message': 'Describe your project',
    'placeholder-firstname': 'John', 'placeholder-lastname': 'Smith', 'placeholder-email': 'john@example.com',
    'placeholder-message': 'Tell us about your business, your needs, your timeline...',
    'btn-send': 'Send my request →',
    'form-sending': 'Sending…',
    'form-fallback': 'The form is under maintenance. Call or text us at +32 4 95 94 17 06.',
    'form-success': 'Thank you! Your request has been sent. We\'ll get back to you within 24h.',
    'form-error': 'Oops, sending failed. Please try again in a moment.',
    'opt-select': 'Select...', 'opt-vitrine': 'Showcase website', 'opt-ecom': 'E-commerce store',
    'opt-portfolio': 'Portfolio / Blog', 'opt-landing': 'Landing page', 'opt-refonte': 'Website redesign',
    'opt-seo': 'Maintenance / SEO', 'opt-other': 'Other',
    'opt-budget0': 'Select...', 'opt-budget1': 'From €199 – Essential', 'opt-budget2': 'From €399 – Showcase',
    'opt-budget3': 'From €790 – Shop', 'opt-budget4': '€799+', 'opt-budget5': 'To be defined',
    'footer-copy': '© 2025 MBCraft — Custom web design',
    'footer-legal': 'Legal notice', 'footer-privacy': 'Privacy policy',
  },
  nl: {
    'nav-services': 'Diensten', 'nav-method': 'Methode', 'nav-portfolio': 'Portfolio',
    'nav-pricing': 'Prijzen', 'nav-contact': 'Contact',
    'hero-badge': 'Studio · Webdesign',
    'hero-title': 'Websites die<br><em>klanten</em><br>aantrekken.',
    'hero-desc': 'Wij maken websites op maat — visitekaartjes, webshops, portfolio\'s — ontworpen om bezoekers in klanten te omzetten.',
    'hero-btn1': 'Project starten', 'hero-btn2': 'Ons werk bekijken',
    'hero-discover': 'Ontdekken',
    'section-tag-services': 'Wat wij aanbieden', 'section-title-services': 'Onze<br>diensten',
    'section-sub-services': 'Oplossingen op maat voor elke behoefte, sleutelklaar geleverd.',
    's1-name': 'Visitekaartjesite', 's1-desc': 'Presenteer uw bedrijf met stijl. Een verzorgde, snelle site geoptimaliseerd voor zoekmachines.',
    's2-name': 'Webshop', 's2-desc': 'Verkoop 24/7. Volledige e-commerce met voorraadbeheer, veilige betaling en dashboards.',
    's3-name': 'Portfolio & Blog', 's3-desc': 'Toon uw werk of publiceer eenvoudig content via een intuïtieve beheerdersomgeving.',
    's4-name': 'Landingspagina', 's4-desc': 'Een krachtige enkele pagina om een product te lanceren, leads te verzamelen of een evenement te promoten.',
    's5-name': 'Redesign & Onderhoud', 's5-desc': 'Is uw site verouderd? Wij moderniseren, versnellen en zorgen voor een soepele werking.',
    's6-name': 'SEO & Analytics', 's6-desc': 'Scoor op Google. Technische audit, optimalisatie en opzet van prestatietracking.',
    's7-name': 'Logo & huisstijl', 's7-desc': 'Nog geen logo? Wij ontwerpen het voor u: een uniek logo, uw kleuren en lettertypes, klaar voor uw website, sociale media en visitekaartjes.', 'opt-logo': 'Logo / huisstijl',
    'video-sound': 'Geluid aan', 'video-mute': 'Geluid uit',
    'section-tag-process': 'Hoe het werkt', 'section-title-process': 'Onze<br>methode',
    'section-sub-process': 'Een helder en transparant proces van eerste idee tot lancering.',
    'step1-title': 'Ontdekking', 'step1-desc': 'Gratis gesprek om uw doelen, doelgroep en budget te begrijpen.',
    'step2-title': 'Offerte & Contract', 'step2-desc': 'Gedetailleerd voorstel, planning en ondertekening. Geen verrassingen.',
    'step3-title': 'Design', 'step3-desc': 'Visuele mockups ter goedkeuring vóór de ontwikkeling begint.',
    'step4-title': 'Ontwikkeling', 'step4-desc': 'Integratie, testen en toegang tot een voorbeeldlink.',
    'step5-title': 'Online zetten', 'step5-desc': 'Lancering, opleiding en 30 dagen support inbegrepen.',
    'section-tag-portfolio': 'Ons werk', 'section-title-portfolio': 'Portfolio',
    'section-sub-portfolio': 'Onze realisaties — en binnenkort de uwe.',
    'pf5-type': 'Webapplicatie · Reservaties & adminpaneel', 'pf1-type': 'Visitekaartjesite · 3D', 'pf2-type': 'Volgend project', 'pf2-name': 'Uw site hier?<br>Gratis offerte →',
    'section-tag-pricing': 'Hoeveel kost het?',
    'section-title-pricing': 'Gratis offerte<br><em style="color:var(--or);font-style:italic;">& vrijblijvend</em>',
    'section-sub-pricing': 'Duidelijke prijzen, zonder verrassingen.',
    'pr-from': 'vanaf', 'pr-elsewhere': 'In plaats van', 'pr-btn': 'Offerte aanvragen',
    'pr1-name': 'Essentieel', 'pr1-desc': 'Eén volledige pagina: home, diensten, contact en Google Maps. Mobielvriendelijk, met contactformulier.',
    'pr2-name': 'Vitrine', 'pr2-desc': 'Tot 5 pagina\'s, design op maat, basis-SEO voor Google en opleiding om uw teksten aan te passen.',
    'pr3-name': 'Webshop', 'pr3-desc': 'WooCommerce-webshop, tot 20 producten, veilige online betaling.',
    'pr-note': 'Onderhoud optioneel: €15/maand. Domeinnaam en hosting niet inbegrepen.',
    'pricing-banner-title': 'Een eenvoudig gesprek volstaat',
    'pricing-banner-desc': 'Beschrijf uw project per bericht of telefoon. Wij antwoorden binnen 24u met een duidelijke, eerlijke en gratis schatting. Geen verplichtingen.',
    'pricing-banner-btn': 'Mijn gratis offerte →',
    'pricing-tag': 'Wat de prijs beïnvloedt',
    'p1-name': 'Aantal pagina\'s', 'p1-desc': 'Een site van 3 pagina\'s kost minder dan een site van 15 pagina\'s met blog.',
    'p2-name': 'Functionaliteiten', 'p2-desc': 'Webshop, reserveringssysteem, ledenzone: elke extra functie beïnvloedt de prijs.',
    'p3-name': 'Designniveau', 'p3-desc': 'Eenvoudig en doeltreffend of high-end met animaties? Uw keuze.',
    'p4-name': 'Aangeleverde content', 'p4-desc': 'Als u teksten en foto\'s aanlevert, gaat het sneller. Anders kunnen wij helpen.',
    'p5-name': 'Gewenste deadline', 'p5-desc': 'Een dringend project vraagt meer organisatie. Wij leveren meestal in 2 à 6 weken.',
    'p6-name': 'Onderhoud', 'p6-desc': 'Wij bieden opvolging na levering: updates, correcties, kleine aanpassingen.',
    'section-tag-contact': 'Laten we praten over uw project', 'section-title-contact': 'Contact',
    'section-sub-contact': 'Eerste gesprek gratis en vrijblijvend.',
    'contact-title': 'Uw project verdient een website die resultaten levert.',
    'review-btn': 'Laat een Google-review achter', 'review-footer': 'Review schrijven', 'contact-social': 'Volg ons', 'contact-desc': 'Of u nu een duidelijk idee heeft of net begint, wij begeleiden u van A tot Z. Beschrijf uw project en wij nemen binnen 24u contact op.',
    'label-firstname': 'Voornaam', 'label-lastname': 'Achternaam', 'label-phone': 'Telefoon', 'label-email': 'E-mail',
    'label-project': 'Type project', 'label-budget': 'Geschat budget', 'label-message': 'Beschrijf uw project',
    'placeholder-firstname': 'Jan', 'placeholder-lastname': 'Janssen', 'placeholder-email': 'jan@voorbeeld.be',
    'placeholder-message': 'Vertel ons over uw bedrijf, uw behoeften, uw deadline...',
    'btn-send': 'Mijn aanvraag versturen →',
    'form-sending': 'Bezig met verzenden…',
    'form-fallback': 'Het formulier is in onderhoud. Bel of sms ons op +32 4 95 94 17 06.',
    'form-success': 'Bedankt! Uw aanvraag is verzonden. Wij antwoorden binnen 24u.',
    'form-error': 'Oeps, het verzenden is mislukt. Probeer het zo meteen opnieuw.',
    'opt-select': 'Selecteer...', 'opt-vitrine': 'Visitekaartjesite', 'opt-ecom': 'Webshop',
    'opt-portfolio': 'Portfolio / Blog', 'opt-landing': 'Landingspagina', 'opt-refonte': 'Redesign bestaande site',
    'opt-seo': 'Onderhoud / SEO', 'opt-other': 'Andere',
    'opt-budget0': 'Selecteer...', 'opt-budget1': 'Vanaf €199 – Essentieel', 'opt-budget2': 'Vanaf €399 – Vitrine',
    'opt-budget3': 'Vanaf €790 – Webshop', 'opt-budget4': '+ €799', 'opt-budget5': 'Nog te bepalen',
    'footer-copy': '© 2025 MBCraft — Webdesign op maat',
    'footer-legal': 'Wettelijke vermeldingen', 'footer-privacy': 'Privacybeleid',
  },
  ar: {
    'nav-services': 'الخدمات', 'nav-method': 'طريقتنا', 'nav-portfolio': 'أعمالنا',
    'nav-pricing': 'الأسعار', 'nav-contact': 'اتصل بنا',
    'hero-badge': 'استوديو · تصميم مواقع الويب',
    'hero-title': 'مواقع<br><em>تجذب</em><br>الزبائن.',
    'hero-desc': 'نصمّم مواقع ويب حسب الطلب — مواقع تعريفية، متاجر إلكترونية، معارض أعمال — مصمّمة لتحويل زوّارك إلى عملاء.',
    'hero-btn1': 'ابدأ مشروعك', 'hero-btn2': 'شاهد أعمالنا',
    'hero-discover': 'اكتشف',
    'section-tag-services': 'ماذا نقدّم', 'section-title-services': 'خدماتنا',
    'section-sub-services': 'حلول مناسبة لكل احتياج، تُسلَّم جاهزة للاستخدام.',
    's1-name': 'موقع تعريفي', 's1-desc': 'قدّم نشاطك بأناقة. موقع متقن وسريع ومهيّأ لمحركات البحث.',
    's2-name': 'متجر إلكتروني', 's2-desc': 'بِع على مدار الساعة. متجر متكامل مع إدارة المخزون والدفع الآمن ولوحات المتابعة.',
    's3-name': 'معرض أعمال ومدوّنة', 's3-desc': 'اعرض أعمالك أو انشر محتواك بسهولة عبر لوحة تحكم بسيطة.',
    's4-name': 'صفحة هبوط', 's4-desc': 'صفحة واحدة قوية لإطلاق منتج، أو جمع العملاء المحتملين، أو الترويج لحدث.',
    's5-name': 'تجديد وصيانة', 's5-desc': 'موقعك أصبح قديماً؟ نجدّده ونسرّعه ونضمن عمله بشكل جيد على المدى الطويل.',
    's6-name': 'الظهور على Google', 's6-desc': 'اظهر على Google. تدقيق وتحسين تقني ومتابعة أداء موقعك.',
    's7-name': 'الشعار والهوية البصرية', 's7-desc': 'ليس لديك شعار بعد؟ نصمّم لك شعاراً فريداً مع ألوانك وخطوطك، جاهزاً لموقعك وشبكات التواصل وبطاقات العمل.', 'opt-logo': 'شعار / هوية بصرية',
    'video-sound': 'تشغيل الصوت', 'video-mute': 'كتم الصوت',
    'section-tag-process': 'كيف نعمل', 'section-title-process': 'طريقتنا',
    'section-sub-process': 'مراحل واضحة وشفّافة من الفكرة الأولى إلى إطلاق الموقع.',
    'step1-title': 'التعارف', 'step1-desc': 'مكالمة مجانية لفهم أهدافك وجمهورك وميزانيتك.',
    'step2-title': 'عرض السعر والعقد', 'step2-desc': 'عرض مفصّل وجدول زمني وتوقيع. بدون مفاجآت.',
    'step3-title': 'التصميم', 'step3-desc': 'نماذج مرئية توافق عليها قبل بدء البرمجة.',
    'step4-title': 'البرمجة', 'step4-desc': 'التنفيذ والاختبار ورابط لمعاينة موقعك.',
    'step5-title': 'الإطلاق', 'step5-desc': 'نشر الموقع، تدريب، و30 يوماً من الدعم مشمولة.',
    'section-tag-portfolio': 'أعمالنا', 'section-title-portfolio': 'أعمالنا',
    'section-sub-portfolio': 'أعمالنا — وقريباً موقعك أنت.',
    'pf1-type': 'موقع تعريفي · ثلاثي الأبعاد', 'pf2-type': 'المشروع القادم', 'pf2-name': 'موقعك هنا؟<br>عرض سعر مجاني ←',
    'section-tag-pricing': 'كم التكلفة؟',
    'section-title-pricing': 'عرض سعر مجاني<br><em style="color:var(--or);font-style:normal;">وبدون التزام</em>',
    'section-sub-pricing': 'أسعار واضحة، بدون مفاجآت.',
    'pr-from': 'ابتداءً من', 'pr-elsewhere': 'بدلاً من', 'pr-btn': 'اطلب عرض سعر',
    'pr1-name': 'الأساسي', 'pr1-desc': 'صفحة واحدة متكاملة: الرئيسية، الخدمات، التواصل وخريطة Google. متوافقة مع الهاتف، مع نموذج تواصل.',
    'pr2-name': 'التعريفي', 'pr2-desc': 'حتى 5 صفحات، تصميم حسب الطلب، تهيئة أساسية لـGoogle وتدريب لتعديل نصوصك.',
    'pr3-name': 'المتجر', 'pr3-desc': 'متجر إلكتروني WooCommerce، حتى 20 منتجاً، مع دفع إلكتروني آمن.',
    'pr-note': 'الصيانة اختيارية: 15 € شهرياً. اسم النطاق والاستضافة غير مشمولين.',
    'pricing-banner-title': 'محادثة بسيطة تكفي',
    'pricing-banner-desc': 'صِف لنا مشروعك برسالة أو مكالمة. نردّ عليك خلال 24 ساعة بتقدير واضح وصادق ومجاني. بدون أي التزام.',
    'pricing-banner-btn': 'اطلب عرض السعر ←',
    'pricing-tag': 'ما الذي يحدّد السعر',
    'p1-name': 'عدد الصفحات', 'p1-desc': 'موقع من 3 صفحات أقل تكلفة من موقع من 15 صفحة مع مدوّنة.',
    'p2-name': 'الخصائص', 'p2-desc': 'متجر إلكتروني، نظام حجز، مساحة أعضاء: كل خاصية إضافية تؤثّر على السعر.',
    'p3-name': 'مستوى التصميم', 'p3-desc': 'تصميم بسيط وفعّال أم موقع راقٍ مع مؤثرات حركية؟ الاختيار لك.',
    'p4-name': 'المحتوى', 'p4-desc': 'إذا وفّرت النصوص والصور يكون العمل أسرع. وإلا يمكننا مساعدتك في إعدادها.',
    'p5-name': 'المدة المطلوبة', 'p5-desc': 'المشروع المستعجل يتطلب تنظيماً أكبر. عادةً نسلّم خلال 2 إلى 6 أسابيع.',
    'p6-name': 'الصيانة', 'p6-desc': 'نوفّر متابعة بعد التسليم: تحديثات، تصحيحات وتعديلات صغيرة.',
    'section-tag-contact': 'لنتحدّث عن مشروعك', 'section-title-contact': 'اتصل بنا',
    'section-sub-contact': 'المحادثة الأولى مجانية وبدون التزام.',
    'contact-title': 'مشروعك يستحق موقعاً في المستوى.',
    'review-btn': 'اترك تقييمًا على Google', 'review-footer': 'اترك تقييمًا', 'contact-social': 'تابعونا', 'contact-desc': 'سواء كانت لديك فكرة واضحة أو كنت في البداية، نرافقك من الألف إلى الياء. صِف لنا مشروعك وسنتواصل معك خلال 24 ساعة.',
    'label-firstname': 'الاسم', 'label-lastname': 'اللقب', 'label-phone': 'الهاتف (اختياري)', 'label-email': 'البريد الإلكتروني',
    'label-project': 'نوع المشروع', 'label-budget': 'الميزانية التقريبية', 'label-message': 'صِف مشروعك',
    'placeholder-firstname': 'أحمد', 'placeholder-lastname': 'العلوي', 'placeholder-email': 'ahmed@exemple.be',
    'placeholder-message': 'حدّثنا عن نشاطك واحتياجاتك والمدة التي تناسبك...',
    'btn-send': 'أرسل طلبي ←',
    'form-sending': 'جارٍ الإرسال…',
    'form-fallback': 'النموذج قيد الصيانة. اتصل بنا أو أرسل رسالة نصية إلى <span dir="ltr">+32 4 95 94 17 06</span>.',
    'form-success': 'شكراً! تم إرسال طلبك بنجاح. سنردّ عليك خلال 24 ساعة.',
    'form-error': 'عذراً، لم يتم الإرسال. حاول مرة أخرى بعد قليل.',
    'opt-select': 'اختر...', 'opt-vitrine': 'موقع تعريفي', 'opt-ecom': 'متجر إلكتروني',
    'opt-portfolio': 'معرض أعمال / مدوّنة', 'opt-landing': 'صفحة هبوط', 'opt-refonte': 'تجديد موقع موجود',
    'opt-seo': 'صيانة / الظهور على Google', 'opt-other': 'أخرى',
    'opt-budget0': 'اختر...', 'opt-budget1': 'أقل من 500 €', 'opt-budget2': '399 – 790 €',
    'opt-budget3': '800 – 1500 €', 'opt-budget4': 'أكثر من 1500 €', 'opt-budget5': 'لم تُحدَّد بعد',
    'footer-copy': '© 2025 MBCraft — تصميم مواقع ويب حسب الطلب',
    'footer-legal': 'الإشعارات القانونية', 'footer-privacy': 'سياسة الخصوصية',
  }
};

function setLang(lang) {
  const t = translations[lang];
  const set = (key, html) => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => { el.innerHTML = html; });
  };
  const setPlaceholder = (key, val) => {
    const el = document.querySelector(`[data-i18n-placeholder="${key}"]`);
    if (el) el.placeholder = val;
  };
  Object.keys(t).forEach(key => {
    if (key.startsWith('placeholder-')) setPlaceholder(key.replace('placeholder-', ''), t[key]);
    else set(key, t[key]);
  });
  // Boutons actifs
  document.querySelectorAll('.lang').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
  // Arabe : texte de droite à gauche et police adaptée
  document.documentElement.lang = lang;
  document.documentElement.classList.toggle('lang-ar', lang === 'ar');
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    setLang(el.dataset.lang);
  });
});

// Langue par défaut
if (!['fr', 'en', 'nl'].includes(localStorage.getItem('lang'))) localStorage.setItem('lang', 'fr');
setLang(localStorage.getItem('lang'));

document.addEventListener('DOMContentLoaded', () => {

/* ── HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open', navMenu.classList.contains('open'));
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Avec GSAP, les apparitions sont gérées par cinematic.js
if (!window.gsap) {
  document.querySelectorAll('.service-card, .process-step, .portfolio-item').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    revealObserver.observe(el);
  });
}


/* ── FORMULAIRE DE CONTACT (Web3Forms) ── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const status = contactForm.querySelector('.form-status');
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const msg = key => translations[localStorage.getItem('lang') || 'fr'][key];

  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = Object.fromEntries(new FormData(contactForm));
    if (data.access_key === 'WEB3FORMS_ACCESS_KEY') {
      // Formulaire pas encore branché : on oriente vers le téléphone
      status.className = 'form-status is-error';
      status.textContent = msg('form-fallback');
      return;
    }
    contactForm.querySelectorAll('select').forEach(sel => {
      data[sel.name] = sel.selectedIndex > 0 ? sel.options[sel.selectedIndex].text : '—';
    });

    submitBtn.disabled = true;
    status.className = 'form-status';
    status.textContent = msg('form-sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      status.classList.add('is-success');
      status.textContent = msg('form-success');
      contactForm.reset();
    } catch (err) {
      status.classList.add('is-error');
      status.textContent = msg('form-error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}

}); // fin DOMContentLoaded

/* ── Vidéo « de A à Z » : bonne version selon l'écran et la langue, lecture quand elle est visible ── */
(function () {
  const v = document.getElementById('az-video'), btn = document.getElementById('az-sound');
  if (!v) return;
  const mob = window.matchMedia('(max-width: 700px)').matches;
  const curLang = () => localStorage.getItem('lang') || 'fr';
  const file = (ext, lang) => 'video/de-a-a-z' + (mob ? '-mobile' : '') + (lang === 'fr' ? '' : '-' + lang) + '.' + ext;
  let loaded = null, visible = false;
  const setPoster = () => { v.poster = file('jpg', curLang()); };
  const load = () => {
    const lang = curLang(); if (loaded === lang) return;
    v.src = file('mp4', lang); loaded = lang;
    if (visible) v.play().catch(() => {});
  };
  setPoster();
  const io = new IntersectionObserver(es => es.forEach(e => {
    visible = e.isIntersecting;
    if (visible) { load(); v.play().catch(() => {}); } else v.pause();
  }), { threshold: .35 });
  io.observe(v);
  const label = () => {
    btn.querySelector('span').textContent = translations[curLang()][v.muted ? 'video-sound' : 'video-mute'];
    btn.classList.toggle('on', !v.muted);
  };
  btn.addEventListener('click', () => {
    load(); v.muted = !v.muted;
    if (!v.muted) { v.currentTime = 0; v.play().catch(() => {}); }
    label();
  });
  document.querySelectorAll('.lang').forEach(el => el.addEventListener('click', () => setTimeout(() => {
    label(); setPoster(); if (loaded) load();
  }, 0)));
})();
