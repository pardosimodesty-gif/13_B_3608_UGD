const navigasi = {
  tampilkanRute(data) {
    console.log(`${this.nama} menampilkan rute ke ${data}.`);
  },
};

const autopilot = {
  aktifkanAutopilot(data) {
    console.log(`${this.nama} mengaktifkan autopilot menuju ${data}.`);
  },
};

const hiburan = {
  putarMusik(data) {
    console.log(`${this.nama} memutar musik ${data}.`);
  },
};

function applyCapabilities(Kelas, ...kemampuan) {
  Object.assign(Kelas.prototype, ...kemampuan);
}

class MobilPremium {
  constructor(nama) {
    this.nama = nama;
  }
}

class MobilKota {
  constructor(nama) {
    this.nama = nama;
  }
}
applyCapabilities(MobilPremium, navigasi, autopilot, hiburan);
applyCapabilities(MobilKota, navigasi);

function jalankanTugas(perangkat, tugas, data) {
  if (typeof perangkat[tugas] !== "function") {
    throw new Error(`${perangkat.nama} tidak mendukung ${tugas}()`);
  }
  perangkat[tugas](data);
}
console.log("=== SMART CAR FEATURE ROUTER ===");

const premium = new MobilPremium("Premium_XXXX");
const kota = new MobilKota("MobilKota_XXXX");

try {
  jalankanTugas(premium, "tampilkanRute", "Kampus");
} catch (error) {
  console.log("[GAGAL] " + error.message);
}

try {
  jalankanTugas(premium, "aktifkanAutopilot", "Bandara");
} catch (error) {
  console.log("[GAGAL] " + error.message);
}

try {
  jalankanTugas(kota, "tampilkanRute", "Kampus");
} catch (error) {
  console.log("[GAGAL] " + error.message);
}

try {
  jalankanTugas(kota, "aktifkanAutopilot", "Bandara");
} catch (error) {
  console.log("[GAGAL] " + error.message);
}

try {
  jalankanTugas(kota, "putarMusik", "Lagu Santai");
} catch (error) {
  console.log("[GAGAL] " + error.message);
}