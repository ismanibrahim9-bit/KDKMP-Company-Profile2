export interface CompanyProfileSection {
  title: string;
  subtitle?: string;
  content: string | string[];
}

export interface ProductDetails {
  id: string;
  name: string;
  englishName: string;
  tagline: string;
  description: string;
  advantages: string[];
  tasteProfile: string;
  aroma: string;
  altitude: string;
  process: string;
  certification: string[];
  packaging: string[];
  targetMarket: string[];
  imagePrompt: string;
}

export interface MockupPrompt {
  type: string;
  size: string;
  concept: string;
  promptText: string;
}

export interface BrandColor {
  name: string;
  indonesianName: string;
  hex: string;
  usage: string;
  pantone: string;
  rgb: string;
  cmyk: string;
}

export interface TaglineAlternative {
  indonesian: string;
  english: string;
  concept: string;
}

export const companyProfile = {
  metadata: {
    title: "Koperasi Desa Merah Putih (KDKMP)",
    tagline: "Sustaining Heritage, Empowering Farmers, Exporting Excellence",
    establishment: "Garut, Jawa Barat, Indonesia",
  },
  cover: {
    heading: "EXCEEDING EXPECTATIONS, ELEVATING LIVES",
    subheading: "Indonesian Premium Arabica Garut Coffee Export & Company Profile",
    description: "Koperasi Desa Merah Putih (KDKMP) adalah jembatan utama yang menghubungkan dedikasi petani tradisional dataran tinggi Garut dengan para penikmat kopi spesialiti di seluruh penjuru dunia. Kami menghadirkan biji kopi Arabika terbaik dengan standar mutu ekspor yang ketat dan model bisnis yang berkeadilan.",
  },
  sections: [
    {
      title: "Tentang Kami (About Us)",
      content: [
        "Koperasi Desa Merah Putih (KDKMP) adalah produsen, pengolah, dan eksportir biji kopi Arabika premium yang berbasis di dataran tinggi Garut, Jawa Barat, Indonesia. Berdiri di tengah kekayaan vulkanis Gunung Cikuray, Papandayan, dan Guntur, koperasi kami menyatukan ratusan petani kopi lokal di bawah satu visi profesional bersama.",
        "Kami mengontrol seluruh rantai pasok kopi dari hulu ke hilir—mulai dari pembibitan, teknik budidaya berkelanjutan, pemanenan ceri merah secara manual, proses pengolahan pasca-panen pasca-modern, hingga pengemasan berstandar internasional. Dengan memadukan kearifan lokal (local wisdom) dan teknologi pertanian modern, KDKMP menghasilkan kopi Arabika dengan profil rasa yang kompleks dan unik yang diakui secara global."
      ]
    },
    {
      title: "Sejarah Singkat (Our History)",
      content: [
        "Berawal dari sebuah inisiatif kelompok tani kecil di lereng Gunung Cikuray pada tahun 2018, para petani menghadapi tantangan rantai pasar yang panjang dan fluktuasi harga yang tidak menentu. Menyadari potensi besar biji kopi Arabika Garut yang memiliki karakteristik rasa manis alami dan keasaman sitrus yang menyegarkan, kami berkomitmen untuk berdaulat secara ekonomi.",
        "Pada tahun 2020, koperasi ini resmi didirikan dengan nama Koperasi Desa Merah Putih (KDKMP). Nama 'Merah Putih' mencerminkan nasionalisme, integritas, dan semangat gotong royong untuk membawa produk kebanggaan desa ke kancah global. Melalui pendampingan intensif dari para ahli agronomi dan barista bersertifikasi internasional, KDKMP bertransformasi dari sekadar pemasok lokal menjadi agregator ekspor berskala internasional, mengirimkan kontainer kopi pertamanya ke Asia Timur pada tahun 2022 dan memperluas jangkauan ke Eropa serta Amerika Serikat."
      ]
    },
    {
      title: "Visi",
      content: "Menjadi koperasi produsen kopi Arabika premium kelas dunia yang terpercaya, berkelanjutan, dan inovatif, sekaligus menjadi pilar utama kemandirian serta kesejahteraan petani kopi di Garut, Jawa Barat."
    },
    {
      title: "Misi",
      content: [
        "Sourcing & Processing Excellence: Menghasilkan kopi Arabika Garut berkualitas tinggi (Specialty Grade) melalui budidaya terbaik dan pengolahan pasca-panen yang presisi.",
        "Farmer Empowerment: Meningkatkan kesejahteraan ekonomi dan kapasitas teknis petani mitra melalui pembagian keuntungan berkeadilan (fair trade) dan pelatihan berkelanjutan.",
        "International Market Development: Membangun jaringan distribusi global yang kuat melalui kemitraan strategis dengan importir, roastery, dan distributor kopi premium di seluruh dunia.",
        "Sustainable Agriculture: Menerapkan praktik pertanian ramah lingkungan untuk menjaga keanekaragaman hayati tanah vulkanik Garut dan memitigasi perubahan iklim."
      ]
    },
    {
      title: "Nilai Perusahaan (Core Values)",
      content: [
        "Integritas (Integrity): Menyajikan data kualitas produk secara jujur, transparan dalam kerja sama, serta konsisten menjaga mutu pengiriman.",
        "Profesionalisme (Professionalism): Menerapkan standar manajemen korporasi modern dalam tata kelola koperasi serta mematuhi kontrak ekspor internasional secara presisi.",
        "Kesejahteraan Bersama (Collective Welfare): Menempatkan kesejahteraan petani sebagai prioritas utama; keberhasilan ekspor adalah kesejahteraan bagi seluruh anggota.",
        "Keberlanjutan (Sustainability): Mengintegrasikan konservasi alam dengan produksi kopi guna menjamin ketersediaan jangka panjang yang ramah lingkungan.",
        "Inovasi Pasca-Panen (Post-Harvest Innovation): Berinvestasi pada riset metode fermentasi (anaerobic, honey, carbon maceration) guna menciptakan variasi rasa yang unik."
      ]
    },
    {
      title: "Keunggulan Kompetitif (Competitive Advantages)",
      content: [
        "Terroir Vulkanis yang Sempurna: Perkebunan kami terletak di ketinggian 1.200 - 1.800 meter di atas permukaan laut (masl), tumbuh di tanah vulkanis subur kaya mineral mikro dengan curah hujan ideal.",
        "Kontrol Kualitas End-to-End: Kami memilah ceri kopi merah (double-picked) dengan tangan. Setiap lot dapat dilacak (single-origin traceability) hingga ke tingkat kebun spesifik.",
        "Fasilitas Pengolahan Modern: Memiliki laboratorium uji cita rasa (cupping lab) mandiri dengan Q-Grader bersertifikasi CQI (Coffee Quality Institute) guna memastikan skor cupping selalu di atas 83+.",
        "Kapasitas Suplai yang Stabil: Mengelola lebih dari 450 hektar lahan kopi produktif yang menjamin konsistensi suplai bagi kontrak ekspor jangka panjang.",
        "Standarisasi Global: Memenuhi persyaratan kepatuhan internasional termasuk sertifikasi ramah lingkungan, organik, dan perdagangan adil (Fair Trade)."
      ]
    },
    {
      title: "Proses Produksi Berstandar Ekspor",
      content: [
        "1. Seleksi Ceri Merah (Harvesting): Petani hanya memetik ceri yang telah matang sempurna (full red cherry) secara manual.",
        "2. Sortasi Air (Floating/Sorting): Ceri direndam dalam air mengalir; ceri yang mengambang dipisahkan untuk menjaga keseragaman kematangan.",
        "3. Pengolahan Pasca-Panen (Processing): Tergantung permintaan buyer, kami memproses dengan metode Wet Hulled (Giling Basah), Full Washed (Giling Kering), Natural (Dry Process), Honey Process, atau Anaerobic Fermentation.",
        "4. Pengeringan Lambat (Slow Drying): Biji kopi dikeringkan secara perlahan di bawah kubah pelindung UV (raised drying beds) hingga mencapai kadar air stabil 11 - 12%.",
        "5. Pengupasan kulit tanduk (Hulling & Polishing): Menggunakan mesin modern bersuhu rendah untuk meminimalkan kerusakan fisik green bean.",
        "6. Sortasi Akhir (Optical & Manual Triaging): Biji hijau disaring berdasarkan ukuran screen (Sieve size 16-18) dan disortir manual dengan tangan (hand-sorted) untuk mengeliminasi cacat biji (defect count < 4%)."
      ]
    },
    {
      title: "Standar Mutu (Quality Assurance)",
      content: "Setiap batch kopi KDKMP melewati serangkaian uji laboratorium fisik dan organoleptik. Parameter fisik meliputi kadar air (moisture analyzer), tingkat densitas, ukuran screen, dan analisis cacat fisik (defect analysis) sesuai standar SCAA (Specialty Coffee Association of America). Parameter organoleptik diuji melalui protokol cupping ketat untuk mencatat profil rasa, keasaman, bodi, dan kebersihan rasa (clean cup score)."
    },
    {
      title: "Komitmen terhadap Petani & Lingkungan",
      content: [
        "Pemberdayaan Petani: Kami mengalokasikan 15% dari keuntungan bersih ekspor untuk dana bergulir pembelian peralatan tani modern, beasiswa pendidikan anak petani, serta program asuransi kesehatan mandiri bagi seluruh petani anggota.",
        "Reboisasi & Agroforestry: Kopi kami ditanam di bawah naungan pohon peneduh asli (shade-grown coffee) seperti tanaman petai, alpukat, dan suren. Praktik wanatani (agroforestry) ini mencegah erosi tanah di lereng curam Garut, melindungi habitat satwa liar endemik, serta berkontribusi aktif dalam sekuestrasi karbon global."
      ]
    },
    {
      title: "Peluang Kerja Sama Internasional",
      content: "Koperasi Desa Merah Putih menyambut kemitraan jangka panjang (annual contract) dengan importir global, coffee roaster berskala medium-to-large, serta distributor kopi premium. Kami menyediakan layanan kustomisasi profil pengolahan (customized fermentation lots) dan pengemasan private label (Oem/white label). Kami menjamin transparansi rantai pasok penuh, komunikasi multibahasa profesional, dan kepatuhan penuh terhadap ketentuan logistik ekspor pelabuhan internasional Tanjung Priok, Jakarta."
    }
  ]
};

