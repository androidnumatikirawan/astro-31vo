import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, Play, RotateCcw } from "lucide-react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Starfield from "@/components/Starfield";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { pickLang } from "@/lib/pickLang";
import { useTheme } from "@/contexts/ThemeContext";

/* ───────────────────────────────────────────────────────────────
   PRESET EXAMPLES
─────────────────────────────────────────────────────────────── */
interface Example {
  id: number;
  a: number;
  b: number;
  color: string;
  arcColor: string;
  glowId: string;
}

const EXAMPLES: Example[] = [
  {
    id: 1,
    a: 2, b: 5,
    color: "#38bdf8",
    arcColor: "#38bdf8",
    glowId: "glow-blue",
  },
  {
    id: 2,
    a: -3, b: -4,
    color: "#f87171",
    arcColor: "#f87171",
    glowId: "glow-red",
  },
  {
    id: 3,
    a: 6, b: -4,
    color: "#fb923c",
    arcColor: "#fb923c",
    glowId: "glow-orange",
  },
  {
    id: 4,
    a: 3, b: -7,
    color: "#a78bfa",
    arcColor: "#a78bfa",
    glowId: "glow-violet",
  },
  {
    id: 5,
    a: -5, b: 8,
    color: "#4ade80",
    arcColor: "#4ade80",
    glowId: "glow-green",
  },
  {
    id: 6,
    a: 0, b: -3,
    color: "#facc15",
    arcColor: "#facc15",
    glowId: "glow-yellow",
  },
];

const id = {
  back: "Kembali",
  bookBadge: "BUKU ANIMASI MATEMATIKA · KELAS 7",
  title: "PENJUMLAHAN BILANGAN BULAT",
  subtitle: "Lihat bagaimana busur animasi di bawah garis bilangan menunjukkan proses penjumlahan langkah demi langkah",
  introTitle: "📌 Cara Membaca Animasi:",
  startPointLabel: "ungu",
  startPointDescription: " = posisi awal. ",
  stepLead: "Setiap ",
  arcLabel: "busur ke bawah",
  arcDescription: " mewakili satu langkah (+1 atau −1) pada garis bilangan. ",
  resultPointLabel: "kuning ✨",
  resultPointDescription: " = hasil akhir.",
  examples: [
    { label: "Positif + Positif", tip: "Kedua bilangan positif → busur bergerak ke kanan, hasilnya makin besar." },
    { label: "Negatif + Negatif", tip: "Kedua bilangan negatif → busur bergerak ke kiri, hasilnya makin kecil." },
    { label: "Positif + Negatif (hasil +)", tip: "Bilangan pertama lebih besar nilainya → hasilnya tetap positif." },
    { label: "Positif + Negatif (hasil −)", tip: "Bilangan kedua lebih besar nilainya → hasilnya negatif." },
    { label: "Negatif + Positif (hasil +)", tip: "Bilangan kedua positif lebih besar → hasilnya positif." },
    { label: "Nol + Negatif", tip: "Menjumlahkan nol dengan bilangan negatif → hasilnya tetap sama dengan bilangan negatif tersebut." },
  ],
  calculatorTitle: "Kalkulator Garis Bilangan Interaktif",
  firstNumber: "Bilangan Pertama",
  secondNumber: "Bilangan Kedua",
  result: "Hasil",
  firstNumberAria: "Bilangan pertama, dari −15 hingga 15",
  secondNumberAria: "Bilangan kedua, dari −15 hingga 15",
  decreaseFirst: "Kurangi bilangan pertama",
  increaseFirst: "Tambah bilangan pertama",
  decreaseSecond: "Kurangi bilangan kedua",
  increaseSecond: "Tambah bilangan kedua",
  selectExample: (example: number, a: number, b: number) => `Pilih contoh ${example}: ${a} + (${b})`,
  numberLineAria: (a: number, b: number, result: number) => `Garis bilangan untuk ${a} + (${b}) = ${result}`,
  rangeError: "Setiap bilangan harus berada di antara −15 dan 15.",
  positiveHint: (value: number) => `✅ Bilangan kedua positif (+${value}) → busur bergerak ke KANAN ➡️`,
  negativeHint: (value: number) => `🔴 Bilangan kedua negatif (${value}) → busur bergerak ke KIRI ⬅️`,
  animating: "Animasi…",
  repeat: "Ulangi",
  operate: "Operasikan!",
  reset: "Reset",
  replayExample: "Putar Ulang",
  previous: "Sebelumnya",
  next: "Selanjutnya",
  rulesTitle: "🔑 Aturan Kunci Penjumlahan Bilangan Bulat",
  rules: [
    "Positif + Positif → hasilnya selalu positif, semakin besar",
    "Negatif + Negatif → hasilnya selalu negatif, semakin kecil",
    "Positif + Negatif → lihat mana yang nilainya lebih besar",
    "Setiap bilangan + 0 = bilangan itu sendiri (identitas)",
    "a + b = b + a (sifat komutatif / urutan tidak mempengaruhi hasil)",
    "(a + b) + c = a + (b + c) (sifat asosiatif / pengelompokan bebas)",
  ],
};
type T = typeof id;

