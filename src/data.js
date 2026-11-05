export const EMAIL = 'digipulseid@gmail.com';

export const services = [
  {
    slug: 'web-development', no: '01', title: 'Web Development', short: 'Website yang bekerja untuk bisnis Anda sepanjang waktu.',
    desc: 'Website yang tampil profesional, terbuka cepat, dan mudah ditemukan, sehingga pengunjung yakin menjadi pelanggan.',
    points: ['Tampilan profesional yang membangun kepercayaan sejak kunjungan pertama', 'Terbuka cepat di ponsel maupun koneksi yang lambat', 'Siap ditemukan di Google melalui SEO teknis dan analytics', 'Konten dapat Anda perbarui sendiri tanpa bantuan developer'],
    tags: ['React', 'Vite', 'Tailwind', 'SEO'], fit: 'Website',
    stack: [{ g: 'Frontend', items: ['react', 'vite', 'tailwind', 'typescript'] }, { g: 'Performa & SEO', items: ['ga4', 'searchconsole'] }, { g: 'Deploy', items: ['vercel', 'cloudflare', 'githubactions'] }],
  },
  {
    slug: 'web-application', no: '02', title: 'Web Application', short: 'Tinggalkan spreadsheet, bekerja lebih cepat dan terstruktur.',
    desc: 'Aplikasi yang merapikan alur kerja tim Anda, dari dashboard hingga portal pelanggan.',
    points: ['Hak akses sesuai peran, sehingga data hanya dilihat oleh pihak yang tepat', 'Laporan dan ekspor data otomatis tanpa rekap manual', 'Dirancang mengikuti alur kerja Anda, bukan sebaliknya', 'Mudah dipelajari staf baru dan siap berkembang'],
    tags: ['Dashboard', 'API', 'Database', 'Auth'], fit: 'Aplikasi',
    stack: [{ g: 'Frontend', items: ['react', 'typescript'] }, { g: 'Backend', items: ['node', 'laravel', 'postgres'] }, { g: 'Keamanan', items: ['jwt', 'cloudflare'] }],
  },
  {
    slug: 'saas-development', no: '03', title: 'SaaS Development', short: 'Wujudkan ide produk menjadi layanan berlangganan yang siap dipasarkan.',
    desc: 'Dari gagasan awal menjadi produk langganan pertama yang siap diuji ke pasar.',
    points: ['Fokus pada fitur inti, sehingga MVP cepat rilis dan efisien biaya', 'Satu sistem untuk banyak pelanggan (multi-tenant)', 'Pembayaran berulang dan pengelolaan paket langganan', 'Data penggunaan sebagai dasar keputusan berikutnya'],
    tags: ['MVP', 'Billing', 'Multi-tenant', 'Cloud'], fit: 'Aplikasi',
    stack: [{ g: 'Produk', items: ['next', 'typescript', 'postgres', 'redis'] }, { g: 'Pembayaran', items: ['stripe', 'xendit'] }, { g: 'Infrastruktur', items: ['docker', 'aws', 'githubactions'] }],
  },
  {
    slug: 'ui-ux-design', no: '04', title: 'UI/UX Design', short: 'Produk yang mudah digunakan membuat pelanggan kembali.',
    desc: 'Alur yang jelas dan tampilan yang nyaman, diuji melalui prototipe sebelum dibangun.',
    points: ['Memahami pengguna Anda terlebih dahulu, baru merancang', 'Prototipe interaktif yang dapat dicoba sebelum pengembangan', 'Design system agar tampilan konsisten di semua layar', 'Menghindari revisi yang mahal pada tahap pengembangan'],
    tags: ['Figma', 'Prototype', 'Design System', 'Riset'], fit: 'Website',
    stack: [{ g: 'Desain', items: ['figma'] }, { g: 'Serah terima', items: ['storybook'] }],
  },
  {
    slug: 'system-integration', no: '05', title: 'System Integration', short: 'Satukan seluruh sistem Anda, biarkan data mengalir otomatis.',
    desc: 'Hubungkan seluruh sistem Anda dan biarkan data berpindah sendiri tanpa input ulang.',
    points: ['Tanpa input ganda, sehingga risiko salah catat berkurang', 'Tidak perlu mengganti sistem lama yang masih bermanfaat', 'Integrasi pembayaran, WhatsApp, dan API pihak ketiga', 'Sinkronisasi terpantau, dilengkapi dokumentasi untuk tim Anda'],
    tags: ['REST', 'Webhook', 'ETL', 'Payment'], fit: 'Aplikasi',
    stack: [{ g: 'Koneksi', items: ['graphql', 'whatsapp', 'google'] }, { g: 'Alur data', items: ['n8n', 'node'] }, { g: 'Pemantauan', items: ['sentry'] }],
  },
  {
    slug: 'iot-embedded-system', no: '06', title: 'IoT & Embedded System', short: 'Pantau perangkat dan lingkungan Anda dari mana saja.',
    desc: 'Sensor, perangkat, dan dasbor yang memantau kondisi lapangan serta memberi kabar saat ada yang tidak normal.',
    points: ['Pemantauan real-time dari ponsel maupun laptop', 'Notifikasi otomatis saat nilai melewati batas', 'Perangkat hemat daya dan tahan beroperasi terus-menerus', 'Satu paket lengkap: perangkat keras, firmware, dan dasbor'],
    tags: ['ESP32', 'MQTT', 'Sensor', 'Dashboard'], fit: 'IoT',
    stack: [{ g: 'Perangkat', items: ['esp32', 'arduino', 'raspberrypi'] }, { g: 'Komunikasi', items: ['mqtt'] }, { g: 'Dasbor', items: ['nodered', 'grafana', 'influxdb', 'telegram'] }],
  },
  {
    slug: 'graphic-design', no: '07', title: 'Graphic Design', short: 'Desain yang menarik perhatian dan mendorong pembelian.',
    desc: 'Poster, banner, konten media sosial, hingga label kemasan, tampil rapi dan siap digunakan.',
    points: ['Poster, flyer, spanduk, dan banner yang mudah terbaca dari kejauhan', 'Konten media sosial harian dengan tampilan yang seragam', 'Label kemasan yang meningkatkan nilai produk Anda', 'Ilustrasi vector yang tajam di ukuran apa pun, serta edit foto dasar'],
    tags: ['Poster', 'Banner', 'Label Kemasan', 'Vector'], fit: 'Kreatif',
    stack: [{ g: 'Vector & ilustrasi', items: ['illustrator', 'coreldraw'] }, { g: 'Foto & layout', items: ['photoshop', 'canva', 'figma'] }],
  },
  {
    slug: 'video-editing', no: '08', title: 'Video Editing', short: 'Video singkat dan undangan digital yang berkesan.',
    desc: 'Video singkat yang mudah diingat dan undangan digital yang istimewa, praktis dibagikan melalui pesan.',
    points: ['Undangan digital berupa gambar atau video yang berkesan', 'Video promosi singkat dengan teks dan musik yang selaras', 'Format siap pakai untuk WhatsApp, Instagram, dan TikTok', 'Proses ringkas: kirim bahan, terima hasil, revisi seperlunya'],
    tags: ['Undangan Digital', 'Video Singkat', 'Reels', 'Teks & Musik'], fit: 'Kreatif',
    stack: [{ g: 'Penyuntingan', items: ['premiere', 'capcut', 'davinci'] }, { g: 'Efek & teks', items: ['aftereffects'] }],
  },
  {
    slug: 'maintenance-support', no: '09', title: 'Maintenance & Support', short: 'Sistem Anda tetap aman dan terawat.',
    desc: 'Dipantau, diperbarui, dan diperbaiki secara rutin, agar Anda dapat fokus pada pertumbuhan bisnis.',
    points: ['Pemantauan uptime, sehingga masalah terdeteksi lebih awal', 'Pembaruan keamanan rutin untuk menutup celah yang ada', 'Respons cepat saat terjadi kendala', 'Backup berkala dan roadmap perbaikan yang jelas'],
    tags: ['Monitoring', 'Security', 'SLA', 'Backup'], fit: 'Aplikasi',
    stack: [{ g: 'Pemantauan', items: ['sentry', 'cloudflare'] }, { g: 'Versi & cadangan', items: ['git', 'githubactions', 'docker'] }],
  },
];