export const productsList: ProductDetails[] = [
  {
    id: "green-bean-grade1",
    name: "Green Bean Arabica Garut Grade 1",
    englishName: "Garut Arabica Green Coffee Beans Grade 1 (Export Ready)",
    tagline: "The Premium Standard of High-Density Indonesian Specialty Coffee",
    description: "Biji kopi hijau Arabika pilihan hasil sortasi super ketat. Memiliki keseragaman fisik tinggi, kadar air yang presisi, serta tingkat defect yang sangat rendah (sesuai standar ekspor SNI No. 01-2907-2008 dan SCAA). Sangat cocok untuk pasar importir skala besar dan industri penyangraian komersial premium.",
    advantages: [
      "Defect rate kurang dari 4% (Under SCAA Specialty Grade limit)",
      "Density tinggi menjamin roast profile yang konsisten dan merata",
      "Kadar air optimal terkendali di kisaran 11.5% - 12.5%",
      "Traceability tinggi (bisa dilacak ke desa asal tanam di Garut)"
    ],
    tasteProfile: "Bright crisp acidity, brown sugar sweetness, medium-high body, notes of lime and starfruit, clean finishing.",
    aroma: "Fresh grass, dynamic floral, citric orange peel, spicy hints.",
    altitude: "1.200 - 1.500 mdpl (masl)",
    process: "Full Washed (Dry Hulled) or Wet Hulled (Giling Basah)",
    certification: ["Sertifikasi Indikasi Geografis Kopi Arabika Garut", "Halal Indonesia", "Sertifikasi Uji Mutu Puslitkoka"],
    packaging: ["Sack ekspor goni alami dengan lapisan liner grainpro (60 kg)", "Double-layered PP Bag (25 kg)"],
    targetMarket: ["Importir Kopi Internasional", "Commercial Coffee Roasteries", "Distributor Bahan Baku Kopi Global"],
    imagePrompt: "Photorealistic close-up view of premium Indonesian green coffee beans Arabica Garut, high density, shiny green-cyan raw coffee seeds, stored inside an open rustic jute sack with 'KDKMP INDONESIA' branding, on dry wooden deck floor, soft natural side lighting, macro photography, 8k, ultra detailed."
  },
  {
    id: "green-bean-specialty",
    name: "Green Bean Specialty (Micro-Lot Anaerobic)",
    englishName: "Garut Specialty Micro-Lot (Anaerobic Natural / Honey)",
    tagline: "Exquisite Complex Fermentation for Discriminating Palates",
    description: "Koleksi mikro-lot premium yang diproses secara khusus dengan fermentasi anaerobik terkontrol selama 72-120 jam dalam wadah kedap udara. Inovasi pasca-panen ini memicu fermentasi ragi alami untuk menghasilkan asam organik yang kaya dan profil rasa buah-buahan eksotis yang sangat intens.",
    advantages: [
      "Cupping Score konsisten di atas 85+ (Specialty Q-Grader Rated)",
      "Kombinasi asam laktat yang lembut dengan rasa buah tropis kompleks",
      "Diproduksi dalam jumlah terbatas (Eksklusif Micro-Lot)",
      "Setiap kemasan dilengkapi dengan lembar data profil cupping (cupping sheet)"
    ],
    tasteProfile: "Wild berries, red apple, sweet mango, purple grape, heavy syrupy body, sugarcane sweetness, highly complex.",
    aroma: "Ripe tropical fruits, winey ferment, sweet honey, jasmine floral.",
    altitude: "1.500 - 1.800 mdpl (masl)",
    process: "Anaerobic Natural / Double Anaerobic Honey",
    certification: ["Sertifikasi Indikasi Geografis Kopi Arabika Garut", "CQI Cupping Certification (Score 85.5)"],
    packaging: ["Vaccum Sealed Foil Pack (5 kg atau 10 kg) dalam kotak karton kokoh"],
    targetMarket: ["Boutique Coffee Roasters", "Specialty Coffee Shops", "Kolektor Kopi Khusus", "Kompetisi Barista"],
    imagePrompt: "Commercial studio photography of rare specialty green coffee beans, light turquoise hue, pristine sorting, scattered elegant gold plate, black minimalist background, soft focus, warm luxury lighting, 8k resolution, ultra-realistic texture."
  },
  {
    id: "roasted-medium-roast",
    name: "Roasted Bean Medium Roast (Signature Garut)",
    englishName: "Signature Garut Arabica Medium Roast Coffee Beans",
    tagline: "The Perfect Harmony of Vibrant Acidity and Sweet Caramel",
    description: "Biji kopi sangrai premium dengan profil Medium Roast. Sangat ideal untuk menonjolkan keseimbangan sempurna antara rasa buah asli Garut (fruity acidity) dengan karamelisasi manis alami gula kopi. Sangat direkomendasikan untuk metode seduh manual (manual brew) seperti V60, Kalita Wave, atau Chemex.",
    advantages: [
      "Disangrai menggunakan mesin modern berteknologi hot-air roast drum kontrol digital",
      "Waktu degassing yang tepat sebelum distribusi",
      "Karakter asli asal kopi (origin character) tetap terjaga sempurna",
      "Tanpa minyak berlebih di permukaan biji kopi"
    ],
    tasteProfile: "Vibrant lemon acidity, sweet orange, hazelnut, milk chocolate undertone, silky body, long sweet finish.",
    aroma: "Jasmine flower, caramel, sweet honey, citrusy fresh.",
    altitude: "1.300 - 1.600 mdpl (masl)",
    process: "Full Washed / Honey Process",
    certification: ["Halal Indonesia", "BPOM RI MD (Izin Edar Resmi)"],
    packaging: ["Premium Standing Pouch dengan One-way Degassing Valve & zipper (250 gr, 500 gr, 1 kg)"],
    targetMarket: ["Coffee Shops", "Modern Retail / Supermarket Premium", "Konsumen Rumah Tangga / Home Brewers"],
    imagePrompt: "Luxury product photography of roasted coffee beans medium roast, warm brown golden color, spilling out from a sleek minimalist black pouch with 'KDKMP Signature Garut' red-gold label, on a raw dark marble countertop, elegant coffee cup in blurred background, soft cinematic lighting, 8k."
  },
  {
    id: "roasted-dark-roast",
    name: "Roasted Bean Dark Roast (Espresso Master)",
    englishName: "Espresso Master Arabica Dark Roast Coffee Beans",
    tagline: "Bold, Intense, and Velvety – Crafted for Exquisite Espresso",
    description: "Biji kopi Arabika yang disangrai hingga tingkat Medium-Dark menuju Dark Roast secara presisi tanpa gosong. Mengurangi keasaman secara signifikan dan meningkatkan body serta kemanisan karamel pahit yang tebal. Sempurna sebagai fondasi menu kopi berbasis susu (cappuccino, latte) serta espresso murni.",
    advantages: [
      "Body yang sangat tebal (heavy body) dan crema yang melimpah",
      "Karakter keasaman sangat rendah, aman bagi lambung sensitif",
      "Sangat stabil saat diekstraksi menggunakan mesin espresso komersial",
      "Menghasilkan rasa coklat gelap manis yang kuat saat dipadukan dengan susu"
    ],
    tasteProfile: "Dark chocolate, toasted almond, heavy brown sugar, bold molasses, very low acidity, thick velvety body.",
    aroma: "Toasted nuts, dark cacao, spicy, brown sugar.",
    altitude: "1.200 - 1.400 mdpl (masl)",
    process: "Wet Hulled (Giling Basah) / Natural",
    certification: ["Halal Indonesia", "BPOM RI MD"],
    packaging: ["Sleek Standing Pouch dengan aluminium foil tebal dan Katup Udara Satu Arah (500 gr, 1 kg)"],
    targetMarket: ["Horeka (Hotel, Restoran, Kafe)", "Coffee Shop Chains", "Office Coffee Supplies"],
    imagePrompt: "Stunning product photograph of dark roasted Arabica coffee beans, glossy dark chocolate surface, perfectly roasted, falling in a clean stream onto a heap, surrounded by matte black premium coffee pouch, smoky espresso cup nearby, dramatic side lighting, black background, high-end commercial branding."
  },
  {
    id: "premium-arabica-garut",
    name: "Premium Arabica Garut Gift Box Selection",
    englishName: "Premium Arabica Garut Heritage Gift Box",
    tagline: "An Elegant Gift of West Java’s Ultimate Coffee Legacy",
    description: "Paket bingkisan kopi premium eksklusif yang dikemas dalam kotak mewah pelindung magnetis. Terdiri dari seleksi kopi roasted bean terbaik (Medium & Dark Roast) dilengkapi dengan kartu panduan bercerita (story card) sejarah kopi Garut dan peta wilayah perkebunan KDKMP. Sangat tepat untuk hadiah korporat, cinderamata diplomatik, dan koleksi mewah.",
    advantages: [
      "Kemasan kotak eksklusif berbahan tebal (Hard Box) berperekat magnetis",
      "Dilengkapi dengan sendok takar kopi kuningan eksklusif",
      "Termasuk buklet mini tentang profil petani mitra dan komitmen sosial KDKMP",
      "Representasi estetika budaya luhur Jawa Barat berkelas dunia"
    ],
    tasteProfile: "Multi-layered flavor profiles from different selections (Fresh citrus to deep dark cacao).",
    aroma: "Intense complex coffee perfume, floral jasmine, dark chocolate.",
    altitude: "1.300 - 1.800 mdpl (masl)",
    process: "Multi-Process Selection (Washed, Honey, Anaerobic)",
    certification: ["Halal Indonesia", "Indikasi Geografis"],
    packaging: ["Exclusive Rigid Box Gift Set containing 2 x 200 gr Glass Jars or Premium Pouches, plus accessory"],
    targetMarket: ["Corporate Buyers", "VIP / Diplomatic Souvenirs", "Luxury Department Stores", "Gifts & Hampers Market"],
    imagePrompt: "Luxury rigid gift box for premium coffee, matte charcoal black texture with minimalist gold hot stamping logo of 'KDKMP Koperasi Desa Merah Putih', box is slightly open showing two elegant dark glass jars filled with coffee beans, nestled in dark red satin fabric, studio lighting, wooden background with botanical elements, cinematic depth of field."
  }
];

