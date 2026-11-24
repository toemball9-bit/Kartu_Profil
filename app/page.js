'use client';

import { KartuProfil } from './components/KartuProfil';

export default function Home() {
  return (
    <main className="halaman">
      <h1>Kartu Profil Interaksi</h1>
      <p>Latihan React hari pertama</p>
      
      {/* Kartu Profil */}
      <KartuProfil nama="Daaryc" kelas="XII RPL 1" hobi="Pecut ai" />
      <KartuProfil nama="John Doe" kelas="XII RPL 2" hobi="Bermain Game" />
      <KartuProfil nama="Jane Smith" kelas="XII RPL 3" hobi="Membaca Buku" />
    </main>
  );
}