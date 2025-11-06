import React, { useMemo } from 'react';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function AutomationDemo() {
  const items = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => ({
      id: i + 1,
      sku: `SKU-${1000 + i}`,
      qty: randomInt(3, 40),
      status: ['Queued', 'Picking', 'Packing', 'Shipped'][randomInt(0, 3)],
    }));
  }, []);

  return (
    <section id="demo" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Simulasi Orkestrasi AI</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Contoh bagaimana sistem mengantri dan menyelesaikan tugas fulfillment secara otomatis.
            </p>
          </div>
          <div className="text-xs text-slate-500">Data acak untuk demonstrasi</div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-3">Antrian Tugas</h3>
            <ul className="divide-y divide-slate-200">
              {items.map((item) => (
                <li key={item.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800">{item.sku}</p>
                    <p className="text-xs text-slate-500">Qty {item.qty}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    item.status === 'Queued' ? 'bg-slate-100 text-slate-700' :
                    item.status === 'Picking' ? 'bg-amber-100 text-amber-700' :
                    item.status === 'Packing' ? 'bg-blue-100 text-blue-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-3">KPI Otomasi</h3>
            <div className="grid grid-cols-3 gap-4">
              {[{
                label: 'Order Fill Rate',
                value: `${randomInt(95, 99)}%`,
              }, {
                label: 'Pick Accuracy',
                value: `${randomInt(98, 100)}%`,
              }, {
                label: 'Lead Time',
                value: `${randomInt(8, 24)} jam`,
              }].map((kpi) => (
                <div key={kpi.label} className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                  <p className="text-xs text-slate-500">{kpi.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{kpi.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">Nilai KPI bersifat ilustratif.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
