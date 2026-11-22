# Laporan pemeriksaan i18n materi

Dihasilkan oleh `pnpm i18n:check` menggunakan TypeScript compiler API.
Pemeriksaan membaca objek locale statis; spread atau key komputasi yang menghalangi pembacaan ditandai **tidak terbaca**.

## Ringkasan

- File sumber yang dipindai: 176.
- File dengan objek terjemahan per bahasa: 145.
- File dengan cabang `ja`: 166.
- File tanpa terjemahan yang terdeteksi: 6.
- File dengan objek yang tidak terbaca: 0.

### 10 file dengan ketidaksesuaian terbanyak

| File | Jumlah ketidaksesuaian |
| --- | ---: |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembulatanBentukDesimalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembulatanBentukDesimalPage.tsx) | 84 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/KPKFPBPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/KPKFPBPage.tsx) | 67 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/PengertianKeanggotaanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/PengertianKeanggotaanPage.tsx) | 63 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PerkalianBentukDesimalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PerkalianBentukDesimalPage.tsx) | 62 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/JenisHimpunanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/JenisHimpunanPage.tsx) | 60 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/JualBeliUntungRugiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/JualBeliUntungRugiPage.tsx) | 53 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembagianBentukDesimalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembagianBentukDesimalPage.tsx) | 52 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganUmumPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganUmumPage.tsx) | 52 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PolaAritmetikaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PolaAritmetikaPage.tsx) | 51 |
| [`../artifacts/numatik/src/pages/buku-animasi-matematika/kesebangunan-kekongruenan/KekongruenBangunDatarPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/kesebangunan-kekongruenan/KekongruenBangunDatarPage.tsx) | 47 |

## Cakupan per topik

| Topik | File | File dengan cabang ja | Memakai pickLang | Tanpa terjemahan sama sekali |
| --- | ---: | ---: | ---: | --- |
| (root) | 26 | 25 | 4 | `KesebangunanKekongruenPage.tsx` |
| [`aljabar`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar) | 8 | 8 | 8 | — |
| [`aritmetika-sosial`](../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial) | 6 | 6 | 0 | — |
| [`bangun-ruang-sisi-datar`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar) | 5 | 5 | 0 | — |
| [`bangun-ruang-sisi-lengkung`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung) | 5 | 5 | 0 | — |
| [`bilangan-berpangkat`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat) | 4 | 4 | 0 | — |
| [`bilangan-bulat`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat) | 7 | 6 | 4 | `BukuAnimasiPenjumlahanPage.tsx` |
| [`bilangan-rasional`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional) | 10 | 10 | 10 | — |
| [`fungsi-kuadrat`](../artifacts/numatik/src/pages/buku-animasi-matematika/fungsi-kuadrat) | 6 | 6 | 0 | — |
| [`garis-dan-sudut`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut) | 4 | 4 | 0 | — |
| [`garis-singgung-lingkaran`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran) | 5 | 5 | 4 | — |
| [`himpunan`](../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan) | 5 | 5 | 0 | — |
| [`kesebangunan-kekongruenan`](../artifacts/numatik/src/pages/buku-animasi-matematika/kesebangunan-kekongruenan) | 5 | 1 | 0 | `DefinisiPage.tsx`, `MenghitungRusukPage.tsx`, `PerbandinganRusukSikuSikuPage.tsx`, `SegitigaSebangunPage.tsx` |
| [`koordinat-cartesius`](../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius) | 5 | 5 | 4 | — |
| [`lingkaran`](../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran) | 7 | 7 | 7 | — |
| [`peluang`](../artifacts/numatik/src/pages/buku-animasi-matematika/peluang) | 6 | 5 | 0 | — |
| [`perbandingan`](../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan) | 5 | 5 | 0 | — |
| [`persamaan-garis-lurus`](../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus) | 5 | 5 | 0 | — |
| [`persamaan-kuadrat`](../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-kuadrat) | 7 | 4 | 0 | — |
| [`plsv-ptlsv`](../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv) | 7 | 7 | 7 | — |
| [`pola-bilangan`](../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan) | 4 | 4 | 4 | — |
| [`relasi-fungsi`](../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi) | 6 | 6 | 5 | — |
| [`segitiga-segiempat`](../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat) | 5 | 5 | 5 | — |
| [`spldv`](../artifacts/numatik/src/pages/buku-animasi-matematika/spldv) | 7 | 7 | 7 | — |
| [`statistika`](../artifacts/numatik/src/pages/buku-animasi-matematika/statistika) | 6 | 6 | 0 | — |
| [`teorema-pythagoras`](../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras) | 6 | 6 | 0 | — |
| [`transformasi-geometri`](../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri) | 4 | 4 | 0 | — |

### Topik yang diminta

| Topik | Folder ada | Berisi terjemahan |
| --- | --- | --- |
| Perbandingan | Ya | Ya |
| Himpunan | Ya | Ya |
| Garis dan Sudut | Ya | Ya |
| Aritmetika Sosial | Ya | Ya |
| PGL | Ya | Ya |
| Teorema Pythagoras | Ya | Ya |
| Bangun Ruang Sisi Datar | Ya | Ya |
| Bilangan Berpangkat | Ya | Ya |
| Kesebangunan | Ya | Ya |
| Transformasi Geometri | Ya | Ya |
| BRSL | Ya | Ya |
| Statistika | Ya | Ya |
| Peluang | Ya | Ya |
| Fungsi Kuadrat | Ya | Ya |
| Persamaan Kuadrat | Ya | Ya |

## Topik (root)

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/AljabarPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/AljabarPage.tsx)

#### Peta 1: `translations` (baris 8)
Bahasa: id, en, ja
- **Angka berbeda pada `backLabel` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `kelas` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/AritmetikaSosialPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/AritmetikaSosialPage.tsx)

#### Peta 1: `titles` (baris 31)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `kelasMap` (baris 32)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

#### Peta 3: `backLabelMap` (baris 33)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/BilanganBulatPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/BilanganBulatPage.tsx)

#### Peta 1: `translations` (baris 8)
Bahasa: id, en, ja
- **Angka berbeda pada `backLabel` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `kelas` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/BilanganRasionalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/BilanganRasionalPage.tsx)

#### Peta 1: `translations` (baris 5)
Bahasa: id, en, ja
- **Angka berbeda pada `backLabel` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `kelas` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/GarisDanSudutPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/GarisDanSudutPage.tsx)

#### Peta 1: `titles` (baris 25)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `kelas` (baris 26)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

#### Peta 3: `backLabel` (baris 27)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/GarisSinggungLingkaranPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/GarisSinggungLingkaranPage.tsx)

#### Peta 1: `titles` (baris 28)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `kelas` (baris 29)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[8], ja=[]

#### Peta 3: `backLabels` (baris 30)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/HimpunanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/HimpunanPage.tsx)

#### Peta 1: `titles` (baris 25)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `kelas` (baris 26)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

#### Peta 3: `backLabel` (baris 27)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/KoordinatCartesiusPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/KoordinatCartesiusPage.tsx)

#### Peta 1: `data` (baris 7)
Bahasa: id, en, ja
- **Angka berbeda pada `backLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `kelas` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/LingkaranPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/LingkaranPage.tsx)

#### Peta 1: `titles` (baris 34)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `kelas` (baris 35)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[8], ja=[]

#### Peta 3: `backLabels` (baris 36)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/PLSVPtLSVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/PLSVPtLSVPage.tsx)

#### Peta 1: `content` (baris 7)
Bahasa: id, en, ja
- **Angka berbeda pada `backLabel` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `kelas` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/PerbandinganPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/PerbandinganPage.tsx)

#### Peta 1: `titles` (baris 28)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `kelas` (baris 29)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

#### Peta 3: `backLabel` (baris 30)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/PolaBilanganPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/PolaBilanganPage.tsx)

#### Peta 1: `titles` (baris 22)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `kelas` (baris 23)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[8], ja=[]

#### Peta 3: `backLabels` (baris 24)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/RelasiFungsiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/RelasiFungsiPage.tsx)

#### Peta 1: `translations` (baris 4)
Bahasa: id, en, ja
- **Angka berbeda pada `back` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `kelas` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/SPLDVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/SPLDVPage.tsx)

#### Peta 1: `translations` (baris 5)
Bahasa: id, en, ja
- **Angka berbeda pada `backLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `kelas` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/SegitigaSegiempatPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/SegitigaSegiempatPage.tsx)

#### Peta 1: `titles` (baris 28)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `kelas` (baris 29)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]

#### Peta 3: `backLabel` (baris 30)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[7], ja=[]


## Topik aljabar

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/FaktorisasiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/FaktorisasiPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/OperasiPecahanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/OperasiPecahanPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PemangkatanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PemangkatanPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `ex3S1` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `kubikTitle` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PembagianPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PembagianPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `m1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `m2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PengertianUnsurPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PengertianUnsurPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `ex3Q3` (id vs ja):** id=[5, 3, 2, 7], ja=[]
- **Angka berbeda pada `introBoxMid` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `introPara1` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `introPara2b` (id vs ja):** id=[780, 850], ja=[780]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PenjumlahanPenguranganPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PenjumlahanPenguranganPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `ingatDesc` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PerkalianPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/PerkalianPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/SubstitusiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aljabar/SubstitusiPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]


## Topik aritmetika-sosial

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/BrutoNettoTaraPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/BrutoNettoTaraPage.tsx)

#### Peta 1: `T` (baris 17)
Bahasa: id, en, ja
- **Angka berbeda pada `quiz[].penjelasan` (id vs en):** id=[1, 1, 0.05, 2, 1.9, 10, 1.9, 19], en=[1, 0.05, 2, 1.9, 10, 1.9, 19]
- **Angka berbeda pada `soalContoh[].jawaban` (id vs en):** id=[152000], en=[1152]
- **Angka berbeda pada `soalContoh[].langkah[].isi` (id vs en):** id=[6, 20, 4, 0, 0], en=[6, 20, 4, 90, 100]
- **Angka berbeda pada `soalContoh[].soal` (id vs en):** id=[6, 20, 4, 0, 0], en=[6, 20, 4, 90, 100]
- **Angka berbeda pada `kesalahan[].benar` (id vs ja):** id=[100, 100, 100], ja=[100]
- **Angka berbeda pada `kuisIntro` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `persenExamples[].konteks` (id vs ja):** id=[200, 5], ja=[200]
- **Angka berbeda pada `persenTaraEx` (id vs ja):** id=[60, 5, 3, 57], ja=[3, 57]
- **Angka berbeda pada `quiz[].penjelasan` (id vs ja):** id=[1, 1, 0.05, 2, 1.9, 10, 1.9, 19], ja=[1, 0.05, 2, 1.9, 10, 1.9, 19]
- **Angka berbeda pada `quiz[].soal` (id vs ja):** id=[10, 2, 5, 10], ja=[]
- **Angka berbeda pada `soalContoh[].jawaban` (id vs ja):** id=[152000], ja=[1152]
- **Angka berbeda pada `soalContoh[].langkah[].isi` (id vs ja):** id=[6, 20, 4, 0, 0], ja=[20, 4, 90, 100]
- **Angka berbeda pada `soalContoh[].langkah[].label` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `soalContoh[].soal` (id vs ja):** id=[6, 20, 4, 0, 0], ja=[90, 100]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/BungaTunggalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/BungaTunggalPage.tsx)

#### Peta 1: `translations` (baris 25)
Bahasa: id, en, ja
- **Angka berbeda pada `analogiBody` (id vs en):** id=[0, 10, 0, 0], en=[500, 10, 50, 50]
- **Angka berbeda pada `phModal` (id vs en):** id=[2000000], en=[2000]
- **Angka berbeda pada `quiz[].penjelasan` (id vs en):** id=[5000000, 2, 0.15, 500000], en=[5000, 2, 0.15, 1500]
- **Angka berbeda pada `quiz[].pilihan[]` (id vs en):** id=[500000], en=[2500]
- **Angka berbeda pada `quiz[].soal` (id vs en):** id=[0, 15, 2], en=[5000, 15, 2]
- **Angka berbeda pada `soalContoh[].jawaban` (id vs en):** id=[0], en=[3000]
- **Angka berbeda pada `soalContoh[].langkah[].isi` (id vs en):** id=[600000, 0.08, 2.5], en=[3600, 0.08, 2.5]
- **Angka berbeda pada `soalContoh[].soal` (id vs en):** id=[2.5, 8, 600000], en=[2.5, 8, 3600]
- **Angka berbeda pada `analogiBody` (id vs ja):** id=[0, 10, 0, 0], ja=[50, 50]
- **Angka berbeda pada `kesalahan[].benar` (id vs ja):** id=[6, 6, 100, 0.06], ja=[6, 6, 100, 0]
- **Angka berbeda pada `kuisIntro` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `phModal` (id vs ja):** id=[2000000], ja=[2000]
- **Angka berbeda pada `quiz[].penjelasan` (id vs ja):** id=[5000000, 2, 0.15, 500000], ja=[5000, 2, 0.15, 1500]
- **Angka berbeda pada `quiz[].pilihan[]` (id vs ja):** id=[500000], ja=[2500]
- **Angka berbeda pada `quiz[].soal` (id vs ja):** id=[0, 15, 2], ja=[5000]
- **Angka berbeda pada `rumusIntro` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `satuanExContent` (id vs ja):** id=[12, 9, 9, 12, 0.75, 2, 1.5, 1.5, 12, 18], ja=[9, 12, 0, 1.5, 12]
- **Angka berbeda pada `soalContoh[].jawaban` (id vs ja):** id=[0], ja=[3000]
- **Angka berbeda pada `soalContoh[].langkah[].isi` (id vs ja):** id=[600000, 0.08, 2.5], ja=[3600, 0.08, 2]
- **Angka berbeda pada `soalContoh[].soal` (id vs ja):** id=[2.5, 8, 600000], ja=[3]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/DiskonPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/DiskonPage.tsx)

#### Peta 1: `translations` (baris 26)
Bahasa: id, en, ja
- **Angka berbeda pada `kalkPH` (id vs en):** id=[300000], en=[300]
- **Angka berbeda pada `kalkPHBayar` (id vs en):** id=[240000], en=[240]
- **Angka berbeda pada `persenDiskonContohSoal` (id vs en):** id=[0, 0], en=[750, 525]
- **Angka berbeda pada `quiz[].penjelasan` (id vs en):** id=[0, 100, 25, 0, 0.75, 0], en=[225, 100, 25, 225, 0.75, 300]
- **Angka berbeda pada `quiz[].pilihan[]` (id vs en):** id=[0], en=[350]
- **Angka berbeda pada `quiz[].soal` (id vs en):** id=[25, 0], en=[225, 25]
- **Angka berbeda pada `rumus[].contoh` (id vs en):** id=[0, 0, 100000, 400000, 100, 25], en=[400, 300, 100, 400, 100, 25]
- **Angka berbeda pada `soalContoh[].jawaban` (id vs en):** id=[0], en=[68]
- **Angka berbeda pada `soalContoh[].langkah[].isi` (id vs en):** id=[0, 0, 20, 10], en=[400, 650, 20, 10]
- **Angka berbeda pada `soalContoh[].soal` (id vs en):** id=[0, 0, 20, 10], en=[400, 650, 20, 10]
- **Angka berbeda pada `gandaBody` (id vs ja):** id=[20, 10, 30], ja=[20, 10]
- **Angka berbeda pada `kalkD1Label` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `kalkD2Label` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `kalkPH` (id vs ja):** id=[300000], ja=[300]
- **Angka berbeda pada `kalkPHBayar` (id vs ja):** id=[240000], ja=[240]
- **Angka berbeda pada `kuisIntro` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `persenDiskonContohSoal` (id vs ja):** id=[0, 0], ja=[]
- **Angka berbeda pada `persenDiskonResult` (id vs ja):** id=[30], ja=[]
- **Angka berbeda pada `quiz[].penjelasan` (id vs ja):** id=[0, 100, 25, 0, 0.75, 0], ja=[225, 100, 25, 225, 0.75, 300]
- **Angka berbeda pada `quiz[].pilihan[]` (id vs ja):** id=[0], ja=[350]
- **Angka berbeda pada `quiz[].soal` (id vs ja):** id=[25, 0], ja=[25, 225]
- **Angka berbeda pada `rumusIntro` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `rumus[].contoh` (id vs ja):** id=[0, 0, 100000, 400000, 100, 25], ja=[400, 300, 100, 400, 100, 25]
- **Angka berbeda pada `secKuisTitle` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `soalContoh[].jawaban` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `soalContoh[].langkah[].isi` (id vs ja):** id=[0, 0, 20, 10], ja=[400, 650, 10]
- **Angka berbeda pada `soalContoh[].langkah[].label` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `soalContoh[].soal` (id vs ja):** id=[0, 0, 20, 10], ja=[10]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `visualDesc` (id vs ja):** id=[100], ja=[]
- **Angka berbeda pada `visualNote` (id vs ja):** id=[100], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/JualBeliUntungRugiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/JualBeliUntungRugiPage.tsx)

#### Peta 1: `translations` (baris 26)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Known` (id vs en):** id=[0, 0], en=[180, 225]
- **Angka berbeda pada `c1Q` (id vs en):** id=[1, 0, 0], en=[180, 225]
- **Angka berbeda pada `c1Result` (id vs en):** id=[0, 25], en=[45, 25]
- **Angka berbeda pada `c2Known` (id vs en):** id=[0, 35], en=[240, 35]
- **Angka berbeda pada `c2Q` (id vs en):** id=[0, 35], en=[240, 35]
- **Angka berbeda pada `c2Result` (id vs en):** id=[0], en=[324]
- **Angka berbeda pada `c3Known` (id vs en):** id=[0, 15], en=[680, 15]
- **Angka berbeda pada `c3Q` (id vs en):** id=[0, 15], en=[680, 15]
- **Angka berbeda pada `c3Result` (id vs en):** id=[0, 0], en=[800, 120]
- **Angka berbeda pada `c4Known1` (id vs en):** id=[0], en=[50]
- **Angka berbeda pada `c4Known2` (id vs en):** id=[7, 0, 0], en=[7, 6, 42]
- **Angka berbeda pada `c4Note` (id vs en):** id=[0, 50000, 6000, 9], en=[50, 50, 6, 9]
- **Angka berbeda pada `c4Q` (id vs en):** id=[10, 0, 7, 0], en=[10, 50, 7, 6]
- **Angka berbeda pada `c4Result` (id vs en):** id=[0, 9], en=[8, 9]
- **Angka berbeda pada `hbInputPH` (id vs en):** id=[200000], en=[200]
- **Angka berbeda pada `hjInputPH` (id vs en):** id=[250000], en=[250]
- **Angka berbeda pada `impasContoh` (id vs en):** id=[0, 0], en=[25, 25]
- **Angka berbeda pada `pctUntungEx` (id vs en):** id=[0, 0], en=[20, 100]
- **Angka berbeda pada `quiz[].penjelasan` (id vs en):** id=[100, 100, 20, 0, 100, 120, 0, 0], en=[100, 100, 20, 480, 100, 120, 480, 400]
- **Angka berbeda pada `quiz[].pilihan[]` (id vs en):** id=[0], en=[420]
- **Angka berbeda pada `quiz[].soal` (id vs en):** id=[20, 0], en=[20, 480]
- **Angka berbeda pada `secIntroBody` (id vs en):** id=[0, 0], en=[150, 180]
- **Angka berbeda pada `tips[].isi` (id vs en):** id=[0, 20, 0], en=[100, 20, 100]
- **Angka berbeda pada `c1Known` (id vs ja):** id=[0, 0], ja=[180, 225]
- **Angka berbeda pada `c1Q` (id vs ja):** id=[1, 0, 0], ja=[]
- **Angka berbeda pada `c1Result` (id vs ja):** id=[0, 25], ja=[]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2Known` (id vs ja):** id=[0, 35], ja=[240, 35]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[0, 35], ja=[]
- **Angka berbeda pada `c2Result` (id vs ja):** id=[0], ja=[324]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Known` (id vs ja):** id=[0, 15], ja=[680, 15]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[0, 15], ja=[]
- **Angka berbeda pada `c3Result` (id vs ja):** id=[0, 0], ja=[800, 120]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c4Known1` (id vs ja):** id=[0], ja=[50]
- **Angka berbeda pada `c4Known2` (id vs ja):** id=[7, 0, 0], ja=[7, 6, 42]
- **Angka berbeda pada `c4Note` (id vs ja):** id=[0, 50000, 6000, 9], ja=[50, 6]
- **Angka berbeda pada `c4Q` (id vs ja):** id=[10, 0, 7, 0], ja=[]
- **Angka berbeda pada `c4Result` (id vs ja):** id=[0, 9], ja=[]
- **Angka berbeda pada `c4Title` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `hbInputPH` (id vs ja):** id=[200000], ja=[200]
- **Angka berbeda pada `hjInputPH` (id vs ja):** id=[250000], ja=[250]
- **Angka berbeda pada `impasContoh` (id vs ja):** id=[0, 0], ja=[]
- **Angka berbeda pada `langkah1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `langkah2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `pctUntungEx` (id vs ja):** id=[0, 0], ja=[]
- **Angka berbeda pada `quiz[].penjelasan` (id vs ja):** id=[100, 100, 20, 0, 100, 120, 0, 0], ja=[100, 100, 20, 480, 100, 120, 480, 400]
- **Angka berbeda pada `quiz[].pilihan[]` (id vs ja):** id=[0], ja=[420]
- **Angka berbeda pada `quiz[].soal` (id vs ja):** id=[20, 0], ja=[480]
- **Angka berbeda pada `secIntroBody` (id vs ja):** id=[0, 0], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `tips[].isi` (id vs ja):** id=[0, 20, 0], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/PPNPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/PPNPage.tsx)

#### Peta 1: `T` (baris 55)
Bahasa: id, en, ja
- **Angka berbeda pada `contoh[].math1` (id vs en):** id=[120000, 100, 15, 120000, 85, 102000], en=[120, 0, 100, 15, 120, 0, 85, 102, 0]
- **Angka berbeda pada `contoh[].math2` (id vs en):** id=[102000, 1, 11, 113220], en=[102, 0, 1, 11, 113, 220]
- **Angka berbeda pada `contoh[].maths[]` (id vs en):** id=[48000, 400000, 100, 12], en=[48, 0, 400, 0, 100, 12]
- **Angka berbeda pada `contoh[].noteKatex` (id vs en):** id=[120000, 1, 11, 133200], en=[120, 0, 1, 11, 133, 200]
- **Angka berbeda pada `contoh[].judul` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `contoh[].math1` (id vs ja):** id=[120000, 100, 15, 120000, 85, 102000], ja=[120, 0, 100, 15, 120, 0, 85, 102, 0]
- **Angka berbeda pada `contoh[].math2` (id vs ja):** id=[102000, 1, 11, 113220], ja=[102, 0, 1, 11, 113, 220]
- **Angka berbeda pada `contoh[].maths[]` (id vs ja):** id=[48000, 400000, 100, 12], ja=[48, 0, 400, 0, 100, 12]
- **Angka berbeda pada `contoh[].note` (id vs ja):** id=[500000, 1.11, 0], ja=[500000, 1.11, 555000]
- **Angka berbeda pada `contoh[].noteKatex` (id vs ja):** id=[120000, 1, 11, 133200], ja=[120, 0, 1, 11, 133, 200]
- **Angka berbeda pada `contoh[].soal` (id vs ja):** id=[0, 0], ja=[448]
- **Angka berbeda pada `contoh[].step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `contoh[].step2` (id vs ja):** id=[2, 11], ja=[]
- **Angka berbeda pada `contoh[].steps` (id vs ja):** id=[0, 111], ja=[]
- **Angka berbeda pada `imgCaption` (id vs ja):** id=[11], ja=[]
- **Angka berbeda pada `kesalahan[].salah` (id vs ja):** id=[11, 12], ja=[11]
- **Angka berbeda pada `pageSub` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/PPhPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/aritmetika-sosial/PPhPage.tsx)

