import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { BookOpen, Lightbulb, Calculator, Target } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { pickLang } from "@/lib/pickLang";

const id = {
  pageTitle: "MENGHITUNG PANJANG RUSUK BANGUN DATAR YANG SEBANGUN",
  pageSubtitle: "Kelas 9 · Kesebangunan dan Kekongruenan · Materi Matematika",
  introHeader: "📐 Cara Menghitung Rusuk yang Belum Diketahui",
  introParagraph:
    "Kalau dua bangun sudah terbukti sebangun, kita bisa memanfaatkan sifat rusuk-rusuk sebanding untuk mencari panjang rusuk yang belum diketahui. Caranya sangat sistematis!",
  generalSteps: "Langkah Umum:",
  identifyPairs: "Identifikasi pasangan rusuk yang bersesuaian",
  writeRatios: "Bentuk persamaan perbandingan:",
  crossMultiply: "Gunakan perkalian silang untuk mencari rusuk yang belum diketahui",
  conceptHeader: "📘 Konsep: Rumus Perbandingan Rusuk",
  keyIdea: "🎯 Ringkasan Intisari",
  diagramTrapeziumAlt: "Dua trapesium sebangun dengan faktor skala k",
  diagramExampleOneAlt: "Dua trapesium sebangun dengan panjang sisi yang diketahui",
  diagramExampleTwoAlt: "Dua segiempat sebangun dengan sisi dan sudut yang diketahui",
  diagramShadowAlt: "Tiang dan pohon membentuk segitiga dengan bayangan masing-masing",
  diagramScale: "dengan faktor skala k",
  similarityStatement: "Jika",
  similarityThen: ", maka berlaku:",
  threeKnown:
    "Dari persamaan tersebut, jika 3 nilai diketahui, nilai ke-4 dapat dicari dengan perkalian silang:",
  shadowIllustrationTitle: "🌳 ILUSTRASI BAYANGAN:",
  shadowPeopleAlt: "Ilustrasi bayangan orang dan pohon",
  shadowCaseTitle: "Kasus Bayangan (Kontekstual):",
  shadowVariableLegend:
    "h₁ dan h₂ adalah tinggi tiang dan pohon; s₁ dan s₂ adalah panjang bayangannya.",
  unitTip:
    "Tips: Pastikan satuan panjang sama sebelum menghitung. Jika ada ukuran dalam cm dan meter, ubah semuanya ke satuan yang sama.",
  animationHeader: "🎮 Animasi Interaktif — Bayangan dan Segitiga Sebangun",
  animationDescription:
    "Geser pengatur untuk mengubah sudut matahari. Perhatikan bahwa panjang bayangan berubah, tetapi perbandingan tinggi tiang dan pohon selalu sama dengan perbandingan panjang bayangannya.",
  treeShadowLabel: "bayangan pohon",
  poleShadowLabel: "bayangan tiang",
  sunLabel: "☀️ matahari",
  shadowSliderLabel: "☀️ Geser untuk mengubah sudut matahari",
  sunLow: "40° (matahari rendah)",
  sunHigh: "75° (matahari tinggi)",
  ratioConstantLabel: "Perbandingan selalu konstan — berapa pun sudutnya:",
  heightRatioLabel: "tinggi tiang / tinggi pohon",
  shadowRatioLabel: "bayangan tiang / bayangan pohon",
  doubleShadowLabel: "✦ Bayangan pohon selalu dua kali bayangan tiang",
  examplesHeader: "📝 Contoh Soal — Menghitung Panjang Rusuk",
  easy: "Mudah",
  medium: "Sedang",
  hard: "Sulit",
  exampleOne: "Contoh 1",
  exampleTwo: "Contoh 2",
  exampleThree: "Contoh 3",
  exampleFour: "Contoh 4",
  solution: "PEMBAHASAN:",
  exampleOneQuestion:
    "Trapesium ABCD sebangun dengan trapesium PQRS. Diketahui AB = 8 cm, DC = 6 cm, BC = 5 cm, AD = 4 cm, dan PQ = 16 cm. Tentukan panjang QR, RS, dan PS!",
  exampleOneOpening:
    "Karena ABCD sebangun dengan PQRS, sisi-sisi yang bersesuaian membentuk perbandingan yang sama:",
  findQR: "Mencari QR (AB bersesuaian dengan PQ, BC bersesuaian dengan QR):",
  findRS: "Mencari RS (DC bersesuaian dengan RS):",
  findPS: "Mencari PS (AD bersesuaian dengan PS):",
  exampleOneResult: "QR = 10 cm, RS = 12 cm, PS = 8 cm.",
  exampleTwoQuestion:
    "Segiempat ABCD sebangun dengan PQRS. Diketahui AD = 4 cm, PS = 6 cm, CD = 3 cm, dan ∠A = 75°. Tentukan panjang RS dan besar ∠P!",
  exampleTwoFindRS: "Cari RS: AD bersesuaian dengan PS, dan CD bersesuaian dengan RS:",
  exampleTwoFindAngle: "Cari ∠P: sudut-sudut yang bersesuaian sama besar:",
  exampleTwoResult: "RS = 4,5 cm dan ∠P = 75°.",
  exampleTwoDecimal: "4{,}5",
  exampleThreeQuestion:
    "Pada siang hari, sebuah tiang bendera setinggi 4 m memiliki bayangan sepanjang 2 m. Pada saat yang sama, sebuah pohon memiliki bayangan sepanjang 3 m. Tentukan tinggi pohon tersebut!",
  exampleThreeConcept:
    "Konsep: Tiang dan bayangannya membentuk segitiga yang sebangun dengan pohon dan bayangannya karena sudut elevasi matahari sama.",
  exampleThreeAlt: "Ilustrasi bayangan tiang dan pohon",
  exampleThreeVariableLegend:
    "h₁ dan h₂ menyatakan tinggi tiang dan pohon; s₁ dan s₂ menyatakan panjang bayangannya.",
  solve: "Selesaikan:",
  exampleThreeResult: "Tinggi pohon = 6 m.",
  exampleFourQuestion:
    "Segitiga siku-siku ABC dan RPQ sebangun. Pada ABC, AB = 5 cm, AC = 12 cm, dan BC = 13 cm. Pada RPQ, RQ = 24 cm. Tentukan RP dan PQ! Perhatikan bahwa orientasi kedua segitiga pada gambar berbeda.",
  diagramDifferentDirections: "Orientasi kedua segitiga berbeda",
  diagramDifferentDirectionsAlt:
    "Dua segitiga siku-siku sebangun dengan orientasi berbeda",
  diagramSameDirectionAlt:
    "Gambar ulang dua segitiga siku-siku dengan orientasi yang sama",
  exampleFourStepOne:
    "1. Tentukan pasangan titik yang bersesuaian. Karena kedua segitiga sama-sama siku-siku, sudut siku-siku A bersesuaian dengan R. Urutan nama segitiga menunjukkan bahwa AB bersesuaian dengan RP, AC dengan RQ, dan BC dengan PQ.",
  exampleFourStepTwo:
    "2. Gambar ulang dengan orientasi yang sama. Memutar atau membalik gambar tidak mengubah ukuran segitiga. Gambar ulang membantu melihat pasangan sisi yang bersesuaian dengan jelas:",
  exampleFourStepThree:
    "3. Hitung faktor skala. Sisi AC bersesuaian dengan RQ.",
  exampleFourStepFour: "4. Tentukan panjang sisi yang ditanyakan.",
  exampleFourResult:
    "Jadi, RP = 10 cm dan PQ = 26 cm. Cocokkan sisi berdasarkan pasangan titik, bukan orientasi gambar.",
  summaryTitle: "📋 Rangkuman — Menghitung Rusuk Bangun Sebangun",
  summaryConcept: "Konsep",
  summaryFormula: "Rumus / Cara",
  scaleFactor: "Faktor Skala",
  sideRatio: "Perbandingan Rusuk",
  findNewSide: "Mencari Rusuk Baru",
  angle: "Sudut",
  angleRule:
    "Semua sudut yang bersesuaian selalu sama besar, meskipun k ≠ 1.",
  summaryVariableLegend:
    "s_L adalah rusuk pada bangun yang lebih besar dan s_S adalah rusuk bersesuaian pada bangun yang lebih kecil.",
  systematicSteps:
    "📌 Langkah sistematis: (1) Tentukan pasangan sisi bersesuaian → (2) Hitung k dari pasangan yang diketahui → (3) Gunakan k untuk mencari sisi yang ditanyakan.",
  shadowSummary:
    "📌 Soal bayangan: Jika sudut elevasi matahari sama, tinggi dan panjang bayangan memiliki perbandingan yang konstan.",
  validateRatios:
    "📌 Validasi: Semua perbandingan sisi bersesuaian harus menghasilkan nilai k yang sama.",
  tipsTitle: "💡 Tips & Trik",
  tipPairs:
    "Identifikasi sisi yang bersesuaian terlebih dahulu: sebelum menghitung, gambar atau tandai sisi A yang bersesuaian dengan sisi P. Kesalahan umum adalah memasangkan sisi yang salah.",
  tipCrossMultiply: "Gunakan perkalian silang agar perhitungan lebih efisien:",
  tipShadows:
    "Soal bayangan atau cermin: buat perbandingan tinggi dan panjang bayangan. Sudut matahari yang sama menghasilkan kesebangunan berdasarkan AA.",
  tipCheck:
    "Periksa kewajaran jawaban: jika k > 1, bangun kedua lebih besar; jika k < 1, bangun kedua lebih kecil. Pastikan jawaban sesuai dengan gambar soal.",
  conclusionTitle: "✅ Kesimpulan",
  conclusionIntro:
    "Menghitung rusuk bangun sebangun bermuara pada satu kunci: faktor skala k.",
  conclusionFindK: "Temukan k dari sepasang sisi yang diketahui.",
  conclusionUseK: "Gunakan k untuk menghitung sisi-sisi lainnya.",
  conclusionAngles:
    "Sudut tidak perlu dihitung ulang — sudut yang bersesuaian selalu sama besar.",
  conclusionApplications:
    "Peta, foto, model miniatur, dan bayangan menerapkan prinsip ini.",
  conclusionNext:
    "Penguasaan konsep ini membantu mempelajari transformasi geometri, skala peta, dan trigonometri.",
  backLabel: "← Kembali ke Kesebangunan dan Kekongruenan",
};
type T = typeof id;

