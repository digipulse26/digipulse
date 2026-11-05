export const EMAIL = 'hello@digipulse.studio';

export const services = [
  {
    slug: 'web-development', no: '01', title: 'Web Development', short: 'Website yang bekerja untuk bisnis Anda 24 jam.',
    desc: 'Website yang tampil profesional, terbuka cepat, dan mudah ditemukan, agar pengunjung mantap menjadi pelanggan.',
    points: ['Tampilan meyakinkan yang membangun kepercayaan sejak detik pertama', 'Terbuka cepat di ponsel dan koneksi lambat', 'Siap ditemukan di Google (SEO teknis + analytics)', 'Konten mudah Anda ubah sendiri, tanpa harus menghubungi developer'],
    tags: ['React', 'Vite', 'Tailwind', 'SEO'], fit: 'Website',
    stack: [{ g: 'Frontend', items: ['react', 'vite', 'tailwind', 'typescript'] }, { g: 'Performa & SEO', items: ['ga4', 'searchconsole'] }, { g: 'Deploy', items: ['vercel', 'cloudflare', 'githubactions'] }],
  },
  {
    slug: 'web-application', no: '02', title: 'Web Application', short: 'Tinggalkan spreadsheet. Kerja jadi lebih cepat dan rapi.',
    desc: 'Aplikasi yang merapikan alur kerja tim Anda, dari dashboard sampai portal pelanggan.',
    points: ['Hak akses per peran, jadi data hanya dilihat orang yang tepat', 'Laporan dan ekspor otomatis tanpa rekap manual', 'Dibuat sesuai alur kerja Anda, bukan sebaliknya', 'Mudah dipelajari staf baru dan siap bertumbuh'],
    tags: ['Dashboard', 'API', 'Database', 'Auth'], fit: 'Aplikasi',
    stack: [{ g: 'Frontend', items: ['react', 'typescript'] }, { g: 'Backend', items: ['node', 'laravel', 'postgres'] }, { g: 'Keamanan', items: ['jwt', 'cloudflare'] }],
  },
  {
    slug: 'saas-development', no: '03', title: 'SaaS Development', short: 'Ubah ide produk jadi layanan berlangganan yang siap dijual.',
    desc: 'Dari ide mentah menjadi produk langganan pertama yang siap diuji ke pasar.',
    points: ['Fokus fitur inti, jadi MVP cepat rilis dan hemat biaya', 'Satu sistem untuk banyak pelanggan (multi-tenant)', 'Pembayaran berulang dan manajemen paket langganan', 'Data penggunaan untuk menentukan langkah berikutnya'],
    tags: ['MVP', 'Billing', 'Multi-tenant', 'Cloud'], fit: 'Aplikasi',
    stack: [{ g: 'Produk', items: ['next', 'typescript', 'postgres', 'redis'] }, { g: 'Pembayaran', items: ['stripe', 'xendit'] }, { g: 'Infrastruktur', items: ['docker', 'aws', 'githubactions'] }],
  },
  {
    slug: 'ui-ux-design', no: '04', title: 'UI/UX Design', short: 'Produk yang mudah dipakai membuat orang kembali lagi.',
    desc: 'Alur yang jelas dan tampilan yang nyaman, diuji lewat prototipe sebelum dibangun.',
    points: ['Memahami pengguna Anda dulu, baru merancang', 'Prototipe interaktif yang bisa dicoba sebelum dikodekan', 'Design system supaya tampilan konsisten di semua layar', 'Menghindari revisi mahal di tahap pengembangan'],
    tags: ['Figma', 'Prototype', 'Design System', 'Riset'], fit: 'Website',
    stack: [{ g: 'Desain', items: ['figma'] }, { g: 'Serah terima', items: ['storybook'] }],
  },
  {
    slug: 'system-integration', no: '05', title: 'System Integration', short: 'Satukan semua sistem. Data mengalir sendiri.',
    desc: 'Hubungkan semua sistem Anda, dan biarkan data bergerak sendiri tanpa input ulang.',
    points: ['Tanpa input ganda, mengurangi salah catat', 'Tidak perlu mengganti sistem lama yang masih berguna', 'Integrasi pembayaran, WhatsApp, dan API lain', 'Sinkronisasi terpantau, dilengkapi dokumentasi untuk tim Anda'],
    tags: ['REST', 'Webhook', 'ETL', 'Payment'], fit: 'Aplikasi',
    stack: [{ g: 'Koneksi', items: ['graphql', 'whatsapp', 'google'] }, { g: 'Alur data', items: ['n8n', 'node'] }, { g: 'Pemantauan', items: ['sentry'] }],
  },
  {
    slug: 'iot-embedded-system', no: '06', title: 'IoT & Embedded System', short: 'Pantau perangkat dan lingkungan Anda dari mana saja.',
    desc: 'Sensor, perangkat, dan dasbor yang memantau kondisi lapangan dan memberi kabar saat ada yang janggal.',
    points: ['Pemantauan real-time dari ponsel atau laptop', 'Notifikasi otomatis saat nilai melewati batas', 'Perangkat hemat daya dan tahan dipakai terus-menerus', 'Satu paket: perangkat keras, firmware, dan dasbor'],
    tags: ['ESP32', 'MQTT', 'Sensor', 'Dashboard'], fit: 'IoT',
    stack: [{ g: 'Perangkat', items: ['esp32', 'arduino', 'raspberrypi'] }, { g: 'Komunikasi', items: ['mqtt'] }, { g: 'Dasbor', items: ['nodered', 'grafana', 'influxdb', 'telegram'] }],
  },
  {
    slug: 'graphic-design', no: '07', title: 'Graphic Design', short: 'Desain yang bikin orang berhenti scroll dan mau beli.',
    desc: 'Poster, banner, konten sosial media, hingga label kemasan, tampil rapi dan siap pakai.',
    points: ['Poster, flyer, spanduk, dan banner yang mudah terbaca dari jauh', 'Konten media sosial harian dengan tampilan seragam', 'Label kemasan yang membuat produk terlihat lebih bernilai', 'Ilustrasi vector tajam di ukuran apa pun, plus edit foto dasar'],
    tags: ['Poster', 'Banner', 'Label Kemasan', 'Vector'], fit: 'Kreatif',
    stack: [{ g: 'Vector & ilustrasi', items: ['illustrator', 'coreldraw'] }, { g: 'Foto & layout', items: ['photoshop', 'canva', 'figma'] }],
  },
  {
    slug: 'video-editing', no: '08', title: 'Video Editing', short: 'Video singkat dan undangan digital yang langsung dibagikan.',
    desc: 'Video singkat yang diingat dan undangan digital yang istimewa, mudah dibagikan lewat chat.',
    points: ['Undangan digital gambar atau video yang berkesan', 'Video promosi singkat dengan teks dan musik yang pas', 'Format siap pakai untuk WhatsApp, Instagram, dan TikTok', 'Proses ringkas: kirim bahan, terima hasil, revisi seperlunya'],
    tags: ['Undangan Digital', 'Video Singkat', 'Reels', 'Teks & Musik'], fit: 'Kreatif',
    stack: [{ g: 'Penyuntingan', items: ['premiere', 'capcut', 'davinci'] }, { g: 'Efek & teks', items: ['aftereffects'] }],
  },
  {
    slug: 'maintenance-support', no: '09', title: 'Maintenance & Support', short: 'Tenang, sistem Anda tetap aman dan selalu terawat.',
    desc: 'Dipantau, diperbarui, dan diperbaiki rutin, supaya Anda tenang fokus pada bisnis.',
    points: ['Pemantauan uptime, masalah ketahuan lebih dulu', 'Pembaruan keamanan rutin agar tidak ada celah lama', 'Respons cepat bila ada kendala', 'Backup berkala dan roadmap perbaikan yang jelas'],
    tags: ['Monitoring', 'Security', 'SLA', 'Backup'], fit: 'Aplikasi',
    stack: [{ g: 'Pemantauan', items: ['sentry', 'cloudflare'] }, { g: 'Versi & cadangan', items: ['git', 'githubactions', 'docker'] }],
  },
];

