export const EMAIL = 'digipulseid@gmail.com';

export const services = [
  {
    slug: 'web-development', no: '01', title: 'Web Development', short: 'Website profesional yang mudah ditemukan dan cepat diakses.',
    desc: 'Kami membangun website yang rapi, cepat diakses melalui ponsel, dan mudah ditemukan di mesin pencari.',
    points: ['Tampilan yang menyesuaikan identitas usaha Anda', 'Waktu akses cepat, bahkan lewat koneksi seluler', 'Optimasi SEO teknis dan pemasangan analytics', 'Konten dapat diperbarui sendiri melalui panel pengelola'],
    tags: ['React', 'Vite', 'Tailwind', 'SEO'], fit: 'Website',
    stack: [{ g: 'Frontend', items: ['react', 'vite', 'tailwind', 'typescript'] }, { g: 'Performa & SEO', items: ['ga4', 'searchconsole'] }, { g: 'Deploy', items: ['vercel', 'cloudflare', 'githubactions'] }],
  },
  {
    slug: 'web-application', no: '02', title: 'Web Application', short: 'Aplikasi web yang disesuaikan dengan alur kerja tim Anda.',
    desc: 'Dashboard, sistem internal, hingga portal pelanggan untuk menggantikan pencatatan manual dan pekerjaan berulang.',
    points: ['Hak akses berdasarkan peran pengguna', 'Laporan dan ekspor data secara otomatis', 'Antarmuka yang mudah dipelajari oleh staf', 'Struktur sistem yang siap dikembangkan lebih lanjut'],
    tags: ['Dashboard', 'API', 'Database', 'Auth'], fit: 'Aplikasi',
    stack: [{ g: 'Frontend', items: ['react', 'typescript'] }, { g: 'Backend', items: ['node', 'laravel', 'postgres'] }, { g: 'Keamanan', items: ['jwt', 'cloudflare'] }],
  },
  {
    slug: 'saas-development', no: '03', title: 'SaaS Development', short: 'Pengembangan produk berlangganan sejak tahap awal.',
    desc: 'Kami membantu menyusun versi pertama produk Anda (MVP), termasuk sistem langganan dan pembayaran, agar dapat segera diuji oleh pengguna.',
    points: ['Penentuan fitur inti untuk versi pertama', 'Arsitektur multi-tenant untuk banyak pelanggan', 'Integrasi pembayaran berulang dan paket langganan', 'Data penggunaan sebagai dasar pengembangan berikutnya'],
    tags: ['MVP', 'Billing', 'Multi-tenant', 'Cloud'], fit: 'Aplikasi',
    stack: [{ g: 'Produk', items: ['next', 'typescript', 'postgres', 'redis'] }, { g: 'Pembayaran', items: ['stripe', 'xendit'] }, { g: 'Infrastruktur', items: ['docker', 'aws', 'githubactions'] }],
  },
  {
    slug: 'ui-ux-design', no: '04', title: 'UI/UX Design', short: 'Rancangan antarmuka yang jelas sebelum tahap pengembangan.',
    desc: 'Riset pengguna, alur aplikasi, dan prototipe interaktif untuk memastikan produk mudah digunakan sebelum dibangun.',
    points: ['Riset kebutuhan dan perilaku pengguna', 'Wireframe dan prototipe yang dapat diuji', 'Design system untuk tampilan yang konsisten', 'Mengurangi revisi pada tahap pengembangan'],
    tags: ['Figma', 'Prototype', 'Design System', 'Riset'], fit: 'Website',
    stack: [{ g: 'Desain', items: ['figma'] }, { g: 'Serah terima', items: ['storybook'] }],
  },
  {
    slug: 'system-integration', no: '05', title: 'System Integration', short: 'Menghubungkan sistem yang selama ini berjalan terpisah.',
    desc: 'Integrasi antaraplikasi, layanan pembayaran, dan API pihak ketiga agar data tersinkron tanpa input ulang.',
    points: ['Pemetaan sistem dan sumber data yang ada', 'Integrasi API, webhook, dan payment gateway', 'Sinkronisasi data yang dapat dipantau', 'Dokumentasi teknis untuk tim internal'],
    tags: ['REST', 'Webhook', 'ETL', 'Payment'], fit: 'Aplikasi',
    stack: [{ g: 'Koneksi', items: ['graphql', 'whatsapp', 'google'] }, { g: 'Alur data', items: ['n8n', 'node'] }, { g: 'Pemantauan', items: ['sentry'] }],
  },
  {
    slug: 'iot-embedded-system', no: '06', title: 'IoT & Embedded System', short: 'Pemantauan perangkat dan lingkungan secara real-time.',
    desc: 'Sensor, perangkat, dan dashboard untuk memantau kondisi di lapangan, dilengkapi notifikasi ketika terjadi perubahan.',
    points: ['Pemantauan melalui ponsel maupun komputer', 'Notifikasi otomatis ketika nilai melewati batas', 'Perangkat hemat daya untuk penggunaan jangka panjang', 'Pengerjaan perangkat keras, firmware, dan dashboard'],
    tags: ['ESP32', 'MQTT', 'Sensor', 'Dashboard'], fit: 'IoT',
    stack: [{ g: 'Perangkat', items: ['esp32', 'arduino', 'raspberrypi'] }, { g: 'Komunikasi', items: ['mqtt'] }, { g: 'Dashboard', items: ['nodered', 'grafana', 'influxdb', 'telegram'] }],
  },
  {
    slug: 'graphic-design', no: '07', title: 'Graphic Design', short: 'Desain promosi yang rapi dan sesuai karakter usaha.',
    desc: 'Poster, banner, konten media sosial, dan label kemasan yang dirancang dengan gaya visual yang konsisten.',
    points: ['Poster, flyer, spanduk, dan banner', 'Konten media sosial dengan gaya yang seragam', 'Desain label dan kemasan produk', 'Ilustrasi vektor dan penyuntingan foto dasar'],
    tags: ['Poster', 'Banner', 'Label Kemasan', 'Vector'], fit: 'Kreatif',
    stack: [{ g: 'Vector & ilustrasi', items: ['illustrator', 'coreldraw'] }, { g: 'Foto & layout', items: ['photoshop', 'canva', 'figma'] }],
  },
  {
    slug: 'video-editing', no: '08', title: 'Video Editing', short: 'Video singkat dan undangan digital untuk berbagai keperluan.',
    desc: 'Penyuntingan video promosi dan konten media sosial, serta pembuatan undangan digital dalam format gambar maupun video.',
    points: ['Undangan digital dalam format gambar atau video', 'Video promosi singkat dengan teks dan musik', 'Format yang sesuai untuk WhatsApp, Instagram, dan TikTok', 'Revisi sesuai kesepakatan di awal'],
    tags: ['Undangan Digital', 'Video Singkat', 'Reels', 'Teks & Musik'], fit: 'Kreatif',
    stack: [{ g: 'Penyuntingan', items: ['premiere', 'capcut', 'davinci'] }, { g: 'Efek & teks', items: ['aftereffects'] }],
  },
  {
    slug: 'maintenance-support', no: '09', title: 'Maintenance & Support', short: 'Pemeliharaan rutin agar sistem tetap aman dan stabil.',
    desc: 'Pemantauan, pembaruan keamanan, dan perbaikan berkala untuk website maupun aplikasi yang sudah berjalan.',
    points: ['Pemantauan uptime dan error', 'Pembaruan keamanan secara berkala', 'Penanganan kendala sesuai prioritas', 'Pencadangan data dan rencana perbaikan'],
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
    slug: 'apex-financial-dashboard', title: 'Apex Financial Dashboard', cat: 'Web App', tag: 'Website', shot: 'dash',
    desc: 'Dashboard pemantauan aset dengan laporan otomatis.',
    problem: 'Data dipindahkan manual ke spreadsheet setiap hari.',
    solution: 'Dashboard real-time yang menarik data otomatis, lengkap dengan grafik dan peringatan.',
    result: ['Laporan harian dari hitungan jam menjadi menit', 'Satu sumber data untuk seluruh tim', 'Peringatan otomatis saat angka melewati batas'],
  },
  {
    slug: 'velox-ecommerce', title: 'Velox E-Commerce', cat: 'UI/UX', tag: 'Website', shot: 'shop',
    desc: 'Toko online fashion dengan checkout yang ringkas.',
    problem: 'Banyak pembeli berhenti di tengah proses checkout.',
    solution: 'Alur belanja dirombak dan checkout disederhanakan.',
    result: ['Checkout menjadi tiga langkah', 'Nyaman dipakai di ponsel', 'Tetap ringan di jaringan lambat'],
  },
  {
    slug: 'pulse-ai-mobile', title: 'Pulse AI Assistant', cat: 'Mobile', tag: 'Aplikasi', shot: 'app',
    desc: 'Aplikasi pencatat rapat dan pengingat tugas.',
    problem: 'Catatan rapat tercecer dan tindak lanjut terlewat.',
    solution: 'Aplikasi yang merekam rapat, merangkum poin penting, dan membuat pengingat.',
    result: ['Transkripsi selama rapat berlangsung', 'Daftar tugas dibuat otomatis', 'Tersedia di Android dan iOS'],
  },
  {
    slug: 'nexus-saas-portal', title: 'Nexus SaaS Portal', cat: 'Web App', tag: 'Aplikasi', shot: 'portal',
    desc: 'Portal pelanggan dan pendaftaran untuk produk langganan.',
    problem: 'Calon pelanggan kesulitan memulai karena alurnya terpisah.',
    solution: 'Halaman awal, pendaftaran, dan panduan penggunaan disatukan dalam satu alur.',
    result: ['Pendaftaran dalam satu alur', 'Panduan untuk pengguna baru', 'Paket dan tagihan dikelola mandiri'],
  },
  {
    slug: 'kopi-senja-promosi', title: 'Kopi Senja', cat: 'Desain Grafis', tag: 'Desain & Video', shot: 'social',
    desc: 'Poster pembukaan dan konten media sosial bulanan.',
    problem: 'Unggahan media sosial tidak seragam dan kurang dikenali.',
    solution: 'Panduan warna dan templat konten, lalu poster serta unggahan harian dengan gaya yang sama.',
    result: ['Tampilan feed yang seragam', 'Templat siap pakai untuk unggahan rutin', 'Poster cetak dan versi digital'],
  },
  {
    slug: 'madu-hutan-label', title: 'Madu Hutan', cat: 'Label Kemasan', tag: 'Desain & Video', shot: 'label',
    desc: 'Desain label kemasan untuk tiga ukuran botol.',
    problem: 'Kemasan lama kurang menonjol di rak toko.',
    solution: 'Label baru dengan warna hangat dan informasi produk yang mudah dibaca.',
    result: ['Satu desain untuk tiga ukuran', 'File siap cetak', 'Versi foto produk untuk toko online'],
  },
  {
    slug: 'undangan-rina-dimas', title: 'Undangan Rina & Dimas', cat: 'Video', tag: 'Desain & Video', shot: 'invite',
    desc: 'Undangan digital dalam format gambar dan video.',
    problem: 'Undangan perlu dibagikan cepat lewat WhatsApp.',
    solution: 'Undangan gambar dan video pendek dengan ukuran file yang ringan.',
    result: ['Mudah dibagikan lewat chat', 'Versi gambar dan video', 'Tampilan selaras dengan tema acara'],
  },
];

