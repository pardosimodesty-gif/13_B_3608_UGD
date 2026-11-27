class PenyimpananData {
  simpan(namaFile, isi) {
    throw new Error("Method simpan() wajib diimplementasikan!");
  }
}

class SimpanLokal extends PenyimpananData {
  constructor(nama) {
    super();
    this.nama = nama;
  }

  simpan(namaFile, isi) {
    console.log(`[LOKAL] ${this.nama} menyimpan ${namaFile} -> ${isi}`);
  }
}

class SimpanCloud extends PenyimpananData {
  constructor(nama) {
    super();
    this.nama = nama;
  }

  simpan(namaFile, isi) {
    console.log(`[CLOUD] ${this.nama} menyimpan ${namaFile} -> ${isi}`);
  }
}

class FlashdiskRusak extends PenyimpananData {
  constructor(nama) {
    super();
    this.nama = nama;
  }
}
class LayananLaporan {
  constructor(penyimpanan) {
    LayananLaporan.validasi(penyimpanan);
    this.penyimpanan = penyimpanan;
  }

  static validasi(penyimpanan) {
    if (!(penyimpanan instanceof PenyimpananData)) {
      throw new Error("Penyimpanan harus turunan PenyimpananData!");
    }
  }

  gantiPenyimpanan(penyimpananBaru) {
    LayananLaporan.validasi(penyimpananBaru);
    this.penyimpanan = penyimpananBaru;
    console.log(`[INFO] Penyimpanan diganti ke ${penyimpananBaru.nama}.`);
  }

  buatLaporan(npm, nilai) {
    console.log(`[LAPORAN] Nilai ${npm} = ${nilai}`);
    this.penyimpanan.simpan(`nilai_${npm}.txt`, `nilai ${nilai}`);
  }
}
console.log("=== GRADE REPORT STORAGE SERVICE ===");

const lokal = new SimpanLokal("Lokal_XXXX");
const cloud = new SimpanCloud("Cloud_XXXX");
const flashdisk = new FlashdiskRusak("Flashdisk_XXXX");
const layanan = new LayananLaporan(lokal);
try {
  layanan.buatLaporan("230711001", 85);
} catch (error) {
  console.log("[GAGAL] " + error.message);
}
layanan.gantiPenyimpanan(cloud);
try {
  layanan.buatLaporan("230711002", 92);
} catch (error) {
  console.log("[GAGAL] " + error.message);
}
layanan.gantiPenyimpanan(flashdisk);
try {
  layanan.buatLaporan("230711003", 78);
} catch (error) {
  console.log("[GAGAL] " + error.message);
}

try {
  new LayananLaporan({ simpan() {} });
} catch (error) {
  console.log("[GAGAL] " + error.message);
}