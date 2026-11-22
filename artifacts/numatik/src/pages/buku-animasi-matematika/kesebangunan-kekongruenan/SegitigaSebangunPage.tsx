import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { BookOpen, Lightbulb, Calculator, Target } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { pickLang } from "@/lib/pickLang";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

const id = {
  pageTitle: "SEGITIGA-SEGITIGA SEBANGUN",
  pageSubtitle: "Kelas 9 · Kesebangunan dan Kekongruenan · Materi Matematika",
  introHeader: "🔺 Mengapa Segitiga Istimewa?",
  introParagraph: "Pada bangun datar umum, kita memerlukan dua syarat untuk membuktikan kesebangunan: sudut-sudut yang sama besar dan sisi-sisi yang sebanding. Namun, untuk segitiga, cukup membuktikan salah satunya karena kedua sifat tersebut otomatis saling berkaitan.",
  introRule: "Dua segitiga sebangun jika memenuhi salah satu syarat berikut:",
  introAA: "Sudut-sudut yang bersesuaian sama besar",
  introSSS: "Sisi-sisi yang bersesuaian sebanding",
  introSAS: "Dua pasang sisi sebanding dan sudut apit sama besar",
  demoTitle: "🎮 Coba Sendiri — Mengapa Cukup Satu Syarat?",
  focusAngles: "🔺 Fokus Sudut",
  focusSides: "📏 Fokus Sisi",
  smallerTriangle: "△PQR lebih kecil",
  largerTriangle: "△PQR lebih besar",
  angleSummary: "✅ Sudut-sudut bersesuaian selalu sama besar, meskipun ukuran berubah!",
  angleImplication: "Karena sudut-sudut sama, sisi-sisi otomatis sebanding dengan rasio k =",
  sideSummary: "✅ Rasio semua pasang sisi selalu sama dengan k — geser pengatur!",
  sideImplication: "Karena sisi-sisi sebanding, sudut-sudut otomatis sama besar!",
  demoConclusion: "💡 Kesimpulan: Cukup buktikan salah satu—sudut atau sisi—karena yang satu otomatis menjamin yang lain!",
  scaleSlider: "Pengatur ukuran segitiga",
  aaHeader: "📘 Sub-Bab 1: Syarat Kesebangunan Segitiga",
  takeaway: "🎯 Ringkasan Intisari",
  aaCriterion: "Syarat Sd, Sd (Sudut-Sudut):",
  aaExplanation: "Jika dua pasang sudut bersesuaian dari dua segitiga sama besar, sudut ketiga juga sama besar karena jumlah sudut segitiga adalah 180°. Jadi, kedua segitiga sebangun.",
  sssCriterion: "Syarat S, S, S (Sisi-Sisi-Sisi):",
  sasCriterion: "Syarat S, Sd, S (Sisi-Sudut-Sisi):",
  positionsHeader: "🔷 Sub-Bab 2: Posisi Dua Segitiga Sebangun",
  positionsIntro: "Dua segitiga sebangun dapat muncul dalam berbagai konfigurasi. Walaupun tampilannya berbeda, kesebangunan tetap berlaku; perhatikan tanda busur berwarna yang sama pada sudut-sudut bersesuaian.",
  positionCaption: "△ADE di dalam △ABC (DE ∥ BC)",
  positions: [
    { title: "Terpisah", sub: "Dua segitiga bebas", info: "Kedua segitiga terpisah dan tidak saling bersentuhan. Busur berwarna sama menandai sudut-sudut bersesuaian yang sama besar. Ini adalah konfigurasi yang umum dijumpai dalam soal.", condition: "Sd, Sd, Sd — ketiga pasang sudut sama besar" },
    { title: "Bertolak Belakang", sub: "Sudut bertolak belakang", info: "Kedua segitiga bertemu di titik E. Sudut AEB dan CED sama besar karena merupakan sudut bertolak belakang. Jika AB sejajar dengan DC, sudut-sudut bersesuaian pada A dan D serta B dan C juga sama besar.", condition: "∠AEB = ∠CED (bertolak belakang) dan AB ∥ DC" },
    { title: "Di Dalam", sub: "Garis sejajar memotong", info: "Segitiga kecil PTS berada di dalam segitiga besar PRQ dan berbagi sudut P. Karena TS sejajar dengan RQ, sudut-sudut bersesuaian sama besar; maka segitiga PTS sebangun dengan PRQ.", condition: "Sudut P sama dan TS ∥ RQ → kriteria AA terpenuhi" },
    { title: "Siku-siku dan Garis Tinggi", sub: "Tiga segitiga sebangun", info: "Pada segitiga siku-siku ACB dengan sudut siku-siku di C, garis tinggi CD membentuk segitiga ADC dan CDB. Ketiganya saling sebangun karena masing-masing berbagi sudut dengan segitiga induk.", condition: "△ADC ∼ △CDB ∼ △ACB (siku-siku dan sudut)" },
    { title: "Sudut Berimpit", sub: "Sudut sekutu di satu titik", info: "Kedua segitiga berbagi sudut P. Busur dan tanda sama menunjukkan bahwa sudut T dan Q juga sama besar. Karena TS tidak sejajar dengan RQ, kesebangunan PTS dan PQR berasal dari dua pasang sudut yang sama besar, bukan dari garis sejajar.", condition: "Sudut P sama dan ∠PTS = ∠PQR → kriteria AA terpenuhi" },
  ],
  sectionPart: "Bagian",
  conditionLabel: "✅ Syarat yang terpenuhi:",
  parallelHeader: "📘 Sub-Bab 3: Teorema Garis Sejajar pada Segitiga",
  parallelIllustration: "🔍 ILUSTRASI GARIS SEJAJAR PADA SEGITIGA:",
  parallelIntro: "Jika DE ∥ BC, maka ∠ADE = ∠ABC dan ∠AED = ∠ACB. Dengan sudut A yang sama, kedua segitiga memenuhi kriteria Sudut-Sudut (Sd, Sd):",
  parallelDerivation: "Untuk memperoleh teorema garis sejajar, gunakan dua perbandingan pertama dan ingat bahwa sisi penuh tersusun dari bagian-bagiannya:",
  cancelTerms: "Suku AD · AE muncul di kedua ruas, sehingga dapat dihilangkan:",
  parallelConclusion: "Kesebangunan menghasilkan perbandingan sisi-sisi penuh. Dengan menguraikan AB dan AC menjadi bagian-bagiannya, kita memperoleh perbandingan ruas yang berhadapan AD/DB = AE/EC. Inilah teorema garis sejajar pada segitiga.",
  parallelConverse: "Kebalikannya juga berlaku: jika AD/DB = AE/EC, maka DE ∥ BC, dengan posisi titik seperti pada gambar.",
  parallelTip: "Tips: Teorema ini sangat berguna untuk menghitung panjang ruas garis dalam segitiga. Garis sejajar membagi kedua sisi lainnya secara proporsional.",
  examplesHeader: "📝 Contoh Soal — Segitiga Sebangun",
  easy: "MUDAH",
  medium: "SEDANG",
  hard: "SULIT",
  example: (n: number) => `Contoh ${n}`,
  illustration: "📐 ILUSTRASI:",
  solution: "PEMBAHASAN:",
  example1Question: "Pada gambar, dua garis sejajar memotong sisi-sisi segitiga. Panjang ruas garis diketahui seperti yang ditunjukkan. Tentukan nilai a, b, dan c.",
  example1Reason: "Karena garis-garis sejajar memotong kedua sisi segitiga, teorema garis sejajar menyatakan bahwa ruas-ruas bersesuaian memiliki perbandingan yang sama.",
  findA: "Mencari a (ruas kiri atas : kiri tengah = kanan atas : kanan tengah):",
  findB: "Mencari b (ruas kiri bawah : kiri tengah = kanan bawah : kanan tengah):",
  findC: "Mencari c (bagian alas di luar garis sejajar kedua):",
  example1Result: "a = 12, b = 4, c = 4 ✓",
  example2Question: "Perhatikan dua segitiga yang berhadapan pada titik E. Diketahui AB ∥ CD, AE = 4 cm, CE = 6 cm, dan CD = 18 cm. Tentukan panjang AB.",
  example2Reason: "Karena AB ∥ CD, sudut-sudut yang terbentuk oleh garis potong sama besar. Selain itu, ∠AEB = ∠CED karena merupakan sudut bertolak belakang. Berdasarkan kriteria AA, △ABE ∼ △CDE, dengan pasangan titik A ↔ C, B ↔ D, dan E ↔ E.",
  correspondingRatio: "Gunakan perbandingan sisi-sisi yang bersesuaian:",
  example2Result: "Jadi, panjang AB = 12 cm. ✓",
  example3Question: "Pada gambar, D terletak pada AC dan E terletak pada BC. Diketahui AD = 12 cm, DC = 8 cm, DE = 6 cm, dan EC = 10 cm. Tanda busur menunjukkan ∠ABC = ∠CDE, sedangkan sudut di C sama besar. Tentukan x (panjang BE) dan y (panjang AB).",
  example3Reason: "Tanda busur menunjukkan ∠CDE = ∠ABC. Sudut di C juga sama besar, yaitu ∠DCE = ∠BCA. Jadi, berdasarkan kriteria AA, △DEC ∼ △BAC, dengan pasangan titik D ↔ B, E ↔ A, dan C ↔ C.",
  redrawTip: "💡 Trik: gambar ulang dengan orientasi yang sama",
  redrawExplanation: "Agar orientasi segitiga lebih jelas, gambar ulang △ABC seperti pada soal. Di sebelah kanannya, tambahkan segitiga yang sama tetapi lebih kecil, lalu beri label D, E, dan C. Dengan begitu, titik-titik bersesuaian berada pada posisi yang sama.",
  pointPairs: "Pembahasan tetap menggunakan pasangan titik pada gambar soal:",
  triangleOrder: "Urutan nama segitiga harus mengikuti pasangan titik:",
  step: (n: number) => `Langkah ${n}:`,
  findAC: "Tentukan AC:",
  findY: "Cari y = AB:",
  findX: "Cari x = BE:",
  example3Result: "x = BE = 6 cm dan y = AB = 12 cm.",
  example4Title: "Latihan menghitung panjang sisi pada bangun sebangun",
  example4Opening: "Perhatikan trapesium ABCD berikut.",
  example4Question: "Diketahui AB = 51 cm, DC = 36 cm, AP = 12 cm, dan PD = 8 cm. Hitung panjang PQ.",
  example4Reason: "Tarik garis lurus dari D ke B (atau dari C ke A). Pada pembahasan ini, kita memilih DB seperti pada gambar. Garis BD memotong PQ di M, sehingga △ADB sebangun dengan △PDM. Dari kesebangunan tersebut, diperoleh:",
  findAD: "Cari AD:",
  findPM: "Karena △ADB ∼ △PDM, cari PM:",
  findMQ: "Karena MQ ∥ DC dan △BMQ ∼ △BDC, cari MQ:",
  findPQ: "Hitung PQ:",
  example4Result: "PQ = 42 cm.",
  summaryTitle: "📋 Rangkuman — Segitiga Sebangun",
  summaryCondition: "Syarat",
  summaryAAName: "Sd, Sd (Sudut-Sudut)",
  summarySASName: "S, Sd, S (Sisi-Sudut-Sisi)",
  summarySSSName: "S, S, S (Sisi-Sisi-Sisi)",
  summaryRequired: "Yang Diperlukan",
  summaryExample: "Contoh",
  summaryAA: "2 pasang sudut sama besar",
  summarySAS: "2 pasang sisi sebanding dan sudut apit sama besar",
  summarySSS: "3 pasang sisi bersesuaian sebanding",
  summaryParallel: "📌 Teorema Garis Sejajar: Jika XY ∥ BC pada △ABC, maka AX/XB = AY/YC dan △AXY ∼ △ABC.",
  summaryThirdAngle: "📌 Sudut ketiga: Jika dua sudut sama besar, sudut ketiga otomatis sama besar karena jumlah sudut segitiga adalah 180°.",
  summaryScale: "📌 Rasio k: Jika △ABC ∼ △PQR dengan rasio k, maka AB = k · PQ, BC = k · QR, dan AC = k · PR.",
  tipsTitle: "💡 Tips & Trik",
  tip1: "Tentukan pasangan titik bersesuaian terlebih dahulu. Cocokkan sudut-sudut yang sama besar, lalu tulis titik-titik dalam urutan pasangan yang benar.",
  tip1Example: "Jika ∠A = ∠P dan ∠B = ∠Q, tulis △ABC ∼ △PQR (bukan △ABC ∼ △QPR).",
  tip2: "AA adalah cara termudah: cukup tunjukkan dua sudut sama besar, maka sudut ketiga otomatis sama. Cara ini sering muncul pada soal garis sejajar atau sudut bertolak belakang.",
  tip3: "Perbandingan sisi membantu mencari sisi yang belum diketahui:",
  tip3Formula: "sisi 1 segitiga kecil / sisi 1 segitiga besar = sisi 2 segitiga kecil / sisi 2 segitiga besar",
  tip4: "Pada trapesium dengan diagonal, garis yang memotong kedua diagonal membentuk segitiga-segitiga sebangun. Gunakan sifat ini untuk mencari panjang ruas.",
  conclusionTitle: "✅ Kesimpulan",
  conclusionIntro: "Dua segitiga sebangun jika memenuhi satu atau lebih dari tiga syarat: AA, SAS, atau SSS.",
  conclusion1: "Kesebangunan tidak mengharuskan ukuran sama—hanya bentuknya yang sama.",
  conclusion2: "Faktor skala k menghubungkan semua sisi yang bersesuaian.",
  conclusion3: "Kesebangunan segitiga sering digunakan pada soal garis sejajar, bayangan, dan trapesium.",
  conclusion4: "Jika k = 1, kedua segitiga sebangun sekaligus kongruen.",
  conclusionNote: "Konsep ini penting untuk menghitung panjang sisi dan membuktikan teorema geometri lainnya.",
  back: "← Kembali ke Kesebangunan dan Kekongruenan",
  decimalLabel: "Contoh format bilangan desimal:",
  decimalText: "Contoh panjang sisi dalam format lokal:",
  decimalMath: "1.234{,}5",
  svgSimilarAngles: "Sudut-sudut bersesuaian sama besar",
  svgOverlap: "AB ∥ CD · sudut di E bertolak belakang",
  svgInsideTitle: "△PTS di dalam △PRQ",
  svgInsideCaption: "Segitiga kecil △PTS berada di dalam △PRQ",
};
type T = typeof id;
const en: T = {
  pageTitle: "SIMILAR TRIANGLES",
  pageSubtitle: "Grade 9 · Similarity and Congruence · Mathematics",
  introHeader: "🔺 Why Are Triangles Special?",
  introParagraph: "For general plane figures, two conditions are needed to prove similarity: equal angles and proportional sides. For triangles, however, proving either one is enough because the two properties are automatically linked.",
  introRule: "Two triangles are similar if they satisfy either of these conditions:",
  introAA: "Corresponding angles are equal",
  introSSS: "Corresponding sides are proportional",
  introSAS: "Two pairs of proportional sides and an equal included angle",
  demoTitle: "🎮 Try It Yourself — Why Is One Condition Enough?",
  focusAngles: "🔺 Focus on Angles",
  focusSides: "📏 Focus on Sides",
  smallerTriangle: "△PQR is smaller",
  largerTriangle: "△PQR is larger",
  angleSummary: "✅ Corresponding angles always stay equal, even when the size changes!",
  angleImplication: "Equal angles automatically make the sides proportional with ratio k =",
  sideSummary: "✅ Every pair of side ratios is always k — move the slider!",
  sideImplication: "Proportional sides automatically make the angles equal!",
  demoConclusion: "💡 Conclusion: Prove just one—angles or sides—because one automatically guarantees the other!",
  scaleSlider: "Triangle size slider",
  aaHeader: "📘 Subtopic 1: Triangle Similarity Criteria",
  takeaway: "🎯 Key Takeaways",
  aaCriterion: "AA criterion (Angle-Angle):",
  aaExplanation: "If two pairs of corresponding angles in two triangles are equal, the third pair is equal too because the angles in a triangle sum to 180°. Therefore, the triangles are similar.",
  sssCriterion: "SSS criterion (Side-Side-Side):",
  sasCriterion: "SAS criterion (Side-Angle-Side):",
  positionsHeader: "🔷 Subtopic 2: Configurations of Similar Triangles",
  positionsIntro: "Similar triangles can appear in many configurations. Even when they look different, the similarity criteria still hold; look for matching colored arcs on corresponding angles.",
  positionCaption: "△ADE inside △ABC (DE ∥ BC)",
  positions: [
    { title: "Separate", sub: "Two independent triangles", info: "The triangles are separate and do not touch. Matching colored arcs mark equal corresponding angles. This is a common configuration in geometry problems.", condition: "AAA — all three pairs of angles are equal" },
    { title: "Vertically Opposite", sub: "Vertically opposite angles", info: "The triangles meet at point E. Angles AEB and CED are equal because they are vertically opposite. If AB is parallel to DC, the corresponding angles at A and D, and at B and C, are also equal.", condition: "∠AEB = ∠CED (vertically opposite) and AB ∥ DC" },
    { title: "Nested", sub: "A parallel line cuts the triangle", info: "The small triangle PTS lies inside the larger triangle PRQ and shares angle P. Since TS is parallel to RQ, corresponding angles are equal, so PTS is similar to PRQ.", condition: "Equal angle P and TS ∥ RQ → AA criterion" },
    { title: "Right Angle and Altitude", sub: "Three similar triangles", info: "In right triangle ACB, with the right angle at C, altitude CD forms triangles ADC and CDB. All three are similar because each shares an angle with the original triangle.", condition: "△ADC ∼ △CDB ∼ △ACB (right angle and angle)" },
    { title: "Shared Angle", sub: "A common angle at one point", info: "The triangles share angle P. The arcs and matching marks show that angles T and Q are also equal. Since TS is not parallel to RQ, triangles PTS and PQR are similar because two pairs of angles are equal, not because of parallel lines.", condition: "Equal angle P and ∠PTS = ∠PQR → AA criterion" },
  ],
  sectionPart: "Part",
  conditionLabel: "✅ Criterion satisfied:",
  parallelHeader: "📘 Subtopic 3: The Triangle Proportionality Theorem",
  parallelIllustration: "🔍 PARALLEL LINES IN A TRIANGLE:",
  parallelIntro: "If DE ∥ BC, then ∠ADE = ∠ABC and ∠AED = ∠ACB. Together with the shared angle A, the triangles satisfy the Angle-Angle (AA) criterion:",
  parallelDerivation: "To obtain the parallel-line theorem, use the first two ratios and note that each whole side consists of its parts:",
  cancelTerms: "The term AD · AE appears on both sides, so it can be canceled:",
  parallelConclusion: "Similarity gives ratios of the whole sides. Splitting AB and AC into their parts gives the ratio of opposite segments AD/DB = AE/EC. This is the triangle proportionality theorem.",
  parallelConverse: "The converse also holds: if AD/DB = AE/EC, then DE ∥ BC, provided the points are positioned as shown.",
  parallelTip: "Tip: This theorem is very useful for finding segment lengths in triangles. A parallel line divides the other two sides proportionally.",
  examplesHeader: "📝 Worked Examples — Similar Triangles",
  easy: "EASY",
  medium: "MEDIUM",
  hard: "HARD",
  example: (n: number) => `Example ${n}`,
  illustration: "📐 DIAGRAM:",
  solution: "SOLUTION:",
  example1Question: "In the diagram, two parallel lines cut the sides of a triangle. Segment lengths are shown. Find a, b, and c.",
  example1Reason: "Because parallel lines cut both sides of the triangle, the triangle proportionality theorem says that corresponding segments have equal ratios.",
  findA: "Find a (upper left : middle left = upper right : middle right):",
  findB: "Find b (lower left : middle left = lower right : middle right):",
  findC: "Find c (the base segment beyond the second parallel line):",
  example1Result: "a = 12, b = 4, c = 4 ✓",
  example2Question: "Consider two triangles opposite each other at point E. Given AB ∥ CD, AE = 4 cm, CE = 6 cm, and CD = 18 cm, find AB.",
  example2Reason: "Since AB ∥ CD, the angles formed by the transversal are equal. Also, ∠AEB = ∠CED because they are vertically opposite. By AA, △ABE ∼ △CDE, with corresponding vertices A ↔ C, B ↔ D, and E ↔ E.",
  correspondingRatio: "Use the ratio of corresponding sides:",
  example2Result: "Therefore, AB = 12 cm. ✓",
  example3Question: "In the diagram, D lies on AC and E lies on BC. Given AD = 12 cm, DC = 8 cm, DE = 6 cm, and EC = 10 cm, the arcs indicate ∠ABC = ∠CDE, and the angles at C are equal. Find x (the length of BE) and y (the length of AB).",
  example3Reason: "The arcs show that ∠CDE = ∠ABC. The angles at C are also equal: ∠DCE = ∠BCA. Therefore, by AA, △DEC ∼ △BAC, with corresponding vertices D ↔ B, E ↔ A, and C ↔ C.",
  redrawTip: "💡 Tip: redraw the triangles with the same orientation",
  redrawExplanation: "To see the orientation clearly, redraw △ABC as it appears in the problem. Add a smaller copy to its right, labeled D, E, and C. This places corresponding vertices in matching positions.",
  pointPairs: "The solution still uses the corresponding vertices from the original diagram:",
  triangleOrder: "Write triangle names in the order of their corresponding vertices:",
  step: (n: number) => `Step ${n}:`,
  findAC: "Find AC:",
  findY: "Find y = AB:",
  findX: "Find x = BE:",
  example3Result: "x = BE = 6 cm and y = AB = 12 cm.",
  example4Title: "Practice finding side lengths in similar figures",
  example4Opening: "Consider trapezoid ABCD below.",
  example4Question: "Given AB = 51 cm, DC = 36 cm, AP = 12 cm, and PD = 8 cm, find PQ.",
  example4Reason: "Draw a straight line from D to B (or from C to A). Here we use DB, as shown. BD intersects PQ at M, so △ADB is similar to △PDM. Therefore:",
  findAD: "Find AD:",
  findPM: "Since △ADB ∼ △PDM, find PM:",
  findMQ: "Since MQ ∥ DC and △BMQ ∼ △BDC, find MQ:",
  findPQ: "Find PQ:",
  example4Result: "PQ = 42 cm.",
  summaryTitle: "📋 Summary — Similar Triangles",
  summaryCondition: "Criterion",
  summaryAAName: "AA (Angle-Angle)",
  summarySASName: "SAS (Side-Angle-Side)",
  summarySSSName: "SSS (Side-Side-Side)",
  summaryRequired: "Requirements",
  summaryExample: "Example",
  summaryAA: "2 pairs of equal angles",
  summarySAS: "2 pairs of proportional sides and equal included angles",
  summarySSS: "3 pairs of proportional corresponding sides",
  summaryParallel: "📌 Triangle proportionality theorem: If XY ∥ BC in △ABC, then AX/XB = AY/YC and △AXY ∼ △ABC.",
  summaryThirdAngle: "📌 Third angle: If two angles are equal, the third is automatically equal because the angles in a triangle sum to 180°.",
  summaryScale: "📌 Scale factor k: If △ABC ∼ △PQR with ratio k, then AB = k · PQ, BC = k · QR, and AC = k · PR.",
  tipsTitle: "💡 Tips & Tricks",
  tip1: "Identify corresponding vertices first. Match the equal angles, then write the vertices in the correct corresponding order.",
  tip1Example: "If ∠A = ∠P and ∠B = ∠Q, write △ABC ∼ △PQR (not △ABC ∼ △QPR).",
  tip2: "AA is the easiest method: show that two angles are equal, and the third is automatically equal. This often appears in problems with parallel lines or vertically opposite angles.",
  tip3: "Side ratios help find an unknown side:",
  tip3Formula: "side 1 of small triangle / side 1 of large triangle = side 2 of small triangle / side 2 of large triangle",
  tip4: "In a trapezoid with diagonals, a line cutting both diagonals forms similar triangles. Use this property to find segment lengths.",
  conclusionTitle: "✅ Conclusion",
  conclusionIntro: "Two triangles are similar if they satisfy at least one of the three criteria: AA, SAS, or SSS.",
  conclusion1: "Similarity does not require equal size—only the same shape.",
  conclusion2: "The scale factor k relates all corresponding sides.",
  conclusion3: "Triangle similarity often appears in problems about parallel lines, shadows, and trapezoids.",
  conclusion4: "If k = 1, the triangles are both similar and congruent.",
  conclusionNote: "This concept is essential for finding side lengths and proving further geometry theorems.",
  back: "← Back to Similarity and Congruence",
  decimalLabel: "Example of decimal number formatting:",
  decimalText: "An example side length in the local number format:",
  decimalMath: "1{,}234.5",
  svgSimilarAngles: "Corresponding angles are equal",
  svgOverlap: "AB ∥ CD · vertically opposite angles at E",
  svgInsideTitle: "△PTS inside △PRQ",
  svgInsideCaption: "The small triangle △PTS lies inside △PRQ",
};
const msMY: T = {
  pageTitle: "SEGITIGA-SEGITIGA SERUPA",
  pageSubtitle: "Tingkatan 3 · Keserupaan dan Kekongruenan · Matematik",
  introHeader: "🔺 Mengapakah Segi Tiga Istimewa?",
  introParagraph: "Bagi bentuk satah umum, dua syarat diperlukan untuk membuktikan keserupaan: sudut yang sama besar dan sisi yang berkadaran. Namun, bagi segi tiga, membuktikan salah satu sahaja sudah memadai kerana kedua-dua sifat ini saling berkaitan secara automatik.",
  introRule: "Dua segi tiga serupa jika memenuhi salah satu syarat berikut:",
  introAA: "Sudut sepadan sama besar",
  introSSS: "Sisi sepadan berkadaran",
  introSAS: "Dua pasang sisi berkadaran dan sudut apit sama besar",
  demoTitle: "🎮 Cuba Sendiri — Mengapakah Satu Syarat Sudah Memadai?",
  focusAngles: "🔺 Fokus pada Sudut",
  focusSides: "📏 Fokus pada Sisi",
  smallerTriangle: "△PQR lebih kecil",
  largerTriangle: "△PQR lebih besar",
  angleSummary: "✅ Sudut sepadan sentiasa sama besar walaupun saiz berubah!",
  angleImplication: "Sudut yang sama secara automatik menjadikan sisi berkadaran dengan nisbah k =",
  sideSummary: "✅ Nisbah setiap pasangan sisi sentiasa k — gerakkan peluncur!",
  sideImplication: "Sisi berkadaran secara automatik menjadikan sudut sama besar!",
  demoConclusion: "💡 Kesimpulan: Buktikan satu sahaja—sudut atau sisi—kerana satu lagi terjamin secara automatik!",
  scaleSlider: "Peluncur saiz segi tiga",
  aaHeader: "📘 Subtopik 1: Syarat Keserupaan Segi Tiga",
  takeaway: "🎯 Ringkasan Utama",
  aaCriterion: "Syarat Sd, Sd (Sudut-Sudut):",
  aaExplanation: "Jika dua pasang sudut sepadan bagi dua segi tiga sama besar, pasangan ketiga juga sama kerana jumlah sudut segi tiga ialah 180°. Maka, kedua-dua segi tiga serupa.",
  sssCriterion: "Syarat S, S, S (Sisi-Sisi-Sisi):",
  sasCriterion: "Syarat S, Sd, S (Sisi-Sudut-Sisi):",
  positionsHeader: "🔷 Subtopik 2: Kedudukan Dua Segi Tiga Serupa",
  positionsIntro: "Segi tiga serupa boleh muncul dalam pelbagai susunan. Walaupun rupanya berbeza, syarat keserupaan tetap dipenuhi; perhatikan tanda lengkok berwarna sama pada sudut sepadan.",
  positionCaption: "△ADE di dalam △ABC (DE ∥ BC)",
  positions: [
    { title: "Berasingan", sub: "Dua segi tiga bebas", info: "Kedua-dua segi tiga terpisah dan tidak bersentuhan. Lengkok berwarna sama menandakan sudut sepadan yang sama besar. Susunan ini kerap ditemui dalam soalan geometri.", condition: "Sd, Sd, Sd — ketiga-tiga pasang sudut sama besar" },
    { title: "Bertentangan Menegak", sub: "Sudut bertentangan menegak", info: "Kedua-dua segi tiga bertemu di titik E. Sudut AEB dan CED sama besar kerana merupakan sudut bertentangan menegak. Jika AB selari dengan DC, sudut sepadan di A dan D serta B dan C juga sama besar.", condition: "∠AEB = ∠CED (bertentangan menegak) dan AB ∥ DC" },
    { title: "Di Dalam", sub: "Garis selari memotong segi tiga", info: "Segi tiga kecil PTS berada di dalam segi tiga besar PRQ dan berkongsi sudut P. Oleh sebab TS selari dengan RQ, sudut sepadan sama besar, maka PTS serupa dengan PRQ.", condition: "Sudut P sama dan TS ∥ RQ → syarat AA dipenuhi" },
    { title: "Sudut Tegak dan Garis Tinggi", sub: "Tiga segi tiga serupa", info: "Dalam segi tiga bersudut tegak ACB dengan sudut tegak di C, garis tinggi CD membentuk segi tiga ADC dan CDB. Ketiga-tiganya serupa kerana setiap segi tiga berkongsi sudut dengan segi tiga asal.", condition: "△ADC ∼ △CDB ∼ △ACB (sudut tegak dan sudut)" },
    { title: "Sudut Sepunya", sub: "Sudut sepunya pada satu titik", info: "Kedua-dua segi tiga berkongsi sudut P. Lengkok dan tanda yang sepadan menunjukkan sudut T dan Q juga sama besar. Oleh sebab TS tidak selari dengan RQ, segi tiga PTS dan PQR serupa kerana dua pasang sudut sama besar, bukannya kerana garis selari.", condition: "Sudut P sama dan ∠PTS = ∠PQR → syarat AA dipenuhi" },
  ],
  sectionPart: "Bahagian",
  conditionLabel: "✅ Syarat dipenuhi:",
  parallelHeader: "📘 Subtopik 3: Teorem Garis Selari dalam Segi Tiga",
  parallelIllustration: "🔍 ILUSTRASI GARIS SELARI DALAM SEGI TIGA:",
  parallelIntro: "Jika DE ∥ BC, maka ∠ADE = ∠ABC dan ∠AED = ∠ACB. Bersama sudut A yang sama, kedua-dua segi tiga memenuhi syarat Sudut-Sudut (Sd, Sd):",
  parallelDerivation: "Untuk mendapatkan teorem garis selari, gunakan dua nisbah pertama dan ingat bahawa sisi penuh terdiri daripada bahagian-bahagiannya:",
  cancelTerms: "Sebutan AD · AE muncul pada kedua-dua belah, maka sebutan itu boleh dibatalkan:",
  parallelConclusion: "Keserupaan memberikan nisbah sisi penuh. Dengan menguraikan AB dan AC kepada bahagian masing-masing, kita memperoleh nisbah ruas bertentangan AD/DB = AE/EC. Inilah teorem garis selari dalam segi tiga.",
  parallelConverse: "Songsangnya juga benar: jika AD/DB = AE/EC, maka DE ∥ BC, dengan kedudukan titik seperti dalam rajah.",
  parallelTip: "Petua: Teorem ini sangat berguna untuk mencari panjang ruas garis dalam segi tiga. Garis selari membahagikan dua sisi lain secara berkadaran.",
  examplesHeader: "📝 Contoh Soalan — Segi Tiga Serupa",
  easy: "MUDAH",
  medium: "SEDERHANA",
  hard: "SUKAR",
  example: (n: number) => `Contoh ${n}`,
  illustration: "📐 ILUSTRASI:",
  solution: "PENYELESAIAN:",
  example1Question: "Dalam rajah, dua garis selari memotong sisi-sisi segi tiga. Panjang ruas ditunjukkan dalam rajah. Cari nilai a, b dan c.",
  example1Reason: "Oleh sebab garis selari memotong kedua-dua sisi segi tiga, teorem garis selari menyatakan bahawa ruas sepadan mempunyai nisbah yang sama.",
  findA: "Cari a (kiri atas : kiri tengah = kanan atas : kanan tengah):",
  findB: "Cari b (kiri bawah : kiri tengah = kanan bawah : kanan tengah):",
  findC: "Cari c (bahagian tapak di luar garis selari kedua):",
  example1Result: "a = 12, b = 4, c = 4 ✓",
  example2Question: "Perhatikan dua segi tiga yang bertentangan pada titik E. Diberi AB ∥ CD, AE = 4 cm, CE = 6 cm dan CD = 18 cm. Cari panjang AB.",
  example2Reason: "Oleh sebab AB ∥ CD, sudut yang terbentuk oleh garis rentas adalah sama besar. Selain itu, ∠AEB = ∠CED kerana merupakan sudut bertentangan menegak. Mengikut syarat AA, △ABE ∼ △CDE, dengan pasangan titik A ↔ C, B ↔ D dan E ↔ E.",
  correspondingRatio: "Gunakan nisbah sisi sepadan:",
  example2Result: "Jadi, panjang AB = 12 cm. ✓",
  example3Question: "Dalam rajah, D terletak pada AC dan E terletak pada BC. Diberi AD = 12 cm, DC = 8 cm, DE = 6 cm dan EC = 10 cm. Lengkok menunjukkan ∠ABC = ∠CDE, manakala sudut di C adalah sama. Cari x (panjang BE) dan y (panjang AB).",
  example3Reason: "Tanda lengkok menunjukkan ∠CDE = ∠ABC. Sudut di C juga sama, iaitu ∠DCE = ∠BCA. Maka, mengikut syarat AA, △DEC ∼ △BAC dengan pasangan titik D ↔ B, E ↔ A dan C ↔ C.",
  redrawTip: "💡 Petua: lukis semula dengan orientasi yang sama",
  redrawExplanation: "Untuk melihat orientasi dengan jelas, lukis semula △ABC seperti dalam soalan. Tambahkan salinan yang lebih kecil di sebelah kanannya dan labelkan D, E dan C. Dengan itu, titik sepadan berada pada kedudukan yang sama.",
  pointPairs: "Penyelesaian masih menggunakan pasangan titik daripada rajah soalan:",
  triangleOrder: "Nama segi tiga perlu mengikut susunan pasangan titik:",
  step: (n: number) => `Langkah ${n}:`,
  findAC: "Cari AC:",
  findY: "Cari y = AB:",
  findX: "Cari x = BE:",
  example3Result: "x = BE = 6 cm dan y = AB = 12 cm.",
  example4Title: "Latihan mencari panjang sisi bagi bentuk serupa",
  example4Opening: "Perhatikan trapezium ABCD berikut.",
  example4Question: "Diberi AB = 51 cm, DC = 36 cm, AP = 12 cm dan PD = 8 cm. Cari panjang PQ.",
  example4Reason: "Lukis garis lurus dari D ke B (atau dari C ke A). Dalam penyelesaian ini, kita memilih DB seperti yang ditunjukkan. BD memotong PQ di M, maka △ADB serupa dengan △PDM. Oleh itu:",
  findAD: "Cari AD:",
  findPM: "Oleh sebab △ADB ∼ △PDM, cari PM:",
  findMQ: "Oleh sebab MQ ∥ DC dan △BMQ ∼ △BDC, cari MQ:",
  findPQ: "Cari PQ:",
  example4Result: "PQ = 42 cm.",
  summaryTitle: "📋 Ringkasan — Segi Tiga Serupa",
  summaryCondition: "Syarat",
  summaryAAName: "Sd, Sd (Sudut-Sudut)",
  summarySASName: "S, Sd, S (Sisi-Sudut-Sisi)",
  summarySSSName: "S, S, S (Sisi-Sisi-Sisi)",
  summaryRequired: "Keperluan",
  summaryExample: "Contoh",
  summaryAA: "2 pasang sudut sama besar",
  summarySAS: "2 pasang sisi berkadaran dan sudut apit sama besar",
  summarySSS: "3 pasang sisi sepadan berkadaran",
  summaryParallel: "📌 Teorem garis selari: Jika XY ∥ BC dalam △ABC, maka AX/XB = AY/YC dan △AXY ∼ △ABC.",
  summaryThirdAngle: "📌 Sudut ketiga: Jika dua sudut sama besar, sudut ketiga juga sama kerana jumlah sudut segi tiga ialah 180°.",
  summaryScale: "📌 Faktor skala k: Jika △ABC ∼ △PQR dengan nisbah k, maka AB = k · PQ, BC = k · QR dan AC = k · PR.",
  tipsTitle: "💡 Petua & Trik",
  tip1: "Kenal pasti pasangan titik sepadan terlebih dahulu. Padankan sudut yang sama besar, kemudian tulis titik mengikut turutan pasangan yang betul.",
  tip1Example: "Jika ∠A = ∠P dan ∠B = ∠Q, tulis △ABC ∼ △PQR (bukan △ABC ∼ △QPR).",
  tip2: "AA ialah cara paling mudah: tunjukkan dua sudut sama besar dan sudut ketiga akan sama secara automatik. Kaedah ini sering muncul dalam soalan garis selari atau sudut bertentangan menegak.",
  tip3: "Nisbah sisi membantu mencari sisi yang belum diketahui:",
  tip3Formula: "sisi 1 segi tiga kecil / sisi 1 segi tiga besar = sisi 2 segi tiga kecil / sisi 2 segi tiga besar",
  tip4: "Dalam trapezium dengan pepenjuru, garis yang memotong kedua-dua pepenjuru membentuk segi tiga-segi tiga serupa. Gunakan sifat ini untuk mencari panjang ruas.",
  conclusionTitle: "✅ Kesimpulan",
  conclusionIntro: "Dua segi tiga serupa jika memenuhi sekurang-kurangnya satu daripada tiga syarat: AA, SAS atau SSS.",
  conclusion1: "Keserupaan tidak memerlukan saiz yang sama—hanya bentuk yang sama.",
  conclusion2: "Faktor skala k menghubungkan semua sisi sepadan.",
  conclusion3: "Keserupaan segi tiga kerap digunakan dalam soalan garis selari, bayang-bayang dan trapezium.",
  conclusion4: "Jika k = 1, kedua-dua segi tiga serupa dan kongruen.",
  conclusionNote: "Konsep ini penting untuk mencari panjang sisi dan membuktikan teorem geometri yang seterusnya.",
  back: "← Kembali ke Keserupaan dan Kekongruenan",
  decimalLabel: "Contoh format nombor perpuluhan:",
  decimalText: "Contoh panjang sisi dalam format setempat:",
  decimalMath: "1{,}234.5",
  svgSimilarAngles: "Sudut sepadan sama besar",
  svgOverlap: "AB ∥ CD · sudut bertentangan menegak di E",
  svgInsideTitle: "△PTS di dalam △PRQ",
  svgInsideCaption: "Segi tiga kecil △PTS terletak di dalam △PRQ",
};
const ja: T = {
  pageTitle: "相似な三角形",
  pageSubtitle: "中学3年 · 相似と合同 · 数学",
  introHeader: "🔺 三角形が特別な理由",
  introParagraph: "一般の平面図形では、相似を証明するために等しい角と比例する辺の2つの条件が必要です。しかし三角形では、どちらか一方を示せば十分です。2つの性質は自動的に結び付いているからです。",
  introRule: "次のいずれかの条件を満たすと、2つの三角形は相似です。",
  introAA: "対応する角が等しい",
  introSSS: "対応する辺の比が等しい",
  introSAS: "2組の辺の比が等しく、その間の角も等しい",
  demoTitle: "🎮 試してみよう — 1つの条件だけでよい理由",
  focusAngles: "🔺 角に注目",
  focusSides: "📏 辺に注目",
  smallerTriangle: "△PQRを小さく",
  largerTriangle: "△PQRを大きく",
  angleSummary: "✅ 大きさが変わっても、対応する角は常に等しい！",
  angleImplication: "角が等しければ、辺の比も自動的にk =",
  sideSummary: "✅ すべての対応する辺の比は常にk — スライダーを動かそう！",
  sideImplication: "辺の比が等しければ、角も自動的に等しくなる！",
  demoConclusion: "💡 まとめ：角または辺のどちらか一方を示せば、もう一方も自動的に決まります！",
  scaleSlider: "三角形の大きさを調整",
  aaHeader: "📘 小節1：三角形の相似条件",
  takeaway: "🎯 要点",
  aaCriterion: "角・角（AA）の条件：",
  aaExplanation: "2つの三角形で対応する2組の角が等しければ、第3の角も等しくなります。三角形の内角の和は180°だからです。したがって相似です。",
  sssCriterion: "辺・辺・辺（SSS）の条件：",
  sasCriterion: "辺・角・辺（SAS）の条件：",
  positionsHeader: "🔷 小節2：相似な三角形の配置",
  positionsIntro: "相似な三角形はさまざまな配置で現れます。見た目が違っても相似条件は成り立ちます。対応する角に同じ色の弧が付いていることに注目しましょう。",
  positionCaption: "△ADEは△ABCの内側（DE ∥ BC）",
  positions: [
    { title: "分離", sub: "離れた2つの三角形", info: "2つの三角形は離れていて、接していません。同じ色の弧は、等しい対応する角を示します。問題でよく見られる配置です。", condition: "角・角・角 — 3組すべての角が等しい" },
    { title: "対頂角", sub: "対頂角を利用", info: "2つの三角形は点Eで交わります。∠AEBと∠CEDは対頂角なので等しくなります。AB ∥ DCなら、AとD、BとCの対応する角も等しくなります。", condition: "∠AEB = ∠CED（対頂角）かつ AB ∥ DC" },
    { title: "内側", sub: "平行線が三角形を横切る", info: "小さい三角形PTSは大きい三角形PRQの内側にあり、角Pを共有します。TS ∥ RQなので対応する角が等しく、PTSとPRQは相似です。", condition: "角Pが等しく、TS ∥ RQ → AA条件を満たす" },
    { title: "直角と高さ", sub: "3つの相似な三角形", info: "Cが直角の直角三角形ACBで、高さCDは三角形ADCとCDBを作ります。それぞれが元の三角形と角を共有するため、3つの三角形は相似です。", condition: "△ADC ∼ △CDB ∼ △ACB（直角と角）" },
    { title: "共通の角", sub: "1つの頂点にある共通角", info: "2つの三角形は角Pを共有します。弧と同じ印は、角Tと角Qも等しいことを示します。TSはRQと平行ではないため、平行線ではなく2組の角が等しいことから相似が分かります。", condition: "角Pが等しく、∠PTS = ∠PQR → AA条件を満たす" },
  ],
  sectionPart: "部分",
  conditionLabel: "✅ 成り立つ条件：",
  parallelHeader: "📘 小節3：三角形の平行線と線分の比",
  parallelIllustration: "🔍 三角形の平行線の図：",
  parallelIntro: "DE ∥ BCなら、∠ADE = ∠ABC、∠AED = ∠ACBです。共通する角Aと合わせて、2つの三角形は角・角（AA）の条件を満たします。",
  parallelDerivation: "平行線の定理を導くため、最初の2つの比を使い、全体の辺がそれぞれの部分からできていることを確認します。",
  cancelTerms: "AD · AEは両辺にあるので、消去できます。",
  parallelConclusion: "相似から辺全体の比が得られます。ABとACをそれぞれの部分に分けると、向かい合う線分の比AD/DB = AE/ECが得られます。これが三角形の平行線の定理です。",
  parallelConverse: "逆も成り立ちます。点が図のように配置されているとき、AD/DB = AE/ECならDE ∥ BCです。",
  parallelTip: "ヒント：この定理は三角形の線分の長さを求めるのに便利です。平行線は他の2辺を比例する線分に分けます。",
  examplesHeader: "📝 例題 — 相似な三角形",
  easy: "基本",
  medium: "標準",
  hard: "発展",
  example: (n: number) => `例題 ${n}`,
  illustration: "📐 図：",
  solution: "解答：",
  example1Question: "図のように、2本の平行線が三角形の辺を横切っています。線分の長さは図に示されています。a、b、cの値を求めましょう。",
  example1Reason: "平行線が三角形の2辺を横切るので、三角形の平行線の定理により対応する線分の比は等しくなります。",
  findA: "aを求める（左上：左中央 = 右上：右中央）：",
  findB: "bを求める（左下：左中央 = 右下：右中央）：",
  findC: "cを求める（2本目の平行線より外側の底辺）：",
  example1Result: "a = 12、b = 4、c = 4 ✓",
  example2Question: "点Eで向かい合う2つの三角形を見てみましょう。AB ∥ CD、AE = 4 cm、CE = 6 cm、CD = 18 cmのとき、ABの長さを求めましょう。",
  example2Reason: "AB ∥ CDなので、横切る直線によってできる角は等しくなります。また、∠AEB = ∠CEDは対頂角です。AA条件より△ABE ∼ △CDEで、対応する頂点はA ↔ C、B ↔ D、E ↔ Eです。",
  correspondingRatio: "対応する辺の比を使います。",
  example2Result: "したがって、AB = 12 cmです。✓",
  example3Question: "図でDはAC上、EはBC上にあります。AD = 12 cm、DC = 8 cm、DE = 6 cm、EC = 10 cmです。弧は∠ABC = ∠CDEを示し、Cの角も等しいとします。x（BEの長さ）とy（ABの長さ）を求めましょう。",
  example3Reason: "弧から∠CDE = ∠ABCが分かります。またCの角も等しく、∠DCE = ∠BCAです。したがってAA条件より△DEC ∼ △BACで、対応する頂点はD ↔ B、E ↔ A、C ↔ Cです。",
  redrawTip: "💡 コツ：向きをそろえて描き直す",
  redrawExplanation: "三角形の向きを分かりやすくするため、問題と同じ△ABCを描き直します。右側に小さい同じ形の三角形を加えてD、E、Cと記すと、対応する頂点が同じ位置にそろいます。",
  pointPairs: "解答では、問題の図にある頂点の対応をそのまま使います。",
  triangleOrder: "三角形の名前は対応する頂点の順に書きます。",
  step: (n: number) => `手順${n}：`,
  findAC: "ACを求める：",
  findY: "y = ABを求める：",
  findX: "x = BEを求める：",
  example3Result: "x = BE = 6 cm、y = AB = 12 cmです。",
  example4Title: "相似な図形の辺の長さを求める練習",
  example4Opening: "次の台形ABCDを見てみましょう。",
  example4Question: "AB = 51 cm、DC = 36 cm、AP = 12 cm、PD = 8 cmのとき、PQの長さを求めましょう。",
  example4Reason: "DからB（またはCからA）へ直線を引きます。ここでは図のようにDBを使います。BDはPQとMで交わるので、△ADB ∼ △PDMです。したがって：",
  findAD: "ADを求める：",
  findPM: "△ADB ∼ △PDMより、PMを求める：",
  findMQ: "MQ ∥ DCかつ△BMQ ∼ △BDCより、MQを求める：",
  findPQ: "PQを求める：",
  example4Result: "PQ = 42 cmです。",
  summaryTitle: "📋 まとめ — 相似な三角形",
  summaryCondition: "条件",
  summaryAAName: "角・角（AA）",
  summarySASName: "辺・角・辺（SAS）",
  summarySSSName: "辺・辺・辺（SSS）",
  summaryRequired: "必要なもの",
  summaryExample: "例",
  summaryAA: "等しい角が2組",
  summarySAS: "辺の比が等しい2組と、その間の等しい角",
  summarySSS: "対応する辺の比が等しい3組",
  summaryParallel: "📌 三角形の平行線の定理：△ABCでXY ∥ BCなら、AX/XB = AY/YCかつ△AXY ∼ △ABCです。",
  summaryThirdAngle: "📌 第3の角は、2つの角が等しければ自動的に等しくなります。三角形の内角の和は180°です。",
  summaryScale: "📌 相似比k：△ABC ∼ △PQRの比がkなら、AB = k · PQ、BC = k · QR、AC = k · PRです。",
  tipsTitle: "💡 コツとヒント",
  tip1: "まず対応する頂点を見つけましょう。等しい角を照合し、対応する順番で頂点を並べます。",
  tip1Example: "∠A = ∠P、∠B = ∠Qなら、△ABC ∼ △PQRと書きます（△ABC ∼ △QPRではありません）。",
  tip2: "AAは最も簡単な方法です。2つの角が等しいことを示せば、第3の角も自動的に等しくなります。平行線や対頂角を使う問題によく登場します。",
  tip3: "辺の比を使って未知の辺を求めます。",
  tip3Formula: "小さい三角形の辺1 / 大きい三角形の辺1 = 小さい三角形の辺2 / 大きい三角形の辺2",
  tip4: "対角線のある台形では、2本の対角線を横切る線が相似な三角形を作ります。この性質で線分の長さを求められます。",
  conclusionTitle: "✅ まとめ",
  conclusionIntro: "2つの三角形は、1つ以上の条件、すなわちAA・SAS・SSSの3条件のいずれかを満たすと相似です。",
  conclusion1: "相似では大きさが同じである必要はなく、形が同じであればよいです。",
  conclusion2: "相似比kはすべての対応する辺を結び付けます。",
  conclusion3: "三角形の相似は、平行線、影、台形の問題でよく使われます。",
  conclusion4: "k = 1なら、相似であると同時に合同です。",
  conclusionNote: "この考え方は、辺の長さを求めたり、さらに幾何の定理を証明したりする鍵になります。",
  back: "← 相似と合同に戻る",
  decimalLabel: "小数表記の例：",
  decimalText: "現地の表記による辺の長さの例：",
  decimalMath: "1{,}234.5",
  svgSimilarAngles: "対応する角は等しい",
  svgOverlap: "AB ∥ CD · Eの対頂角",
  svgInsideTitle: "△PTSは△PRQの内側",
  svgInsideCaption: "小さい三角形△PTSは△PRQの内側にあります",
};
const zhCN: T = {
  pageTitle: "相似三角形",
  pageSubtitle: "九年级 · 相似与全等 · 数学",
  introHeader: "🔺 三角形为何特别？",
  introParagraph: "一般平面图形需要满足两个条件才能证明相似：对应角相等、对应边成比例。但对于三角形，只需证明其中一个条件，因为这两种性质会自动相互关联。",
  introRule: "两个三角形满足以下任一条件即可相似：",
  introAA: "对应角相等",
  introSSS: "对应边成比例",
  introSAS: "两组对应边成比例，且夹角相等",
  demoTitle: "🎮 亲自试一试——为什么只需一个条件？",
  focusAngles: "🔺 观察角",
  focusSides: "📏 观察边",
  smallerTriangle: "△PQR缩小",
  largerTriangle: "△PQR放大",
  angleSummary: "✅ 即使大小改变，对应角始终相等！",
  angleImplication: "角相等会自动使边成比例，比例 k =",
  sideSummary: "✅ 每组对应边的比始终等于k——拖动滑块试试！",
  sideImplication: "边成比例会自动使角相等！",
  demoConclusion: "💡 结论：只需证明角或边中的一个条件，另一个条件会自动成立！",
  scaleSlider: "三角形大小调节滑块",
  aaHeader: "📘 子主题 1：三角形相似条件",
  takeaway: "🎯 要点摘要",
  aaCriterion: "角角（AA）条件：",
  aaExplanation: "如果两个三角形的两组对应角相等，由于三角形内角和为180°，第三组角也必然相等。因此，这两个三角形相似。",
  sssCriterion: "边边边（SSS）条件：",
  sasCriterion: "边角边（SAS）条件：",
  positionsHeader: "🔷 子主题 2：相似三角形的位置关系",
  positionsIntro: "相似三角形可能以多种位置关系出现。即使外观不同，相似条件依然成立；请留意对应角上颜色相同的弧线标记。",
  positionCaption: "△ADE位于△ABC内（DE ∥ BC）",
  positions: [
    { title: "分离", sub: "两个独立的三角形", info: "两个三角形彼此分开，没有接触。颜色相同的弧线表示相等的对应角。这是题目中常见的位置关系。", condition: "角角角——三组角都相等" },
    { title: "对顶角", sub: "利用对顶角", info: "两个三角形在点E相交。∠AEB与∠CED是对顶角，因此相等。如果AB平行于DC，那么A与D、B与C处的对应角也相等。", condition: "∠AEB = ∠CED（对顶角），且 AB ∥ DC" },
    { title: "内部", sub: "平行线截三角形", info: "小三角形PTS位于大三角形PRQ内，并共用角P。因为TS平行于RQ，对应角相等，所以PTS与PRQ相似。", condition: "角P相等且 TS ∥ RQ → 满足AA条件" },
    { title: "直角与高", sub: "三个相似三角形", info: "在C处为直角的直角三角形ACB中，高CD将其分成三角形ADC和CDB。它们都与原三角形共享一个角，因此三个三角形相似。", condition: "△ADC ∼ △CDB ∼ △ACB（直角与角）" },
    { title: "共用角", sub: "同一点处的公共角", info: "两个三角形共用角P。弧线和相同标记表明角T与角Q也相等。由于TS不平行于RQ，PTS与PQR相似是因为两组角相等，而不是因为平行线。", condition: "角P相等且 ∠PTS = ∠PQR → 满足AA条件" },
  ],
  sectionPart: "部分",
  conditionLabel: "✅ 满足的条件：",
  parallelHeader: "📘 子主题 3：三角形平行线定理",
  parallelIllustration: "🔍 三角形中的平行线示意图：",
  parallelIntro: "若 DE ∥ BC，则 ∠ADE = ∠ABC 且 ∠AED = ∠ACB。再加上共同的角A，两个三角形满足角角（AA）条件：",
  parallelDerivation: "推导平行线定理时，使用前两个比例，并注意整条边由各部分组成：",
  cancelTerms: "AD · AE在等式两边都出现，因此可以约去：",
  parallelConclusion: "相似关系给出了整条边的比例。将AB和AC分解为各自的线段后，可得对向线段之比 AD/DB = AE/EC。这就是三角形平行线定理。",
  parallelConverse: "逆命题也成立：点的位置如图所示时，若 AD/DB = AE/EC，则 DE ∥ BC。",
  parallelTip: "提示：该定理非常适合求三角形中的线段长度。平行线会按比例分割另外两边。",
  examplesHeader: "📝 例题 — 相似三角形",
  easy: "简单",
  medium: "中等",
  hard: "困难",
  example: (n: number) => `例题 ${n}`,
  illustration: "📐 示意图：",
  solution: "解答：",
  example1Question: "如图，两条平行线截三角形的两边，线段长度如图所示。求 a、b 和 c。",
  example1Reason: "由于平行线截三角形的两边，根据三角形平行线定理，对应线段的比相等。",
  findA: "求 a（左上段 : 左中段 = 右上段 : 右中段）：",
  findB: "求 b（左下段 : 左中段 = 右下段 : 右中段）：",
  findC: "求 c（第二条平行线之外的底边线段）：",
  example1Result: "a = 12，b = 4，c = 4 ✓",
  example2Question: "观察在点E处相对的两个三角形。已知 AB ∥ CD、AE = 4 cm、CE = 6 cm、CD = 18 cm，求 AB 的长度。",
  example2Reason: "因为 AB ∥ CD，截线所成的角相等。此外，∠AEB = ∠CED，因为它们是对顶角。根据AA条件，△ABE ∼ △CDE，对应顶点为 A ↔ C、B ↔ D、E ↔ E。",
  correspondingRatio: "使用对应边的比例：",
  example2Result: "因此，AB = 12 cm。✓",
  example3Question: "如图，D在AC上，E在BC上。已知 AD = 12 cm、DC = 8 cm、DE = 6 cm、EC = 10 cm。弧线表示 ∠ABC = ∠CDE，C处的角也相等。求 x（BE的长度）和 y（AB的长度）。",
  example3Reason: "弧线标记表示 ∠CDE = ∠ABC。C处的角也相等，即 ∠DCE = ∠BCA。因此，根据AA条件，△DEC ∼ △BAC，对应顶点为 D ↔ B、E ↔ A、C ↔ C。",
  redrawTip: "💡 技巧：按相同方向重新画图",
  redrawExplanation: "为了清楚看出三角形的方向，按题目中的样子重新画出△ABC。在右侧添加一个较小的相同三角形，并标记D、E、C。这样对应顶点就处于相同位置。",
  pointPairs: "解题时仍使用原图中的对应顶点：",
  triangleOrder: "三角形名称的顶点顺序必须与对应关系一致：",
  step: (n: number) => `步骤 ${n}：`,
  findAC: "求 AC：",
  findY: "求 y = AB：",
  findX: "求 x = BE：",
  example3Result: "x = BE = 6 cm，y = AB = 12 cm。",
  example4Title: "练习求相似图形的边长",
  example4Opening: "观察下面的梯形ABCD。",
  example4Question: "已知 AB = 51 cm、DC = 36 cm、AP = 12 cm、PD = 8 cm，求 PQ 的长度。",
  example4Reason: "从D向B（或从C向A）画一条直线。这里按图选择DB。BD与PQ交于M，因此△ADB与△PDM相似。于是：",
  findAD: "求 AD：",
  findPM: "因为 △ADB ∼ △PDM，求 PM：",
  findMQ: "因为 MQ ∥ DC 且 △BMQ ∼ △BDC，求 MQ：",
  findPQ: "求 PQ：",
  example4Result: "PQ = 42 cm。",
  summaryTitle: "📋 总结 — 相似三角形",
  summaryCondition: "条件",
  summaryAAName: "角角（AA）",
  summarySASName: "边角边（SAS）",
  summarySSSName: "边边边（SSS）",
  summaryRequired: "要求",
  summaryExample: "示例",
  summaryAA: "两组角相等",
  summarySAS: "两组边成比例，且夹角相等",
  summarySSS: "三组对应边成比例",
  summaryParallel: "📌 三角形平行线定理：在△ABC中，若 XY ∥ BC，则 AX/XB = AY/YC，且 △AXY ∼ △ABC。",
  summaryThirdAngle: "📌 第三个角：若两个角相等，由于三角形内角和为180°，第三个角也相等。",
  summaryScale: "📌 相似比k：若 △ABC ∼ △PQR 的比例为k，则 AB = k · PQ、BC = k · QR、AC = k · PR。",
  tipsTitle: "💡 技巧与提示",
  tip1: "先确定对应顶点。找出相等的角，再按正确的对应顺序书写顶点。",
  tip1Example: "若 ∠A = ∠P 且 ∠B = ∠Q，应写 △ABC ∼ △PQR（而不是 △ABC ∼ △QPR）。",
  tip2: "AA是最简单的方法：只需证明两个角相等，第三个角就会自动相等。它常见于平行线或对顶角相关题目。",
  tip3: "利用边的比例求未知边：",
  tip3Formula: "小三角形的边1 / 大三角形的边1 = 小三角形的边2 / 大三角形的边2",
  tip4: "在带对角线的梯形中，一条线截过两条对角线会形成相似三角形。可利用此性质求线段长度。",
  conclusionTitle: "✅ 结论",
  conclusionIntro: "两个三角形满足AA、SAS、SSS三个条件中的至少一个时相似。",
  conclusion1: "相似不要求大小相同，只要求形状相同。",
  conclusion2: "相似比k关联所有对应边。",
  conclusion3: "三角形相似常用于平行线、影子和梯形问题。",
  conclusion4: "若 k = 1，则两个三角形既相似又全等。",
  conclusionNote: "掌握这一概念有助于求边长并证明更深入的几何定理。",
  back: "← 返回相似与全等",
  decimalLabel: "小数格式示例：",
  decimalText: "按当地数字格式表示的边长示例：",
  decimalMath: "1{,}234.5",
  svgSimilarAngles: "对应角相等",
  svgOverlap: "AB ∥ CD · E处的对顶角",
  svgInsideTitle: "△PTS位于△PRQ内",
  svgInsideCaption: "小三角形△PTS位于△PRQ内",
};
const ru: T = {
  pageTitle: "ПОДОБНЫЕ ТРЕУГОЛЬНИКИ",
  pageSubtitle: "9 класс · Подобие и конгруэнтность · Математика",
  introHeader: "🔺 Чем треугольники особенны?",
  introParagraph: "Для доказательства подобия обычных плоских фигур нужны два условия: равенство углов и пропорциональность сторон. Для треугольников достаточно доказать только одно из них, поскольку эти свойства автоматически связаны.",
  introRule: "Два треугольника подобны, если выполняется одно из условий:",
  introAA: "Соответствующие углы равны",
  introSSS: "Соответствующие стороны пропорциональны",
  introSAS: "Две пары сторон пропорциональны, а угол между ними равен",
  demoTitle: "🎮 Попробуйте сами — почему достаточно одного условия?",
  focusAngles: "🔺 Углы",
  focusSides: "📏 Стороны",
  smallerTriangle: "△PQR меньше",
  largerTriangle: "△PQR больше",
  angleSummary: "✅ Соответствующие углы всегда равны, даже если размер меняется!",
  angleImplication: "Равные углы автоматически задают пропорциональность сторон с коэффициентом k =",
  sideSummary: "✅ Отношения всех пар сторон равны k — передвиньте ползунок!",
  sideImplication: "Пропорциональность сторон автоматически означает равенство углов!",
  demoConclusion: "💡 Вывод: достаточно доказать одно — равенство углов или пропорциональность сторон, поскольку второе следует автоматически!",
  scaleSlider: "Ползунок размера треугольника",
  aaHeader: "📘 Раздел 1: Признаки подобия треугольников",
  takeaway: "🎯 Кратко о главном",
  aaCriterion: "Признак УУ (угол-угол):",
  aaExplanation: "Если две пары соответствующих углов двух треугольников равны, то равны и третьи углы, поскольку сумма углов треугольника равна 180°. Значит, треугольники подобны.",
  sssCriterion: "Признак ССС (сторона-сторона-сторона):",
  sasCriterion: "Признак СУС (сторона-угол-сторона):",
  positionsHeader: "🔷 Раздел 2: Расположение подобных треугольников",
  positionsIntro: "Подобные треугольники могут располагаться по-разному. Даже если они выглядят неодинаково, признаки подобия сохраняются; обратите внимание на дуги одного цвета у соответствующих углов.",
  positionCaption: "△ADE внутри △ABC (DE ∥ BC)",
  positions: [
    { title: "Раздельно", sub: "Два отдельных треугольника", info: "Треугольники расположены отдельно и не соприкасаются. Одинаковые цветные дуги отмечают равные соответствующие углы. Такое расположение часто встречается в задачах.", condition: "УУУ — равны все три пары углов" },
    { title: "Вертикальные углы", sub: "Используем вертикальные углы", info: "Треугольники пересекаются в точке E. Углы AEB и CED равны как вертикальные. Если AB параллельна DC, то соответствующие углы при A и D, а также B и C тоже равны.", condition: "∠AEB = ∠CED (вертикальные углы) и AB ∥ DC" },
    { title: "Внутри", sub: "Параллельная прямая пересекает треугольник", info: "Малый треугольник PTS находится внутри большого PRQ и имеет общий угол P. Так как TS параллельна RQ, соответствующие углы равны, поэтому PTS подобен PRQ.", condition: "Угол P общий и TS ∥ RQ → признак УУ" },
    { title: "Прямой угол и высота", sub: "Три подобных треугольника", info: "В прямоугольном треугольнике ACB с прямым углом при C высота CD образует треугольники ADC и CDB. Все три треугольника подобны, поскольку каждый имеет общий угол с исходным треугольником.", condition: "△ADC ∼ △CDB ∼ △ACB (прямой угол и угол)" },
    { title: "Общий угол", sub: "Общий угол в одной точке", info: "Треугольники имеют общий угол P. Дуги и одинаковые отметки показывают, что углы T и Q также равны. Поскольку TS не параллельна RQ, подобие PTS и PQR следует из равенства двух пар углов, а не из параллельности прямых.", condition: "Угол P общий и ∠PTS = ∠PQR → признак УУ" },
  ],
  sectionPart: "Часть",
  conditionLabel: "✅ Выполненный признак:",
  parallelHeader: "📘 Раздел 3: Теорема о параллельной прямой в треугольнике",
  parallelIllustration: "🔍 ПАРАЛЛЕЛЬНЫЕ ПРЯМЫЕ В ТРЕУГОЛЬНИКЕ:",
  parallelIntro: "Если DE ∥ BC, то ∠ADE = ∠ABC и ∠AED = ∠ACB. Вместе с общим углом A эти треугольники удовлетворяют признаку угол-угол (УУ):",
  parallelDerivation: "Чтобы получить теорему о параллельной прямой, используем первые два отношения и учитываем, что полная сторона состоит из частей:",
  cancelTerms: "Слагаемое AD · AE есть в обеих частях равенства, поэтому его можно сократить:",
  parallelConclusion: "Подобие даёт отношения полных сторон. Разложив AB и AC на части, получаем отношение противоположных отрезков AD/DB = AE/EC. Это теорема о параллельной прямой в треугольнике.",
  parallelConverse: "Верно и обратное: если AD/DB = AE/EC, то DE ∥ BC при расположении точек, показанном на рисунке.",
  parallelTip: "Совет: эта теорема помогает находить длины отрезков в треугольнике. Параллельная прямая делит две другие стороны пропорционально.",
  examplesHeader: "📝 Примеры — Подобные треугольники",
  easy: "ЛЁГКИЙ",
  medium: "СРЕДНИЙ",
  hard: "СЛОЖНЫЙ",
  example: (n: number) => `Пример ${n}`,
  illustration: "📐 РИСУНОК:",
  solution: "РЕШЕНИЕ:",
  example1Question: "На рисунке две параллельные прямые пересекают стороны треугольника. Длины отрезков указаны на рисунке. Найдите a, b и c.",
  example1Reason: "Поскольку параллельные прямые пересекают обе стороны треугольника, по теореме об отрезках соответствующие отрезки имеют одинаковое отношение.",
  findA: "Найти a (верхний левый : средний левый = верхний правый : средний правый):",
  findB: "Найти b (нижний левый : средний левый = нижний правый : средний правый):",
  findC: "Найти c (часть основания за второй параллельной прямой):",
  example1Result: "a = 12, b = 4, c = 4 ✓",
  example2Question: "Рассмотрите два треугольника, расположенных по разные стороны точки E. Дано AB ∥ CD, AE = 4 см, CE = 6 см и CD = 18 см. Найдите длину AB.",
  example2Reason: "Так как AB ∥ CD, углы, образованные секущей, равны. Кроме того, ∠AEB = ∠CED как вертикальные углы. По признаку УУ △ABE ∼ △CDE; соответствуют вершины A ↔ C, B ↔ D и E ↔ E.",
  correspondingRatio: "Используем отношение соответствующих сторон:",
  example2Result: "Значит, AB = 12 см. ✓",
  example3Question: "На рисунке D лежит на AC, а E — на BC. Дано AD = 12 см, DC = 8 см, DE = 6 см и EC = 10 см. Дуги показывают, что ∠ABC = ∠CDE, а углы при C равны. Найдите x (длину BE) и y (длину AB).",
  example3Reason: "По дугам ∠CDE = ∠ABC. Углы при C также равны: ∠DCE = ∠BCA. Поэтому по признаку УУ △DEC ∼ △BAC, соответствуют вершины D ↔ B, E ↔ A и C ↔ C.",
  redrawTip: "💡 Приём: перерисуйте треугольники в одинаковом положении",
  redrawExplanation: "Чтобы лучше увидеть ориентацию, перерисуйте △ABC так же, как в условии. Справа добавьте такой же, но меньший треугольник и обозначьте вершины D, E и C. Тогда соответствующие вершины окажутся в одинаковых положениях.",
  pointPairs: "В решении сохраняется соответствие вершин исходного рисунка:",
  triangleOrder: "Вершины в обозначении треугольника записывают в порядке соответствия:",
  step: (n: number) => `Шаг ${n}:`,
  findAC: "Найти AC:",
  findY: "Найти y = AB:",
  findX: "Найти x = BE:",
  example3Result: "x = BE = 6 см, y = AB = 12 см.",
  example4Title: "Упражнение на нахождение сторон подобных фигур",
  example4Opening: "Рассмотрите трапецию ABCD.",
  example4Question: "Дано AB = 51 см, DC = 36 см, AP = 12 см и PD = 8 см. Найдите длину PQ.",
  example4Reason: "Проведите прямую из D в B (или из C в A). Здесь, как на рисунке, используем DB. BD пересекает PQ в точке M, поэтому △ADB подобен △PDM. Тогда:",
  findAD: "Найти AD:",
  findPM: "Так как △ADB ∼ △PDM, найдите PM:",
  findMQ: "Так как MQ ∥ DC и △BMQ ∼ △BDC, найдите MQ:",
  findPQ: "Найти PQ:",
  example4Result: "PQ = 42 см.",
  summaryTitle: "📋 Краткий итог — Подобные треугольники",
  summaryCondition: "Признак",
  summaryAAName: "УУ (угол-угол)",
  summarySASName: "СУС (сторона-угол-сторона)",
  summarySSSName: "ССС (сторона-сторона-сторона)",
  summaryRequired: "Условия",
  summaryExample: "Пример",
  summaryAA: "2 пары равных углов",
  summarySAS: "2 пары пропорциональных сторон и равные углы между ними",
  summarySSS: "3 пары пропорциональных соответствующих сторон",
  summaryParallel: "📌 Теорема о параллельной прямой: если XY ∥ BC в △ABC, то AX/XB = AY/YC и △AXY ∼ △ABC.",
  summaryThirdAngle: "📌 Третий угол: если равны два угла, то равен и третий, поскольку сумма углов треугольника равна 180°.",
  summaryScale: "📌 Коэффициент подобия k: если △ABC ∼ △PQR с коэффициентом k, то AB = k · PQ, BC = k · QR и AC = k · PR.",
  tipsTitle: "💡 Советы и приёмы",
  tip1: "Сначала определите соответствующие вершины. Сопоставьте равные углы, затем запишите вершины в правильном порядке.",
  tip1Example: "Если ∠A = ∠P и ∠B = ∠Q, пишите △ABC ∼ △PQR (а не △ABC ∼ △QPR).",
  tip2: "УУ — самый простой способ: достаточно показать равенство двух углов, тогда третий автоматически равен. Это часто встречается в задачах с параллельными прямыми или вертикальными углами.",
  tip3: "Отношения сторон помогают найти неизвестную сторону:",
  tip3Formula: "сторона 1 малого треугольника / сторона 1 большого треугольника = сторона 2 малого треугольника / сторона 2 большого треугольника",
  tip4: "В трапеции с диагоналями прямая, пересекающая обе диагонали, образует подобные треугольники. Это свойство помогает найти длины отрезков.",
  conclusionTitle: "✅ Вывод",
  conclusionIntro: "Два треугольника подобны, если выполняется хотя бы один из трёх признаков: УУ, СУС или ССС.",
  conclusion1: "Для подобия размеры не обязаны совпадать — достаточно одинаковой формы.",
  conclusion2: "Коэффициент подобия k связывает все соответствующие стороны.",
  conclusion3: "Подобие треугольников часто используется в задачах о параллельных прямых, тенях и трапециях.",
  conclusion4: "Если k = 1, треугольники одновременно подобны и конгруэнтны.",
  conclusionNote: "Это понятие необходимо для нахождения длин сторон и доказательства дальнейших геометрических теорем.",
  back: "← Назад к теме «Подобие и конгруэнтность»",
  decimalLabel: "Пример записи десятичного числа:",
  decimalText: "Пример длины стороны в местном формате:",
  decimalMath: "1\\,234{,}5",
  svgSimilarAngles: "Соответствующие углы равны",
  svgOverlap: "AB ∥ CD · вертикальные углы при E",
  svgInsideTitle: "△PTS внутри △PRQ",
  svgInsideCaption: "Малый треугольник △PTS находится внутри △PRQ",
};
const translations = {
  id,
  en,
  "ms-MY": msMY,
  ja,
  "zh-CN": zhCN,
  ru,
} satisfies Record<Language, T>;