const en: T = {
  pageTitle: "FINDING SIDE LENGTHS IN SIMILAR PLANE FIGURES",
  pageSubtitle: "Grade 9 · Similarity and Congruence · Mathematics",
  introHeader: "📐 Finding an Unknown Side Length",
  introParagraph:
    "Once two figures are known to be similar, we can use the proportionality of corresponding sides to find an unknown side length. The method is systematic.",
  generalSteps: "General method:",
  identifyPairs: "Identify pairs of corresponding sides.",
  writeRatios: "Set up the proportion:",
  crossMultiply: "Use cross multiplication to find the unknown side.",
  conceptHeader: "📘 Concept: Ratios of Corresponding Sides",
  keyIdea: "🎯 Key idea",
  diagramTrapeziumAlt: "Two similar trapezoids with scale factor k",
  diagramExampleOneAlt: "Two similar trapezoids with known side lengths",
  diagramExampleTwoAlt: "Two similar quadrilaterals with known sides and angles",
  diagramShadowAlt: "A pole and a tree form triangles with their shadows",
  diagramScale: "with scale factor k",
  similarityStatement: "If",
  similarityThen: ", then:",
  threeKnown:
    "If 3 values are known, the 4th can be found by cross multiplication:",
  shadowIllustrationTitle: "🌳 SHADOW ILLUSTRATION:",
  shadowPeopleAlt: "Illustration of a person and a tree with their shadows",
  shadowCaseTitle: "Shadow problem:",
  shadowVariableLegend:
    "h₁ and h₂ are the pole and tree heights; s₁ and s₂ are their shadow lengths.",
  unitTip:
    "Tip: Make sure all lengths use the same unit before calculating. Convert any centimetres and metres to one common unit.",
  animationHeader: "🎮 Interactive Animation — Shadows and Similar Triangles",
  animationDescription:
    "Move the slider to change the sun's angle. Notice that shadow lengths change, but the ratio of the pole's height to the tree's height stays equal to the ratio of their shadow lengths.",
  treeShadowLabel: "tree shadow",
  poleShadowLabel: "pole shadow",
  sunLabel: "☀️ sun",
  shadowSliderLabel: "☀️ Move to change the sun's angle",
  sunLow: "40° (low sun)",
  sunHigh: "75° (high sun)",
  ratioConstantLabel: "The ratios stay constant at every angle:",
  heightRatioLabel: "pole height / tree height",
  shadowRatioLabel: "pole shadow / tree shadow",
  doubleShadowLabel: "✦ The tree's shadow is always twice the pole's shadow",
  examplesHeader: "📝 Worked Examples — Finding Side Lengths",
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  exampleOne: "Example 1",
  exampleTwo: "Example 2",
  exampleThree: "Example 3",
  exampleFour: "Example 4",
  solution: "SOLUTION:",
  exampleOneQuestion:
    "Trapezoid ABCD is similar to trapezoid PQRS. Given AB = 8 cm, DC = 6 cm, BC = 5 cm, AD = 4 cm, and PQ = 16 cm. Find QR, RS, and PS.",
  exampleOneOpening:
    "Since ABCD is similar to PQRS, corresponding sides have equal ratios:",
  findQR: "Find QR (AB corresponds to PQ, and BC corresponds to QR):",
  findRS: "Find RS (DC corresponds to RS):",
  findPS: "Find PS (AD corresponds to PS):",
  exampleOneResult: "QR = 10 cm, RS = 12 cm, and PS = 8 cm.",
  exampleTwoQuestion:
    "Quadrilateral ABCD is similar to PQRS. Given AD = 4 cm, PS = 6 cm, CD = 3 cm, and ∠A = 75°. Find RS and ∠P.",
  exampleTwoFindRS: "Find RS: AD corresponds to PS, and CD corresponds to RS:",
  exampleTwoFindAngle: "Find ∠P: corresponding angles are equal:",
  exampleTwoResult: "RS = 4.5 cm and ∠P = 75°.",
  exampleTwoDecimal: "4.5",
  exampleThreeQuestion:
    "At midday, a 4 m flagpole casts a 2 m shadow. At the same time, a tree casts a 3 m shadow. Find the height of the tree.",
  exampleThreeConcept:
    "Concept: The pole and its shadow form a triangle similar to the triangle formed by the tree and its shadow, because the sun's angle of elevation is the same.",
  exampleThreeAlt: "Illustration of a flagpole and a tree with their shadows",
  exampleThreeVariableLegend:
    "h₁ and h₂ denote the pole and tree heights; s₁ and s₂ denote their shadow lengths.",
  solve: "Solve:",
  exampleThreeResult: "Tree height = 6 m.",
  exampleFourQuestion:
    "Right triangles ABC and RPQ are similar. In ABC, AB = 5 cm, AC = 12 cm, and BC = 13 cm. In RPQ, RQ = 24 cm. Find RP and PQ. Note that the triangles have different orientations in the diagram.",
  diagramDifferentDirections: "The triangles have different orientations",
  diagramDifferentDirectionsAlt:
    "Two similar right triangles with different orientations",
  diagramSameDirectionAlt:
    "The same two similar right triangles redrawn with the same orientation",
  exampleFourStepOne:
    "1. Identify corresponding vertices. Both triangles are right-angled, so A corresponds to R. From the order of the triangle names, AB corresponds to RP, AC to RQ, and BC to PQ.",
  exampleFourStepTwo:
    "2. Redraw the triangles with the same orientation. Rotating or reflecting a figure does not change its size. The redraw makes the corresponding sides easier to see:",
  exampleFourStepThree:
    "3. Find the scale factor. Side AC corresponds to RQ.",
  exampleFourStepFour: "4. Find the requested side lengths.",
  exampleFourResult:
    "Therefore, RP = 10 cm and PQ = 26 cm. Match sides by corresponding vertices, not by the figures' orientation.",
  summaryTitle: "📋 Summary — Finding Sides in Similar Figures",
  summaryConcept: "Concept",
  summaryFormula: "Formula / Method",
  scaleFactor: "Scale factor",
  sideRatio: "Side ratios",
  findNewSide: "Finding a side",
  angle: "Angles",
  angleRule:
    "All corresponding angles remain equal, even when k ≠ 1.",
  summaryVariableLegend:
    "s_L is a side of the larger figure; s_S is its corresponding side in the smaller figure.",
  systematicSteps:
    "📌 Method: (1) Identify corresponding sides → (2) Find k using a known pair → (3) Use k to find the requested side.",
  shadowSummary:
    "📌 Shadow problems: When the sun's angle of elevation is the same, heights and shadow lengths have a constant ratio.",
  validateRatios:
    "📌 Check: Every ratio of corresponding sides must give the same value of k.",
  tipsTitle: "💡 Tips and Tricks",
  tipPairs:
    "Identify corresponding sides first: before calculating, mark which side of figure A corresponds to which side of figure P. A common mistake is pairing the wrong sides.",
  tipCrossMultiply: "Use cross multiplication to make calculations efficient:",
  tipShadows:
    "Shadow or mirror problems: compare height with shadow length. The same sun angle gives similarity by AA.",
  tipCheck:
    "Check whether the answer makes sense: if k > 1, the second figure is larger; if k < 1, it is smaller. Make sure the result matches the diagram.",
  conclusionTitle: "✅ Conclusion",
  conclusionIntro:
    "Finding side lengths in similar figures comes down to one key idea: the scale factor k.",
  conclusionFindK: "Find k using a pair of known corresponding sides.",
  conclusionUseK: "Use k to calculate the remaining sides.",
  conclusionAngles:
    "There is no need to recalculate angles — corresponding angles are always equal.",
  conclusionApplications:
    "Maps, photographs, scale models, and shadows all use this principle.",
  conclusionNext:
    "Mastering this idea helps with geometric transformations, map scales, and trigonometry.",
  backLabel: "← Back to Similarity and Congruence",
};