export const steps = [
  { t: 'Konsultasi', d: 'Kami memahami kebutuhan, konteks, prioritas, dan batasan Anda sebelum menentukan pendekatan terbaik.' },
  { t: 'Analisis', d: 'Kebutuhan diterjemahkan menjadi lingkup pekerjaan, struktur data, dan pemetaan risiko yang jelas.' },
  { t: 'Desain', d: 'Alur pengguna, struktur halaman, dan antarmuka disusun sesuai lingkup yang telah disepakati.' },
  { t: 'Pengembangan', d: 'Dikerjakan secara bertahap, dengan pembaruan rutin yang dapat Anda coba di lingkungan uji.' },
  { t: 'Pengujian', d: 'Fungsi, responsivitas, aksesibilitas, performa, dan keamanan diperiksa secara menyeluruh.' },
  { t: 'Peluncuran', d: 'Domain, sertifikat keamanan, analytics, dan pemantauan kami siapkan hingga seluruhnya berjalan.' },
  { t: 'Dukungan', d: 'Pendampingan setelah rilis, pemeliharaan, dan pengembangan lanjutan sesuai kebutuhan Anda.' },
];

export const projects = [
  {
    slug: 'apex-financial-dashboard', title: 'Apex Financial Dashboard', cat: 'Web App', tag: 'Website',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=70',
    desc: 'Platform pemantauan portofolio aset dengan analitik otomatis dan prediksi tren.',
    problem: 'Tim analis harus memindahkan data dari berbagai sumber ke spreadsheet secara manual setiap hari.',
    solution: 'Kami membangun dasbor real-time yang menarik data secara otomatis, lengkap dengan grafik interaktif dan peringatan.',
    result: ['Pelaporan harian berubah dari hitungan jam menjadi menit', 'Satu sumber data tepercaya untuk seluruh tim', 'Peringatan otomatis saat angka melewati batas'],
  },
  {
    slug: 'velox-ecommerce', title: 'Velox E-Commerce Experience', cat: 'UI/UX', tag: 'Website',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=70',
    desc: 'Toko online fesyen dengan pratinjau produk 3D dan proses checkout yang ringkas.',
    problem: 'Banyak pengunjung meninggalkan halaman di tengah proses pembelian karena alurnya terlalu panjang.',
    solution: 'Kami merombak alur belanja, menambahkan pratinjau produk interaktif, dan menyederhanakan proses checkout.',
    result: ['Checkout dipangkas menjadi tiga langkah', 'Pratinjau produk 360° di perangkat seluler', 'Halaman tetap ringan di jaringan yang lambat'],
  },
  {
    slug: 'pulse-ai-mobile', title: 'Pulse AI Assistant', cat: 'Mobile', tag: 'Aplikasi',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1000&q=70',
    desc: 'Aplikasi asisten suara untuk mengatur tugas harian dan mencatat rapat secara otomatis.',
    problem: 'Catatan rapat tercecer dan tindak lanjut sering terlewat.',
    solution: 'Kami membuat aplikasi yang mentranskripsi suara, merangkum poin penting, dan menjadwalkan pengingat.',
    result: ['Transkripsi langsung selama rapat berlangsung', 'Ringkasan dan daftar tugas yang dibuat otomatis', 'Sinkronisasi di Android dan iOS'],
  },
  {
    slug: 'nexus-saas-portal', title: 'Nexus SaaS Portal', cat: 'Web App', tag: 'Aplikasi',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=70',
    desc: 'Situs pemasaran dan portal pelanggan untuk produk langganan, lengkap dengan onboarding.',
    problem: 'Calon pelanggan kesulitan memulai karena situs pemasaran dan aplikasi terpisah.',
    solution: 'Kami menyatukan pengalaman dari halaman awal, pendaftaran, hingga panduan penggunaan pertama.',
    result: ['Pendaftaran selesai dalam satu alur', 'Panduan interaktif untuk pengguna baru', 'Pengelolaan paket dan tagihan secara mandiri'],
  },
];

