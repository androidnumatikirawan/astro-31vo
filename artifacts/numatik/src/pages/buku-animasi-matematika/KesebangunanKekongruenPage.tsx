import MateriTopicPage from "@/components/MateriTopicPage";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { pickLang } from "@/lib/pickLang";

const id = {
  title: "KESEBANGUNAN DAN KEKONGRUENAN",
  kelas: "Kelas 9",
  backLabel: "Kembali ke Kelas 9",
  subtopics: {
    definition: "DEFINISI KESEBANGUNAN DAN KEKONGRUENAN",
    sideLengths: "MENGHITUNG PANJANG RUSUK BANGUN DATAR YANG SEBANGUN",
    triangles: "SEGITIGA – SEGITIGA YANG SEBANGUN",
    rightTriangles:
      "MENEMUKAN PERBANDINGAN/RASIO RUSUK-RUSUK SEGITIGA SIKU SIKU DENGAN KONSEP KESEBANGUNAN",
    congruence: "KEKONGRUENAN PADA BANGUN DATAR",
  },
};
type T = typeof id;

const en: T = {
  title: "SIMILARITY AND CONGRUENCE",
  kelas: "Grade 9",
  backLabel: "Back to Grade 9",
  subtopics: {
    definition: "Definitions of Similarity and Congruence",
    sideLengths: "Finding Side Lengths in Similar Plane Figures",
    triangles: "Similar Triangles",
    rightTriangles:
      "Finding Side Ratios in Right Triangles Using Similarity",
    congruence: "Congruence of Plane Figures",
  },
};

const msMY: T = {
  title: "KESESERUPAAN DAN KEKONGRUENAN",
  kelas: "Tingkatan 3",
  backLabel: "Kembali ke Tingkatan 3",
  subtopics: {
    definition: "Definisi Keserupaan dan Kekongruenan",
    sideLengths: "Mengira Panjang Sisi Bentuk Satah yang Serupa",
    triangles: "Segi Tiga yang Serupa",
    rightTriangles:
      "Mencari Nisbah Sisi Segi Tiga Bersudut Tegak melalui Keserupaan",
    congruence: "Kekongruenan Bentuk Satah",
  },
};

const ja: T = {
  title: "相似と合同",
  kelas: "中学3年",
  backLabel: "中学3年に戻る",
  subtopics: {
    definition: "相似と合同の定義",
    sideLengths: "相似な平面図形の辺の長さを求める",
    triangles: "相似な三角形",
    rightTriangles: "相似を使って直角三角形の辺の比を求める",
    congruence: "平面図形の合同",
  },
};

const zhCN: T = {
  title: "相似与全等",
  kelas: "九年级",
  backLabel: "返回九年级",
  subtopics: {
    definition: "相似与全等的定义",
    sideLengths: "计算相似平面图形的边长",
    triangles: "相似三角形",
    rightTriangles: "利用相似求直角三角形的边长之比",
    congruence: "平面图形的全等",
  },
};

const ru: T = {
  title: "ПОДОБИЕ И КОНГРУЭНТНОСТЬ",
  kelas: "9 класс",
  backLabel: "Назад к 9 классу",
  subtopics: {
    definition: "Определение подобия и конгруэнтности",
    sideLengths: "Нахождение длин сторон подобных плоских фигур",
    triangles: "Подобные треугольники",
    rightTriangles: "Нахождение отношений сторон прямоугольных треугольников по подобию",
    congruence: "Конгруэнтность плоских фигур",
  },
};

const translations = {
  id,
  en,
  "ms-MY": msMY,
  ja,
  "zh-CN": zhCN,
  ru,
} satisfies Record<Language, T>;

const subtopicPaths = [
  "/buku-animasi-matematika/kesebangunan-kekongruenan/definisi",
  "/buku-animasi-matematika/kesebangunan-kekongruenan/menghitung-rusuk",
  "/buku-animasi-matematika/kesebangunan-kekongruenan/segitiga-sebangun",
  "/buku-animasi-matematika/kesebangunan-kekongruenan/perbandingan-rusuk-siku-siku",
  "/buku-animasi-matematika/kesebangunan-kekongruenan/kekongruenan",
] as const;
const subtopicIcons = ["📖", "📏", "🔺", "↔️", "🔷"] as const;

const KesebangunanKekongruenPage = () => {
  const { language } = useLanguage();
  const t = pickLang(translations, language);
  const subtopics = [
    t.subtopics.definition,
    t.subtopics.sideLengths,
    t.subtopics.triangles,
    t.subtopics.rightTriangles,
    t.subtopics.congruence,
  ].map((label, index) => ({
    label,
    path: subtopicPaths[index],
    icon: subtopicIcons[index],
  }));

  return (
    <MateriTopicPage
      title={t.title}
      emoji="🔷"
      kelas={t.kelas}
      subtopics={subtopics}
      backPath="/buku-animasi-matematika/kelas-9"
      backLabel={t.backLabel}
    />
  );
};

export default KesebangunanKekongruenPage;