const msMY: T = {
  pageTitle: "MENGIRA PANJANG SISI BENTUK SATAH YANG SERUPA",
  pageSubtitle: "Tingkatan 3 · Keserupaan dan Kekongruenan · Matematik",
  introHeader: "📐 Cara Mengira Sisi yang Belum Diketahui",
  introParagraph:
    "Apabila dua bentuk telah dibuktikan serupa, kita boleh menggunakan perkadaran sisi sepadan untuk mencari panjang sisi yang belum diketahui. Caranya sistematik.",
  generalSteps: "Langkah umum:",
  identifyPairs: "Kenal pasti pasangan sisi sepadan.",
  writeRatios: "Bentuk persamaan nisbah:",
  crossMultiply: "Gunakan pendaraban silang untuk mencari sisi yang belum diketahui.",
  conceptHeader: "📘 Konsep: Nisbah Sisi Sepadan",
  keyIdea: "🎯 Idea utama",
  diagramTrapeziumAlt: "Dua trapezium serupa dengan faktor skala k",
  diagramExampleOneAlt: "Dua trapezium serupa dengan panjang sisi yang diketahui",
  diagramExampleTwoAlt: "Dua segi empat serupa dengan sisi dan sudut yang diketahui",
  diagramShadowAlt: "Tiang dan pokok membentuk segi tiga bersama bayang-bayangnya",
  diagramScale: "dengan faktor skala k",
  similarityStatement: "Jika",
  similarityThen: ", maka:",
  threeKnown:
    "Jika tiga nilai diketahui, nilai keempat boleh dicari dengan pendaraban silang:",
  shadowIllustrationTitle: "🌳 ILUSTRASI BAYANG-BAYANG:",
  shadowPeopleAlt: "Ilustrasi seseorang dan pokok bersama bayang-bayangnya",
  shadowCaseTitle: "Soalan bayang-bayang:",
  shadowVariableLegend:
    "h₁ dan h₂ ialah tinggi tiang dan pokok; s₁ dan s₂ ialah panjang bayang-bayangnya.",
  unitTip:
    "Petua: Pastikan semua panjang menggunakan unit yang sama sebelum mengira. Tukarkan sentimeter dan meter kepada satu unit yang sama.",
  animationHeader: "🎮 Animasi Interaktif — Bayang-bayang dan Segi Tiga Serupa",
  animationDescription:
    "Gerakkan peluncur untuk mengubah sudut matahari. Panjang bayang-bayang berubah, tetapi nisbah tinggi tiang kepada tinggi pokok kekal sama dengan nisbah panjang bayang-bayangnya.",
  treeShadowLabel: "bayang-bayang pokok",
  poleShadowLabel: "bayang-bayang tiang",
  sunLabel: "☀️ matahari",
  shadowSliderLabel: "☀️ Gerakkan untuk mengubah sudut matahari",
  sunLow: "40° (matahari rendah)",
  sunHigh: "75° (matahari tinggi)",
  ratioConstantLabel: "Nisbah sentiasa tetap pada setiap sudut:",
  heightRatioLabel: "tinggi tiang / tinggi pokok",
  shadowRatioLabel: "bayang-bayang tiang / bayang-bayang pokok",
  doubleShadowLabel: "✦ Bayang-bayang pokok sentiasa dua kali panjang bayang-bayang tiang",
  examplesHeader: "📝 Contoh Berjawab — Mencari Panjang Sisi",
  easy: "Mudah",
  medium: "Sederhana",
  hard: "Sukar",
  exampleOne: "Contoh 1",
  exampleTwo: "Contoh 2",
  exampleThree: "Contoh 3",
  exampleFour: "Contoh 4",
  solution: "PENYELESAIAN:",
  exampleOneQuestion:
    "Trapezium ABCD serupa dengan trapezium PQRS. Diberi AB = 8 cm, DC = 6 cm, BC = 5 cm, AD = 4 cm, dan PQ = 16 cm. Cari panjang QR, RS dan PS.",
  exampleOneOpening:
    "Oleh sebab ABCD serupa dengan PQRS, sisi sepadan mempunyai nisbah yang sama:",
  findQR: "Cari QR (AB sepadan dengan PQ, dan BC sepadan dengan QR):",
  findRS: "Cari RS (DC sepadan dengan RS):",
  findPS: "Cari PS (AD sepadan dengan PS):",
  exampleOneResult: "QR = 10 cm, RS = 12 cm dan PS = 8 cm.",
  exampleTwoQuestion:
    "Segi empat ABCD serupa dengan PQRS. Diberi AD = 4 cm, PS = 6 cm, CD = 3 cm dan ∠A = 75°. Cari panjang RS dan ∠P.",
  exampleTwoFindRS: "Cari RS: AD sepadan dengan PS, dan CD sepadan dengan RS:",
  exampleTwoFindAngle: "Cari ∠P: sudut sepadan adalah sama besar:",
  exampleTwoResult: "RS = 4.5 cm dan ∠P = 75°.",
  exampleTwoDecimal: "4.5",
  exampleThreeQuestion:
    "Pada waktu tengah hari, tiang bendera setinggi 4 m menghasilkan bayang-bayang sepanjang 2 m. Pada masa yang sama, sebatang pokok menghasilkan bayang-bayang sepanjang 3 m. Cari tinggi pokok itu.",
  exampleThreeConcept:
    "Konsep: Tiang dan bayang-bayangnya membentuk segi tiga yang serupa dengan segi tiga yang dibentuk oleh pokok dan bayang-bayangnya kerana sudut dongakan matahari adalah sama.",
  exampleThreeAlt: "Ilustrasi tiang bendera dan pokok bersama bayang-bayangnya",
  exampleThreeVariableLegend:
    "h₁ dan h₂ mewakili tinggi tiang dan pokok; s₁ dan s₂ mewakili panjang bayang-bayangnya.",
  solve: "Selesaikan:",
  exampleThreeResult: "Tinggi pokok = 6 m.",
  exampleFourQuestion:
    "Segi tiga bersudut tegak ABC dan RPQ adalah serupa. Bagi ABC, AB = 5 cm, AC = 12 cm dan BC = 13 cm. Bagi RPQ, RQ = 24 cm. Cari RP dan PQ. Perhatikan bahawa orientasi kedua-dua segi tiga dalam rajah berbeza.",
  diagramDifferentDirections: "Orientasi kedua-dua segi tiga berbeza",
  diagramDifferentDirectionsAlt:
    "Dua segi tiga bersudut tegak yang serupa dengan orientasi berbeza",
  diagramSameDirectionAlt:
    "Dua segi tiga bersudut tegak serupa yang dilukis semula dengan orientasi yang sama",
  exampleFourStepOne:
    "1. Kenal pasti bucu sepadan. Kedua-dua segi tiga bersudut tegak, jadi A sepadan dengan R. Mengikut susunan nama segi tiga, AB sepadan dengan RP, AC dengan RQ, dan BC dengan PQ.",
  exampleFourStepTwo:
    "2. Lukis semula dengan orientasi yang sama. Memutar atau mencerminkan rajah tidak mengubah saiz segi tiga. Lukisan semula memudahkan kita melihat sisi sepadan:",
  exampleFourStepThree:
    "3. Cari faktor skala. Sisi AC sepadan dengan RQ.",
  exampleFourStepFour: "4. Cari panjang sisi yang diminta.",
  exampleFourResult:
    "Jadi, RP = 10 cm dan PQ = 26 cm. Padankan sisi berdasarkan bucu sepadan, bukan orientasi rajah.",
  summaryTitle: "📋 Ringkasan — Mencari Sisi Bentuk Serupa",
  summaryConcept: "Konsep",
  summaryFormula: "Rumus / Cara",
  scaleFactor: "Faktor skala",
  sideRatio: "Nisbah sisi",
  findNewSide: "Mencari sisi",
  angle: "Sudut",
  angleRule:
    "Semua sudut sepadan sentiasa sama besar, walaupun k ≠ 1.",
  summaryVariableLegend:
    "s_L ialah sisi pada bentuk yang lebih besar dan s_S ialah sisi sepadan pada bentuk yang lebih kecil.",
  systematicSteps:
    "📌 Kaedah: (1) Kenal pasti sisi sepadan → (2) Cari k menggunakan pasangan yang diketahui → (3) Gunakan k untuk mencari sisi yang diminta.",
  shadowSummary:
    "📌 Soalan bayang-bayang: Jika sudut dongakan matahari sama, tinggi dan panjang bayang-bayang mempunyai nisbah tetap.",
  validateRatios:
    "📌 Semakan: Setiap nisbah sisi sepadan mesti menghasilkan nilai k yang sama.",
  tipsTitle: "💡 Petua dan Trik",
  tipPairs:
    "Kenal pasti sisi sepadan terlebih dahulu: sebelum mengira, tandakan sisi A yang sepadan dengan sisi P. Kesilapan lazim ialah memadankan sisi yang salah.",
  tipCrossMultiply: "Gunakan pendaraban silang supaya pengiraan lebih cekap:",
  tipShadows:
    "Soalan bayang-bayang atau cermin: bandingkan tinggi dengan panjang bayang-bayang. Sudut matahari yang sama menghasilkan keserupaan melalui AA.",
  tipCheck:
    "Semak sama ada jawapan munasabah: jika k > 1, bentuk kedua lebih besar; jika k < 1, bentuk kedua lebih kecil. Pastikan jawapan sepadan dengan rajah.",
  conclusionTitle: "✅ Kesimpulan",
  conclusionIntro:
    "Mencari panjang sisi bentuk serupa bergantung pada satu idea utama: faktor skala k.",
  conclusionFindK: "Cari k menggunakan sepasang sisi sepadan yang diketahui.",
  conclusionUseK: "Gunakan k untuk mengira sisi yang lain.",
  conclusionAngles:
    "Sudut tidak perlu dikira semula — sudut sepadan sentiasa sama besar.",
  conclusionApplications:
    "Peta, foto, model miniatur dan bayang-bayang menggunakan prinsip ini.",
  conclusionNext:
    "Penguasaan idea ini membantu dalam transformasi geometri, skala peta dan trigonometri.",
  backLabel: "← Kembali ke Keserupaan dan Kekongruenan",
};

const ja: T = {
  pageTitle: "相似な平面図形の辺の長さを求める",
  pageSubtitle: "中学3年 · 相似と合同 · 数学",
  introHeader: "📐 未知の辺の長さを求める方法",
  introParagraph:
    "2つの図形が相似だと分かったら、対応する辺の比を使って未知の辺の長さを求められます。手順は体系的です。",
  generalSteps: "基本的な手順：",
  identifyPairs: "対応する辺の組を特定する。",
  writeRatios: "比例式を立てる：",
  crossMultiply: "外項と内項を掛けて未知の辺を求める。",
  conceptHeader: "📘 概念：対応する辺の比",
  keyIdea: "🎯 要点",
  diagramTrapeziumAlt: "相似な2つの台形と相似比 k",
  diagramExampleOneAlt: "辺の長さが分かっている相似な2つの台形",
  diagramExampleTwoAlt: "辺と角が分かっている相似な2つの四角形",
  diagramShadowAlt: "柱と木、それぞれの影でできる三角形",
  diagramScale: "相似比 k",
  similarityStatement: "相似な四角形",
  similarityThen: "では、対応する辺の比が等しい：",
  threeKnown:
    "3つの値が分かれば、交差に掛けることで4つ目の値を求められる：",
  shadowIllustrationTitle: "🌳 影の図：",
  shadowPeopleAlt: "人と木、それぞれの影の図",
  shadowCaseTitle: "影を使った問題：",
  shadowVariableLegend:
    "h₁、h₂は柱と木の高さ、s₁、s₂はそれぞれの影の長さを表す。",
  unitTip:
    "ヒント：計算する前に長さの単位をそろえる。cmとmが混在する場合は、すべて同じ単位に直す。",
  animationHeader: "🎮 インタラクティブアニメーション — 影と相似な三角形",
  animationDescription:
    "スライダーを動かして太陽の角度を変えてみよう。影の長さは変わるが、柱と木の高さの比は、それぞれの影の長さの比と常に等しい。",
  treeShadowLabel: "木の影",
  poleShadowLabel: "柱の影",
  sunLabel: "☀️ 太陽",
  shadowSliderLabel: "☀️ スライダーで太陽の角度を変更",
  sunLow: "40°（太陽が低い）",
  sunHigh: "75°（太陽が高い）",
  ratioConstantLabel: "角度が変わっても比は一定：",
  heightRatioLabel: "柱の高さ / 木の高さ",
  shadowRatioLabel: "柱の影 / 木の影",
  doubleShadowLabel: "✦ 木の影は常に柱の影の2倍",
  examplesHeader: "📝 例題 — 辺の長さを求める",
  easy: "基本",
  medium: "標準",
  hard: "発展",
  exampleOne: "例題1",
  exampleTwo: "例題2",
  exampleThree: "例題3",
  exampleFour: "例題4",
  solution: "解説：",
  exampleOneQuestion:
    "台形ABCDは台形PQRSと相似である。AB = 8 cm、DC = 6 cm、BC = 5 cm、AD = 4 cm、PQ = 16 cm のとき、QR、RS、PS の長さを求めなさい。",
  exampleOneOpening:
    "ABCD ∼ PQRS なので、対応する辺の比は等しい：",
  findQR: "QRを求める（AB ↔ PQ、BC ↔ QR）：",
  findRS: "RSを求める（DC ↔ RS）：",
  findPS: "PSを求める（AD ↔ PS）：",
  exampleOneResult: "QR = 10 cm、RS = 12 cm、PS = 8 cm。",
  exampleTwoQuestion:
    "四角形ABCDはPQRSと相似である。AD = 4 cm、PS = 6 cm、CD = 3 cm、∠A = 75° のとき、RSの長さと∠Pを求めなさい。",
  exampleTwoFindRS: "RSを求める：AD ↔ PS、CD ↔ RS：",
  exampleTwoFindAngle: "∠Pを求める：対応する角は等しい：",
  exampleTwoResult: "RS = 4.5 cm、∠P = 75°。",
  exampleTwoDecimal: "4.5",
  exampleThreeQuestion:
    "正午、高さ4 mの旗竿の影の長さは2 mだった。同じ時刻、木の影の長さは3 mだった。木の高さを求めなさい。",
  exampleThreeConcept:
    "考え方：太陽の仰角が等しいため、旗竿とその影でできる三角形は、木とその影でできる三角形と相似になる。",
  exampleThreeAlt: "旗竿と木、それぞれの影の図",
  exampleThreeVariableLegend:
    "h₁、h₂は旗竿と木の高さ、s₁、s₂はそれぞれの影の長さを表す。",
  solve: "計算：",
  exampleThreeResult: "木の高さ = 6 m。",
  exampleFourQuestion:
    "直角三角形ABCとRPQは相似である。ABCでは AB = 5 cm、AC = 12 cm、BC = 13 cm、RPQでは RQ = 24 cm である。RPとPQを求めなさい。図では2つの三角形の向きが異なることに注意。",
  diagramDifferentDirections: "2つの三角形の向きは異なる",
  diagramDifferentDirectionsAlt: "向きの異なる相似な2つの直角三角形",
  diagramSameDirectionAlt: "向きをそろえて描き直した相似な2つの直角三角形",
  exampleFourStepOne:
    "1. 対応する頂点を特定する。どちらも直角三角形なので、直角の頂点AはRに対応する。三角形の名前の順から、AB ↔ RP、AC ↔ RQ、BC ↔ PQ と分かる。",
  exampleFourStepTwo:
    "2. 向きをそろえて描き直す。回転や反転をしても三角形の大きさは変わらない。描き直すと対応する辺が見やすくなる：",
  exampleFourStepThree:
    "3. 相似比を求める。辺ACは辺RQに対応する。",
  exampleFourStepFour: "4. 求める辺の長さを計算する。",
  exampleFourResult:
    "したがって、RP = 10 cm、PQ = 26 cm。図形の向きではなく、対応する頂点を基準に辺を対応させる。",
  summaryTitle: "📋 まとめ — 相似な図形の辺の長さ",
  summaryConcept: "概念",
  summaryFormula: "公式 / 方法",
  scaleFactor: "相似比",
  sideRatio: "辺の比",
  findNewSide: "辺の長さを求める",
  angle: "角",
  angleRule: "k ≠ 1 でも、対応する角はすべて等しい。",
  summaryVariableLegend:
    "s_Lは大きい図形の辺、s_Sは対応する小さい図形の辺を表す。",
  systematicSteps:
    "📌 手順：(1) 対応する辺を特定 → (2) 既知の組からkを求める → (3) kを使って求める辺を計算する。",
  shadowSummary:
    "📌 影の問題：太陽の仰角が同じなら、高さと影の長さの比は一定。",
  validateRatios:
    "📌 確認：対応する辺の比はすべて同じkになる。",
  tipsTitle: "💡 ヒント",
  tipPairs:
    "最初に対応する辺を特定する。計算前に、図形Aのどの辺が図形Pのどの辺に対応するかを記入する。辺の組み合わせを間違えやすいので注意。",
  tipCrossMultiply: "交差に掛けると効率よく計算できる：",
  tipShadows:
    "影や鏡の問題：高さと影の長さの比を立てる。太陽の角度が同じなら、AAで相似になる。",
  tipCheck:
    "答えが妥当か確認する。k > 1なら2つ目の図形は大きく、k < 1なら小さい。問題の図と答えが一致するか確かめる。",
  conclusionTitle: "✅ まとめ",
  conclusionIntro:
    "相似な図形の辺の長さを求める鍵は、相似比kである。",
  conclusionFindK: "既知の対応する辺の組からkを求める。",
  conclusionUseK: "kを使って残りの辺を計算する。",
  conclusionAngles: "角を計算し直す必要はない。対応する角は常に等しい。",
  conclusionApplications:
    "地図、写真、縮尺模型、影などにこの原理が使われる。",
  conclusionNext:
    "この概念を理解すると、図形の変換、地図の縮尺、三角法を学びやすくなる。",
  backLabel: "← 相似と合同に戻る",
};