export const mockupPrompts: MockupPrompt[] = [
  {
    type: "Standing Pouch 250 gr",
    size: "250 gram (Retail / Home Brewer Size)",
    concept: "Minimalist Modernism. Matte finish pouch, elegant sleek zip-lock, featuring an offset center-split label with deep red and gold line-art representing Garut's high peaks.",
    promptText: "Professional mockup of a 250g matte black standing pouch coffee bag, front view, isolated on a warm gray concrete slab table. Minimalist aesthetic, centered modern label with Indonesian Merah Putih accents and gold hot stamping text. Side-fill natural soft lighting, hyper-realistic, 3d render clean template."
  },
  {
    type: "Standing Pouch 500 gr",
    size: "500 gram (Medium Cafe / Enthusiast Size)",
    concept: "Luxury Industrial. Clean white or deep charcoal paper-like textured pouch with a highly structured back-seam and circular degassing valve placed symmetrically.",
    promptText: "Sleek 500g matte charcoal gray coffee bag packaging mockup with a circular degassing valve, resting on a rustic wooden stand next to a small branch of green coffee leaves. High contrast, warm minimalist style, organic feel, clean empty label design for branding mockup presentation, photorealistic 8k."
  },
  {
    type: "Standing Pouch 1 Kg",
    size: "1 Kilogram (Professional Barista & Cafe Size)",
    concept: "Premium Wholesale. Heavy-duty flat-bottom block-gusset pouch, highly geometric, designed to stand tall in dynamic coffee environments.",
    promptText: "Front-angled 3D mockup of a heavy 1kg flat-bottom matte black coffee pouch bag, standing vertically on a polished dark granite counter, professional studio lighting, clean geometric lines, empty space on the front surface for custom label print, realistic plastic/foil material texture."
  },
  {
    type: "Coffee Bag (Sleek Quad-Seal)",
    size: "Flexible sizing (250g - 1kg)",
    concept: "Swiss-Grid International. Clean typography-centric side-gusset bag with strong creased edges and pristine symmetry.",
    promptText: "Mockup of a quad-seal sleek paper-texture coffee bag, vertical side-gusset structure, clean white color, resting against a dark textured volcanic stone background with subtle red coffee cherries nearby, modern clean corporate export style, realistic shadows."
  },
  {
    type: "Export Sack (Karung Goni Ekspor)",
    size: "60 Kilogram (Standard International Container Sack)",
    concept: "Authentic Heritage. Heavy woven natural jute canvas sack with bold black and vibrant red stamped lettering of international origin markings.",
    promptText: "A large 60kg raw woven jute sack coffee bag mockup for bulk green bean export. Sacks are stacked in an elegant modern rustic warehouse, stamped with a bold red and black stencil-style corporate logo: 'KDKMP ARABICA GARUT - INDONESIA'. High-end agricultural trading feel, photorealistic texture, 8k resolution."
  },
  {
    type: "Coffee Box (Cardboard Outer)",
    size: "Custom box (Holds 3 x 100g sample packs)",
    concept: "Symmetrical Clean Grid. Crafted from heavy recycled craft board with elegant minimalist line patterns and debossed brand badges.",
    promptText: "A minimalist rectangular kraft paper coffee box mockup with a slide-out drawer tray, elegant design, debossed details, lying on an elegant off-white surface surrounded by dry botanicals, high-end sustainable packaging mockup, photorealistic 3d render."
  },
  {
    type: "Coffee Gift Box (Luxury Rigid)",
    size: "VIP Premium Presentation Box",
    concept: "Ultra-Premium Luxury. Magnetic-flap rigid board wrapped in deep charcoal soft-touch paper, highlighting a brilliant hot-stamped red and gold foil emblem.",
    promptText: "High-end luxury rigid presentation gift box with magnetic flap, matte deep black paper wrap, featuring brilliant gold and scarlet red metallic hot foil logo, set on a premium dark mahogany wood surface, warm cinematic spotlighting, luxury retail asset."
  },
  {
    type: "Coffee Display (Point-of-Sale)",
    size: "Cafe Countertop / Premium Retail Stand",
    concept: "Boutique Craft Retail. Vertical tiered display stand carved from sustainable teak wood and matte black metal, presenting 3 varieties of coffee bags neatly.",
    promptText: "A modern sleek wooden countertop product display rack holding three black coffee bags, matte finish labels. Warm cafe environment background with soft bokeh, clean architectural lines, corporate retail setup, realistic shadows and light reflections."
  }
];