const en: T = {
  back: "Back",
  bookBadge: "ANIMATED MATH BOOK · GRADE 7",
  title: "INTEGER ADDITION",
  subtitle: "See how animated arcs beneath the number line show addition one step at a time.",
  introTitle: "📌 How to Read the Animation:",
  startPointLabel: "purple",
  startPointDescription: " = starting position. ",
  stepLead: "Each ",
  arcLabel: "downward arc",
  arcDescription: " represents one step (+1 or −1) on the number line. ",
  resultPointLabel: "yellow ✨",
  resultPointDescription: " = final result.",
  examples: [
    { label: "Positive + Positive", tip: "Both numbers are positive → the arc moves right, so the result gets larger." },
    { label: "Negative + Negative", tip: "Both numbers are negative → the arc moves left, so the result gets smaller." },
    { label: "Positive + Negative (positive result)", tip: "The first number has the greater absolute value → the result stays positive." },
    { label: "Positive + Negative (negative result)", tip: "The second number has the greater absolute value → the result is negative." },
    { label: "Negative + Positive (positive result)", tip: "The positive second number has the greater absolute value → the result is positive." },
    { label: "Zero + Negative", tip: "Adding zero to a negative number leaves the negative number unchanged." },
  ],
  calculatorTitle: "Interactive Number Line Calculator",
  firstNumber: "First Number",
  secondNumber: "Second Number",
  result: "Result",
  firstNumberAria: "First number, from −15 to 15",
  secondNumberAria: "Second number, from −15 to 15",
  decreaseFirst: "Decrease the first number",
  increaseFirst: "Increase the first number",
  decreaseSecond: "Decrease the second number",
  increaseSecond: "Increase the second number",
  selectExample: (example: number, a: number, b: number) => `Select example ${example}: ${a} + (${b})`,
  numberLineAria: (a: number, b: number, result: number) => `Number line for ${a} + (${b}) = ${result}`,
  rangeError: "Each number must be between −15 and 15.",
  positiveHint: (value: number) => `✅ The second number is positive (+${value}) → the arc moves RIGHT ➡️`,
  negativeHint: (value: number) => `🔴 The second number is negative (${value}) → the arc moves LEFT ⬅️`,
  animating: "Animating…",
  repeat: "Repeat",
  operate: "Add!",
  reset: "Reset",
  replayExample: "Replay",
  previous: "Previous",
  next: "Next",
  rulesTitle: "🔑 Key Rules for Adding Integers",
  rules: [
    "Positive + positive → the result is always positive and increases",
    "Negative + negative → the result is always negative and decreases",
    "Positive + negative → compare their absolute values",
    "Any number + 0 = that number (identity property)",
    "a + b = b + a (commutative property / order does not affect the result)",
    "(a + b) + c = a + (b + c) (associative property / regrouping is allowed)",
  ],
};

const msMY: T = {
  back: "Kembali",
  bookBadge: "BUKU ANIMASI MATEMATIK · TINGKATAN 1",
  title: "PENAMBAHAN NOMBOR BULAT",
  subtitle: "Lihat bagaimana lengkok animasi di bawah garis nombor menunjukkan proses penambahan langkah demi langkah.",
  introTitle: "📌 Cara Membaca Animasi:",
  startPointLabel: "ungu",
  startPointDescription: " = kedudukan permulaan. ",
  stepLead: "Setiap ",
  arcLabel: "lengkok ke bawah",
  arcDescription: " mewakili satu langkah (+1 atau −1) pada garis nombor. ",
  resultPointLabel: "kuning ✨",
  resultPointDescription: " = hasil akhir.",
  examples: [
    { label: "Positif + Positif", tip: "Kedua-dua nombor positif → lengkok bergerak ke kanan, maka hasilnya semakin besar." },
    { label: "Negatif + Negatif", tip: "Kedua-dua nombor negatif → lengkok bergerak ke kiri, maka hasilnya semakin kecil." },
    { label: "Positif + Negatif (hasil +)", tip: "Nilai mutlak nombor pertama lebih besar → hasilnya kekal positif." },
    { label: "Positif + Negatif (hasil −)", tip: "Nilai mutlak nombor kedua lebih besar → hasilnya negatif." },
    { label: "Negatif + Positif (hasil +)", tip: "Nilai mutlak nombor positif kedua lebih besar → hasilnya positif." },
    { label: "Sifar + Negatif", tip: "Menambah sifar kepada nombor negatif tidak mengubah nilai nombor negatif itu." },
  ],
  calculatorTitle: "Kalkulator Garis Nombor Interaktif",
  firstNumber: "Nombor Pertama",
  secondNumber: "Nombor Kedua",
  result: "Hasil",
  firstNumberAria: "Nombor pertama, dari −15 hingga 15",
  secondNumberAria: "Nombor kedua, dari −15 hingga 15",
  decreaseFirst: "Kurangkan nombor pertama",
  increaseFirst: "Tambah nombor pertama",
  decreaseSecond: "Kurangkan nombor kedua",
  increaseSecond: "Tambah nombor kedua",
  selectExample: (example: number, a: number, b: number) => `Pilih contoh ${example}: ${a} + (${b})`,
  numberLineAria: (a: number, b: number, result: number) => `Garis nombor bagi ${a} + (${b}) = ${result}`,
  rangeError: "Setiap nombor mestilah antara −15 hingga 15.",
  positiveHint: (value: number) => `✅ Nombor kedua positif (+${value}) → lengkok bergerak ke KANAN ➡️`,
  negativeHint: (value: number) => `🔴 Nombor kedua negatif (${value}) → lengkok bergerak ke KIRI ⬅️`,
  animating: "Animasi…",
  repeat: "Ulang",
  operate: "Tambah!",
  reset: "Tetapkan Semula",
  replayExample: "Main Semula",
  previous: "Sebelumnya",
  next: "Seterusnya",
  rulesTitle: "🔑 Peraturan Utama Penambahan Nombor Bulat",
  rules: [
    "Positif + positif → hasilnya sentiasa positif dan semakin besar",
    "Negatif + negatif → hasilnya sentiasa negatif dan semakin kecil",
    "Positif + negatif → bandingkan nilai mutlak kedua-duanya",
    "Sebarang nombor + 0 = nombor itu sendiri (sifat identiti)",
    "a + b = b + a (sifat kalis tukar tertib / tertib tidak mengubah hasil)",
    "(a + b) + c = a + (b + c) (sifat sekutuan / pengelompokan boleh diubah)",
  ],
};

