import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Siap mengotomatiskan gudang Anda?</h3>
              <p className="mt-2 text-emerald-50 max-w-2xl">
                Mulai uji coba gratis dan rasakan peningkatan efisiensi dengan orkestrasi AI hari ini.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-1px] transition"
            >
              Hubungi Tim
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