export const brandColors: BrandColor[] = [
  {
    name: "Sovereign Scarlet Red",
    indonesianName: "Merah Kedaulatan",
    hex: "#C8102E",
    usage: "Warna aksen utama yang memancarkan energi, nasionalisme, keberanian, kematangan ceri kopi merah sempurna, dan semangat gotong royong.",
    pantone: "PMS 186 C",
    rgb: "200, 16, 46",
    cmyk: "0, 100, 81, 4"
  },
  {
    name: "Pristine Snow White",
    indonesianName: "Putih Murni",
    hex: "#FFFFFF",
    usage: "Warna latar belakang dan kontras tinggi yang melambangkan kemurnian niat, kebersihan pengolahan (clean cup), transparansi rantai pasok, dan standar kebersihan premium.",
    pantone: "White C",
    rgb: "255, 255, 255",
    cmyk: "0, 0, 0, 0"
  },
  {
    name: "Obsidian Black",
    indonesianName: "Hitam Obsidian",
    hex: "#1A1A1A",
    usage: "Warna fondasi utama untuk kemasan dan elemen korporat. Melambangkan kekuatan, modernitas, kelas premium, keseriusan profesional, dan eksklusivitas pasar ekspor.",
    pantone: "PMS Black 6 C",
    rgb: "26, 26, 26",
    cmyk: "0, 0, 0, 90"
  },
  {
    name: "Volcanic Espresso Brown",
    indonesianName: "Coklat Espresso Vulkanis",
    hex: "#4E3629",
    usage: "Mewakili tanah vulkanis Garut yang subur, proses penyangraian (roasting) yang presisi, dan esensi dari biji kopi itu sendiri. Memberikan kesan hangat dan organik.",
    pantone: "PMS 4625 C",
    rgb: "78, 54, 41",
    cmyk: "45, 65, 75, 45"
  },
  {
    name: "Highland Forest Green",
    indonesianName: "Hijau Hutan Dataran Tinggi",
    hex: "#2C5E43",
    usage: "Melambangkan kelestarian alam pegunungan Garut, dedaunan kopi yang rimbun, komitmen wanatani (agroforestry) berkelanjutan, dan kesegaran produk pertanian.",
    pantone: "PMS 343 C",
    rgb: "44, 94, 67",
    cmyk: "80, 30, 75, 25"
  }
];