const ja: T = {
  back: "戻る",
  bookBadge: "数学アニメーションブック · 中学1年",
  title: "整数の足し算",
  subtitle: "数直線の下に描かれる弧のアニメーションで、足し算の手順を一歩ずつ確認しましょう。",
  introTitle: "📌 アニメーションの見方：",
  startPointLabel: "紫",
  startPointDescription: " = 開始位置です。 ",
  stepLead: "それぞれの",
  arcLabel: "下向きの弧",
  arcDescription: "は、数直線上の1ステップ（+1または−1）を表します。 ",
  resultPointLabel: "黄色 ✨",
  resultPointDescription: " = 最終結果です。",
  examples: [
    { label: "正の数 + 正の数", tip: "2つとも正の数 → 弧は右へ進み、結果は大きくなります。" },
    { label: "負の数 + 負の数", tip: "2つとも負の数 → 弧は左へ進み、結果は小さくなります。" },
    { label: "正の数 + 負の数（結果は正）", tip: "最初の数の絶対値のほうが大きい → 結果は正のままです。" },
    { label: "正の数 + 負の数（結果は負）", tip: "2つ目の数の絶対値のほうが大きい → 結果は負になります。" },
    { label: "負の数 + 正の数（結果は正）", tip: "2つ目の正の数の絶対値のほうが大きい → 結果は正になります。" },
    { label: "0 + 負の数", tip: "負の数に0を足しても、その負の数の値は変わりません。" },
  ],
  calculatorTitle: "インタラクティブ数直線計算機",
  firstNumber: "最初の数",
  secondNumber: "2つ目の数",
  result: "答え",
  firstNumberAria: "最初の数、−15から15まで",
  secondNumberAria: "もう一方の数、−15から15まで",
  decreaseFirst: "最初の数を減らす",
  increaseFirst: "最初の数を増やす",
  decreaseSecond: "2つ目の数を減らす",
  increaseSecond: "2つ目の数を増やす",
  selectExample: (example: number, a: number, b: number) => `例題${example}を選択：${a} + (${b})`,
  numberLineAria: (a: number, b: number, result: number) => `${a} + (${b}) = ${result} を表す数直線`,
  rangeError: "各数は−15から15の範囲で入力してください。",
  positiveHint: (value: number) => `✅ 2つ目の数は正（+${value}）→ 弧は右へ進みます ➡️`,
  negativeHint: (value: number) => `🔴 2つ目の数は負（${value}）→ 弧は左へ進みます ⬅️`,
  animating: "アニメーション中…",
  repeat: "もう一度",
  operate: "計算する！",
  reset: "リセット",
  replayExample: "もう一度再生",
  previous: "前へ",
  next: "次へ",
  rulesTitle: "🔑 整数の足し算の基本ルール",
  rules: [
    "正の数 + 正の数 → 答えは常に正で、大きくなる",
    "負の数 + 負の数 → 答えは常に負で、小さくなる",
    "正の数 + 負の数 → 絶対値の大きさを比べる",
    "どんな数でも + 0 = その数（加法の単位元）",
    "a + b = b + a（交換法則／順序を変えても答えは同じ）",
    "(a + b) + c = a + (b + c)（結合法則／括り方を変えてもよい）",
  ],
};

const zhCN: T = {
  back: "返回",
  bookBadge: "数学动画书 · 七年级",
  title: "整数加法",
  subtitle: "观察数轴下方的弧线动画，逐步了解加法的过程。",
  introTitle: "📌 动画说明：",
  startPointLabel: "紫色",
  startPointDescription: " = 起始位置。 ",
  stepLead: "每条",
  arcLabel: "向下的弧线",
  arcDescription: "代表数轴上的一步（+1 或 −1）。",
  resultPointLabel: "黄色 ✨",
  resultPointDescription: " = 最终结果。",
  examples: [
    { label: "正数 + 正数", tip: "两个数都是正数 → 弧线向右移动，结果变大。" },
    { label: "负数 + 负数", tip: "两个数都是负数 → 弧线向左移动，结果变小。" },
    { label: "正数 + 负数（结果为正）", tip: "第一个数的绝对值较大 → 结果仍为正数。" },
    { label: "正数 + 负数（结果为负）", tip: "第二个数的绝对值较大 → 结果为负数。" },
    { label: "负数 + 正数（结果为正）", tip: "第二个正数的绝对值较大 → 结果为正数。" },
    { label: "零 + 负数", tip: "负数加零，结果仍是这个负数。" },
  ],
  calculatorTitle: "交互式数轴计算器",
  firstNumber: "第一个数",
  secondNumber: "第二个数",
  result: "结果",
  firstNumberAria: "第一个数，范围 −15 到 15",
  secondNumberAria: "第二个数，范围 −15 到 15",
  decreaseFirst: "减小第一个数",
  increaseFirst: "增大第一个数",
  decreaseSecond: "减小第二个数",
  increaseSecond: "增大第二个数",
  selectExample: (example: number, a: number, b: number) => `选择例题 ${example}：${a} + (${b})`,
  numberLineAria: (a: number, b: number, result: number) => `数轴表示 ${a} + (${b}) = ${result}`,
  rangeError: "每个数必须在 −15 到 15 之间。",
  positiveHint: (value: number) => `✅ 第二个数为正数（+${value}）→ 弧线向右移动 ➡️`,
  negativeHint: (value: number) => `🔴 第二个数为负数（${value}）→ 弧线向左移动 ⬅️`,
  animating: "动画播放中…",
  repeat: "重播",
  operate: "计算！",
  reset: "重置",
  replayExample: "重播",
  previous: "上一个",
  next: "下一个",
  rulesTitle: "🔑 整数加法的基本规则",
  rules: [
    "正数 + 正数 → 结果始终为正，并且变大",
    "负数 + 负数 → 结果始终为负，并且变小",
    "正数 + 负数 → 比较两个数的绝对值",
    "任意数 + 0 = 该数本身（单位元性质）",
    "a + b = b + a（交换律／顺序不影响结果）",
    "(a + b) + c = a + (b + c)（结合律／可以改变分组）",
  ],
};

