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
        <link rel="icon" href="https://cdn.sanity.io/images/gsalsa2t/production/b3522d6ce574c4395ce7cdc376080ccb88e4d996-128x128.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="http://localhost:3000/" />
      </Head>
      <main>
        <Header title="تأجير سيارات في دبي" />

        <section
          className="w-full px-4 py-16 text-center bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://cdn.sanity.io/images/gsalsa2t/production/ad2949807a385f86231fe318b780cba2179c3f76-1600x900.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
              تأجير السيارات في دبي: الدليل النهائي
            </h1>
            <p className="text-white leading-relaxed">
              دبي، جوهرة متلألئة في الإمارات العربية المتحدة، مدينة مرادفة للفخامة والابتكار والعظمة. مع ناطحات السحاب المذهلة ومراكز التسوق الفاخرة والحياة الليلية النابضة بالحياة، أصبحت دبي وجهة رئيسية للسياح والمسافرين بغرض الأعمال على حد سواء. واحدة من أفضل الطرق لاستكشاف هذه المدينة الديناميكية هي استئجار سيارة.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            لماذا تستأجر سيارة في دبي؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">الراحة والمرونة</h3>
              <p>
                يمنحك استئجار سيارة المرونة لاستكشاف المدينة وفقًا لسرعتك
                الخاصة، دون التقيد بجداول الحافلات أو المترو. يمكنك بسهولة
                زيارة المعالم مثل برج خليفة ودبي مول والكثبان الرملية.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">توفير التكاليف</h3>
              <p>
                استئجار السيارة يمكن أن يكون خيارًا اقتصاديًا، خاصة للعائلات أو
                المجموعات، بفضل الأسعار التنافسية والحزم المتنوعة.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">الراحة</h3>
              <p>
                الراحة الكاملة عند التنقل في مدينة حديثة مثل دبي لا تقدر بثمن،
                خصوصاً عند توفر سيارات مجهزة بكل المزايا.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            عملية تأجير السيارات في دبي
          </h2>
          <div className="max-w-3xl mx-auto text-right">
            <h3 className="text-2xl font-bold mb-4">
              المتطلبات اللازمة لاستئجار سيارة
            </h3>
            <ul className="list-disc space-y-2 pr-6">
              <li>
                <strong>العمر:</strong> يجب أن يكون السائق بعمر 21 سنة على الأقل
                (بعض السيارات الفاخرة تتطلب عمرًا أعلى).
              </li>
              <li>
                <strong>رخصة القيادة:</strong> رخصة سارية من بلدك أو رخصة دولية.
              </li>
              <li>
                <strong>بطاقة الائتمان:</strong> مطلوبة للوديعة.
              </li>
              <li>
                <strong>جواز السفر والتأشيرة:</strong> إثبات الهوية للزوار.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              اختيار السيارة المناسبة
            </h3>
            <ul className="list-disc space-y-2 pr-6">
              <li><strong>الغرض:</strong> المدينة، الرحلات، أو الفخامة.</li>
              <li><strong>الميزانية:</strong> اقتصادية، متوسطة أو فاخرة.</li>
              <li><strong>المزايا:</strong> مثل GPS، كراسي أطفال، تأمين إضافي.</li>
              <li><strong>سياسة الوقود:</strong> ممتلئ عند التسليم والإرجاع.</li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4">إجراءات الاستئجار</h3>
            <ol className="list-decimal space-y-2 pr-6">
              <li>احجز مسبقًا لتأمين السيارة خلال المواسم السياحية.</li>
              <li>جهز جميع الوثائق المطلوبة: رخصة، جواز، تأشيرة، بطاقة.</li>
              <li>افحص السيارة وسجل أي ضرر قبل الانطلاق.</li>
              <li>ادفع الرسوم والوديعة بالبطاقة الائتمانية.</li>
              <li>أعد السيارة في الوقت المحدد وتأكد من سلامتها لاسترداد الوديعة.</li>
            </ol>

            <h3 className="text-2xl font-bold mt-8 mb-4">نصائح هامة</h3>
            <ul className="list-disc space-y-2 pr-6">
              <li>اتبع السرعة المحددة، فالكاميرات منتشرة.</li>
              <li>لا تستخدم الهاتف أثناء القيادة إلا مع نظام خالي اليدين.</li>
              <li>تأكد من تغطية التأمين بشكل مناسب، خصوصاً لتأمين التصادم أو السرقة.</li>
              <li>خطط لمسارك باستخدام خرائط محدثة وتجنب ساعات الذروة.</li>
              <li>حافظ على مستوى الوقود وأعد السيارة مملوءة لتجنب الرسوم.</li>
              <li>احفظ رقم الطوارئ 999 وخدمة المساعدة الخاصة بشركتك.</li>
            </ul>
          </div>
        </section>
        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            شركات تأجير السيارات الشهيرة في دبي
          </h2>
          <div className="max-w-4xl mx-auto text-right">
            <h3 className="text-2xl font-bold mb-4">العلامات التجارية الدولية</h3>
            <ul className="list-disc pr-6 mb-6">
              <li>هرتز (Hertz)</li>
              <li>أفيس (Avis)</li>
              <li>بدجت (Budget)</li>
              <li>إنتربرايز (Enterprise)</li>
              <li>سيكست (Sixt)</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">شركات محلية</h3>
            <ul className="list-disc pr-6 mb-6">
              <li>كار رنتال DXB</li>
              <li>شيفت لتأجير السيارات</li>
              <li>فاست لتأجير السيارات</li>
              <li>ثريفي لتأجير السيارات</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">شركات السيارات الفاخرة</h3>
            <ul className="list-disc pr-6 mb-6">
              <li>في آي بي لتأجير السيارات</li>
              <li>برستيج لتأجير السيارات</li>
              <li>سوبركار لتأجير السيارات</li>
            </ul>
          </div>
        </section>

        <section className="py-16 px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            استكشاف دبي بسيارتك المستأجرة
          </h2>
          <div className="max-w-3xl mx-auto text-right">
            <ul className="list-disc space-y-4 pr-6">
              <li><strong>برج خليفة:</strong> أطول ناطحة سحاب في العالم بإطلالة بانورامية لا تُنسى.</li>
              <li><strong>نخلة جميرا:</strong> جزيرة صناعية مذهلة تضم فنادق فاخرة وشواطئ جميلة.</li>
              <li><strong>دبي مول:</strong> أكبر مركز تسوق في العالم مع نافورة راقصة.</li>
              <li><strong>المدينة القديمة:</strong> الأسواق التقليدية والعبّارات الخشبية عبر الخور.</li>
              <li><strong>الصحراء:</strong> مغامرات السفاري والكثبان الرملية وركوب الجمال.</li>
            </ul>
          </div>
        </section>
                  

          <section className="py-16 px-4 bg-white">
  <h2 className="text-3xl font-extrabold text-center mb-10">أفضل عروض تأجير السيارات في دبي</h2>
  <div className="grid md:grid-cols-3 gap-8 text-right">

    {/* Mercedes G63 */}
    <div className="bg-white rounded-lg shadow p-4 border">
      <img src="/G63-2024-Rental-Dubai.png" alt="تأجير مرسيدس G63 في دبي" title="Mercedes G63 Rental Dubai" className="w-full h-[220px] object-cover rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">مرسيدس G63 للإيجار في دبي</h3>
      <p className="text-sm text-gray-600 mb-2">السعر اليومي: <del>1800</del> <strong>1500 درهم</strong></p>
      <a href="https://wa.me/971522887844" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">احجز عبر واتساب</a>
    </div>

    {/* Toyota Land Cruiser */}
    <div className="bg-white rounded-lg shadow p-4 border">
      <img src="/Land-Cruiser-Rental-Dubai.png" alt="تأجير تويوتا لاند كروزر في دبي" title="Toyota Land Cruiser Rental Dubai" className="w-full h-[220px] object-cover rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">تويوتا لاند كروزر للإيجار في دبي</h3>
      <p className="text-sm text-gray-600 mb-2">السعر اليومي: <del>900</del> <strong>450 درهم</strong></p>
      <a href="https://wa.me/971522887844" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">احجز عبر واتساب</a>
    </div>

    {/* Nissan Patrol */}
    <div className="bg-white rounded-lg shadow p-4 border">
      <img src="/Nissan-Patrol-2025-Rental-Dubai.png" alt="تأجير نيسان باترول بلاتينيوم في دبي" title="Nissan Patrol Platinum City Rental Dubai" className="w-full h-[220px] object-cover rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">نيسان باترول بلاتينيوم سيتي للإيجار في دبي</h3>
      <p className="text-sm text-gray-600 mb-2">السعر اليومي: <del>900</del> <strong>700 درهم</strong></p>
      <a href="https://wa.me/971522887844" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">احجز عبر واتساب</a>
    </div>

    {/* Ford Mustang GT V8 */}
    <div className="bg-white rounded-lg shadow p-4 border">
      <img src="/Ford-Mustang-GT-Rental-Dubai-UAE.png" alt="تأجير فورد موستانج GT V8 في دبي" title="Ford Mustang GT V8 Rental Dubai" className="w-full h-[220px] object-cover rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">فورد موستانج GT V8 للإيجار في دبي</h3>
      <p className="text-sm text-gray-600 mb-2">السعر اليومي: <del>750</del> <strong>400 درهم</strong></p>
      <a href="https://wa.me/971522887844" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">احجز عبر واتساب</a>
    </div>

    {/* Chevrolet Corvette C8 Spyder */}
    <div className="bg-white rounded-lg shadow p-4 border">
      <img src="/Chevrolet-Corvette-C8-Spyder-Rental-Dubai.png" alt="تأجير شيفروليه كورفيت C8 سبايدر في دبي" title="Chevrolet Corvette C8 Spyder Rental Dubai" className="w-full h-[220px] object-cover rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">شيفروليه كورفيت C8 سبايدر للإيجار في دبي</h3>
      <p className="text-sm text-gray-600 mb-2">السعر اليومي: <del>1500</del> <strong>1000 درهم</strong></p>
      <a href="https://wa.me/971522887844" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">احجز عبر واتساب</a>
    </div>

    {/* Ford Mustang GT Convertible */}
    <div className="bg-white rounded-lg shadow p-4 border">
      <img src="/Ford-Mustang-Convertible-2024-Rental-Dubai.png" alt="تأجير فورد موستانج كشف 2024 في دبي" title="Ford Mustang GT Convertible Rental Dubai" className="w-full h-[220px] object-cover rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">فورد موستانج GT كشف 2024 للإيجار في دبي</h3>
      <p className="text-sm text-gray-600 mb-2">السعر اليومي: <del>750</del> <strong>600 درهم</strong></p>
      <a href="https://wa.me/971522887844" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">احجز عبر واتساب</a>
    </div>

  </div>

      <a
  href="https://renterpoint.com/ar/"
  target="_blank"
  rel="nofollow noopener noreferrer"
  className="inline-block mt-10 bg-blue-600 text-white text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition"
>
  انتقل إلى موقعنا الرئيسي لحجز سيارتك الآن
</a>

</section>



      </main>

      <Footer />
<a
  href="https://wa.me/971522887844"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="whatsapp-icon"
  />
  تواصل معنا
</a>
      

    </div>
  );
}