const DiagramSegitigaSebangun = ({ t }: { t: T }) => (
  <svg viewBox="0 0 340 175" className="w-full max-w-sm mx-auto">
    {/* Triangle 1 */}
    <polygon points="20,150 120,150 70,60" fill="#3b82f6" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="2" />
    <text x="70" y="167" textAnchor="middle" fontSize="9" fill="#93c5fd" fontWeight="bold">△ABC</text>
    <text x="9"  y="151" fontSize="8" fill="#93c5fd">A</text>
    <text x="122" y="151" fontSize="8" fill="#93c5fd">B</text>
    <text x="66"  y="56"  fontSize="8" fill="#93c5fd">C</text>
    {/* Arcs triangle 1 — proper SVG arcs */}
    <path d="M 30 150 A 10 10 0 0 1 24.9 141.3" fill="none" stroke="#f97316" strokeWidth="1.5"/>
    <path d="M 110 150 A 10 10 0 0 0 115.2 141.3" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
    <path d="M 65.2 68.7 A 10 10 0 0 1 74.9 68.7" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
    {/* Triangle 2 */}
    <polygon points="165,155 305,155 235,35" fill="#22c55e" fillOpacity="0.2" stroke="#4ade80" strokeWidth="2" />
    <text x="235" y="170" textAnchor="middle" fontSize="9" fill="#86efac" fontWeight="bold">△PQR</text>
    <text x="155" y="156" fontSize="8" fill="#86efac">P</text>
    <text x="307" y="156" fontSize="8" fill="#86efac">Q</text>
    <text x="231" y="30"  fontSize="8" fill="#86efac">R</text>
    {/* Arcs triangle 2 — proper SVG arcs */}
    <path d="M 179 155 A 14 14 0 0 1 172.0 142.9" fill="none" stroke="#f97316" strokeWidth="1.5"/>
    <path d="M 291 155 A 14 14 0 0 0 298.0 142.9" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
    <path d="M 228.0 47.1 A 14 14 0 0 1 242.0 47.1" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
    {/* Tilde */}
    <text x="135" y="105" fontSize="16" fill="#facc15">~</text>
    {/* Labels */}
    <text x="170" y="15" fontSize="9" fill="#fde68a" fontWeight="bold">{t.svgSimilarAngles}</text>
    <text x="30"  y="141" fontSize="7" fill="#f97316">∠A</text>
    <text x="98"  y="141" fontSize="7" fill="#22c55e">∠B</text>
    <text x="58"  y="81"  fontSize="7" fill="#a855f7">∠C</text>
    <text x="176" y="145" fontSize="7" fill="#f97316">∠P</text>
    <text x="280" y="145" fontSize="7" fill="#22c55e">∠Q</text>
    <text x="228" y="64"  fontSize="7" fill="#a855f7">∠R</text>
  </svg>
);