const ru: T = {
  back: "Назад",
  bookBadge: "УЧЕБНИК С АНИМАЦИЯМИ · 7 КЛАСС",
  title: "СЛОЖЕНИЕ ЦЕЛЫХ ЧИСЕЛ",
  subtitle: "Посмотрите, как анимированные дуги под числовой прямой показывают сложение шаг за шагом.",
  introTitle: "📌 Как читать анимацию:",
  startPointLabel: "фиолетовая точка",
  startPointDescription: " — начальное положение. ",
  stepLead: "Каждая ",
  arcLabel: "дуга вниз",
  arcDescription: " показывает один шаг (+1 или −1) на числовой прямой. ",
  resultPointLabel: "жёлтая точка ✨",
  resultPointDescription: " — итоговый результат.",
  examples: [
    { label: "Положительное + положительное", tip: "Оба числа положительные → дуга движется вправо, результат увеличивается." },
    { label: "Отрицательное + отрицательное", tip: "Оба числа отрицательные → дуга движется влево, результат уменьшается." },
    { label: "Положительное + отрицательное (результат +)", tip: "Модуль первого числа больше → результат остаётся положительным." },
    { label: "Положительное + отрицательное (результат −)", tip: "Модуль второго числа больше → результат отрицательный." },
    { label: "Отрицательное + положительное (результат +)", tip: "Модуль второго положительного числа больше → результат положительный." },
    { label: "Ноль + отрицательное", tip: "Прибавление нуля к отрицательному числу не меняет его." },
  ],
  calculatorTitle: "Интерактивный калькулятор числовой прямой",
  firstNumber: "Первое число",
  secondNumber: "Второе число",
  result: "Результат",
  firstNumberAria: "Первое число, от −15 до 15",
  secondNumberAria: "Второе число, от −15 до 15",
  decreaseFirst: "Уменьшить первое число",
  increaseFirst: "Увеличить первое число",
  decreaseSecond: "Уменьшить второе число",
  increaseSecond: "Увеличить второе число",
  selectExample: (example: number, a: number, b: number) => `Выбрать пример ${example}: ${a} + (${b})`,
  numberLineAria: (a: number, b: number, result: number) => `Числовая прямая для ${a} + (${b}) = ${result}`,
  rangeError: "Каждое число должно быть от −15 до 15.",
  positiveHint: (value: number) => `✅ Второе число положительное (+${value}) → дуга движется ВПРАВО ➡️`,
  negativeHint: (value: number) => `🔴 Второе число отрицательное (${value}) → дуга движется ВЛЕВО ⬅️`,
  animating: "Анимация…",
  repeat: "Повторить",
  operate: "Вычислить!",
  reset: "Сбросить",
  replayExample: "Повторить",
  previous: "Назад",
  next: "Далее",
  rulesTitle: "🔑 Основные правила сложения целых чисел",
  rules: [
    "Положительное + положительное → результат всегда положительный и увеличивается",
    "Отрицательное + отрицательное → результат всегда отрицательный и уменьшается",
    "Положительное + отрицательное → сравните модули чисел",
    "Любое число + 0 = это же число (нейтральный элемент)",
    "a + b = b + a (переместительное свойство / порядок не влияет на результат)",
    "(a + b) + c = a + (b + c) (сочетательное свойство / группировку можно менять)",
  ],
};

const translations = {
  id,
  en,
  "ms-MY": msMY,
  ja,
  "zh-CN": zhCN,
  ru,
} satisfies Record<Language, T>;

/* ───────────────────────────────────────────────────────────────
   NUMBER LINE WITH DOWNWARD ARCS
─────────────────────────────────────────────────────────────── */
const ARC_DUR_MS = 550;
const SVG_W = 620;
const SVG_H = 160;
const PAD = 38;
const LINE_Y = 54; // number line sits at top third; arcs hang DOWN below it

interface NumberLineProps {
  a: number;
  b: number;
  arcColor: string;
  glowId: string;
  ariaLabel: string;
  phase: "idle" | "animating" | "done";
  animStep: number;
}

