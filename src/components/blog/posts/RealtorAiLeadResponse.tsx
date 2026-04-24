import type { Language } from "@/lib/dictionaries";
import { BlogHero } from "../BlogHero";
import { SectionLabel } from "../SectionLabel";
import { BigNumbers } from "../BigNumbers";
import { Callout } from "../Callout";
import { BarChart } from "../BarChart";
import { Timeline } from "../Timeline";
import { ComparisonTable } from "../ComparisonTable";
import { Mirror } from "../Mirror";
import { PositionGrid } from "../PositionGrid";
import { BlogProse, BlogStrong, BlogEm } from "../BlogProse";
import { BlogAuditForm } from "../BlogAuditForm";
import { getDictionary } from "@/lib/getDictionary";

type Copy = {
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    meta: string;
  };
  stats: {
    label1: React.ReactNode;
    label2: React.ReactNode;
    label3: React.ReactNode;
  };
  s1: {
    label: string;
    p1: React.ReactNode;
    p2: React.ReactNode;
    p3: string;
    quote: string;
  };
  s2: {
    label: string;
    intro: string;
    rows: { label: string; value: string; caption: string }[];
    close: React.ReactNode;
  };
  s3: {
    label: string;
    intro: string;
    tableHeaders: [string, string, string];
    tableRows: { left: string; mid: string; right: string }[];
    gapLabel: React.ReactNode;
    afterP1: React.ReactNode;
    afterP2: string;
  };
  s4: {
    label: string;
    intro: string;
    badTag: string;
    badItems: string[];
    goodTag: string;
    goodItems: string[];
    close: string;
  };
  s5: {
    label: string;
    intro: string;
    steps: { when: string; title: string; desc: string }[];
    close: string;
  };
  s6: {
    label: string;
    intro: string;
    bigValue: string;
    bigLabel: React.ReactNode;
    sample: string;
    close: string;
  };
  s7: {
    label: string;
    intro: string;
    headers: [string, string, string];
    rows: { label: string; left: string; right: string }[];
    close: string;
  };
  s8: {
    label: string;
    headline: string;
    body: React.ReactNode;
    quote: string;
  };
  s9: {
    label: string;
    intro: string;
    steps: { title: string; desc: string }[];
  };
  cta: {
    label: string;
    titleA: string;
    titleB: string;
    body: string;
  };
};