#### Peta 1: `T` (baris 65)
Bahasa: id, en, ja
- **Angka berbeda pada `contoh[].maths[]` (id vs en):** id=[3250000, 5000000, 100, 65], en=[3, 250, 0, 5, 0, 0, 100, 65]
- **Angka berbeda pada `contoh[].midNote` (id vs en):** id=[], en=[0]
- **Angka berbeda pada `contoh[].judul` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `contoh[].maths[]` (id vs ja):** id=[3250000, 5000000, 100, 65], ja=[3, 250, 0, 5, 0, 0, 100, 65]
- **Angka berbeda pada `contoh[].soal` (id vs ja):** id=[0, 0, 750000], ja=[]
- **Angka berbeda pada `contoh[].steps` (id vs ja):** id=[0, 0, 750000], ja=[]
- **Angka berbeda pada `pageSub` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ptkpTable[].status` (id vs ja):** id=[3, 3], ja=[3]
- **Angka berbeda pada `tarifTableTitle` (id vs ja):** id=[17], ja=[]


## Topik bangun-ruang-sisi-datar

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/BalokPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/BalokPage.tsx)

#### Peta 1: `labels` (baris 34)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `translations` (baris 1597)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/GabunganPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/GabunganPage.tsx)

#### Peta 1: `translations` (baris 862)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/KubusPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/KubusPage.tsx)

#### Peta 1: `translations` (baris 1906)
Bahasa: id, en, ja
- **Angka berbeda pada `s3` (id vs ja):** id=[11], ja=[]
- **Angka berbeda pada `slideJaring11` (id vs ja):** id=[11], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/LimasPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/LimasPage.tsx)

#### Peta 1: `translations` (baris 1520)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/PrismaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-datar/PrismaPage.tsx)

#### Peta 1: `object@1396` (baris 1396)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]


## Topik bangun-ruang-sisi-lengkung

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/BolaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/BolaPage.tsx)

#### Peta 1: `object@19` (baris 19)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@270` (baris 270)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@1132` (baris 1132)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[9], ja=[]

#### Peta 4: `object@1139` (baris 1139)
Bahasa: id, en, ja
- **Angka berbeda pada `sifat1` (id vs ja):** id=[1], ja=[]

#### Peta 5: `object@1218` (baris 1218)
Bahasa: id, en, ja
- **Angka berbeda pada `summaryClosing` (id vs ja):** id=[1], ja=[]

#### Peta 6: `object@1309` (baris 1309)
Bahasa: id, en, ja
- **Angka berbeda pada `hemisphereBullet1` (id vs ja):** id=[2, 2, 4, 2], ja=[2, 2, 4]
- **Angka berbeda pada `intro` (id vs ja):** id=[4], ja=[]

#### Peta 7: `object@1363` (baris 1363)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 8: `object@1420` (baris 1420)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 9: `object@1684` (baris 1684)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 10: `object@1685` (baris 1685)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 11: `object@1686` (baris 1686)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 12: `object@2482` (baris 2482)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/GabunganPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/GabunganPage.tsx)

#### Peta 1: `object@142` (baris 142)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@390` (baris 390)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@677` (baris 677)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `object@833` (baris 833)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `object@834` (baris 834)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 6: `object@835` (baris 835)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `object@841` (baris 841)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 8: `object@869` (baris 869)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[9], ja=[]

#### Peta 9: `object@875` (baris 875)
Bahasa: id, en, ja
- **Angka berbeda pada `mistakes[]` (id vs ja):** id=[2], ja=[]

#### Peta 10: `object@956` (baris 956)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/KerucutPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/KerucutPage.tsx)

#### Peta 1: `cone3DLabels` (baris 42)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `unsurSvgLabels` (baris 267)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `luasKerucutSvgLabels` (baris 342)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `coneNetAnimTrans` (baris 600)
Bahasa: id, en, ja
- **Angka berbeda pada `footer` (id vs ja):** id=[1, 1], ja=[]

#### Peta 5: `kerucutCountSvgLabels` (baris 938)
Bahasa: id, en, ja
- **Angka berbeda pada `$value[]` (id vs ja):** id=[2, 1, 1], ja=[]

#### Peta 6: `selimutJuringSvgLabels` (baris 992)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `soalUnsurTrans` (baris 1170)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 8: `unsurQuizUiTrans` (baris 1289)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 9: `pageTrans` (baris 1509)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[9], ja=[]

#### Peta 10: `slide1Trans` (baris 1516)
Bahasa: id, en, ja
- **Angka berbeda pada `prop1` (id vs ja):** id=[1, 1], ja=[]
- **Angka berbeda pada `prop2` (id vs ja):** id=[1, 1], ja=[]

#### Peta 11: `slide2Trans` (baris 1585)
Bahasa: id, en, ja
- **Angka berbeda pada `card1Body` (id vs ja):** id=[1], ja=[]

#### Peta 12: `slide3Trans` (baris 1700)
Bahasa: id, en, ja
- **Angka berbeda pada `intro` (id vs ja):** id=[2], ja=[]

#### Peta 13: `slide4Trans` (baris 1758)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 14: `slide5Trans` (baris 1807)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 15: `slide6Trans` (baris 1856)
Bahasa: id, en, ja
- **Angka berbeda pada `relText` (id vs ja):** id=[3, 1], ja=[]

#### Peta 16: `slide7Trans` (baris 1914)
Bahasa: id, en, ja
- **Angka berbeda pada `rows[][]` (id vs ja):** id=[1, 3], ja=[3]

#### Peta 17: `object@2297` (baris 2297)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 18: `object@2298` (baris 2298)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 19: `object@2299` (baris 2299)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 20: `exampleSlidesTrans` (baris 2308)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 21: `toggleLabelsTrans` (baris 2339)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 22: `gpExamplesTrans` (baris 2354)
Bahasa: id, en, ja
- **Angka berbeda pada `$value[].answer` (id vs ja):** id=[1, 2, 44, 2, 22, 7, 44, 7, 2, 22, 308, 44, 7, 2, 2, 2, 25, 2, 7, 2, 625, 49, 576, 24, 3, 1, 3, 2, 1, 3, 22, 7, 7, 2, 24, 1, 3, 22, 7, 49, 24, 1, 3, 22, 7, 24, 3696, 3, 1232, 3, 7, 24, 1232], ja=[2, 44, 2, 22, 7, 44, 7, 2, 22, 308, 44, 7, 2, 2, 25, 2, 7, 2, 625, 49, 576, 24, 1, 3, 2, 1, 3, 22, 7, 7, 2, 24, 1, 3, 22, 7, 49, 24, 1, 3, 22, 7, 24, 3696, 3, 1232, 3, 7, 24, 1232]

#### Peta 23: `luasExamplesTrans` (baris 2592)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 24: `volExamplesTrans` (baris 2833)
Bahasa: id, en, ja
- **Angka berbeda pada `$value[].answer` (id vs en):** id=[1, 28, 2, 14, 30, 2, 20, 20, 30, 2, 3, 14, 2, 3, 28, 3, 3, 1, 3, 2, 1, 3, 22, 7, 28, 3, 2, 20, 1, 3, 22, 7, 784, 9, 20, 22, 784, 20, 3, 7, 9, 344960, 189, 1825, 7, 3, 28, 3, 9.33, 1825.7], en=[1, 28, 2, 14, 30, 2, 20, 20, 30, 2, 3, 14, 2, 3, 28, 3, 3, 1, 3, 2, 1, 3, 22, 7, 28, 3, 2, 20, 1, 3, 22, 7, 784, 9, 20, 22, 784, 20, 3, 7, 9, 344, 960, 189, 1, 825.7, 3, 28, 3, 9.33, 1825.7]
- **Angka berbeda pada `$value[].answer` (id vs ja):** id=[1, 28, 2, 14, 30, 2, 20, 20, 30, 2, 3, 14, 2, 3, 28, 3, 3, 1, 3, 2, 1, 3, 22, 7, 28, 3, 2, 20, 1, 3, 22, 7, 784, 9, 20, 22, 784, 20, 3, 7, 9, 344960, 189, 1825, 7, 3, 28, 3, 9.33, 1825.7], ja=[28, 2, 14, 30, 20, 30, 2, 3, 14, 2, 3, 28, 3, 1, 3, 2, 1, 3, 22, 7, 28, 3, 2, 20, 1, 3, 22, 7, 784, 9, 20, 22, 784, 20, 3, 7, 9, 344, 960, 189, 1, 825.7, 3, 28, 3, 9.33, 1825.7]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/PerubahanVolumePage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/PerubahanVolumePage.tsx)

#### Peta 1: `calcTrans` (baris 84)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `pageTrans` (baris 190)
Bahasa: id, en, ja
- **Angka berbeda pada `subtitle` (id vs ja):** id=[9], ja=[]

#### Peta 3: `slide0Trans` (baris 235)
Bahasa: id, en, ja
- **Angka berbeda pada `intro` (id vs ja):** id=[3, 3], ja=[]

#### Peta 4: `sec0Trans` (baris 282)
Bahasa: id, en, ja
- **Angka berbeda pada `bullet1` (id vs en):** id=[2], en=[]
- **Angka berbeda pada `bullet2` (id vs en):** id=[3], en=[]
- **Angka berbeda pada `c1b1` (id vs en):** id=[2], en=[]
- **Angka berbeda pada `c1b2` (id vs en):** id=[3], en=[]
- **Angka berbeda pada `opening` (id vs en):** id=[2, 2], en=[]
- **Angka berbeda pada `bullet1` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `bullet2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c1b1` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c1b2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c2b2` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `c2b3` (id vs ja):** id=[27], ja=[]
- **Angka berbeda pada `opening` (id vs ja):** id=[2, 2], ja=[]

#### Peta 5: `sec1Trans` (baris 357)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 6: `sec2Trans` (baris 423)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `sec3Trans` (baris 456)
Bahasa: id, en, ja
- **Angka berbeda pada `memo1` (id vs ja):** id=[2, 8, 4], ja=[]
- **Angka berbeda pada `memo2` (id vs ja):** id=[3, 27, 9], ja=[]

#### Peta 8: `sec4Trans` (baris 492)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 9: `secTitles` (baris 537)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 10: `object@790` (baris 790)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 11: `object@791` (baris 791)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 12: `object@792` (baris 792)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/TabungPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bangun-ruang-sisi-lengkung/TabungPage.tsx)

#### Peta 1: `slide1Trans` (baris 870)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `slide2Trans` (baris 916)
Bahasa: id, en, ja
- **Angka berbeda pada `rusukCount` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sisiCount` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tipCount` (id vs ja):** id=[3, 2, 0], ja=[]

#### Peta 3: `slide3Trans` (baris 1169)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `slide4Trans` (baris 1236)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `slide5Trans` (baris 1312)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 6: `object@1847` (baris 1847)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `object@1848` (baris 1848)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 8: `object@1849` (baris 1849)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 9: `kesimpulanTrans` (baris 2640)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 10: `contohSoalTrans` (baris 2708)
Bahasa: id, en, ja
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[9], ja=[]


## Topik bilangan-berpangkat

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat/BentukAkarPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat/BentukAkarPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `c1_med_s3` (id vs ja):** id=[75], ja=[]
- **Angka berbeda pada `c2_hard_s1` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c2_med_s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3_easy_s1` (id vs ja):** id=[48], ja=[]
- **Angka berbeda pada `intro_p` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `k1_n2_note3` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `k3_intro2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `k5_t1_title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `k5_t2_title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `pageSub` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `sec_k1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_k2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_k3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec_k4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `sec_k5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `sec_k6` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `tip_k3c` (id vs ja):** id=[36, 4, 9], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat/NotasiIlmiahPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat/NotasiIlmiahPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1_easy_s2` (id vs ja):** id=[5.7], ja=[]
- **Angka berbeda pada `c1_med_note` (id vs ja):** id=[4.05, 4], ja=[4.05]
- **Angka berbeda pada `c1_med_s1d` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `c2_easy_note3` (id vs ja):** id=[2, 7], ja=[2]
- **Angka berbeda pada `c2_easy_s2` (id vs ja):** id=[7.2], ja=[7]
- **Angka berbeda pada `c2_med_a_check` (id vs ja):** id=[0.35, 1], ja=[35, 1]
- **Angka berbeda pada `c2_med_b_check` (id vs ja):** id=[15, 10], ja=[10]
- **Angka berbeda pada `c2_med_c_check` (id vs ja):** id=[6.02, 1, 6.02, 10], ja=[2, 1, 6.02, 10]
- **Angka berbeda pada `k1_a_desc` (id vs ja):** id=[1, 10, 10], ja=[]
- **Angka berbeda pada `k2_rule1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `k2_rule2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `pageSub` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `sec_k1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_k2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_k3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tip_k2b` (id vs ja):** id=[1, 5000000, 7, 7, 1, 6], ja=[1, 5000, 7, 1, 6]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat/PengertianNotasiPangkatPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat/PengertianNotasiPangkatPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `ex_neg_easy_note` (id vs en):** id=[-4, 16, -16], en=[-4, 16, 16]
- **Angka berbeda pada `ex1_h_ans` (id vs ja):** id=[8, 256], ja=[]
- **Angka berbeda pada `ex1_hard_q` (id vs ja):** id=[2, 1, 8], ja=[]
- **Angka berbeda pada `ex1_s1` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex1_s1b` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex_neg_easy_note` (id vs ja):** id=[-4, 16, -16], ja=[-4, 16, 16]
- **Angka berbeda pada `intro_highlight2` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `intro_p1_after` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `konsep3_def_zero` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `konsep3_proof_note` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `pageSub` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `sec_konsep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_konsep2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_konsep3` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `sec_konsep3_neg` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec_konsep4` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `tipMax` (id vs ja):** id=[32], ja=[]
- **Angka berbeda pada `tip_squared_and` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tip_squared_text` (id vs ja):** id=[2], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat/SifatSifatOperasiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-berpangkat/SifatSifatOperasiPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `cara1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `cara2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `dalam_ke_luar` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `expand_masing` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `gunakan_s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `intro_box2` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `intro_p3` (id vs ja):** id=[25], ja=[]
- **Angka berbeda pada `k2_note5` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `k3_expand_note` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `k5_tip2` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `k6_both` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `k6_cara1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `k6_cara2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `k6_seq_note` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `k7_expand` (id vs ja):** id=[6, 2], ja=[]
- **Angka berbeda pada `k9_desc5` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `kalikan_gabung` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ke_basis` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `pageSub` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `pangkat3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `penyebut_s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_c1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_c2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_c3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec_c4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `sec_c5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `sec_c6` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `sec_c7` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sec_c8` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `sec_c9` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `sec_k1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_k2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_k3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec_k4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `sec_k5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `sec_k6` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `sec_k7` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sec_k8` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `sec_k9` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `sec_rangkuman` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `ubah_basis` (id vs ja):** id=[3], ja=[]


## Topik bilangan-bulat

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/KPKFPBPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/KPKFPBPage.tsx)

#### Peta 1: `translations` (baris 25)
Bahasa: id, en, ja
- **Angka berbeda pada `commonFactorsOf1218` (id vs ja):** id=[12, 18], ja=[]
- **Angka berbeda pada `commonMultiplesOf34` (id vs ja):** id=[3, 4], ja=[]
- **Angka berbeda pada `congratsMsg` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `factors12Row` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `factors18Row` (id vs ja):** id=[18], ja=[]
- **Angka berbeda pada `fpbEx1Ans` (id vs ja):** id=[12, 18], ja=[]
- **Angka berbeda pada `fpbEx1Q` (id vs ja):** id=[12, 18], ja=[]
- **Angka berbeda pada `fpbEx1S2a` (id vs ja):** id=[2, 1], ja=[1]
- **Angka berbeda pada `fpbEx1S2b` (id vs ja):** id=[3, 1], ja=[1]
- **Angka berbeda pada `fpbEx2Ans` (id vs ja):** id=[28, 42], ja=[]
- **Angka berbeda pada `fpbEx2Q` (id vs ja):** id=[28, 42], ja=[]
- **Angka berbeda pada `fpbEx2S2a` (id vs ja):** id=[2, 1], ja=[1]
- **Angka berbeda pada `fpbEx2S2b` (id vs ja):** id=[3, 42], ja=[]
- **Angka berbeda pada `fpbEx2S2c` (id vs ja):** id=[7, 1], ja=[1]
- **Angka berbeda pada `fpbEx3Ans` (id vs ja):** id=[24, 48, 72], ja=[24, 48]
- **Angka berbeda pada `fpbEx3Q` (id vs ja):** id=[24, 48, 72], ja=[24, 48]
- **Angka berbeda pada `fpbEx3S2a` (id vs ja):** id=[2, 3], ja=[3]
- **Angka berbeda pada `fpbEx3S2b` (id vs ja):** id=[3, 1], ja=[1]
- **Angka berbeda pada `gcdOf1218` (id vs ja):** id=[12, 18], ja=[]
- **Angka berbeda pada `gcdStoryAnsB` (id vs ja):** id=[28], ja=[]
- **Angka berbeda pada `gcdStoryBooks` (id vs ja):** id=[84, 28, 3], ja=[84, 28]
- **Angka berbeda pada `gcdStoryCrayons` (id vs ja):** id=[140, 28, 5], ja=[140, 28]
- **Angka berbeda pada `gcdStoryPencils` (id vs ja):** id=[56, 28, 2], ja=[56, 28]
- **Angka berbeda pada `gcdStoryQ1b` (id vs ja):** id=[84], ja=[]
- **Angka berbeda pada `gcdStoryQ2b` (id vs ja):** id=[56], ja=[]
- **Angka berbeda pada `gcdStoryQ3b` (id vs ja):** id=[140], ja=[]
- **Angka berbeda pada `gcdStoryS2a` (id vs ja):** id=[2, 2], ja=[2]
- **Angka berbeda pada `gcdStoryS2b` (id vs ja):** id=[7, 1], ja=[1]
- **Angka berbeda pada `kpkEx1Ans` (id vs ja):** id=[6, 8], ja=[]
- **Angka berbeda pada `kpkEx1Q` (id vs ja):** id=[6, 8], ja=[]
- **Angka berbeda pada `kpkEx1S2a` (id vs ja):** id=[2, 3, 8], ja=[3]
- **Angka berbeda pada `kpkEx1S2b` (id vs ja):** id=[3, 1, 6], ja=[1]
- **Angka berbeda pada `kpkEx2Ans` (id vs ja):** id=[28, 42], ja=[]
- **Angka berbeda pada `kpkEx2Q` (id vs ja):** id=[28, 42], ja=[]
- **Angka berbeda pada `kpkEx2S2a` (id vs ja):** id=[2, 2, 28], ja=[2]
- **Angka berbeda pada `kpkEx2S2b` (id vs ja):** id=[3, 1, 42], ja=[1]
- **Angka berbeda pada `kpkEx2S2c` (id vs ja):** id=[7, 1], ja=[1]
- **Angka berbeda pada `kpkEx3Ans` (id vs ja):** id=[50, 84, 90], ja=[50, 84]
- **Angka berbeda pada `kpkEx3Q` (id vs ja):** id=[50, 84, 90], ja=[50, 84]
- **Angka berbeda pada `kpkEx3S2a` (id vs ja):** id=[2, 2, 84], ja=[2]
- **Angka berbeda pada `kpkEx3S2b` (id vs ja):** id=[3, 2, 90], ja=[2]
- **Angka berbeda pada `kpkEx3S2c` (id vs ja):** id=[5, 2, 50], ja=[2]
- **Angka berbeda pada `kpkEx3S2d` (id vs ja):** id=[7, 1, 84], ja=[1]
- **Angka berbeda pada `lcmOf34` (id vs ja):** id=[3, 4], ja=[]
- **Angka berbeda pada `lcmStoryAnsDate` (id vs ja):** id=[21], ja=[]
- **Angka berbeda pada `lcmStoryQ1b` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `lcmStoryQ2b` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `lcmStoryQ3b` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `lcmStoryQ4` (id vs ja):** id=[28], ja=[]
- **Angka berbeda pada `lcmStoryS3a` (id vs ja):** id=[28, 24], ja=[]
- **Angka berbeda pada `lcmStoryS3b` (id vs ja):** id=[31, 31, 28, 3], ja=[31, 28]
- **Angka berbeda pada `lcmStoryS3c` (id vs ja):** id=[24, 3, 21], ja=[24, 3]
- **Angka berbeda pada `multiples3Row` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `multiples4Row` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `primeFactOf1218` (id vs ja):** id=[12, 18], ja=[]
- **Angka berbeda pada `step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `step3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumStep1Label` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sumStep2Label` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `summarySubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `tipPrimeFact` (id vs ja):** id=[2, 3, 5, 7, 1], ja=[2, 3, 5, 7]
- **Angka berbeda pada `trick2Detail` (id vs ja):** id=[0, 48, 18, 48, 2, 18, 12, 18, 1, 12, 6, 12, 2, 6, 0, 6], ja=[48, 18, 48, 2, 18, 12, 18, 1, 12, 6, 12, 2, 6, 0, 6]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/OperasiCampuranPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/OperasiCampuranPage.tsx)

#### Peta 1: `translations` (baris 24)
Bahasa: id, en, ja
- **Angka berbeda pada `bonusAns` (id vs ja):** id=[55], ja=[]
- **Angka berbeda pada `bonusStory` (id vs ja):** id=[50, 28, 3, 15, 12], ja=[]
- **Angka berbeda pada `err1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `err2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `err3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `kurungIntro` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `kurungStep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `kurungStep2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `kurungStep3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumTip3D` (id vs ja):** id=[2, 3, 4, 2, 3, 5, 5, 4, 20], ja=[2, 3, 4, 2, 3, 4, 20]
- **Angka berbeda pada `summarySubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `tip3Body` (id vs ja):** id=[3, 2], ja=[3]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/PembagianPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/PembagianPage.tsx)

#### Peta 1: `object@12` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `divZeroEx2Q` (id vs en):** id=[0, -9], en=[0, 9]
- **Angka berbeda pada `q15xNeg3` (id vs en):** id=[-3, 15], en=[3, 15]
- **Angka berbeda pada `q30xNeg5` (id vs en):** id=[-5, 30], en=[5, 30]
- **Angka berbeda pada `qNeg12xNeg3` (id vs en):** id=[-3, -12], en=[3, 12]
- **Angka berbeda pada `qNeg20x4` (id vs en):** id=[4, -20], en=[4, 20]
- **Angka berbeda pada `qNeg40xNeg5` (id vs en):** id=[-5, -40], en=[5, 40]
- **Angka berbeda pada `qNeg6x2` (id vs en):** id=[2, -6], en=[2, 6]
- **Angka berbeda pada `contoh1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `contoh2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `contoh3ConcBold` (id vs ja):** id=[15], ja=[]
- **Angka berbeda pada `contoh3Known1` (id vs ja):** id=[120], ja=[]
- **Angka berbeda pada `contoh3Known2` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `contoh3Story` (id vs ja):** id=[120, 8], ja=[]
- **Angka berbeda pada `contoh3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `contoh4Title` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `divZeroEx1A` (id vs ja):** id=[0, 0], ja=[]
- **Angka berbeda pada `divZeroEx1Q` (id vs ja):** id=[0, 8], ja=[]
- **Angka berbeda pada `divZeroEx2Q` (id vs ja):** id=[0, -9], ja=[]
- **Angka berbeda pada `divZeroNoteEnd` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `introEx2` (id vs ja):** id=[7, 56], ja=[]
- **Angka berbeda pada `langkah1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `langkah2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `q12x3` (id vs ja):** id=[3, 12], ja=[]
- **Angka berbeda pada `q15xNeg3` (id vs ja):** id=[-3, 15], ja=[]
- **Angka berbeda pada `q30x6` (id vs ja):** id=[6, 30], ja=[]
- **Angka berbeda pada `q30xNeg5` (id vs ja):** id=[-5, 30], ja=[]
- **Angka berbeda pada `qNeg12xNeg3` (id vs ja):** id=[-3, -12], ja=[]
- **Angka berbeda pada `qNeg20x4` (id vs ja):** id=[4, -20], ja=[]
- **Angka berbeda pada `qNeg40xNeg5` (id vs ja):** id=[-5, -40], ja=[]
- **Angka berbeda pada `qNeg6x2` (id vs ja):** id=[2, -6], ja=[]
- **Angka berbeda pada `rangkumanSub` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `signTableH1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `signTableH2` (id vs ja):** id=[2], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/PenguranganPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/PenguranganPage.tsx)

#### Peta 1: `translations` (baris 954)
Bahasa: id, en, ja
- **Angka berbeda pada `cara1SubNegEx` (id vs ja):** id=[4, 3, 3], ja=[4, 3]
- **Angka berbeda pada `cara1SubPosEx` (id vs ja):** id=[6, 4, 4], ja=[6, 4]
- **Angka berbeda pada `ex1S1Body` (id vs ja):** id=[0, 6], ja=[]
- **Angka berbeda pada `ex1S1End` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `ex1S2Body` (id vs ja):** id=[6, 4], ja=[]
- **Angka berbeda pada `illustrationP` (id vs ja):** id=[0, 0], ja=[100]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `summarySubtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/PenjumlahanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/PenjumlahanPage.tsx)

#### Peta 1: `translations` (baris 957)
Bahasa: id, en, ja
- **Angka berbeda pada `cara1NegEx` (id vs ja):** id=[3, 3], ja=[3]
- **Angka berbeda pada `cara1PosEx` (id vs ja):** id=[5, 5], ja=[5]
- **Angka berbeda pada `cara1Step1` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `ex1S1Body` (id vs ja):** id=[0, 8], ja=[]
- **Angka berbeda pada `ex1S1End` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `ex1S2Body` (id vs ja):** id=[8, 3], ja=[]
- **Angka berbeda pada `ex1S2End` (id vs ja):** id=[-3], ja=[]
- **Angka berbeda pada `ex4aMeaning2` (id vs ja):** id=[8, -14], ja=[]
- **Angka berbeda pada `ex4aMethod2` (id vs ja):** id=[8, -14], ja=[]
- **Angka berbeda pada `ex4aThink` (id vs ja):** id=[8, -14], ja=[]
- **Angka berbeda pada `ex4bMethod` (id vs ja):** id=[10, -5, 15], ja=[]
- **Angka berbeda pada `ex4bThink` (id vs ja):** id=[10, -5], ja=[]
- **Angka berbeda pada `listTemp` (id vs ja):** id=[], ja=[0]
- **Angka berbeda pada `sifat2Body2` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `summarySubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `tip4Bold` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `tip4Ex` (id vs ja):** id=[0], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/PerkalianPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-bulat/PerkalianPage.tsx)

#### Peta 1: `translations` (baris 354)
Bahasa: id, en, ja
- **Angka berbeda pada `ex2cS2` (id vs en):** id=[-8], en=[8]
- **Angka berbeda pada `conclusionBodyC` (id vs ja):** id=[], ja=[1]
- **Angka berbeda pada `desc2x3Bold` (id vs ja):** id=[], ja=[3, 2]
- **Angka berbeda pada `desc4x5Bold` (id vs ja):** id=[], ja=[5, 4]
- **Angka berbeda pada `easyMemoText` (id vs ja):** id=[], ja=[1, 2, 2]
- **Angka berbeda pada `ex2cS2` (id vs ja):** id=[-8], ja=[8]
- **Angka berbeda pada `negNegDescB` (id vs ja):** id=[1], ja=[1, 1]
- **Angka berbeda pada `negPosIntroE` (id vs ja):** id=[1], ja=[1, 1]
- **Angka berbeda pada `posNegG1` (id vs ja):** id=[-3], ja=[-3, 1]
- **Angka berbeda pada `posNegG2` (id vs ja):** id=[-3], ja=[-3, 2]
- **Angka berbeda pada `posNegG3` (id vs ja):** id=[-3], ja=[-3, 3]
- **Angka berbeda pada `posNegG4` (id vs ja):** id=[-3], ja=[-3, 4]
- **Angka berbeda pada `posPosG1` (id vs ja):** id=[3], ja=[3, 1]
- **Angka berbeda pada `posPosG2` (id vs ja):** id=[3], ja=[3, 2]
- **Angka berbeda pada `posPosG3` (id vs ja):** id=[3], ja=[3, 3]
- **Angka berbeda pada `posPosG4` (id vs ja):** id=[3], ja=[3, 4]
- **Angka berbeda pada `prop1Desc` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `prop3Desc` (id vs ja):** id=[], ja=[3]
- **Angka berbeda pada `prop4Desc` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `secNolSatuTitle` (id vs ja):** id=[0, 1], ja=[1]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `summarySubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `tip3Body` (id vs ja):** id=[1, 2, 3, 6, 3], ja=[1, 2, 3, 6]
- **Angka berbeda pada `trickSameSignDetail` (id vs ja):** id=[], ja=[1]