const NumberLineAnim = ({ a, b, arcColor, glowId, ariaLabel, phase, animStep }: NumberLineProps) => {
  const { isDark } = useTheme();
  const lightMode = !isDark;
  const result = a + b;
  const steps = Math.abs(b);
  const dir = b >= 0 ? 1 : -1;

  // dynamic range
  const keyPts = [a, result, 0];
  const rawMin = Math.min(...keyPts);
  const rawMax = Math.max(...keyPts);
  const span = rawMax - rawMin;
  const buf = Math.max(2, Math.ceil(span * 0.3) + 1);
  const low = rawMin - buf;
  const high = rawMax + buf;
  const range = Math.max(high - low, 8);
  const unitPx = (SVG_W - PAD * 2) / range;
  const toX = (n: number) => PAD + (n - low) * unitPx;

  const ticks: number[] = [];
  const tickStep = range > 24 ? 5 : range > 12 ? 2 : 1;
  for (let n = Math.ceil(low / tickStep) * tickStep; n <= Math.floor(high / tickStep) * tickStep; n += tickStep) {
    ticks.push(n);
  }
  // always include key points
  [a, result, 0].forEach(p => { if (!ticks.includes(p) && p >= low && p <= high) ticks.push(p); });
  ticks.sort((x, y) => x - y);

  const arcH = Math.min(48, Math.max(20, unitPx * 0.7));
  const isDone = phase === "done";
  const visibleArcs = phase === "idle" ? 0 : animStep;
  const axisColor = lightMode ? "#64748b" : "#FFD700";
  const lightLabelBackground = "#f8fafc";
  const lightLabelBorder = "#cbd5e1";

  return (
    <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label={ariaLabel}
      className="integer-animation-book-svg"
      style={{ overflow: "visible", background: lightMode ? lightLabelBackground : undefined }}>
      <defs>
        <style>{`
          @keyframes arcDown {
            0%   { stroke-dashoffset: 100; opacity: 0; }
            12%  { opacity: 0.9; }
            100% { stroke-dashoffset: 0; opacity: 1; }
          }
          @keyframes dotPop {
            0%   { opacity: 0; r: 2px; }
            60%  { opacity: 1; r: 9px; }
            100% { opacity: 1; r: 7px; }
          }
          @keyframes ringBurst {
            0%   { opacity: 0; transform: scale(0.4); }
            60%  { opacity: 1; transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes sparkOut {
            0%   { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(2.8); }
          }
          .arc-down  { animation: arcDown 0.7s cubic-bezier(0.22,1,0.36,1) both; }
          .dot-pop   { animation: dotPop 0.5s ease-out both; }
          .ring-burst{ animation: ringBurst 0.7s cubic-bezier(0.34,1.4,0.64,1) both; transform-box: fill-box; transform-origin: center; }
          .spark-out { animation: sparkOut 0.8s ease-out both; transform-box: fill-box; }
        `}</style>

        {/* glow filters */}
        {[
          { id: "glow-blue",   rgb: "0.22 0.75 1" },
          { id: "glow-red",    rgb: "1 0.3 0.3" },
          { id: "glow-orange", rgb: "1 0.55 0.2" },
          { id: "glow-violet", rgb: "0.65 0.55 1" },
          { id: "glow-green",  rgb: "0.3 0.86 0.5" },
          { id: "glow-yellow", rgb: "1 0.8 0.1" },
          { id: "glow-amber",  rgb: "1 0.75 0.1" },
        ].map(({ id, rgb }) => (
          <filter key={id} id={id} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="b"/>
            <feColorMatrix in="b" type="matrix"
              values={`0 0 0 0 ${rgb.split(" ")[0]}  0 0 0 0 ${rgb.split(" ")[1]}  0 0 0 0 ${rgb.split(" ")[2]}  0 0 0 1.2 0`}
              result="c"/>
            <feMerge><feMergeNode in="c"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        ))}

        {/* axis arrows */}
        <marker id="ax-r" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
          <polygon points="0 0,9 3.5,0 7" fill={axisColor}/>
        </marker>
        <marker id="ax-l" markerWidth="9" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
          <polygon points="0 0,9 3.5,0 7" fill={axisColor}/>
        </marker>
        {/* arc arrow */}
        <marker id={`arc-arr-${arcColor.replace("#","")}`} markerWidth="7" markerHeight="6" refX="6" refY="3" orient="auto">
          <polygon points="0 0,7 3,0 6" fill={arcColor}/>
        </marker>
      </defs>

      {/* number line axis */}
      <line x1={12} y1={LINE_Y} x2={SVG_W - 12} y2={LINE_Y}
        stroke={axisColor} strokeWidth="2.5"
        markerEnd="url(#ax-r)" markerStart="url(#ax-l)"
        style={{ filter: lightMode ? undefined : "drop-shadow(0 0 3px #FFD70099)" }}
      />

      {/* ticks & labels */}
      {ticks.map(n => {
        const x = toX(n);
        const isZero = n === 0;
        const isA    = n === a;
        const isRes  = isDone && n === result;
        const prominent = isZero || isA || isRes;
        const tickColor = lightMode ? "#64748b" : isRes ? "#fbbf24" : isA ? "#c084fc" : isZero ? "#fff" : "#FFD700";
        const textColor = lightMode ? "#0f172a" : isRes ? "#fbbf24" : isA ? "#c084fc" : isZero ? "#fff" : "#FFE57F";
        return (
          <g key={n}>
            {lightMode && (
              <rect x={x - (prominent ? 15 : 12)} y={LINE_Y - 34}
                width={prominent ? 30 : 24} height="18" rx="4"
                fill={lightLabelBackground} stroke={lightLabelBorder} strokeWidth="0.8" />
            )}
            <line
              x1={x} y1={prominent ? LINE_Y - 10 : LINE_Y - 5}
              x2={x} y2={prominent ? LINE_Y + 10 : LINE_Y + 5}
              stroke={tickColor} strokeWidth={prominent ? 2.5 : 1.5}
              style={prominent ? { filter: `drop-shadow(0 0 4px ${tickColor}88)` } : undefined}
            />
            <text x={x} y={LINE_Y - 18} textAnchor="middle"
              fill={textColor} fontSize={prominent ? 13 : 10}
              fontWeight={prominent ? "bold" : "normal"}
              fontFamily="monospace"
            >{n}</text>
          </g>
        );
      })}

      {/* start dot (purple) */}
      {phase !== "idle" && (
        <circle cx={toX(a)} cy={LINE_Y} r="7"
          fill="#c084fc" filter="url(#glow-violet)"
          className="dot-pop"
        />
      )}

      {/* DOWNWARD ARCS */}
      {phase !== "idle" && Array.from({ length: steps }, (_, i) => {
        if (i >= visibleArcs) return null;
        const from = a + i * dir;
        const to   = a + (i + 1) * dir;
        const x1   = toX(from);
        const x2   = toX(to);
        const mx   = (x1 + x2) / 2;
        const cy   = LINE_Y + arcH; // ← DOWNWARD
        const delay = `${i * (ARC_DUR_MS / 1000)}s`;
        return (
          <g key={`arc-${i}`}>
            {/* glow shadow stroke */}
            <path d={`M ${x1},${LINE_Y} Q ${mx},${cy} ${x2},${LINE_Y}`}
              fill="none" stroke={arcColor} strokeWidth="11"
              strokeOpacity="0.18" strokeLinecap="round"
              pathLength="100" strokeDasharray="100"
              className="arc-down"
              style={{ animationDelay: delay }}
            />
            {/* main arc stroke */}
            <path d={`M ${x1},${LINE_Y} Q ${mx},${cy} ${x2},${LINE_Y}`}
              fill="none" stroke={arcColor} strokeWidth="3"
              strokeLinecap="round"
              pathLength="100" strokeDasharray="100"
              filter={`url(#${glowId})`}
              className="arc-down"
              style={{ animationDelay: delay }}
              markerEnd={`url(#arc-arr-${arcColor.replace("#","")})`}
            />
            {/* step number label */}
            {lightMode && (
              <rect x={mx - 14} y={cy + 7} width="28" height="17" rx="4"
                fill={lightLabelBackground} stroke={lightLabelBorder} strokeWidth="0.8" />
            )}
            <text x={mx} y={cy + 18} textAnchor="middle"
              fill={lightMode ? "#334155" : arcColor} fontSize="10" fontWeight="bold"
              fontFamily="monospace" opacity="0.85"
              className="arc-down"
              style={{ animationDelay: `${i * (ARC_DUR_MS / 1000) + 0.3}s` }}
            >
              {dir > 0 ? `+1` : `−1`}
            </text>
          </g>
        );
      })}

      {/* result dot + sparkle */}
      {isDone && (
        <g>
          <circle cx={toX(result)} cy={LINE_Y} r="14"
            fill="none" stroke="#fbbf24" strokeWidth="2.5"
            filter="url(#glow-amber)"
            className="ring-burst"
          />
          <circle cx={toX(result)} cy={LINE_Y} r="7"
            fill="#fbbf24" filter="url(#glow-amber)"
            className="dot-pop"
          />
          {[0, 60, 120, 180, 240, 300].map((deg, si) => {
            const rad = (deg * Math.PI) / 180;
            const sx = toX(result) + Math.cos(rad) * 19;
            const sy = LINE_Y + Math.sin(rad) * 19;
            return (
              <circle key={si} cx={sx} cy={sy} r="2.5"
                fill="#fbbf24"
                className="spark-out"
                style={{ animationDelay: `${si * 0.055}s`, transformOrigin: `${sx}px ${sy}px` }}
              />
            );
          })}
        </g>
      )}

      {/* result label */}
      {isDone && (
        <g>
          {lightMode && (
            <rect x={toX(result) - 24} y="0" width="48" height="18" rx="4"
              fill={lightLabelBackground} stroke={lightLabelBorder} strokeWidth="0.8" />
          )}
          <text x={toX(result)} y={14}
            textAnchor="middle" fontSize="12" fontWeight="bold"
            fill={lightMode ? "#0f172a" : "#fbbf24"} fontFamily="monospace"
            style={{ filter: lightMode ? undefined : "drop-shadow(0 0 6px #fbbf24aa)" }}
          >
            = {result}
          </text>
        </g>
      )}
    </svg>
  );
};