const zhCN: T = {
  pageTitle: "计算相似平面图形的边长",
  pageSubtitle: "九年级 · 相似与全等 · 数学",
  introHeader: "📐 求未知边长的方法",
  introParagraph:
    "确认两个图形相似后，可以利用对应边成比例的性质求未知边长。解题步骤很有规律。",
  generalSteps: "一般步骤：",
  identifyPairs: "找出对应边。",
  writeRatios: "列出比例式：",
  crossMultiply: "利用交叉相乘求未知边。",
  conceptHeader: "📘 概念：对应边的比例",
  keyIdea: "🎯 核心要点",
  diagramTrapeziumAlt: "两个相似梯形及相似比 k",
  diagramExampleOneAlt: "已知边长的两个相似梯形",
  diagramExampleTwoAlt: "已知边和角的两个相似四边形",
  diagramShadowAlt: "旗杆和树分别与影子组成的三角形",
  diagramScale: "相似比为 k",
  similarityStatement: "若",
  similarityThen: "，则有：",
  threeKnown: "已知三个数值时，可以通过交叉相乘求出第四个数值：",
  shadowIllustrationTitle: "🌳 影子示意图：",
  shadowPeopleAlt: "人物和树木及其影子的示意图",
  shadowCaseTitle: "影子问题：",
  shadowVariableLegend: "h₁、h₂表示旗杆和树的高度；s₁、s₂表示它们影子的长度。",
  unitTip:
    "提示：计算前先统一长度单位。如果同时出现厘米和米，请先换算成相同单位。",
  animationHeader: "🎮 互动动画 — 影子与相似三角形",
  animationDescription:
    "拖动滑块改变太阳角度。影子长度会变化，但旗杆与树的高度之比始终等于它们的影长之比。",
  treeShadowLabel: "树的影子",
  poleShadowLabel: "旗杆的影子",
  sunLabel: "☀️ 太阳",
  shadowSliderLabel: "☀️ 拖动以改变太阳角度",
  sunLow: "40°（太阳较低）",
  sunHigh: "75°（太阳较高）",
  ratioConstantLabel: "无论角度如何变化，这些比值始终不变：",
  heightRatioLabel: "旗杆高度 / 树高",
  shadowRatioLabel: "旗杆影长 / 树影长",
  doubleShadowLabel: "✦ 树影长度始终是旗杆影长的两倍",
  examplesHeader: "📝 例题 — 求边长",
  easy: "简单",
  medium: "中等",
  hard: "困难",
  exampleOne: "例题 1",
  exampleTwo: "例题 2",
  exampleThree: "例题 3",
  exampleFour: "例题 4",
  solution: "解答：",
  exampleOneQuestion:
    "梯形 ABCD 与梯形 PQRS 相似。已知 AB = 8 cm、DC = 6 cm、BC = 5 cm、AD = 4 cm、PQ = 16 cm。求 QR、RS 和 PS 的长度。",
  exampleOneOpening: "由于 ABCD 与 PQRS 相似，对应边的比相等：",
  findQR: "求 QR（AB 对应 PQ，BC 对应 QR）：",
  findRS: "求 RS（DC 对应 RS）：",
  findPS: "求 PS（AD 对应 PS）：",
  exampleOneResult: "QR = 10 cm，RS = 12 cm，PS = 8 cm。",
  exampleTwoQuestion:
    "四边形 ABCD 与 PQRS 相似。已知 AD = 4 cm、PS = 6 cm、CD = 3 cm、∠A = 75°。求 RS 的长度和 ∠P 的度数。",
  exampleTwoFindRS: "求 RS：AD 对应 PS，CD 对应 RS：",
  exampleTwoFindAngle: "求 ∠P：对应角相等：",
  exampleTwoResult: "RS = 4.5 cm，∠P = 75°。",
  exampleTwoDecimal: "4.5",
  exampleThreeQuestion:
    "中午时，一根高 4 m 的旗杆影长为 2 m。与此同时，一棵树的影长为 3 m。求树的高度。",
  exampleThreeConcept:
    "思路：太阳仰角相同，因此旗杆与其影子组成的三角形和树与其影子组成的三角形相似。",
  exampleThreeAlt: "旗杆和树及其影子的示意图",
  exampleThreeVariableLegend: "h₁、h₂表示旗杆和树的高度；s₁、s₂表示对应的影长。",
  solve: "计算：",
  exampleThreeResult: "树高 = 6 m。",
  exampleFourQuestion:
    "直角三角形 ABC 与 RPQ 相似。在 ABC 中，AB = 5 cm、AC = 12 cm、BC = 13 cm；在 RPQ 中，RQ = 24 cm。求 RP 和 PQ。注意图中两个三角形的朝向不同。",
  diagramDifferentDirections: "两个三角形的朝向不同",
  diagramDifferentDirectionsAlt: "朝向不同的两个相似直角三角形",
  diagramSameDirectionAlt: "将两个相似直角三角形调整为相同朝向后的示意图",
  exampleFourStepOne:
    "1. 找出对应顶点。两个三角形都是直角三角形，因此直角顶点 A 对应 R。根据三角形名称的顺序，AB 对应 RP，AC 对应 RQ，BC 对应 PQ。",
  exampleFourStepTwo:
    "2. 将图形调整为相同朝向。旋转或翻转不会改变三角形的大小。重新绘图有助于看清对应边：",
  exampleFourStepThree: "3. 求相似比。边 AC 对应边 RQ。",
  exampleFourStepFour: "4. 求所需边长。",
  exampleFourResult:
    "因此，RP = 10 cm，PQ = 26 cm。应根据对应顶点配对边，而不是根据图形的朝向。",
  summaryTitle: "📋 总结 — 求相似图形的边长",
  summaryConcept: "概念",
  summaryFormula: "公式 / 方法",
  scaleFactor: "相似比",
  sideRatio: "边长之比",
  findNewSide: "求边长",
  angle: "角",
  angleRule: "即使 k ≠ 1，所有对应角仍然相等。",
  summaryVariableLegend: "s_L表示较大图形的边，s_S表示较小图形中与之对应的边。",
  systematicSteps:
    "📌 步骤：(1) 找出对应边 → (2) 用已知边求 k → (3) 利用 k 求所需边长。",
  shadowSummary:
    "📌 影子问题：太阳仰角相同时，高度与影长的比值保持不变。",
  validateRatios: "📌 检验：所有对应边的比都应得到相同的 k。",
  tipsTitle: "💡 技巧与提示",
  tipPairs:
    "先找出对应边：计算前标记图形 A 的哪条边对应图形 P 的哪条边。常见错误是配错边。",
  tipCrossMultiply: "使用交叉相乘可以提高计算效率：",
  tipShadows:
    "影子或镜像问题：列出高度与影长的比例。太阳角度相同时，可依据 AA 判定相似。",
  tipCheck:
    "检查答案是否合理：若 k > 1，第二个图形较大；若 k < 1，第二个图形较小。确认答案与题图相符。",
  conclusionTitle: "✅ 结论",
  conclusionIntro: "求相似图形的边长，关键在于相似比 k。",
  conclusionFindK: "利用一组已知对应边求 k。",
  conclusionUseK: "利用 k 计算其余边长。",
  conclusionAngles: "无需重新计算角度——对应角始终相等。",
  conclusionApplications: "地图、照片、模型和影子都应用了这一原理。",
  conclusionNext: "掌握这一概念有助于学习图形变换、地图比例尺和三角学。",
  backLabel: "← 返回相似与全等",
};