export const products = [
  { slug: 'pulsedesk', name: 'PulseDesk', status: 'Tersedia', desc: 'Semua keluhan pelanggan dalam satu kotak masuk.', feats: ['Kotak masuk terpadu', 'Penugasan otomatis', 'Laporan waktu respons'], c: 'primary' },
  { slug: 'pulsestock', name: 'PulseStock', status: 'Tersedia', desc: 'Stok banyak gudang, cukup dipindai.', feats: ['Multi-gudang', 'Pindai barcode', 'Peringatan stok'], c: 'accent' },
  { slug: 'pulsesense', name: 'PulseSense', status: 'Dalam pengembangan', desc: 'Suhu, kelembapan, dan energi terpantau dari ponsel.', feats: ['Dashboard real-time', 'Notifikasi ambang', 'Riwayat data'], c: 'primary' },
];

export const tools = { react: 'React', vite: 'Vite', tailwind: 'Tailwind CSS', typescript: 'TypeScript', ga4: 'Google Analytics', searchconsole: 'Search Console', vercel: 'Vercel', cloudflare: 'Cloudflare', githubactions: 'GitHub Actions', node: 'Node.js', laravel: 'Laravel', postgres: 'PostgreSQL', jwt: 'JWT', next: 'Next.js', redis: 'Redis', stripe: 'Stripe', xendit: 'Xendit', docker: 'Docker', aws: 'AWS', figma: 'Figma', storybook: 'Storybook', graphql: 'GraphQL', whatsapp: 'WhatsApp Business API', google: 'Google Workspace', n8n: 'n8n', sentry: 'Sentry', git: 'Git', esp32: 'ESP32', arduino: 'Arduino', raspberrypi: 'Raspberry Pi', mqtt: 'MQTT', nodered: 'Node-RED', grafana: 'Grafana', influxdb: 'InfluxDB', telegram: 'Telegram', illustrator: 'Adobe Illustrator', photoshop: 'Adobe Photoshop', premiere: 'Adobe Premiere Pro', aftereffects: 'After Effects', canva: 'Canva', coreldraw: 'CorelDRAW', davinci: 'DaVinci Resolve', capcut: 'CapCut' };