const en: Copy = {
  hero: {
    eyebrow: "Guide for realtors",
    titleA: "You're losing deals",
    titleB: "in your sleep.",
    subtitle:
      "78% of buyers work with the first agent who responds. The average agent takes 15 hours. Here's how top-producing realtors close 3× more deals — without working 3× harder.",
    meta: "8 min read — data-backed, actionable",
  },
  stats: {
    label1: (
      <>
        buy from the
        <br />
        first responder
      </>
    ),
    label2: (
      <>
        average agent
        <br />
        response time
      </>
    ),
    label3: (
      <>
        more likely to qualify
        <br />
        if you respond in 5 min
      </>
    ),
  },
  s1: {
    label: "The 15-hour problem",
    p1: (
      <>
        Here&apos;s a scenario that plays out every single night in real estate.
        A potential buyer finds your listing at 11 PM. They&apos;re excited.
        They tap <BlogStrong>&ldquo;Contact Agent.&rdquo;</BlogStrong> They
        wait. By 8 AM, when you finally see the notification over coffee,
        they&apos;ve already scheduled three showings with agents who responded
        within minutes.
      </>
    ),
    p2: (
      <>
        This isn&apos;t hypothetical.{" "}
        <BlogStrong>
          The average real estate agent takes over 15 hours to respond to a new
          lead inquiry.
        </BlogStrong>{" "}
        Fifteen hours — in an industry where the first responder wins nearly 8
        out of 10 deals.
      </>
    ),
    p3: "The math is brutal, and it doesn't care how good your listings are or how many years you've been in the business.",
    quote:
      "If you're not first, you're losing nearly 8 out of 10 potential clients before the conversation even begins.",
  },
  s2: {
    label: "The response-time cliff",
    intro:
      "Lead qualification doesn't decline gradually — it falls off a cliff. Research across 1.25 million sales leads shows the difference between 5 minutes and 30 minutes isn't marginal. It's categorical.",
    rows: [
      { label: "Under 1 min", value: "78%", caption: "prime window" },
      { label: "Under 5 min", value: "45%", caption: "already halved" },
      { label: "Under 1 hour", value: "22%", caption: "interest cooling" },
      { label: "Under 24 hrs", value: "9%", caption: "likely gone" },
      { label: "Over 24 hrs", value: "3%", caption: "effectively dead" },
    ],
    close: (
      <>
        And here&apos;s the part that makes it worse:{" "}
        <BlogStrong>
          62% of real estate inquiries come in outside business hours.
        </BlogStrong>{" "}
        Evenings. Weekends. Holidays. The times your phone is face-down are the
        times your future clients are most actively searching.
      </>
    ),
  },
  s3: {
    label: "What slow response is costing you",
    intro:
      "Let's stop with percentages and talk about money — because that's what's actually at stake every time your phone buzzes at 11 PM and you don't hear it.",
    tableHeaders: [
      "Metric (20 leads/mo, $400K median, 2.5–3% commission)",
      "15-hour response",
      "5-minute response",
    ],
    tableRows: [
      {
        left: "Conversion rate",
        mid: "~3%",
        right: "~15%",
      },
      {
        left: "Closings per month",
        mid: "0.6",
        right: "3.0",
      },
      {
        left: "Closings per year",
        mid: "~7",
        right: "~36",
      },
      {
        left: "Annual commission revenue",
        mid: "$86,000",
        right: "$432,000",
      },
    ],
    gapLabel: (
      <>
        revenue left on the table
        <br />
        every single year
      </>
    ),
    afterP1: (
      <>
        That number isn&apos;t fantasy. It&apos;s the mathematical difference
        between the average agent&apos;s conversion rate and what agents who
        respond in 5 minutes consistently achieve — on the{" "}
        <BlogEm>same</BlogEm> leads, in the <BlogEm>same</BlogEm> market, with
        the <BlogEm>same</BlogEm> listings.
      </>
    ),
    afterP2:
      "The expensive part isn't the leads you're buying. It's the ones you already have and aren't responding to fast enough.",
  },
  s4: {
    label: "Why top agents can't solve this alone",
    intro:
      "It's not laziness. It's structural. You physically cannot respond to every lead in under 5 minutes — no matter how disciplined you are. The fix isn't working harder; it's having a system that works when you don't.",
    badTag: "Solo agent reality",
    badItems: [
      "Showing a property to a current client",
      "In a closing meeting or on a lender call",
      "Asleep at 2 AM — when 62% of leads come in",
      "On vacation, sick, or simply living your life",
      "Managing 15 active conversations at once",
    ],
    goodTag: "What the AI agent handles",
    goodItems: [
      "Responds in under 2 minutes — 24/7, every lead",
      "Holds a real conversation, not a template",
      "Qualifies based on YOUR criteria and scoring",
      "Books directly into your calendar — no ping-pong",
      "Sounds like you: trained on your tone and listings",
    ],
    close:
      "Not a generic &ldquo;thanks for reaching out, we'll get back to you&rdquo; autoresponder. Something that actually holds a conversation while you're asleep, in a showing, or simply living your life.",
  },
  s5: {
    label: "What an AI lead agent actually does",
    intro:
      "Let's be specific. Here's what happens when a lead comes in at 11:47 PM on a Tuesday — while you're asleep.",
    steps: [
      {
        when: "01",
        title: "Instant response (under 90 seconds)",
        desc: "Personalized message referencing the specific listing. Not a template. More like: 'Hi Sarah! The 3-bed on Maple Street is still available — it just got a price adjustment this week. Want to schedule a viewing?'",
      },
      {
        when: "02",
        title: "Qualification (2–3 minutes)",
        desc: "The AI asks the right questions naturally: budget range, timeline, pre-approval status, preferred neighborhoods, whether they're also selling. Feels like a conversation, not a form.",
      },
      {
        when: "03",
        title: "Smart routing (instant)",
        desc: "Based on answers, the AI scores the lead. Hot leads (pre-approved, 30–60 days) flagged for immediate follow-up. Warm leads booked into your calendar. Cold leads enter a nurture sequence.",
      },
      {
        when: "04",
        title: "Calendar booking (automatic)",
        desc: "The AI checks your real availability and offers 2–3 time slots for a call, showing, or virtual tour. Once confirmed, both sides get a calendar invite. You wake up to a full schedule.",
      },
      {
        when: "05",
        title: "Handoff brief (before your coffee)",
        desc: "By morning you have a clean profile: name, budget, timeline, pre-approval status, preferred areas, questions asked, full transcript. You walk into the call fully prepared — not cold.",
      },
    ],
    close:
      "The whole process takes 3 minutes of the lead's time. They get a fast, helpful, personalized experience. You get a qualified lead with an appointment already booked. Neither of you had to be awake at midnight.",
  },
  s6: {
    label: "The open-house follow-up problem",
    intro:
      "Here's another place agents hemorrhage leads without realizing it — the open-house sign-in sheet. You get 200 names. You follow up with 12, maybe 15 on a good week.",
    bigValue: "188 / 200",
    bigLabel: (
      <>
        open-house visitors go without
        <br />
        any follow-up from the average agent
      </>
    ),
    sample:
      "“Hi David, thanks for visiting 742 Oak Street today! I noticed you spent extra time looking at the kitchen and backyard. Want to schedule a private second showing this week? I have openings Thursday at 4 PM or Saturday at 10 AM.”",
    close:
      "That's not a template. That's an AI agent trained on your properties, style, and calendar — doing in seconds what would take you hours of manual follow-up that never happens.",
  },
  s7: {
    label: "Same market, same leads — different systems",
    intro:
      "Two agents in the same market, with the same lead volume, the same listings. The only difference is whether an AI layer handles the first 3 minutes.",
    headers: ["Metric", "Agent A (manual)", "Agent B (AI-assisted)"],
    rows: [
      {
        label: "Avg. response time",
        left: "6+ hours",
        right: "90 seconds",
      },
      {
        label: "After-hours coverage",
        left: "None",
        right: "24/7/365",
      },
      {
        label: "Leads qualified / month",
        left: "8 of 20",
        right: "18 of 20",
      },
      {
        label: "Appointments booked",
        left: "3–4",
        right: "10–12",
      },
      {
        label: "Monthly closings",
        left: "0.5–1",
        right: "2–3",
      },
      {
        label: "Hours on follow-up",
        left: "15–20 hrs/wk",
        right: "3–5 hrs/wk",
      },
      {
        label: "Cost per closing",
        left: "$8,000–$10,000",
        right: "$1,500–$2,500",
      },
    ],
    close:
      "Agent B isn't a better agent. They're not working more hours. They're not spending more on leads. They have a system that ensures every single lead gets a fast, intelligent response — regardless of when it comes in or what the agent is doing.",
  },
  s8: {
    label: "The honest objection",
    headline: "“But won't clients know it's AI?”",
    body: (
      <>
        <p>
          It&apos;s the number-one objection agents raise. And it&apos;s valid
          — real estate is a relationship business. Here&apos;s the reality:{" "}
          <BlogEm>
            clients don&apos;t care whether the first response is from you or
            from an AI. They care that they got a response.
          </BlogEm>
        </p>
        <p>
          It&apos;s 11 PM. The buyer found a listing they love. They reach out
          to three agents. Two are silent until tomorrow. One responds in 90
          seconds with a helpful, personalized message. Which agent do they
          work with — the one who &ldquo;personally&rdquo; replied 15 hours
          later, or the one whose system made them feel valued immediately?
        </p>
        <p>
          The AI isn&apos;t replacing you. It&apos;s making sure the lead is
          still there when you show up.
        </p>
      </>
    ),
    quote:
      "The AI handles the first 3 minutes. You handle the relationship. That's the split that wins.",
  },
  s9: {
    label: "Your next move",
    intro:
      "Here's what top-producing agents do this week after reading something like this.",
    steps: [
      {
        title: "Audit your current response time",
        desc: "Open your CRM. Look at the timestamps of your last 10 inbound leads. Compare to when you first replied. The number will be uncomfortable — good. That's the starting point.",
      },
      {
        title: "Calculate your cost of slow response",
        desc: "Take your monthly lead volume × your current conversion rate. Now × the 5-minute conversion rate. The gap between those two numbers is money sitting on the table.",
      },
      {
        title: "Talk to someone who builds AI agents for real estate",
        desc: "Not a generic chatbot. Not a CRM with an autoresponder bolted on. Someone who builds custom AI agents trained on your listings, your market, your qualifying criteria, and your voice.",
      },
    ],
  },
  cta: {
    label: "That's where we come in",
    titleA: "Let's build your AI lead agent.",
    titleB: "No pitch. Just numbers.",
    body: "We build AI agents specifically for real estate professionals. They respond to every lead in under 2 minutes, qualify based on your criteria, and book appointments directly into your calendar — 24/7, including nights, weekends, and holidays. Tell us what your current setup looks like and we'll come back with an honest breakdown of what's leaking.",
  },
};