/* ───────────────────────────────────────────────────────────────
   INTERACTIVE CALCULATOR SECTION
─────────────────────────────────────────────────────────────── */
const KalkulatorInteraktif = ({ t }: { t: T }) => {
  const { isDark } = useTheme();
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [phase, setPhase] = useState<"idle" | "animating" | "done">("idle");
  const [animStep, setAnimStep] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef  = useRef<ReturnType<typeof setTimeout>  | null>(null);

  const numA = inputA !== "" ? parseInt(inputA) : null;
  const numB = inputB !== "" ? parseInt(inputB) : null;
  const validA = numA !== null && !isNaN(numA);
  const validB = numB !== null && !isNaN(numB);
  const both = validA && validB;
  const outOfRange =
    (numA !== null && validA && (numA < -15 || numA > 15)) ||
    (numB !== null && validB && (numB < -15 || numB > 15));

  const a = validA ? Math.max(-15, Math.min(15, numA!)) : 0;
  const b = validB ? Math.max(-15, Math.min(15, numB!)) : 0;
  const steps = Math.abs(b);
  const result = a + b;

  const arcColor = b >= 0 ? "#38bdf8" : "#f87171";
  const glowId   = b >= 0 ? "glow-blue" : "glow-red";

  const bump = (setter: (v: string) => void, cur: string, delta: number, min = -15, max = 15) => {
    const v = cur === "" ? 0 : parseInt(cur);
    if (!isNaN(v)) setter(String(Math.max(min, Math.min(max, v + delta))));
    resetAnim();
  };

  const resetAnim = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current)  clearTimeout(timeoutRef.current);
    setPhase("idle");
    setAnimStep(0);
  };

  const handleOperate = () => {
    if (!both) return;
    resetAnim();
    if (steps === 0) { setPhase("done"); return; }
    setAnimStep(0);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setPhase("animating");
      let step = 1;
      intervalRef.current = setInterval(() => {
        setAnimStep(step);
        step++;
        if (step > steps) {
          clearInterval(intervalRef.current!);
          timeoutRef.current = setTimeout(() => setPhase("done"), 300);
        }
      }, ARC_DUR_MS);
    }));
  };

  useEffect(() => () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current)  clearTimeout(timeoutRef.current);
  }, []);

  const isDone = phase === "done";

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/80 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-700/60 via-blue-700/50 to-indigo-700/60 px-5 py-3 flex items-center gap-2.5">
        <span className="text-lg">🧮</span>
        <span className={`font-display text-sm font-bold tracking-wide ${isDark ? "text-white" : "text-slate-900"}`}>
          {t.calculatorTitle}
        </span>
      </div>

      <div className="px-5 py-5 space-y-5">
        {/* inputs */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {/* A */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-xs font-semibold text-purple-300/80">{t.firstNumber}</span>
            <div className="flex items-center">
              <button aria-label={t.decreaseFirst} onClick={() => bump(setInputA, inputA, -1)} className="w-9 h-12 rounded-l-xl border-2 border-r-0 border-purple-500/60 bg-slate-800 text-purple-300 text-lg font-bold hover:bg-slate-700 active:scale-95 transition-all">−</button>
              <input
                type="number" value={inputA}
                onChange={e => { setInputA(e.target.value); resetAnim(); }}
                aria-label={t.firstNumberAria}
                placeholder="0" min={-15} max={15}
                className="w-16 h-12 text-center text-xl font-bold border-y-2 border-purple-500/60 bg-slate-800 text-purple-200 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button aria-label={t.increaseFirst} onClick={() => bump(setInputA, inputA, +1)} className="w-9 h-12 rounded-r-xl border-2 border-l-0 border-purple-500/60 bg-slate-800 text-purple-300 text-lg font-bold hover:bg-slate-700 active:scale-95 transition-all">+</button>
            </div>
          </div>

          <span className="text-4xl font-black text-amber-300 mt-6">+</span>

          {/* B */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-xs font-semibold text-cyan-300/80">{t.secondNumber}</span>
            <div className="flex items-center">
              <button aria-label={t.decreaseSecond} onClick={() => bump(setInputB, inputB, -1)} className={`w-9 h-12 rounded-l-xl border-2 border-r-0 ${b >= 0 ? "border-cyan-500/60 text-cyan-300" : "border-red-500/60 text-red-300"} bg-slate-800 text-lg font-bold hover:bg-slate-700 active:scale-95 transition-all`}>−</button>
              <input
                type="number" value={inputB}
                onChange={e => { setInputB(e.target.value); resetAnim(); }}
                aria-label={t.secondNumberAria}
                placeholder="0" min={-15} max={15}
                className={`w-16 h-12 text-center text-xl font-bold border-y-2 bg-slate-800 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${b >= 0 ? "border-cyan-500/60 text-cyan-200" : "border-red-500/60 text-red-200"}`}
              />
              <button aria-label={t.increaseSecond} onClick={() => bump(setInputB, inputB, +1)} className={`w-9 h-12 rounded-r-xl border-2 border-l-0 ${b >= 0 ? "border-cyan-500/60 text-cyan-300" : "border-red-500/60 text-red-300"} bg-slate-800 text-lg font-bold hover:bg-slate-700 active:scale-95 transition-all`}>+</button>
            </div>
          </div>

          <span className="text-4xl font-black text-white/30 mt-6">=</span>

          {/* result */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-xs font-semibold text-amber-300/80">{t.result}</span>
            <div role="status" aria-label={t.result} className={`w-20 h-12 flex items-center justify-center rounded-xl border-2 text-xl font-black font-mono transition-all ${
              isDone ? "border-amber-400 bg-amber-900/30 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.35)]" : "border-white/10 bg-slate-800/50 text-white/20"
            }`}>
              {isDone ? result : "?"}
            </div>
          </div>
        </div>

        {outOfRange && (
          <p role="alert" className="text-center text-xs font-semibold text-red-400">
            {t.rangeError}
          </p>
        )}

        {/* hint */}
        {both && validB && (
          <p className={`text-center text-xs font-semibold ${b >= 0 ? "text-cyan-400" : "text-red-400"}`}>
            {b >= 0
              ? t.positiveHint(b)
              : t.negativeHint(b)
            }
          </p>
        )}

        {/* SVG */}
        <div className="integer-animation-svg-shell bg-slate-950/60 rounded-xl border border-white/10 p-3">
          <NumberLineAnim
            a={a} b={b}
            arcColor={arcColor} glowId={glowId}
            ariaLabel={t.numberLineAria(a, b, result)}
            phase={phase} animStep={animStep}
          />
        </div>

        {/* done banner */}
        {isDone && (
          <div className="flex items-center gap-2 rounded-xl px-4 py-2.5 bg-green-900/30 border border-green-500/40 text-green-300 text-sm font-semibold">
            <span>✅</span>
            <span>{a} + ({b}) = <strong className="text-white">{result}</strong></span>
          </div>
        )}

        {/* buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={handleOperate}
            disabled={!both || phase === "animating"}
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:from-cyan-400 hover:to-blue-500 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Play className="w-4 h-4" />
            {phase === "animating" ? t.animating : phase === "done" ? t.repeat : t.operate}
          </button>
          {(inputA || inputB) && (
            <button aria-label={t.reset} onClick={() => { setInputA(""); setInputB(""); resetAnim(); }}
              className="flex items-center gap-1.5 px-4 py-3 rounded-xl font-semibold text-xs bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-all active:scale-95">
              <RotateCcw className="w-3.5 h-3.5" /> {t.reset}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────────────────────
   EXAMPLE CARD WITH AUTO-PLAY ARC ANIMATION
─────────────────────────────────────────────────────────────── */
interface ExampleCardProps {
  ex: Example;
  animKey: number;
  text: T["examples"][number];
  t: T;
}

const ExampleCard = ({ ex, animKey, text, t }: ExampleCardProps) => {
  const { a, b, arcColor, glowId, color } = ex;
  const { label, tip } = text;
  const result = a + b;
  const steps  = Math.abs(b);

  const [phase, setPhase]     = useState<"idle" | "animating" | "done">("idle");
  const [animStep, setAnimStep] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef  = useRef<ReturnType<typeof setTimeout>  | null>(null);

  // auto-start on mount / animKey change
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current)  clearTimeout(timeoutRef.current);
    setPhase("idle");
    setAnimStep(0);

    const startDelay = setTimeout(() => {
      if (steps === 0) { setPhase("done"); return; }
      setPhase("animating");
      let step = 1;
      intervalRef.current = setInterval(() => {
        setAnimStep(step);
        step++;
        if (step > steps) {
          clearInterval(intervalRef.current!);
          timeoutRef.current = setTimeout(() => setPhase("done"), 300);
        }
      }, ARC_DUR_MS);
    }, 600);

    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current)  clearTimeout(timeoutRef.current);
    };
  }, [animKey, steps]);

  const replay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current)  clearTimeout(timeoutRef.current);
    setPhase("idle");
    setAnimStep(0);
    setTimeout(() => {
      if (steps === 0) { setPhase("done"); return; }
      setPhase("animating");
      let step = 1;
      intervalRef.current = setInterval(() => {
        setAnimStep(step);
        step++;
        if (step > steps) {
          clearInterval(intervalRef.current!);
          timeoutRef.current = setTimeout(() => setPhase("done"), 300);
        }
      }, ARC_DUR_MS);
    }, 80);
  };

  return (
    <div className="rounded-2xl border overflow-hidden" style={{ borderColor: color + "44" }}>
      {/* header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b"
        style={{ background: `linear-gradient(to right,${color}18,transparent)`, borderColor: color + "33" }}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
          style={{ background: color + "25", border: `1.5px solid ${color}88`, color }}>
          {ex.id}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-body" style={{ color: color + "bb" }}>{label}</p>
          <div className="font-display font-bold text-xl text-white mt-0.5">
            <InlineMath math={`${a} + (${b}) = ${result}`} />
          </div>
        </div>
        <button
          aria-label={t.replayExample}
          onClick={replay}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-body transition-all active:scale-95 hover:opacity-90"
          style={{ background: color + "22", border: `1px solid ${color}55`, color }}
        >
          <RotateCcw className="w-3 h-3" /> {t.replayExample}
        </button>
      </div>

      {/* number line */}
      <div className="integer-animation-svg-shell px-4 py-4 bg-slate-950/40">
        <NumberLineAnim
          a={a} b={b}
          arcColor={arcColor} glowId={glowId}
          ariaLabel={t.numberLineAria(a, b, result)}
          phase={phase} animStep={animStep}
        />
      </div>

      {/* tip */}
      <div className="px-5 pb-4">
        <div className="rounded-xl px-4 py-2.5 text-xs font-body leading-relaxed"
          style={{ background: color + "10", border: `1px solid ${color}22`, color: color + "ee" }}>
          <span className="font-bold">💡 </span>{tip}
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────────────────────
   RULES CARD
─────────────────────────────────────────────────────────────── */
const RULE_STYLES = [
  { icon: "➕", color: "#38bdf8" },
  { icon: "➖", color: "#f87171" },
  { icon: "↔️", color: "#fb923c" },
  { icon: "0️⃣", color: "#facc15" },
  { icon: "🔄", color: "#4ade80" },
  { icon: "📐", color: "#a78bfa" },
];

const RulesCard = ({ t }: { t: T }) => (
  <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/25 to-indigo-900/20 p-5">
    <p className="font-body font-bold text-violet-300 text-sm mb-4">{t.rulesTitle}</p>
    <div className="grid sm:grid-cols-2 gap-2.5">
      {RULE_STYLES.map(({ icon, color }, i) => (
        <div key={i} className="flex items-start gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-body"
          style={{ background: color + "0d", border: `1px solid ${color}22` }}>
          <span className="text-base shrink-0 mt-0.5">{icon}</span>
          <span style={{ color: color + "ee" }}>{t.rules[i]}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ───────────────────────────────────────────────────────────────
   MAIN PAGE
─────────────────────────────────────────────────────────────── */
const BukuAnimasiPenjumlahanPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = pickLang(translations, language);
  const [selected, setSelected] = useState(0);
  const [animKey, setAnimKey]   = useState(0);

  const handleSelect = (i: number) => {
    if (i === selected) return;
    setSelected(i);
    setAnimKey(k => k + 1);
  };

  const ex = EXAMPLES[selected];
  const exampleText = t.examples[selected];

  return (
    <div className="animation-submaterial-route integer-animation-book-route relative min-h-screen flex flex-col items-center gradient-space overflow-x-hidden overflow-y-auto">
      <Starfield />

      <div className="relative z-10 w-full max-w-3xl px-4 pt-5 pb-12">
        {/* back */}
        <button aria-label={t.back} onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs font-body text-white/50 hover:text-white/80 transition-colors mb-5">
          <ArrowLeft className="w-4 h-4" /> {t.back}
        </button>

        {/* page title */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-body font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" /> {t.bookBadge}
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-white text-glow-cyan mb-2">
            {t.title}
          </h1>
          <p className="text-white/45 text-xs font-body max-w-sm mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* concept intro */}
        <div className="rounded-2xl border border-amber-500/25 bg-amber-900/10 px-5 py-4 mb-6">
          <p className="text-sm font-body text-amber-200/90 leading-relaxed">
            <span className="font-bold text-amber-300">{t.introTitle}</span>{" "}
            <span className="text-purple-300 font-semibold">{t.startPointLabel}</span>{t.startPointDescription}
            {t.stepLead}<span className="text-cyan-300 font-semibold">{t.arcLabel}</span>{t.arcDescription}
            <span className="text-amber-300 font-semibold">{t.resultPointLabel}</span>{t.resultPointDescription}
          </p>
        </div>

        {/* example selector pills */}
        <div className="flex gap-2 flex-wrap justify-center mb-5">
          {EXAMPLES.map((e, i) => (
            <button key={e.id} aria-label={t.selectExample(e.id, e.a, e.b)} onClick={() => handleSelect(i)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold font-body transition-all active:scale-95"
              style={i === selected ? {
                background: e.color + "30",
                border: `1.5px solid ${e.color}`,
                color: e.color,
                boxShadow: `0 0 10px ${e.color}44`,
              } : {
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.5)",
              }}>
              {e.id}. {e.a} + ({e.b})
            </button>
          ))}
        </div>

        {/* example card */}
        <div className="mb-4">
          <ExampleCard key={`ex-${selected}`} ex={ex} animKey={animKey} text={exampleText} t={t} />
        </div>

        {/* prev / next nav */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <button aria-label={t.previous} onClick={() => handleSelect(Math.max(0, selected - 1))}
            disabled={selected === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-body bg-white/8 border border-white/10 text-white/70 disabled:opacity-25 hover:bg-white/15 active:scale-95 transition-all">
            <ChevronLeft className="w-4 h-4" /> {t.previous}
          </button>
          <span className="text-xs text-white/30 font-body">{selected + 1} / {EXAMPLES.length}</span>
          <button aria-label={t.next} onClick={() => handleSelect(Math.min(EXAMPLES.length - 1, selected + 1))}
            disabled={selected === EXAMPLES.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-body bg-white/8 border border-white/10 text-white/70 disabled:opacity-25 hover:bg-white/15 active:scale-95 transition-all">
            {t.next} <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* rules */}
        <div className="mb-8">
          <RulesCard t={t} />
        </div>

        {/* interactive calculator */}
        <KalkulatorInteraktif t={t} />
      </div>
    </div>
  );
};

export default BukuAnimasiPenjumlahanPage;
