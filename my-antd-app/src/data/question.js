const questions = [
    {
      text: '1. Та амархан ядарч, хангалттай унтаж амарсан ч гэсэн дандаа л амраагүй юм шиг сульданги байдаг уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Эрүүл унтлагын хэв маягаа хадгалах. Амралтаа дэмжих амьдралын хэмнэлээ үргэлжлүүл.',
        'Долоо хоногт дор хаяж нэг амралтын өдөр өөртөө зориул. Шөнийн 7-8 цагийн унтлагын дэглэмийг тогтмолжуул.',
        'Нойрны гүн чанарыг сайжруулахын тулд дижитал төхөөрөмжөөс холдох.Амралт, ажил хоёроо тэнцвэржүүл. 20 минутын “power nap” өдрийн турш эрч хүч нэмнэ. Унтах орчны дуу чимээ, гэрлийг багасга.',
        '“Power nap” (15–20 мин) өдөрт 1 удаа хийх.Шөнийн унтлагын чанараа үнэл. Унтахаас 1 цагийн өмнө дэлгэцээс холдох, халуун шүршүүрт орох дадлыг хэвшүүл.',
        '	Эрүүл мэндийн үзлэгт хамрагдах. Витамин D, төмөр, магнийн түвшинг шалгуулах. Ачааллаа бууруулахыг зорь.',
      ],
    },
    {
      text: '2. Хүмүүс өөрсдийн өдөр тутмын, болох болохгүй явдлын талаар ярихад танд яршигтай, амархан уурлаж уцаарладаг уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Харилцаагаа хадгалахад анхаар. Баяр баясгалантай яриаг дэмжих нь сэтгэлд эерэг нөлөөтэй.',
        '	Сэтгэл хөдлөлөө ажиглаж, амьсгалын гүн дасгал хий. 4-7-8 арга (4 секунд амьсгаа авах – 7 секунд барих – 8 секунд гаргах) тусална.',
        'Бичиж цэнэгээ гаргах (journaling), хөнгөн дасгал хийх, 5 минут ганцаараа байж толгойгоо цэгцлэх.',
        'Сэтгэлээ тайвшруулах үйлдлүүдийг тогтмол хийх: шүршүүр, тайван хөгжим, цай, богино алхалт.',
        'Сэтгэлзүйн зөвлөгөө авах, ярианы эрүүл орчин бүрдүүлэх, уур бухимдлыг таних, тохиолдлыг бүртгэх зуршил хэрэгтэй.',
      ],
    },
    {
      text: '3. Өөрт чинь нэн тулгамдсан, шийдвэрлэх шаардлагатай асуудал нэмэгдсэн мэт мэдрэмж төрдөг үү?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Үргэлж бичиж төлөвлөж явах зуршлаа хадгал.',
        'Өдөр тутмын 3 чухал зорилтыг л жагсаа. Үлдсэнийг дараа оруул.',
        'Яаралтай биш чухал” зорилтыг таньж төлөвлөлт хийх (Eisenhower matrix)',
        'Pomodoro арга (25 мин ажил – 5 мин амралт) ашиглах. Бүрэн төлөвлөгөө хөтлөхөөс илүүтэй энгийн 3 үйлдэл бич.',
        'Мэргэжлийн зөвлөгөө авах. Тусламж гуйх, ажлаа хуваарилах, “Үгүй” гэж хэлж сурах алхмуудыг дадал болго.',
      ],
    },
    {
      text: '4. Та юунаас болоод байгаагаа өөрөө ч мэдэхгүй, уйтгар гунигт автан, хэвийн үед байснаасаа амархан уйлах, сэтгэл хөдлөх болсон уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Өдөр тутмын сэтгэл ханамжийг тэмдэглэж, эерэг үйлдлүүдээ эргэн хар.',
        '“Mood tracker” апп ашиглаж өдөр бүр сэтгэл хөдлөлөө ажиглах, өөрт эерэг мэдрэмж өгдөг зүйлийг тэмдэглэх.Сэтгэлээ чөлөөтэй илэрхийлэх орон зай бий болгох',
        'Гэрэлд гарах, хөнгөн хөгжим сонсох, хүнтэй чөлөөтэй ярих цаг гаргах.',
        'Өөрийгөө шүүмжлэхээс илүү ажиглах — “Би ингэж мэдэрч байна” гэдгийг хүлээн зөвшөөр.',
        'Сэтгэл зүйчид хандах. Төрөлхийн сэтгэл хөдлөлийн өөрчлөлт, дутуу дэмжлэгийн суурь байж болзошгүй. Тайвшруулах техникүүд (амьсгал, сэтгэлээ хуваалцах) тогтмол хэрэглэ.',
      ],
    },
    {
      text: '5. Та төлөвлөсөн уулзалт, өнгөрсөн үйл явдлын сүүлийн хугацаа, амины эд зүйлээ мартдаг уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Ухаалаг тэмдэглэл (notes app) ашиглаж, хэвшмэл төлөвлөгөөгөө хадгал.Сануулах апп, тэмдэглэл ашиглах',
        '3 зүйл санах” тоглоом тоглох: өглөөний 3 төлөвлөгөө, оройн 3 дүгнэлт.Унтах хугацааг нэмэгдүүлэх',
        'Өдөр тутмын 3–5 зүйл бичиж тэмдэглэх. Уураг, усны хэрэглээг нэмэх.Ой тогтоолт сайжруулах тоглоом, дасгал хийх',
        'Цагийн хуваарь, сануулагч ашиглах. 10 минут бясалгал хийж тархи амраах.Төвлөрөх орчныг бүрдүүлэх',
        'Эмчид үзүүлэхМэргэжлийн үнэлгээ авах. Стресс бууруулах аргууд хэрэгжүүлэхгүй бол богино хугацаанд муудаж болзошгүй.',
      ],
    },
    {
      text: '6. Та найз нөхөд, гэр бүлийхэнтэйгээ цөөн уулзах болж, ганцаараа байх, хүмүүсээс холдохыг хүсдэг болсон уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Найз нөхөдтэйгээ уулзах цаг товлох Мэргэжлийн үнэлгээ авах. Стресс бууруулах аргууд хэрэгжүүлэхгүй бол богино хугацаанд муудаж болзошгүй.',
        '7 хоногт нэг удаа танил хүнтэй уулзах, инээж хөхөрдөг орчныг зориуд хайх.Хамтдаа хийх сонирхолтой зүйлс хайх',
        'Хоббиг бүлгээр хийж эхлэх “Сошиал детокс” – хуурамч харилцааг багасгаж, бодит холболтоо эргүүлэн олох.',
        'Сэтгэл хөдлөлөө бичгээр илэрхийлэх	Нэг найздаа юу мэдэрч буйгаа хэлж үзэх. Дэмжих хариу сонсох нь сэтгэлийн ачааллыг багасгана.',
        'Сэтгэл зүйчтэй уулзахГанцаардал бол эрүүл мэндийн эрсдэл. Сэтгэлзүйн зөвлөгөө авахаас бүү зов.',
      ],
    },
    {
      text: '7. Өдөр тутмынхаа ажлыг хийхэд урьдынхаасаа илүү хүч орох болсон уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Pomodoro техникийг турших Ажлаа хийж дуусах үедээ өөртөө бага шагнал өгч хэвш.',
        'Ажлын ачааллыг хуваарилахАжлынхаа эхлэлд “өөрт хялбар 5 минутын” даалгавар өгч бэлтгэл үе үүсгэ.',
        'Ажиллаж байхдаа амрах хугацаа оруулах	Pomodoro (25/5) аргыг турших. Урам зориг төрүүлдэг playlist бэлдэх.',
        'Өөрт эрч хүч өгөх зүйл (хөгжим, нар, ногоон орчинАжлынхаа зорилгыг өөр өнцгөөс харах – хэнд хэрхэн тус болж байна вэ?)',
        'Зөвлөгөө авахТүр зуур ажлаа багасгах, эсвэл шинэ эрэмбэ тогтоох. Дэмжлэг хүс.',
      ],
    },
    {
      text: '8. Өөрт чинь ходоод өвдөх, толгой өвдөх, хүйт даах, бие нозоорох гэх мэт ямар нэг зовиур байна уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Хооллолтод анхаарах	Амьдралын хэв маягаа хадгалж, ус сайн уух зуршлыг үргэлжлүүл.',
        'Дасгал хөдөлгөөн тогтмол хийх Биеийн дохио өгч буй “анхааруулга” байж болох тул өдрийн ачааллаас 15–30 минутыг өөртөө зарцуулах.',
        'Ус уух зуршилтай болохШингэн илчлэг ихтэй, сахар багатай хоол хэрэглэж, 7 хоногт 3 удаа хөдөлгөөн хийх.',
        'Унтах, амрах цагийг нэмэхЭмчид үзүүлэх, стрессийн удирдлагын аргуудыг 7 хоног турш мөрдөх (бясалгал, амралтын өдрийн дэглэм).',
        'Мэргэжлийн эмчид үзүүлэх Эрүүл мэндийн оношилгоо, сэтгэлзүйн зөвлөгөөг хослуулах шаардлагатай.',
      ],
    },
    {
      text: '9. Өдрийн ажлаа дуусгасны дараа дэндүү ядарч тэнхээгүй болсон мэдрэмж танд үүсдэг үү?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Өдрийн дунд амралт авахАмралт болон эрч хүчээ хадгалах зуршлаар бахархах хэрэгтэй.',
        'Ажлын дараа алхах эсвэл тайвшрах зүйл хийхАжлын төгсгөлд 15 минут өөрийгөө тайвшруулах зан үйлтэй болох.',
        'Амралттай, тогтмол хуваарьтай болохӨдрийн дунд 10 минутын “сэргээх алхалт” хий. Сайн ус уух.',
        'Сэтгэл санааг сэргээх зүйл хийхАжлын дараах орчныг “амрах орчин” болго. Хүнд, чанга мэдээллээс холдох.',
        'Мэргэжлийн зөвлөгөө авахСул нөөц нөхөх хугацаа шаардлагатай. Долоо хоногийн амралтыг бүрэн төлөвлөж, ачааллыг хуваалцах.',
      ],
    },
    {
      text: '10. Урьд нь таны сонирхолтой, дуртай байсан зүйл одоо сонирхлыг чинь татахаа больсон уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Бага багаар сонирхол сэргээхийг оролдох	Өдөр бүр 1 жижиг зүйлд баярлах, тэмдэглэх зуршилтай бол.',
        'Хоббид суурилсан уулзалт, арга хэмжээнд оролцохДуртай зүйлээ 5 минут ч хамаагүй хийж эхэл. Дуршил хөдөлнө.',
        'Сэтгэл хөдлөлөө ажиглах зуршилтай болох Сонирхлыг шинээр асаах оролдлого: шинэ ном, хөгжим, подкаст сонс.',
        'Өдрийн тэмдэглэл хөтлөх“10 хоног – 10 минут” сорил: дуртай зүйлээ бага багаар сэргээ.',
        'Сэтгэл зүйчтэй уулзах зүйл бүрээс татгалзаж байна.	Энэ бол анхааруулах дохио. Сэтгэл заслын зөвлөгөө ав. Гадаад өдөөлтөөр сонирхлыг эргүүлж ирэх арга турш.',
      ],
    },
    {
      text: '11. Та ажилдаа дур сонирхолгүй болж, ажил хийнэ гэхээр сэтгэлээр шаналах болсон уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Өөртөө жижиг урамшуулал тавих Хийж буй ажлынхаа ач холбогдлыг өдөрт нэг удаа эргэн санах.',
        'Зорилгынхаа талаар бичихАжлын дараа өөрт таатай зүйл хийх зуршил үүсгэ – өөрийгөө урамшуул.',
        'Хамт олон, удирдлагатайгаа харилцах Ажлын байран дээр дэмжлэг хай – хамт олон, удирдлага.',
        'Ажлын байраа тохилог болгохТүр хугацаагаар ажлын ачааллыг бууруулах боломж эрэлхийл.',
        'Мэргэжлийн зөвлөгөө авах Шийдвэр гаргалтад хүрэхийн өмнө мэргэжлийн зөвлөгөө ав. Ажил сольж болох ч түр амралт, сэтгэл зүйчтэй ярилцлага эхлүүл.',
      ],
    },
    {
      text: '12. Таны төлөвлөгөө санаснаасаа бага үр дүнд хүрэх болсон уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Бага зорилгыг шат дараалалтай болгохЯлалт бүрээ тэмдэглэх – “ямар ч жижиг байсан хамаагүй”.',
        'Өөртөө эерэг үг хэлэх зуршилтай болох Бодит зорилго + урам зориг = 80% амжилт. Цөөн зорилготой, тодорхой төлөвлөлт.',
        'Бодит хүлээлттэй байх“3 чухал зорилго” тогтолцоо: өдөрт 3-хан зорилго тодорхойлж, түүнд төвлөр.',
        'Дэмжигч бүлгээс зөвлөгөө авах“Яагаад чадахгүй байна?” гэдгээ бичиж, гадагшлуул. Энэ бол эхний алхам.',
        'Төлөвлөгөөгөө уян хатан болгохЭнэ бол сэтгэл хямралын түлхүүр шинж. Өөрийгөө зэмлэх биш, дэмжлэг авч шинэ хүч авах үе. Сэтгэл судлаачтай холбоо барих.',
      ],
    },
    {
      text: '13. Та ажлаас үүссэн стрессээ тайлахын тулд хоол ундаа багасгах, ихэсгэх, тамхи их татах, архи их уух зэрэг байдалд орсон уу?',
      options: [
        'хэзээ ч үгүй',
        'хааяа',
        'үе үе боловч байнга тал руугаа дөхсөн гэж хэлж болохоор',
        'олон удаа',
        'үргэлж',
      ],
      advices: [
        'Биеийн хөдөлгөөн хийхийг тогтмол болгох	Эрүүл байдал бол хамгийн том давуу тал. Үргэлжлүүл.',
        'Тайвшруулах амьсгалын техник хэрэглэх Стрессээ тайлах шинэ хэв маяг: халуун усанд орох, зөөлөн хөгжим, анхаарал төвлөрөл.',
        'Эерэг зуршил (ном, аялал, хөгжим) бий болгох“Стресс тайлах жагсаалт” гаргаж, хэрэгжүүлэх: алхах, гүнзгий амьсгаа, тэмдэглэл бичих.',
        'Нөхөрсөг харилцааг өргөжүүлэх7 хоног өөрийгөө ажиглах. Нэг зуршлыг сольж үз: тамхи – зажлуур, согтууруулах – халуун цай.',
        'Сэтгэл зүйчид хандахХорт зуршлаас гарахад дэмжлэг хэрэгтэй. Сэтгэлзүйч эсвэл эрүүл мэндийн мэргэжилтэнтэй уулзах.',
      ],
    },
  ];
  
  export default questions;