const uz: Copy = {
  hero: {
    eyebrow: "Rieltorlar uchun qo'llanma",
    titleA: "Siz tinch uxlayotganda",
    titleB: "mijozlar raqibingizga ketyapti.",
    subtitle:
      "Xaridorlarning 78%i birinchi javob bergan agent bilan ishlaydi. O'rtacha agent 15 soat ichida javob beradi. Zamonaviy AI yordamida yuqori natijali rieltorlar 3× ko'proq bitim yopadi — 3× ko'p ishlamasdan.",
    meta: "8 daqiqa o'qish — raqamlarga asoslangan",
  },
  stats: {
    label1: (
      <>
        birinchi javob bergan
        <br />
        agentdan sotib oladi
      </>
    ),
    label2: (
      <>
        o'rtacha agentning
        <br />
        javob vaqti
      </>
    ),
    label3: (
      <>
        5 daqiqada javob bersangiz
        <br />
        bitim ehtimoli
      </>
    ),
  },
  s1: {
    label: "15 soatlik muammo",
    p1: (
      <>
        Har kuni kechasi takrorlanadigan holat. Potensial xaridor soat 23:00 da
        e&apos;loningizni topadi. U qiziqib qoldi.{" "}
        <BlogStrong>&ldquo;Agent bilan bog&apos;lanish&rdquo;</BlogStrong>ni
        bosadi va kutadi. Ertasiga ertalab 8:00 da siz qahva ustida xabarni
        ko&apos;rasiz — u allaqachon bir necha daqiqada javob bergan uchta
        boshqa agent bilan tomosha belgilab bo&apos;lgan.
      </>
    ),
    p2: (
      <>
        Bu shunchaki xayoliy holat emas.{" "}
        <BlogStrong>
          O&apos;rtacha ko&apos;chmas mulk agenti yangi so&apos;rovga 15 soatdan
          ko&apos;p vaqt ichida javob beradi.
        </BlogStrong>{" "}
        O&apos;n besh soat — birinchi javob beruvchi har 10 bitimning 8 tasini
        yutib ketadigan sohada.
      </>
    ),
    p3: "Matematika shafqatsiz. U sizning e'loningiz qanchalik yaxshi yoki sohada necha yildan beri ishlayotganingiz bilan qiziqmaydi.",
    quote:
      "Agar siz birinchi bo'lmasangiz, suhbat boshlanmasidan oldin potensial mijozlarning 10 tadan 8 tasini yo'qotasiz.",
  },
  s2: {
    label: "Javob vaqti jari",
    intro:
      "Lidni sifatlash asta-sekin pasaymaydi — u jardan pastga uchadi. 1.25 million sotuv lidi ustida olib borilgan tadqiqot shuni ko'rsatadiki, 5 daqiqa va 30 daqiqa o'rtasidagi farq marjinal emas. Bu — sifatiy farq.",
    rows: [
      { label: "< 1 daqiqa", value: "78%", caption: "eng yaxshi oyna" },
      { label: "< 5 daqiqa", value: "45%", caption: "allaqachon yarim" },
      { label: "< 1 soat", value: "22%", caption: "qiziqish soviydi" },
      { label: "< 24 soat", value: "9%", caption: "ehtimol yo'qolgan" },
      { label: "> 24 soat", value: "3%", caption: "amalda tugagan" },
    ],
    close: (
      <>
        Vaziyatni yomonlashtirgan fakt:{" "}
        <BlogStrong>
          ko&apos;chmas mulk bo&apos;yicha so&apos;rovlarning 62%i ish
          vaqtidan tashqarida keladi.
        </BlogStrong>{" "}
        Kechqurun, dam olish kunlari, bayramlar. Telefoningiz yonida
        bo&apos;lmagan paytda mijozlaringiz eng faol qidiradi.
      </>
    ),
  },
  s3: {
    label: "Sekin javobning haqiqiy narxi",
    intro:
      "Foizlardan pulga o'tamiz — chunki soat 23:00 da telefoningiz jiringlab, siz eshitmay qolganingizda haqiqiy yo'qotish shu.",
    tableHeaders: [
      "Ko'rsatkich (oyiga 20 lid, o'rtacha $400K, 2.5–3% komissiya)",
      "15 soatlik javob",
      "5 daqiqalik javob",
    ],
    tableRows: [
      {
        left: "Konversiya darajasi",
        mid: "~3%",
        right: "~15%",
      },
      {
        left: "Oyiga bitimlar",
        mid: "0.6",
        right: "3.0",
      },
      {
        left: "Yiliga bitimlar",
        mid: "~7",
        right: "~36",
      },
      {
        left: "Yillik komissiya daromadi",
        mid: "$86,000",
        right: "$432,000",
      },
    ],
    gapLabel: (
      <>
        har yili stolda qoldirilgan
        <br />
        daromad
      </>
    ),
    afterP1: (
      <>
        Bu raqam xayoliy emas. Bu — o&apos;rtacha agent va 5 daqiqada javob
        beruvchi agentlar konversiyasi orasidagi matematik farq.{" "}
        <BlogEm>Bir xil</BlogEm> lidlar, <BlogEm>bir xil</BlogEm> bozor,{" "}
        <BlogEm>bir xil</BlogEm> e&apos;lonlar asosida.
      </>
    ),
    afterP2:
      "Qimmat qismi — sotib olayotgan lidlaringiz emas. Qimmat qismi — mavjud bo'lsa-da, yetarlicha tez javob berilmayotgan lidlar.",
  },
  s4: {
    label: "Nega yaxshi agent ham yolg'iz uddalay olmaydi",
    intro:
      "Gap dangasalikda emas. Gap — strukturada. Hech qanday intizom sizga har bir lidga 5 daqiqada javob berishga imkon bermaydi. Yechim — ko'proq ishlash emas, balki siz ishlamayotganda ishlaydigan tizimga ega bo'lish.",
    badTag: "Yolg'iz agent haqiqati",
    badItems: [
      "Boshqa mijoz bilan uyni ko'rsatayotganda",
      "Bitim yig'ilishida yoki bank bilan suhbatda",
      "Soat 02:00 da uyquda — lidlarning 62%i shunda keladi",
      "Ta'tilda, kasal yoki oddiy hayot kechirayotganda",
      "Bir vaqtda 15 ta faol suhbatni boshqarayotganda",
    ],
    goodTag: "AI agent nimani bajaradi",
    goodItems: [
      "2 daqiqa ichida javob — 24/7, har bir lid",
      "Shablon emas, haqiqiy suhbat olib boradi",
      "SIZNING mezonlaringiz bo'yicha sifatlaydi va baholaydi",
      "To'g'ridan-to'g'ri kalendaringizga yozib qo'yadi",
      "Sizdek gapiradi — stilingiz va e'lonlaringizga o'rgatilgan",
    ],
    close:
      "“Murojaatingiz uchun rahmat, tez orada javob beramiz” turidagi oddiy avtojavob emas. Siz uyquda, ko'rsatuvda yoki oddiy yashayotganingizda haqiqiy suhbat olib boradigan narsa.",
  },
  s5: {
    label: "AI lid agenti aslida nima qiladi",
    intro:
      "Aniq tushuntiraman. Seshanba kuni soat 23:47 da — siz uyqudagi paytda — lid kelganda nima sodir bo'ladi.",
    steps: [
      {
        when: "01",
        title: "Darhol javob (90 soniya ichida)",
        desc: "Aniq e'longa murojaat qiladigan shaxsiylashtirilgan xabar. Shablon emas. Masalan: 'Salom Sarah! Maple ko'chasidagi 3 xonali hali mavjud — shu hafta narxi tushirildi. Ko'rish uchun qachon qulay?'",
      },
      {
        when: "02",
        title: "Sifatlash (2–3 daqiqa)",
        desc: "AI tabiiy tarzda to'g'ri savollar beradi: byudjet, muddat, ipoteka holati, afzal hududlar, agar sotayotgan bo'lsa — hozirgi uy haqida. Anketa emas — suhbatdek tuyuladi.",
      },
      {
        when: "03",
        title: "Aqlli yo'naltirish (darhol)",
        desc: "Javoblarga qarab AI lidni baholaydi. 'Issiq' lidlar (tasdiqlangan, 30–60 kun ichida) siz uchun zudlik bilan belgilanadi. 'Iliq' lidlar kalendarga yoziladi. 'Sovuq' lidlar parvarish zanjiriga o'tadi.",
      },
      {
        when: "04",
        title: "Kalendarga yozish (avtomatik)",
        desc: "AI sizning haqiqiy bo'sh vaqtingizni tekshirib, lidga 2–3 ta vaqt taklif qiladi. Tasdiqlangandan so'ng ikkala tomonga taklif yuboriladi. Siz to'la jadval bilan uyg'onasiz.",
      },
      {
        when: "05",
        title: "Topshirish xulosasi (ertalabki qahvagacha)",
        desc: "Ertalab sizda toza profil bor: ismi, byudjet, muddat, ipoteka holati, afzal hududlar, berilgan savollar, to'liq suhbat. Qo'ng'iroqqa sovuq emas — to'la tayyor borasiz.",
      },
    ],
    close:
      "Butun jarayon lid vaqtidan 3 daqiqa oladi. U tezkor, foydali, shaxsiy tajribaga ega bo'ladi. Siz esa uchrashuv allaqachon belgilangan sifatli lid olasiz. Hech biringiz yarim tunda uyg'oq bo'lishingiz shart emas.",
  },
  s6: {
    label: "Ochiq ko'rish kuzatuvi muammosi",
    intro:
      "Agentlar sezmasdan lidlarni yo'qotadigan yana bir joy — ochiq ko'rish ro'yxati. 200 ta ismni olasiz. Yaxshi haftada 12–15 tasiga javob yozasiz. Qolganlari esa...",
    bigValue: "188 / 200",
    bigLabel: (
      <>
        ochiq ko'rish mehmoni o'rtacha
        <br />
        agentdan javob olmaydi
      </>
    ),
    sample:
      "“Salom Davron, bugun 742 Oak ko'chasiga tashrifingiz uchun rahmat! Oshxona va hovlida ko'proq turganingizni payqadim. Shu hafta shaxsiy ikkinchi ko'rish belgilaymizmi? Payshanba soat 16:00 yoki shanba 10:00 bo'sh.”",
    close:
      "Bu shablon emas. Bu — sizning e'lonlaringiz, stilingiz va kalendaringizga o'rgatilgan AI agent. Soatlab qo'l bilan qilinadigan (va hech qachon bajarilmaydigan) ishni soniyalarda bajaradi.",
  },
  s7: {
    label: "Bir xil bozor, bir xil lidlar — boshqa tizim",
    intro:
      "Bir xil bozordagi ikki agent, bir xil lid hajmi, bir xil e'lonlar. Yagona farq — birinchi 3 daqiqa AI qatlami bilan yoki yo'qligida.",
    headers: ["Ko'rsatkich", "Agent A (qo'lda)", "Agent B (AI bilan)"],
    rows: [
      {
        label: "O'rt. javob vaqti",
        left: "6+ soat",
        right: "90 soniya",
      },
      {
        label: "Ish vaqtidan keyin qamrov",
        left: "Yo'q",
        right: "24/7/365",
      },
      {
        label: "Oyiga sifatlangan lid",
        left: "20 dan 8",
        right: "20 dan 18",
      },
      {
        label: "Belgilangan uchrashuvlar",
        left: "3–4",
        right: "10–12",
      },
      {
        label: "Oylik bitimlar",
        left: "0.5–1",
        right: "2–3",
      },
      {
        label: "Kuzatuvga sarflangan soat",
        left: "haftasiga 15–20",
        right: "haftasiga 3–5",
      },
      {
        label: "Har bir bitim narxi",
        left: "$8,000–$10,000",
        right: "$1,500–$2,500",
      },
    ],
    close:
      "Agent B yaxshiroq agent emas. U ko'proq ishlamaydi. Lidlarga ko'proq pul sarflamaydi. Shunchaki — har bir lidga tez va aqlli javob kelishini ta'minlaydigan tizimi bor.",
  },
  s8: {
    label: "Halol e'tiroz",
    headline: "“Lekin mijozlar bu AI ekanini bilmaydimi?”",
    body: (
      <>
        <p>
          Agentlar keltiradigan birinchi e&apos;tiroz shu. Va bu o&apos;rinli —
          ko&apos;chmas mulk munosabatlar biznesi. Ammo haqiqat shu:{" "}
          <BlogEm>
            mijozlar birinchi javob sizdanmi yoki AI danmi — ahamiyat bermaydi.
            Ular javob olganlari uchun ahamiyat beradi.
          </BlogEm>
        </p>
        <p>
          Soat 23:00. Xaridor yoqtirgan e&apos;lonni topdi. Uch agentga
          yozadi. Ikkitasi ertangacha jim. Bittasi 90 soniyada foydali,
          shaxsiy xabar bilan javob beradi. U qaysi agent bilan ishlaydi —
          15 soat keyin &ldquo;shaxsan&rdquo; javob berganmi yoki tizimi uni
          darhol qadrli his qilishga majbur qilganmi?
        </p>
        <p>
          AI sizni almashtirmaydi. U siz kelguncha lid joyida turishini
          ta&apos;minlaydi.
        </p>
      </>
    ),
    quote:
      "AI birinchi 3 daqiqani boshqaradi. Siz munosabatni boshqarasiz. Yutadigan taqsimot shu.",
  },
  s9: {
    label: "Keyingi qadaminiz",
    intro:
      "Shunday maqolani o'qigan eng yaxshi agentlar shu hafta nima qiladi.",
    steps: [
      {
        title: "Hozirgi javob vaqtini tekshiring",
        desc: "CRMni oching. Oxirgi 10 ta kiruvchi lidning vaqtini ko'ring. Birinchi javob vaqti bilan solishtiring. Raqam noqulay bo'ladi — bu yaxshi. Shu — boshlang'ich nuqta.",
      },
      {
        title: "Sekin javob narxini hisoblang",
        desc: "Oylik lid soni × hozirgi konversiyangiz. Endi × 5 daqiqalik konversiya. Ikki raqam orasidagi farq — stolda qolgan pulingiz.",
      },
      {
        title: "Ko'chmas mulk uchun AI agent quruvchi bilan gaplashing",
        desc: "Oddiy chatbot emas. Avtojavobli CRM emas. Sizning e'lonlaringiz, bozoringiz, mezonlaringiz va ovozingizga o'rgatilgan shaxsiy AI agent quruvchisi.",
      },
    ],
  },
  cta: {
    label: "Aynan shu bilan shug'ullanamiz",
    titleA: "AI lid agentingizni quraylik.",
    titleB: "Sotuv taqdimoti yo'q. Faqat raqamlar.",
    body: "Biz ko'chmas mulk mutaxassislari uchun maxsus AI agent quramiz. Ular har bir lidga 2 daqiqada javob beradi, sizning mezonlaringiz bo'yicha sifatlaydi va kalendaringizga to'g'ridan-to'g'ri uchrashuv yozib qo'yadi — 24/7, kechalari, dam olish kunlari va bayramlarda ham. Hozirgi sozlamangiz haqida ayting — qayerda oqayotganini halol tahlil qilib qaytamiz.",
  },
};