## Topik bilangan-rasional

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/ArtiPecahanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/ArtiPecahanPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `ex2Q` (id vs ja):** id=[45, 1], ja=[1, 45]
- **Angka berbeda pada `ex4Q` (id vs ja):** id=[2, 2, 3], ja=[2, 3, 2]
- **Angka berbeda pada `imgCaption` (id vs ja):** id=[1, 2, 2, 4, 3, 6, 4, 8, 6, 12], ja=[5, 1, 2, 2, 4, 3, 6, 4, 8, 6, 12]
- **Angka berbeda pada `numberLineBody` (id vs ja):** id=[1, 2, 0, 1], ja=[2, 1, 2, 0, 1]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sec1Components` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `sec2VisualExample` (id vs ja):** id=[2, 1, 1, 2, 2, 4, 2, 4, 3, 6, 3, 6], ja=[2, 1, 1, 2, 4, 2, 2, 4, 6, 3, 3, 6]
- **Angka berbeda pada `sec3RelTitle` (id vs ja):** id=[], ja=[3]
- **Angka berbeda pada `sec3SummaryBody` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `sec3Title` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `tags[]` (id vs ja):** id=[], ja=[4]
- **Angka berbeda pada `visualExample` (id vs ja):** id=[4, 3, 3, 4, 3, 4], ja=[3, 4, 3, 4]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/BentukDesimalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/BentukDesimalPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `ex12KaTeX` (id vs en):** id=[0, 1, 6, 1, 6, 16, 6, 15, 15, 15, 90, 1, 6], en=[0.1, 6, 1, 6, 16, 6, 15, 15, 15, 90, 1, 6]
- **Angka berbeda pada `ex2KaTeX` (id vs en):** id=[2345, 678, 2000, 300, 40, 5, 0, 6, 0, 7, 0, 8], en=[2345.678, 2000, 300, 40, 5, 0.6, 0.07, 0.008]
- **Angka berbeda pada `ex3Ans` (id vs en):** id=[4.67, 467, 100], en=[4.67, 4, 67, 100]
- **Angka berbeda pada `ex3KaTeX` (id vs en):** id=[4, 67, 4, 67, 100], en=[4.67, 4, 67, 100]
- **Angka berbeda pada `ex4KaTeX` (id vs en):** id=[3, 5, 3, 2, 5, 2, 6, 10, 0, 6], en=[3, 5, 3, 2, 5, 2, 6, 10, 0.6]
- **Angka berbeda pada `ex5KaTeX` (id vs en):** id=[4, 125, 4, 8, 125, 8, 32, 1000, 0, 32], en=[4, 125, 4, 8, 125, 8, 32, 1000, 0.032]
- **Angka berbeda pada `ex6KaTeX` (id vs en):** id=[7, 11, 0, 6363], en=[7, 11, 0.6363]
- **Angka berbeda pada `ex7KaTeX` (id vs en):** id=[0, 6, 6, 10, 3, 5], en=[0.6, 6, 10, 3, 5]
- **Angka berbeda pada `ex8KaTeX` (id vs en):** id=[0, 125, 125, 1000, 1, 8], en=[0.125, 125, 1000, 1, 8]
- **Angka berbeda pada `ex9KaTeX` (id vs en):** id=[0, 289, 289, 1000000], en=[0.000289, 289, 1000000]
- **Angka berbeda pada `sec4TipBody` (id vs en):** id=[9, 0], en=[0]
- **Angka berbeda pada `conclusionBody2` (id vs ja):** id=[10, 100, 1000], ja=[10, 100, 1000, 2]
- **Angka berbeda pada `conclusionBold` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `ex10Body` (id vs ja):** id=[0.3333, 10, 1], ja=[0.3333, 10]
- **Angka berbeda pada `ex11Body` (id vs ja):** id=[2, 100], ja=[100]
- **Angka berbeda pada `ex12Body` (id vs ja):** id=[1, 1], ja=[]
- **Angka berbeda pada `ex12KaTeX` (id vs ja):** id=[0, 1, 6, 1, 6, 16, 6, 15, 15, 15, 90, 1, 6], ja=[0.1, 6, 1, 6, 16, 6, 15, 15, 15, 90, 1, 6]
- **Angka berbeda pada `ex1Q` (id vs ja):** id=[7, 3.478], ja=[3.478, 7]
- **Angka berbeda pada `ex2KaTeX` (id vs ja):** id=[2345, 678, 2000, 300, 40, 5, 0, 6, 0, 7, 0, 8], ja=[2345.678, 2000, 300, 40, 5, 0.6, 0.07, 0.008]
- **Angka berbeda pada `ex3Ans` (id vs ja):** id=[4.67, 467, 100], ja=[4.67, 4, 67, 100]
- **Angka berbeda pada `ex3KaTeX` (id vs ja):** id=[4, 67, 4, 67, 100], ja=[4.67, 4, 67, 100]
- **Angka berbeda pada `ex4KaTeX` (id vs ja):** id=[3, 5, 3, 2, 5, 2, 6, 10, 0, 6], ja=[3, 5, 3, 2, 5, 2, 6, 10, 0.6]
- **Angka berbeda pada `ex5KaTeX` (id vs ja):** id=[4, 125, 4, 8, 125, 8, 32, 1000, 0, 32], ja=[4, 125, 4, 8, 125, 8, 32, 1000, 0.032]
- **Angka berbeda pada `ex6KaTeX` (id vs ja):** id=[7, 11, 0, 6363], ja=[7, 11, 0.6363]
- **Angka berbeda pada `ex7KaTeX` (id vs ja):** id=[0, 6, 6, 10, 3, 5], ja=[0.6, 6, 10, 3, 5]
- **Angka berbeda pada `ex8KaTeX` (id vs ja):** id=[0, 125, 125, 1000, 1, 8], ja=[0.125, 125, 1000, 1, 8]
- **Angka berbeda pada `ex9KaTeX` (id vs ja):** id=[0, 289, 289, 1000000], ja=[0.000289, 289, 1000000]
- **Angka berbeda pada `sec2SummaryBody` (id vs ja):** id=[1, 10, 100, 1000, 2], ja=[2, 1, 10, 100, 1000, 2]
- **Angka berbeda pada `sec3Rules[]` (id vs ja):** id=[3, 1000], ja=[1000]
- **Angka berbeda pada `sec4Notation[]` (id vs ja):** id=[0.16, 0.1666, 6, 1], ja=[0.16, 0.1666, 1, 6]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PecahanCampuranPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PecahanCampuranPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `ex9katex3` (id vs en):** id=[3, 40, 100, 300, 40, 7, 5], en=[3, 40, 100, 300, 40, 7.5]
- **Angka berbeda pada `sumTips[].detail` (id vs en):** id=[20, 150000, 150000, 20, 100, 30000, 150000, 30000, 120000], en=[20, 150, 150, 20, 100, 30, 150, 30, 120]
- **Angka berbeda pada `bonus2` (id vs ja):** id=[11, 11, 100], ja=[11, 100]
- **Angka berbeda pada `bonus3` (id vs ja):** id=[5, 5, 100], ja=[5, 100]
- **Angka berbeda pada `ex5s3` (id vs ja):** id=[6, 12, 6], ja=[]
- **Angka berbeda pada `ex7s1` (id vs ja):** id=[1, 100], ja=[]
- **Angka berbeda pada `ex7s2` (id vs ja):** id=[2, 100], ja=[]
- **Angka berbeda pada `ex8Why` (id vs ja):** id=[15, 100, 100, 15, 2, 15, 100], ja=[100, 2]
- **Angka berbeda pada `ex8s1` (id vs ja):** id=[100], ja=[]
- **Angka berbeda pada `ex8s3` (id vs ja):** id=[100], ja=[]
- **Angka berbeda pada `ex9Q` (id vs ja):** id=[18, 22, 3], ja=[]
- **Angka berbeda pada `ex9ans` (id vs ja):** id=[7.5], ja=[5]
- **Angka berbeda pada `ex9katex3` (id vs ja):** id=[3, 40, 100, 300, 40, 7, 5], ja=[3, 40, 100, 300, 40, 7.5]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sec1Summary` (id vs ja):** id=[2, 2, 1, 2], ja=[2, 1, 2]
- **Angka berbeda pada `sec1Visual` (id vs ja):** id=[7, 3, 7, 3, 7, 3, 2, 1, 7, 3, 2, 1, 3, 2, 1, 3], ja=[7, 3, 7, 3, 2, 7, 3, 2, 1, 3, 1, 3]
- **Angka berbeda pada `sec3FormulaDesc` (id vs ja):** id=[1, 100, 100, 2, 100], ja=[]
- **Angka berbeda pada `sec3Summary` (id vs ja):** id=[100], ja=[]
- **Angka berbeda pada `sumCards[].desc` (id vs ja):** id=[100, 25, 80, 25, 100, 80, 20], ja=[100, 25, 100, 80, 20]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumTips[].detail` (id vs ja):** id=[20, 150000, 150000, 20, 100, 30000, 150000, 30000, 120000], ja=[150, 20, 100, 150, 30, 120]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembagianBentukDesimalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembagianBentukDesimalPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `ex3Q` (id vs en):** id=[3456.78, 100000], en=[3456.78, 100]
- **Angka berbeda pada `ex4Q` (id vs en):** id=[14.245, 0.7], en=[14245, 0.7]
- **Angka berbeda pada `ex5Q` (id vs en):** id=[1.03248, 0.012], en=[1.03248, 12]
- **Angka berbeda pada `ex7Q` (id vs en):** id=[2.5, 500], en=[2.5, 37500]
- **Angka berbeda pada `ex7ans` (id vs en):** id=[0], en=[15000]
- **Angka berbeda pada `ex7given1` (id vs en):** id=[500], en=[37500]
- **Angka berbeda pada `usage1desc` (id vs en):** id=[750, 2.5], en=[15750, 2.5]
- **Angka berbeda pada `div10` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `div100` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `div1000` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex1s1desc` (id vs ja):** id=[10, 1], ja=[]
- **Angka berbeda pada `ex1s2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2s1desc` (id vs ja):** id=[1000, 3], ja=[]
- **Angka berbeda pada `ex2s2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex3Q` (id vs ja):** id=[3456.78, 100000], ja=[3456.78, 100]
- **Angka berbeda pada `ex3s1desc` (id vs ja):** id=[100000, 5], ja=[0]
- **Angka berbeda pada `ex3s2` (id vs ja):** id=[3456.78, 4], ja=[3456]
- **Angka berbeda pada `ex3s2desc` (id vs ja):** id=[1, 3456.78], ja=[3456.78]
- **Angka berbeda pada `ex3s3` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `ex4Q` (id vs ja):** id=[14.245, 0.7], ja=[14245, 0.7]
- **Angka berbeda pada `ex4s2` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `ex5Q` (id vs ja):** id=[1.03248, 0.012], ja=[1.03248, 12]
- **Angka berbeda pada `ex5s2` (id vs ja):** id=[3, 1000], ja=[]
- **Angka berbeda pada `ex6s2` (id vs ja):** id=[4, 10000], ja=[10]
- **Angka berbeda pada `ex7Q` (id vs ja):** id=[2.5, 500], ja=[5, 37]
- **Angka berbeda pada `ex7ans` (id vs ja):** id=[0], ja=[15]
- **Angka berbeda pada `ex7find` (id vs ja):** id=[], ja=[1]
- **Angka berbeda pada `ex7given1` (id vs ja):** id=[500], ja=[37500]
- **Angka berbeda pada `ex7multiply` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `ex7pricePerKg` (id vs ja):** id=[], ja=[1]
- **Angka berbeda pada `ex8Q` (id vs ja):** id=[187.5, 12.5], ja=[5]
- **Angka berbeda pada `ex8ans` (id vs ja):** id=[15], ja=[]
- **Angka berbeda pada `ex8given2` (id vs ja):** id=[12.5], ja=[12]
- **Angka berbeda pada `ex8multiply` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `ex9Q` (id vs ja):** id=[24.36, 0.84], ja=[]
- **Angka berbeda pada `ex9ans` (id vs ja):** id=[29], ja=[]
- **Angka berbeda pada `ex9given1` (id vs ja):** id=[24.36], ja=[24]
- **Angka berbeda pada `ex9given2` (id vs ja):** id=[0.84], ja=[0]
- **Angka berbeda pada `ex9multiply` (id vs ja):** id=[100], ja=[]
- **Angka berbeda pada `illus1desc1` (id vs ja):** id=[0.7, 1], ja=[]
- **Angka berbeda pada `illus1desc2` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `illus2desc1` (id vs ja):** id=[0.012, 3], ja=[]
- **Angka berbeda pada `illus2desc2` (id vs ja):** id=[1000], ja=[]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sec1Summary` (id vs ja):** id=[10, 100, 1000, 10, 1, 100, 2, 1000, 3], ja=[100]
- **Angka berbeda pada `sec1Title` (id vs ja):** id=[10, 100, 1000], ja=[100]
- **Angka berbeda pada `sec2FormulaNote` (id vs ja):** id=[10, 100, 1000], ja=[100]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumTips[].detail` (id vs ja):** id=[4.8, 0.12, 5, 0.1, 50, 40, 50, 4, 400], ja=[4.8, 0.12, 5, 0.1, 50]
- **Angka berbeda pada `usage1desc` (id vs ja):** id=[750, 2.5], ja=[15750, 2.5]
- **Angka berbeda pada `usage2desc` (id vs ja):** id=[125.5, 8.5], ja=[125.5, 8]
- **Angka berbeda pada `usage3desc` (id vs ja):** id=[18.6, 1.2], ja=[18.6, 1]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembagianPecahanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembagianPecahanPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `ex3Q` (id vs ja):** id=[1, 5, 5, 8], ja=[5, 1, 5, 8]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembulatanBentukDesimalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PembulatanBentukDesimalPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `ex1Q` (id vs en):** id=[4.638], en=[4638]
- **Angka berbeda pada `ex1s1desc` (id vs en):** id=[4, 6, 38, 6, 1], en=[4, 6, 38, 6]
- **Angka berbeda pada `ex1s2` (id vs en):** id=[2], en=[]
- **Angka berbeda pada `ex1s2desc` (id vs en):** id=[2, 3, 5], en=[3, 5]
- **Angka berbeda pada `ex2s1desc` (id vs en):** id=[5.7, 0, 642, 0, 2], en=[5.7, 0, 642, 0]
- **Angka berbeda pada `ex2s2` (id vs en):** id=[3], en=[]
- **Angka berbeda pada `ex2s2desc` (id vs en):** id=[3, 6, 5], en=[6, 5]
- **Angka berbeda pada `ex3s1desc` (id vs en):** id=[7.63, 8, 524, 8, 3], en=[7.63, 8, 524, 8]
- **Angka berbeda pada `ex3s2` (id vs en):** id=[4], en=[]
- **Angka berbeda pada `ex3s2desc` (id vs en):** id=[4, 5, 5], en=[5, 5]
- **Angka berbeda pada `ex6Q` (id vs en):** id=[319.837], en=[319837]
- **Angka berbeda pada `ex7s1desc` (id vs en):** id=[25, 4, 8, 4, 1], en=[25, 4, 8, 4]
- **Angka berbeda pada `ex7s2` (id vs en):** id=[2], en=[]
- **Angka berbeda pada `ex7s2desc` (id vs en):** id=[2, 8, 5], en=[8, 5]
- **Angka berbeda pada `ex8Q` (id vs en):** id=[10.473], en=[10473]
- **Angka berbeda pada `ex8s1desc` (id vs en):** id=[10.4, 7, 3, 7, 2], en=[10.4, 7, 3, 7]
- **Angka berbeda pada `ex8s2` (id vs en):** id=[3], en=[]
- **Angka berbeda pada `ex8s2desc` (id vs en):** id=[3, 3, 5], en=[3, 5]
- **Angka berbeda pada `ex9ans` (id vs en):** id=[2.996], en=[2996]
- **Angka berbeda pada `ex9s1desc` (id vs en):** id=[2.99, 5, 67, 5, 3], en=[2.99, 5, 67, 5]
- **Angka berbeda pada `ex9s2` (id vs en):** id=[4], en=[]
- **Angka berbeda pada `ex9s2desc` (id vs en):** id=[4, 6, 5], en=[6, 5]
- **Angka berbeda pada `ex9s3desc` (id vs en):** id=[5, 1, 6, 3, 6], en=[5, 1, 6, 6]
- **Angka berbeda pada `ex9s4desc` (id vs en):** id=[2.995, 2.996], en=[2995, 2996]
- **Angka berbeda pada `sec1Pos1` (id vs en):** id=[1, 2], en=[1]
- **Angka berbeda pada `sec1Pos2` (id vs en):** id=[2, 3], en=[2]
- **Angka berbeda pada `sec1Pos3` (id vs en):** id=[3, 4], en=[3]
- **Angka berbeda pada `conclusionBody` (id vs ja):** id=[5, 5], ja=[]
- **Angka berbeda pada `ex1Q` (id vs ja):** id=[4.638], ja=[4638]
- **Angka berbeda pada `ex1s1desc` (id vs ja):** id=[4, 6, 38, 6, 1], ja=[4, 6, 38]
- **Angka berbeda pada `ex1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex1s2desc` (id vs ja):** id=[2, 3, 5], ja=[3]
- **Angka berbeda pada `ex1s3` (id vs ja):** id=[3, 5, 6], ja=[3]
- **Angka berbeda pada `ex2s1desc` (id vs ja):** id=[5.7, 0, 642, 0, 2], ja=[5.7, 0, 642]
- **Angka berbeda pada `ex2s2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex2s2desc` (id vs ja):** id=[3, 6, 5], ja=[6]
- **Angka berbeda pada `ex2s3` (id vs ja):** id=[6, 5, 0, 1], ja=[6]
- **Angka berbeda pada `ex2s3desc` (id vs ja):** id=[0, 1, 1, 5.71], ja=[0, 1, 1, 71]
- **Angka berbeda pada `ex3s1desc` (id vs ja):** id=[7.63, 8, 524, 8, 3], ja=[7.63, 8, 524]
- **Angka berbeda pada `ex3s2` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex3s2desc` (id vs ja):** id=[4, 5, 5], ja=[5]
- **Angka berbeda pada `ex3s3` (id vs ja):** id=[5, 5, 8, 1], ja=[5]
- **Angka berbeda pada `ex3s3desc` (id vs ja):** id=[8, 1, 9, 7.639], ja=[8, 1, 9, 639]
- **Angka berbeda pada `ex4s2desc` (id vs ja):** id=[4, 5], ja=[4]
- **Angka berbeda pada `ex4s3` (id vs ja):** id=[4, 5], ja=[4]
- **Angka berbeda pada `ex5s2desc` (id vs ja):** id=[5, 5], ja=[5]
- **Angka berbeda pada `ex5s3` (id vs ja):** id=[5, 5, 1], ja=[5]
- **Angka berbeda pada `ex5s3desc` (id vs ja):** id=[3, 1, 4, 614], ja=[3, 1, 4]
- **Angka berbeda pada `ex6Q` (id vs ja):** id=[319.837], ja=[319837]
- **Angka berbeda pada `ex6s2desc` (id vs ja):** id=[8, 5], ja=[8]
- **Angka berbeda pada `ex6s3` (id vs ja):** id=[8, 5, 1], ja=[8]
- **Angka berbeda pada `ex6s3desc` (id vs ja):** id=[9, 1, 10, 10], ja=[9, 1, 10]
- **Angka berbeda pada `ex7s1desc` (id vs ja):** id=[25, 4, 8, 4, 1], ja=[25, 4, 8]
- **Angka berbeda pada `ex7s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex7s2desc` (id vs ja):** id=[2, 8, 5], ja=[8]
- **Angka berbeda pada `ex7s3` (id vs ja):** id=[8, 5, 4, 1], ja=[8]
- **Angka berbeda pada `ex8Q` (id vs ja):** id=[10.473], ja=[10473]
- **Angka berbeda pada `ex8s1desc` (id vs ja):** id=[10.4, 7, 3, 7, 2], ja=[10.4, 7, 3]
- **Angka berbeda pada `ex8s2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex8s2desc` (id vs ja):** id=[3, 3, 5], ja=[3]
- **Angka berbeda pada `ex8s3` (id vs ja):** id=[3, 5, 7], ja=[3]
- **Angka berbeda pada `ex8s3desc` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex9ans` (id vs ja):** id=[2.996], ja=[2996]
- **Angka berbeda pada `ex9s1desc` (id vs ja):** id=[2.99, 5, 67, 5, 3], ja=[2.99, 5, 67]
- **Angka berbeda pada `ex9s2` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex9s2desc` (id vs ja):** id=[4, 6, 5], ja=[6]
- **Angka berbeda pada `ex9s3` (id vs ja):** id=[6, 5, 5, 1], ja=[6]
- **Angka berbeda pada `ex9s3desc` (id vs ja):** id=[5, 1, 6, 3, 6], ja=[5, 1, 6]
- **Angka berbeda pada `ex9s4desc` (id vs ja):** id=[2.995, 2.996], ja=[2995, 2996]
- **Angka berbeda pada `nextLabel` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sec1IllusCaption` (id vs ja):** id=[9.59, 9.6, 9, 5], ja=[59, 6, 9]
- **Angka berbeda pada `sec1Pos1` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `sec1Pos2` (id vs ja):** id=[2, 3], ja=[]
- **Angka berbeda pada `sec1Pos3` (id vs ja):** id=[3, 4], ja=[]
- **Angka berbeda pada `sec1Summary` (id vs ja):** id=[5, 1, 5], ja=[1]
- **Angka berbeda pada `sec1Tips[]` (id vs ja):** id=[5, 5, 6, 7, 8, 9], ja=[5, 6, 7, 8, 9]
- **Angka berbeda pada `sec1UpDesc` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec2Summary` (id vs ja):** id=[5, 1, 5], ja=[]
- **Angka berbeda pada `sec2UpText` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sumGrid[].contoh` (id vs ja):** id=[3.43, 3.4, 1], ja=[3.43, 3.4]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumTips[].detail` (id vs ja):** id=[34.7, 18.3, 35, 18, 630], ja=[34.7, 18, 18]
- **Angka berbeda pada `usage[].desc` (id vs ja):** id=[2, 45, 3], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PenjumlahanPenguranganBentukDesimalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PenjumlahanPenguranganBentukDesimalPage.tsx)

#### Peta 1: `translations` (baris 16)
Bahasa: id, en, ja
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s1e1s1` (id vs ja):** id=[1, 14, 7, 14, 70, 1], ja=[14, 7, 14, 70]
- **Angka berbeda pada `s1e1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s1e1s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s1e2note` (id vs ja):** id=[4, 0, 4, 5, 8, 13, 3, 1, 7, 1, 1, 9], ja=[4, 0, 4, 5, 8, 13, 7, 1, 1, 9]
- **Angka berbeda pada `s1e2s1` (id vs ja):** id=[1, 52, 18, 2, 9, 754, 3, 1, 52, 18, 52, 180], ja=[52, 18, 9, 754, 52, 18, 52, 180]
- **Angka berbeda pada `s1e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s1e3Q` (id vs ja):** id=[3, 934, 456, 70, 806, 8, 34], ja=[934, 456, 70, 806, 8, 34]
- **Angka berbeda pada `s1e3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1e3s2` (id vs ja):** id=[2, 8, 34, 8, 340], ja=[8, 34, 8, 340]
- **Angka berbeda pada `s1e3s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s2e1s1` (id vs ja):** id=[1, 23, 5, 23, 50], ja=[23, 5, 23, 50]
- **Angka berbeda pada `s2e2Q` (id vs ja):** id=[84, 937, 725, 46], ja=[725, 46, 84, 937]
- **Angka berbeda pada `s2e2s1` (id vs ja):** id=[1, 725, 46, 725, 460], ja=[725, 46, 725, 460]
- **Angka berbeda pada `s2e3Q` (id vs ja):** id=[89, 276, 467, 8, 120, 5], ja=[467, 8, 89, 276, 120, 5]
- **Angka berbeda pada `s2e3s1` (id vs ja):** id=[1, 467, 8, 89, 276], ja=[467, 8, 89, 276]
- **Angka berbeda pada `s2e3s2` (id vs ja):** id=[2, 378, 524, 120, 50], ja=[378, 524, 120, 50]
- **Angka berbeda pada `s3e1s1` (id vs ja):** id=[1, 18, 60, 7, 45], ja=[18, 60, 7, 45]
- **Angka berbeda pada `s3e1s2` (id vs ja):** id=[2, 26, 5, 9, 30], ja=[26, 5, 9, 30]
- **Angka berbeda pada `s3e3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s3e3s2` (id vs ja):** id=[2, 1250, 75, 375, 50], ja=[1250, 75, 375, 50]
- **Angka berbeda pada `s3e3s3` (id vs ja):** id=[3, 875, 25, 128, 25], ja=[875, 25, 128, 25]
- **Angka berbeda pada `sec0Note1` (id vs ja):** id=[6, 6, 12, 2, 1], ja=[6, 6, 12]
- **Angka berbeda pada `sec0Note2` (id vs ja):** id=[4, 8, 12, 2, 1], ja=[4, 8, 12]
- **Angka berbeda pada `sec0Note3` (id vs ja):** id=[3, 7, 10, 0, 1], ja=[3, 7, 10]
- **Angka berbeda pada `sec2Summary` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec2Tip` (id vs ja):** id=[467.8, 467, 8, 467, 800, 3], ja=[467, 467, 8, 467, 800]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumTips[].detail` (id vs ja):** id=[3.14, 2.5, 5.64, 2.5, 3.14, 5.64], ja=[3.14, 2.5, 5.64, 2.5, 3.14]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PenjumlahanPenguranganPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PenjumlahanPenguranganPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `ex9Q` (id vs en):** id=[0, 2, 5], en=[840000, 2, 5]
- **Angka berbeda pada `ex9ans` (id vs en):** id=[0], en=[364000]
- **Angka berbeda pada `ex9katex4` (id vs en):** id=[13, 30, 840000, 364000], en=[13, 30, 840, 0, 364, 0]
- **Angka berbeda pada `ex11s2` (id vs ja):** id=[6, 4, 12], ja=[12]
- **Angka berbeda pada `ex12ans` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `ex2s1` (id vs ja):** id=[6, 8, 24], ja=[]
- **Angka berbeda pada `ex3s2` (id vs ja):** id=[4, 8, 8], ja=[]
- **Angka berbeda pada `ex6s2` (id vs ja):** id=[3, 4, 2, 12], ja=[3, 4]
- **Angka berbeda pada `ex8s1` (id vs ja):** id=[4, 6, 12], ja=[]
- **Angka berbeda pada `ex9Q` (id vs ja):** id=[0, 2, 5], ja=[840, 2, 5]
- **Angka berbeda pada `ex9ans` (id vs ja):** id=[0], ja=[364]
- **Angka berbeda pada `ex9katex4` (id vs ja):** id=[13, 30, 840000, 364000], ja=[13, 30, 840, 0, 364, 0]
- **Angka berbeda pada `ex9s2` (id vs ja):** id=[6, 5, 30], ja=[]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PerkalianBentukDesimalPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PerkalianBentukDesimalPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `ex3Q` (id vs en):** id=[8.6543, 100000], en=[8.6543, 100]
- **Angka berbeda pada `ex6Q` (id vs en):** id=[3.67, 4.258], en=[3.67, 4258]
- **Angka berbeda pada `ex7Q` (id vs en):** id=[500, 2.5], en=[15500, 2.5]
- **Angka berbeda pada `ex7ans` (id vs en):** id=[750], en=[38750]
- **Angka berbeda pada `ex7katex1` (id vs en):** id=[15500, 2.5], en=[15.5, 2.5]
- **Angka berbeda pada `ex8Q` (id vs en):** id=[8.5, 100, 650, 350], en=[8.5, 100, 12650, 350]
- **Angka berbeda pada `ex8ans` (id vs en):** id=[337.5], en=[376337.5]
- **Angka berbeda pada `ex8katex2` (id vs en):** id=[29.75, 12650], en=[29.75, 12, 650]
- **Angka berbeda pada `ex9Q` (id vs en):** id=[12.75, 8.4, 0.3, 0.3, 0], en=[12.75, 8.4, 0.3, 0.3, 25000]
- **Angka berbeda pada `ex9ans` (id vs en):** id=[750000], en=[29750000]
- **Angka berbeda pada `ex9katex4` (id vs en):** id=[1190, 25000, 29750000], en=[1190, 25, 0, 29, 750, 0]
- **Angka berbeda pada `ex1s1desc` (id vs ja):** id=[10, 1], ja=[]
- **Angka berbeda pada `ex1s2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2s1desc` (id vs ja):** id=[1000, 3], ja=[]
- **Angka berbeda pada `ex2s2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex3Q` (id vs ja):** id=[8.6543, 100000], ja=[8.6543, 100]
- **Angka berbeda pada `ex3s1desc` (id vs ja):** id=[100000, 5], ja=[0]
- **Angka berbeda pada `ex3s2` (id vs ja):** id=[8.6543, 4], ja=[8]
- **Angka berbeda pada `ex3s2desc` (id vs ja):** id=[1, 8.6543], ja=[8.6543]
- **Angka berbeda pada `ex3s3` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `ex4s1a` (id vs ja):** id=[0.25, 2], ja=[0]
- **Angka berbeda pada `ex4s1b` (id vs ja):** id=[0.87, 2], ja=[0]
- **Angka berbeda pada `ex4s1total` (id vs ja):** id=[2, 2, 4], ja=[2, 2]
- **Angka berbeda pada `ex4s3` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex5s1a` (id vs ja):** id=[6.4, 1], ja=[6]
- **Angka berbeda pada `ex5s1b` (id vs ja):** id=[1.38, 2], ja=[1]
- **Angka berbeda pada `ex5s1total` (id vs ja):** id=[1, 2, 3], ja=[1, 2]
- **Angka berbeda pada `ex5s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex6Q` (id vs ja):** id=[3.67, 4.258], ja=[3.67, 4258]
- **Angka berbeda pada `ex6s1a` (id vs ja):** id=[3.67, 2], ja=[3]
- **Angka berbeda pada `ex6s1b` (id vs ja):** id=[4.258, 3], ja=[4]
- **Angka berbeda pada `ex6s1total` (id vs ja):** id=[2, 3, 5], ja=[2, 3]
- **Angka berbeda pada `ex6s3` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `ex7Q` (id vs ja):** id=[500, 2.5], ja=[15, 2.5]
- **Angka berbeda pada `ex7ans` (id vs ja):** id=[750], ja=[38]
- **Angka berbeda pada `ex7katex1` (id vs ja):** id=[15500, 2.5], ja=[15.5, 2.5]
- **Angka berbeda pada `ex7s2a` (id vs ja):** id=[15500, 0], ja=[15]
- **Angka berbeda pada `ex7s2b` (id vs ja):** id=[2.5, 1], ja=[2]
- **Angka berbeda pada `ex7s2d` (id vs ja):** id=[1, 38750], ja=[38750]
- **Angka berbeda pada `ex8Q` (id vs ja):** id=[8.5, 100, 650, 350], ja=[12, 350]
- **Angka berbeda pada `ex8ans` (id vs ja):** id=[337.5], ja=[376337]
- **Angka berbeda pada `ex8katex2` (id vs ja):** id=[29.75, 12650], ja=[29.75, 12, 650]
- **Angka berbeda pada `ex8s3a` (id vs ja):** id=[29.75, 2, 12650, 0], ja=[29.75, 12650]
- **Angka berbeda pada `ex8s3c` (id vs ja):** id=[2, 376337.5], ja=[376337.5]
- **Angka berbeda pada `ex9Q` (id vs ja):** id=[12.75, 8.4, 0.3, 0.3, 0], ja=[75, 4, 0.3, 0.3, 25]
- **Angka berbeda pada `ex9ans` (id vs ja):** id=[750000], ja=[29750]
- **Angka berbeda pada `ex9katex4` (id vs ja):** id=[1190, 25000, 29750000], ja=[1190, 25, 0, 29, 750, 0]
- **Angka berbeda pada `illus1` (id vs ja):** id=[0.25, 2], ja=[0.25]
- **Angka berbeda pada `illus2` (id vs ja):** id=[0.87, 2], ja=[0.87]
- **Angka berbeda pada `illus3` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `illus4` (id vs ja):** id=[1.8, 1], ja=[1.8]
- **Angka berbeda pada `illus5` (id vs ja):** id=[1.3626, 4], ja=[1.3626]
- **Angka berbeda pada `illus6` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `mul10` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `mul100` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `mul1000` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sec1Summary` (id vs ja):** id=[10, 100, 1000, 10, 1, 100, 2, 1000, 3], ja=[100]
- **Angka berbeda pada `sec1Title` (id vs ja):** id=[10, 100, 1000], ja=[100]
- **Angka berbeda pada `sec2FormulaBody` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumTips[].detail` (id vs ja):** id=[1.5, 2.4, 3.6, 3.6, 1.5, 2.4], ja=[1.5, 2.4, 3, 3.6, 1.5, 2]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PerkalianPecahanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/bilangan-rasional/PerkalianPecahanPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `ex3Q` (id vs en):** id=[600000, 2, 5, 1, 4], en=[3600, 2, 5, 1, 4]
- **Angka berbeda pada `ex3ans` (id vs en):** id=[0], en=[360]
- **Angka berbeda pada `ex3katex1` (id vs en):** id=[1, 10, 600000], en=[1, 10, 3, 600]
- **Angka berbeda pada `ex3katex2` (id vs en):** id=[0], en=[360]
- **Angka berbeda pada `ex12Q` (id vs ja):** id=[1, 3, 1, 4, 1, 6], ja=[1, 3, 1, 4, 1, 6, 2]
- **Angka berbeda pada `ex3Q` (id vs ja):** id=[600000, 2, 5, 1, 4], ja=[3, 2, 5, 1, 4]
- **Angka berbeda pada `ex3ans` (id vs ja):** id=[0], ja=[360]
- **Angka berbeda pada `ex3katex1` (id vs ja):** id=[1, 10, 600000], ja=[1, 10, 3, 600]
- **Angka berbeda pada `ex3katex2` (id vs ja):** id=[0], ja=[360]
- **Angka berbeda pada `ex8Q` (id vs ja):** id=[3, 7, 1, 9, 3, 5], ja=[3, 7, 1, 9, 3, 5, 2]
- **Angka berbeda pada `ex8way1` (id vs ja):** id=[1], ja=[1, 2]
- **Angka berbeda pada `ex8way2` (id vs ja):** id=[2], ja=[2, 2]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `sumSubtitle` (id vs ja):** id=[7], ja=[]


## Topik fungsi-kuadrat

Tidak ada objek terjemahan per bahasa yang dapat dianalisis.

## Topik garis-dan-sudut

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut/HubunganDuaGarisPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut/HubunganDuaGarisPage.tsx)

#### Peta 1: `uiMap` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `ex1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex2r4` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex3q3` (id vs ja):** id=[8, 17, 10], ja=[]
- **Angka berbeda pada `ex3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s2note` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s2spTxt` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `s4noteTxt` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec5` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut/JumlahSudutSegiBanyakPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut/JumlahSudutSegiBanyakPage.tsx)

