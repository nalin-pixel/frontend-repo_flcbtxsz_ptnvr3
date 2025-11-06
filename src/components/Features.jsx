import React from 'react';
import { Boxes, Scan, Workflow, LineChart } from 'lucide-react';

const features = [
  {
    icon: Boxes,
    title: 'Realtime Inventory Twin',
    desc: 'Digital twin stok yang tersinkron otomatis dari inbound hingga outbound.',
  },
  {
    icon: Scan,
    title: 'Computer Vision Picking',
    desc: 'Pemetaan lokasi & verifikasi barang menggunakan kamera dan barcode.',
  },
  {
    icon: Workflow,
    title: 'Autonomous Orchestration',
    desc: 'AI mengatur antrian tugas: put-away, replenishment, picking, packing.',
  },
  {
    icon: LineChart,
    title: 'Demand Forecasting',
    desc: 'Prediksi permintaan dan rekomendasi penempatan stok berbasis ML.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Fitur Otomasi Utama</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Seluruh alur kerja gudang ditenagai AI — dari penerimaan barang, penempatan, hingga pemenuhan pesanan.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg p-2 bg-emerald-50 text-emerald-600">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