const ru: T = {
  pageTitle: "Нахождение длин сторон подобных плоских фигур",
  pageSubtitle: "9 класс · Подобие и конгруэнтность · Математика",
  introHeader: "📐 Как найти неизвестную сторону",
  introParagraph:
    "Если доказано, что две фигуры подобны, можно использовать пропорциональность соответствующих сторон, чтобы найти неизвестную длину. Решение выполняется по понятным шагам.",
  generalSteps: "Общий алгоритм:",
  identifyPairs: "Определите пары соответствующих сторон.",
  writeRatios: "Составьте пропорцию:",
  crossMultiply: "Используйте перекрёстное умножение, чтобы найти неизвестную сторону.",
  conceptHeader: "📘 Понятие: отношения соответствующих сторон",
  keyIdea: "🎯 Главное",
  diagramTrapeziumAlt: "Две подобные трапеции с коэффициентом подобия k",
  diagramExampleOneAlt: "Две подобные трапеции с известными длинами сторон",
  diagramExampleTwoAlt: "Два подобных четырёхугольника с известными сторонами и углами",
  diagramShadowAlt: "Столб и дерево образуют треугольники со своими тенями",
  diagramScale: "коэффициент подобия k",
  similarityStatement: "Если",
  similarityThen: ", то верно:",
  threeKnown:
    "Если известны три значения, четвёртое можно найти перекрёстным умножением:",
  shadowIllustrationTitle: "🌳 ИЛЛЮСТРАЦИЯ ТЕНЕЙ:",
  shadowPeopleAlt: "Иллюстрация человека и дерева с их тенями",
  shadowCaseTitle: "Задача о тенях:",
  shadowVariableLegend:
    "h₁ и h₂ — высоты столба и дерева; s₁ и s₂ — длины их теней.",
  unitTip:
    "Совет: перед вычислениями приведите длины к одной единице. Если есть сантиметры и метры, сначала выполните перевод.",
  animationHeader: "🎮 Интерактивная анимация — тени и подобные треугольники",
  animationDescription:
    "Перемещайте ползунок, чтобы менять угол солнца. Длины теней меняются, но отношение высоты столба к высоте дерева всегда равно отношению длин их теней.",
  treeShadowLabel: "тень дерева",
  poleShadowLabel: "тень столба",
  sunLabel: "☀️ солнце",
  shadowSliderLabel: "☀️ Переместите, чтобы изменить угол солнца",
  sunLow: "40° (солнце низко)",
  sunHigh: "75° (солнце высоко)",
  ratioConstantLabel: "Отношения остаются постоянными при любом угле:",
  heightRatioLabel: "высота столба / высота дерева",
  shadowRatioLabel: "тень столба / тень дерева",
  doubleShadowLabel: "✦ Тень дерева всегда вдвое длиннее тени столба",
  examplesHeader: "📝 Примеры — нахождение длин сторон",
  easy: "Лёгкий",
  medium: "Средний",
  hard: "Сложный",
  exampleOne: "Пример 1",
  exampleTwo: "Пример 2",
  exampleThree: "Пример 3",
  exampleFour: "Пример 4",
  solution: "РЕШЕНИЕ:",
  exampleOneQuestion:
    "Трапеция ABCD подобна трапеции PQRS. Известно: AB = 8 см, DC = 6 см, BC = 5 см, AD = 4 см и PQ = 16 см. Найдите длины QR, RS и PS.",
  exampleOneOpening:
    "Так как ABCD ∼ PQRS, отношения соответствующих сторон равны:",
  findQR: "Найдём QR (AB соответствует PQ, а BC соответствует QR):",
  findRS: "Найдём RS (DC соответствует RS):",
  findPS: "Найдём PS (AD соответствует PS):",
  exampleOneResult: "QR = 10 см, RS = 12 см, PS = 8 см.",
  exampleTwoQuestion:
    "Четырёхугольник ABCD подобен четырёхугольнику PQRS. Известно: AD = 4 см, PS = 6 см, CD = 3 см и ∠A = 75°. Найдите длину RS и величину ∠P.",
  exampleTwoFindRS: "Найдём RS: AD соответствует PS, а CD соответствует RS:",
  exampleTwoFindAngle: "Найдём ∠P: соответствующие углы равны:",
  exampleTwoResult: "RS = 4,5 см и ∠P = 75°.",
  exampleTwoDecimal: "4{,}5",
  exampleThreeQuestion:
    "В полдень флагшток высотой 4 м отбрасывает тень длиной 2 м. В это же время тень дерева имеет длину 3 м. Найдите высоту дерева.",
  exampleThreeConcept:
    "Идея: угол возвышения солнца одинаков, поэтому треугольник, образованный флагштоком и его тенью, подобен треугольнику, образованному деревом и его тенью.",
  exampleThreeAlt: "Иллюстрация флагштока и дерева с их тенями",
  exampleThreeVariableLegend:
    "h₁ и h₂ — высоты флагштока и дерева; s₁ и s₂ — длины их теней.",
  solve: "Решение:",
  exampleThreeResult: "Высота дерева = 6 м.",
  exampleFourQuestion:
    "Прямоугольные треугольники ABC и RPQ подобны. В ABC: AB = 5 см, AC = 12 см, BC = 13 см; в RPQ: RQ = 24 см. Найдите RP и PQ. Обратите внимание: на рисунке треугольники расположены по-разному.",
  diagramDifferentDirections: "Треугольники расположены по-разному",
  diagramDifferentDirectionsAlt:
    "Два подобных прямоугольных треугольника с разной ориентацией",
  diagramSameDirectionAlt:
    "Два подобных прямоугольных треугольника, перерисованные в одинаковой ориентации",
  exampleFourStepOne:
    "1. Определим соответствующие вершины. Оба треугольника прямоугольные, поэтому вершина A с прямым углом соответствует R. По порядку букв AB соответствует RP, AC — RQ, а BC — PQ.",
  exampleFourStepTwo:
    "2. Перерисуем треугольники в одинаковой ориентации. Поворот или отражение не меняет размер треугольника. Новый рисунок помогает увидеть соответствующие стороны:",
  exampleFourStepThree:
    "3. Найдём коэффициент подобия. Сторона AC соответствует RQ.",
  exampleFourStepFour: "4. Найдём искомые длины сторон.",
  exampleFourResult:
    "Итак, RP = 10 см, PQ = 26 см. Сопоставляйте стороны по соответствующим вершинам, а не по ориентации рисунка.",
  summaryTitle: "📋 Кратко — длины сторон подобных фигур",
  summaryConcept: "Понятие",
  summaryFormula: "Формула / способ",
  scaleFactor: "Коэффициент подобия",
  sideRatio: "Отношения сторон",
  findNewSide: "Нахождение стороны",
  angle: "Углы",
  angleRule: "Соответствующие углы равны даже при k ≠ 1.",
  summaryVariableLegend:
    "s_L — сторона большей фигуры, s_S — соответствующая сторона меньшей фигуры.",
  systematicSteps:
    "📌 Алгоритм: (1) Найдите соответствующие стороны → (2) Определите k по известной паре → (3) Используйте k, чтобы найти искомую сторону.",
  shadowSummary:
    "📌 Задачи о тенях: при одинаковом угле возвышения солнца отношение высоты к длине тени постоянно.",
  validateRatios:
    "📌 Проверка: все отношения соответствующих сторон должны давать одно и то же k.",
  tipsTitle: "💡 Советы",
  tipPairs:
    "Сначала определите соответствующие стороны. Перед вычислениями отметьте, какая сторона фигуры A соответствует стороне фигуры P. Частая ошибка — неверно сопоставить стороны.",
  tipCrossMultiply: "Для удобства используйте перекрёстное умножение:",
  tipShadows:
    "Задачи о тенях или отражении: составьте отношение высоты к длине тени. При одинаковом угле солнца треугольники подобны по двум углам.",
  tipCheck:
    "Проверьте правдоподобие ответа: при k > 1 вторая фигура больше, при k < 1 — меньше. Ответ должен соответствовать рисунку.",
  conclusionTitle: "✅ Вывод",
  conclusionIntro:
    "Для нахождения сторон подобных фигур главное — коэффициент подобия k.",
  conclusionFindK: "Найдите k по паре известных соответствующих сторон.",
  conclusionUseK: "Используйте k, чтобы вычислить остальные стороны.",
  conclusionAngles:
    "Пересчитывать углы не нужно — соответствующие углы всегда равны.",
  conclusionApplications:
    "Этот принцип применяется в картах, фотографиях, моделях и задачах о тенях.",
  conclusionNext:
    "Понимание этой темы поможет изучать преобразования фигур, масштаб карт и тригонометрию.",
  backLabel: "← Назад к подобию и конгруэнтности",
};

const translations = {
  id,
  en,
  "ms-MY": msMY,
  ja,
  "zh-CN": zhCN,
  ru,
} satisfies Record<Language, T>;

const numberLocales: Record<Language, string> = {
  id: "id-ID",
  en: "en-US",
  "ms-MY": "en-US",
  ja: "en-US",
  "zh-CN": "en-US",
  ru: "ru-RU",
};