#### Peta 1: `uiMap` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `ex3ansCName` (id vs en):** id=[], en=[10]
- **Angka berbeda pada `grid4` (id vs en):** id=[4, 4], en=[4]
- **Angka berbeda pada `grid5` (id vs en):** id=[5, 5], en=[5]
- **Angka berbeda pada `grid6` (id vs en):** id=[6, 6], en=[6]
- **Angka berbeda pada `s2p1b` (id vs en):** id=[2], en=[]
- **Angka berbeda pada `svgSegi6label` (id vs en):** id=[6], en=[]
- **Angka berbeda pada `grid4` (id vs ja):** id=[4, 4], ja=[4]
- **Angka berbeda pada `grid5` (id vs ja):** id=[5, 5], ja=[5]
- **Angka berbeda pada `grid6` (id vs ja):** id=[6, 6], ja=[6]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s1bold` (id vs ja):** id=[180], ja=[]
- **Angka berbeda pada `s1ingatText` (id vs ja):** id=[3, 180], ja=[]
- **Angka berbeda pada `s2bold` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2p1b` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2tipsText` (id vs ja):** id=[360], ja=[]
- **Angka berbeda pada `s3bold1` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s3bold2` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s4how3` (id vs ja):** id=[3], ja=[3, 180]
- **Angka berbeda pada `svgPolaLine1` (id vs ja):** id=[1, 2, 3, 2], ja=[2]
- **Angka berbeda pada `svgSegi4tri` (id vs ja):** id=[2, 180, 360], ja=[180, 360]
- **Angka berbeda pada `svgSegi6label` (id vs ja):** id=[6], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut/SifatSudutDuaGarisSejajarPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut/SifatSudutDuaGarisSejajarPage.tsx)

#### Peta 1: `uiMap` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `b4` (id vs ja):** id=[180], ja=[]
- **Angka berbeda pada `ex3cond` (id vs ja):** id=[180], ja=[]
- **Angka berbeda pada `intisariBold` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `intisariP` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s1notaAngles` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `s5property` (id vs ja):** id=[180], ja=[]
- **Angka berbeda pada `s5tipEnd` (id vs ja):** id=[180], ja=[]
- **Angka berbeda pada `sec2title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec3title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec4title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec5title` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut/SudutPelurusPenyikuBertolakPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-dan-sudut/SudutPelurusPenyikuBertolakPage.tsx)

#### Peta 1: `uiMap` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `ex2q` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex2q2` (id vs ja):** id=[1, 3], ja=[]
- **Angka berbeda pada `ex2supp` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `ex3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `proof1r` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `proof2r` (id vs ja):** id=[2, 3], ja=[]
- **Angka berbeda pada `proof3r` (id vs ja):** id=[1, 2, 2], ja=[1, 2]
- **Angka berbeda pada `s2p1` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s3defTxt` (id vs ja):** id=[180], ja=[]
- **Angka berbeda pada `s4defTxt` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `sec5` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `svgAngleDesc` (id vs ja):** id=[2], ja=[]


## Topik garis-singgung-lingkaran

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/GSPDPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/GSPDPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1_problem` (id vs ja):** id=[9, 6, 25], ja=[]
- **Angka berbeda pada `c2_problem` (id vs ja):** id=[26, 24], ja=[24]
- **Angka berbeda pada `c3_step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `tabel[].gspd` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `tabel[].gspl` (id vs ja):** id=[2], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/GSPLPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/GSPLPage.tsx)

#### Peta 1: `object@12` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1_problem` (id vs ja):** id=[10, 4, 17], ja=[]
- **Angka berbeda pada `c2_problem` (id vs ja):** id=[8, 3, 12], ja=[]
- **Angka berbeda pada `c3_problem2` (id vs ja):** id=[20, 16], ja=[]
- **Angka berbeda pada `intro_2gspl` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `syarat_1` (id vs ja):** id=[1], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/MenghitungPanjangPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/MenghitungPanjangPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1_problem` (id vs ja):** id=[5, 13], ja=[]
- **Angka berbeda pada `c2_problem` (id vs ja):** id=[25, 24], ja=[]
- **Angka berbeda pada `c3_problem` (id vs ja):** id=[10, 0, 2, 0, 6], ja=[10, 0, 2, 0]
- **Angka berbeda pada `c3_step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3_step3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/PengertianPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/PengertianPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1_ans` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `c1_problem` (id vs ja):** id=[5, 5], ja=[5]
- **Angka berbeda pada `c3_find` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `intro_tip` (id vs ja):** id=[0, 1, 2], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `sum1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `svg_pts0` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `svg_pts1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `svg_pts2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `svg_secant` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `svg_tangent` (id vs ja):** id=[1], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/SabukLilitanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/garis-singgung-lingkaran/SabukLilitanPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c2_step1` (id vs en):** id=[28, 2, 4, 28, 1, 2, 1, 2], en=[28, 2, 4, 28, 2]
- **Angka berbeda pada `c1_problem` (id vs ja):** id=[7, 30, 22, 7], ja=[22]
- **Angka berbeda pada `c2_problem` (id vs ja):** id=[14, 22, 7], ja=[22, 7]
- **Angka berbeda pada `c2_step1` (id vs ja):** id=[28, 2, 4, 28, 1, 2, 1, 2], ja=[28, 4, 28]
- **Angka berbeda pada `c2_step2` (id vs ja):** id=[4, 28], ja=[28]
- **Angka berbeda pada `c3_problem` (id vs ja):** id=[20, 8, 52, 2], ja=[2]
- **Angka berbeda pada `c3_step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `case1_desc` (id vs ja):** id=[2, 2, 1], ja=[]
- **Angka berbeda pada `case1_title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `case2_desc` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `case2_title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]


## Topik himpunan

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/DiagramVennPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/DiagramVennPage.tsx)

#### Peta 1: `translations` (baris 16)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s1contextDesc` (id vs ja):** id=[30, 8, 7, 5], ja=[]
- **Angka berbeda pada `s2e1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s2e1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2e1s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s2e2oddMember` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `s2e2p` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `s2e2primeMember` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `s2e2q2` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `s2e2q_set` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `s2e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s2e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2e2s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s2e3ans` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s2e3q` (id vs ja):** id=[25, 20, 12, 40], ja=[]
- **Angka berbeda pada `s2e3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s2e3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s3e2multOf4` (id vs ja):** id=[4, 1, 20], ja=[1]
- **Angka berbeda pada `s3e2multOf6` (id vs ja):** id=[6, 1, 20], ja=[1]
- **Angka berbeda pada `s3e2q2` (id vs ja):** id=[1, 20], ja=[20]
- **Angka berbeda pada `s3e3ans` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s3e3q` (id vs ja):** id=[40, 20, 18, 5], ja=[]
- **Angka berbeda pada `s3e3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s3e3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s4e2multOf3` (id vs ja):** id=[3, 1, 15], ja=[1]
- **Angka berbeda pada `s4e2multOf5` (id vs ja):** id=[5, 1, 15], ja=[1]
- **Angka berbeda pada `s5e1ans` (id vs ja):** id=[1, 10], ja=[]
- **Angka berbeda pada `s5e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s5e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s5e2s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sub1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sub2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sub3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sub4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `sub5` (id vs ja):** id=[5], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/JenisHimpunanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/JenisHimpunanPage.tsx)

#### Peta 1: `translations` (baris 17)
Bahasa: id, en, ja
- **Angka berbeda pada `s2e2qMembers` (id vs en):** id=[2, 3, 5, 7, 11, 13, 17, 19, 8], en=[2357111317.19, 8]
- **Angka berbeda pada `s3e1cRes` (id vs en):** id=[2, 4, 6], en=[24.6]
- **Angka berbeda pada `s3e1opts[]` (id vs en):** id=[2, 4, 6, 1, 2, 3, 4, 5, 6], en=[24.6, 12345.6]
- **Angka berbeda pada `s3e3q` (id vs en):** id=[1, 2, 3, 4], en=[123.4]
- **Angka berbeda pada `s4e1aAns` (id vs en):** id=[12.3, 10, 10], en=[1.2, 10, 10]
- **Angka berbeda pada `s4e1cAns` (id vs en):** id=[25, 14.9, 625], en=[25]
- **Angka berbeda pada `s4e1opts[]` (id vs en):** id=[1, 4, 9, 16, 25], en=[14916.25]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s1e1aReason` (id vs ja):** id=[5, 6], ja=[]
- **Angka berbeda pada `s1e1bReason` (id vs ja):** id=[100, 1, 2, 3, 99, 99], ja=[1, 2, 3, 99]
- **Angka berbeda pada `s1e2a` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s1e2b` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s1e2c` (id vs ja):** id=[10, 20, 11.12, 19, 9], ja=[11.12, 19]
- **Angka berbeda pada `s1e2d` (id vs ja):** id=[4, 2, 2, 2], ja=[2, 2]
- **Angka berbeda pada `s1e3b` (id vs ja):** id=[14, 16, 15, 3, 5], ja=[15, 3, 5]
- **Angka berbeda pada `s1rows[][]` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2e1a` (id vs ja):** id=[4, 4, 8, 12], ja=[4, 8, 12]
- **Angka berbeda pada `s2e1b` (id vs ja):** id=[-1000, 1000, 2001], ja=[]
- **Angka berbeda pada `s2e2pReason` (id vs ja):** id=[300], ja=[]
- **Angka berbeda pada `s2e2qMembers` (id vs ja):** id=[2, 3, 5, 7, 11, 13, 17, 19, 8], ja=[2357111317.19, 8]
- **Angka berbeda pada `s2e3katex` (id vs ja):** id=[3, 5], ja=[]
- **Angka berbeda pada `s2e3q` (id vs ja):** id=[3, 5, 5], ja=[]
- **Angka berbeda pada `s2e3reason` (id vs ja):** id=[3, 5], ja=[]
- **Angka berbeda pada `s2infOrFin[][]` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s3e1aRes` (id vs ja):** id=[4, 5], ja=[]
- **Angka berbeda pada `s3e1cRes` (id vs ja):** id=[2, 4, 6], ja=[2.4]
- **Angka berbeda pada `s3e1opts[]` (id vs ja):** id=[2, 4, 6, 1, 2, 3, 4, 5, 6], ja=[24.6, 12345.6]
- **Angka berbeda pada `s3e2hint` (id vs ja):** id=[3, 8], ja=[8]
- **Angka berbeda pada `s3e2noMem` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `s3e2oneMem` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s3e2threeMem` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s3e2total` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `s3e2twoMem` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s3e3cAns` (id vs ja):** id=[2, 4, 4.2, 4, 2, 2, 6], ja=[4.2, 4, 2, 2, 6]
- **Angka berbeda pada `s3e3opts[]` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s3e3q` (id vs ja):** id=[1, 2, 3, 4], ja=[123.4]
- **Angka berbeda pada `s4e1aAns` (id vs ja):** id=[12.3, 10, 10], ja=[1.2, 10]
- **Angka berbeda pada `s4e1cAns` (id vs ja):** id=[25, 14.9, 625], ja=[]
- **Angka berbeda pada `s4e1opts[]` (id vs ja):** id=[1, 4, 9, 16, 25], ja=[14916.25]
- **Angka berbeda pada `s4e2q` (id vs ja):** id=[1, 10], ja=[]
- **Angka berbeda pada `s4e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s4e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s4e2s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s4e3q` (id vs ja):** id=[30, 12, 8, 3], ja=[12, 8]
- **Angka berbeda pada `s5e1count` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `s5e1one` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s5e1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s5e1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s5e1two` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s5e2ans` (id vs ja):** id=[10, 2], ja=[]
- **Angka berbeda pada `s5e2pascal` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `s5e2q` (id vs ja):** id=[32, 2], ja=[32]
- **Angka berbeda pada `s5e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s5e2s2` (id vs ja):** id=[2, 2, 5], ja=[]
- **Angka berbeda pada `s5e3bText` (id vs ja):** id=[2, 3, 13.4], ja=[2, 13.4]
- **Angka berbeda pada `sub1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sub2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sub3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sub4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `sub5` (id vs ja):** id=[5], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/OperasiHimpunanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/OperasiHimpunanPage.tsx)

#### Peta 1: `translations` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `s3e2ans3` (id vs en):** id=[3, 5, 6, 9, 10, 12], en=[356910.12]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s1e1note` (id vs ja):** id=[3, 5, 7], ja=[3, 5]
- **Angka berbeda pada `s1e1q` (id vs ja):** id=[10, 10], ja=[]
- **Angka berbeda pada `s1e1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1e1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s1e2ans1` (id vs ja):** id=[25, 20, 12, 33], ja=[25, 20, 12]
- **Angka berbeda pada `s1e2ans2` (id vs ja):** id=[40, 33, 7], ja=[40, 33]
- **Angka berbeda pada `s1e2q` (id vs ja):** id=[40, 25, 20, 12], ja=[]
- **Angka berbeda pada `s1e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2e1note` (id vs ja):** id=[12, 3, 4], ja=[]
- **Angka berbeda pada `s2e1q` (id vs ja):** id=[3, 1, 20, 4, 1, 20], ja=[1, 1]
- **Angka berbeda pada `s2e1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s2e1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2e2ans2` (id vs ja):** id=[20, 18, 35, 3], ja=[20, 18, 35]
- **Angka berbeda pada `s2e2q` (id vs ja):** id=[40, 20, 18, 5], ja=[]
- **Angka berbeda pada `s2e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s2e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s3e2ans3` (id vs ja):** id=[3, 5, 6, 9, 10, 12], ja=[356910.12]
- **Angka berbeda pada `s3e2q` (id vs ja):** id=[1, 15, 3, 5], ja=[1, 15]
- **Angka berbeda pada `s3e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sub1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sub2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sub3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sub4` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/PemecahanMasalahHimpunanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/PemecahanMasalahHimpunanPage.tsx)