export const taglineAlternatives: TaglineAlternative[] = [
  {
    indonesian: "Dari Bumi Garut untuk Dunia",
    english: "From Garut Earth to the World",
    concept: "Menekankan kebanggaan asal daerah (terroir) dengan ambisi distribusi global."
  },
  {
    indonesian: "Kopi Premium, Petani Berdaulat",
    english: "Premium Coffee, Empowered Farmers",
    concept: "Menghubungkan kualitas produk tingkat tinggi dengan dampak sosial positif di hulu."
  },
  {
    indonesian: "Cita Rasa Vulkanis Indonesia",
    english: "Indonesian Volcanic Taste Legacy",
    concept: "Mengangkat keunggulan geografis tanah vulkanis Garut yang kaya mineral."
  },
  {
    indonesian: "Satu Cangkir, Sejuta Kesejahteraan",
    english: "One Cup, Endless Welfare",
    concept: "Pendekatan emosional tentang bagaimana setiap pembelian mendukung kehidupan petani."
  },
  {
    indonesian: "Standar Ekspor, Jiwa Merah Putih",
    english: "Export Quality, Merah Putih Soul",
    concept: "Menegaskan komitmen mutu tanpa batas yang berakar pada identitas kebangsaan Indonesia."
  },
  {
    indonesian: "Kemurnian Arabika Garut Terbaik",
    english: "The Purity of Finest Garut Arabica",
    concept: "Sangat fokus pada keaslian (authenticity) dan kemurnian varietas arabika single-origin."
  },
  {
    indonesian: "Menjaga Tradisi, Menembus Batas",
    english: "Preserving Heritage, Crossing Borders",
    concept: "Narasi transisi dari pertanian tradisional menuju perdagangan global modern."
  },
  {
    indonesian: "Rasa Otentik dari Lereng Cikuray",
    english: "Authentic Flavors of Mount Cikuray",
    concept: "Spesifik, menonjolkan keunikan wilayah asal tanam utama yang eksklusif."
  },
  {
    indonesian: "Kopi Berkelanjutan untuk Masa Depan",
    english: "Sustainable Coffee for the Future",
    concept: "Menonjolkan nilai kelestarian lingkungan (sustainability) dan tanggung jawab sosial."
  },
  {
    indonesian: "Dedikasi Merah Putih pada Setiap Biji Kopi",
    english: "Merah Putih’s Dedication in Every Bean",
    concept: "Menampilkan tingkat ketelitian, kerajinan, dan cinta yang dicurahkan dalam produksi."
  }
];