export const products = [
  { slug: 'pulsedesk', name: 'PulseDesk', status: 'Tersedia', desc: 'Sistem tiket bantuan pelanggan yang merapikan keluhan, penugasan, dan riwayat percakapan dalam satu layar.', feats: ['Kotak masuk terpadu', 'Penugasan otomatis', 'Laporan waktu respons'], c: 'primary' },
  { slug: 'pulsestock', name: 'PulseStock', status: 'Tersedia', desc: 'Pencatatan stok multi-gudang dengan pemindai kode batang dan peringatan otomatis saat stok menipis.', feats: ['Multi-gudang', 'Pindai barcode', 'Peringatan stok'], c: 'accent' },
  { slug: 'pulsesense', name: 'PulseSense', status: 'Dalam pengembangan', desc: 'Platform pemantauan sensor IoT untuk suhu, kelembapan, dan energi, lengkap dengan notifikasi saat melewati ambang batas.', feats: ['Dasbor real-time', 'Notifikasi ambang', 'Riwayat data'], c: 'primary' },
];

export const tools = { react: 'React', vite: 'Vite', tailwind: 'Tailwind CSS', typescript: 'TypeScript', ga4: 'Google Analytics', searchconsole: 'Search Console', vercel: 'Vercel', cloudflare: 'Cloudflare', githubactions: 'GitHub Actions', node: 'Node.js', laravel: 'Laravel', postgres: 'PostgreSQL', jwt: 'JWT', next: 'Next.js', redis: 'Redis', stripe: 'Stripe', xendit: 'Xendit', docker: 'Docker', aws: 'AWS', figma: 'Figma', storybook: 'Storybook', graphql: 'GraphQL', whatsapp: 'WhatsApp Business API', google: 'Google Workspace', n8n: 'n8n', sentry: 'Sentry', git: 'Git', esp32: 'ESP32', arduino: 'Arduino', raspberrypi: 'Raspberry Pi', mqtt: 'MQTT', nodered: 'Node-RED', grafana: 'Grafana', influxdb: 'InfluxDB', telegram: 'Telegram', illustrator: 'Adobe Illustrator', photoshop: 'Adobe Photoshop', premiere: 'Adobe Premiere Pro', aftereffects: 'After Effects', canva: 'Canva', coreldraw: 'CorelDRAW', davinci: 'DaVinci Resolve', capcut: 'CapCut' };