const ru: Copy = {
  hero: {
    eyebrow: "Гид для риелторов",
    titleA: "Вы теряете сделки",
    titleB: "пока спите.",
    subtitle:
      "78% покупателей работают с первым ответившим агентом. Средний агент отвечает 15 часов. Вот как топовые риелторы закрывают в 3× больше сделок — не работая в 3× больше.",
    meta: "8 минут чтения — на цифрах",
  },
  stats: {
    label1: (
      <>
        покупают у того,
        <br />
        кто ответил первым
      </>
    ),
    label2: (
      <>
        средняя скорость
        <br />
        ответа агента
      </>
    ),
    label3: (
      <>
        выше шанс квалификации
        <br />
        при ответе за 5 мин
      </>
    ),
  },
  s1: {
    label: "Проблема 15 часов",
    p1: (
      <>
        Сценарий, который повторяется каждую ночь. Покупатель находит ваше
        объявление в 23:00. Он заинтересован. Жмёт{" "}
        <BlogStrong>«Связаться с агентом»</BlogStrong> и ждёт. Утром в 8:00,
        когда вы видите уведомление за кофе, он уже назначил три показа с
        агентами, ответившими за минуты.
      </>
    ),
    p2: (
      <>
        Это не гипотеза.{" "}
        <BlogStrong>
          Средний риелтор отвечает на новый запрос более 15 часов.
        </BlogStrong>{" "}
        Пятнадцать часов — в отрасли, где первый ответивший забирает почти 8 из
        10 сделок.
      </>
    ),
    p3: "Математика беспощадна. Ей всё равно, насколько хороши ваши объявления и сколько лет вы в профессии.",
    quote:
      "Если вы не первый — вы теряете почти 8 из 10 потенциальных клиентов ещё до начала разговора.",
  },
  s2: {
    label: "Обрыв времени отклика",
    intro:
      "Квалификация лида не снижается плавно — она падает с обрыва. Исследование 1.25 млн лидов показывает: разница между 5 и 30 минутами не маргинальная. Она категориальная.",
    rows: [
      { label: "< 1 мин", value: "78%", caption: "идеальное окно" },
      { label: "< 5 мин", value: "45%", caption: "уже вдвое меньше" },
      { label: "< 1 час", value: "22%", caption: "интерес остывает" },
      { label: "< 24 ч", value: "9%", caption: "скорее всего ушёл" },
      { label: "> 24 ч", value: "3%", caption: "фактически мёртв" },
    ],
    close: (
      <>
        И главное:{" "}
        <BlogStrong>
          62% запросов по недвижимости приходят вне рабочего времени.
        </BlogStrong>{" "}
        Вечера. Выходные. Праздники. Именно тогда, когда телефон лежит
        экраном вниз, ваши будущие клиенты ищут активнее всего.
      </>
    ),
  },
  s3: {
    label: "Сколько вам стоит медленный ответ",
    intro:
      "Хватит процентов — поговорим о деньгах. Потому что это и есть то, что стоит на кону каждый раз, когда телефон жужжит в 23:00, а вы не слышите.",
    tableHeaders: [
      "Показатель (20 лидов/мес, средняя $400K, комиссия 2.5–3%)",
      "Ответ за 15 часов",
      "Ответ за 5 минут",
    ],
    tableRows: [
      {
        left: "Конверсия",
        mid: "~3%",
        right: "~15%",
      },
      {
        left: "Закрытий в месяц",
        mid: "0.6",
        right: "3.0",
      },
      {
        left: "Закрытий в год",
        mid: "~7",
        right: "~36",
      },
      {
        left: "Годовой доход с комиссий",
        mid: "$86,000",
        right: "$432,000",
      },
    ],
    gapLabel: (
      <>
        денег оставлено на столе
        <br />
        каждый год
      </>
    ),
    afterP1: (
      <>
        Это число не фантазия. Это математическая разница между конверсией
        среднего агента и тех, кто отвечает за 5 минут — на{" "}
        <BlogEm>тех же</BlogEm> лидах, на <BlogEm>том же</BlogEm> рынке, с{" "}
        <BlogEm>теми же</BlogEm> объявлениями.
      </>
    ),
    afterP2:
      "Дорогое — это не лиды, которые вы покупаете. Дорогое — те, что уже у вас есть, но на которые вы отвечаете недостаточно быстро.",
  },
  s4: {
    label: "Почему лучший агент не справится в одиночку",
    intro:
      "Дело не в лени. Дело в структуре. Физически невозможно отвечать каждому лиду за 5 минут — никакая дисциплина не поможет. Решение — не работать больше, а иметь систему, которая работает, когда вы нет.",
    badTag: "Реальность одного агента",
    badItems: [
      "Показываете объект другому клиенту",
      "На сделке или разговоре с банком",
      "Спите в 02:00 — когда приходит 62% лидов",
      "В отпуске, болеете или просто живёте",
      "Ведёте 15 активных переписок одновременно",
    ],
    goodTag: "Что делает AI-агент",
    goodItems: [
      "Отвечает за 2 минуты — 24/7, каждому лиду",
      "Ведёт реальный диалог, а не шлёт шаблоны",
      "Квалифицирует по ВАШИМ критериям и оценке",
      "Записывает прямо в ваш календарь",
      "Звучит как вы — обучен на вашем стиле и объектах",
    ],
    close:
      "Не банальный автоответ «спасибо, скоро ответим». А то, что реально ведёт диалог, пока вы спите, на показе или просто живёте свою жизнь.",
  },
  s5: {
    label: "Что AI-агент на самом деле делает",
    intro:
      "Конкретно. Вот что происходит, когда лид приходит во вторник в 23:47 — пока вы спите.",
    steps: [
      {
        when: "01",
        title: "Мгновенный ответ (менее 90 секунд)",
        desc: "Персональное сообщение, ссылающееся на конкретный объект. Не шаблон. Скорее: 'Привет, Сара! Дом на Maple Street ещё доступен — цена снижена на этой неделе. Удобно посмотреть на днях?'",
      },
      {
        when: "02",
        title: "Квалификация (2–3 минуты)",
        desc: "AI задаёт правильные вопросы естественно: бюджет, сроки, одобрение ипотеки, районы, продают ли они параллельно. Ощущается как разговор, а не анкета.",
      },
      {
        when: "03",
        title: "Умная маршрутизация (мгновенно)",
        desc: "По ответам AI оценивает лид. Горячие (одобрены, срок 30–60 дней) помечаются для срочного контакта. Тёплые записываются в календарь. Холодные уходят в прогрев.",
      },
      {
        when: "04",
        title: "Запись в календарь (автоматически)",
        desc: "AI смотрит вашу реальную доступность и предлагает 2–3 слота на звонок, показ или виртуальный тур. После подтверждения оба получают приглашение. Вы просыпаетесь с расписанием.",
      },
      {
        when: "05",
        title: "Передача брифа (до первого кофе)",
        desc: "К утру у вас готовый профиль: имя, бюджет, сроки, статус ипотеки, районы, заданные вопросы, полная переписка. Вы идёте на звонок полностью подготовленным.",
      },
    ],
    close:
      "Весь процесс занимает 3 минуты времени лида. Он получает быстрый, полезный, персональный опыт. Вы — квалифицированного лида с уже назначенной встречей. И никому не пришлось бодрствовать в полночь.",
  },
  s6: {
    label: "Проблема follow-up после показов",
    intro:
      "Ещё одно место, где агенты теряют лидов, не замечая — лист регистрации с открытого показа. 200 имён. На хорошей неделе вы пишете 12, может 15. Остальные...",
    bigValue: "188 / 200",
    bigLabel: (
      <>
        посетителей показа уходят без
        <br />
        ответа от среднего агента
      </>
    ),
    sample:
      "«Здравствуйте, Давид! Спасибо, что посетили 742 Oak Street сегодня. Заметил, что вы подольше задержались на кухне и во дворе. Хотите организовать частный повторный показ на этой неделе? Есть окно в четверг в 16:00 или в субботу в 10:00.»",
    close:
      "Это не шаблон. Это AI-агент, обученный на ваших объектах, стиле и календаре — за секунды делает то, на что вы тратили бы часы ручной работы, которая никогда не делается.",
  },
  s7: {
    label: "Тот же рынок, те же лиды — разные системы",
    intro:
      "Два агента на одном рынке, одинаковый поток лидов, одинаковые объявления. Единственная разница — обрабатывает ли первые 3 минуты AI-слой.",
    headers: ["Показатель", "Агент A (вручную)", "Агент B (с AI)"],
    rows: [
      {
        label: "Средн. время ответа",
        left: "6+ часов",
        right: "90 секунд",
      },
      {
        label: "Покрытие вне часов",
        left: "Нет",
        right: "24/7/365",
      },
      {
        label: "Квалиф. лидов / мес",
        left: "8 из 20",
        right: "18 из 20",
      },
      {
        label: "Записано встреч",
        left: "3–4",
        right: "10–12",
      },
      {
        label: "Закрытий в месяц",
        left: "0.5–1",
        right: "2–3",
      },
      {
        label: "Часов на follow-up",
        left: "15–20 ч/нед",
        right: "3–5 ч/нед",
      },
      {
        label: "Стоимость закрытия",
        left: "$8,000–$10,000",
        right: "$1,500–$2,500",
      },
    ],
    close:
      "Агент B — не лучший агент. Он не работает больше. Не тратит больше на лиды. У него есть система, которая гарантирует, что каждый лид получает быстрый и умный ответ — независимо от того, когда он пришёл и чем занят агент.",
  },
  s8: {
    label: "Честное возражение",
    headline: "«А клиенты разве не поймут, что это AI?»",
    body: (
      <>
        <p>
          Это главное возражение агентов. И оно справедливое — недвижимость
          про отношения. Но реальность такая:{" "}
          <BlogEm>
            клиентам не важно, кто ответил первым — вы или AI. Важно, что им
            ответили.
          </BlogEm>
        </p>
        <p>
          23:00. Покупатель нашёл объявление. Пишет трём агентам. Двое молчат
          до утра. Один отвечает за 90 секунд персональным сообщением. С кем
          он будет работать — с тем, кто «лично» ответил через 15 часов, или
          с тем, чья система заставила почувствовать его ценным сразу?
        </p>
        <p>
          AI вас не заменяет. Он гарантирует, что лид ещё будет там, когда вы
          появитесь.
        </p>
      </>
    ),
    quote:
      "AI ведёт первые 3 минуты. Вы ведёте отношения. Такое разделение побеждает.",
  },
  s9: {
    label: "Ваш следующий шаг",
    intro:
      "Вот что делают топовые агенты на этой неделе после такой статьи.",
    steps: [
      {
        title: "Проверьте ваше текущее время ответа",
        desc: "Откройте CRM. Посмотрите timestamp последних 10 входящих лидов. Сравните с тем, когда вы впервые ответили. Цифра будет неудобной — и это хорошо. Это точка отсчёта.",
      },
      {
        title: "Посчитайте цену медленного ответа",
        desc: "Возьмите месячный поток лидов × вашу текущую конверсию. Теперь × конверсию при ответе за 5 минут. Разница между этими числами — деньги на столе.",
      },
      {
        title: "Поговорите с тем, кто строит AI-агентов для недвижимости",
        desc: "Не обычный чат-бот. Не CRM с автоответчиком. Тот, кто строит кастомного AI-агента, обученного на ваших объектах, рынке, критериях и голосе.",
      },
    ],
  },
  cta: {
    label: "Это то, что мы делаем",
    titleA: "Построим вашего AI lead-агента.",
    titleB: "Без презентаций. Только цифры.",
    body: "Мы строим AI-агентов специально для риелторов. Они отвечают каждому лиду за 2 минуты, квалифицируют по вашим критериям и записывают встречи прямо в ваш календарь — 24/7, включая ночи, выходные и праздники. Расскажите о вашем текущем сетапе — вернёмся с честным разбором, где теряется больше всего.",
  },
};