const DiagramGarisSejajar = () => (
  <svg viewBox="0 0 300 220" className="w-full max-w-lg mx-auto">
    {/* Main triangle */}
    <polygon points="150,22 28,192 272,192" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
    <text x="150" y="14" textAnchor="middle" fontSize="14" fill="#93c5fd" fontWeight="bold">A</text>
    <text x="14"  y="207" fontSize="14" fill="#93c5fd" fontWeight="bold">B</text>
    <text x="275" y="207" fontSize="14" fill="#93c5fd" fontWeight="bold">C</text>
    {/* Parallel line XY */}
    <line x1="82" y1="122" x2="216" y2="122" stroke="#facc15" strokeWidth="2.5" />
    <text x="64"  y="127" fontSize="13" fill="#fde68a" fontWeight="bold">X</text>
    <text x="220" y="127" fontSize="13" fill="#fde68a" fontWeight="bold">Y</text>
    {/* Parallel markers — XY (1 tick) */}
    <line x1="145" y1="116" x2="145" y2="128" stroke="#facc15" strokeWidth="2" />
    {/* Parallel markers — BC (2 ticks) */}
    <line x1="143" y1="185" x2="143" y2="199" stroke="#facc15" strokeWidth="2" />
    <line x1="152" y1="185" x2="152" y2="199" stroke="#facc15" strokeWidth="2" />
    {/* Labels on sides */}
    <text x="94"  y="76"  fontSize="12" fill="#c084fc" fontWeight="bold">AX</text>
    <text x="188" y="76"  fontSize="12" fill="#4ade80" fontWeight="bold">AY</text>
    <text x="40"  y="160" fontSize="12" fill="#c084fc" fontWeight="bold">XB</text>
    <text x="240" y="160" fontSize="12" fill="#4ade80" fontWeight="bold">YC</text>
    {/* Proportional label box */}
    <rect x="48" y="4" width="204" height="18" rx="4" fill="#1e293b" />
    <text x="150" y="17" textAnchor="middle" fontSize="10.5" fill="#fde68a" fontWeight="bold">XY // BC  →  AX/XB = AY/YC</text>
    {/* Dotted triangle △AXY */}
    <polygon points="150,22 82,122 216,122" fill="#facc15" fillOpacity="0.10" stroke="#facc15" strokeWidth="1.5" strokeDasharray="5,3" />
  </svg>
);