export const brandGuideline = {
  logoPhilosophy: {
    title: "Filosofi Logo Koperasi Desa Merah Putih",
    points: [
      {
        element: "Gunung Garut (Garut Mountain Silhouette)",
        meaning: "Garis lengkung geometris di bagian atas merepresentasikan tiga gunung pelindung dataran tinggi Garut (Gunung Cikuray, Papandayan, dan Guntur) yang menghasilkan terroir vulkanis kaya mineral makro bagi pertumbuhan kopi Arabika."
      },
      {
        element: "Biji Kopi Arabika Sempurna (Perfect Arabica Coffee Bean)",
        meaning: "Terletak di pusat logo dengan belahan meliuk khas varietas Arabika. Menunjukkan komitmen KDKMP pada spesialisasi produk bernilai tinggi dan kualitas Specialty Grade."
      },
      {
        element: "Daun Kopi Ganda (Dual Coffee Leaves)",
        meaning: "Mengapit biji kopi di sisi kiri dan kanan, melambangkan pertumbuhan berkelanjutan, harmoni wanatani (agroforestry), serta kemakmuran yang tumbuh subur bagi petani lokal."
      },
      {
        element: "Pita Merah Putih Melingkar (Encircled Red & White Ribbon)",
        meaning: "Lingkaran luar yang melilit logo bernuansa merah dan putih melambangkan kedaulatan, persatuan gotong royong anggota koperasi, serta ambisi ekspor nasional yang solid."
      }
    ]
  },
  typography: {
    primary: {
      name: "Inter / Space Grotesk (Sans-Serif)",
      usage: "Digunakan untuk teks utama (body copy), tabel spesifikasi, dokumen pengiriman, serta aplikasi digital modern. Memberikan kesan bersih, sangat terbaca (highly legible), fungsional, dan ramah teknologi."
    },
    display: {
      name: "Playfair Display / Georgia (Serif)",
      usage: "Digunakan untuk judul utama (headings), materi kampanye premium, sampul company profile, dan logo sekunder. Menunjukkan kesan warisan luhur (heritage), kualitas mewah (luxury), dan otentisitas internasional."
    }
  },
  packagingStyle: {
    description: "Desain kemasan KDKMP wajib menganut prinsip 'Luxury Minimalism' (Minimalis Mewah). Mengurangi elemen grafis yang terlalu ramai dan fokus pada kekuatan tipografi yang bersih, tata letak grid presisi (Swiss-grid), serta kombinasi warna hitam matte dengan aksen foil emas panas (gold hot stamping) dan merah menyala.",
    materials: [
      "Roasted Pouch: Menggunakan material daur ulang ramah lingkungan (bio-degradable) dengan lapisan barrier aluminium foil food-grade untuk mempertahankan aroma kopi.",
      "Green Bean Sack: Menggunakan karung goni serat alami tebal berstandar ekspor, dipadukan dengan kantung pelindung Grainpro kedap udara guna mencegah kontaminasi jamur selama berbulan-bulan di dalam kontainer laut.",
      "Gift Box: Kotak kaku tebal (rigid box) bertekstur linen, dengan penutup magnetis tersembunyi untuk memberikan pengalaman unboxing yang sangat berkesan bagi pembeli kelas VIP."
    ]
  },
  toneOfVoice: {
    traits: [
      {
        trait: "Profesional & Terpercaya (Authoritative & Trustworthy)",
        description: "Menyampaikan data teknis, sertifikasi, dan komitmen bisnis dengan bahasa yang lugas, presisi, dan sesuai dengan tata krama bisnis ekspor internasional."
      },
      {
        trait: "Hangat & Memberdayakan (Warm & Empowering)",
        description: "Menceritakan perjuangan petani, kolaborasi desa, dan kearifan lokal Garut dengan penuh rasa hormat, tulus, dan membangkitkan rasa bangga."
      },
      {
        trait: "Visioner & Berkelanjutan (Visionary & Sustainable)",
        description: "Menekankan kepedulian terhadap masa depan bumi melalui kampanye pelestarian alam dan praktik tani ramah lingkungan di setiap produk."
      }
    ]
  }
};