// Nomor WhatsApp usaha, format internasional tanpa "+" atau spasi, mis. '6281234567890'.
// Selama kosong, semua tombol konsultasi mengarah ke halaman Kontak.
export const WHATSAPP = '';
export const WA_TEXT = 'Halo DigiPulse, saya ingin berkonsultasi mengenai kebutuhan digital usaha saya.';

// Empat bidang layanan, ditampilkan di Beranda, menu, dan halaman Layanan
export const groups = [
  { slug: 'website', title: 'Website', hook: 'Website yang mencerminkan kredibilitas usaha Anda.', desc: 'Kami merancang website yang rapi, cepat diakses melalui ponsel, mudah ditemukan di mesin pencari, dan memudahkan pengunjung untuk menghubungi Anda.', who: 'UMKM, company profile, toko online, dan institusi', items: ['web-development', 'ui-ux-design'] },
  { slug: 'aplikasi', title: 'Aplikasi & Sistem', hook: 'Operasional yang lebih tertata dalam satu sistem.', desc: 'Pekerjaan yang selama ini bergantung pada spreadsheet dan input berulang kami pindahkan ke aplikasi yang disesuaikan dengan alur kerja tim Anda.', who: 'Perusahaan, startup, sekolah, dan klinik', items: ['web-application', 'saas-development', 'system-integration', 'maintenance-support'] },
  { slug: 'iot', title: 'IoT', hook: 'Kondisi perangkat dan lokasi dapat dipantau dari jarak jauh.', desc: 'Kami merangkai sensor, perangkat, dan dashboard yang memberi peringatan ketika terjadi perubahan kondisi, sehingga tindakan dapat diambil lebih cepat.', who: 'Pabrik, gudang, pertanian, dan pengelola gedung', items: ['iot-embedded-system'] },
  { slug: 'kreatif', title: 'Desain & Konten', hook: 'Materi promosi yang rapi dan konsisten.', desc: 'Poster, banner, konten media sosial, label kemasan, video singkat, dan undangan digital yang dikerjakan sesuai karakter usaha Anda.', who: 'UMKM, brand lokal, penyelenggara acara, dan komunitas', items: ['graphic-design', 'video-editing'] },
];