const DiagramContoh1 = () => (
  /* Right triangle: A=(305,15) top-right, B=(15,205) bottom-left, C=(305,205) bottom-right (right angle).
     AC vertical (right side) divided 6:4:2.  AB hypotenuse (left side) divided a:8:b.
     t1=5/12 → F1=(184,94), E1=(305,94)
     t2=10/12 → F2=(63,173), E2=(305,173)
     Base: B→foot(63,205)=c, foot→C=20  */
  <svg viewBox="0 0 340 240" className="w-full max-w-lg mx-auto">
    {/* Main right triangle */}
    <polygon points="305,15 15,205 305,205" fill="#3b82f6" fillOpacity="0.12" stroke="#60a5fa" strokeWidth="2.5"/>
    {/* Right-angle mark at C */}
    <polyline points="295,205 295,195 305,195" fill="none" stroke="#60a5fa" strokeWidth="1.8"/>

    {/* First parallel line F1(184,94)→E1(305,94) */}
    <line x1="184" y1="94" x2="305" y2="94" stroke="#4ade80" strokeWidth="2.2"/>
    {/* Second parallel line F2(63,173)→E2(305,173) */}
    <line x1="63" y1="173" x2="305" y2="173" stroke="#4ade80" strokeWidth="2.2"/>

    {/* Parallel chevron arrows — first line */}
    <path d="M 237,91 L 242,94 L 237,97" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M 244,91 L 249,94 L 244,97" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>
    {/* Parallel chevron arrows — second line */}
    <path d="M 177,170 L 182,173 L 177,176" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M 184,170 L 189,173 L 184,176" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinejoin="round"/>

    {/* Dashed drop-line from F2 to base (shows c/20 division) */}
    <line x1="63" y1="173" x2="63" y2="205" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3"/>

    {/* Left-side (hypotenuse AB) segment labels */}
    <text x="252" y="46"  fontSize="13" fill="#f97316" fontWeight="bold" textAnchor="middle">a</text>
    <text x="110" y="132" fontSize="13" fill="#f97316" fontWeight="bold" textAnchor="middle">8</text>
    <text x="26"  y="194" fontSize="13" fill="#f97316" fontWeight="bold">b</text>

    {/* Right-side (AC vertical) segment labels */}
    <text x="313" y="58"  fontSize="13" fill="#60a5fa" fontWeight="bold">6</text>
    <text x="313" y="137" fontSize="13" fill="#60a5fa" fontWeight="bold">4</text>
    <text x="313" y="192" fontSize="13" fill="#60a5fa" fontWeight="bold">2</text>

    {/* Chevron arrow on vertical side AC — centered at midpoint (305,110) pointing downward */}
    <path d="M 302,107 L 305,113 L 308,107" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>

    {/* Chevron arrow on dashed vertical line near C — at (63,189) pointing downward */}
    <path d="M 60,186 L 63,192 L 66,186" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>

    {/* Base dimension lines */}
    <line x1="15"  y1="212" x2="15"  y2="222" stroke="#64748b" strokeWidth="1.2"/>
    <line x1="63"  y1="212" x2="63"  y2="222" stroke="#64748b" strokeWidth="1.2"/>
    <line x1="305" y1="212" x2="305" y2="222" stroke="#64748b" strokeWidth="1.2"/>
    <line x1="15"  y1="217" x2="63"  y2="217" stroke="#64748b" strokeWidth="1.2"/>
    <line x1="63"  y1="217" x2="305" y2="217" stroke="#64748b" strokeWidth="1.2"/>
    {/* Base labels */}
    <text x="39"  y="232" textAnchor="middle" fontSize="13" fill="#c084fc" fontWeight="bold">c</text>
    <text x="184" y="232" textAnchor="middle" fontSize="13" fill="#fde68a" fontWeight="bold">20</text>
  </svg>
);