export const featuredArticle = {
  title: "Keberhasilan Koperasi Desa Merah Putih Mengangkat Kopi Arabika Garut ke Pasar Internasional",
  subtitle: "Bagaimana Kolaborasi Sosial Petani Lereng Cikuray Memadukan Standarisasi Mutu SCAA, Inovasi Pasca-Panen Kontemporer, dan Strategi Branding 'Luxury Minimalism' Guna Menembus Jantung Roastery Gelombang Ketiga di Asia, Eropa, dan Amerika.",
  author: "Business Development Committee KDKMP",
  date: "Juli 21, 2026",
  readingTime: "12 menit membaca",
  content: [
    `Dataran tinggi Garut, Jawa Barat, Indonesia—wilayah yang secara historis dikelilingi oleh barisan gunung api aktif yang megah seperti Gunung Cikuray, Gunung Papandayan, dan Gunung Guntur—kini telah menjelma menjadi episentrum baru bagi kebangkitan kopi spesialiti dunia. Di balik kabut pagi yang menyelimuti lereng berketinggian 1.500 meter di atas permukaan laut tersebut, tersimpan kekayaan vulkanis subur yang kaya akan mineral mikro. Kombinasi terroir yang luar biasa ini melahirkan biji kopi Arabika dengan karakteristik yang tiada duanya di dunia: keasaman sitrus yang menyegarkan layaknya jeruk lemon, bodi yang tebal dan lembut, serta rasa manis alami yang menyerupai gula aren cair yang bertahan lama di rongga mulut.`,

    `Namun, keindahan alam ini tidak selalu berjalan selaras dengan kesejahteraan ekonomi para petaninya. Beberapa tahun lalu, rantai distribusi perdagangan kopi di Garut sangatlah panjang dan timpang. Petani kecil di pedesaan kerap kali terpaksa menjual ceri kopi hasil petik mereka kepada tengkulak dengan harga murah di bawah rata-rata pasar. Di sisi lain, pembeli internasional (international buyer) kesulitan mendapatkan kualitas pasokan yang konsisten karena proses pengolahan pasca-panen di tingkat petani yang masih bersifat tradisional, serampangan, dan tanpa standarisasi baku.`,

    `Menghadapi kenyataan pahit tersebut, sebuah gerakan perubahan lahir dari bawah. Pada tahun 2020, sekelompok petani visioner bersama para penggiat kopi lokal bersepakat mendirikan Koperasi Desa Merah Putih (KDKMP). Koperasi ini didirikan bukan sekadar sebagai wadah pengumpul komoditas, melainkan sebagai sebuah entitas korporat modern yang mengemban misi suci: membawa Kopi Arabika Garut naik kelas secara profesional, berdaulat penuh atas rantai pasoknya sendiri, dan berhasil menembus pasar ekspor internasional kelas premium.`,

    `Langkah awal yang dilakukan KDKMP adalah merevolusi pola pikir budidaya kopi di tingkat hulu. Melalui kemitraan erat dengan para ahli agronomi, koperasi mengedukasi ratusan petani anggota tentang pentingnya pemetikan selektif—hanya memetik buah ceri yang telah berwarna merah penuh (full red cherries/double picked). Pemetikan merah ini menjamin kadar gula alami dalam biji kopi mencapai puncaknya, menciptakan fondasi rasa manis yang stabil.`,

    `Selain itu, KDKMP mengambil peran krusial dalam menerapkan metode wanatani (agroforestry). Tanaman kopi Arabika Garut milik anggota koperasi ditanam dengan sistem tumpang sari di bawah naungan pohon peneduh (shade-grown coffee) seperti tanaman alpukat, petai, jeruk, dan pohon suren asli daerah setempat. Pendekatan agroforestry ini secara dramatis meningkatkan keanekaragaman hayati tanah vulkanik, mencegah erosi tanah di lereng-lereng curam Garut, serta memperlambat proses pematangan buah ceri kopi sehingga menghasilkan biji dengan densitas yang sangat tinggi—sebuah parameter fisik krusial yang dicari oleh para coffee roaster papan atas dunia karena memudahkan proses pemanggangan kopi secara merata.`,

    `Setelah berhasil membenahi sektor hulu, KDKMP berinvestasi besar-besaran pada infrastruktur pengolahan pasca-panen (post-harvest processing) di sektor hilir. Koperasi membangun stasiun pengolahan pusat yang higienis, laboratorium cupping modern, serta kubah pengeringan khusus (greenhouse solar dryers) yang melindung biji kopi dari fluktuasi cuaca ekstrem. Riset mendalam tentang biokimia fermentasi pun gencar dilakukan.`,

    `Selain metode klasik seperti Wet Hulled (Giling Basah) yang menjadi ciri khas legendaris kopi Indonesia, KDKMP meluncurkan inovasi pengolahan pasca-panen kontemporer, seperti fermentasi anaerobik (Anaerobic Fermentation) baik dalam bentuk Anaerobic Natural maupun Anaerobic Honey. Dalam proses ini, ceri kopi ditempatkan dalam tangki baja antikarat kedap udara selama 72 hingga 120 jam dengan pengontrolan suhu dan pH yang sangat presisi. Proses fermentasi tertutup ini mendorong aktivitas mikroba tertentu yang menghasilkan asam laktat halus, menciptakan sensasi rasa buah tropis yang sangat intens, kompleks, dan bersih (clean cup score yang tinggi). Lot-lot mikro (micro-lots) hasil fermentasi anaerobik ini secara rutin memperoleh skor cupping di atas 85 hingga 87 poin dari Q-Grader bersertifikasi internasional (Coffee Quality Institute/CQI), menyejajarkan kopi KDKMP dengan kopi-kopi spesialiti terbaik asal Ethiopia maupun Panama.`,

    `Namun, memiliki produk berkualitas tinggi tidaklah cukup tanpa strategi branding yang tepat sasaran di pasar global. Di sinilah Koperasi Desa Merah Putih melakukan lompatan strategis dengan menerapkan identitas visual 'Luxury Minimalism'. KDKMP membuang jauh-jauh gaya visual klise komoditas massal yang membosankan. Sebaliknya, mereka mendesain kemasan standing pouch berlapis foil tebal dengan warna hitam matte obsidian yang dikombinasikan dengan sentuhan garis geometris merah menyala (Sovereign Scarlet Red) dan tipografi modern yang bersih menggunakan font sans-serif presisi tinggi. Desain ini memancarkan kesan berkelas, eksklusif, dan profesional yang sangat disukai oleh roastery gelombang ketiga (third-wave roastery) di Tokyo, Seoul, London, dan San Francisco.`,

    `Setiap kemasan ritel dan karung ekspor KDKMP tidak hanya memuat biji kopi, melainkan juga menceritakan sebuah narasi kemanusiaan dan keberlanjutan. Melalui label pelacakan (traceability labels) yang disematkan pada kemasan, konsumen akhir dapat memindai kode QR untuk mengetahui nama petani yang menanam kopi tersebut, ketinggian spesifik koordinat kebunnya, tanggal panen, hingga profil pengolahan pasca-panennya. Hal ini menjawab tren global modern akan pentingnya transparansi penuh (full transparency) dalam perdagangan komoditas pertanian berkelanjutan.`,

    `Di kancah pemasaran digital, KDKMP tidak lagi bergantung pada pameran fisik konvensional. Mereka membangun portal ekspor digital terintegrasi yang menyajikan profil perusahaan multi-bahasa, katalog produk interaktif, hingga lembar data analisis mutu laboratorium (quality lab datasheets) yang dapat diunduh secara real-time oleh para calon pembeli internasional. Koperasi juga memanfaatkan platform digital global seperti Alibaba, TradeKey, serta platform khusus kopi internasional untuk menjangkau roastery menengah yang mencari pasokan mikro-lot berkualitas tinggi tanpa melalui perantara berlapis.`,

    `Hasil dari perpaduan presisi hulu-hilir, standarisasi ketat, dan ketajaman strategi branding ini sangatlah nyata. KDKMP sukses menandatangani kontrak ekspor tahunan jangka panjang (annual export contracts) dengan sejumlah perusahaan importir kopi terkemuka di berbagai belahan dunia. Karung-karung goni KDKMP yang kokoh dengan lapisan pelindung Grainpro modern kini memenuhi kontainer-kontainer kapal kargo yang bertolak dari Pelabuhan Tanjung Priok menuju pelabuhan-pelabuhan utama di Hamburg, Los Angeles, Yokohama, dan Shanghai.`,

    `Keberhasilan ekspor ini membawa dampak ekonomi yang revolusioner bagi masyarakat desa di dataran tinggi Garut. Melalui sistem koperasi yang demokratis, KDKMP menerapkan kebijakan harga pembelian ceri kopi dari petani mitra sebesar 30% hingga 45% di atas harga pasar tengkulak tradisional. Koperasi juga menyisihkan 15% dari keuntungan bersih ekspor untuk dikembalikan langsung kepada masyarakat dalam bentuk 'Dana Sosial Peduli Petani'. Dana ini digunakan untuk mendanai pengadaan pupuk organik gratis, pembibitan varietas unggul tahan hama, pembangunan fasilitas sanitasi bersih di desa, program beasiswa sekolah untuk anak-anak petani, hingga penyediaan jaminan kesehatan mandiri bagi seluruh anggota koperasi.`,

    `Dengan model bisnis sosial yang berkeadilan dan berorientasi ekspor ini, Koperasi Desa Merah Putih berhasil membuktikan sebuah tesis penting bagi pembangunan ekonomi pedesaan di Indonesia: bahwa sebuah koperasi pedesaan, jika dikelola dengan standar profesionalisme korporat modern, ketajaman branding internasional, dan komitmen mutu tanpa kompromi, mampu mendobrak batasan pasar global. KDKMP bukan sekadar mengekspor biji kopi Arabika Garut terbaik; mereka sedang mengirimkan pesan kebanggaan, integritas, dan martabat bangsa Indonesia ke seluruh dunia—satu cangkir demi satu cangkir.`
  ]
};