export const pains = [
  { q: 'Website ada, tetapi sepi pertanyaan.', a: 'Pengunjung mudah menghubungi Anda.', to: 'website' },
  { q: 'Data tersebar di banyak spreadsheet.', a: 'Satu dashboard, laporan otomatis.', to: 'aplikasi' },
  { q: 'Gangguan perangkat terlambat diketahui.', a: 'Notifikasi saat kondisi berubah.', to: 'iot' },
  { q: 'Konten promosi tidak seragam.', a: 'Gaya visual yang konsisten.', to: 'kreatif' },
];

export const faqs = [
  { q: 'Berapa lama waktu pengerjaannya?', a: 'Waktu pengerjaan bergantung pada lingkup pekerjaan. Website profil umumnya selesai lebih cepat dibandingkan aplikasi atau sistem IoT. Estimasi waktu akan kami sampaikan setelah konsultasi awal.' },
  { q: 'Bagaimana penentuan biayanya?', a: 'Biaya ditentukan berdasarkan lingkup dan tingkat kerumitan pekerjaan. Setelah kebutuhan Anda jelas, kami akan mengirimkan penawaran tertulis yang memuat rincian pekerjaan dan biayanya.' },
  { q: 'Apa saja yang perlu disiapkan sebelum konsultasi?', a: 'Gambaran singkat mengenai usaha Anda, kendala yang ingin diatasi, dan hasil yang diharapkan sudah cukup. Dokumen yang lengkap tidak diwajibkan.' },
  { q: 'Apakah perkembangan pekerjaan dapat dipantau?', a: 'Dapat. Hasil pekerjaan kami unggah secara bertahap ke lingkungan uji, sehingga Anda dapat mencobanya dan memberikan masukan.' },
  { q: 'Bagaimana jika terjadi kendala setelah peluncuran?', a: 'Kami menyediakan layanan Maintenance & Support yang mencakup pemantauan, pembaruan keamanan, dan perbaikan.' },
  { q: 'Apakah layanan desain atau video dapat dipesan secara terpisah?', a: 'Dapat. Layanan Desain & Konten, seperti poster, konten media sosial, label kemasan, dan undangan digital, dapat dipesan tanpa layanan lainnya.' },
];

export const groupOf = (slug) => groups.find((g) => g.items.includes(slug));