const DiagramContoh2 = ({ t }: { t: T }) => (
  <svg viewBox="0 0 340 220" className="w-full max-w-sm mx-auto">
    {/* Dua segitiga bertolak belakang: AB // CD dan diagonal berpotongan di E */}
    <polygon points="90,35 210,35 150,89" fill="#3b82f6" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="2"/>
    <polygon points="240,170 60,170 150,89" fill="#22c55e" fillOpacity="0.15" stroke="#4ade80" strokeWidth="2"/>
    <line x1="90" y1="35" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,3"/>
    <line x1="210" y1="35" x2="60" y2="170" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4,3"/>
    {/* Tanda AB // CD */}
    <polygon points="147,32 156,35 147,38" fill="#fde68a"/>
    <polygon points="147,167 156,170 147,173" fill="#fde68a"/>
    {/* Sudut bertolak belakang di E */}
    <path d="M 140,80 A 13 13 0 0 1 160,80" fill="none" stroke="#fbbf24" strokeWidth="1.8"/>
    <path d="M 140,98 A 13 13 0 0 0 160,98" fill="none" stroke="#fbbf24" strokeWidth="1.8"/>
    <circle cx="150" cy="89" r="3.5" fill="#fbbf24"/>
    {/* Titik dan label */}
    <text x="78" y="31" fontSize="13" fill="#93c5fd" fontWeight="bold">A</text>
    <text x="213" y="31" fontSize="13" fill="#93c5fd" fontWeight="bold">B</text>
    <text x="243" y="175" fontSize="13" fill="#86efac" fontWeight="bold">C</text>
    <text x="45" y="175" fontSize="13" fill="#86efac" fontWeight="bold">D</text>
    <text x="155" y="87" fontSize="12" fill="#fde68a" fontWeight="bold">E</text>
    {/* Ukuran yang diketahui */}
    <text x="150" y="22" textAnchor="middle" fontSize="11" fill="#f97316" fontWeight="bold">AB = ?</text>
    <text x="150" y="191" textAnchor="middle" fontSize="11" fill="#4ade80" fontWeight="bold">CD = 18 cm</text>
    <text x="108" y="66" fontSize="10.5" fill="#fbbf24" fontWeight="bold">AE = 4 cm</text>
    <text x="177" y="128" fontSize="10.5" fill="#fbbf24" fontWeight="bold">CE = 6 cm</text>
    <text x="150" y="210" textAnchor="middle" fontSize="8.5" fill="#fde68a">{t.svgOverlap}</text>
  </svg>
);

const DiagramContoh3 = () => {
  // Oblique triangle: B top-center, A bottom-left, C bottom-right
  // AD=12, DC=8, AC=20. DE=6, EC=10, BE=6(x), AB=12(y)
  const A = { x: 28,  y: 195 };
  const B = { x: 105, y: 18  };
  const C = { x: 308, y: 195 };
  // D on AC: AD/AC = 12/20 = 0.6
  const D = { x: Math.round(28 + 0.6 * 280), y: 195 }; // x=196
  // E on BC: BE/BC = 6/16 = 0.375
  const tE = 0.375;
  const E = { x: Math.round(105 + tE * (308 - 105)), y: Math.round(18 + tE * (195 - 18)) }; // ≈(181,84)

  // Arc helper (inline, same logic as ap)
  const arc = (cx:number,cy:number,p1x:number,p1y:number,p2x:number,p2y:number,r:number) => {
    const d1x=p1x-cx,d1y=p1y-cy,l1=Math.sqrt(d1x*d1x+d1y*d1y);
    const d2x=p2x-cx,d2y=p2y-cy,l2=Math.sqrt(d2x*d2x+d2y*d2y);
    const u1x=d1x/l1,u1y=d1y/l1,u2x=d2x/l2,u2y=d2y/l2;
    const sw=(u1x*u2y-u1y*u2x)>0?1:0;
    return `M ${(cx+r*u1x).toFixed(1)} ${(cy+r*u1y).toFixed(1)} A ${r} ${r} 0 0 ${sw} ${(cx+r*u2x).toFixed(1)} ${(cy+r*u2y).toFixed(1)}`;
  };

  return (
    <svg viewBox="0 0 340 220" className="w-full max-w-sm mx-auto">
      {/* △DEC shaded */}
      <polygon points={`${D.x},${D.y} ${E.x},${E.y} ${C.x},${C.y}`} fill="#facc15" fillOpacity="0.14" stroke="#facc15" strokeWidth="1.5" strokeDasharray="5,3"/>
      {/* △ABC main */}
      <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill="#3b82f6" fillOpacity="0.12" stroke="#60a5fa" strokeWidth="2.5"/>
      {/* DE segment (green vertical) */}
      <line x1={D.x} y1={D.y} x2={E.x} y2={E.y} stroke="#4ade80" strokeWidth="2.2"/>
      {/* Equal arc marks at ∠B and ∠CDE — same color, same radius */}
      <path d={arc(B.x,B.y, A.x,A.y, C.x,C.y, 22)} fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      <path d={arc(D.x,D.y, C.x,C.y, E.x,E.y, 22)} fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>

      {/* Vertex labels */}
      <text x={A.x-13} y={A.y+12} fontSize="13" fill="#93c5fd" fontWeight="bold">A</text>
      <text x={B.x-4}  y={B.y-6}  fontSize="13" fill="#93c5fd" fontWeight="bold">B</text>
      <text x={C.x+4}  y={C.y+12} fontSize="13" fill="#93c5fd" fontWeight="bold">C</text>
      <text x={D.x+3}  y={D.y+14} fontSize="13" fill="#fde68a" fontWeight="bold">D</text>
      <text x={E.x+5}  y={E.y+5}  fontSize="13" fill="#4ade80" fontWeight="bold">E</text>

      {/* Side labels */}
      <text x="50"  y="115" fontSize="12" fill="#c084fc" fontWeight="bold">y</text>
      <text x="100" y="210" fontSize="11" fill="#f97316" fontWeight="bold">12 cm</text>
      <text x="235" y="210" fontSize="11" fill="#f97316" fontWeight="bold">8 cm</text>
      <text x={D.x-8} y={(D.y+E.y)/2+5} textAnchor="end" fontSize="11" fill="#4ade80" fontWeight="bold">6 cm</text>
      <text x={(E.x+C.x)/2+8} y={(E.y+C.y)/2-5} fontSize="11" fill="#86efac" fontWeight="bold">10 cm</text>
      <text x={(B.x+E.x)/2-4} y={(B.y+E.y)/2-4} fontSize="12" fill="#fbbf24" fontWeight="bold">x</text>
    </svg>
  );
};

const DiagramTrikArahSama = () => {
  // The left triangle is an exact copy of the ABC outline from DiagramContoh2.
  const A = { x: 28, y: 195 };
  const B = { x: 105, y: 18 };
  const C = { x: 308, y: 195 };
  // The smaller triangle on the right keeps the same shape and direction:
  // D ↔ B, E ↔ A, and C ↔ C.
  const D = { x: 470, y: 70 };
  const E = { x: 428, y: 167 };
  const Ckecil = { x: 582, y: 167 };

  const arc = (cx:number,cy:number,p1x:number,p1y:number,p2x:number,p2y:number,r:number) => {
    const d1x=p1x-cx,d1y=p1y-cy,l1=Math.sqrt(d1x*d1x+d1y*d1y);
    const d2x=p2x-cx,d2y=p2y-cy,l2=Math.sqrt(d2x*d2x+d2y*d2y);
    const u1x=d1x/l1,u1y=d1y/l1,u2x=d2x/l2,u2y=d2y/l2;
    const sw=(u1x*u2y-u1y*u2x)>0?1:0;
    return `M ${(cx+r*u1x).toFixed(1)} ${(cy+r*u1y).toFixed(1)} A ${r} ${r} 0 0 ${sw} ${(cx+r*u2x).toFixed(1)} ${(cy+r*u2y).toFixed(1)}`;
  };

  return (
    <svg viewBox="0 0 620 220" className="w-full max-w-2xl mx-auto">
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="#3b82f6"
        fillOpacity="0.12"
        stroke="#60a5fa"
        strokeWidth="2.5"
      />
      <path d={arc(B.x,B.y, A.x,A.y, C.x,C.y, 22)} fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      <text x={A.x-13} y={A.y+12} fontSize="13" fill="#93c5fd" fontWeight="bold">A</text>
      <text x={B.x-4} y={B.y-6} fontSize="13" fill="#93c5fd" fontWeight="bold">B</text>
      <text x={C.x+4} y={C.y+12} fontSize="13" fill="#93c5fd" fontWeight="bold">C</text>
      <text x="168" y="204" textAnchor="middle" fontSize="10" fill="#93c5fd" fontWeight="bold">AC = 20 cm</text>
      <text x="168" y="218" textAnchor="middle" fontSize="10" fill="#93c5fd">△ABC</text>

      <polygon
        points={`${D.x},${D.y} ${E.x},${E.y} ${Ckecil.x},${Ckecil.y}`}
        fill="#facc15"
        fillOpacity="0.16"
        stroke="#fbbf24"
        strokeWidth="2"
      />
      <path d={arc(D.x,D.y, E.x,E.y, Ckecil.x,Ckecil.y, 13)} fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round"/>
      <text x={D.x} y={D.y-7} textAnchor="middle" fontSize="12" fill="#fde68a" fontWeight="bold">D</text>
      <text x={E.x-10} y={E.y+13} fontSize="12" fill="#fde68a" fontWeight="bold">E</text>
      <text x={Ckecil.x+5} y={Ckecil.y+13} fontSize="12" fill="#fde68a" fontWeight="bold">C</text>
      <text x="408" y="120" fontSize="10" fill="#fde68a" fontWeight="bold">DE = 6 cm</text>
      <text x="505" y="179" textAnchor="middle" fontSize="10" fill="#fde68a" fontWeight="bold">EC = 10 cm</text>
      <text x="538" y="116" fontSize="10" fill="#fde68a" fontWeight="bold">DC = 8 cm</text>
      <text x="505" y="196" textAnchor="middle" fontSize="10" fill="#fde68a">△CDE</text>
    </svg>
  );
};

/* Tick mark helper: draws a cross (×) at midpoint of segment for equal-length marking */
const CrossTick = ({ x1,y1,x2,y2,color="white",offset=0 }:{x1:number,y1:number,x2:number,y2:number,color?:string,offset?:number}) => {
  const mx=(x1+x2)/2, my=(y1+y2)/2;
  const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
  const ux=dx/len, uy=dy/len, px=-uy, py=ux; // perpendicular
  const s=5;
  // shift along segment by offset
  const cx=mx+ux*offset, cy=my+uy*offset;
  return (
    <g>
      <line x1={cx-ux*s} y1={cy-uy*s} x2={cx+ux*s} y2={cy+uy*s} stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1={cx-px*s} y1={cy-py*s} x2={cx+px*s} y2={cy+py*s} stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </g>
  );
};

/* Double hash mark: two parallel ticks perpendicular to segment */
const HashTick = ({ x1,y1,x2,y2,color="white" }:{x1:number,y1:number,x2:number,y2:number,color?:string}) => {
  const mx=(x1+x2)/2, my=(y1+y2)/2;
  const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
  const ux=dx/len, uy=dy/len, px=-uy, py=ux;
  const s=5, gap=3.5;
  return (
    <g>
      <line x1={mx-px*s-ux*gap} y1={my-py*s-uy*gap} x2={mx+px*s-ux*gap} y2={my+py*s-uy*gap} stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1={mx-px*s+ux*gap} y1={my-py*s+uy*gap} x2={mx+px*s+ux*gap} y2={my+py*s+uy*gap} stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </g>
  );
};

/* Chevron arrow (→) along a horizontal segment, pointing right, at centre */
const ArrowRight = ({ cx,cy,color="#fbbf24" }:{cx:number,cy:number,color?:string}) => (
  <path d={`M ${cx-7},${cy-5} L ${cx+7},${cy} L ${cx-7},${cy+5}`} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
);

const DiagramContoh4 = () => {
  // Trapesium ABCD: A bottom-left, B bottom-right, C top-right, D top-left
  // AB=51 (bottom), DC=36 (top). Parallel sides: AB // PQ // DC
  // AP=12, PD=8, AD=20. P on AD, Q on BC.
  const A={x:35, y:198}, B={x:290,y:198};
  const D={x:75, y:38},  C={x:250,y:38};
  // P divides AD: AP/AD = 12/20 = 3/5 from A
  const P={x:Math.round(35+0.6*(75-35)), y:Math.round(198+0.6*(38-198))}; // (59,102)
  // Q divides BC: BQ/BC = 12/20 = 3/5 from B
  const Q={x:Math.round(290+0.6*(250-290)), y:Math.round(198+0.6*(38-198))}; // (266,102)
  return (
    <svg viewBox="0 0 330 230" className="w-full max-w-md mx-auto">
      {/* Trapesium */}
      <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
        fill="#3b82f6" fillOpacity="0.10" stroke="#60a5fa" strokeWidth="2.2"/>
      {/* PQ line */}
      <line x1={P.x} y1={P.y} x2={Q.x} y2={Q.y} stroke="#4ade80" strokeWidth="2.2"/>

      {/* Parallel arrows → on DC, PQ, AB */}
      <ArrowRight cx={(D.x+C.x)/2} cy={D.y} color="#fbbf24"/>
      <ArrowRight cx={(P.x+Q.x)/2} cy={P.y} color="#fbbf24"/>
      <ArrowRight cx={(A.x+B.x)/2} cy={A.y} color="#fbbf24"/>

      {/* Cross (×) tick marks on PD and QC — equal upper segments */}
      <CrossTick x1={P.x} y1={P.y} x2={D.x} y2={D.y} color="#f97316"/>
      <CrossTick x1={Q.x} y1={Q.y} x2={C.x} y2={C.y} color="#f97316"/>
      {/* Double hash (≠) tick marks on AP and BQ — equal lower segments */}
      <HashTick x1={A.x} y1={A.y} x2={P.x} y2={P.y} color="#c084fc"/>
      <HashTick x1={B.x} y1={B.y} x2={Q.x} y2={Q.y} color="#c084fc"/>

      {/* Vertex labels */}
      <text x={D.x-14} y={D.y+5}  fontSize="13" fill="#93c5fd" fontWeight="bold">D</text>
      <text x={C.x+5}  y={C.y+5}  fontSize="13" fill="#93c5fd" fontWeight="bold">C</text>
      <text x={P.x-16} y={P.y+5}  fontSize="13" fill="#4ade80" fontWeight="bold">P</text>
      <text x={Q.x+5}  y={Q.y+5}  fontSize="13" fill="#4ade80" fontWeight="bold">Q</text>
      <text x={A.x-14} y={A.y+14} fontSize="13" fill="#93c5fd" fontWeight="bold">A</text>
      <text x={B.x+5}  y={B.y+14} fontSize="13" fill="#93c5fd" fontWeight="bold">B</text>

      {/* Dimension labels */}
      <text x={(D.x+C.x)/2} y={D.y-7} fontSize="11" fill="#fde68a" fontWeight="bold" textAnchor="middle">DC = 36 cm</text>
      <text x={(A.x+B.x)/2} y={A.y+18} fontSize="11" fill="#fde68a" fontWeight="bold" textAnchor="middle">AB = 51 cm</text>
      <text x={P.x-38} y={(A.y+P.y)/2+4} fontSize="10" fill="#c084fc" fontWeight="bold">AP=12</text>
      <text x={D.x-38} y={(D.y+P.y)/2+4} fontSize="10" fill="#f97316" fontWeight="bold">PD=8</text>
      <text x={(P.x+Q.x)/2} y={P.y-8} fontSize="11" fill="#4ade80" fontWeight="bold" textAnchor="middle">PQ = ?</text>
    </svg>
  );
};