#### Peta 1: `translations` (baris 22)
Bahasa: id, en, ja
- **Angka berbeda pada `s2e3susun` (id vs en):** id=[3], en=[]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s1e1ans` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s1e1q` (id vs ja):** id=[25, 14, 11, 4], ja=[]
- **Angka berbeda pada `s1e2ans` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1e2q` (id vs ja):** id=[45, 20, 18, 8], ja=[]
- **Angka berbeda pada `s1e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s1e3ans` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `s1e3q` (id vs ja):** id=[60, 32, 27, 25, 15, 12, 10, 5], ja=[]
- **Angka berbeda pada `s2e1ans` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s2e1q` (id vs ja):** id=[35, 20, 18, 7, 4], ja=[]
- **Angka berbeda pada `s2e1title` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s2e2q` (id vs ja):** id=[50, 30, 22, 6], ja=[]
- **Angka berbeda pada `s2e3ans` (id vs ja):** id=[14], ja=[]
- **Angka berbeda pada `s2e3q` (id vs ja):** id=[80, 45, 38, 30, 20, 15, 12], ja=[]
- **Angka berbeda pada `s2e3susun` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s2p2` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s3e1ans` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `s3e1q` (id vs ja):** id=[30, 12, 10, 1], ja=[]
- **Angka berbeda pada `s3e3ans` (id vs ja):** id=[60], ja=[]
- **Angka berbeda pada `s3e3formula` (id vs ja):** id=[1, 2, 3], ja=[]
- **Angka berbeda pada `s3e3q` (id vs ja):** id=[100, 60, 50, 40, 30, 10], ja=[60, 50, 40]
- **Angka berbeda pada `s3e3tip_desc` (id vs ja):** id=[1, 2, 2, 3, 3, 60, 50, 40, 2, 30, 3, 10, 150, 60, 30, 60], ja=[2, 3, 60, 50, 40, 2, 30, 3, 10, 150, 60, 30, 60]
- **Angka berbeda pada `s3tips[].no` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `sub1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sub2` (id vs ja):** id=[2], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/PengertianKeanggotaanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/himpunan/PengertianKeanggotaanPage.tsx)

#### Peta 1: `translations` (baris 14)
Bahasa: id, en, ja
- **Panjang array `s4e3opts` berbeda:** id=3, en=3, ja=4
- **Angka berbeda pada `introFactEnd` (id vs en):** id=[1870], en=[]
- **Angka berbeda pada `s3e1b` (id vs en):** id=[3], en=[]
- **Angka berbeda pada `s3notSameNote` (id vs en):** id=[3], en=[]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `introFactEnd` (id vs ja):** id=[1870], ja=[]
- **Angka berbeda pada `s1e1aYesText` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `s1e1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1e2a` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s1e2b` (id vs ja):** id=[7, 7], ja=[]
- **Angka berbeda pada `s1e2c` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `s1e2d` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s1e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1e2s1text3` (id vs ja):** id=[2, 10], ja=[]
- **Angka berbeda pada `s1e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s1e3nA` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `s1e3nB` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s1e3q` (id vs ja):** id=[30], ja=[]
- **Angka berbeda pada `s1e3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1e3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s1e3s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s2e1bDesc` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `s2e1bTitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `s2e1opts[]` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `s2e2count` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `s2e2pattern` (id vs ja):** id=[3, 3, 15], ja=[]
- **Angka berbeda pada `s2e2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s2e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2e2s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s2e2wordsText` (id vs ja):** id=[3, 15], ja=[]
- **Angka berbeda pada `s2e3ansNote` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2e3between` (id vs ja):** id=[10, 20, 11, 12, 13, 14, 15, 16, 17, 18, 19], ja=[11, 12, 13, 14, 15, 16, 17, 18, 19]
- **Angka berbeda pada `s2e3primeNote` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s2e3q3` (id vs ja):** id=[1, 20], ja=[]
- **Angka berbeda pada `s2e3q5` (id vs ja):** id=[10, 20, 10, 20], ja=[]
- **Angka berbeda pada `s2e3s1` (id vs ja):** id=[1, 1, 20], ja=[]
- **Angka berbeda pada `s2e3s2` (id vs ja):** id=[2, 10, 20], ja=[]
- **Angka berbeda pada `s2e3s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s2way1exText` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `s3e1b` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s3e2q2` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `s3e2s1` (id vs ja):** id=[1, 12], ja=[]
- **Angka berbeda pada `s3e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s3e3q2` (id vs ja):** id=[30], ja=[]
- **Angka berbeda pada `s3e3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s3e3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s3notSameNote` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s4e1a` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `s4e1c` (id vs ja):** id=[5, 6], ja=[]
- **Angka berbeda pada `s4e1opts[]` (id vs ja):** id=[5, 6], ja=[]
- **Angka berbeda pada `s4e2between` (id vs ja):** id=[10, 22, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], ja=[11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
- **Angka berbeda pada `s4e2q2` (id vs ja):** id=[10, 22], ja=[]
- **Angka berbeda pada `s4e2s1` (id vs ja):** id=[1, 10, 22], ja=[]
- **Angka berbeda pada `s4e2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s4e3bText` (id vs ja):** id=[7, 7, 14, 21], ja=[7, 14, 21]
- **Angka berbeda pada `s4e3bTitle` (id vs ja):** id=[7, 0], ja=[]
- **Angka berbeda pada `s4e3cTitle` (id vs ja):** id=[1, 50], ja=[]
- **Angka berbeda pada `s4e3opts[]` (id vs ja):** id=[1, 50], ja=[]
- **Angka berbeda pada `s4emptyWarnText` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `sub1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sub2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sub3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sub4` (id vs ja):** id=[4], ja=[]


## Topik kesebangunan-kekongruenan

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/kesebangunan-kekongruenan/KekongruenBangunDatarPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/kesebangunan-kekongruenan/KekongruenBangunDatarPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `k3_s3_adj_angles` (id vs en):** id=[], en=[180]
- **Angka berbeda pada `c1_answer` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c1_title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2_title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3_title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `conc_l1b` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `conc_l2k` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `fig1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `fig10` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `fig11` (id vs ja):** id=[11], ja=[]
- **Angka berbeda pada `fig12` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `fig13` (id vs ja):** id=[13, 90], ja=[90]
- **Angka berbeda pada `fig14` (id vs ja):** id=[14, 12, 5], ja=[12]
- **Angka berbeda pada `fig2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `fig3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `fig4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `fig5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `fig6` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `fig7` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `fig8` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `fig9` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `k2_p1c` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `k3_s1_note` (id vs ja):** id=[90, 1], ja=[]
- **Angka berbeda pada `k3_s2_note` (id vs ja):** id=[90, 2], ja=[]
- **Angka berbeda pada `k3_s3_adj_angles` (id vs ja):** id=[], ja=[180]
- **Angka berbeda pada `k3_s7_note` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `pageSub` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `rang_r1e` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `rang_r2e` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `rang_r3e` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `rang_r4e` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `rang_r4v` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `rang_r6e` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_bangunLain` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec_konsep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_konsep2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `tbl2_aar_e` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `tbl2_aar_s` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `tbl2_ara_e` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `tbl2_ara_s` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `tbl2_rar_e` (id vs ja):** id=[2, 1], ja=[]
- **Angka berbeda pada `tbl2_rar_s` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `tbl2_rrr_e` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tbl2_rrr_s` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tbl3_r2v` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `tbl3_r4v` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `tbl3_r6v` (id vs ja):** id=[1], ja=[]


## Topik koordinat-cartesius

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/JarakTitikGarisPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/JarakTitikGarisPage.tsx)

#### Peta 1: `translations` (baris 16)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `ex1Header` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex1ansUnit` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `ex2Header` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex2ansA` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `ex2ansUnit2` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex3Header` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex3ans` (id vs ja):** id=[5, 0], ja=[5]
- **Angka berbeda pada `ex3ansUnit` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `infografisCaption` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `pt1Header` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `pt2Header` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `r4judul` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `rangFormulas[].judul` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `rumusLabel2` (id vs ja):** id=[0], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/PosisiRelatifGarisPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/PosisiRelatifGarisPage.tsx)

#### Peta 1: `translations` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `ex1Header` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2Header` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3Header` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex3ans` (id vs ja):** id=[], ja=[6, 0]
- **Angka berbeda pada `ex3ansSuffix` (id vs ja):** id=[6, 0], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/PosisiRelatifTitikAcuanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/PosisiRelatifTitikAcuanPage.tsx)

#### Peta 1: `translations` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `ex1Header` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex1ans` (id vs ja):** id=[4, 4, 4, 4], ja=[4, 4]
- **Angka berbeda pada `ex1dirR` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex2Header` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3Header` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `introBody` (id vs ja):** id=[3, 5], ja=[]
- **Angka berbeda pada `introFactBody` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `kesimpulan` (id vs ja):** id=[200], ja=[]
- **Angka berbeda pada `pArah` (id vs ja):** id=[3, 3], ja=[]
- **Angka berbeda pada `pArahLabel` (id vs ja):** id=[3, 3], ja=[]
- **Angka berbeda pada `qArah` (id vs ja):** id=[2, 3], ja=[]
- **Angka berbeda pada `qArahLabel` (id vs ja):** id=[2, 3], ja=[]
- **Angka berbeda pada `step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `tip4` (id vs ja):** id=[5.3, 2.1, 3, 3, 2, 2], ja=[5.3, 2.1, 3, 2]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/PosisiRelatifTitikDanGarisPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/PosisiRelatifTitikDanGarisPage.tsx)

#### Peta 1: `T` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `ex1aAns` (id vs ja):** id=[4, 4, 4, 4], ja=[4, 4]
- **Angka berbeda pada `ex1aDesc1` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex1aHeader` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex1bHeader` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2aHeader` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex2bHeader` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3aHeader` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex3aStep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex3aStep2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3bAns` (id vs ja):** id=[], ja=[6, 0]
- **Angka berbeda pada `ex3bAnsSuffix` (id vs ja):** id=[6, 0], ja=[]
- **Angka berbeda pada `ex3bHeader` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `intro1Body` (id vs ja):** id=[3, 5], ja=[]
- **Angka berbeda pada `intro1FactBody` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `part1Header` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `part2Header` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `rang2ProseLabel` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `rumusLabel2` (id vs ja):** id=[0], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/UnsurUnsurCartesiusPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/koordinat-cartesius/UnsurUnsurCartesiusPage.tsx)

#### Peta 1: `translations` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `ex1Header` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2Header` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex2q2` (id vs ja):** id=[], ja=[0, 0]
- **Angka berbeda pada `ex2q4` (id vs ja):** id=[0, 0], ja=[]
- **Angka berbeda pada `ex3Header` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `kuadranEmph` (id vs ja):** id=[4], ja=[]


## Topik lingkaran

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/BusurJuringPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/BusurJuringPage.tsx)

#### Peta 1: `object@14` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `anim1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `anim2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c1Q` (id vs ja):** id=[21, 120, 22, 7], ja=[22, 7]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[33, 63, 22, 7], ja=[22, 7]
- **Angka berbeda pada `c2Step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2Step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[10, 60, 3.14], ja=[3.14]
- **Angka berbeda pada `c3Step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3Step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Step2Note` (id vs ja):** id=[60, 10, 60], ja=[60, 10]
- **Angka berbeda pada `c3Step3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `perbContohQ` (id vs ja):** id=[60, 33, 45], ja=[60, 45]
- **Angka berbeda pada `perbKapanItems[]` (id vs ja):** id=[360], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/KaitanBangunDatarLainnyaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/KaitanBangunDatarLainnyaPage.tsx)

#### Peta 1: `object@13` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `badge` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `k10Soal` (id vs ja):** id=[14], ja=[]
- **Angka berbeda pada `k10Title` (id vs ja):** id=[10, 22, 7], ja=[22, 7]
- **Angka berbeda pada `k10bV` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `k11Title` (id vs ja):** id=[11, 14, 7, 22, 7], ja=[14, 7, 22, 7]
- **Angka berbeda pada `k12LQ` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `k12Soal` (id vs ja):** id=[14, 7], ja=[14]
- **Angka berbeda pada `k12Title` (id vs ja):** id=[12, 22, 7], ja=[22, 7]
- **Angka berbeda pada `k13Soal` (id vs ja):** id=[26, 14], ja=[]
- **Angka berbeda pada `k13Title` (id vs ja):** id=[13, 22, 7], ja=[22, 7]
- **Angka berbeda pada `k14Title` (id vs ja):** id=[14, 7, 22, 7], ja=[7, 22, 7]
- **Angka berbeda pada `k15Note2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `k15Note3` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `k15Note4` (id vs ja):** id=[14, 1, 28], ja=[14, 28]
- **Angka berbeda pada `k15Result` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `k15Soal` (id vs ja):** id=[14, 14, 4], ja=[14, 14]
- **Angka berbeda pada `k15Title` (id vs ja):** id=[15, 4, 14, 22, 7], ja=[14, 22, 7]
- **Angka berbeda pada `k1Title` (id vs ja):** id=[1, 22, 7], ja=[22, 7]
- **Angka berbeda pada `k2Title` (id vs ja):** id=[2, 28, 14, 22, 7], ja=[22, 7]
- **Angka berbeda pada `k3Soal` (id vs ja):** id=[20, 10], ja=[]
- **Angka berbeda pada `k3Title` (id vs ja):** id=[3, 3.14], ja=[3.14]
- **Angka berbeda pada `k3bNote` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `k4Soal` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `k4Title` (id vs ja):** id=[4, 10, 3.14], ja=[10, 3.14]
- **Angka berbeda pada `k5Soal` (id vs ja):** id=[14, 14, 4], ja=[14, 14]
- **Angka berbeda pada `k5Title` (id vs ja):** id=[5, 4, 14, 22, 7], ja=[14, 22, 7]
- **Angka berbeda pada `k6Title` (id vs ja):** id=[6, 2, 22, 7], ja=[22, 7]
- **Angka berbeda pada `k6bNote` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `k7KnownV` (id vs ja):** id=[10, 90], ja=[10, 90, 1]
- **Angka berbeda pada `k7Soal` (id vs ja):** id=[10, 90], ja=[]
- **Angka berbeda pada `k7Title` (id vs ja):** id=[7, 10, 3.14], ja=[1, 10, 3.14]
- **Angka berbeda pada `k8Title` (id vs ja):** id=[8, 3.14], ja=[3.14]
- **Angka berbeda pada `k9Soal` (id vs ja):** id=[28, 42, 14, 14], ja=[]
- **Angka berbeda pada `k9Title` (id vs ja):** id=[9, 22, 7], ja=[22, 7]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/KaitanBangunDatarPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/KaitanBangunDatarPage.tsx)

#### Peta 1: `object@13` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `badge` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c1s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c1s4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2s2` (id vs ja):** id=[2], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/KelilingLuasPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/KelilingLuasPage.tsx)

#### Peta 1: `object@14` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `piB2` (id vs ja):** id=[22, 7, 7], ja=[22, 7]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/PenerapanKontekstualPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/PenerapanKontekstualPage.tsx)

#### Peta 1: `object@13` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Q` (id vs ja):** id=[56, 500, 22, 7], ja=[22, 7]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c1s2T` (id vs ja):** id=[500], ja=[]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[28, 3.5, 0, 22, 7], ja=[3.5, 0, 22, 7]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c2s4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `c2s5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[10, 8, 2, 3.14], ja=[3.14]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3s4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `heroTrail` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `svgBanPerfect` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `svgBanTitle` (id vs ja):** id=[1, 1], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/SudutPusatKelilingPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/SudutPusatKelilingPage.tsx)

#### Peta 1: `object@16` (baris 16)
Bahasa: id, en, ja
- **Angka berbeda pada `anim1Desc` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `anim1Title` (id vs ja):** id=[1, 2], ja=[2]
- **Angka berbeda pada `anim2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2P` (id vs ja):** id=[35, 35, 3], ja=[35, 35]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Cyclic` (id vs ja):** id=[180], ja=[]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `introP` (id vs ja):** id=[360], ja=[]
- **Angka berbeda pada `rT3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `svgDiameterAria` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `t1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `t2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `t3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tips` (id vs ja):** id=[90], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/UnsurUnsurPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/lingkaran/UnsurUnsurPage.tsx)

#### Peta 1: `object@14` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `apo_keyFact` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `busur_desc` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `diam_desc` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `diam_keyFact` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `introP1` (id vs ja):** id=[], ja=[1]
- **Angka berbeda pada `jari_desc` (id vs ja):** id=[], ja=[1]
- **Angka berbeda pada `jari_keyFact` (id vs ja):** id=[], ja=[1]
- **Angka berbeda pada `juring_caption` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `juring_desc` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `tali_desc` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `temb_desc` (id vs ja):** id=[], ja=[2]


## Topik peluang

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/peluang/FrekuensiHarapanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/peluang/FrekuensiHarapanPage.tsx)

#### Peta 1: `object@18` (baris 18)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@19` (baris 19)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@20` (baris 20)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `kali` (baris 26)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `object@28` (baris 28)
Bahasa: id, en, ja
- **Angka berbeda pada `ctx` (id vs ja):** id=[9], ja=[]

#### Peta 6: `object@58` (baris 58)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `object@79` (baris 79)
Bahasa: id, en, ja
- **Angka berbeda pada `p1` (id vs ja):** id=[120, 6, 0, 1], ja=[0]

#### Peta 8: `object@115` (baris 115)
Bahasa: id, en, ja
- **Angka berbeda pada `ilustrasi` (id vs ja):** id=[60], ja=[]
- **Angka berbeda pada `penjelasanIlustrasi` (id vs ja):** id=[10, 60], ja=[]

#### Peta 9: `object@160` (baris 160)
Bahasa: id, en, ja
- **Angka berbeda pada `s1kunci` (id vs ja):** id=[40, 80], ja=[]
- **Angka berbeda pada `s1q` (id vs ja):** id=[80], ja=[]
- **Angka berbeda pada `s1step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2b` (id vs ja):** id=[4, 1, 2, 3, 3], ja=[1, 2, 3, 3]
- **Angka berbeda pada `s2q` (id vs ja):** id=[150, 4], ja=[]
- **Angka berbeda pada `s3c` (id vs ja):** id=[5, 3, 8], ja=[5, 3]
- **Angka berbeda pada `s3jumlah` (id vs ja):** id=[5, 3, 2], ja=[]
- **Angka berbeda pada `s3q` (id vs ja):** id=[5, 3, 2, 300], ja=[]

#### Peta 10: `object@220` (baris 220)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 11: `object@244` (baris 244)
Bahasa: id, en, ja
- **Angka berbeda pada `ringkasan[].isi` (id vs ja):** id=[1000, 0.02, 20, 500], ja=[0.02]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/peluang/KomplementPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/peluang/KomplementPage.tsx)

#### Peta 1: `object@18` (baris 18)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@19` (baris 19)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@20` (baris 20)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `kali` (baris 26)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `object@28` (baris 28)
Bahasa: id, en, ja
- **Angka berbeda pada `ctx` (id vs ja):** id=[9], ja=[]

#### Peta 6: `object@55` (baris 55)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `object@76` (baris 76)
Bahasa: id, en, ja
- **Angka berbeda pada `p1` (id vs ja):** id=[6, 6, 6, 6], ja=[]

#### Peta 8: `object@127` (baris 127)
Bahasa: id, en, ja
- **Angka berbeda pada `ringkasanText` (id vs ja):** id=[1], ja=[]

#### Peta 9: `object@184` (baris 184)
Bahasa: id, en, ja
- **Angka berbeda pada `s2aCara1` (id vs ja):** id=[1, 5, 3, 8], ja=[5, 3, 8]
- **Angka berbeda pada `s2aCara2` (id vs ja):** id=[2, 4, 12, 1, 3], ja=[4, 12, 1, 3]
- **Angka berbeda pada `s2jumlah` (id vs ja):** id=[4, 5, 3], ja=[]
- **Angka berbeda pada `s2q` (id vs ja):** id=[4, 5, 3], ja=[]
- **Angka berbeda pada `s3q` (id vs ja):** id=[12, 360, 12], ja=[]
- **Angka berbeda pada `s3step1` (id vs ja):** id=[1, 12], ja=[12]
- **Angka berbeda pada `s3step1sub` (id vs ja):** id=[12, 6.6, 1], ja=[6.6]
- **Angka berbeda pada `s3step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s3step3` (id vs ja):** id=[3, 12, 360], ja=[]

#### Peta 10: `object@259` (baris 259)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 11: `object@283` (baris 283)
Bahasa: id, en, ja
- **Angka berbeda pada `tips[].teks` (id vs ja):** id=[0.3, 0.7, 3, 8, 5, 8, 1], ja=[0, 0.7, 3, 5, 8]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/peluang/PeluangEmpirikPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/peluang/PeluangEmpirikPage.tsx)

#### Peta 1: `object@28` (baris 28)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `intisariText` (id vs ja):** id=[0, 1], ja=[]
- **Angka berbeda pada `introBody` (id vs ja):** id=[100], ja=[]
- **Angka berbeda pada `prop1` (id vs ja):** id=[0, 1], ja=[]
- **Angka berbeda pada `rp3` (id vs ja):** id=[0, 1, 0, 1], ja=[0, 1]
- **Angka berbeda pada `s1d2` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s1key` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s1q` (id vs ja):** id=[50, 4, 8, 4], ja=[]
- **Angka berbeda pada `s2q` (id vs ja):** id=[200, 94, 106, 1], ja=[]
- **Angka berbeda pada `s2tip` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s3c` (id vs ja):** id=[5000], ja=[5]
- **Angka berbeda pada `s3q` (id vs ja):** id=[1200, 36, 5000], ja=[]
- **Angka berbeda pada `tableTip` (id vs ja):** id=[0.5, 0.575, 0.5], ja=[0, 0]
- **Angka berbeda pada `tableTitle` (id vs ja):** id=[40], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/peluang/PeluangTeoretikPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/peluang/PeluangTeoretikPage.tsx)

#### Peta 1: `object@27` (baris 27)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `defCards[].desc` (id vs ja):** id=[0, 1], ja=[]
- **Angka berbeda pada `intro` (id vs ja):** id=[3, 1, 6], ja=[1, 6]
- **Angka berbeda pada `s1step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s1step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s1step3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s2a` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s2b` (id vs ja):** id=[26], ja=[]
- **Angka berbeda pada `s2c` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2q` (id vs ja):** id=[52], ja=[]
- **Angka berbeda pada `s3aPairs` (id vs ja):** id=[1.6, 2.5, 3.4, 4.3, 5.2, 6.1, 6], ja=[1.6, 2.5, 3.4, 4.3, 5.2, 6.1]
- **Angka berbeda pada `s3bPairs` (id vs ja):** id=[1.3, 2.4, 3.5, 4.6, 3.1, 4.2, 5.3, 6.4, 8], ja=[1.3, 2.4, 3.5, 4.6, 3.1, 4.2, 5.3, 6.4]
- **Angka berbeda pada `s3cRows[]` (id vs ja):** id=[1, 2, 4, 6, 2, 15], ja=[1, 2, 4, 6, 2]
- **Angka berbeda pada `s3q` (id vs ja):** id=[7, 2], ja=[]


## Topik perbandingan

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganBertingkatPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganBertingkatPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Check` (id vs en):** id=[40000, 60000, 80000, 180000], en=[40, 60, 80, 180]
- **Angka berbeda pada `c1Math1` (id vs en):** id=[1, 180000, 9, 0], en=[1, 180, 9, 20]
- **Angka berbeda pada `c1Math2` (id vs en):** id=[2, 20000, 0], en=[2, 20, 40]
- **Angka berbeda pada `c1Math3` (id vs en):** id=[3, 20000, 0], en=[3, 20, 60]
- **Angka berbeda pada `c1Math4` (id vs en):** id=[4, 20000, 0], en=[4, 20, 80]
- **Angka berbeda pada `c1Q` (id vs en):** id=[2, 3, 3, 4, 0], en=[2, 3, 3, 4, 180]
- **Angka berbeda pada `c3Check` (id vs en):** id=[350000, 315000, 35000], en=[350, 315, 35]
- **Angka berbeda pada `c3Math1` (id vs en):** id=[1, 0], en=[1, 35]
- **Angka berbeda pada `c3Math2` (id vs en):** id=[9, 35000, 0], en=[9, 35, 315]
- **Angka berbeda pada `c3Math3` (id vs en):** id=[12, 35000, 0], en=[12, 35, 420]
- **Angka berbeda pada `c3Math4` (id vs en):** id=[10, 35000, 0], en=[10, 35, 350]
- **Angka berbeda pada `c3Math5` (id vs en):** id=[9, 12, 10, 35000, 31, 35000, 85000], en=[9, 12, 10, 35, 31, 35, 1, 85]
- **Angka berbeda pada `c3Q` (id vs en):** id=[3, 4, 6, 5, 0], en=[3, 4, 6, 5, 35]
- **Angka berbeda pada `c3S3` (id vs en):** id=[10, 9, 1, 0], en=[10, 9, 1, 35]
- **Angka berbeda pada `c1Check` (id vs ja):** id=[40000, 60000, 80000, 180000], ja=[40, 60, 80, 180]
- **Angka berbeda pada `c1Math1` (id vs ja):** id=[1, 180000, 9, 0], ja=[1, 180, 9, 20]
- **Angka berbeda pada `c1Math2` (id vs ja):** id=[2, 20000, 0], ja=[2, 20, 40]
- **Angka berbeda pada `c1Math3` (id vs ja):** id=[3, 20000, 0], ja=[3, 20, 60]
- **Angka berbeda pada `c1Math4` (id vs ja):** id=[4, 20000, 0], ja=[4, 20, 80]
- **Angka berbeda pada `c1Q` (id vs ja):** id=[2, 3, 3, 4, 0], ja=[2, 3, 3, 4]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2Note1` (id vs ja):** id=[3, 4, 4], ja=[3, 4]
- **Angka berbeda pada `c2Note2` (id vs ja):** id=[2, 5, 2, 4], ja=[2, 5]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[3, 4, 2, 5, 14], ja=[3, 4, 2, 5]
- **Angka berbeda pada `c2Result` (id vs ja):** id=[8, 6, 20, 14], ja=[6, 20, 14]
- **Angka berbeda pada `c2S4` (id vs ja):** id=[10, 3, 7, 14], ja=[10, 3, 7]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Check` (id vs ja):** id=[350000, 315000, 35000], ja=[350, 315, 35]
- **Angka berbeda pada `c3Math1` (id vs ja):** id=[1, 0], ja=[1, 35]
- **Angka berbeda pada `c3Math2` (id vs ja):** id=[9, 35000, 0], ja=[9, 35, 315]
- **Angka berbeda pada `c3Math3` (id vs ja):** id=[12, 35000, 0], ja=[12, 35, 420]
- **Angka berbeda pada `c3Math4` (id vs ja):** id=[10, 35000, 0], ja=[10, 35, 350]
- **Angka berbeda pada `c3Math5` (id vs ja):** id=[9, 12, 10, 35000, 31, 35000, 85000], ja=[9, 12, 10, 35, 31, 35, 1, 85]
- **Angka berbeda pada `c3Note1` (id vs ja):** id=[3, 4, 3, 9, 12], ja=[3, 4, 9, 12]
- **Angka berbeda pada `c3Note2` (id vs ja):** id=[6, 5, 2, 12, 10], ja=[6, 5, 12, 10]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[3, 4, 6, 5, 0], ja=[3, 4, 6, 5]
- **Angka berbeda pada `c3S2` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `c3S3` (id vs ja):** id=[10, 9, 1, 0], ja=[10, 9, 1, 35]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganCampuranPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganCampuranPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Q` (id vs ja):** id=[4, 48, 6, 6, 9], ja=[]
- **Angka berbeda pada `c1Result` (id vs ja):** id=[108], ja=[]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[8, 120, 10, 300, 15], ja=[]
- **Angka berbeda pada `c2Result` (id vs ja):** id=[14, 13.3, 14], ja=[]
- **Angka berbeda pada `c2Round` (id vs ja):** id=[13, 13.3, 14], ja=[13.3, 14]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Analysis` (id vs ja):** id=[12, 9, 360, 480, 5, 9], ja=[12, 360]
- **Angka berbeda pada `c3Note` (id vs ja):** id=[12, 3, 9], ja=[12, 3]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[12, 360, 5, 3, 480], ja=[]
- **Angka berbeda pada `c3Result` (id vs ja):** id=[9, 480], ja=[]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganSenilaiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganSenilaiPage.tsx)