function formatNumber(value: number, language: Language): string {
  return new Intl.NumberFormat(numberLocales[language], {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

const DiagramTrapesium = ({ t }: { t: T }) => (
  <svg
    viewBox="0 0 340 175"
    className="w-full max-w-sm mx-auto"
    role="img"
    aria-label={t.diagramTrapeziumAlt}
  >
    {/* Trapesium siku-siku ABCD (kiri, biru) */}
    {/* Siku-siku di A (bawah-kiri) dan D (atas-kiri) — sisi AD vertikal */}
    {/* A=bawah-kiri, B=bawah-kanan, C=atas-kanan, D=atas-kiri */}
    <polygon points="18,140 82,140 68,92 18,92" fill="#3b82f6" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="2"/>
    {/* Tanda siku-siku di A */}
    <polyline points="18,132 26,132 26,140" fill="none" stroke="#93c5fd" strokeWidth="1.2"/>
    {/* Tanda siku-siku di D */}
    <polyline points="18,100 26,100 26,92" fill="none" stroke="#93c5fd" strokeWidth="1.2"/>
    {/* Label titik sudut */}
    <text x="7"  y="150" fontSize="9" fill="#93c5fd" fontWeight="bold">A</text>
    <text x="84" y="150" fontSize="9" fill="#93c5fd" fontWeight="bold">B</text>
    <text x="70" y="89"  fontSize="9" fill="#93c5fd" fontWeight="bold">C</text>
    <text x="5"  y="89"  fontSize="9" fill="#93c5fd" fontWeight="bold">D</text>
    {/* Nama */}
    <text x="50" y="122" textAnchor="middle" fontSize="9" fill="#93c5fd" fontWeight="bold">ABCD</text>

    {/* Simbol ~ */}
    <text x="122" y="122" fontSize="18" fill="#facc15" textAnchor="middle">~</text>

    {/* Trapesium siku-siku PQRS (kanan, hijau, lebih besar) */}
    {/* Siku-siku di P (bawah-kiri) dan S (atas-kiri) — sisi PS vertikal */}
    {/* P=bawah-kiri, Q=bawah-kanan, R=atas-kanan, S=atas-kiri */}
    <polygon points="155,144 263,144 241,82 155,82" fill="#22c55e" fillOpacity="0.25" stroke="#4ade80" strokeWidth="2"/>
    {/* Tanda siku-siku di P */}
    <polyline points="155,136 163,136 163,144" fill="none" stroke="#86efac" strokeWidth="1.2"/>
    {/* Tanda siku-siku di S */}
    <polyline points="155,90 163,90 163,82" fill="none" stroke="#86efac" strokeWidth="1.2"/>
    {/* Label titik sudut */}
    <text x="143" y="155" fontSize="9" fill="#86efac" fontWeight="bold">P</text>
    <text x="265" y="155" fontSize="9" fill="#86efac" fontWeight="bold">Q</text>
    <text x="243" y="79"  fontSize="9" fill="#86efac" fontWeight="bold">R</text>
    <text x="142" y="79"  fontSize="9" fill="#86efac" fontWeight="bold">S</text>
    {/* Nama */}
    <text x="209" y="122" textAnchor="middle" fontSize="9" fill="#86efac" fontWeight="bold">PQRS</text>

    {/* Info box */}
    <rect x="10" y="8" width="185" height="20" rx="4" fill="#1e293b" stroke="#334155"/>
    <text x="102" y="22" textAnchor="middle" fontSize="9" fill="#fde68a" fontWeight="bold">{t.diagramScale}</text>
  </svg>
);


const DiagramContoh1 = ({ t }: { t: T }) => (
  <svg
    viewBox="0 0 360 195"
    className="w-full max-w-lg mx-auto"
    role="img"
    aria-label={t.diagramExampleOneAlt}
  >
    {/* === ABCD (kiri, biru) === */}
    {/* A=bawah-kiri, B=bawah-kanan, C=atas-kanan, D=atas-kiri */}
    {/* AB=8, DC=6, AD=4(vertikal), BC=miring */}
    <polygon points="20,155 80,155 65,115 20,115" fill="#3b82f6" fillOpacity="0.25" stroke="#60a5fa" strokeWidth="1.8"/>
    {/* siku-siku A */}
    <polyline points="20,147 28,147 28,155" fill="none" stroke="#93c5fd" strokeWidth="1.1"/>
    {/* siku-siku D */}
    <polyline points="20,123 28,123 28,115" fill="none" stroke="#93c5fd" strokeWidth="1.1"/>
    {/* label titik */}
    <text x="10" y="167" fontSize="9" fill="#93c5fd" fontWeight="bold">A</text>
    <text x="82" y="167" fontSize="9" fill="#93c5fd" fontWeight="bold">B</text>
    <text x="67" y="111" fontSize="9" fill="#93c5fd" fontWeight="bold">C</text>
    <text x="8"  y="111" fontSize="9" fill="#93c5fd" fontWeight="bold">D</text>
    {/* dimensi AB */}
    <text x="50" y="170" textAnchor="middle" fontSize="8" fill="#7dd3fc">8 cm</text>
    {/* dimensi DC */}
    <text x="43" y="110" textAnchor="middle" fontSize="8" fill="#7dd3fc">6 cm</text>
    {/* dimensi AD */}
    <text x="5" y="138" textAnchor="middle" fontSize="8" fill="#7dd3fc">4</text>
    {/* dimensi BC */}
    <text x="84" y="138" textAnchor="start" fontSize="8" fill="#7dd3fc">5</text>

    {/* simbol ~ */}
    <text x="118" y="140" fontSize="20" fill="#facc15" textAnchor="middle">~</text>

    {/* === PQRS (kanan, hijau, 2× lebih besar) === */}
    {/* P=bawah-kiri, Q=bawah-kanan, R=atas-kanan, S=atas-kiri */}
    {/* PQ=16, RS=?, PS=?(vertikal), QR=? */}
    <polygon points="148,160 268,160 238,80 148,80" fill="#22c55e" fillOpacity="0.2" stroke="#4ade80" strokeWidth="1.8"/>
    {/* siku-siku P */}
    <polyline points="148,152 156,152 156,160" fill="none" stroke="#86efac" strokeWidth="1.1"/>
    {/* siku-siku S */}
    <polyline points="148,88 156,88 156,80" fill="none" stroke="#86efac" strokeWidth="1.1"/>
    {/* label titik */}
    <text x="137" y="173" fontSize="9" fill="#86efac" fontWeight="bold">P</text>
    <text x="270" y="173" fontSize="9" fill="#86efac" fontWeight="bold">Q</text>
    <text x="240" y="77"  fontSize="9" fill="#86efac" fontWeight="bold">R</text>
    <text x="136" y="77"  fontSize="9" fill="#86efac" fontWeight="bold">S</text>
    {/* dimensi PQ */}
    <text x="208" y="175" textAnchor="middle" fontSize="8" fill="#86efac">16 cm</text>
    {/* dimensi RS */}
    <text x="193" y="75" textAnchor="middle" fontSize="8" fill="#fbbf24">RS = ?</text>
    {/* dimensi PS */}
    <text x="130" y="122" textAnchor="middle" fontSize="8" fill="#fbbf24">PS=?</text>
    {/* dimensi QR */}
    <text x="274" y="122" textAnchor="start" fontSize="8" fill="#fbbf24">QR=?</text>
  </svg>
);

const DiagramContoh2 = ({ t }: { t: T }) => (
  <svg
    viewBox="0 0 370 185"
    className="w-full max-w-lg mx-auto"
    role="img"
    aria-label={t.diagramExampleTwoAlt}
  >
    {/* === ABCD (kiri, biru, lebih kecil) === */}
    <polygon points="28,155 95,155 80,99 28,99" fill="#3b82f6" fillOpacity="0.22" stroke="#60a5fa" strokeWidth="1.8"/>
    {/* Label titik */}
    <text x="15"  y="167" fontSize="9" fill="#93c5fd" fontWeight="bold">A</text>
    <text x="97"  y="167" fontSize="9" fill="#93c5fd" fontWeight="bold">B</text>
    <text x="81"  y="96"  fontSize="9" fill="#93c5fd" fontWeight="bold">C</text>
    <text x="14"  y="96"  fontSize="9" fill="#93c5fd" fontWeight="bold">D</text>
    {/* Dimensi AD (kiri, vertikal) */}
    <text x="10" y="130" textAnchor="middle" fontSize="8" fill="#7dd3fc">4 cm</text>
    {/* Dimensi DC (atas) */}
    <text x="55" y="94"  textAnchor="middle" fontSize="8" fill="#7dd3fc">3 cm</text>
    {/* Sudut A = 75° — arc kecil di pojok A */}
    <path d="M 28,143 A 12,12 0 0,1 40,155" fill="none" stroke="#facc15" strokeWidth="1.4"/>
    <text x="42"  y="151" fontSize="7.5" fill="#facc15" fontWeight="bold">75°</text>

    {/* Simbol ~ */}
    <text x="122" y="133" fontSize="20" fill="#facc15" textAnchor="middle">~</text>

    {/* === PQRS (kanan, hijau, lebih besar) === */}
    <polygon points="152,161 252,161 232,77 152,77" fill="#22c55e" fillOpacity="0.18" stroke="#4ade80" strokeWidth="1.8"/>
    {/* Label titik */}
    <text x="139" y="174" fontSize="9" fill="#86efac" fontWeight="bold">P</text>
    <text x="254" y="174" fontSize="9" fill="#86efac" fontWeight="bold">Q</text>
    <text x="233" y="74"  fontSize="9" fill="#86efac" fontWeight="bold">R</text>
    <text x="138" y="74"  fontSize="9" fill="#86efac" fontWeight="bold">S</text>
    {/* Dimensi PS (kiri, vertikal) */}
    <text x="134" y="122" textAnchor="middle" fontSize="8" fill="#86efac">6 cm</text>
    {/* Dimensi RS (atas, ditanya) */}
    <text x="193" y="71"  textAnchor="middle" fontSize="8" fill="#fbbf24">RS = ?</text>
    {/* Sudut P = ? — arc kecil di pojok P */}
    <path d="M 152,149 A 12,12 0 0,1 164,161" fill="none" stroke="#facc15" strokeWidth="1.4"/>
    <text x="167" y="156" fontSize="7.5" fill="#fbbf24" fontWeight="bold">∠P=?</text>
  </svg>
);

const DiagramContoh4Soal = ({ t }: { t: T }) => (
  <svg
    viewBox="0 0 520 245"
    className="w-full max-w-2xl mx-auto"
    role="img"
    aria-label={t.diagramDifferentDirectionsAlt}
  >
    <text x="130" y="20" textAnchor="middle" fontSize="11" fill="#93c5fd" fontWeight="bold">ΔABC</text>
    <text x="390" y="20" textAnchor="middle" fontSize="11" fill="#86efac" fontWeight="bold">ΔRPQ</text>

    {/* Segitiga ABC — siku-siku di A */}
    <polygon points="42,190 42,40 112,190" fill="#3b82f6" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2"/>
    <polyline points="42,178 54,178 54,190" fill="none" stroke="#93c5fd" strokeWidth="1.5"/>
    <text x="29" y="202" fontSize="10" fill="#bfdbfe" fontWeight="bold">A</text>
    <text x="116" y="202" fontSize="10" fill="#bfdbfe" fontWeight="bold">B</text>
    <text x="29" y="36" fontSize="10" fill="#bfdbfe" fontWeight="bold">C</text>
    <text x="77" y="207" textAnchor="middle" fontSize="9" fill="#7dd3fc">5 cm</text>
    <text x="28" y="116" textAnchor="middle" fontSize="9" fill="#7dd3fc">12 cm</text>
    <text x="79" y="116" textAnchor="middle" fontSize="9" fill="#7dd3fc" transform="rotate(-65 79 116)">13 cm</text>

    {/* Segitiga RPQ — siku-siku di R, arahnya berbeda */}
    <polygon points="470,90 270,190 470,190" fill="#22c55e" fillOpacity="0.2" stroke="#4ade80" strokeWidth="2"/>
    <polyline points="458,178 458,190 470,190" fill="none" stroke="#86efac" strokeWidth="1.5"/>
    <text x="474" y="86" fontSize="10" fill="#bbf7d0" fontWeight="bold">P</text>
    <text x="259" y="202" fontSize="10" fill="#bbf7d0" fontWeight="bold">Q</text>
    <text x="474" y="202" fontSize="10" fill="#bbf7d0" fontWeight="bold">R</text>
    <text x="488" y="142" textAnchor="middle" fontSize="9" fill="#86efac">RP = ?</text>
    <text x="370" y="207" textAnchor="middle" fontSize="9" fill="#86efac">RQ = 24 cm</text>
    <text x="365" y="130" textAnchor="middle" fontSize="9" fill="#fbbf24" transform="rotate(-27 365 130)">PQ = ?</text>

    <line x1="252" y1="48" x2="252" y2="214" stroke="#475569" strokeDasharray="4 4" />
    <text x="260" y="235" textAnchor="middle" fontSize="9" fill="#facc15">{t.diagramDifferentDirections}</text>
  </svg>
);

const DiagramContoh4GambarUlang = ({ t }: { t: T }) => (
  <svg
    viewBox="0 0 520 220"
    className="w-full max-w-2xl mx-auto"
    role="img"
    aria-label={t.diagramSameDirectionAlt}
  >
    <text x="130" y="20" textAnchor="middle" fontSize="11" fill="#93c5fd" fontWeight="bold">ΔABC</text>
    <text x="390" y="20" textAnchor="middle" fontSize="11" fill="#86efac" fontWeight="bold">ΔR′P′Q′</text>

    {/* Segitiga ABC — arah acuan */}
    <polygon points="42,175 42,45 102,175" fill="#3b82f6" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="2"/>
    <polyline points="42,163 54,163 54,175" fill="none" stroke="#93c5fd" strokeWidth="1.5"/>
    <text x="29" y="188" fontSize="10" fill="#bfdbfe" fontWeight="bold">A</text>
    <text x="106" y="188" fontSize="10" fill="#bfdbfe" fontWeight="bold">B</text>
    <text x="29" y="41" fontSize="10" fill="#bfdbfe" fontWeight="bold">C</text>
    <text x="72" y="192" textAnchor="middle" fontSize="9" fill="#7dd3fc">5 cm</text>
    <text x="28" y="112" textAnchor="middle" fontSize="9" fill="#7dd3fc">12 cm</text>
    <text x="69" y="111" textAnchor="middle" fontSize="9" fill="#7dd3fc" transform="rotate(-65 69 111)">13 cm</text>

    {/* Segitiga R′P′Q′ — digambar ulang dengan arah sama */}
    <polygon points="282,175 362,175 282,45" fill="#22c55e" fillOpacity="0.2" stroke="#4ade80" strokeWidth="2"/>
    <polyline points="282,163 294,163 294,175" fill="none" stroke="#86efac" strokeWidth="1.5"/>
    <text x="269" y="188" fontSize="10" fill="#bbf7d0" fontWeight="bold">R′</text>
    <text x="366" y="188" fontSize="10" fill="#bbf7d0" fontWeight="bold">P′</text>
    <text x="269" y="41" fontSize="10" fill="#bbf7d0" fontWeight="bold">Q′</text>
    <text x="322" y="192" textAnchor="middle" fontSize="9" fill="#86efac">10 cm</text>
    <text x="267" y="112" textAnchor="middle" fontSize="9" fill="#86efac">24 cm</text>
    <text x="332" y="111" textAnchor="middle" fontSize="9" fill="#fbbf24" transform="rotate(-58 332 111)">26 cm</text>

    <text x="260" y="214" textAnchor="middle" fontSize="9" fill="#facc15">RP′ ↔ AB, RQ′ ↔ AC, P′Q′ ↔ BC</text>
  </svg>
);

const ShadowAnimation = ({
  t,
  language,
}: {
  t: T;
  language: Language;
}) => {
  const [angleDeg, setAngleDeg] = useState(63);
  const angleRad = (angleDeg * Math.PI) / 180;

  const GROUND_Y = 188;
  const SCALE = 15;
  const TIANG_H_PX = 4 * SCALE; // 60px = 4m
  const TREE_H_PX  = 8 * SCALE; // 120px = 8m (2× tiang)
  const tiangX = 370;
  const treeX  = 78;

  const shadowTiangPx = (4 / Math.tan(angleRad)) * SCALE;
  const shadowTreePx  = (8 / Math.tan(angleRad)) * SCALE;
  const tiangTop = GROUND_Y - TIANG_H_PX; // 128
  const treeTop  = GROUND_Y - TREE_H_PX;  // 68
  const tiangShadowEnd = tiangX + shadowTiangPx;
  const treeShadowEnd  = treeX  + shadowTreePx;

  const shadowPoleLength = 4 / Math.tan(angleRad);
  const shadowTreeLength = 8 / Math.tan(angleRad);
  const shadowTiangM = formatNumber(shadowPoleLength, language);
  const shadowTreeM = formatNumber(shadowTreeLength, language);
  const ratio = formatNumber(shadowPoleLength / shadowTreeLength, language);

  const tr = "all 0.25s ease";

  return (
    <div className="space-y-3">
      <svg
        viewBox="0 0 520 215"
        className="w-full"
        overflow="visible"
        role="img"
        aria-label={t.diagramShadowAlt}
      >
        {/* Ground */}
        <line x1="0" y1={GROUND_Y} x2="520" y2={GROUND_Y} stroke="#475569" strokeWidth="2"/>

        {/* ── Pohon (hijau) ── */}
        {/* Triangle area */}
        <polygon
          points={`${treeX},${GROUND_Y} ${treeX},${treeTop} ${treeShadowEnd},${GROUND_Y}`}
          fill="#22c55e" fillOpacity="0.12" stroke="none"
          style={{ transition: tr }}
        />
        {/* Trunk */}
        <rect x={treeX - 3} y={treeTop + 55} width={6} height={TREE_H_PX - 55} fill="#92400e" rx="1"/>
        {/* Canopy circles */}
        <circle cx={treeX}      cy={treeTop + 18} r={24} fill="#16a34a" fillOpacity="0.85"/>
        <circle cx={treeX - 14} cy={treeTop + 32} r={17} fill="#15803d" fillOpacity="0.85"/>
        <circle cx={treeX + 14} cy={treeTop + 32} r={17} fill="#15803d" fillOpacity="0.85"/>
        <circle cx={treeX}      cy={treeTop + 40} r={20} fill="#22c55e" fillOpacity="0.7"/>
        {/* Hypotenuse (sinar matahari) */}
        <line x1={treeX} y1={treeTop} x2={treeShadowEnd} y2={GROUND_Y}
          stroke="#4ade80" strokeWidth="1.5" strokeDasharray="6,3"
          style={{ transition: tr }}/>
        {/* Shadow line */}
        <line x1={treeX} y1={GROUND_Y} x2={treeShadowEnd} y2={GROUND_Y}
          stroke="#facc15" strokeWidth="3.5" strokeLinecap="round"
          style={{ transition: tr }}/>
        {/* Right angle */}
        <polyline points={`${treeX+9},${GROUND_Y} ${treeX+9},${GROUND_Y-9} ${treeX},${GROUND_Y-9}`}
          fill="none" stroke="#4ade80" strokeWidth="1.2"/>
        {/* Height label */}
        <text x={treeX - 8} y={(treeTop + GROUND_Y) / 2 + 4} textAnchor="end" fontSize="10" fill="#86efac" fontWeight="bold">8 m</text>
        {/* Shadow label */}
        <text
          x={(treeX + treeShadowEnd) / 2} y={GROUND_Y + 16}
          textAnchor="middle" fontSize="9" fill="#fde68a" fontWeight="bold"
          style={{ transition: tr }}
        >{shadowTreeM} m</text>
        <text
          x={(treeX + treeShadowEnd) / 2} y={GROUND_Y + 28}
          textAnchor="middle" fontSize="8" fill="#fb923c" fontWeight="bold"
          style={{ transition: tr }}
        >(= 2 × {shadowTiangM})</text>

        {/* ── Tiang Bendera (biru) ── */}
        {/* Triangle area */}
        <polygon
          points={`${tiangX},${GROUND_Y} ${tiangX},${tiangTop} ${tiangShadowEnd},${GROUND_Y}`}
          fill="#3b82f6" fillOpacity="0.15" stroke="none"
          style={{ transition: tr }}
        />
        {/* Pole */}
        <rect x={tiangX - 2} y={tiangTop} width={4} height={TIANG_H_PX} fill="#93c5fd" rx="1"/>
        {/* Flag (merah putih) */}
        <polygon points={`${tiangX+2},${tiangTop} ${tiangX+22},${tiangTop+9} ${tiangX+2},${tiangTop+18}`} fill="#ef4444"/>
        <polygon points={`${tiangX+2},${tiangTop+9} ${tiangX+22},${tiangTop+18} ${tiangX+2},${tiangTop+18}`} fill="#f8fafc"/>
        {/* Hypotenuse (sinar matahari) */}
        <line x1={tiangX} y1={tiangTop} x2={tiangShadowEnd} y2={GROUND_Y}
          stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="6,3"
          style={{ transition: tr }}/>
        {/* Shadow line */}
        <line x1={tiangX} y1={GROUND_Y} x2={tiangShadowEnd} y2={GROUND_Y}
          stroke="#facc15" strokeWidth="3.5" strokeLinecap="round"
          style={{ transition: tr }}/>
        {/* Right angle */}
        <polyline points={`${tiangX+9},${GROUND_Y} ${tiangX+9},${GROUND_Y-9} ${tiangX},${GROUND_Y-9}`}
          fill="none" stroke="#93c5fd" strokeWidth="1.2"/>
        {/* Height label */}
        <text x={tiangX - 8} y={(tiangTop + GROUND_Y) / 2 + 4} textAnchor="end" fontSize="10" fill="#7dd3fc" fontWeight="bold">4 m</text>
        {/* Shadow label */}
        <text
          x={(tiangX + tiangShadowEnd) / 2} y={GROUND_Y + 16}
          textAnchor="middle" fontSize="9" fill="#fde68a" fontWeight="bold"
          style={{ transition: tr }}
        >{shadowTiangM} m</text>

        {/* Similarity symbol */}
        <text x="228" y="148" textAnchor="middle" fontSize="22" fill="#facc15" fontWeight="bold">~</text>

        {/* Sun icon (dekoratif, kanan atas) */}
        <circle cx="500" cy="22" r="13" fill="#fde047" fillOpacity="0.95"/>
        {[0,45,90,135,180,225,270,315].map((a) => {
          const r = (a * Math.PI) / 180;
          return (
            <line key={a}
              x1={500 + 15 * Math.cos(r)} y1={22 + 15 * Math.sin(r)}
              x2={500 + 21 * Math.cos(r)} y2={22 + 21 * Math.sin(r)}
              stroke="#fde047" strokeWidth="1.8"/>
          );
        })}
        <text x="500" y="47" textAnchor="middle" fontSize="8" fill="#fde68a"        >{t.sunLabel}</text>

        {/* ── Sudut elevasi matahari (tiang) ── */}
        <path
          d={`M ${tiangShadowEnd - 22} ${GROUND_Y} A 22 22 0 0 1 ${tiangShadowEnd - 22 * Math.cos(angleRad)} ${GROUND_Y - 22 * Math.sin(angleRad)}`}
          fill="#facc1530" stroke="#facc15" strokeWidth="1.5"
          style={{ transition: tr }}
        />
        <text
          x={tiangShadowEnd - 36 * Math.cos(angleRad / 2)}
          y={GROUND_Y - 36 * Math.sin(angleRad / 2) + 4}
          textAnchor="middle" fontSize="9" fill="#facc15" fontWeight="bold"
          style={{ transition: tr }}
        >θ</text>

        {/* ── Sudut elevasi matahari (pohon) ── */}
        <path
          d={`M ${treeShadowEnd - 22} ${GROUND_Y} A 22 22 0 0 1 ${treeShadowEnd - 22 * Math.cos(angleRad)} ${GROUND_Y - 22 * Math.sin(angleRad)}`}
          fill="#fde04730" stroke="#fde047" strokeWidth="1.5"
          style={{ transition: tr }}
        />
        <text
          x={treeShadowEnd - 36 * Math.cos(angleRad / 2)}
          y={GROUND_Y - 36 * Math.sin(angleRad / 2) + 4}
          textAnchor="middle" fontSize="9" fill="#fde047" fontWeight="bold"
          style={{ transition: tr }}
        >θ</text>

        {/* "bayangan" labels */}
        <text x={(treeX + treeShadowEnd) / 2} y={GROUND_Y + 38} textAnchor="middle" fontSize="7.5" fill="#94a3b8" style={{ transition: tr }}>{t.treeShadowLabel}</text>
        <text x={(tiangX + tiangShadowEnd) / 2} y={GROUND_Y + 28} textAnchor="middle" fontSize="7.5" fill="#94a3b8" style={{ transition: tr }}>{t.poleShadowLabel}</text>
      </svg>

      {/* Slider */}
      <div className="px-3 mt-6">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="sun-angle" className="font-body text-xs text-white/60">{t.shadowSliderLabel}</label>
          <span className="font-body text-xs text-yellow-300 font-bold">{angleDeg}°</span>
        </div>
        <input
          id="sun-angle"
          aria-label={t.shadowSliderLabel}
          type="range" min="40" max="75" step="1" value={angleDeg}
          onChange={(e) => setAngleDeg(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-yellow-400 bg-slate-700"
        />
        <div className="flex justify-between text-xs text-white/30 mt-1 font-body">
          <span>{t.sunLow}</span>
          <span>{t.sunHigh}</span>
        </div>
      </div>

      {/* Live ratio */}
      <div className="bg-slate-900/70 border border-slate-700/50 rounded-lg p-3 font-body text-sm text-center space-y-2">
        <p className="text-white/50 text-xs">{t.ratioConstantLabel}</p>
        <p className="text-cyan-200 font-bold text-sm">
          <span className="text-white/70">{t.heightRatioLabel} </span>=
          <span className="text-blue-300"> 4 / 8 </span>=
          <span className="text-yellow-300"> {formatNumber(0.5, language)}</span>
        </p>
        <p className="text-cyan-200 font-bold text-sm">
          <span className="text-white/70">{t.shadowRatioLabel} </span>=
          <span className="text-green-300"> {shadowTiangM} / {shadowTreeM} </span>=
          <span className="text-yellow-300"> {ratio}</span>
        </p>
        <p className="text-orange-300 text-xs font-semibold">
          {t.doubleShadowLabel}: ({shadowTiangM} × 2 = {shadowTreeM} m)
        </p>
      </div>
    </div>
  );
};

const MenghitungRusukPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = pickLang(translations, language);
  const Header = ({ id, icon, color, label }: { id: string; icon: React.ReactNode; color: string; label: string }) => (
    <div className="w-full flex items-center px-5 py-4">
      <div className="flex items-center gap-3"><span style={{ color }}>{icon}</span><span className="font-body font-semibold text-white">{label}</span></div>
    </div>
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center gradient-space overflow-hidden kesebangunan-kekongruenan-route">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
        <h1 className="font-display text-xl md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">{t.pageTitle}</h1>
        <p className="text-white/50 text-xs text-center mb-6 font-body">{t.pageSubtitle}</p>

        <div className="flex flex-col gap-4 animate-slide-up">

          {/* INTRO */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
            <Header id="intro" icon={<Lightbulb className="w-5 h-5" />} color="#facc15" label={t.introHeader} />
              <div className="px-5 pb-5 space-y-4">
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {t.introParagraph}
                </p>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <p className="font-body text-sm text-cyan-200">
                    <strong>{t.generalSteps}</strong>
                  </p>
                  <ol className="font-body text-sm text-cyan-100 space-y-1 list-decimal list-inside mt-2">
                    <li>{t.identifyPairs}</li>
                    <li>{t.writeRatios} <InlineMath math="\frac{a}{p} = \frac{b}{q} = \frac{c}{r}" /></li>
                    <li>{t.crossMultiply}</li>
                  </ol>
                </div>
              </div>
          </div>

          {/* KONSEP */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
            <Header id="konsep1" icon={<Target className="w-5 h-5" />} color="#4ade80" label={t.conceptHeader} />
              <div className="px-5 pb-5 space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 space-y-3">
                  <p className="font-body text-sm font-semibold text-green-300">{t.keyIdea}</p>
                  <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-4">
                    <DiagramTrapesium t={t} />
                    <p className="font-body text-xs text-white/50 text-center mt-2">{t.diagramTrapeziumAlt}</p>
                  </div>
                  <p className="font-body text-sm text-white/80">{t.similarityStatement} <InlineMath math="ABCD \sim PQRS" />{t.similarityThen}</p>
                  <div className="bg-slate-900/60 rounded-lg p-4">
                    <BlockMath math="\frac{AB}{PQ} = \frac{BC}{QR} = \frac{CD}{RS} = \frac{DA}{SP} = k" />
                  </div>
                  <p className="font-body text-sm text-white/80">{t.threeKnown}</p>
                  <div className="bg-slate-900/60 rounded-lg p-4">
                    <BlockMath math="\frac{a}{p} = \frac{b}{q} \Rightarrow a \times q = b \times p" />
                  </div>
                </div>
                <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-4">
                  <p className="font-body text-xs font-semibold text-slate-300 mb-2">{t.shadowIllustrationTitle}</p>
                  <img src="/bayangan-orang-pohon.png" alt={t.shadowPeopleAlt} className="w-full max-w-lg mx-auto rounded-lg block" />
                  <p className="font-body text-xs text-white/40 text-center mt-2">gemini.google.com/app</p>
                  <div className="bg-slate-900/60 rounded-lg p-3 mt-3">
                    <p className="font-body text-xs font-semibold text-green-300 mb-1">{t.shadowCaseTitle}</p>
                    <p className="font-body text-xs text-white/70">{t.shadowVariableLegend}</p>
                    <BlockMath math="\frac{h_1}{h_2} = \frac{s_1}{s_2}" />
                  </div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="font-body text-sm text-yellow-200">
                    {t.unitTip}
                  </p>
                </div>
              </div>
          </div>

          {/* ANIMASI INTERAKTIF */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
            <Header id="animasi" icon={<Target className="w-5 h-5" />} color="#f97316" label={t.animationHeader} />
            <div className="px-5 pb-5 space-y-3">
              <p className="font-body text-sm text-white/70 leading-relaxed">
                {t.animationDescription}
              </p>
              <ShadowAnimation t={t} language={language} />
            </div>
          </div>

          {/* CONTOH SOAL */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
            <Header id="contoh1" icon={<Calculator className="w-5 h-5" />} color="#60a5fa" label={t.examplesHeader} />
              <div className="px-5 pb-5 space-y-6">
                {/* MUDAH */}
                <div className="border-l-4 border-green-500 pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">{t.easy}</span>
                    <span className="font-body font-semibold text-white">{t.exampleOne}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="font-body text-sm text-white">
                      {t.exampleOneQuestion}
                    </p>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3">
                    <DiagramContoh1 t={t} />
                  </div>
                  <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                    <p className="font-body text-xs font-semibold text-green-400 mb-3">{t.solution}</p>
                    <div className="space-y-3 font-body text-sm text-white/80">
                      <p>{t.exampleOneOpening}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{AB}{PQ} = \frac{BC}{QR} = \frac{DC}{RS} = \frac{AD}{PS}" />
                      </div>
                      <p><strong>{t.findQR}</strong></p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{AB}{PQ} = \frac{BC}{QR} \Rightarrow \frac{8}{16} = \frac{5}{QR}" />
                        <BlockMath math="8 \times QR = 16 \times 5 \Rightarrow QR = \frac{80}{8} = 10\,\mathrm{cm}" />
                      </div>
                      <p><strong>{t.findRS}</strong></p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{AB}{PQ} = \frac{DC}{RS} \Rightarrow \frac{8}{16} = \frac{6}{RS}" />
                        <BlockMath math="8 \times RS = 16 \times 6 \Rightarrow RS = \frac{96}{8} = 12\,\mathrm{cm}" />
                      </div>
                      <p><strong>{t.findPS}</strong></p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{AB}{PQ} = \frac{AD}{PS} \Rightarrow \frac{8}{16} = \frac{4}{PS}" />
                        <BlockMath math="8 \times PS = 16 \times 4 \Rightarrow PS = \frac{64}{8} = 8\,\mathrm{cm}" />
                      </div>
                      <p><strong className="text-green-300">{t.exampleOneResult}</strong></p>
                    </div>
                  </div>
                </div>
                {/* SEDANG */}
                <div className="border-l-4 border-yellow-500 pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">{t.medium}</span>
                    <span className="font-body font-semibold text-white">{t.exampleTwo}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="font-body text-sm text-white">
                      {t.exampleTwoQuestion}
                    </p>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3">
                    <DiagramContoh2 t={t} />
                  </div>
                  <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                    <p className="font-body text-xs font-semibold text-yellow-400 mb-3">{t.solution}</p>
                    <div className="space-y-3 font-body text-sm text-white/80">
                      <p><strong>{t.exampleTwoFindRS}</strong></p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{AD}{PS} = \frac{CD}{RS} \Rightarrow \frac{4}{6} = \frac{3}{RS}" />
                        <BlockMath math={`RS = \\frac{3 \\times 6}{4} = \\frac{18}{4} = ${t.exampleTwoDecimal}\\,\\mathrm{cm}`} />
                      </div>
                      <p><strong>{t.exampleTwoFindAngle}</strong></p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\angle P = \angle A = 75°" />
                      </div>
                      <p><strong className="text-yellow-300">{t.exampleTwoResult}</strong></p>
                    </div>
                  </div>
                </div>
                {/* SULIT */}
                <div className="border-l-4 border-red-500 pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded">{t.hard}</span>
                    <span className="font-body font-semibold text-white">{t.exampleThree}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="font-body text-sm text-white">
                      {t.exampleThreeQuestion}
                    </p>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                    <p className="font-body text-xs font-semibold text-red-400 mb-3">{t.solution}</p>
                    <div className="space-y-3 font-body text-sm text-white/80">
                      <p>{t.exampleThreeConcept}</p>
                      <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-2 my-2">
                        <img src="/bayangan-tiang-pohon.png" alt={t.exampleThreeAlt} className="w-full max-w-sm mx-auto rounded-lg block" />
                      </div>
                      <div className="bg-slate-900/50 rounded p-3">
                        <p className="font-body text-xs text-white/70">{t.exampleThreeVariableLegend}</p>
                        <BlockMath math="\frac{h_1}{h_2} = \frac{s_1}{s_2}" />
                        <BlockMath math="\frac{4}{x} = \frac{2}{3}" />
                      </div>
                      <p><strong>{t.solve}</strong></p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="x = \frac{4 \times 3}{2} = \frac{12}{2} = 6\,\mathrm{m}" />
                      </div>
                      <p><strong className="text-primary">{t.exampleThreeResult}</strong></p>
                    </div>
                  </div>
                </div>
                {/* SULIT — ARAH SEGITIGA BERBEDA */}
                <div className="border-l-4 border-purple-500 pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded">{t.hard}</span>
                    <span className="font-body font-semibold text-white">{t.exampleFour}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="font-body text-sm text-white">
                      {t.exampleFourQuestion}
                    </p>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3">
                    <DiagramContoh4Soal t={t} />
                  </div>
                  <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                    <p className="font-body text-xs font-semibold text-purple-400 mb-3">{t.solution}</p>
                    <div className="space-y-3 font-body text-sm text-white/80">
                      <p>{t.exampleFourStepOne}</p>
                      <p>{t.exampleFourStepTwo}</p>
                      <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3">
                        <DiagramContoh4GambarUlang t={t} />
                      </div>
                      <p>{t.exampleFourStepThree}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="k = \frac{RQ}{AC} = \frac{24}{12} = 2" />
                      </div>
                      <p>{t.exampleFourStepFour}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="RP = k \times AB = 2 \times 5 = 10\,\mathrm{cm}" />
                        <BlockMath math="PQ = k \times BC = 2 \times 13 = 26\,\mathrm{cm}" />
                      </div>
                      <p><strong className="text-purple-300">{t.exampleFourResult}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* ── RANGKUMAN, TIPS & TRIK, KESIMPULAN ── */}
          <div className="space-y-4">

            {/* Rangkuman */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-500/30 rounded-xl p-5 space-y-4">
              <p className="font-body text-base font-bold text-emerald-300">{t.summaryTitle}</p>
              <div className="overflow-x-auto">
                <table className="w-full font-body text-xs text-white/80">
                  <thead>
                    <tr className="border-b border-emerald-500/30">
                      <th className="text-left py-2 pr-4 text-emerald-300">{t.summaryConcept}</th>
                      <th className="text-left py-2 text-emerald-300">{t.summaryFormula}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr>
                      <td className="py-2 pr-4 text-green-300 font-semibold">{t.scaleFactor}</td>
                      <td className="py-2"><InlineMath math="k = \dfrac{s_L}{s_S}" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-blue-300 font-semibold">{t.sideRatio}</td>
                      <td className="py-2"><InlineMath math="\dfrac{AB}{PQ} = \dfrac{BC}{QR} = \dfrac{CD}{RS} = k" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-purple-300 font-semibold">{t.findNewSide}</td>
                      <td className="py-2"><InlineMath math="s_L = k \times s_S" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-cyan-300 font-semibold">{t.angle}</td>
                      <td className="py-2">{t.angleRule}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-white/70">{t.summaryVariableLegend}</p>
              <div className="bg-slate-900/60 rounded-lg p-3 space-y-1 font-body text-xs text-white/75">
                <p>{t.systematicSteps}</p>
                <p>{t.shadowSummary}</p>
                <p>{t.validateRatios}</p>
              </div>
            </div>

            {/* Tips & Trik */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-3">
              <p className="font-body text-base font-bold text-amber-300">{t.tipsTitle}</p>
              <div className="space-y-3 font-body text-sm text-white/80">
                <div className="flex gap-3">
                  <span className="text-amber-400 font-bold shrink-0">①</span>
                  <div>
                    <p>{t.tipPairs}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-400 font-bold shrink-0">②</span>
                  <div>
                    <p><strong className="text-amber-300">{t.tipCrossMultiply}</strong></p>
                    <div className="bg-slate-900/50 rounded p-2 mt-1">
                      <BlockMath math="\frac{a}{p} = \frac{x}{q} \;\Longrightarrow\; x = \frac{a \times q}{p}" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-400 font-bold shrink-0">③</span>
                  <p><strong className="text-amber-300">{t.tipShadows}</strong> <InlineMath math="\frac{h}{s} = k" /></p>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-400 font-bold shrink-0">④</span>
                  <p>{t.tipCheck}</p>
                </div>
              </div>
            </div>

            {/* Kesimpulan */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 space-y-3">
              <p className="font-body text-base font-bold text-green-300">{t.conclusionTitle}</p>
              <div className="space-y-2 font-body text-sm text-white/80">
                <p>{t.conclusionIntro}</p>
                <div className="bg-slate-900/60 rounded-lg p-3 space-y-1">
                  <p>🔹 {t.conclusionFindK}</p>
                  <p>🔹 {t.conclusionUseK}</p>
                  <p>🔹 {t.conclusionAngles}</p>
                  <p>🔹 {t.conclusionApplications}</p>
                </div>
                <p className="text-xs text-white/55 italic">{t.conclusionNext}</p>
              </div>
            </div>

          </div>

        </div>
        <div className="mt-8 text-center">
          <button onClick={() => { playPopSound(); navigate("/buku-animasi-matematika/kesebangunan-kekongruenan"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body">
            {t.backLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenghitungRusukPage;