export const steps = [
  { t: 'Konsultasi', d: 'Kami mendengar kebutuhan, konteks, prioritas, dan batasan sebelum menentukan pendekatan.' },
  { t: 'Analisis', d: 'Kebutuhan diterjemahkan menjadi lingkup kerja, struktur data, dan daftar risiko.' },
  { t: 'Desain', d: 'Alur pengguna, struktur halaman, dan tampilan disusun sesuai lingkup yang disepakati.' },
  { t: 'Pengembangan', d: 'Dikerjakan bertahap, dengan pembaruan rutin yang bisa Anda coba di lingkungan uji.' },
  { t: 'Pengujian', d: 'Fungsi, responsivitas, aksesibilitas, performa, dan keamanan diperiksa menyeluruh.' },
  { t: 'Peluncuran', d: 'Domain, sertifikat, analytics, dan pemantauan disiapkan hingga semuanya berjalan.' },
  { t: 'Dukungan', d: 'Pendampingan setelah rilis, pemeliharaan, dan pengembangan lanjutan.' },
];

export const projects = [
  {
    slug: 'apex-financial-dashboard', title: 'Apex Financial Dashboard', cat: 'Web App', tag: 'Website',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=70',
    desc: 'Platform pemantauan portofolio aset dengan analitik otomatis dan prediksi tren.',
    problem: 'Tim analis memindahkan data dari banyak sumber ke spreadsheet secara manual setiap hari.',
    solution: 'Kami membangun dasbor real-time yang menarik data otomatis, lengkap dengan grafik interaktif dan peringatan.',
    result: ['Pelaporan harian berubah dari jam menjadi menit', 'Satu sumber data untuk seluruh tim', 'Peringatan otomatis saat angka melewati batas'],
  },
  {
    slug: 'velox-ecommerce', title: 'Velox E-Commerce Experience', cat: 'UI/UX', tag: 'Website',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=70',
    desc: 'Toko online fesyen dengan pratinjau produk 3D dan proses checkout yang singkat.',
    problem: 'Pengunjung banyak yang keluar di tengah proses pembelian karena alurnya panjang.',
    solution: 'Kami merombak alur belanja, menambahkan pratinjau produk interaktif, dan menyederhanakan checkout.',
    result: ['Checkout dipangkas menjadi tiga langkah', 'Pratinjau produk 360° di perangkat seluler', 'Halaman tetap ringan di jaringan lambat'],
  },
  {
    slug: 'pulse-ai-mobile', title: 'Pulse AI Assistant', cat: 'Mobile', tag: 'Aplikasi',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1000&q=70',
    desc: 'Aplikasi asisten suara untuk mengatur tugas harian dan mencatat rapat secara otomatis.',
    problem: 'Catatan rapat tercecer dan tindak lanjut sering terlupa.',
    solution: 'Kami membuat aplikasi yang mentranskripsi suara, merangkum poin penting, dan menjadwalkan pengingat.',
    result: ['Transkripsi langsung selama rapat', 'Ringkasan dan daftar tugas otomatis', 'Sinkron di Android dan iOS'],
  },
  {
    slug: 'nexus-saas-portal', title: 'Nexus SaaS Portal', cat: 'Web App', tag: 'Aplikasi',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=70',
    desc: 'Situs pemasaran dan portal pelanggan untuk produk langganan, lengkap dengan onboarding.',
    problem: 'Calon pelanggan bingung memulai karena situs pemasaran dan aplikasi terpisah.',
    solution: 'Kami menyatukan pengalaman dari halaman awal, pendaftaran, sampai panduan penggunaan pertama.',
    result: ['Pendaftaran selesai dalam satu alur', 'Panduan interaktif untuk pengguna baru', 'Manajemen paket dan tagihan mandiri'],
  },
];