const DiagramContoh4b = () => {
  // Same trapesium + diagonal BD + point M for pembahasan
  const A={x:35, y:198}, B={x:290,y:198};
  const D={x:75, y:38},  C={x:250,y:38};
  const P={x:59, y:102};
  const Q={x:266, y:102};
  // M = intersection of BD with PQ (y=102)
  // BD: B(290,198)→D(75,38). t=(102-198)/(38-198)=-96/-160=0.6 → x=290+0.6*(75-290)=290-129=161
  const M={x:161, y:102};
  return (
    <svg viewBox="0 0 330 230" className="w-full max-w-md mx-auto">
      {/* Trapesium */}
      <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
        fill="#3b82f6" fillOpacity="0.08" stroke="#60a5fa" strokeWidth="2"/>
      {/* PQ line */}
      <line x1={P.x} y1={P.y} x2={Q.x} y2={Q.y} stroke="#4ade80" strokeWidth="2"/>
      {/* Diagonal BD */}
      <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="#f97316" strokeWidth="1.8" strokeDasharray="6,3"/>
      {/* Arrows → */}
      <ArrowRight cx={(D.x+C.x)/2} cy={D.y} color="#fbbf24"/>
      <ArrowRight cx={(P.x+Q.x)/2} cy={P.y} color="#fbbf24"/>
      <ArrowRight cx={(A.x+B.x)/2} cy={A.y} color="#fbbf24"/>
      {/* Vertex labels */}
      <text x={D.x-14} y={D.y+5}  fontSize="13" fill="#93c5fd" fontWeight="bold">D</text>
      <text x={C.x+5}  y={C.y+5}  fontSize="13" fill="#93c5fd" fontWeight="bold">C</text>
      <text x={P.x-16} y={P.y+5}  fontSize="13" fill="#4ade80" fontWeight="bold">P</text>
      <text x={Q.x+5}  y={Q.y+5}  fontSize="13" fill="#4ade80" fontWeight="bold">Q</text>
      <text x={A.x-14} y={A.y+14} fontSize="13" fill="#93c5fd" fontWeight="bold">A</text>
      <text x={B.x+5}  y={B.y+14} fontSize="13" fill="#93c5fd" fontWeight="bold">B</text>
      <text x={M.x+5}  y={M.y+5}  fontSize="12" fill="#fbbf24" fontWeight="bold">M</text>
      {/* △PDM shaded */}
      <polygon points={`${P.x},${P.y} ${D.x},${D.y} ${M.x},${M.y}`} fill="#f97316" fillOpacity="0.18" stroke="#f97316" strokeWidth="1.2" strokeDasharray="4,2"/>
      {/* △ADB shaded */}
      <polygon points={`${A.x},${A.y} ${D.x},${D.y} ${B.x},${B.y}`} fill="#60a5fa" fillOpacity="0.12" stroke="#60a5fa" strokeWidth="1.2" strokeDasharray="4,2"/>
    </svg>
  );
};

/* ── shared geometry helpers ─────────────────────────────── */
const ap = (cx:number,cy:number,p1x:number,p1y:number,p2x:number,p2y:number,r:number) => {
  const d1x=p1x-cx,d1y=p1y-cy,l1=Math.sqrt(d1x*d1x+d1y*d1y);
  const d2x=p2x-cx,d2y=p2y-cy,l2=Math.sqrt(d2x*d2x+d2y*d2y);
  const u1x=d1x/l1,u1y=d1y/l1,u2x=d2x/l2,u2y=d2y/l2;
  const sw=(u1x*u2y-u1y*u2x)>0?1:0;
  return `M ${(cx+r*u1x).toFixed(1)} ${(cy+r*u1y).toFixed(1)} A ${r} ${r} 0 0 ${sw} ${(cx+r*u2x).toFixed(1)} ${(cy+r*u2y).toFixed(1)}`;
};
const ra = (cx:number,cy:number,p1x:number,p1y:number,p2x:number,p2y:number,s=7) => {
  const d1x=p1x-cx,d1y=p1y-cy,l1=Math.sqrt(d1x*d1x+d1y*d1y);
  const d2x=p2x-cx,d2y=p2y-cy,l2=Math.sqrt(d2x*d2x+d2y*d2y);
  const u1x=d1x/l1*s,u1y=d1y/l1*s,u2x=d2x/l2*s,u2y=d2y/l2*s;
  return `M ${(cx+u1x).toFixed(1)} ${(cy+u1y).toFixed(1)} L ${(cx+u1x+u2x).toFixed(1)} ${(cy+u1y+u2y).toFixed(1)} L ${(cx+u2x).toFixed(1)} ${(cy+u2y).toFixed(1)}`;
};