#### Peta 1: `translations` (baris 166)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Math1` (id vs en):** id=[5, 8, 20000], en=[5, 8, 20]
- **Angka berbeda pada `c1Math2` (id vs en):** id=[160000, 32000], en=[160, 32]
- **Angka berbeda pada `c1Q` (id vs en):** id=[5, 0, 8], en=[5, 20, 8]
- **Angka berbeda pada `c1R1c2` (id vs en):** id=[0], en=[20]
- **Angka berbeda pada `c1Result` (id vs en):** id=[8, 0], en=[8, 32]
- **Angka berbeda pada `c1Math1` (id vs ja):** id=[5, 8, 20000], ja=[5, 8, 20]
- **Angka berbeda pada `c1Math2` (id vs ja):** id=[160000, 32000], ja=[160, 32]
- **Angka berbeda pada `c1Q` (id vs ja):** id=[5, 0, 8], ja=[]
- **Angka berbeda pada `c1R1c1` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `c1R1c2` (id vs ja):** id=[0], ja=[20]
- **Angka berbeda pada `c1R2c1` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c1Result` (id vs ja):** id=[8, 0], ja=[32]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[20, 18, 10], ja=[]
- **Angka berbeda pada `c2R1c1` (id vs ja):** id=[20], ja=[]
- **Angka berbeda pada `c2R1c2` (id vs ja):** id=[18], ja=[]
- **Angka berbeda pada `c2R2c1` (id vs ja):** id=[30], ja=[]
- **Angka berbeda pada `c2Result` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Method3` (id vs ja):** id=[20, 18, 15], ja=[]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[30, 20, 12, 3], ja=[]
- **Angka berbeda pada `c3R1c1` (id vs ja):** id=[20], ja=[]
- **Angka berbeda pada `c3R1c2` (id vs ja):** id=[18], ja=[]
- **Angka berbeda pada `c3R2c2` (id vs ja):** id=[15], ja=[]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `kasusExQ` (id vs ja):** id=[20, 15, 8, 4], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganUmumPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/PerbandinganUmumPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `c1BMath` (id vs en):** id=[0, 3, 0], en=[15, 3, 5]
- **Angka berbeda pada `c1BResult` (id vs en):** id=[1, 0], en=[1, 5]
- **Angka berbeda pada `c1CMath` (id vs en):** id=[12, 0, 0], en=[12, 5, 60]
- **Angka berbeda pada `c1CResult` (id vs en):** id=[0], en=[60]
- **Angka berbeda pada `c1Q` (id vs en):** id=[12, 8, 3, 0, 1], en=[12, 8, 3, 15, 1]
- **Angka berbeda pada `c3DafaM2Math` (id vs en):** id=[3, 2, 24000, 0], en=[3, 2, 24, 36]
- **Angka berbeda pada `c3DafaMath` (id vs en):** id=[3, 12000, 0], en=[3, 12, 36]
- **Angka berbeda pada `c3Q` (id vs en):** id=[3, 5, 0], en=[3, 5, 24]
- **Angka berbeda pada `c3RaniM2Math` (id vs en):** id=[5, 2, 24000, 0], en=[5, 2, 24, 60]
- **Angka berbeda pada `c3RaniMath` (id vs en):** id=[5, 12000, 0], en=[5, 12, 60]
- **Angka berbeda pada `c3TotalM2Math` (id vs en):** id=[8, 2, 24000, 0], en=[8, 2, 24, 96]
- **Angka berbeda pada `c3TotalMath` (id vs en):** id=[36000, 60000, 0], en=[36, 60, 96]
- **Angka berbeda pada `c3VarEq` (id vs en):** id=[24000], en=[24]
- **Angka berbeda pada `c3VarSolve` (id vs en):** id=[24000, 12000], en=[24, 12]
- **Angka berbeda pada `sederS1` (id vs en):** id=[3], en=[]
- **Angka berbeda pada `c1BMath` (id vs ja):** id=[0, 3, 0], ja=[15, 3, 5]
- **Angka berbeda pada `c1BResult` (id vs ja):** id=[1, 0], ja=[5]
- **Angka berbeda pada `c1Ba` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c1CMath` (id vs ja):** id=[12, 0, 0], ja=[12, 5, 60]
- **Angka berbeda pada `c1CResult` (id vs ja):** id=[0], ja=[60]
- **Angka berbeda pada `c1Ca` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `c1Q` (id vs ja):** id=[12, 8, 3, 0, 1], ja=[]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2Check` (id vs ja):** id=[12, 16, 20, 48], ja=[12, 16, 20]
- **Angka berbeda pada `c2Math1` (id vs ja):** id=[1, 3, 12, 48, 12], ja=[3, 12, 48, 12]
- **Angka berbeda pada `c2Math2` (id vs ja):** id=[2, 4, 12, 48, 16], ja=[4, 12, 48, 16]
- **Angka berbeda pada `c2Math3` (id vs ja):** id=[3, 5, 12, 48, 20], ja=[5, 12, 48, 20]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[3, 4, 5, 48], ja=[3, 4, 5]
- **Angka berbeda pada `c2Result` (id vs ja):** id=[12, 16, 20], ja=[]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Cara1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3Cara2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3DafaM2Math` (id vs ja):** id=[3, 2, 24000, 0], ja=[3, 2, 24, 36]
- **Angka berbeda pada `c3DafaMath` (id vs ja):** id=[3, 12000, 0], ja=[3, 12, 36]
- **Angka berbeda pada `c3Method2Same` (id vs ja):** id=[2, 1], ja=[]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[3, 5, 0], ja=[3, 5]
- **Angka berbeda pada `c3RaniM2Math` (id vs ja):** id=[5, 2, 24000, 0], ja=[5, 2, 24, 60]
- **Angka berbeda pada `c3RaniMath` (id vs ja):** id=[5, 12000, 0], ja=[5, 12, 60]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3TotalM2Math` (id vs ja):** id=[8, 2, 24000, 0], ja=[8, 2, 24, 96]
- **Angka berbeda pada `c3TotalMath` (id vs ja):** id=[36000, 60000, 0], ja=[36, 60, 96]
- **Angka berbeda pada `c3VarEq` (id vs ja):** id=[24000], ja=[24]
- **Angka berbeda pada `c3VarSolve` (id vs ja):** id=[24000, 12000], ja=[24, 12]
- **Angka berbeda pada `ex1` (id vs ja):** id=[5, 8], ja=[]
- **Angka berbeda pada `ex2` (id vs ja):** id=[12, 8], ja=[]
- **Angka berbeda pada `ex2Note` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ex3` (id vs ja):** id=[35, 7], ja=[]
- **Angka berbeda pada `ex3Note` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `introCard1Body` (id vs ja):** id=[4, 6, 4, 6, 2, 3], ja=[4, 6, 2, 3]
- **Angka berbeda pada `sederBody` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sederS1` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/SkalaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/perbandingan/SkalaPage.tsx)

#### Peta 1: `translations` (baris 11)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Q` (id vs ja):** id=[1, 2000000, 4.5], ja=[2000]
- **Angka berbeda pada `c1Result` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `c1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[15, 3, 24], ja=[]
- **Angka berbeda pada `c2ResultB` (id vs ja):** id=[4.8], ja=[4]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2UbahA` (id vs ja):** id=[15, 15, 100000, 1500000], ja=[15, 100, 1500]
- **Angka berbeda pada `c2UbahB` (id vs ja):** id=[24, 2400000], ja=[2400]
- **Angka berbeda pada `c3NoteA` (id vs ja):** id=[1, 1000, 1, 1, 1, 1000000], ja=[1, 1, 1, 1, 1000000]
- **Angka berbeda pada `c3NoteB` (id vs ja):** id=[800, 800, 10000, 8000000], ja=[800, 10000, 8000]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[1, 1000, 12, 800], ja=[1]
- **Angka berbeda pada `c3ResultA` (id vs ja):** id=[1200], ja=[1]
- **Angka berbeda pada `c3ResultB` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `luasExQ` (id vs ja):** id=[1, 500, 6], ja=[]
- **Angka berbeda pada `readNote` (id vs ja):** id=[1, 500000, 1, 500000, 5], ja=[1, 500000]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]


## Topik persamaan-garis-lurus

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/AplikasiKontekstualPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/AplikasiKontekstualPage.tsx)

#### Peta 1: `object@49` (baris 49)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `sh_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sh_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sh_contoh3` (id vs ja):** id=[3], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/GradienPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/GradienPage.tsx)

#### Peta 1: `T_GRADIEN` (baris 15)
Bahasa: id, en, ja
- **Angka berbeda pada `c2_p1` (id vs en):** id=[2], en=[]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c2_p1` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c4_ans` (id vs ja):** id=[2, 2, 0, 2, 1], ja=[2, 2, 0]
- **Angka berbeda pada `c4_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c4_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c4_l3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c4_ver` (id vs ja):** id=[2, 0, 0, 2, 2, 4, 2], ja=[2, 0, 0, 2, 2, 4]
- **Angka berbeda pada `horizontal.ket` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `rang_tip` (id vs ja):** id=[0, 1, 0, 3, 2, 3, 2], ja=[1, 0, 3, 2, 3, 2]
- **Angka berbeda pada `sh_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sh_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sh_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sh_contoh4` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/GrafikPGLPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/GrafikPGLPage.tsx)

#### Peta 1: `T_GRAFIK` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `sh_titikpotong` (id vs en):** id=[2], en=[]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c1_l1` (id vs ja):** id=[1, 0], ja=[0]
- **Angka berbeda pada `c1_l2` (id vs ja):** id=[2, 0], ja=[0]
- **Angka berbeda pada `c1_l3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c1_soal` (id vs ja):** id=[4, 0], ja=[4]
- **Angka berbeda pada `c1_vis` (id vs ja):** id=[4, 0], ja=[4]
- **Angka berbeda pada `c2_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2_l1_desc` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `c2_l1_title` (id vs ja):** id=[1], ja=[1, 2]
- **Angka berbeda pada `c2_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2_l3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c2_soal` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2_tip_items[]` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2_vis` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_ans_main` (id vs ja):** id=[2, 2], ja=[2, 2, 2]
- **Angka berbeda pada `c3_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3_l3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3_soal` (id vs ja):** id=[6, 0], ja=[6]
- **Angka berbeda pada `c3_soal_b` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `c3_soal_end` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `c3_vis` (id vs ja):** id=[6, 0], ja=[6]
- **Angka berbeda pada `mcq1_benar` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `mcq1_pem_intro` (id vs ja):** id=[], ja=[2]
- **Angka berbeda pada `rang_items[]` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sh_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sh_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sh_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sh_titikpotong` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `titikpotong_p1` (id vs ja):** id=[0, 0], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/Hubungan2GarisPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/Hubungan2GarisPage.tsx)

#### Peta 1: `T_HUBUNGAN` (baris 97)
Bahasa: id, en, ja
- **Angka berbeda pada `ber_anim_perp_at` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `ber_note` (id vs ja):** id=[1, 90], ja=[90]
- **Angka berbeda pada `ber_sub2` (id vs ja):** id=[1, 90], ja=[90]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c1_ans` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c1_soal` (id vs ja):** id=[5, 2], ja=[]
- **Angka berbeda pada `c2_ans` (id vs ja):** id=[11, 2, 3], ja=[11, 2]
- **Angka berbeda pada `c2_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c2_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2_soal` (id vs ja):** id=[2, 5, 3], ja=[2, 5]
- **Angka berbeda pada `c2_step1` (id vs ja):** id=[4, 3], ja=[4]
- **Angka berbeda pada `c3_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3_l3` (id vs ja):** id=[3, 3, 4], ja=[3]
- **Angka berbeda pada `c3_soal` (id vs ja):** id=[1, 6, 0, 4, 0], ja=[1, 6, 4]
- **Angka berbeda pada `sej_p1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sej_p2` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `sej_vis_note` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sh_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sh_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sh_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tek_obs_note` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `tek_p1` (id vs ja):** id=[1, 1], ja=[1]
- **Angka berbeda pada `tek_p2` (id vs ja):** id=[90, 90, 1, 1, 1], ja=[1, 1, 1]
- **Angka berbeda pada `tek_sub` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `tek_why` (id vs ja):** id=[1], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/MenentukanPGLPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/persamaan-garis-lurus/MenentukanPGLPage.tsx)

#### Peta 1: `T_MENENTUKAN` (baris 69)
Bahasa: id, en, ja
- **Angka berbeda pada `c2_p1` (id vs en):** id=[2], en=[1]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c1_p1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c1_soal` (id vs ja):** id=[4, 0, 3], ja=[0, 3]
- **Angka berbeda pada `c1_vis` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c2_p1` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2_vis` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3_ans1` (id vs ja):** id=[1, 3, 3, 0], ja=[3, 3, 0]
- **Angka berbeda pada `c3_cara1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_cara2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_l1b` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c3_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3_l2b` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3_l2bnote` (id vs ja):** id=[1, 2, 5, 2, 5], ja=[2, 5, 2, 5]
- **Angka berbeda pada `c3_l3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3_l3b` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c3_l4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `c3_l4b` (id vs ja):** id=[4, 0], ja=[]
- **Angka berbeda pada `c3_soal` (id vs ja):** id=[2, 5, 4, 1, 0], ja=[2, 5, 4, 1]
- **Angka berbeda pada `calc2_title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `calc3_title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `iv1_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `iv1_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `iv1_l3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `iv2_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `iv2_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `iv2_l3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `iv2_l4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `iv3_l1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `iv3_l1_cara` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `iv3_l2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `iv3_l3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `iv3_l4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `iv3_l4_prefix` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `iv3_l5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `peta_2Titik` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `peta_laluSk1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `peta_mDan1Titik` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sh_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sh_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sh_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sh_rumus1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sh_rumus2` (id vs ja):** id=[2], ja=[]


## Topik persamaan-kuadrat

Tidak ada objek terjemahan per bahasa yang dapat dianalisis.

## Topik plsv-ptlsv

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/KalimatTerbukaTertutupPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/KalimatTerbukaTertutupPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **ja, key tambahan:** `terbukaDefBody4`
- **Angka berbeda pada `c1c` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `c3NoteLabel` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `tipsStep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `tipsStep2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `tipsStep3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tipsStep4` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/ModelMatematikaPLSVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/ModelMatematikaPLSVPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c3Q` (id vs en):** id=[0, 3, 5, 0], en=[2, 3, 5, 22]
- **Angka berbeda pada `c1Q` (id vs ja):** id=[17, 30], ja=[]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[3, 28], ja=[]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[0, 3, 5, 0], ja=[]
- **Angka berbeda pada `introBox` (id vs ja):** id=[5, 35], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/ModelMatematikaPtLSVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/ModelMatematikaPtLSVPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c2s1` (id vs en):** id=[4], en=[]
- **Angka berbeda pada `c2s4c` (id vs en):** id=[4], en=[]
- **Angka berbeda pada `c3Q` (id vs en):** id=[0, 0, 0, 10], en=[150, 8, 5, 10]
- **Angka berbeda pada `currency.a` (id vs en):** id=[0], en=[8]
- **Angka berbeda pada `currency.b` (id vs en):** id=[0], en=[5]
- **Angka berbeda pada `currency.budget` (id vs en):** id=[0], en=[150]
- **Angka berbeda pada `currency.hint` (id vs en):** id=[0], en=[12]
- **Angka berbeda pada `currency.pocket` (id vs en):** id=[0], en=[50]
- **Angka berbeda pada `introBox` (id vs en):** id=[0, 0], en=[50, 12]
- **Angka berbeda pada `c1Q` (id vs ja):** id=[480, 60], ja=[]
- **Angka berbeda pada `c1s4b` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c2Q` (id vs ja):** id=[70, 75, 80, 78], ja=[]
- **Angka berbeda pada `c2s1` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `c2s2` (id vs ja):** id=[4, 78], ja=[]
- **Angka berbeda pada `c2s4b` (id vs ja):** id=[87], ja=[]
- **Angka berbeda pada `c2s4c` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `c3Q` (id vs ja):** id=[0, 0, 0, 10], ja=[8]
- **Angka berbeda pada `c3s1c` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `c3s4d` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `currency.a` (id vs ja):** id=[0], ja=[8]
- **Angka berbeda pada `currency.b` (id vs ja):** id=[0], ja=[5]
- **Angka berbeda pada `currency.budget` (id vs ja):** id=[0], ja=[150]
- **Angka berbeda pada `currency.hint` (id vs ja):** id=[0], ja=[12]
- **Angka berbeda pada `currency.pocket` (id vs ja):** id=[0], ja=[50]
- **Angka berbeda pada `introBox` (id vs ja):** id=[0, 0], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/PengertianPLSVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/PengertianPLSVPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1aNote2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `c1cNote2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `plsvEx1e` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `plsvEx2e` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/PengertianPtLSVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/PengertianPtLSVPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `introBody` (id vs en):** id=[0, 75], en=[50, 75]
- **Angka berbeda pada `c1a` (id vs ja):** id=[1, 1], ja=[]
- **Angka berbeda pada `c1b` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c1d` (id vs ja):** id=[1, 1], ja=[]
- **Angka berbeda pada `c3a` (id vs ja):** id=[3, 11], ja=[]
- **Angka berbeda pada `ex1` (id vs ja):** id=[10, 7], ja=[]
- **Angka berbeda pada `ex2` (id vs ja):** id=[3, 8], ja=[]
- **Angka berbeda pada `ex3` (id vs ja):** id=[-5, -2], ja=[]
- **Angka berbeda pada `ex4` (id vs ja):** id=[6, 6], ja=[]
- **Angka berbeda pada `introBody` (id vs ja):** id=[0, 75], ja=[]
- **Angka berbeda pada `ptlsvEx3` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `row2PLSV` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/PenyelesaianPLSVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/PenyelesaianPLSVPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Move2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c2s3` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `c3s1` (id vs ja):** id=[3, 4, 12, 12], ja=[]
- **Angka berbeda pada `s5LCM` (id vs ja):** id=[2, 3, 6, 6], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/PenyelesaianPtLSVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/plsv-ptlsv/PenyelesaianPtLSVPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Div` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c1Move` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `c2s3` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `c3s1` (id vs ja):** id=[2, 4, 4, 4], ja=[]
- **Angka berbeda pada `c3s4` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `s1Add` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `s2Div` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s4Move` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `s5LCM` (id vs ja):** id=[4, 6, 12, 12], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[7], ja=[]


## Topik pola-bilangan

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PengertianPolaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PengertianPolaPage.tsx)

#### Peta 1: `translations` (baris 29)
Bahasa: id, en, ja
- **Angka berbeda pada `ex1Answer` (id vs en):** id=[12, 1, 4, 9, 16, 144], en=[1, 4, 9, 16, 144]
- **Angka berbeda pada `ex1Problem` (id vs en):** id=[1, 4, 9, 16, 12], en=[1, 4, 9, 16]
- **Angka berbeda pada `ex2Answer` (id vs en):** id=[15, 6, 12, 20, 30, 272], en=[6, 12, 20, 30, 272]
- **Angka berbeda pada `ex2Problem` (id vs en):** id=[6, 12, 20, 30, 15], en=[6, 12, 20, 30]
- **Angka berbeda pada `addTwo` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `catalogTitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex1Answer` (id vs ja):** id=[12, 1, 4, 9, 16, 144], ja=[4, 9, 16]
- **Angka berbeda pada `ex1Problem` (id vs ja):** id=[1, 4, 9, 16, 12], ja=[1, 4, 9, 16]
- **Angka berbeda pada `ex1SubstLabel` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `ex1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2Answer` (id vs ja):** id=[15, 6, 12, 20, 30, 272], ja=[12, 20, 30]
- **Angka berbeda pada `ex2Problem` (id vs ja):** id=[6, 12, 20, 30, 15], ja=[6, 12, 20, 30]
- **Angka berbeda pada `ex2Step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2Step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex2Step3` (id vs ja):** id=[3, 15], ja=[]
- **Angka berbeda pada `ex2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3Answer` (id vs ja):** id=[20, 440], ja=[]
- **Angka berbeda pada `ex3Problem` (id vs ja):** id=[20], ja=[]
- **Angka berbeda pada `ex3Step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex3Step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3Step3` (id vs ja):** id=[3, 20], ja=[]
- **Angka berbeda pada `ex3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `polaDescs[]` (id vs ja):** id=[1, 1], ja=[1]
- **Angka berbeda pada `sec1Banner` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec1Body` (id vs ja):** id=[15], ja=[]
- **Angka berbeda pada `sec2Banner` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `specialSection` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `steps[].desc` (id vs ja):** id=[1, 2, 3], ja=[1, 2]
- **Angka berbeda pada `timesTwo` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `tipBox` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `tipsItems[].detail` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `tipsItems[].tip` (id vs ja):** id=[3], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PolaAritmetikaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PolaAritmetikaPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `ex1Ans` (id vs en):** id=[20, 61], en=[61]
- **Angka berbeda pada `ex1Problem` (id vs en):** id=[4, 7, 10, 13, 20], en=[4, 7, 10, 13]
- **Angka berbeda pada `ex2Problem` (id vs en):** id=[5, 23, 9, 39, 15], en=[23, 39]
- **Angka berbeda pada `ex2bProblem` (id vs en):** id=[10, 155, 5, 10], en=[10, 155, 5]
- **Angka berbeda pada `ex2bStep2` (id vs en):** id=[10], en=[]
- **Angka berbeda pada `howToUseBody` (id vs en):** id=[1, 5, 20, 100], en=[1]
- **Angka berbeda pada `arcDiff1` (id vs ja):** id=[2, 2], ja=[2]
- **Angka berbeda pada `arcDiff2` (id vs ja):** id=[2, 2], ja=[2]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `derivStep1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `derivStep2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `derivStep3Title` (id vs ja):** id=[3, 2], ja=[]
- **Angka berbeda pada `ex1Ans` (id vs ja):** id=[20, 61], ja=[61]
- **Angka berbeda pada `ex1Problem` (id vs ja):** id=[4, 7, 10, 13, 20], ja=[4, 7, 10, 13]
- **Angka berbeda pada `ex1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex1bProblem` (id vs ja):** id=[3, 7, 11, 15, 15], ja=[3, 7, 11, 15]
- **Angka berbeda pada `ex1bTitle` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2Problem` (id vs ja):** id=[5, 23, 9, 39, 15], ja=[]
- **Angka berbeda pada `ex2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex2bProblem` (id vs ja):** id=[10, 155, 5, 10], ja=[]
- **Angka berbeda pada `ex2bStep2` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `ex2bTitle` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3Ans` (id vs ja):** id=[18, 25, 66], ja=[]
- **Angka berbeda pada `ex3Given2` (id vs ja):** id=[10, 36, 10, 36], ja=[10, 36]
- **Angka berbeda pada `ex3Problem` (id vs ja):** id=[10, 36, 2, 25], ja=[]
- **Angka berbeda pada `ex3Step2` (id vs ja):** id=[25, 25], ja=[25]
- **Angka berbeda pada `ex3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex3bAns` (id vs ja):** id=[330], ja=[]
- **Angka berbeda pada `ex3bCheck` (id vs ja):** id=[15, 15, 8, 14, 2, 36, 15, 15, 2, 8, 36, 15, 2, 44, 330], ja=[15, 8, 14, 2, 36, 15, 15, 2, 8, 36, 15, 2, 44, 330]
- **Angka berbeda pada `ex3bProblem` (id vs ja):** id=[8, 10, 2, 15], ja=[]
- **Angka berbeda pada `ex3bTitle` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex4Ans` (id vs ja):** id=[4, 200, 400, 14700], ja=[14700]
- **Angka berbeda pada `ex4Desc` (id vs ja):** id=[4, 200, 400, 200, 400], ja=[]
- **Angka berbeda pada `ex4Note` (id vs ja):** id=[49, 4, 200, 400, 204, 396], ja=[]
- **Angka berbeda pada `ex4Problem` (id vs ja):** id=[4, 200, 400], ja=[]
- **Angka berbeda pada `ex4Step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex4Step2` (id vs ja):** id=[2, 49], ja=[]
- **Angka berbeda pada `ex4Title` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `formula1Label` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `formula2Label` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `gaussNote` (id vs ja):** id=[1, 5, 6, 2, 4, 6, 3, 5, 6, 30, 15], ja=[1, 5, 6, 2, 4, 6, 5, 6, 30, 15]
- **Angka berbeda pada `gaussStory` (id vs ja):** id=[9, 1, 100, 5050, 1, 100, 101, 50, 50, 101, 5050], ja=[1, 100, 101, 5050]
- **Angka berbeda pada `howToUseBody` (id vs ja):** id=[1, 5, 20, 100], ja=[1]
- **Angka berbeda pada `introBody` (id vs ja):** id=[10, 13, 16, 3], ja=[]
- **Angka berbeda pada `sec1Banner` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec2Banner` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `step3` (id vs ja):** id=[3, 15], ja=[15]
- **Angka berbeda pada `summarySubheader` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `tips[].detail` (id vs ja):** id=[2, 1, 2], ja=[2, 1]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PolaGeometriPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PolaGeometriPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `ex1Ans` (id vs en):** id=[8, 384], en=[384]
- **Angka berbeda pada `ex1Problem` (id vs en):** id=[3, 6, 12, 24, 8], en=[3, 6, 12, 24]
- **Angka berbeda pada `ex1bAns` (id vs en):** id=[2186], en=[2, 186]
- **Angka berbeda pada `ex2Problem` (id vs en):** id=[3, 18, 6, 486, 10], en=[18, 486]
- **Angka berbeda pada `ex2bProblem` (id vs en):** id=[5, 62, 2, 5], en=[5, 62, 2]
- **Angka berbeda pada `ex3Given` (id vs en):** id=[500, 1, 2, 20], en=[500, 1.2, 20]
- **Angka berbeda pada `introBody` (id vs en):** id=[15, 0, 1, 15, 2, 30, 4, 45, 8, 2], en=[15, 1, 0, 15, 2, 30, 4, 45, 8, 2]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `derivStep1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `derivStep2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `derivStep3Title` (id vs ja):** id=[3, 1], ja=[1]
- **Angka berbeda pada `ex1Ans` (id vs ja):** id=[8, 384], ja=[384]
- **Angka berbeda pada `ex1Problem` (id vs ja):** id=[3, 6, 12, 24, 8], ja=[3, 6, 12, 24]
- **Angka berbeda pada `ex1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex1bAns` (id vs ja):** id=[2186], ja=[2, 186]
- **Angka berbeda pada `ex1bProblem` (id vs ja):** id=[2, 6, 18, 54, 7], ja=[2, 6, 18, 54]
- **Angka berbeda pada `ex1bTitle` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2Problem` (id vs ja):** id=[3, 18, 6, 486, 10], ja=[]
- **Angka berbeda pada `ex2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex2bProblem` (id vs ja):** id=[5, 62, 2, 5], ja=[]
- **Angka berbeda pada `ex2bTitle` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3Ans` (id vs ja):** id=[6, 1244, 2000, 9], ja=[1]
- **Angka berbeda pada `ex3Given` (id vs ja):** id=[500, 1, 2, 20], ja=[500, 1.2, 20]
- **Angka berbeda pada `ex3Problem` (id vs ja):** id=[500, 20, 6, 2000], ja=[]
- **Angka berbeda pada `ex3Step1` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `ex3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `ex3bAns` (id vs ja):** id=[16, 2, 48, 112], ja=[16, 2, 48]
- **Angka berbeda pada `ex3bGiven` (id vs ja):** id=[16, 3, 4], ja=[16, 4]
- **Angka berbeda pada `ex3bProblem` (id vs ja):** id=[16, 3, 4], ja=[]
- **Angka berbeda pada `ex3bTitle` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `figcaption` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `firstExceedsLabel` (id vs ja):** id=[2000], ja=[]
- **Angka berbeda pada `introBody` (id vs ja):** id=[15, 0, 1, 15, 2, 30, 4, 45, 8, 2], ja=[2]
- **Angka berbeda pada `sec1Banner` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec2Banner` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `seriesSummaryBody` (id vs ja):** id=[1, 1], ja=[]
- **Angka berbeda pada `step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `step3` (id vs ja):** id=[3, 10], ja=[10]
- **Angka berbeda pada `summarySubheader` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PolaKhususPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/pola-bilangan/PolaKhususPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `ex1Ans` (id vs en):** id=[12, 1, 4, 9, 16, 144], en=[1, 4, 9, 16, 144]
- **Angka berbeda pada `ex1Problem` (id vs en):** id=[1, 4, 9, 16, 12], en=[1, 4, 9, 16]
- **Angka berbeda pada `ex2Problem` (id vs en):** id=[1, 1, 2, 3, 5, 8, 13, 21, 11, 12, 12, 11], en=[1, 1, 2, 3, 5, 8, 13, 21]
- **Angka berbeda pada `ex2Step1` (id vs en):** id=[12], en=[]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `catalogTitle` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `conclusionBadge` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `ex1Ans` (id vs ja):** id=[12, 1, 4, 9, 16, 144], ja=[4, 9, 16]
- **Angka berbeda pada `ex1Problem` (id vs ja):** id=[1, 4, 9, 16, 12], ja=[1, 4, 9, 16]
- **Angka berbeda pada `ex1SubstLabel` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `ex1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2GoldenNote` (id vs ja):** id=[1.618], ja=[1]
- **Angka berbeda pada `ex2Problem` (id vs ja):** id=[1, 1, 2, 3, 5, 8, 13, 21, 11, 12, 12, 11], ja=[1, 1, 2, 3, 5, 8, 13, 21]
- **Angka berbeda pada `ex2Step1` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `ex2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3Ans` (id vs ja):** id=[7, 1, 6, 15, 20, 15, 6, 1, 64, 2, 6, 2, 1], ja=[1, 6, 15, 20, 15, 6, 1, 64, 2, 6, 2, 1]
- **Angka berbeda pada `ex3Problem` (id vs ja):** id=[7, 1, 1, 7], ja=[1]
- **Angka berbeda pada `ex3Step1` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex3Step2` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `facts[].detail` (id vs ja):** id=[3, 5, 8, 13], ja=[3, 5, 8]
- **Angka berbeda pada `fibonacci.desc` (id vs ja):** id=[1, 1], ja=[1]
- **Angka berbeda pada `pascal.desc` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `summaryRows[].beda` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `summarySection1` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `summarySubheader` (id vs ja):** id=[7, 8], ja=[]
- **Angka berbeda pada `tips[].detail` (id vs ja):** id=[1, 1, 2, 1.1], ja=[1, 1.1]
- **Angka berbeda pada `tips[].tip` (id vs ja):** id=[1, 1], ja=[]


