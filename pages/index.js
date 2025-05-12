import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها. اكتشف معالم دبي الشهيرة واستمتع بتجربة قيادة فاخرة وآمنة. احجز الآن واحصل على أفضل العروض!" />
        <meta name="generator" content="Next.js" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:title" content="تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company" />
        <meta property="og:description" content="استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها. اكتشف معالم دبي الشهيرة واستمتع بتجربة قيادة فاخرة وآمنة. احجز الآن واحصل على أفضل العروض!" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:3000/" />
        <meta property="twitter:title" content="تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company" />
        <meta property="twitter:description" content="استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها. اكتشف معالم دبي الشهيرة واستمتع بتجربة قيادة فاخرة وآمنة. احجز الآن واحصل على أفضل العروض!" />
        <link rel="icon" type="image/svg+xml" href="https://cdn.sanity.io/images/gsalsa2t/production/b3522d6ce574c4395ce7cdc376080ccb88e4d996-128x128.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="http://localhost:3000/" />
      </Head>

      <main>
        <Header title="تأجير سيارات في دبي" />

        <section className="w-full px-4 py-16 text-center bg-cover bg-center relative" style={{ backgroundImage: "url('https://cdn.sanity.io/images/gsalsa2t/production/ad2949807a385f86231fe318b780cba2179c3f76-1600x900.jpg')" }}>
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">تأجير السيارات في دبي: الدليل النهائي</h1>
            <p className="text-white leading-relaxed">
              دبي، جوهرة متلألئة في الإمارات العربية المتحدة، مدينة مرادفة للفخامة والابتكار والعظمة. مع ناطحات السحاب المذهلة ومراكز التسوق الفاخرة والحياة الليلية النابضة بالحياة، أصبحت دبي وجهة رئيسية للسياح والمسافرين بغرض الأعمال على حد سواء. واحدة من أفضل الطرق لاستكشاف هذه المدينة الديناميكية هي استئجار سيارة.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-3xl font-extrabold text-center mb-10">لماذا تستأجر سيارة في دبي؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">الراحة والمرونة</h3>
              <p>يمنحك استئجار سيارة المرونة لاستكشاف المدينة وفقًا لسرعتك الخاصة، دون التقيد بجداول الحافلات أو المترو. يمكنك بسهولة زيارة المعالم مثل برج خليفة ودبي مول والكثبان الرملية.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">توفير التكاليف</h3>
              <p>استئجار السيارة يمكن أن يكون خيارًا اقتصاديًا، خاصة للعائلات أو المجموعات، بفضل الأسعار التنافسية والحزم المتنوعة.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">الراحة</h3>
              <p>الراحة الكاملة عند التنقل في مدينة حديثة مثل دبي لا تقدر بثمن، خصوصاً عند توفر سيارات مجهزة بكل المزايا.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10">عملية تأجير السيارات في دبي</h2>
          <div className="max-w-3xl mx-auto text-right">
            <h3 className="text-2xl font-bold mb-4">المتطلبات اللازمة لاستئجار سيارة</h3>
            <ul className="list-disc space-y-2 pr-6">
              <li><strong>العمر:</strong> يجب أن يكون السائق بعمر 21 سنة على الأقل (بعض السيارات الفاخرة تتطلب عمرًا أعلى).</li>
              <li><strong>رخصة القيادة:</strong> رخصة سارية من بلدك أو رخصة دولية.</li>
              <li><strong>بطاقة الائتمان:</strong> مطلوبة للوديعة.</li>
              <li><strong>جواز السفر والتأشيرة:</strong> إثبات الهوية للزوار.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">اختيار السيارة المناسبة</h3>
            <ul className="list-disc space-y-2 pr-6">
              <li><strong>الغرض:</strong> المدينة، الرحلات، أو الفخامة.</li>
              <li><strong>الميزانية:</strong> اقتصادية، متوسطة أو فاخرة.</li>
              <li><strong>المزايا:</strong> مثل GPS، كراسي أطفال، تأمين إضافي.</li>
              <li><strong>سياسة الوقود:</strong> ممتلئ عند التسليم والإرجاع.</li>
            </ul>
          </div>
        </section>

        {/* Part 5 will include procedures, tips, companies, and exploration */}
      </main>

      <Footer />
    </div>
  );
}