/* ── Diagram 1 – Terpisah ───────────────────────────────── */
const DiagTerpisah = () => {
  // T1: A=(37,59) B=(12,127) C=(76,127)
  const [A1,B1,C1] = [{x:37,y:59},{x:12,y:127},{x:76,y:127}];
  // T2: P=(153,32) Q=(118,127) R=(208,127) — alas QR sejajar dengan BC
  const [A2,B2,C2] = [{x:153,y:32},{x:118,y:127},{x:208,y:127}];
  return (
    <svg viewBox="0 0 225 165" className="w-full rounded-lg bg-slate-950/50">
      {/* T1 */}
      <polygon points={`${B1.x},${B1.y} ${C1.x},${C1.y} ${A1.x},${A1.y}`} fill="#7dd3fc" fillOpacity=".40" stroke="#60a5fa" strokeWidth="1.8"/>
      <path d={ap(A1.x,A1.y,B1.x,B1.y,C1.x,C1.y,9)}  fill="none" stroke="#a855f7" strokeWidth="1.5"/>
      <path d={ap(B1.x,B1.y,C1.x,C1.y,A1.x,A1.y,12)} fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <path d={ap(C1.x,C1.y,B1.x,B1.y,A1.x,A1.y,10)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      {/* tanda sudut T1: 1 garis=∠A, 2 garis=∠B, 3 garis=∠C */}
      {/* ∠A — 1 tanda (ungu), tengah busur ≈ (38, 68), tegak lurus (-0.995, 0.102) */}
      <line x1="39.5" y1="67.9" x2="36.5" y2="68.2" stroke="#a855f7" strokeWidth="1.4" strokeLinecap="round"/>
      {/* ∠B — 2 tanda (oranye), tengah busur ≈ (21.5, 119.7), tegak lurus (0.605, 0.792) */}
      <line x1="19.8" y1="119.1" x2="21.6" y2="121.5" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="21.4" y1="117.9" x2="23.2" y2="120.3" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round"/>
      {/* ∠C — 3 tanda (hijau), tengah busur ≈ (67.6, 121.5), tegak lurus (0.551, -0.835) */}
      <line x1="68.1" y1="123.6" x2="69.7" y2="121.1" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="66.8" y1="122.8" x2="68.4" y2="120.3" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="65.5" y1="122.0" x2="67.1" y2="119.5" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>

      <text x={A1.x-4} y={A1.y-5}  fontSize="8" fill="#c4b5fd" fontWeight="bold">A</text>
      <text x={B1.x-9} y={B1.y+9}  fontSize="8" fill="#93c5fd" fontWeight="bold">B</text>
      <text x={C1.x+2} y={C1.y+9}  fontSize="8" fill="#93c5fd" fontWeight="bold">C</text>
      <text x={(B1.x+C1.x)/2-7} y={B1.y+20} fontSize="7.5" fill="#93c5fd">△ABC</text>

      {/* T2 */}
      <polygon points={`${B2.x},${B2.y} ${C2.x},${C2.y} ${A2.x},${A2.y}`} fill="#86efac" fillOpacity=".38" stroke="#4ade80" strokeWidth="1.8"/>
      <path d={ap(A2.x,A2.y,B2.x,B2.y,C2.x,C2.y,10)} fill="none" stroke="#a855f7" strokeWidth="1.5"/>
      <path d={ap(B2.x,B2.y,C2.x,C2.y,A2.x,A2.y,13)} fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <path d={ap(C2.x,C2.y,B2.x,B2.y,A2.x,A2.y,11)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      {/* tanda sudut T2: 1 garis=∠P, 2 garis=∠Q, 3 garis=∠R */}
      {/* ∠P — 1 tanda (ungu), tengah busur ≈ (154, 42), tegak lurus (-0.995, 0.105) */}
      <line x1="155.5" y1="41.8" x2="152.5" y2="42.2" stroke="#a855f7" strokeWidth="1.4" strokeLinecap="round"/>
      {/* ∠Q — 2 tanda (oranye), tengah busur ≈ (128.4, 119.1), tegak lurus (0.606, 0.797) */}
      <line x1="126.7" y1="118.5" x2="128.5" y2="120.9" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="128.3" y1="117.3" x2="130.1" y2="119.7" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round"/>
      {/* ∠R — 3 tanda (hijau), tengah busur ≈ (198.8, 120.9), tegak lurus (0.549, -0.838) */}
      <line x1="199.3" y1="123.0" x2="200.9" y2="120.4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="198.0" y1="122.2" x2="199.6" y2="119.6" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="196.7" y1="121.4" x2="198.3" y2="118.8" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>

      <text x={A2.x-4} y={A2.y-5}  fontSize="8" fill="#c4b5fd" fontWeight="bold">P</text>
      <text x={B2.x-9} y={B2.y+9}  fontSize="8" fill="#86efac" fontWeight="bold">Q</text>
      <text x={C2.x+2} y={C2.y+9}  fontSize="8" fill="#86efac" fontWeight="bold">R</text>
      <text x={(B2.x+C2.x)/2-7} y={B2.y+20} fontSize="7.5" fill="#86efac">△PQR</text>

      {/* legend */}
      <text x="5" y="12" fontSize="7" fill="#c4b5fd">∠A = ∠P</text>
      <text x="5" y="23" fontSize="7" fill="#fcd9b5">∠B = ∠Q</text>
      <text x="5" y="34" fontSize="7" fill="#bbf7d0">∠C = ∠R</text>
    </svg>
  );
};

/* ── Diagram 2 – Bertolak Belakang (Kupu-kupu) ──────────── */
const DiagBertolakBelakang = () => {
  // Lines A→C and B→D cross at E
  const [A,B,D,C,E] = [{x:50,y:22},{x:190,y:22},{x:90,y:140},{x:170,y:140},{x:126,y:97}];
  return (
    <svg viewBox="0 0 248 158" className="w-full rounded-lg bg-slate-950/50">
      {/* guide lines */}
      <line x1={A.x} y1={A.y} x2={C.x} y2={C.y} stroke="#334155" strokeWidth="1" strokeDasharray="3,3"/>
      <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} stroke="#334155" strokeWidth="1" strokeDasharray="3,3"/>
      {/* T1 △ABE */}
      <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${E.x},${E.y}`} fill="#7dd3fc" fillOpacity=".40" stroke="#60a5fa" strokeWidth="1.8"/>
      {/* T2 △DCE */}
      <polygon points={`${D.x},${D.y} ${C.x},${C.y} ${E.x},${E.y}`} fill="#86efac" fillOpacity=".38" stroke="#4ade80" strokeWidth="1.8"/>
      {/* angle marks – A↔C orange (1 tanda = sama besar) */}
      <path d={ap(A.x,A.y,B.x,B.y,E.x,E.y,13)} fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <path d={ap(C.x,C.y,D.x,D.y,E.x,E.y,13)} fill="none" stroke="#f97316" strokeWidth="1.5"/>
      {/* tanda sudut ∠A = ∠C — 1 tick (oranye) */}
      {/* ∠A: tengah busur ≈ (62.0, 26.9), tegak lurus (-0.379, 0.925) */}
      <line x1="61.4" y1="28.3" x2="62.6" y2="25.5" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round"/>
      {/* ∠C: tengah busur ≈ (158.0, 135.1), tegak lurus (0.378, -0.926) */}
      <line x1="158.6" y1="133.7" x2="157.4" y2="136.5" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round"/>
      {/* B↔D green (2 tanda = sama besar) */}
      <path d={ap(B.x,B.y,A.x,A.y,E.x,E.y,13)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      <path d={ap(D.x,D.y,C.x,C.y,E.x,E.y,13)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      {/* tanda sudut ∠B = ∠D — 2 ticks (hijau) */}
      {/* ∠B: tengah busur ≈ (178.2, 27.4), tegak lurus (-0.419, -0.908) */}
      <line x1="176.5" y1="26.5" x2="177.7" y2="29.3" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="178.7" y1="25.5" x2="179.9" y2="28.3" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      {/* ∠D: tengah busur ≈ (101.8, 134.5), tegak lurus (0.423, 0.906) */}
      <line x1="103.5" y1="135.4" x2="102.3" y2="132.6" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="101.3" y1="136.4" x2="100.1" y2="133.6" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      {/* E vertical angles purple – two radii */}
      <path d={ap(E.x,E.y,A.x,A.y,B.x,B.y,12)} fill="none" stroke="#a855f7" strokeWidth="1.5"/>
      <path d={ap(E.x,E.y,D.x,D.y,C.x,C.y,10)} fill="none" stroke="#a855f7" strokeWidth="1.5"/>
      {/* labels */}
      <text x={A.x-9} y={A.y+1}  fontSize="8.5" fill="#93c5fd" fontWeight="bold">A</text>
      <text x={B.x+3} y={B.y+1}  fontSize="8.5" fill="#93c5fd" fontWeight="bold">B</text>
      <text x={E.x+4} y={E.y+4}  fontSize="8.5" fill="#fde68a" fontWeight="bold">E</text>
      <text x={D.x-9} y={D.y+11} fontSize="8.5" fill="#86efac" fontWeight="bold">D</text>
      <text x={C.x+3} y={C.y+11} fontSize="8.5" fill="#86efac" fontWeight="bold">C</text>
      {/* tanda panah sejajar — AB (y=22) dan DC (y=140), keduanya mengarah ke kanan */}
      <path d="M 115,18 L 121,22 L 115,26" fill="none" stroke="#fbbf24" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M 125,136 L 131,140 L 125,144" fill="none" stroke="#fbbf24" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/>
      <text x="90" y="10" fontSize="7" fill="#fbbf24">AB // DC</text>
      <text x={(A.x+E.x+B.x)/3-10} y="76" fontSize="7.5" fill="#93c5fd">△ABE</text>
      <text x={(D.x+E.x+C.x)/3-10} y="130" fontSize="7.5" fill="#86efac">△DCE</text>
    </svg>
  );
};

/* ── Diagram 3 – Di Dalam / Garis Sejajar ───────────────── */
const DiagDiDalam = () => {
  const [A,B,C,D,E] = [{x:128,y:12},{x:15,y:155},{x:241,y:155},{x:62,y:95},{x:194,y:95}];
  return (
    <svg viewBox="0 0 265 170" className="w-full rounded-lg bg-slate-950/50">
      {/* big △ABC */}
      <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} fill="#7dd3fc" fillOpacity=".35" stroke="#60a5fa" strokeWidth="1.8"/>
      {/* small △ADE shaded */}
      <polygon points={`${A.x},${A.y} ${D.x},${D.y} ${E.x},${E.y}`} fill="#22c55e" fillOpacity=".40" stroke="#4ade80" strokeWidth="1.8"/>
      {/* DE parallel arrows – chevron pointing right at midpoint of DE (128,95) */}
      <path d="M 122,92 L 127,95 L 122,98" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M 128,92 L 133,95 L 128,98" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* BC parallel arrows – chevron pointing right at midpoint of BC (128,155) */}
      <path d="M 122,152 L 127,155 L 122,158" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M 128,152 L 133,155 L 128,158" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* labels */}
      <text x={A.x-4} y={A.y-5}  fontSize="8.5" fill="#fde68a" fontWeight="bold">A</text>
      <text x={B.x-11} y={B.y+10} fontSize="8.5" fill="#93c5fd" fontWeight="bold">B</text>
      <text x={C.x+3}  y={C.y+10} fontSize="8.5" fill="#93c5fd" fontWeight="bold">C</text>
      <text x={D.x-11} y={D.y-3}  fontSize="8.5" fill="#4ade80" fontWeight="bold">D</text>
      <text x={E.x+3}  y={E.y-3}  fontSize="8.5" fill="#4ade80" fontWeight="bold">E</text>
      <text x="208" y="78" fontSize="7.5" fill="#4ade80" fontWeight="bold">△ADE</text>
      <text x="208" y="89" fontSize="7.5" fill="#4ade80" fontWeight="bold">~ △ABC</text>
    </svg>
  );
};

/* ── Diagram 3b – Di Dalam PTS / PRQ (sesuai gambar) ────── */
const DiagDiDalamPTS = ({ t }: { t: T }) => {
  // P=bottom-left, R=top-right, Q=bottom-right
  const P = {x:18, y:185}, R = {x:250, y:35}, Q = {x:300, y:185};
  // T on PR ~42%, S on PQ ~42%
  const T = {x:115, y:122}, S = {x:136, y:185};
  return (
    <svg viewBox="0 0 325 208" className="w-full rounded-lg bg-slate-950/50">
      {/* judul */}
      <text x="162" y="13" textAnchor="middle" fontSize="8.5" fill="#fde68a" fontWeight="bold">{t.svgInsideTitle}</text>
      {/* segitiga besar PRQ — cyan */}
      <polygon points={`${P.x},${P.y} ${R.x},${R.y} ${Q.x},${Q.y}`} fill="#06b6d4" fillOpacity=".12" stroke="#06b6d4" strokeWidth="2"/>
      {/* segitiga kecil PTS — magenta */}
      <polygon points={`${P.x},${P.y} ${T.x},${T.y} ${S.x},${S.y}`} fill="#d946ef" fillOpacity=".30" stroke="#d946ef" strokeWidth="2"/>

      {/* sudut P bersama — oranye, dua busur */}
      <path d={ap(P.x,P.y,R.x,R.y,Q.x,Q.y,22)} fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <path d={ap(P.x,P.y,T.x,T.y,S.x,S.y,13)} fill="none" stroke="#f97316" strokeWidth="1.5"/>

      {/* ∠R = ∠T — hijau */}
      <path d={ap(R.x,R.y,P.x,P.y,Q.x,Q.y,18)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      <path d={ap(T.x,T.y,P.x,P.y,S.x,S.y,13)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      {/* tanda 1 garis pada ∠R dan ∠T */}
      <line x1="242.3" y1="51.4" x2="245.7" y2="52.6" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="109.3" y1="133.8" x2="112.1" y2="134.8" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round"/>

      {/* ∠Q = ∠S — cyan */}
      <path d={ap(Q.x,Q.y,R.x,R.y,P.x,P.y,18)} fill="none" stroke="#06b6d4" strokeWidth="1.5"/>
      <path d={ap(S.x,S.y,T.x,T.y,P.x,P.y,13)} fill="none" stroke="#06b6d4" strokeWidth="1.5"/>

      {/* tanda panah sejajar TS // RQ — oranye diagonal */}
      {/* pada TS: midpoint ≈ (125.5, 153.5), arah (0.316, 0.949) */}
      <path d="M 120.8,151.9 L 126.8,157.3 L 128.3,149.4" fill="none" stroke="#f97316" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/>
      {/* pada RQ: midpoint ≈ (275, 110), arah (0.316, 0.949) */}
      <path d="M 270.3,108.4 L 276.3,113.8 L 277.8,105.9" fill="none" stroke="#f97316" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/>

      {/* label titik */}
      <text x={P.x-14} y={P.y+4}  fontSize="10" fill="#fde68a" fontWeight="bold">P</text>
      <text x={R.x+5}  y={R.y+4}  fontSize="10" fill="#93c5fd" fontWeight="bold">R</text>
      <text x={Q.x+4}  y={Q.y+5}  fontSize="10" fill="#93c5fd" fontWeight="bold">Q</text>
      <text x={T.x-4}  y={T.y-7}  fontSize="9"  fill="#f0abfc" fontWeight="bold">T</text>
      <text x={S.x-4}  y={S.y+13} fontSize="9"  fill="#f0abfc" fontWeight="bold">S</text>
      {/* keterangan */}
      <text x="10" y="27" fontSize="7.5" fill="#d946ef" fontWeight="bold">TS // RQ →</text>
      <text x="10" y="38" fontSize="7.5" fill="#d946ef" fontWeight="bold">△PTS ~ △PRQ</text>
    </svg>
  );
};

/* ── Diagram 4 – Siku-siku & Altitude ───────────────────── */
const DiagSikuTinggi = () => {
  const [A,B,C,D] = [{x:15,y:140},{x:230,y:140},{x:70,y:46},{x:70,y:140}];
  return (
    <svg viewBox="0 0 252 158" className="w-full rounded-lg bg-slate-950/50">
      {/* △ACB full */}
      <polygon points={`${A.x},${A.y} ${C.x},${C.y} ${B.x},${B.y}`} fill="#7dd3fc" fillOpacity=".30" stroke="#60a5fa" strokeWidth="1.8"/>
      {/* altitude line */}
      <line x1={D.x} y1={D.y} x2={C.x} y2={C.y} stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4,3"/>
      {/* △ADC shaded */}
      <polygon points={`${A.x},${A.y} ${D.x},${D.y} ${C.x},${C.y}`} fill="#f0abfc" fillOpacity=".42" stroke="#d946ef" strokeWidth="1.2"/>
      {/* △CDB shaded */}
      <polygon points={`${C.x},${C.y} ${D.x},${D.y} ${B.x},${B.y}`} fill="#86efac" fillOpacity=".40" stroke="#4ade80" strokeWidth="1.2"/>
      {/* right angle marks */}
      <path d={ra(D.x,D.y,A.x,A.y,C.x,C.y,7)} fill="none" stroke="var(--icon-stroke)" strokeWidth="1.2"/>
      <path d={ra(D.x,D.y,B.x,B.y,C.x,C.y,7)} fill="none" stroke="var(--icon-stroke)" strokeWidth="1.2"/>
      <path d={ra(C.x,C.y,A.x,A.y,B.x,B.y,7)} fill="none" stroke="var(--icon-stroke)" strokeWidth="1.2"/>
      {/* ∠A orange – shared in △ADC & △ACB */}
      <path d={ap(A.x,A.y,D.x,D.y,C.x,C.y,12)} fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <path d={ap(A.x,A.y,D.x,D.y,C.x,C.y,16)} fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="2,2"/>
      {/* ∠B green – shared in △CDB & △ACB */}
      <path d={ap(B.x,B.y,D.x,D.y,C.x,C.y,12)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      <path d={ap(B.x,B.y,D.x,D.y,C.x,C.y,16)} fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2"/>
      {/* ∠ACD = ∠B green (at C in △ADC) */}
      <path d={ap(C.x,C.y,A.x,A.y,D.x,D.y,11)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      {/* ∠DCB = ∠A orange (at C in △CDB) */}
      <path d={ap(C.x,C.y,D.x,D.y,B.x,B.y,11)} fill="none" stroke="#f97316" strokeWidth="1.5"/>
      {/* labels */}
      <text x={A.x-10} y={A.y+11} fontSize="8.5" fill="#93c5fd" fontWeight="bold">A</text>
      <text x={B.x+3}  y={B.y+11} fontSize="8.5" fill="#93c5fd" fontWeight="bold">B</text>
      <text x={C.x-10} y={C.y-4}  fontSize="8.5" fill="#fde68a" fontWeight="bold">C</text>
      <text x={D.x+3}  y={D.y+11} fontSize="8.5" fill="#e2e8f0" fontWeight="bold">D</text>
      <text x="22"  y="120" fontSize="7.5" fill="#d946ef">△ADC</text>
      <text x="128" y="120" fontSize="7.5" fill="#4ade80">△CDB</text>
      <text x="90"  y="18"  fontSize="7.5" fill="#93c5fd">△ACB</text>
      <text x="55"  y="136" fontSize="7" fill="#fbbf24">D</text>
    </svg>
  );
};

/* ── Diagram 5 – Sudut Berimpit ─────────────────────────── */
const DiagSudutBerimpit = () => {
  // Layout matches reference: P bottom-left, Q bottom-right, R top-right
  // S on base PQ: PS=9cm, SQ=11cm   T on side PR: PT=12cm
  // Scale ≈ 9.6 px/cm, PQ = 192px
  const P = {x:18, y:148}, Q = {x:210, y:148}, R = {x:195, y:18};
  const S = {x:104, y:148};   // PS = 86px ≈ 9cm
  const T = {x:111, y:80};    // T on PR at ~52.5%, PT ≈ 12cm
  return (
    <svg viewBox="0 0 238 170" className="w-full rounded-lg bg-slate-950/50">
      {/* big △PRQ */}
      <polygon points={`${P.x},${P.y} ${R.x},${R.y} ${Q.x},${Q.y}`} fill="#7dd3fc" fillOpacity=".35" stroke="#60a5fa" strokeWidth="1.8"/>
      {/* small △PTS */}
      <polygon points={`${P.x},${P.y} ${T.x},${T.y} ${S.x},${S.y}`} fill="#22c55e" fillOpacity=".40" stroke="#4ade80" strokeWidth="1.8"/>
      {/* shared ∠P – outer arc (△PRQ) orange, inner arc (△PTS) green */}
      <path d={ap(P.x,P.y,R.x,R.y,Q.x,Q.y,22)} fill="none" stroke="#f97316" strokeWidth="1.5"/>
      <path d={ap(P.x,P.y,T.x,T.y,S.x,S.y,15)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      {/* ∠T = ∠Q – green arcs (radius pushed out so circle sits inside without overlap) */}
      <path d={ap(T.x,T.y,P.x,P.y,S.x,S.y,19)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      <path d={ap(Q.x,Q.y,R.x,R.y,P.x,P.y,17)} fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      {/* tanda sama ○ — circles at ~r=12 from vertex, inside the arcs above */}
      <circle cx="105" cy="91" r="3" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      <circle cx="201" cy="140" r="3" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
      {/* ∠S = ∠R (cyan) */}
      <path d={ap(S.x,S.y,T.x,T.y,P.x,P.y,12)} fill="none" stroke="#06b6d4" strokeWidth="1.5"/>
      <path d={ap(R.x,R.y,P.x,P.y,Q.x,Q.y,18)} fill="none" stroke="#06b6d4" strokeWidth="1.5"/>
      {/* S and T point dots */}
      <circle cx={S.x} cy={S.y} r="2.5" fill="#4ade80"/>
      <circle cx={T.x} cy={T.y} r="2.5" fill="#4ade80"/>
      {/* vertex labels */}
      <text x="3"        y={P.y+4}  fontSize="9" fill="#fde68a" fontWeight="bold">P</text>
      <text x={R.x+3}   y={R.y-3}  fontSize="9" fill="#93c5fd" fontWeight="bold">R</text>
      <text x={Q.x+3}   y={Q.y+4}  fontSize="9" fill="#93c5fd" fontWeight="bold">Q</text>
      <text x={T.x+4}   y={T.y-3}  fontSize="9" fill="#4ade80" fontWeight="bold">T</text>
      <text x={S.x-4}   y={S.y+13} fontSize="9" fill="#4ade80" fontWeight="bold">S</text>
    </svg>
  );
};

/* ── Posisi Sebangun Section ────────────────────────────── */
const PosisiSebangunSection = ({ t }: { t: T }) => {
  const configs = t.positions.map((text, i) => [
    {
      title: text.title,
      sub: text.sub,
      color: '#60a5fa',
      bg: 'bg-blue-500/20 border-blue-500/50',
      active: 'bg-blue-500/30 border-blue-400',
      diagram: <DiagTerpisah />,
      info: text.info,
      syarat: text.condition,
    },
    {
      title: text.title,
      sub: text.sub,
      color: '#f97316',
      bg: 'bg-orange-500/20 border-orange-500/50',
      active: 'bg-orange-500/30 border-orange-400',
      diagram: <DiagBertolakBelakang />,
      info: text.info,
      syarat: text.condition,
    },
    {
      title: text.title,
      sub: text.sub,
      color: '#a855f7',
      bg: 'bg-purple-500/20 border-purple-500/50',
      active: 'bg-purple-500/30 border-purple-400',
      diagram: (
        <div className="flex flex-col landscape:flex-row gap-3">
          <div className="min-w-0 landscape:flex-1">
            <p className="text-center text-xs text-purple-300/70 mb-1 font-body">{t.positionCaption}</p>
            <DiagDiDalam />
          </div>
          <div className="min-w-0 landscape:flex-1">
            <DiagDiDalamPTS t={t} />
          </div>
        </div>
      ),
      info: text.info,
      syarat: text.condition,
    },
    {
      title: text.title,
      sub: text.sub,
      color: '#fbbf24',
      bg: 'bg-yellow-500/20 border-yellow-500/50',
      active: 'bg-yellow-500/30 border-yellow-400',
      diagram: <DiagSikuTinggi />,
      info: text.info,
      syarat: text.condition,
    },
    {
      title: text.title,
      sub: text.sub,
      color: '#e879f9',
      bg: 'bg-fuchsia-500/20 border-fuchsia-500/50',
      active: 'bg-fuchsia-500/30 border-fuchsia-400',
      diagram: <DiagSudutBerimpit />,
      info: text.info,
      syarat: text.condition,
    },
  ][i]);
  return (
    <div className="space-y-4">
      {configs.map((cfg, i) => (
        <section
          key={cfg.title}
          className="rounded-xl border p-3 space-y-3"
          style={{
            background: `color-mix(in srgb, ${cfg.color} 7%, transparent)`,
            borderColor: `color-mix(in srgb, ${cfg.color} 30%, transparent)`,
          }}
        >
          <div className="flex items-baseline gap-2">
            <span className="font-body text-xs font-bold" style={{ color: cfg.color }}>{t.sectionPart} {i + 1}</span>
            <h3 className="font-body text-sm font-semibold" style={{ color: cfg.color }}>{cfg.title}</h3>
            <span className="font-body text-xs text-white/40">— {cfg.sub}</span>
          </div>
          {cfg.diagram}
          <div className="rounded-lg p-3 space-y-1" style={{ background: `color-mix(in srgb, ${cfg.color} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${cfg.color} 30%, transparent)` }}>
            <p className="font-body text-xs text-white/70 leading-relaxed">{cfg.info}</p>
            <p className="font-body text-xs text-white/40 pt-1">{t.conditionLabel} <span className="text-white/60">{cfg.syarat}</span></p>
          </div>
        </section>
      ))}
    </div>
  );
};

const InteraktifSebangunDemo = ({ t }: { t: T }) => {
  const [scale, setScale] = useState(1.5);
  const [focus, setFocus] = useState<'sudut' | 'rusuk'>('sudut');

  // BASE=70 → display labels round to 7 (BC), 8 (AB), 9 (CA) — nice integers
  const BASE = 70;
  const xRel = 0.3867 * BASE;
  const yRel = 1.0622 * BASE;

  const B1 = { x: 10, y: 175 };
  const C1 = { x: 10 + BASE, y: 175 };
  const A1 = { x: B1.x + xRel, y: B1.y - yRel };

  const B2 = { x: 145, y: 175 };
  const C2 = { x: B2.x + BASE * scale, y: 175 };
  const A2 = { x: B2.x + xRel * scale, y: B2.y - yRel * scale };

  // Fixed integer display labels for T1 (matches rounded geometry ÷10)
  const T1 = { ab: 8, bc: 7, ca: 9 };

  const arc = (cx: number, cy: number, p1x: number, p1y: number, p2x: number, p2y: number, r: number) => {
    const d1x = p1x - cx, d1y = p1y - cy, l1 = Math.sqrt(d1x * d1x + d1y * d1y);
    const d2x = p2x - cx, d2y = p2y - cy, l2 = Math.sqrt(d2x * d2x + d2y * d2y);
    const u1x = d1x / l1, u1y = d1y / l1;
    const u2x = d2x / l2, u2y = d2y / l2;
    const sx = cx + r * u1x, sy = cy + r * u1y;
    const ex = cx + r * u2x, ey = cy + r * u2y;
    const cross = u1x * u2y - u1y * u2x;
    const sweep = cross > 0 ? 1 : 0;
    return `M ${sx.toFixed(1)} ${sy.toFixed(1)} A ${r} ${r} 0 0 ${sweep} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  };

  const ao = focus === 'sudut' ? 1 : 0.2;
  const ro = focus === 'rusuk' ? 1 : 0.2;

  const TriangleGroup = ({
    B, C, A, labels, strokeColor, textColor,
  }: {
    B: { x: number; y: number };
    C: { x: number; y: number };
    A: { x: number; y: number };
    labels: { v1: string; v2: string; v3: string; ab: string; bc: string; ca: string };
    strokeColor: string;
    textColor: string;
  }) => {
    const abMid = { x: (B.x + A.x) / 2, y: (B.y + A.y) / 2 };
    const bcMid = { x: (B.x + C.x) / 2, y: B.y };
    const caMid = { x: (C.x + A.x) / 2, y: (C.y + A.y) / 2 };
    return (
      <g>
        <polygon
          points={`${B.x},${B.y} ${C.x},${C.y} ${A.x},${A.y}`}
          fill={strokeColor} fillOpacity="0.12" stroke={strokeColor} strokeWidth="1.8"
        />
        <path d={arc(B.x, B.y, C.x, C.y, A.x, A.y, 14)} fill="none" stroke="#f97316" strokeWidth="1.6" opacity={ao} />
        <path d={arc(C.x, C.y, B.x, B.y, A.x, A.y, 11)} fill="none" stroke="#22c55e" strokeWidth="1.6" opacity={ao} />
        <path d={arc(A.x, A.y, B.x, B.y, C.x, C.y, 9)}  fill="none" stroke="#a855f7" strokeWidth="1.6" opacity={ao} />
        <text x={B.x + 15} y={B.y - 9}  fontSize="7.5" fill="#f97316" fontWeight="bold" opacity={ao}>70°</text>
        <text x={C.x - 23} y={C.y - 9}  fontSize="7.5" fill="#22c55e" fontWeight="bold" opacity={ao}>60°</text>
        <text x={A.x - 2}  y={A.y + 15} fontSize="7.5" fill="#a855f7" fontWeight="bold" opacity={ao}>50°</text>
        <text x={abMid.x - 14} y={abMid.y + 2} fontSize="7" fill="#fbbf24" opacity={ro}>{labels.ab}</text>
        <text x={bcMid.x - 6}  y={bcMid.y + 13} fontSize="7" fill="#fbbf24" opacity={ro}>{labels.bc}</text>
        <text x={caMid.x + 3}  y={caMid.y + 2}  fontSize="7" fill="#fbbf24" opacity={ro}>{labels.ca}</text>
        <text x={B.x - 8} y={B.y + 11} fontSize="8.5" fill={textColor} fontWeight="bold">{labels.v1}</text>
        <text x={C.x + 3} y={C.y + 11} fontSize="8.5" fill={textColor} fontWeight="bold">{labels.v2}</text>
        <text x={A.x - 3} y={A.y - 6}  fontSize="8.5" fill={textColor} fontWeight="bold">{labels.v3}</text>
      </g>
    );
  };

  const k = scale % 1 === 0 ? scale.toString() : scale.toFixed(2);

  return (
    <div className="bg-slate-900/80 border border-purple-500/30 rounded-xl p-4 space-y-3">
      <p className="font-body text-sm font-semibold text-purple-200 text-center">{t.demoTitle}</p>

      <div className="flex gap-2">
        <button
          onClick={() => setFocus('sudut')}
          className={`flex-1 text-xs py-2 rounded-lg font-body font-semibold transition-all ${
            focus === 'sudut'
              ? 'bg-orange-500/30 text-orange-300 border border-orange-400/60 shadow shadow-orange-500/20'
              : 'bg-slate-800/60 text-white/40 border border-slate-700'
          }`}
        >
          {t.focusAngles}
        </button>
        <button
          onClick={() => setFocus('rusuk')}
          className={`flex-1 text-xs py-2 rounded-lg font-body font-semibold transition-all ${
            focus === 'rusuk'
              ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-400/60 shadow shadow-yellow-500/20'
              : 'bg-slate-800/60 text-white/40 border border-slate-700'
          }`}
        >
          {t.focusSides}
        </button>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-xs font-body text-white/40">
          <span>{t.smallerTriangle}</span>
          <span>k = <strong className="text-purple-300">{k}</strong></span>
          <span>{t.largerTriangle}</span>
        </div>
        <input
          type="range" min="0.25" max="2" step="0.05" value={scale}
          onChange={e => setScale(Number(e.target.value))}
          aria-label={t.scaleSlider}
          className="w-full accent-purple-400 cursor-pointer"
        />
      </div>

      <svg viewBox="0 0 310 200" className="w-full rounded-lg bg-slate-950/60 border border-slate-800/80">
        <TriangleGroup
          B={B1} C={C1} A={A1}
          strokeColor="#60a5fa" textColor="#93c5fd"
          labels={{ v1: 'B', v2: 'C', v3: 'A', ab: T1.ab.toString(), bc: T1.bc.toString(), ca: T1.ca.toString() }}
        />
        <text x={(B1.x + C1.x) / 2 - 12} y={B1.y + 22} fontSize="8" fill="#93c5fd">△ABC</text>

        <TriangleGroup
          B={B2} C={C2} A={A2}
          strokeColor="#4ade80" textColor="#86efac"
          labels={{ v1: 'P', v2: 'Q', v3: 'R', ab: (T1.ab * scale).toFixed(1), bc: (T1.bc * scale).toFixed(1), ca: (T1.ca * scale).toFixed(1) }}
        />
        <text x={(B2.x + C2.x) / 2 - 12} y={B2.y + 22} fontSize="8" fill="#86efac">△PQR</text>

        <text x="112" y="148" fontSize="18" fill="#facc15" fontWeight="bold">~</text>
      </svg>

      {focus === 'sudut' ? (
        <div className="bg-orange-500/10 border border-orange-500/25 rounded-lg p-3 space-y-2">
          <p className="font-body text-xs font-semibold text-orange-300 text-center">
            {t.angleSummary}
          </p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[['∠B = ∠P', '70°', '#f97316'], ['∠C = ∠Q', '60°', '#22c55e'], ['∠A = ∠R', '50°', '#a855f7']].map(
              ([lbl, val, col]) => (
                <div key={lbl} className="bg-slate-800/60 rounded-lg p-2">
                  <p className="text-xs text-white/40">{lbl}</p>
                  <p className="text-sm font-bold" style={{ color: col }}>{val}</p>
                </div>
              )
            )}
          </div>
          <p className="font-body text-xs text-white/50 text-center leading-relaxed">
            {t.angleImplication} <span className="text-yellow-300 font-bold">{k}</span>
          </p>
        </div>
      ) : (
        <div className="bg-yellow-500/10 border border-yellow-500/25 rounded-lg p-3 space-y-2">
          <p className="font-body text-xs font-semibold text-yellow-300 text-center">
            {t.sideSummary}
          </p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              ['PQ / AB', k],
              ['QR / BC', k],
              ['RP / CA', k],
            ].map(([lbl, val]) => (
              <div key={lbl} className="bg-slate-800/60 rounded-lg p-2">
                <p className="text-xs text-white/40">{lbl}</p>
                <p className="text-sm font-bold text-yellow-300">{val}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-white/50 text-center leading-relaxed">
            {t.sideImplication}
          </p>
        </div>
      )}

      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
        <p className="font-body text-xs text-purple-200 text-center leading-relaxed">
          {t.demoConclusion}
        </p>
      </div>
    </div>
  );
};


const SegitigaSebangunPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = pickLang(translations, language);
  const Header = ({ icon, color, label }: { icon: React.ReactNode; color: string; label: string }) => (
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
            <Header icon={<Lightbulb className="w-5 h-5" />} color="#facc15" label={t.introHeader} />
            <div className="px-5 pb-5 space-y-4">
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {t.introParagraph}
                </p>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 space-y-2">
                  <p className="font-body text-sm text-cyan-200 font-semibold">{t.introRule}</p>
                  <div className="font-body text-sm text-cyan-100 space-y-1">
                    <p>🔹 <strong>AA:</strong> {t.introAA}</p>
                    <p>🔹 <strong>SSS:</strong> {t.introSSS}</p>
                    <p>🔹 <strong>SAS:</strong> {t.introSAS}</p>
                  </div>
                </div>
                <InteraktifSebangunDemo t={t} />
              </div>
          </div>

          {/* SYARAT AA */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
            <Header icon={<Target className="w-5 h-5" />} color="#4ade80" label={t.aaHeader} />
            <div className="px-5 pb-5 space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 space-y-3">
                  <p className="font-body text-sm font-semibold text-green-300">{t.takeaway}</p>
                  <div className="space-y-3 font-body text-sm text-white/80">
                    <div className="bg-slate-900/60 rounded-lg p-3">
                      <p className="text-green-300 font-semibold mb-1">{t.aaCriterion}</p>
                      <p>{t.aaExplanation}</p>
                      <BlockMath math="\angle A = \angle P,\quad \angle B = \angle Q \Rightarrow \triangle ABC \sim \triangle PQR" />
                    </div>
                    <div className="bg-slate-900/60 rounded-lg px-3 pb-3 pt-5">
                      <p className="text-blue-300 font-semibold mb-1">{t.sssCriterion}</p>
                      <BlockMath math="\frac{AB}{PQ} = \frac{BC}{QR} = \frac{CA}{RP} \Rightarrow \triangle ABC \sim \triangle PQR" />
                    </div>
                    <div className="bg-slate-900/60 rounded-lg px-3 pb-3 pt-5">
                      <p className="text-purple-300 font-semibold mb-1">{t.sasCriterion}</p>
                      <BlockMath math="\frac{AB}{PQ} = \frac{BC}{QR},\quad \angle B = \angle Q \Rightarrow \triangle ABC \sim \triangle PQR" />
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* POSISI SEGITIGA SEBANGUN */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
            <Header icon={<Target className="w-5 h-5" />} color="#a855f7" label={t.positionsHeader} />
            <div className="px-5 pb-5 space-y-4">
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {t.positionsIntro}
                </p>
                <PosisiSebangunSection t={t} />
              </div>
          </div>

          {/* DALIL GARIS SEJAJAR */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
            <Header icon={<Target className="w-5 h-5" />} color="#facc15" label={t.parallelHeader} />
            <div className="px-5 pb-5 space-y-4">
                <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-4">
                  <p className="font-body text-xs font-semibold text-slate-300 mb-3">{t.parallelIllustration}</p>
                  <DiagDiDalam />
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 space-y-3">
                  <p className="font-body text-sm font-semibold text-yellow-300">{t.takeaway}</p>
                  <p className="font-body text-sm text-white/80">
                    {t.parallelIntro}
                  </p>
                  <div className="bg-slate-900/60 rounded-lg p-4 space-y-2">
                    <BlockMath math="\triangle ADE \sim \triangle ABC" />
                    <BlockMath math="\frac{AD}{AB} = \frac{AE}{AC} = \frac{DE}{BC}" />
                  </div>
                  <p className="font-body text-sm text-white/80">
                    {t.parallelDerivation}
                  </p>
                  <div className="bg-slate-900/60 rounded-lg p-4 space-y-2">
                    <BlockMath math="\frac{AD}{AB} = \frac{AE}{AC}" />
                    <BlockMath math="AB = AD + DB \quad AC = AE + EC" />
                    <BlockMath math="\frac{AD}{AD+DB} = \frac{AE}{AE+EC}" />
                    <BlockMath math="AD(AE+EC) = AE(AD+DB)" />
                    <BlockMath math="AD\cdot AE + AD\cdot EC = AE\cdot AD + AE\cdot DB" />
                    <p className="font-body text-xs text-yellow-200">
                      {t.cancelTerms}
                    </p>
                    <BlockMath math="AD\cdot EC = AE\cdot DB" />
                    <BlockMath math="\boxed{\frac{AD}{DB} = \frac{AE}{EC}}" />
                  </div>
                  <p className="font-body text-sm text-white/80">
                    {t.parallelConclusion}
                  </p>
                  <div className="bg-slate-900/60 rounded-lg p-3">
                    <p className="font-body text-xs text-white/60">
                      {t.parallelConverse}
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <p className="font-body text-sm text-yellow-200">
                    {t.parallelTip}
                  </p>
                </div>
              </div>
          </div>

          {/* CONTOH SOAL */}
          <div className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
            <Header icon={<Calculator className="w-5 h-5" />} color="#60a5fa" label={t.examplesHeader} />
            <div className="px-5 pb-5 space-y-6">
                {/* MUDAH */}
                <div className="border-l-4 border-green-500 pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">{t.easy}</span>
                    <span className="font-body font-semibold text-white">{t.example(1)}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="font-body text-sm text-white">
                      {t.example1Question}
                    </p>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3">
                    <p className="font-body text-xs font-semibold text-slate-300 mb-2">{t.illustration}</p>
                    <DiagramContoh1 />
                  </div>
                  <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                    <p className="font-body text-xs font-semibold text-green-400 mb-3">{t.solution}</p>
                    <div className="space-y-3 font-body text-sm text-white/80">
                      <p>{t.example1Reason}</p>
                      <div className="bg-slate-900/50 rounded p-3 space-y-2">
                        <p className="text-xs text-slate-400 font-semibold">{t.findA}</p>
                        <BlockMath math="\frac{a}{8} = \frac{6}{4} \Rightarrow a = \frac{6}{4} \times 8 = 12" />
                        <p className="text-xs text-slate-400 font-semibold">{t.findB}</p>
                        <BlockMath math="\frac{b}{8} = \frac{2}{4} \Rightarrow b = \frac{2}{4} \times 8 = 4" />
                        <p className="text-xs text-slate-400 font-semibold">{t.findC}</p>
                        <BlockMath math="\frac{c}{20} = \frac{2}{6+4} = \frac{2}{10} \Rightarrow c = \frac{2}{10} \times 20 = 4" />
                      </div>
                      <p><strong className="text-green-300">{t.example1Result}</strong></p>
                    </div>
                  </div>
                </div>
                {/* SEDANG — contoh baru berdasarkan soal nomor 6 Latihan Mandiri */}
                <div className="border-l-4 border-yellow-500 pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">{t.medium}</span>
                    <span className="font-body font-semibold text-white">{t.example(2)}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="font-body text-sm text-white">
                      {t.example2Question}
                    </p>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3">
                    <p className="font-body text-xs font-semibold text-slate-300 mb-2">{t.illustration}</p>
                    <DiagramContoh2 t={t} />
                  </div>
                  <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                    <p className="font-body text-xs font-semibold text-yellow-400 mb-3">{t.solution}</p>
                    <div className="space-y-2 font-body text-sm text-white/80">
                      <p>
                        {t.example2Reason}
                      </p>
                      <p><strong>{t.correspondingRatio}</strong></p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{AE}{CE} = \frac{AB}{CD}" />
                        <BlockMath math="\frac{4}{6} = \frac{AB}{18}" />
                        <BlockMath math="AB = \frac{4 \times 18}{6} = 12\,\mathrm{cm}" />
                      </div>
                      <p className="text-yellow-300 font-semibold">
                        {t.example2Result}
                      </p>
                    </div>
                  </div>
                </div>
                {/* SEDANG — contoh lama digeser menjadi contoh 3 */}
                <div className="border-l-4 border-yellow-500 pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">{t.medium}</span>
                    <span className="font-body font-semibold text-white">{t.example(3)}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="font-body text-sm text-white">
                      {t.example3Question}
                    </p>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3">
                    <p className="font-body text-xs font-semibold text-slate-300 mb-2">{t.illustration}</p>
                      <DiagramContoh3 />
                  </div>
                  <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                    <p className="font-body text-xs font-semibold text-yellow-400 mb-3">{t.solution}</p>
                    <div className="space-y-2 font-body text-sm text-white/80">
                      <p>{t.example3Reason}</p>
                      <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-3 space-y-2">
                        <p className="text-purple-200 font-semibold">{t.redrawTip}</p>
                        <p>{t.redrawExplanation}</p>
                        <DiagramTrikArahSama />
                        <p>{t.pointPairs}</p>
                        <BlockMath math="DE \leftrightarrow BA,\qquad EC \leftrightarrow AC,\qquad DC \leftrightarrow BC" />
                        <p className="text-purple-200 text-xs">{t.triangleOrder} △DEC ∼ △BAC.</p>
                      </div>
                      <p><strong>{t.step(1)}</strong> {t.findAC}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="AC = AD + DC = 12 + 8 = 20\,\mathrm{cm}" />
                      </div>
                      <p><strong>{t.step(2)}</strong> {t.findY}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{DE}{BA} = \frac{EC}{AC} \Rightarrow \frac{6}{y} = \frac{10}{20} \Rightarrow y = \frac{6 \times 20}{10} = 12\,\mathrm{cm}" />
                      </div>
                      <p><strong>{t.step(3)}</strong> {t.findX}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{DC}{BC} = \frac{EC}{AC} \Rightarrow \frac{8}{BC} = \frac{10}{20} \Rightarrow BC = 16\,\mathrm{cm}" />
                        <BlockMath math="x = BE = BC - EC = 16 - 10 = 6\,\mathrm{cm}" />
                      </div>
                      <p className="text-yellow-300 font-semibold">
                        <strong>{t.example3Result}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                {/* SULIT */}
                <div className="border-l-4 border-red-500 pl-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded">{t.hard}</span>
                    <span className="font-body font-semibold text-white">{t.example(4)}</span>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                    <p className="font-body text-sm text-white font-semibold">
                      {t.example4Title}
                    </p>
                    <p className="font-body text-sm text-white">
                      {t.example4Opening}
                    </p>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3">
                    <p className="font-body text-xs font-semibold text-slate-300 mb-2">{t.illustration}</p>
                    <DiagramContoh4 />
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="font-body text-sm text-white">
                      {t.example4Question}
                    </p>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                    <p className="font-body text-xs font-semibold text-red-400 mb-3">{t.solution}</p>
                    <div className="space-y-3 font-body text-sm text-white/80">
                      <p>
                        {t.example4Reason}
                      </p>
                      <div className="bg-slate-800/60 border border-slate-600/40 rounded-lg p-3 mb-2">
                        <DiagramContoh4b />
                      </div>
                      <p><strong>{t.step(1)}</strong> {t.findAD}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="AD = AP + PD = 12 + 8 = 20\,\mathrm{cm}" />
                      </div>
                      <p><strong>{t.step(2)}</strong> {t.findPM}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{PD}{AD} = \frac{PM}{AB} \Rightarrow \frac{8}{20} = \frac{PM}{51} \Rightarrow PM = \frac{8 \times 51}{20} = \frac{102}{5}" />
                      </div>
                      <p><strong>{t.step(3)}</strong> {t.findMQ}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="\frac{BM}{BD} = \frac{3}{5} \Rightarrow \frac{MQ}{DC} = \frac{3}{5} \Rightarrow MQ = \frac{3 \times 36}{5} = \frac{108}{5}" />
                      </div>
                      <p><strong>{t.step(4)}</strong> {t.findPQ}</p>
                      <div className="bg-slate-900/50 rounded p-3">
                        <BlockMath math="PQ = PM + MQ = \frac{102}{5} + \frac{108}{5} = \frac{210}{5} = 42\,\mathrm{cm}" />
                      </div>
                      <p><strong className="text-yellow-300">{t.example4Result}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* ── RANGKUMAN, TIPS & TRIK, KESIMPULAN ── */}
          <div className="space-y-4">

            {/* Rangkuman */}
            <div className={`${isDark ? "bg-gradient-to-br from-blue-900/40 to-indigo-900/40" : "bg-gradient-to-br from-blue-50 to-indigo-50"} border border-blue-500/30 rounded-xl p-5 space-y-4`}>
              <p className={`font-body text-base font-bold ${isDark ? "text-blue-300" : "text-blue-700"}`}>{t.summaryTitle}</p>
              <div className="overflow-x-auto">
                <table className={`w-full font-body text-xs ${isDark ? "text-white/80" : "text-gray-700"}`}>
                  <thead>
                    <tr className="border-b border-blue-500/30">
                       <th className={`text-left py-2 pr-4 ${isDark ? "text-blue-300" : "text-blue-700"}`}>{t.summaryCondition}</th>
                       <th className={`text-left py-2 pr-4 ${isDark ? "text-blue-300" : "text-blue-700"}`}>{t.summaryRequired}</th>
                       <th className={`text-left py-2 ${isDark ? "text-blue-300" : "text-blue-700"}`}>{t.summaryExample}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr>
                      <td className="py-2 pr-4 text-green-300 font-bold">{t.summaryAAName}</td>
                      <td className="py-2 pr-4">{t.summaryAA}</td>
                      <td className="py-2"><InlineMath math="\angle A=\angle P,\;\angle B=\angle Q" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-purple-300 font-bold">{t.summarySASName}</td>
                      <td className="py-2 pr-4">{t.summarySAS}</td>
                      <td className="py-2"><InlineMath math="\frac{AB}{PQ}=\frac{AC}{PR},\;\angle A=\angle P" /></td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-cyan-300 font-bold">{t.summarySSSName}</td>
                      <td className="py-2 pr-4">{t.summarySSS}</td>
                      <td className="py-2"><InlineMath math="\frac{AB}{PQ}=\frac{BC}{QR}=\frac{AC}{PR}" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
               <div className={`${isDark ? "bg-slate-900/60 text-white/75" : "bg-white/80 text-gray-700"} rounded-lg p-3 space-y-1 font-body text-xs`}>
                <p>{t.summaryParallel}</p>
                <p>{t.summaryThirdAngle}</p>
                <p>{t.summaryScale}</p>
              </div>
              <div className={`${isDark ? "bg-slate-900/60 text-white/75" : "bg-white/80 text-gray-700"} rounded-lg p-3 font-body text-xs`}>
                <strong>{t.decimalLabel}</strong> {t.decimalText} <InlineMath math={t.decimalMath} />
              </div>
            </div>

            {/* Tips & Trik */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 space-y-3">
              <p className="font-body text-base font-bold text-amber-300">{t.tipsTitle}</p>
              <div className="space-y-3 font-body text-sm text-white/80">
                <div className="flex gap-3">
                  <span className="text-amber-400 font-bold shrink-0">①</span>
                  <div>
                    <p>{t.tip1}</p>
                    <div className="bg-slate-900/50 rounded p-2 mt-1 text-xs">
                      <p>{t.tip1Example}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-400 font-bold shrink-0">②</span>
                  <p>{t.tip2}</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-400 font-bold shrink-0">③</span>
                  <div>
                    <p>{t.tip3}</p>
                    <div className="bg-slate-900/50 rounded p-2 mt-1 text-xs">
                      <p>{t.tip3Formula}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-amber-400 font-bold shrink-0">④</span>
                  <p>{t.tip4}</p>
                </div>
              </div>
            </div>

            {/* Kesimpulan */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 space-y-3">
              <p className="font-body text-base font-bold text-green-300">{t.conclusionTitle}</p>
              <div className="space-y-2 font-body text-sm text-white/80">
                <p>{t.conclusionIntro}</p>
                <div className="bg-slate-900/60 rounded-lg p-3 space-y-1">
                  <p>🔹 {t.conclusion1}</p>
                  <p>🔹 {t.conclusion2}</p>
                  <p>🔹 {t.conclusion3}</p>
                  <p>🔹 {t.conclusion4}</p>
                </div>
                <p className="text-xs text-white/55 italic">{t.conclusionNote}</p>
              </div>
            </div>

          </div>

        </div>
        <div className="mt-8 text-center">
          <button onClick={() => { playPopSound(); navigate("/buku-animasi-matematika/kesebangunan-kekongruenan"); }} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body">
            {t.back}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SegitigaSebangunPage;