## Topik relasi-fungsi

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/BanyakFungsiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/BanyakFungsiPage.tsx)

#### Peta 1: `object@27` (baris 27)
Bahasa: id, en, ja
- **Angka berbeda pada `koresp_visual_no` (id vs en):** id=[1, 1], en=[]
- **Angka berbeda pada `badge` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c2_c_note` (id vs ja):** id=[9.4], ja=[4]
- **Angka berbeda pada `c3_soal_p` (id vs ja):** id=[4, 1024], ja=[4]
- **Angka berbeda pada `intro_idea_p` (id vs ja):** id=[1, 2, 3, 2, 3, 3, 9], ja=[1, 2, 3, 3, 9]
- **Angka berbeda pada `koresp_visual_no` (id vs ja):** id=[1, 1], ja=[]
- **Angka berbeda pada `tips[]` (id vs ja):** id=[1, 5, 5, 4, 3, 2, 1, 120], ja=[5, 5, 4, 3, 2, 1, 120]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/BukuAnimasiBanyakFungsiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/BukuAnimasiBanyakFungsiPage.tsx)

#### Peta 1: `object@9` (baris 9)
Bahasa: id, en, ja
- **Angka berbeda pada `badge` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `hintCountABDetail` (id vs ja):** id=[3, 2, 3, 3, 9], ja=[3, 9]
- **Angka berbeda pada `hintCountBADetail` (id vs ja):** id=[2, 3, 2, 2, 2, 8], ja=[2, 2, 8]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/GrafikFungsiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/GrafikFungsiPage.tsx)

#### Peta 1: `object@13` (baris 13)
Bahasa: id, en, ja
- **en, key id yang tidak ada:** `graph1_sub`, `graph1_title`, `graph2_sub`, `graph2_title`
- **ja, key id yang tidak ada:** `graph1_sub`, `graph1_title`, `graph2_sub`, `graph2_title`
- **Angka berbeda pada `c2_opts[].teks` (id vs en):** id=[25000], en=[25]
- **Angka berbeda pada `c2_steps[]` (id vs en):** id=[5, 3, 5, 7, 15, 7, 22, 22000], en=[5, 3, 5, 7, 15, 7, 22, 22]
- **Angka berbeda pada `badge` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c1_q` (id vs ja):** id=[25000], ja=[25]
- **Angka berbeda pada `c2_opts[].teks` (id vs ja):** id=[25000], ja=[25]
- **Angka berbeda pada `c2_q` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `c2_steps[]` (id vs ja):** id=[5, 3, 5, 7, 15, 7, 22, 22000], ja=[5, 3, 5, 7, 15, 7, 22, 22]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/NotasiFungsiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/NotasiFungsiPage.tsx)

#### Peta 1: `object@14` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `badge` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c3_answer` (id vs ja):** id=[3, 2, 2, 9, 29], ja=[3, 2, 2, 29, 9]
- **Angka berbeda pada `c4_domain_interval` (id vs ja):** id=[7, 15, 7, 3, 15, 2, 6], ja=[7, 3, 2]
- **Angka berbeda pada `c4a_disc_p` (id vs ja):** id=[18, 18], ja=[]
- **Angka berbeda pada `c4b_disc_p` (id vs ja):** id=[7, 7], ja=[]
- **Angka berbeda pada `calc_step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `calc_step2` (id vs ja):** id=[2, 3], ja=[]
- **Angka berbeda pada `notasi_rows[].baca` (id vs ja):** id=[], ja=[3]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/PengertianFungsiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/PengertianFungsiPage.tsx)

#### Peta 1: `translations` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `pair2Note` (id vs en):** id=[2], en=[]
- **Angka berbeda pada `bBadRef` (id vs ja):** id=[1, 3], ja=[3]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `c3Data[].penj` (id vs ja):** id=[2002, 3, 2001, 2], ja=[]
- **Angka berbeda pada `diag1Note` (id vs ja):** id=[3, 4], ja=[]
- **Angka berbeda pada `funcDesc` (id vs ja):** id=[1, 1, 3, 1], ja=[1, 1, 3]
- **Angka berbeda pada `pair2Note` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `parabolaNote2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `secC1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `secC2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `secC3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `secC4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `twoArrowsNote` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `twoArrowsSvg` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `unpairedNote` (id vs ja):** id=[3, 4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/PengertianRelasiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/relasi-fungsi/PengertianRelasiPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `langkah` (id vs en):** id=[], en=[1]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `diag2Total` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `pair2Total` (id vs ja):** id=[22], ja=[]
- **Angka berbeda pada `penyajian4` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `rangItems[].label` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `rangeNote2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `totalResult` (id vs ja):** id=[22], ja=[]


## Topik segitiga-segiempat

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/GarisBeratBagiTinggiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/GarisBeratBagiTinggiPage.tsx)

#### Peta 1: `translations` (baris 15)
Bahasa: id, en, ja
- **Angka berbeda pada `altCountText` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `bisCountText` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex1s1note` (id vs ja):** id=[2, 1], ja=[]
- **Angka berbeda pada `medCountText` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `medPropText` (id vs ja):** id=[2, 1], ja=[]
- **Angka berbeda pada `tblBisectDef` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `tblMedianProp` (id vs ja):** id=[2, 1], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/KelilingLuasBangunTakBeraturanPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/KelilingLuasBangunTakBeraturanPage.tsx)

#### Peta 1: `translations` (baris 15)
Bahasa: id, en, ja
- **Angka berbeda pada `lex3context` (id vs en):** id=[0, 0], en=[25000, 8000]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `kex1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `kex1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `kex2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `kex2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `kex3note` (id vs ja):** id=[4, 7], ja=[]
- **Angka berbeda pada `kex3q` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `kex3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `kex3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `lex1parts[]` (id vs ja):** id=[13, 5], ja=[]
- **Angka berbeda pada `lex1s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `lex1s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `lex1s3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `lex2parts[]` (id vs ja):** id=[5, 5], ja=[]
- **Angka berbeda pada `lex2q` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `lex2s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `lex2s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `lex3context` (id vs ja):** id=[0, 0], ja=[]
- **Angka berbeda pada `lex3parts[]` (id vs ja):** id=[5, 7], ja=[]
- **Angka berbeda pada `lex3s1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `lex3s2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `lex3s3` (id vs ja):** id=[3], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/KelilingSegitigaSegiempatPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/KelilingSegitigaSegiempatPage.tsx)

#### Peta 1: `translations` (baris 15)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex1q` (id vs ja):** id=[13, 10], ja=[10]
- **Angka berbeda pada `ex2q` (id vs ja):** id=[70, 12], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/LuasSegiempatPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/LuasSegiempatPage.tsx)

#### Peta 1: `translations` (baris 15)
Bahasa: id, en, ja
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex1q` (id vs ja):** id=[24, 15], ja=[]
- **Angka berbeda pada `ex2q` (id vs ja):** id=[8, 14, 9], ja=[]
- **Angka berbeda pada `ex2q2` (id vs ja):** id=[50000], ja=[]
- **Angka berbeda pada `s1p1` (id vs ja):** id=[1, 1, 5, 3], ja=[1, 1, 3]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/LuasSegitigaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/segitiga-segiempat/LuasSegitigaPage.tsx)

#### Peta 1: `translations` (baris 15)
Bahasa: id, en, ja
- **Angka berbeda pada `s4tipText` (id vs en):** id=[1, 10, 1, 100], en=[10, 100]
- **Angka berbeda pada `breadcrumb` (id vs ja):** id=[7], ja=[]
- **Angka berbeda pada `ex2a2` (id vs ja):** id=[840000], ja=[840]
- **Angka berbeda pada `ex2q` (id vs ja):** id=[14, 10], ja=[14]
- **Angka berbeda pada `ex2q2` (id vs ja):** id=[12000], ja=[]
- **Angka berbeda pada `ex3q` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `s2step1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `s2step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `s2step3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s3noteText` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `s4tipText` (id vs ja):** id=[1, 10, 1, 100], ja=[10]


## Topik spldv

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/DefinisiSPLDVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/DefinisiSPLDVPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `introDesc` (id vs en):** id=[2, 1, 0, 1, 2, 0], en=[2, 1, 25, 1, 2, 23]
- **Angka berbeda pada `q3R1` (id vs en):** id=[1], en=[]
- **Angka berbeda pada `quiz2Choices[].p1` (id vs en):** id=[2, 7000, 11000, 14000, 11000, 25000], en=[2, 7, 11, 14, 11, 25]
- **Angka berbeda pada `quiz2Choices[].p2` (id vs en):** id=[7000, 2, 11000, 7000, 22000, 29000, 23000], en=[7, 2, 11, 7, 22, 29, 23]
- **Angka berbeda pada `gradeLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `introDesc` (id vs ja):** id=[2, 1, 0, 1, 2, 0], ja=[]
- **Angka berbeda pada `introTip` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `pldvDesc` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `pldvRows[][]` (id vs ja):** id=[0, 1], ja=[]
- **Angka berbeda pada `pldvSummaryDesc` (id vs ja):** id=[1, 0], ja=[0]
- **Angka berbeda pada `q2ResultB` (id vs ja):** id=[2, 2, 3], ja=[2, 3]
- **Angka berbeda pada `q3R1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `quiz1Label` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `quiz2Choices[].p1` (id vs ja):** id=[2, 7000, 11000, 14000, 11000, 25000], ja=[2, 7, 11, 14, 11, 25]
- **Angka berbeda pada `quiz2Choices[].p2` (id vs ja):** id=[7000, 2, 11000, 7000, 22000, 29000, 23000], ja=[7, 2, 11, 7, 22, 29, 23]
- **Angka berbeda pada `quiz2Label` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `secPLDV` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `secSPLDV` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `spldvDesc` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `spldvEq1Label` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `spldvEq2Label` (id vs ja):** id=[2], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/MetodeCampuranPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/MetodeCampuranPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `gradeLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `q1SubstNote` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `q2EliminNote` (id vs ja):** id=[3, 2, 6, 2, 3], ja=[]
- **Angka berbeda pada `q2SubstNote` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q3` (id vs ja):** id=[3, 2, 14, 4, 5, 24.5], ja=[24]
- **Angka berbeda pada `q3L1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3L2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q3L2Note` (id vs ja):** id=[3, 4, 12, 4, 3], ja=[3]
- **Angka berbeda pada `q3L3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q3L3Note` (id vs ja):** id=[2.5], ja=[2]
- **Angka berbeda pada `q3L4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `stepsTitle` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/MetodeEliminasiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/MetodeEliminasiPage.tsx)

#### Peta 1: `translations` (baris 15)
Bahasa: id, en, ja
- **Angka berbeda pada `q3Answer` (id vs en):** id=[1, 16.8, 1, 10.8], en=[16.8, 10.8]
- **Angka berbeda pada `q3L2Note` (id vs en):** id=[2], en=[1, 2, 2]
- **Angka berbeda pada `q3MangoVar` (id vs en):** id=[1], en=[]
- **Angka berbeda pada `q3OrangeVar` (id vs en):** id=[1], en=[]
- **Angka berbeda pada `gradeLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `q1L1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q1L2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q1L2Note` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q1L3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q2Note1` (id vs ja):** id=[6, 6], ja=[6]
- **Angka berbeda pada `q3` (id vs ja):** id=[4, 6, 132, 3, 2, 72], ja=[]
- **Angka berbeda pada `q3Answer` (id vs ja):** id=[1, 16.8, 1, 10.8], ja=[16.8, 10.8]
- **Angka berbeda pada `q3L1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3L2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q3L2Note` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q3L3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q3L3Note` (id vs ja):** id=[2, 3, 6, 3, 2], ja=[]
- **Angka berbeda pada `q3L4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `q3L4Note` (id vs ja):** id=[3, 2, 6, 2, 3], ja=[]
- **Angka berbeda pada `q3L5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `q3MangoVar` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3OrangeVar` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `stepsTitle` (id vs ja):** id=[5], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/MetodeGrafikPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/MetodeGrafikPage.tsx)

#### Peta 1: `translations` (baris 14)
Bahasa: id, en, ja
- **Angka berbeda pada `axisXDesc` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `axisYDesc` (id vs ja):** id=[0], ja=[]
- **Angka berbeda pada `gradeLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `labDesc` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `q2P1Points[]` (id vs ja):** id=[0, 3, 3, 0], ja=[3, 3, 0]
- **Angka berbeda pada `q2P2Points[]` (id vs ja):** id=[0, 6, 6, 0], ja=[6, 6, 0]
- **Angka berbeda pada `q3P1Label` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3P1Points[]` (id vs ja):** id=[0, 6, 6, 0], ja=[6, 6, 0]
- **Angka berbeda pada `q3P2Label` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q3P2Points[]` (id vs ja):** id=[6, 6, 10, 2, 6, 2], ja=[6, 10, 2, 6, 2]
- **Angka berbeda pada `summaryDesc` (id vs ja):** id=[0, 0], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/MetodeSubstitusiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/MetodeSubstitusiPage.tsx)

#### Peta 1: `translations` (baris 13)
Bahasa: id, en, ja
- **Angka berbeda pada `gradeLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `introAdvantageDesc` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q1Step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q1Step3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q2L1` (id vs ja):** id=[1, 2], ja=[]
- **Angka berbeda pada `q2L1Note` (id vs ja):** id=[2, 1], ja=[]
- **Angka berbeda pada `q2L2` (id vs ja):** id=[2, 1], ja=[]
- **Angka berbeda pada `q2L3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q2L4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `q3` (id vs ja):** id=[2, 3, 2, 21, 1, 4, 27], ja=[]
- **Angka berbeda pada `q3L1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3L2` (id vs ja):** id=[2, 2, 1], ja=[1]
- **Angka berbeda pada `q3L3` (id vs ja):** id=[3, 1], ja=[]
- **Angka berbeda pada `q3L4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `q3L5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `step1Desc` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `step4Desc` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `stepsTitle` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/ModelSPLDVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/ModelSPLDVPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `gradeLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `q1Info1` (id vs ja):** id=[1, 2, 3, 13], ja=[13]
- **Angka berbeda pada `q1Info1Eq` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q1Info2` (id vs ja):** id=[2, 1, 2, 8], ja=[8]
- **Angka berbeda pada `q1Info2Eq` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q1L1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q1L2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q1L3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q1Problem` (id vs ja):** id=[2, 3, 13, 1, 2, 8], ja=[]
- **Angka berbeda pada `q1Var1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q1Var2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q2Info1` (id vs ja):** id=[1, 3], ja=[]
- **Angka berbeda pada `q2Info2` (id vs ja):** id=[2, 27], ja=[]
- **Angka berbeda pada `q2L1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q2L23Title` (id vs ja):** id=[2, 3], ja=[3]
- **Angka berbeda pada `q2Problem` (id vs ja):** id=[3, 27], ja=[]
- **Angka berbeda pada `q3From1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3From2` (id vs ja):** id=[2, 2, 4], ja=[]
- **Angka berbeda pada `q3L1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3L2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q3L3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q3Problem` (id vs ja):** id=[50, 140], ja=[]
- **Angka berbeda pada `q3Rel1Desc` (id vs ja):** id=[50], ja=[]
- **Angka berbeda pada `q3Rel1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3Rel2Desc` (id vs ja):** id=[2, 4], ja=[]
- **Angka berbeda pada `q3Rel2Desc2` (id vs ja):** id=[140], ja=[]
- **Angka berbeda pada `q3Rel2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `secContoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `secContoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `secContoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `step4Desc` (id vs ja):** id=[2, 2], ja=[]
- **Angka berbeda pada `stepsTitle` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/PenyelesaianMasalahSPLDVPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/spldv/PenyelesaianMasalahSPLDVPage.tsx)

#### Peta 1: `translations` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `q1L1Points[]` (id vs en):** id=[1, 1], en=[]
- **Angka berbeda pada `q1Problem` (id vs en):** id=[3, 2, 54, 1, 4, 52, 1, 1], en=[3, 2, 54, 1, 4, 52]
- **Angka berbeda pada `fullSolTitle` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `gradeLabel` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `introTip` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `q1Answer` (id vs ja):** id=[1, 11.2, 1, 10.2], ja=[11.2, 10.2]
- **Angka berbeda pada `q1L1Points[]` (id vs ja):** id=[1, 1], ja=[]
- **Angka berbeda pada `q1L1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q1L2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q1L2Var1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q1L2Var2` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q1L3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q1L4Title` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `q1L5Title` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `q1Problem` (id vs ja):** id=[3, 2, 54, 1, 4, 52, 1, 1], ja=[]
- **Angka berbeda pada `q2Answer` (id vs ja):** id=[37, 13], ja=[]
- **Angka berbeda pada `q2L1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q2L2P1Note` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `q2L2S1` (id vs ja):** id=[1, 4], ja=[]
- **Angka berbeda pada `q2L2S2` (id vs ja):** id=[3, 56], ja=[56]
- **Angka berbeda pada `q2L2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q2L3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q2L4Check1` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `q2L4Check2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q2L4Title` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `q2L5Title` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `q2Problem` (id vs ja):** id=[56], ja=[]
- **Angka berbeda pada `q3L1Title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `q3L2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `q3L3Title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `q3L4Title` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `q3L5Title` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `q3Problem` (id vs ja):** id=[54, 3], ja=[]
- **Angka berbeda pada `secContoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `secContoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `secContoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `stepsTitle` (id vs ja):** id=[5], ja=[]


## Topik statistika

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/KuartilPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/KuartilPage.tsx)

#### Peta 1: `object@18` (baris 18)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@19` (baris 19)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@20` (baris 20)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `object@26` (baris 26)
Bahasa: id, en, ja
- **Angka berbeda pada `back` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `ctx` (id vs ja):** id=[9], ja=[]

#### Peta 5: `object@53` (baris 53)
Bahasa: id, en, ja
- **Angka berbeda pada `konsep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `konsep2` (id vs ja):** id=[2], ja=[]

#### Peta 6: `object@80` (baris 80)
Bahasa: id, en, ja
- **Angka berbeda pada `badges[].desc` (id vs ja):** id=[75], ja=[]
- **Angka berbeda pada `quartileCardDescB` (id vs ja):** id=[4], ja=[]

#### Peta 7: `object@122` (baris 122)
Bahasa: id, en, ja
- **Angka berbeda pada `step2AText` (id vs en):** id=[9, 5], en=[9]
- **Angka berbeda pada `step2BTextA` (id vs en):** id=[8, 4, 5], en=[8]
- **Angka berbeda pada `introB` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `kaumAtas` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `kaumBawah` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `step2AText` (id vs ja):** id=[9, 5], ja=[9]
- **Angka berbeda pada `step2BTextA` (id vs ja):** id=[8, 4, 5], ja=[8]
- **Angka berbeda pada `step2Label` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `step3BLabel` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `step3Label` (id vs ja):** id=[3], ja=[]

#### Peta 8: `object@200` (baris 200)
Bahasa: id, en, ja
- **Angka berbeda pada `q1Explain` (id vs ja):** id=[1, 40, 1, 4, 10.25, 10.25, 18], ja=[1, 40, 1, 4, 10.25, 10]
- **Angka berbeda pada `q2Explain` (id vs ja):** id=[2, 40, 1, 4, 20.5, 20.5, 28], ja=[2, 40, 1, 4, 20.5, 20]
- **Angka berbeda pada `q3Explain` (id vs ja):** id=[3, 40, 1, 4, 30.75, 30.75, 35], ja=[3, 40, 1, 4, 30.75, 30]
- **Angka berbeda pada `tableTitle` (id vs ja):** id=[40], ja=[]

#### Peta 9: `object@260` (baris 260)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 10: `object@314` (baris 314)
Bahasa: id, en, ja
- **Angka berbeda pada `kesimpulan` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `ringkasan[].isi` (id vs ja):** id=[50], ja=[]
- **Angka berbeda pada `subjudul` (id vs ja):** id=[4], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/MedianModusPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/MedianModusPage.tsx)

#### Peta 1: `object@22` (baris 22)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@23` (baris 23)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@24` (baris 24)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `object@25` (baris 25)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `object@26` (baris 26)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 6: `object@61` (baris 61)
Bahasa: id, en, ja
- **Angka berbeda pada `errMax` (id vs ja):** id=[13], ja=[]
- **Angka berbeda pada `errMin` (id vs ja):** id=[3], ja=[]

#### Peta 7: `object@530` (baris 530)
Bahasa: id, en, ja
- **Angka berbeda pada `errMax` (id vs ja):** id=[15], ja=[]
- **Angka berbeda pada `errMin` (id vs ja):** id=[3], ja=[]

#### Peta 8: `object@916` (baris 916)
Bahasa: id, en, ja
- **Angka berbeda pada `ctx` (id vs ja):** id=[9], ja=[]

#### Peta 9: `object@946` (baris 946)
Bahasa: id, en, ja
- **Angka berbeda pada `konsep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `konsep2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `konsep4` (id vs ja):** id=[4], ja=[]

#### Peta 10: `object@979` (baris 979)
Bahasa: id, en, ja
- **Angka berbeda pada `compareText` (id vs ja):** id=[5, 3, 3, 4, 5, 100, 23, 100, 4, 3], ja=[]

#### Peta 11: `object@1009` (baris 1009)
Bahasa: id, en, ja
- **Angka berbeda pada `illustResultA` (id vs ja):** id=[4], ja=[]

#### Peta 12: `object@1054` (baris 1054)
Bahasa: id, en, ja
- **Angka berbeda pada `dataKe5` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `illustExplainA` (id vs ja):** id=[4, 5], ja=[]
- **Angka berbeda pada `rata2` (id vs ja):** id=[5, 6], ja=[]
- **Angka berbeda pada `rowNilai1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `rowNilai2` (id vs ja):** id=[2], ja=[]

#### Peta 13: `object@1108` (baris 1108)
Bahasa: id, en, ja
- **Angka berbeda pada `biResult` (id vs ja):** id=[3, 5], ja=[]
- **Angka berbeda pada `exampleResultA` (id vs ja):** id=[7, 4], ja=[]

#### Peta 14: `object@1153` (baris 1153)
Bahasa: id, en, ja
- **Angka berbeda pada `bisaLebih` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `rowSatu` (id vs ja):** id=[1], ja=[]

#### Peta 15: `object@1195` (baris 1195)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/PengantarStatistikaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/PengantarStatistikaPage.tsx)

#### Peta 1: `rangkumanData` (baris 48)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/PenyajianDataPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/PenyajianDataPage.tsx)

#### Peta 1: `object@30` (baris 30)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@36` (baris 36)
Bahasa: id, en, ja
- **Angka berbeda pada `context` (id vs ja):** id=[9], ja=[]

#### Peta 3: `object@54` (baris 54)
Bahasa: id, en, ja
- **Angka berbeda pada `konsep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `konsep2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `konsep3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `konsep4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `konsep5` (id vs ja):** id=[5], ja=[]

#### Peta 4: `object@398` (baris 398)
Bahasa: id, en, ja
- **Angka berbeda pada `barMaxNote` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `freqErrInvalid` (id vs ja):** id=[0, 999], ja=[]
- **Angka berbeda pada `freqErrMax` (id vs ja):** id=[40], ja=[]
- **Angka berbeda pada `freqErrMin` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `freqLabel` (id vs ja):** id=[40], ja=[]
- **Angka berbeda pada `lineDesc` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `lineMaxNote` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `pieMaxNote` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `stemErrInvalid` (id vs ja):** id=[0, 999], ja=[]
- **Angka berbeda pada `stemErrMax` (id vs ja):** id=[30], ja=[]
- **Angka berbeda pada `stemErrMin` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `stemLabel` (id vs ja):** id=[30], ja=[]