export const products = [
  { slug: 'pulsedesk', name: 'PulseDesk', status: 'Tersedia', desc: 'Sistem tiket bantuan pelanggan yang merapikan keluhan, penugasan, dan riwayat percakapan dalam satu layar.', feats: ['Kotak masuk terpadu', 'Penugasan otomatis', 'Laporan waktu respons'], c: 'primary' },
  { slug: 'pulsestock', name: 'PulseStock', status: 'Tersedia', desc: 'Pencatatan stok multi-gudang dengan pemindai kode batang dan peringatan stok menipis.', feats: ['Multi-gudang', 'Pindai barcode', 'Peringatan stok'], c: 'accent' },
  { slug: 'pulsesense', name: 'PulseSense', status: 'Dalam pengembangan', desc: 'Platform pemantauan sensor IoT: suhu, kelembapan, dan energi, lengkap dengan notifikasi ambang batas.', feats: ['Dasbor real-time', 'Notifikasi ambang', 'Riwayat data'], c: 'primary' },
];

export const tools = { react: 'React', vite: 'Vite', tailwind: 'Tailwind CSS', typescript: 'TypeScript', ga4: 'Google Analytics', searchconsole: 'Search Console', vercel: 'Vercel', cloudflare: 'Cloudflare', githubactions: 'GitHub Actions', node: 'Node.js', laravel: 'Laravel', postgres: 'PostgreSQL', jwt: 'JWT', next: 'Next.js', redis: 'Redis', stripe: 'Stripe', xendit: 'Xendit', docker: 'Docker', aws: 'AWS', figma: 'Figma', storybook: 'Storybook', graphql: 'GraphQL', whatsapp: 'WhatsApp Business API', google: 'Google Workspace', n8n: 'n8n', sentry: 'Sentry', git: 'Git', esp32: 'ESP32', arduino: 'Arduino', raspberrypi: 'Raspberry Pi', mqtt: 'MQTT', nodered: 'Node-RED', grafana: 'Grafana', influxdb: 'InfluxDB', telegram: 'Telegram', illustrator: 'Adobe Illustrator', photoshop: 'Adobe Photoshop', premiere: 'Adobe Premiere Pro', aftereffects: 'After Effects', canva: 'Canva', coreldraw: 'CorelDRAW', davinci: 'DaVinci Resolve', capcut: 'CapCut' };
