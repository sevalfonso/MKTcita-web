'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentValue = 'all' | 'technical' | null

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue | 'loading'>('loading')
  const [showConfig, setShowConfig] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('mm_cookie_consent') as ConsentValue | null
      setConsent(stored)
    } catch {
      setConsent(null)
    }
  }, [])

  const save = (value: ConsentValue) => {
    try {
      if (value) localStorage.setItem('mm_cookie_consent', value)
    } catch {}
    setConsent(value)
    setShowConfig(false)
  }

  if (consent === 'loading' || consent !== null) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-neutral-100 p-6">
        {!showConfig ? (
          <>
            <p className="text-sm text-dark mb-1 font-semibold">Este sitio usa cookies</p>
            <p className="text-sm text-neutral-700 mb-4">
              Usamos cookies técnicas (necesarias para que el sitio funcione) y analíticas (para mejorar el servicio).
              Puedes aceptar todas, solo las técnicas o configurar tu preferencia.{' '}
              <Link href="/cookies" className="underline hover:text-brand-blue">Más información</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => save('all')}
                className="h-11 px-5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Aceptar todas
              </button>
              <button
                onClick={() => save('technical')}
                className="h-11 px-5 rounded-xl border border-neutral-200 text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                Solo técnicas
              </button>
              <button
                onClick={() => setShowConfig(true)}
                className="h-11 px-5 rounded-xl border border-neutral-200 text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                Configurar
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold text-dark mb-4">Configurar cookies</p>
            <div className="flex flex-col gap-3 mb-6">
              <label className="flex items-center gap-3 cursor-not-allowed opacity-60">
                <input type="checkbox" checked disabled className="w-4 h-4 accent-brand-blue" />
                <div>
                  <span className="text-sm font-medium">Cookies técnicas</span>
                  <p className="text-xs text-neutral-500">Necesarias para el funcionamiento del sitio. No se pueden desactivar.</p>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer" id="analytics-label">
                <input
                  type="checkbox"
                  id="analytics-check"
                  defaultChecked
                  className="w-4 h-4 accent-brand-blue"
                  onChange={(e) => {
                    (e.target as HTMLInputElement).dataset.value = e.target.checked ? 'all' : 'technical'
                  }}
                />
                <div>
                  <span className="text-sm font-medium">Cookies analíticas</span>
                  <p className="text-xs text-neutral-500">Nos ayudan a entender cómo se usa el sitio para mejorarlo.</p>
                </div>
              </label>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const cb = document.getElementById('analytics-check') as HTMLInputElement | null
                  save(cb?.checked ? 'all' : 'technical')
                }}
                className="h-11 px-5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Guardar preferencias
              </button>
              <button
                onClick={() => setShowConfig(false)}
                className="h-11 px-5 rounded-xl border border-neutral-200 text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                Volver
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