#### Peta 5: `locale constants@100` (baris 101)
Bahasa: id, en, ja
- **Angka berbeda pada `barMaxNote` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `freqErrInvalid` (id vs ja):** id=[0, 999], ja=[]
- **Angka berbeda pada `freqErrMax` (id vs ja):** id=[40], ja=[]
- **Angka berbeda pada `freqErrMin` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `freqLabel` (id vs ja):** id=[40], ja=[]
- **Angka berbeda pada `lineDesc` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `lineMaxNote` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `pieMaxNote` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `stemErrInvalid` (id vs ja):** id=[0, 999], ja=[]
- **Angka berbeda pada `stemErrMax` (id vs ja):** id=[30], ja=[]
- **Angka berbeda pada `stemErrMin` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `stemLabel` (id vs ja):** id=[30], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/PenyebaranDataPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/PenyebaranDataPage.tsx)

#### Peta 1: `object@13` (baris 13)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@19` (baris 19)
Bahasa: id, en, ja
- **Angka berbeda pada `back` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `context` (id vs ja):** id=[9], ja=[]

#### Peta 3: `object@40` (baris 40)
Bahasa: id, en, ja
- **Angka berbeda pada `konsep1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `konsep2` (id vs ja):** id=[2], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/RataRataPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/statistika/RataRataPage.tsx)

#### Peta 1: `rangkumanData` (baris 336)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.


## Topik teorema-pythagoras

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/JenisSegitigaPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/JenisSegitigaPage.tsx)

#### Peta 1: `object@12` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `acuteDesc` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `c1Ans` (id vs ja):** id=[100, 100, 3, 4, 5, 2], ja=[100, 100, 3, 4]
- **Angka berbeda pada `c1Problem` (id vs ja):** id=[6, 8, 10], ja=[]
- **Angka berbeda pada `c2Problem` (id vs ja):** id=[5, 7, 9], ja=[]
- **Angka berbeda pada `checkerAcute` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `colDescAcute` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `colDescRight` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `obtuseDesc` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `rightDesc` (id vs ja):** id=[90], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `svgObtuseDesc` (id vs ja):** id=[1, 90], ja=[90]
- **Angka berbeda pada `svgRightDesc` (id vs ja):** id=[1, 90], ja=[90]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/MasalahKontekstualPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/MasalahKontekstualPage.tsx)

#### Peta 1: `object@12` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Ans` (id vs ja):** id=[8, 6, 8, 10, 3, 4, 5], ja=[6, 8, 4]
- **Angka berbeda pada `c1Problem` (id vs ja):** id=[10, 6], ja=[]
- **Angka berbeda pada `c2Ans` (id vs ja):** id=[14.72], ja=[]
- **Angka berbeda pada `c2Problem` (id vs ja):** id=[13.4, 6.1, 2], ja=[]
- **Angka berbeda pada `c3Problem` (id vs ja):** id=[36, 15, 20], ja=[]
- **Angka berbeda pada `c3ShipPDesc` (id vs ja):** id=[36, 15], ja=[]
- **Angka berbeda pada `c3ShipQDesc` (id vs ja):** id=[20, 0], ja=[]
- **Angka berbeda pada `c3Step1` (id vs ja):** id=[1, 0, 0], ja=[0, 0]
- **Angka berbeda pada `c3Step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Step3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/MenghitungPanjangPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/MenghitungPanjangPage.tsx)

#### Peta 1: `object@12` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Ans` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `c1Problem` (id vs ja):** id=[6, 8], ja=[]
- **Angka berbeda pada `c2Ans` (id vs ja):** id=[12], ja=[]
- **Angka berbeda pada `c2Problem` (id vs ja):** id=[13, 5], ja=[]
- **Angka berbeda pada `c3Ans2` (id vs ja):** id=[11.4], ja=[]
- **Angka berbeda pada `c3Factor` (id vs ja):** id=[130, 130, 2, 5, 13], ja=[130, 2, 5, 13]
- **Angka berbeda pada `c3Problem` (id vs ja):** id=[7, 9], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/PembuktianPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/PembuktianPage.tsx)

#### Peta 1: `PP_TRANSLATIONS` (baris 19)
Bahasa: id, en, ja
- **Angka berbeda pada `introPart1` (id vs ja):** id=[2500], ja=[2]
- **Angka berbeda pada `pageSubtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `rw1Text` (id vs ja):** id=[90], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/SudutKhususPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/SudutKhususPage.tsx)

#### Peta 1: `object@12` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `c1Problem` (id vs ja):** id=[10], ja=[]
- **Angka berbeda pada `c2Ans` (id vs ja):** id=[6], ja=[]
- **Angka berbeda pada `c2Problem2` (id vs ja):** id=[30], ja=[]
- **Angka berbeda pada `c2Sol` (id vs ja):** id=[30, -60, -90, 60], ja=[-60, -90, 60]
- **Angka berbeda pada `c3Problem` (id vs ja):** id=[12, 45, 45, 90], ja=[45]
- **Angka berbeda pada `c3Step1` (id vs ja):** id=[1, 30, 60, 90, 60], ja=[60, 60]
- **Angka berbeda pada `c3Step2` (id vs ja):** id=[2, 45, 45, 90], ja=[]
- **Angka berbeda pada `c3Step2b` (id vs ja):** id=[], ja=[45]
- **Angka berbeda pada `s30Desc` (id vs ja):** id=[30, 60, 90], ja=[]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1, 45, 45, 90], ja=[45, 45]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2, 30, 60, 90], ja=[30, 60]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/TriplePythagorasPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/teorema-pythagoras/TriplePythagorasPage.tsx)

#### Peta 1: `object@12` (baris 12)
Bahasa: id, en, ja
- **Angka berbeda pada `bannerSub` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `bannerTitle` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `c2AnsEnd2` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `c2Step1` (id vs ja):** id=[1, 15, 36], ja=[]
- **Angka berbeda pada `c2Step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c2Step3` (id vs ja):** id=[3, 3], ja=[]
- **Angka berbeda pada `c2Title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3AnsEnd` (id vs ja):** id=[70], ja=[]
- **Angka berbeda pada `c3Step1` (id vs ja):** id=[1, 560, 1050], ja=[]
- **Angka berbeda pada `c3Step2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `c3Step3` (id vs ja):** id=[3, 70], ja=[]
- **Angka berbeda pada `introPic` (id vs ja):** id=[5, 12, 13], ja=[]
- **Angka berbeda pada `outsideDesc` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `outsideNote` (id vs ja):** id=[1, 5], ja=[]
- **Angka berbeda pada `outsideTitle` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `primitiveDesc3` (id vs ja):** id=[1, 1], ja=[1]
- **Angka berbeda pada `sec_contoh1` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `sec_contoh2` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `sec_contoh3` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `sec_daftar` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `sec_pola` (id vs ja):** id=[5], ja=[]
- **Angka berbeda pada `subtitle` (id vs ja):** id=[8], ja=[]
- **Angka berbeda pada `tableLegend` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `tableLegend2` (id vs ja):** id=[2, 5], ja=[2]
- **Angka berbeda pada `tableTip` (id vs ja):** id=[1, 5], ja=[]

#### Peta 2: `LIMA_TIPE_LABELS` (baris 298)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.


## Topik transformasi-geometri

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri/DilatasisPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri/DilatasisPage.tsx)

#### Peta 1: `object@289` (baris 289)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@290` (baris 290)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@291` (baris 291)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `object@292` (baris 292)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `object@293` (baris 293)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 6: `object@294` (baris 294)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `object@295` (baris 295)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 8: `object@296` (baris 296)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 9: `object@297` (baris 297)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 10: `object@298` (baris 298)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 11: `object@299` (baris 299)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 12: `object@300` (baris 300)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 13: `object@301` (baris 301)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 14: `object@302` (baris 302)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 15: `object@303` (baris 303)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 16: `object@304` (baris 304)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 17: `object@305` (baris 305)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 18: `object@306` (baris 306)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 19: `object@307` (baris 307)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 20: `object@308` (baris 308)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 21: `object@309` (baris 309)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 22: `object@310` (baris 310)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 23: `object@311` (baris 311)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 24: `object@312` (baris 312)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 25: `object@313` (baris 313)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 26: `object@314` (baris 314)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 27: `object@315` (baris 315)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 28: `object@316` (baris 316)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 29: `object@317` (baris 317)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 30: `object@318` (baris 318)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 31: `object@319` (baris 319)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 32: `object@320` (baris 320)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 33: `object@321` (baris 321)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 34: `object@322` (baris 322)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 35: `object@323` (baris 323)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 36: `object@324` (baris 324)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 37: `object@325` (baris 325)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 38: `object@326` (baris 326)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 39: `object@327` (baris 327)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 40: `object@328` (baris 328)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 41: `object@329` (baris 329)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 42: `object@330` (baris 330)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 43: `object@331` (baris 331)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 44: `object@332` (baris 332)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 45: `object@333` (baris 333)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 46: `object@334` (baris 334)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 47: `object@335` (baris 335)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 48: `object@336` (baris 336)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 49: `object@337` (baris 337)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 50: `object@338` (baris 338)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 51: `object@339` (baris 339)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 52: `object@340` (baris 340)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 53: `object@344` (baris 344)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 54: `object@345` (baris 345)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 55: `object@346` (baris 346)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 56: `object@347` (baris 347)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 57: `object@348` (baris 348)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 58: `object@349` (baris 349)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 59: `object@1775` (baris 1775)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 60: `object@1776` (baris 1776)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[9], ja=[]

#### Peta 61: `object@1777` (baris 1777)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 62: `object@1778` (baris 1778)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 63: `object@1783` (baris 1783)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 64: `object@1788` (baris 1788)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 65: `object@1793` (baris 1793)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 66: `object@1794` (baris 1794)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 67: `object@1795` (baris 1795)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 68: `object@1796` (baris 1796)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 69: `object@1797` (baris 1797)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 70: `object@1799` (baris 1799)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 71: `object@1800` (baris 1800)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 72: `object@1801` (baris 1801)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 73: `object@1802` (baris 1802)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 74: `object@1803` (baris 1803)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 75: `object@1804` (baris 1804)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 76: `object@1805` (baris 1805)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 77: `object@1810` (baris 1810)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 78: `object@1815` (baris 1815)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 79: `object@1816` (baris 1816)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 80: `object@1817` (baris 1817)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 81: `object@1818` (baris 1818)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 82: `object@1820` (baris 1820)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 83: `object@1821` (baris 1821)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 84: `object@1822` (baris 1822)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 85: `object@1823` (baris 1823)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 86: `object@1824` (baris 1824)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 87: `object@1825` (baris 1825)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 88: `object@1826` (baris 1826)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 89: `object@1827` (baris 1827)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 90: `object@1828` (baris 1828)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 91: `object@1829` (baris 1829)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 92: `object@1830` (baris 1830)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 93: `object@1831` (baris 1831)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 94: `object@1832` (baris 1832)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 95: `object@1833` (baris 1833)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 96: `object@1834` (baris 1834)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 97: `object@1835` (baris 1835)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 98: `object@1836` (baris 1836)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 99: `object@1837` (baris 1837)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 100: `object@1838` (baris 1838)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 101: `object@1839` (baris 1839)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 102: `object@1841` (baris 1841)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 103: `object@1842` (baris 1842)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 104: `object@1843` (baris 1843)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3, 9], ja=[3]

#### Peta 105: `object@1844` (baris 1844)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 106: `object@1845` (baris 1845)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 107: `object@1846` (baris 1846)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 108: `object@1847` (baris 1847)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 109: `object@1848` (baris 1848)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 110: `object@1849` (baris 1849)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 111: `object@1850` (baris 1850)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 112: `object@1851` (baris 1851)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 113: `object@1853` (baris 1853)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[4], ja=[]

#### Peta 114: `object@1854` (baris 1854)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 115: `object@1855` (baris 1855)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 116: `object@1856` (baris 1856)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 117: `object@1857` (baris 1857)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 118: `object@1858` (baris 1858)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 119: `object@1859` (baris 1859)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 120: `object@1860` (baris 1860)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 121: `object@1861` (baris 1861)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 122: `object@1862` (baris 1862)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 123: `object@1863` (baris 1863)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 124: `object@1864` (baris 1864)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 125: `object@1865` (baris 1865)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 126: `object@1866` (baris 1866)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 127: `object@1868` (baris 1868)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 128: `object@1869` (baris 1869)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 129: `object@1874` (baris 1874)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 130: `object@1875` (baris 1875)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 131: `object@1876` (baris 1876)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 132: `object@1877` (baris 1877)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 133: `object@1879` (baris 1879)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri/RefleksiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri/RefleksiPage.tsx)

#### Peta 1: `object@85` (baris 85)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@156` (baris 156)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@157` (baris 157)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 4: `object@196` (baris 196)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `object@197` (baris 197)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 6: `object@198` (baris 198)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `object@199` (baris 199)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 8: `object@201` (baris 201)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 9: `object@250` (baris 250)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1], ja=[]

#### Peta 10: `object@251` (baris 251)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 11: `object@252` (baris 252)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 12: `object@253` (baris 253)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 13: `object@254` (baris 254)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 14: `object@255` (baris 255)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 15: `object@256` (baris 256)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 16: `object@257` (baris 257)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 17: `object@404` (baris 404)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3], ja=[]

#### Peta 18: `object@405` (baris 405)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 19: `object@406` (baris 406)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 20: `object@407` (baris 407)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 21: `object@408` (baris 408)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 22: `object@409` (baris 409)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 23: `object@410` (baris 410)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 24: `object@411` (baris 411)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 25: `object@412` (baris 412)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 26: `object@413` (baris 413)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 27: `object@418` (baris 418)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 28: `object@587` (baris 587)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[2], ja=[]

#### Peta 29: `object@588` (baris 588)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 30: `object@589` (baris 589)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 31: `object@590` (baris 590)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 32: `object@591` (baris 591)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 33: `object@592` (baris 592)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 34: `object@593` (baris 593)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 35: `object@594` (baris 594)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 36: `object@743` (baris 743)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[4], ja=[]

#### Peta 37: `object@744` (baris 744)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 38: `object@745` (baris 745)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 39: `object@746` (baris 746)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 40: `object@747` (baris 747)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 41: `object@748` (baris 748)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 42: `object@749` (baris 749)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 43: `object@750` (baris 750)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 44: `object@751` (baris 751)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 45: `object@752` (baris 752)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 46: `object@757` (baris 757)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 47: `object@1030` (baris 1030)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 48: `object@1031` (baris 1031)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 49: `object@1032` (baris 1032)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 50: `object@1033` (baris 1033)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 51: `object@1034` (baris 1034)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 52: `object@1035` (baris 1035)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 53: `object@1036` (baris 1036)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 54: `object@1037` (baris 1037)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 55: `object@1038` (baris 1038)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 56: `object@1039` (baris 1039)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 57: `object@1040` (baris 1040)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 58: `object@1041` (baris 1041)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 59: `object@1042` (baris 1042)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 60: `object@1043` (baris 1043)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 61: `object@1177` (baris 1177)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 62: `object@1178` (baris 1178)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 63: `object@1179` (baris 1179)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 64: `object@1180` (baris 1180)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 65: `object@1181` (baris 1181)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 66: `object@1182` (baris 1182)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 67: `object@1183` (baris 1183)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 68: `object@1184` (baris 1184)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 69: `object@1185` (baris 1185)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 70: `object@1186` (baris 1186)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 71: `object@1187` (baris 1187)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 72: `object@1188` (baris 1188)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 73: `object@1189` (baris 1189)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 74: `object@1190` (baris 1190)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 75: `object@1191` (baris 1191)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 76: `object@1330` (baris 1330)
Bahasa: id, en, ja
- **Angka berbeda pada `pageMeta` (id vs ja):** id=[9], ja=[]

#### Peta 77: `object@1363` (baris 1363)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 78: `object@1364` (baris 1364)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 79: `object@1365` (baris 1365)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 80: `object@1366` (baris 1366)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 81: `object@1367` (baris 1367)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 82: `object@1368` (baris 1368)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 83: `object@1369` (baris 1369)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 84: `object@1370` (baris 1370)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 85: `object@1371` (baris 1371)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 86: `object@1374` (baris 1374)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1], ja=[]

#### Peta 87: `object@1375` (baris 1375)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 88: `object@1376` (baris 1376)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 89: `object@1377` (baris 1377)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 90: `object@1378` (baris 1378)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 91: `object@1379` (baris 1379)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 92: `object@1381` (baris 1381)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 93: `object@1382` (baris 1382)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 94: `object@1383` (baris 1383)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 95: `object@1384` (baris 1384)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3, 3, 1], ja=[3, 3]

#### Peta 96: `object@1386` (baris 1386)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 97: `object@1389` (baris 1389)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[2, 3], ja=[]

#### Peta 98: `object@1390` (baris 1390)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[8, 4, 3], ja=[8, 4]

#### Peta 99: `object@1391` (baris 1391)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 100: `object@1392` (baris 1392)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 101: `object@1393` (baris 1393)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 102: `object@1394` (baris 1394)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 103: `object@1395` (baris 1395)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 104: `object@1398` (baris 1398)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3, 5], ja=[5]

#### Peta 105: `object@1399` (baris 1399)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[6, 3, 5], ja=[6, 3]

#### Peta 106: `object@1400` (baris 1400)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1], ja=[]

#### Peta 107: `object@1401` (baris 1401)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 108: `object@1402` (baris 1402)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[2, 6, 3, 5], ja=[6, 3]

#### Peta 109: `object@1403` (baris 1403)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 110: `object@1404` (baris 1404)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 111: `object@1405` (baris 1405)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 112: `object@1408` (baris 1408)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 113: `object@1409` (baris 1409)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 114: `object@1412` (baris 1412)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 115: `object@1413` (baris 1413)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 116: `object@1414` (baris 1414)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 117: `object@1415` (baris 1415)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 118: `object@1416` (baris 1416)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 119: `object@1417` (baris 1417)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 120: `object@1418` (baris 1418)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 121: `object@1419` (baris 1419)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 122: `object@1420` (baris 1420)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 123: `object@1421` (baris 1421)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 124: `object@1422` (baris 1422)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 125: `object@1423` (baris 1423)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 126: `object@1424` (baris 1424)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 127: `object@1425` (baris 1425)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 128: `object@1426` (baris 1426)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 129: `object@1427` (baris 1427)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 130: `object@1428` (baris 1428)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 131: `object@1429` (baris 1429)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 132: `object@1430` (baris 1430)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[0, 0], ja=[]

#### Peta 133: `object@1431` (baris 1431)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 134: `object@1432` (baris 1432)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 135: `object@1433` (baris 1433)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 136: `object@1436` (baris 1436)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 137: `object@1437` (baris 1437)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1], ja=[]

#### Peta 138: `object@1438` (baris 1438)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3], ja=[]

#### Peta 139: `object@1439` (baris 1439)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 140: `object@1440` (baris 1440)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3], ja=[]

#### Peta 141: `object@1443` (baris 1443)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 142: `object@1444` (baris 1444)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[4], ja=[]

#### Peta 143: `object@1445` (baris 1445)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1, 3], ja=[]

#### Peta 144: `object@1446` (baris 1446)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3, 6], ja=[6]

#### Peta 145: `object@1447` (baris 1447)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1], ja=[]

#### Peta 146: `object@1450` (baris 1450)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 147: `object@1451` (baris 1451)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[5], ja=[]

#### Peta 148: `object@1452` (baris 1452)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1, 3, -2, 3], ja=[3, -2]

#### Peta 149: `object@1453` (baris 1453)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1, 3, -2], ja=[3, -2]

#### Peta 150: `object@1454` (baris 1454)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 151: `object@1455` (baris 1455)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[1], ja=[]

#### Peta 152: `object@1456` (baris 1456)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 153: `object@1457` (baris 1457)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[2, 3], ja=[]

#### Peta 154: `object@1458` (baris 1458)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3, 6], ja=[6]

#### Peta 155: `object@1459` (baris 1459)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[9], ja=[]

#### Peta 156: `object@1460` (baris 1460)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 157: `object@1461` (baris 1461)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 158: `object@1462` (baris 1462)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 159: `object@1465` (baris 1465)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 160: `object@1466` (baris 1466)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 161: `object@1468` (baris 1468)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 162: `object@1469` (baris 1469)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 163: `object@1470` (baris 1470)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 164: `object@1471` (baris 1471)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 165: `object@1472` (baris 1472)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 166: `object@1473` (baris 1473)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 167: `object@1475` (baris 1475)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 168: `object@1477` (baris 1477)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 169: `object@1477` (baris 1477)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 170: `object@1478` (baris 1478)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 171: `object@1478` (baris 1478)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 172: `object@1479` (baris 1479)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 173: `object@1479` (baris 1479)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 174: `object@1480` (baris 1480)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 175: `object@1480` (baris 1480)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 176: `object@1482` (baris 1482)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 177: `object@1487` (baris 1487)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 178: `object@1488` (baris 1488)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 179: `object@1493` (baris 1493)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 180: `object@1494` (baris 1494)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 181: `object@1499` (baris 1499)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 182: `object@1500` (baris 1500)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 183: `object@1505` (baris 1505)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 184: `object@1506` (baris 1506)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 185: `object@1509` (baris 1509)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 186: `object@1510` (baris 1510)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 187: `object@1516` (baris 1516)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 188: `object@1517` (baris 1517)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 189: `object@1518` (baris 1518)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[6], ja=[]

#### Peta 190: `object@1519` (baris 1519)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri/RotasiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri/RotasiPage.tsx)

#### Peta 1: `object@1291` (baris 1291)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@1292` (baris 1292)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 3: `object@1293` (baris 1293)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[9], ja=[]

#### Peta 4: `object@1294` (baris 1294)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `object@1295` (baris 1295)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 6: `object@1300` (baris 1300)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `object@1301` (baris 1301)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 8: `object@1302` (baris 1302)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 9: `object@1303` (baris 1303)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 10: `object@1304` (baris 1304)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 11: `object@1305` (baris 1305)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 12: `object@1306` (baris 1306)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 13: `object@1308` (baris 1308)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 14: `object@1309` (baris 1309)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 15: `object@1310` (baris 1310)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 16: `object@1311` (baris 1311)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 17: `object@1313` (baris 1313)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 18: `object@1314` (baris 1314)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 19: `object@1315` (baris 1315)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 20: `object@1316` (baris 1316)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 21: `object@1317` (baris 1317)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 22: `object@1319` (baris 1319)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 23: `object@1319` (baris 1319)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 24: `object@1320` (baris 1320)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 25: `object@1320` (baris 1320)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 26: `object@1321` (baris 1321)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 27: `object@1321` (baris 1321)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 28: `object@1322` (baris 1322)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 29: `object@1322` (baris 1322)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 30: `object@1324` (baris 1324)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 31: `object@1329` (baris 1329)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 32: `object@1330` (baris 1330)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 33: `object@1335` (baris 1335)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 34: `object@1336` (baris 1336)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[270, 90], ja=[270]

#### Peta 35: `object@1341` (baris 1341)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 36: `object@1342` (baris 1342)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 37: `object@1347` (baris 1347)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 38: `object@1348` (baris 1348)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 39: `object@1351` (baris 1351)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 40: `object@1352` (baris 1352)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3, 90, 90, 180], ja=[90, 90, 180]

#### Peta 41: `object@1358` (baris 1358)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 42: `object@1359` (baris 1359)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 43: `object@1360` (baris 1360)
Bahasa: id, en, ja
- **Angka berbeda pada `$value` (id vs ja):** id=[3], ja=[]

#### Peta 44: `object@1361` (baris 1361)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 45: `object@1366` (baris 1366)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 46: `object@1367` (baris 1367)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 47: `object@1368` (baris 1368)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 48: `object@1369` (baris 1369)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

### [`../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri/TranslasiPage.tsx`](../artifacts/numatik/src/pages/buku-animasi-matematika/transformasi-geometri/TranslasiPage.tsx)

#### Peta 1: `object@108` (baris 108)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 2: `object@191` (baris 191)
Bahasa: id, en, ja
- **Angka berbeda pada `note` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `title` (id vs ja):** id=[1], ja=[]

#### Peta 3: `object@302` (baris 302)
Bahasa: id, en, ja
- **Angka berbeda pada `title` (id vs ja):** id=[2], ja=[]

#### Peta 4: `object@416` (baris 416)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 5: `object@417` (baris 417)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 6: `object@499` (baris 499)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 7: `object@500` (baris 500)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 8: `object@742` (baris 742)
Bahasa: id, en, ja
- Tidak ditemukan ketidaksesuaian key, panjang array, atau angka.

#### Peta 9: `object@963` (baris 963)
Bahasa: id, en, ja
- **Angka berbeda pada `ex2t1hdr` (id vs en):** id=[1, 3, -2], en=[3, -2]
- **Angka berbeda pada `ex2t1result` (id vs en):** id=[1, 7, 0], en=[7, 0]
- **Angka berbeda pada `ex2t2hdr` (id vs en):** id=[2, -1, 4], en=[-1, 4]
- **Angka berbeda pada `ex2t2sub` (id vs en):** id=[1, 7, 0], en=[7, 0]
- **Angka berbeda pada `ex1title` (id vs ja):** id=[1], ja=[]
- **Angka berbeda pada `ex2t1hdr` (id vs ja):** id=[1, 3, -2], ja=[3, -2]
- **Angka berbeda pada `ex2t1result` (id vs ja):** id=[1, 7, 0], ja=[7, 0]
- **Angka berbeda pada `ex2t2hdr` (id vs ja):** id=[2, -1, 4], ja=[-1, 4]
- **Angka berbeda pada `ex2t2sub` (id vs ja):** id=[1, 7, 0], ja=[7, 0]
- **Angka berbeda pada `ex2title` (id vs ja):** id=[2], ja=[]
- **Angka berbeda pada `ex3title` (id vs ja):** id=[3], ja=[]
- **Angka berbeda pada `jenis4` (id vs ja):** id=[4], ja=[]
- **Angka berbeda pada `overviewMeta` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `pageMeta` (id vs ja):** id=[9], ja=[]
- **Angka berbeda pada `soalC` (id vs ja):** id=[-3, 2, 4, 2], ja=[4, 2, -3, 2]