const copyMap: Record<Language, Copy> = { en, uz, ru };

export default async function RealtorAiLeadResponse({
  lang,
}: {
  lang: Language;
}) {
  const c = copyMap[lang] ?? en;
  const dict = await getDictionary(lang);

  return (
    <article className="pb-20">
      <BlogHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.titleA}
            <br />
            <span className="text-[#27DFE9] not-italic">{c.hero.titleB}</span>
          </>
        }
        subtitle={c.hero.subtitle}
        meta={c.hero.meta}
      />

      {/* Stat bar */}
      <section className="pt-10 md:pt-12">
        <BigNumbers
          items={[
            { value: "78%", accent: true, label: c.stats.label1 },
            { value: "15h", label: c.stats.label2 },
            { value: "21×", accent: true, label: c.stats.label3 },
          ]}
        />
      </section>

      {/* Section 1: The 15-hour problem */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s1.label}</SectionLabel>
        <BlogProse>{c.s1.p1}</BlogProse>
        <BlogProse>{c.s1.p2}</BlogProse>
        <BlogProse>{c.s1.p3}</BlogProse>
        <Callout>{c.s1.quote}</Callout>
      </section>

      {/* Section 2: Response-time cliff */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s2.label}</SectionLabel>
        <BlogProse>{c.s2.intro}</BlogProse>
        <BarChart
          rows={[
            {
              label: c.s2.rows[0].label,
              value: c.s2.rows[0].value,
              width: 100,
              color: "green",
              caption: c.s2.rows[0].caption,
            },
            {
              label: c.s2.rows[1].label,
              value: c.s2.rows[1].value,
              width: 58,
              color: "green",
              caption: c.s2.rows[1].caption,
            },
            {
              label: c.s2.rows[2].label,
              value: c.s2.rows[2].value,
              width: 28,
              color: "amber",
              caption: c.s2.rows[2].caption,
            },
            {
              label: c.s2.rows[3].label,
              value: c.s2.rows[3].value,
              width: 12,
              color: "red",
              caption: c.s2.rows[3].caption,
            },
            {
              label: c.s2.rows[4].label,
              value: c.s2.rows[4].value,
              width: 5,
              color: "red",
              caption: c.s2.rows[4].caption,
            },
          ]}
        />
        <BlogProse>{c.s2.close}</BlogProse>
      </section>

      {/* Section 3: Real cost */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s3.label}</SectionLabel>
        <BlogProse>{c.s3.intro}</BlogProse>
        <ComparisonTable
          headers={c.s3.tableHeaders}
          rows={c.s3.tableRows.map((r) => ({
            label: r.left,
            left: { text: r.mid, tone: "bad" },
            right: { text: r.right, tone: "good" },
          }))}
        />
        <BigNumbers
          items={[
            {
              value: "$346K",
              label: c.s3.gapLabel,
            },
          ]}
        />
        <BlogProse>{c.s3.afterP1}</BlogProse>
        <BlogProse>{c.s3.afterP2}</BlogProse>
      </section>

      {/* Section 4: Why alone doesn't work + what AI handles */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s4.label}</SectionLabel>
        <BlogProse>{c.s4.intro}</BlogProse>
        <PositionGrid
          cells={[
            { tag: c.s4.badTag, tone: "bad", items: c.s4.badItems },
            { tag: c.s4.goodTag, tone: "good", items: c.s4.goodItems },
          ]}
        />
        <p className="mt-6 text-[15px] md:text-base text-white/55 leading-[1.8]">
          {c.s4.close}
        </p>
      </section>

      {/* Section 5: What an AI lead agent actually does */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s5.label}</SectionLabel>
        <BlogProse>{c.s5.intro}</BlogProse>
        <Timeline
          items={c.s5.steps.map((s, i) => ({
            when: s.when,
            title: s.title,
            desc: s.desc,
            active: i === 0,
            tags: [],
          }))}
        />
        <p className="mt-6 text-[15px] md:text-base text-white/55 leading-[1.8]">
          {c.s5.close}
        </p>
      </section>

      {/* Section 6: Open-house problem */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s6.label}</SectionLabel>
        <BlogProse>{c.s6.intro}</BlogProse>
        <BigNumbers
          items={[{ value: c.s6.bigValue, label: c.s6.bigLabel }]}
        />
        <Callout>{c.s6.sample}</Callout>
        <BlogProse>{c.s6.close}</BlogProse>
      </section>

      {/* Section 7: Head-to-head */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s7.label}</SectionLabel>
        <BlogProse>{c.s7.intro}</BlogProse>
        <ComparisonTable
          headers={c.s7.headers}
          rows={c.s7.rows.map((r) => ({
            label: r.label,
            left: { text: r.left, tone: "bad" },
            right: { text: r.right, tone: "good" },
          }))}
        />
        <p className="mt-6 text-[15px] md:text-base text-white/55 leading-[1.8]">
          {c.s7.close}
        </p>
      </section>

      {/* Section 8: Mirror — objection */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s8.label}</SectionLabel>
        <Mirror headline={c.s8.headline}>{c.s8.body}</Mirror>
        <Callout>{c.s8.quote}</Callout>
      </section>

      {/* Section 9: Next move */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>{c.s9.label}</SectionLabel>
        <BlogProse>{c.s9.intro}</BlogProse>
        <Timeline
          items={c.s9.steps.map((s, i) => ({
            when: `0${i + 1}`,
            title: s.title,
            desc: s.desc,
            active: i === c.s9.steps.length - 1,
            tags: [],
          }))}
        />
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <SectionLabel>{c.cta.label}</SectionLabel>
        <h2 className="text-3xl md:text-[44px] leading-tight mb-4 italic text-[#C8ECED] font-black uppercase tracking-tight">
          {c.cta.titleA}
          <br />
          <span className="text-[#27DFE9] not-italic">{c.cta.titleB}</span>
        </h2>
        <p className="text-sm md:text-[15px] text-white/55 max-w-xl leading-[1.75] mb-10">
          {c.cta.body}
        </p>
        <BlogAuditForm dict={dict.blog.audit} />
      </section>
    </article>
  );
}
