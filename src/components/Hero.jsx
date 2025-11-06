import React from 'react';
import Spline from '@splinetool/react-spline';
import { Bot, Truck, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[78vh] md:h-[86vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* non-blocking gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/30"
          >
            <Bot className="w-4 h-4" />
            <span className="text-xs font-medium tracking-wide">AI-Driven Warehouse Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-4xl"
          >
            Kelola Warehouse Anda secara Otomatis dengan Kecerdasan AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 max-w-2xl text-slate-200/90 text-sm md:text-base"
          >
            Sistem manajemen gudang generasi berikutnya yang memetakan stok, memprediksi permintaan,
            dan menjalankan pemenuhan pesanan end‑to‑end tanpa intervensi manual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition"
            >
              <Package className="w-4 h-4" />
              Lihat Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white font-medium ring-1 ring-white/20 hover:bg-white/20 transition"
            >
              <Truck className="w-4 h-4" />
              Fitur Utama
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
