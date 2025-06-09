// 添加CDN基础URL配置
const IMAGE_BASE_URL = "https://imagevsl1.oss-cn-chengdu.aliyuncs.com/";

// 非遗数据
const heritageData = {
  // 国家级非遗数据
  national: [
    {
      _id: "n1",
      title: "侗族木构建筑营造技艺",
      level: "国家级",
      language: "zh-CN",
      category: "传统技艺",
      region: "黎平县肇兴侗寨、双江乡四寨村、水口镇桩洞中寨鼓楼；从江县往洞乡增冲村增冲鼓楼、谷坪乡银潭村下寨鼓楼、下江镇宰养村高阡鼓楼；榕江县宰麻镇、栽麻乡宰荡村宰荡鼓楼",
      description: "侗族鼓楼与花桥为独特木构建筑，鼓楼集塔阁亭于一体，花桥以杉木穿榫工艺建造，运用杠杆原理。匠人以竹尺“匠杆”及符号体系设计，师徒传承。代表增冲鼓楼为全国重点文保，具科学文化价值，需保护传承。",
      content: "侗族鼓楼与花桥为独特木构建筑，鼓楼集塔阁亭于一体，花桥以杉木穿榫工艺建造，运用杠杆原理。匠人以竹尺“匠杆”及符号体系设计，师徒传承。代表增冲鼓楼为全国重点文保，具科学文化价值，需保护传承。",
      coverImage: `${IMAGE_BASE_URL}gheritage/1.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/1.png`,
        `${IMAGE_BASE_URL}gheritage/2.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n1-en",
      title: "The Craftsmanship of Dong Ethnic Group's Wooden Architecture",
      level: "National",
      language: "en-US",
      category: "Traditional Craftsmanship",
      region: "Liping County: Zhaoxing Dong Village, Zhaoxing Township; Sizhai Village, Shuangjiang Township; Zhongzhai Drum Tower, Zhudongzhai, Shuikou Town; Congjiang County: Zengchong Drum Tower, Zengchong Village, Wangdong Township; Xiazhai Drum Tower, Yintan Village, Guping Township; Gaoqian Drum Tower, Zaiyang Village, Xiajiang Township; Rongjiang County: Zaima Township; Zaidang Drum Tower, Zaidang Village, Zaima Township",
      description: "Exemplifying unique timber-framed architecture, Dong Drum Towers integrate pagoda, pavilion, and tower designs, while Flower Bridges are constructed using fir-wood mortise-tenon joints based on lever mechanics. Master builders employ bamboo rulers (Jianggan) and symbolic notation systems, transmitted through master-apprentice lineages. The Zengchong Drum Tower, a National Key Cultural Relics Protection Unit, embodies scientific ingenuity and cultural values, demanding urgent preservation.",
      content: "Exemplifying unique timber-framed architecture, Dong Drum Towers integrate pagoda, pavilion, and tower designs, while Flower Bridges are constructed using fir-wood mortise-tenon joints based on lever mechanics. Master builders employ bamboo rulers (Jianggan) and symbolic notation systems, transmitted through master-apprentice lineages. The Zengchong Drum Tower, a National Key Cultural Relics Protection Unit, embodies scientific ingenuity and cultural values, demanding urgent preservation.",
      coverImage: `${IMAGE_BASE_URL}gheritage/1.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/1.png`,
        `${IMAGE_BASE_URL}gheritage/2.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n1-ja",
      title: "トン族木造建築構築技術",
      level: "国家級",
      language: "ja-JP",
      category: "伝統工芸",
      region: "黎平県肇興トン寨、双江郷四寨村／水口鎮樁洞中寨鼓楼；従江県往洞郷増冲村増冲鼓楼／谷坪郷銀潭村下寨鼓楼／下江鎮宰養村高阡鼓楼；榕江県宰麻鎮／栽麻郷宰蕩村宰蕩鼓楼",
      description: "侗族の鼓楼と花橋は独特な木造建築です。鼓楼は塔、楼閣、亭という三者を含めます。花橋は杉で貫きほぞ工法により建てられ、梃子の原理を活用しました。工匠たちは「匠杆（ジャンガン）」と呼ばれる竹の物差しと独自の符号体系を用いて設計し、その技術は師匠から弟子へと代々伝承されている。代表的な増冲鼓楼は国家重要文化財保護単位に指定され、科学的・文化的価値があるため、適切な保護と継承が求められている。",
      content: "侗族の鼓楼と花橋は独特な木造建築です。鼓楼は塔、楼閣、亭という三者を含めます。花橋は杉で貫きほぞ工法により建てられ、梃子の原理を活用しました。工匠たちは「匠杆（ジャンガン）」と呼ばれる竹の物差しと独自の符号体系を用いて設計し、その技術は師匠から弟子へと代々伝承されている。代表的な増冲鼓楼は国家重要文化財保護単位に指定され、科学的・文化的価値があるため、適切な保護と継承が求められている。",
      coverImage: `${IMAGE_BASE_URL}gheritage/1.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/1.png`,
        `${IMAGE_BASE_URL}gheritage/2.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n2",
      title: "瑶族医药（药浴疗法）",
      level: "国家级",
      language: "zh-CN",
      category: "传统医药",
      region: "从江县翠里乡高华村、西山镇秋卡村、摆翁村、丙妹镇五里坡；黎平县肇兴侗寨、贵州侗乡大健康产业示范区",
      description: "瑶族药浴源自贵州从江，以草药煮水浸浴，祛风除湿、活血排毒，为百年传统养生秘方，绿色无副作用，亟待保护传承。",
      content: "瑶族药浴源自贵州从江，以草药煮水浸浴，祛风除湿、活血排毒，为百年传统养生秘方，绿色无副作用，亟待保护传承。",
      coverImage: `${IMAGE_BASE_URL}gheritage/3.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/3.png`,
        `${IMAGE_BASE_URL}gheritage/4.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n2-en",
      title: "The Herbal Medicine of the Yao Ethnic Group (Yaoyu Herbal Bath Therapy)",
      level: "National",
      language: "en-US",
      category: "Traditional Medicine",
      region: "Congjiang County: Gaohua Village, Cuili Township; Qiuka Village, Xishan Township; Baiweng Village, Cuili Township; Wulipo, Bingmei Town; Liping County: Zhaoxing Dong Village; Guizhou Dongxiang Great Health Industry Demonstration Zone",
      description: "Originating in Congjiang, Guizhou, this centennial wellness tradition involves medicinal herb decoctions for rheumatism relief and detoxification. As an eco-friendly regimen free from side effects, it represents intangible medical heritage requiring systematic safeguarding.",
      content: "Originating in Congjiang, Guizhou, this centennial wellness tradition involves medicinal herb decoctions for rheumatism relief and detoxification. As an eco-friendly regimen free from side effects, it represents intangible medical heritage requiring systematic safeguarding.",
      coverImage: `${IMAGE_BASE_URL}gheritage/3.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/3.png`,
        `${IMAGE_BASE_URL}gheritage/4.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n2-ja",
      title: "ヤオ族医薬（薬浴療法）",
      level: "国家級",
      language: "ja-JP",
      category: "伝統医薬",
      region: "従江県翠里郷高華村／西山鎮秋カ村／擺翁村・丙妹鎮五里坡；黎平県肇興トン寨／貴州トン郷大健康産業モデル区",
      description: "ヤオ族薬浴療法は、中国貴州省従江県に伝承される伝統医療技法です。天然の薬草を煎じた湯に浸かることで、風邪を治し、湿気を取り除き、血行を促し、毒を解けるという百年にわたり受け継がれてきました。自然に恵られた薬草が副作用はありません。",
      content: "ヤオ族薬浴療法は、中国貴州省従江県に伝承される伝統医療技法です。天然の薬草を煎じた湯に浸かることで、風邪を治し、湿気を取り除き、血行を促し、毒を解けるという百年にわたり受け継がれてきました。自然に恵られた薬草が副作用はありません。",
      coverImage: `${IMAGE_BASE_URL}gheritage/3.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/3.png`,
        `${IMAGE_BASE_URL}gheritage/4.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n3",
      title: "侗族大歌",
      level: "国家级",
      language: "zh-CN",
      category: "传统音乐",
      region: "黎平县岩洞镇、口江乡、双江镇、永从镇、肇兴镇、水口镇、龙额镇；从江县往洞镇、谷坪镇、高增乡、贯洞镇、洛香镇；榕江县栽麻乡宰荡村、丰登寨",
      description: "侗族大歌“嘎老”源于宋代，明代载于《赤雅》，流传黔桂湘侗区。以多声部合唱（雄/雌音）为特色，含鼓楼大歌、声音大歌等类型，分“角”“省”“枚”结构，无伴奏羽调式，代表曲目《蝉歌》等。承载侗族历史、婚俗与文化，具重要学术价值，亟需保护传承。",
      content: "侗族大歌“嘎老”源于宋代，明代载于《赤雅》，流传黔桂湘侗区。以多声部合唱（雄/雌音）为特色，含鼓楼大歌、声音大歌等类型，“分”“角”“省”“枚”结构，无伴奏羽调式，代表曲目《蝉歌》等。承载侗族历史、婚俗与文化，具重要学术价值，亟需保护传承。",
      coverImage: `${IMAGE_BASE_URL}gheritage/5.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/5.png`,
        `${IMAGE_BASE_URL}gheritage/6.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n3-en",
      title: "Grand Song of the Dong Ethnic Group",
      level: "National",
      language: "en-US",
      category: "Traditional Music",
      region: "Liping County: Yandong Township, Koujiang Township, Shuangjiang Township, Yongcong Township, Zhaoxing Township, Shuikou Township, Long'e Township; Congjiang County: Wangdong Township, Guping Township, Gaozeng Township, Guandong Township, Luoxiang Township; Rongjiang County: Zaidang Village, Zaima Township; Fengdeng Dong Village",
      description: "Documented since the Song Dynasty (960-1279) and recorded in Ming-era Chiya (1639), this a cappella tradition features multipart harmonies (Xiong/Yin vocal divisions) with subtypes like Drum Tower Grand Songs and Nature Sound Songs. Structured through Jiao (prelude), Xing (verse), and Mei (coda), with representative works like Cicada Song, it encodes Dong history and marital customs, holding vital ethnomusicological significance.",
      content: "Documented since the Song Dynasty (960-1279) and recorded in Ming-era Chiya (1639), this a cappella tradition features multipart harmonies (Xiong/Yin vocal divisions) with subtypes like Drum Tower Grand Songs and Nature Sound Songs. Structured through Jiao (prelude), Xing (verse), and Mei (coda), with representative works like Cicada Song, it encodes Dong history and marital customs, holding vital ethnomusicological significance.",
      coverImage: `${IMAGE_BASE_URL}gheritage/5.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/5.png`,
        `${IMAGE_BASE_URL}gheritage/6.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n3-ja",
      title: "トン族大歌",
      level: "国家級",
      language: "ja-JP",
      category: "伝統音楽",
      region: "黎平県岩洞鎮、口江郷、双江鎮、永従鎮、肇興鎮、水口鎮、龍額鎮；従江県往洞鎮、谷坪鎮、高増郷、貫洞鎮、洛香鎮；榕江県栽麻郷宰蕩村、豊登寨",
      description: "トン族の大歌「嘎老」（ガーラオ）は宋から歌い始め、明の『赤雅』に記載され、貴州・広西・湖南のトン族地域に伝わっています。多声部の合唱（雄音/雌音）という特色を持ち、鼓楼大歌や声音大歌などの形を含め、「角」「省」「枚」という構造に分かれ、伴奏なしの羽調式の代表曲は『蝉歌』です。トン族の歴史、婚姻習俗、文化を背負い、貴重な学術的な価値を持ち、保護しながら継がせる必要があります。",
      content: "トン族の大歌「嘎老」（ガーラオ）は宋から歌い始め、明の『赤雅』に記載され、貴州・広西・湖南のトン族地域に伝わっています。多声部の合唱（雄音/雌音）という特色を持ち、鼓楼大歌や声音大歌などの形を含め、「角」「省」「枚」という構造に分かれ、伴奏なしの羽調式の代表曲は『蝉歌』です。トン族の歴史、婚姻習俗、文化を背負い、貴重な学術的な価値を持ち、保護しながら継がせる必要があります。",
      coverImage: `${IMAGE_BASE_URL}gheritage/5.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/5.png`,
        `${IMAGE_BASE_URL}gheritage/6.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n4",
      title: "侗族琵琶歌",
      level: "国家级",
      language: "zh-CN",
      category: "传统音乐",
      region: "黎平县洪州镇、双江镇、水口镇、龙额镇、洪州镇平架村、双江镇四寨村；从江县往洞镇、谷坪镇、洛香镇、往洞镇增冲村、谷坪镇小黄村；榕江县三宝侗寨、栽麻乡、七十二寨地区",
      description: "侗族琵琶歌是侗族传统音乐，分抒情与叙事两类，涵盖历史、民俗等丰富内容。不同地区风格各异，洪州琵琶歌以假嗓演唱为特色，兼具艺术性与文化研究价值，是侗族音乐遗产珍品。",
      content: "侗族琵琶歌是侗族传统音乐，分抒情与叙事两类，涵盖历史、民俗等丰富内容。不同地区风格各异，洪州琵琶歌以假嗓演唱为特色，兼具艺术性与文化研究价值，是侗族音乐遗产珍品。",
      coverImage: `${IMAGE_BASE_URL}gheritage/7.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/7.png`,
        `${IMAGE_BASE_URL}gheritage/8.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n4-en",
      title: "Dong Pipa Songs",
      level: "National",
      language: "en-US",
      category: "Traditional Music",
      region: "Liping County: Hongzhou Township; Shuangjiang Township; Shuikou Township; Long'e Township; Pingjia Village; Hongzhou Township; Sizhai Village, Shuangjiang Township; Congjiang County: Wangdong Township; Guping Township; Luoxiang Town; Zengchong Village, Wangdong Township; Xiaohuang Village, Guping Township; Rongjiang County: Sanbao Dong Village, Chejiang Township; Zaima Township; Qishier Dong Village, Leli Township",
      description: "This lute-accompanied tradition encompasses lyrical and narrative genres documenting historical events and folk customs. Regional variations include Hongzhou Pipa Songs with distinctive falsetto techniques, recognized as pinnacles of Dong musical heritage.",
      content: "This lute-accompanied tradition encompasses lyrical and narrative genres documenting historical events and folk customs. Regional variations include Hongzhou Pipa Songs with distinctive falsetto techniques, recognized as pinnacles of Dong musical heritage.",
      coverImage: `${IMAGE_BASE_URL}gheritage/7.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/7.png`,
        `${IMAGE_BASE_URL}gheritage/8.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n4-ja",
      title: "トン族琵琶歌",
      level: "国家級",
      language: "ja-JP",
      category: "伝統音楽",
      region: "黎平県洪州鎮、双江鎮、水口鎮、龍額鎮／洪州鎮平架村／双江鎮四寨村；従江県往洞鎮、谷坪鎮、洛香鎮／往洞鎮増冲村／谷坪鎮小黄村；榕江県三宝トン寨／栽麻郷／七十二寨地区",
      description: "琵琶歌はトン族の伝統的な音楽で、感情を述べるか物事を述べるかという二種類に分かれ、歴史や民俗などさまざまな内容が含まれています。地域によってスタイルが異なり、洪州の琵琶歌は仮声で歌うことが特徴です。芸術性と文化研究の価値を兼ね備え、トン族の貴重な音楽遺産です。",
      content: "琵琶歌はトン族の伝統的な音楽で、感情を述べるか物事を述べるかという二種類に分かれ、歴史や民俗などさまざまな内容が含まれています。地域によってスタイルが異なり、洪州の琵琶歌は仮声で歌うことが特徴です。芸術性と文化研究の価値を兼ね備え、トン族の貴重な音楽遺産です。",
      coverImage: `${IMAGE_BASE_URL}gheritage/7.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/7.png`,
        `${IMAGE_BASE_URL}gheritage/8.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n5",
      title: "珠郎娘美",
      level: "国家级",
      language: "zh-CN",
      category: "传统戏剧",
      region: "榕江县三宝侗寨、栽麻乡八匡村、忠诚镇；从江县贯洞镇、洛香镇、往洞镇；黎平县全县侗族聚居区",
      description: "侗族民间故事《珠郎娘美》源于贵州榕江，流传黔桂湘侗区，讲述青年珠郎与娘美的爱情传奇，后改编为侗戏、电影，具重要文化价值与研究意义。",
      content: "侗族民间故事《珠郎娘美》源于贵州榕江，流传黔桂湘侗区，讲述青年珠郎与娘美的爱情传奇，后改编为侗戏、电影，具重要文化价值与研究意义。",
      coverImage: `${IMAGE_BASE_URL}gheritage/9.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/9.png`,
        `${IMAGE_BASE_URL}gheritage/10.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n5-en",
      title: "The Love Story of Zhulang and Niangmei",
      level: "National",
      language: "en-US",
      category: "Traditional Drama",
      region: "Rongjiang County: Sanbao Dong Village; Bakuang Village, Zaima Township; Zhongcheng Town; Congjiang County: Guandong Town; Luoxiang Town; Wangdong Town; Liping County: All Dong-inhabited areas",
      description: "Originating in Rongjiang, Guizhou, this cross-border love legend has been adapted into Dong operas and films, providing crucial insights into Dong narrative traditions and cultural adaptation mechanisms.",
      content: "Originating in Rongjiang, Guizhou, this cross-border love legend has been adapted into Dong operas and films, providing crucial insights into Dong narrative traditions and cultural adaptation mechanisms.",
      coverImage: `${IMAGE_BASE_URL}gheritage/9.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/9.png`,
        `${IMAGE_BASE_URL}gheritage/10.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n5-ja",
      title: "珠郎娘美（ジュラン・ニャンメイ）",
      level: "国家級",
      language: "ja-JP",
      category: "伝統演劇",
      region: "榕江県三宝トン寨／栽麻郷八匡村／忠誠鎮；従江県貫洞鎮／洛香鎮／往洞鎮；黎平県全県トン族居住区",
      description: "トン族の『珠郎と娘美』は民間の物語として貴州省榕江県からはじめて、貴州・広西、湖南のトン族地域まで広く伝わっています。この物語は若者の珠郎と娘美の恋愛伝説を語ります。その後、トン族の演劇化または映画化され、重要な文化価値も研究価値もあります。",
      content: "トン族の『珠郎と娘美』は民間の物語として貴州省榕江県からはじめて、貴州・広西、湖南のトン族地域まで広く伝わっています。この物語は若者の珠郎と娘美の恋愛伝説を語ります。その後、トン族の演劇化または映画化され、重要な文化価値も研究価値もあります。",
      coverImage: `${IMAGE_BASE_URL}gheritage/9.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/9.png`,
        `${IMAGE_BASE_URL}gheritage/10.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n6",
      title: "侗戏",
      level: "国家级",
      language: "zh-CN", 
      category: "传统戏剧",
      region: "黎平县腊洞村、肇兴侗寨、岩洞镇、双江镇；从江县贯洞镇、小黄侗寨；榕江县三宝侗寨（古州镇）、兴华乡摆贝苗寨",
      description: "侗戏起源于清嘉庆年间，由吴文彩基于侗族叙事歌与汉族说唱创立，流行于黔湘桂侗寨。融合多剧种元素，曲调丰富，表演朴实，代表剧目《珠郎娘美》。依赖口传心授，面临失传风险。",
      content: "侗戏起源于清嘉庆年间，由吴文彩基于侗族叙事歌与汉族说唱创立，流行于黔湘桂侗寨。融合多剧种元素，曲调丰富，表演朴实，代表剧目《珠郎娘美》。依赖口传心授，面临失传风险。",
      coverImage: `${IMAGE_BASE_URL}gheritage/11.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/11.png`,
        `${IMAGE_BASE_URL}gheritage/12.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n6-en",
      title: "Dong Opera",
      level: "National",
      language: "en-US",
      category: "Traditional Drama",
      region: "Liping County: Ladong Village; Zhaoxing Dong Village; Yandong Town, Shuangjiang Town; Congjiang County: Guandong Town; Xiaohuang Dong Village; Rongjiang County: Sanbao Dong Village (Guzhou Town); Baibei Miao Village, Xinghua Township",
      description: "Dong Opera originated in the Jiaqing Epemror period of the Qing Dynasty, founded by Wu Wencai, which was based on narrative songs of Dong people and raps of Han people. This Dong opera is verbally transmitted and is popular in the Dong villages in Guizhou Province, Hunan Province and Guangxi Province. It combines the elements of various genres, with rich tunes and simple performances, and its representative reprtoire is \"Zhulang Niangmei\".",
      content: "Dong Opera originated in the Jiaqing Epemror period of the Qing Dynasty, founded by Wu Wencai, which was based on narrative songs of Dong people and raps of Han people. This Dong opera is verbally transmitted and is popular in the Dong villages in Guizhou Province, Hunan Province and Guangxi Province. It combines the elements of various genres, with rich tunes and simple performances, and its representative reprtoire is \"Zhulang Niangmei\".",
      coverImage: `${IMAGE_BASE_URL}gheritage/11.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/11.png`,
        `${IMAGE_BASE_URL}gheritage/12.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n6-ja",
      title: "トン劇",
      level: "国家級",
      language: "ja-JP",
      category: "伝統演劇",
      region: "黎平県臘洞村／肇興トン寨／岩洞鎮・双江鎮；従江県貫洞鎮／小黄トン寨；榕江県三宝トン寨（古州鎮）／興華郷擺貝ミャオ寨",
      description: "トン族の演劇は清の嘉慶年間からはじめ、呉文彩という人がトン族の叙事歌と漢族の語り物を基に作り、貴州・湖南・広西のトン族の村で流行っていました。複数の劇種の要素を融合し、曲調が豊かで、演技は素朴で、中には代表的な演目が『珠郎と娘美』です。口伝えなので、無くなる可能性が高いです。",
      content: "トン族の演劇は清の嘉慶年間からはじめ、呉文彩という人がトン族の叙事歌と漢族の語り物を基に作り、貴州・湖南・広西のトン族の村で流行っていました。複数の劇種の要素を融合し、曲調が豊かで、演技は素朴で、中には代表的な演目が『珠郎と娘美』です。口伝えなので、無くなる可能性が高いです。",
      coverImage: `${IMAGE_BASE_URL}gheritage/11.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/11.png`,
        `${IMAGE_BASE_URL}gheritage/12.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n7",
      title: "侗族萨玛节",
      level: "国家级",
      language: "zh-CN",
      category: "传统节庆",
      region: "黎平县（发源地与核心分布区）腊洞村、洪州镇、双江镇、水口镇、龙额镇、肇兴镇、岩洞镇等，形成“六洞”“九洞”文化圈；从江县（重要传播与改编中心）往洞镇、谷坪镇、贯洞镇、洛香镇、增冲村；榕江县（边缘分布与文化融合区）三宝侗寨、栽麻乡",
      description: "侗族萨玛节是贵州榕江等地祭祀大祖母萨玛的传统节日，体现母系遗风。农历正月/二月全寨祭“然萨”，妇女为主绕寨歌舞“多耶”，祈求安康丰收，传承团结敬老文化，承载侗族历史记忆与精神信仰。",
      content: "侗族萨玛节是贵州榕江等地祭祀大祖母萨玛的传统节日，体现母系遗风。农历正月/二月全寨祭“然萨”，妇女为主绕寨歌舞“多耶”，祈求安康丰收，传承团结敬老文化，承载侗族历史记忆与精神信仰。",
      coverImage: `${IMAGE_BASE_URL}gheritage/13.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/13.png`,
        `${IMAGE_BASE_URL}gheritage/14.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n7-en",
      title: "Sama Worship Festival of the Dong Ethnic Group",
      level: "National",
      language: "en-US",
      category: "Traditional Festival",
      region: "Liping County (Origin and Core Area): Ladong Village; Hongzhou Town, Shuangjiang Town, Shuikou Town, Long'e Town, Zhaoxing Town, Yandong Town, forming the cultural zones of \"Liu Dong\" and \"Jiu Dong\"; Congjiang County (Key Dissemination and Adaptation Center): Wangdong Town, Guping Town, Guandong Town, Luoxiang Town; Zengchong Village; Rongjiang County (Peripheral Distribution and Cultural Integration): Sanbao Dong Village; Zaima Township",
      description: "The Sama Worship Festival of the Dong people is a traditional festival in Rongjiang County, Guizhou Province to honor the Great Grandmother Sama, reflecting the practices of matriarchal society. In the first and second months of the lunar calendar, the whole village sacrifices to \"God Ransa\", and women mainly do duoye (it means sing and dance in Dong dialect) around the village. While singing and dancing, the Dong people are praying for good health and a bumper harvest, thus passing on the power of unity and respect for the elderly. This duoye has a very long history and represents religious beliefs of the Dong people.",
      content: "The Sama Worship Festival of the Dong people is a traditional festival in Rongjiang County, Guizhou Province to honor the Great Grandmother Sama, reflecting the practices of matriarchal society. In the first and second months of the lunar calendar, the whole village sacrifices to \"God Ransa\", and women mainly do duoye (it means sing and dance in Dong dialect) around the village. While singing and dancing, the Dong people are praying for good health and a bumper harvest, thus passing on the power of unity and respect for the elderly. This duoye has a very long history and represents religious beliefs of the Dong people.",
      coverImage: `${IMAGE_BASE_URL}gheritage/13.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/13.png`,
        `${IMAGE_BASE_URL}gheritage/14.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n7-ja",
      title: "トン族サマ祭り",
      level: "国家級",
      language: "ja-JP",
      category: "伝統祭礼",
      region: "黎平県（発祥地と中核分布地域）：臘洞村／洪州鎮・双江鎮・水口鎮・龍額鎮・肇興鎮・岩洞鎮など「六洞」「九洞」文化圏形成地域；従江県（重要伝播・改編センター）：往洞鎮／谷坪鎮／貫洞鎮／洛香鎮／増冲村；榕江県（周辺分布と文化融合地域）：三宝トン寨／栽麻郷",
      description: "トン族のサマ祭りは、貴州省榕江県などで大祖母サマを祀る伝統的な祭りで、母系社会の名残りを表しています。旧暦の正月または二月に村全体で「然サ」を祀り、女性たちが主体となって村を囲みながら歌い踊る「多耶」を行い、安寧と豊作を祈願します。団結と敬老の文化を伝承し、トン族の歴史的記憶と精神的信仰を担っています。",
      content: "トン族のサマ祭りは、貴州省榕江県などで大祖母サマを祀る伝統的な祭りで、母系社会の名残りを表しています。旧暦の正月または二月に村全体で「然サ」を祀り、女性たちが主体となって村を囲みながら歌い踊る「多耶」を行い、安寧と豊作を祈願します。団結と敬老の文化を伝承し、トン族の歴史的記憶と精神的信仰を担っています。",
      coverImage: `${IMAGE_BASE_URL}gheritage/13.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/13.png`,
        `${IMAGE_BASE_URL}gheritage/14.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n8",
      title: "侗族款约",
      level: "国家级",
      language: "zh-CN",
      category: "民俗",
      region: "黎平县“十洞款会”、肇兴侗寨、九洞地区；从江县贯洞镇、往洞镇增冲村、洛香镇；榕江县古州月寨、三宝侗寨、栽麻乡",
      description: "贵州省黎平县侗族款约是侗族传统社会组织形式，以民主协商制定民间规约维系社会秩序，具有原始氏族特征。款约由群众商定、款首监督执行，体现民主性与严肃性，入选2014年国家级非遗名录，是侗族历史文化研究的重要载体。",
      content: "贵州省黎平县侗族款约是侗族传统社会组织形式，以民主协商制定民间规约维系社会秩序，具有原始氏族特征。款约由群众商定、款首监督执行，体现民主性与严肃性，入选2014年国家级非遗名录，是侗族历史文化研究的重要载体。",
      coverImage: `${IMAGE_BASE_URL}gheritage/15.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/15.png`,
        `${IMAGE_BASE_URL}gheritage/16.png`
      ],
      batch: "第一批",
      year: "2014",
      createTime: "2014-05-20",
      views: 0
    },
    {
      _id: "n8-en",
      title: "Regulations and Practices of the Dong Ethnic Group",
      level: "National",
      language: "en-US",
      category: "Traditional Custom",
      region: "Liping County: \"Shidong Kuanhui\" Assembly; Zhaoxing Dong Village; Jiudong Area; Congjiang County: Guandong Town; Zengchong Village, Wangdong Town; Luoxiang Town; Rongjiang County: Guyue Village; Sanbao Dong Village; Zaima Township",
      description: "As a traditional self-governance mechanism with clan democracy features, this oral legal system involves community-negotiated codes enforced by Kuan leaders. Listed as National ICH in 2014, it provides critical insights into Dong socio-political history.",
      content: "As a traditional self-governance mechanism with clan democracy features, this oral legal system involves community-negotiated codes enforced by Kuan leaders. Listed as National ICH in 2014, it provides critical insights into Dong socio-political history.",
      coverImage: `${IMAGE_BASE_URL}gheritage/15.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/15.png`,
        `${IMAGE_BASE_URL}gheritage/16.png`
      ],
      batch: "First Batch",
      year: "2014",
      createTime: "2014-05-20",
      views: 0
    },
    {
      _id: "n8-ja",
      title: "規約習俗（トン族カンヤク）",
      level: "国家級",
      language: "ja-JP",
      category: "民俗",
      region: "黎平県「十洞カンハイ」／肇興トン寨／九洞地区；従江県貫洞鎮／往洞鎮増冲村／洛香鎮；榕江県古州月寨／三宝トン寨／栽麻郷",
      description: "貴州省黎平県のトン族の「款約（かんやく）」は、トン族の伝統的な社会組織形態で、民主的な話し合いによって民間の規約を制定し、社会秩序を維持するもので、原始的な氏族の特徴を持っています。「款約」は民衆の話し合いによって決められ、「款首（かんしゅ）」がその執行を監督し、民主性と厳格さを体现しています。2014年に国家級無形文化遺産に選ばれ、トン族の歴史文化研究の重要な媒体となっています。",
      content: "貴州省黎平県のトン族の「款約（かんやく）」は、トン族の伝統的な社会組織形態で、民主的な話し合いによって民間の規約を制定し、社会秩序を維持するもので、原始的な氏族の特徴を持っています。「款約」は民衆の話し合いによって決められ、「款首（かんしゅ）」がその執行を監督し、民主性と厳格さを体现しています。2014年に国家級無形文化遺産に選ばれ、トン族の歴史文化研究の重要な媒体となっています。",
      coverImage: `${IMAGE_BASE_URL}gheritage/15.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/15.png`,
        `${IMAGE_BASE_URL}gheritage/16.png`
      ],
      batch: "第一批",
      year: "2014",
      createTime: "2014-05-20",
      views: 0
    },
    {
      _id: "n9",
      title: "月也",
      level: "国家级",
      language: "zh-CN",
      category: "传统节庆",
      region: "黎平县南部侗族村寨、以肇兴镇、双江镇、水口镇、龙额镇为核心；从江县北部侗族村寨；榕江县三宝侗寨、栽麻乡",
      description: "侗族“月也”是集体出访做客的联谊活动，流行于黔桂侗寨。主客寨以拦路歌对唱迎送，伴以侗戏、芦笙赛、鼓楼对歌等联欢，历时数日，赠礼回访，传承文化、增进团结，是侗族情感交流与社会和谐的重要载体。",
      content: "侗族“月也”是集体出访做客的联谊活动，流行于黔桂侗寨。主客寨以拦路歌对唱迎送，伴以侗戏、芦笙赛、鼓楼对歌等联欢，历时数日，赠礼回访，传承文化、增进团结，是侗族情感交流与社会和谐的重要载体。",
      coverImage: `${IMAGE_BASE_URL}gheritage/17.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/17.png`,
        `${IMAGE_BASE_URL}gheritage/18.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n9-en",
      title: "Yueye (Inter-Village Visiting)",
      level: "National",
      language: "en-US",
      category: "Traditional Festival",
      region: "Liping County: Southern Dong Villages, centered in Zhaoxing Town, Shuangjiang Town, Shuikou Town, Long'e Town; Congjiang County: Northern Dong Villages; Rongjiang County: Sanbao Dong Village; Zaima Township",
      description: "This inter-village visiting ritual features Blocking Road Song antiphonal singing, supplemented by Dong opera performances and Lusheng competitions. Spanning days with reciprocal gift-giving, it reinforces social cohesion through cultural reciprocity.",
      content: "This inter-village visiting ritual features Blocking Road Song antiphonal singing, supplemented by Dong opera performances and Lusheng competitions. Spanning days with reciprocal gift-giving, it reinforces social cohesion through cultural reciprocity.",
      coverImage: `${IMAGE_BASE_URL}gheritage/17.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/17.png`,
        `${IMAGE_BASE_URL}gheritage/18.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n9-ja",
      title: "月也（ユエイェ）",
      level: "国家級",
      language: "ja-JP",
      category: "伝統祭礼",
      region: "黎平県南部トン族村落（肇興鎮・双江鎮・水口鎮・龍額鎮を中核に）；従江県北部トン族村落；榕江県三宝トン寨／栽麻郷",
      description: "ドン族の「月也」は、貴州省と広西チワン族自治区のドン族の村々で流行っている集団訪問活動です。主となる村は「道止まれ歌」のかけ歌で迎えをし、更にトン族の劇、ろしょうの試合、鼓楼のかけ歌などと伴って、数日かけてプレゼント交換したり、訪問し合ったりして文化が伝承されて一枚岩にしたのは、トン族精神面な交流と社会的な調和の担い手となります。",
      content: "ドン族の「月也」は、貴州省と広西チワン族自治区のドン族の村々で流行っている集団訪問活動です。主となる村は「道止まれ歌」のかけ歌で迎えをし、更にトン族の劇、ろしょうの試合、鼓楼のかけ歌などと伴って、数日かけてプレゼント交換したり、訪問し合ったりして文化が伝承されて一枚岩にしたのは、トン族精神面な交流と社会的な調和の担い手となります。",
      coverImage: `${IMAGE_BASE_URL}gheritage/17.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/17.png`,
        `${IMAGE_BASE_URL}gheritage/18.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n10",
      title: "苗族芦笙舞",
      level: "国家级",
      language: "zh-CN",
      category: "传统舞蹈",
      region: "黎平县地坪镇滚大村、南部侗族村寨；从江县丙妹镇、斗里镇台里村、加勉乡党翁村；榕江县八开镇、乐里镇、平永镇、古州镇、塔石乡、兴华乡",
      description: "苗族芦笙舞源于古代祭祀仪式，是祭祖及节庆传统舞蹈，流行于贵州等地。形式含吹笙伴舞、领舞，动作多样反映农耕文化，各具地域特色，现濒临失传需保护。",
      content: "苗族芦笙舞源于古代祭祀仪式，是祭祖及节庆传统舞蹈，流行于贵州等地。形式含吹笙伴舞、领舞，动作多样反映农耕文化，各具地域特色，现濒临失传需保护。",
      coverImage: `${IMAGE_BASE_URL}gheritage/19.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/19.png`,
        `${IMAGE_BASE_URL}gheritage/20.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n10-en",
      title: "Lusheng Dance of the Miao Ethnic Group",
      level: "National",
      language: "en-US",
      category: "Traditional Dance",
      region: "Liping County: Gunda Village, Diping Town; Southern Dong Villages; Congjiang County: Bingmei Town; Taili Village, Douli Town; Dangweng Village, Jiamian Township; Rongjiang County: Bakai Town, Leli Town, Pingyong Town; Guzhou Town; Tashi Township, Xinghua Township",
      description: "Evolving from ancient sacrificial rites, this reed-pipe accompanied dance with leader-chorus patterns reflects agrarian symbolism. Facing endangerment, its regional variations in Guizhou demand urgent documentation.",
      content: "Evolving from ancient sacrificial rites, this reed-pipe accompanied dance with leader-chorus patterns reflects agrarian symbolism. Facing endangerment, its regional variations in Guizhou demand urgent documentation.",
      coverImage: `${IMAGE_BASE_URL}gheritage/19.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/19.png`,
        `${IMAGE_BASE_URL}gheritage/20.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n10-ja",
      title: "ミャオ族蘆笙舞（ローシェンぶ）",
      level: "国家級",
      language: "ja-JP",
      category: "伝統舞踊",
      region: "黎平県地坪鎮滚大村／南部トン族村落；従江県丙妹鎮／斗里鎮台里村／加勉郷党翁村；榕江県八開鎮・楽里鎮・平永鎮／古州鎮／塔石郷・興華郷",
      description: "ミャオ族のろしょうの舞は古代の祭祀儀式から由来し、祖先崇拝や祝祭における伝統舞踊として貴州省とその周辺で流行っています。ろしょうを演奏しながら踊るという「吹笙伴舞」やリーダーが先導する「領舞」を含み、多様な動きが農耕文化を反映し、各地域の特色を持っています。今は継承者が少なくなり無くなるところで、なるべく早く保護対策を出すべきです。",
      content: "ミャオ族のろしょうの舞は古代の祭祀儀式から由来し、祖先崇拝や祝祭における伝統舞踊として貴州省とその周辺で流行っています。ろしょうを演奏しながら踊るという「吹笙伴舞」やリーダーが先導する「領舞」を含み、多様な動きが農耕文化を反映し、各地域の特色を持っています。今は継承者が少なくなり無くなるところで、なるべく早く保護対策を出すべきです。",
      coverImage: `${IMAGE_BASE_URL}gheritage/19.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/19.png`,
        `${IMAGE_BASE_URL}gheritage/20.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n11",
      title: "侗年",
      level: "国家级",
      language: "zh-CN",
      category: "传统节庆",
      region: "黎平县肇兴侗寨、岩洞镇、双江镇；从江县贯洞镇、小黄侗寨；榕江县三宝侗寨、栽麻乡、乐里镇",
      description: "侗年是侗族感恩祖先、团圆庆丰收的传统节日，流行于贵州榕江等地。以“斗莎”祭祖歌传承伦理文化，村寨团拜弘扬传统，承载历史记忆，具重要研究价值。",
      content: "侗年是侗族感恩祖先、团圆庆丰收的传统节日，流行于贵州榕江等地。以“斗莎”祭祖歌传承伦理文化，村寨团拜弘扬传统，承载历史记忆，具重要研究价值。",
      coverImage: `${IMAGE_BASE_URL}gheritage/21.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/21.png`,
        `${IMAGE_BASE_URL}gheritage/22.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n11-en",
      title: "Dong New Year",
      level: "National",
      language: "en-US",
      category: "Traditional Festival",
      region: "Liping County: Zhaoxing Dong Village; Yandong Town, Shuangjiang Town; Congjiang County: Guandong Town; Xiaohuang Dong Village; Rongjiang County: Sanbao Dong Village; Zaima Township, Leli Town",
      description: "Celebrated in Rongjiang, this harvest thanksgiving features Dousha ancestral hymns transmitting ethical codes. Village gatherings sustain historical memory, offering rich anthropological research material.",
      content: "Celebrated in Rongjiang, this harvest thanksgiving features Dousha ancestral hymns transmitting ethical codes. Village gatherings sustain historical memory, offering rich anthropological research material.",
      coverImage: `${IMAGE_BASE_URL}gheritage/21.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/21.png`,
        `${IMAGE_BASE_URL}gheritage/22.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n11-ja",
      title: "トン年（ドンねん）",
      level: "国家級",
      language: "ja-JP",
      category: "伝統祭礼",
      region: "黎平県肇興トン寨／岩洞鎮・双江鎮；従江県貫洞鎮／小黄トン寨；榕江県三宝トン寨／栽麻郷・楽里鎮",
      description: "侗年はトン族が祖先への感謝を捧げ、家族団らんで豊作を祝う伝統的な祭りで、貴州省榕江地域で流行っています。「斗莎（ドウシャ）」と呼ばれる祖先祭りの歌で倫理文化を継承し、村々の相互訪問で伝統を伝えます。この祭礼は、歴史的記憶を背負い、重要な研究価値があります。",
      content: "侗年はトン族が祖先への感謝を捧げ、家族団らんで豊作を祝う伝統的な祭りで、貴州省榕江地域で流行っています。「斗莎（ドウシャ）」と呼ばれる祖先祭りの歌で倫理文化を継承し、村々の相互訪問で伝統を伝えます。この祭礼は、歴史的記憶を背負い、重要な研究価値があります。",
      coverImage: `${IMAGE_BASE_URL}gheritage/21.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/21.png`,
        `${IMAGE_BASE_URL}gheritage/22.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n12",
      title: "苗族服饰",
      level: "国家级",
      language: "zh-CN",
      category: "传统服饰",
      region: "黎平县的苗族服饰多属中裙系（裙长至小腿中部），分布于县内多个乡镇，如双江镇、水口镇等地，特色村寨：肇兴镇；从江县的苗族服饰以中裙系和短裙系为主，兼具地域特色和支系差异：中裙系：斗里镇、加勉乡，短裙系：大塘村、尧等村；榕江苗族服饰类型丰富，包含中裙系、短裙系及特殊支系服饰：摆贝式（中裙系）：兴华乡摆贝村，滚仲式（中裙系）：平江乡滚仲村，短裙系：兴华乡、八开镇，特殊支系：朗洞镇卡寨村",
      description: "苗族服饰因支系、地域形成多样风格，湘西型与贵州各支系各具特色，运用蜡染、刺绣等工艺，纹样象征自然与历史。如台江“穿在身上的史书”、丹寨百鸟衣体现鸟图腾崇拜，关岭服饰暗含迁徙记忆，纳雍箐苗头饰保留远古族徽，是苗族文化、信仰与技艺的活态载体。",
      content: "苗族服饰因支系、地域形成多样风格，湘西型与贵州各支系各具特色，运用蜡染、刺绣等工艺，纹样象征自然与历史。如台江“穿在身上的史书”、丹寨百鸟衣体现鸟图腾崇拜，关岭服饰暗含迁徙记忆，纳雍箐苗头饰保留远古族徽，是苗族文化、信仰与技艺的活态载体。",
      coverImage: `${IMAGE_BASE_URL}gheritage/23.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/23.png`,
        `${IMAGE_BASE_URL}gheritage/24.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n12-en",
      title: "Miao Ethnic Costumes",
      level: "National",
      language: "en-US",
      category: "Traditional Costume",
      region: "Liping County: Miao costumes are predominantly mid-length skirts (reaching mid-calf), distributed across townships like Shuangjiang Town and Shuikou Town. Featured Village: Zhaoxing Town; Congjiang County: Miao costumes include mid-length and short skirts, reflecting regional and sub-group variations: Mid-length: Douli Town; Jiamian Township, Short skirts: Datang Village, Yaodeng Village; Rongjiang County: Diverse Miao costumes, including mid-length, short skirts, and unique sub-group styles: Baibei Style (mid-length): Baibei Village, Xinghua Township, Gunzhong Style (mid-length): Gunzhong Village, Pingjiang Township, Short skirts: Xinghua Township, Bakai Town, Special sub-group: Kazhai Village, Langdong Town",
      description: "Branch-specific styles integrate batik and embroidery symbolizing natural/historical narratives. Notable examples: Taijiang's \"History Books Worn on the Body\", Danzhai's Bird Totem Robes, and Nayong's ancient clan crest headdresses—living embodiments of Miao cosmology.",
      content: "Branch-specific styles integrate batik and embroidery symbolizing natural/historical narratives. Notable examples: Taijiang's \"History Books Worn on the Body\", Danzhai's Bird Totem Robes, and Nayong's ancient clan crest headdresses—living embodiments of Miao cosmology.",
      coverImage: `${IMAGE_BASE_URL}gheritage/23.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/23.png`,
        `${IMAGE_BASE_URL}gheritage/24.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n12-ja",
      title: "ミャオ族衣装",
      level: "国家級",
      language: "ja-JP",
      category: "伝統衣装",
      region: "黎平県のミャオ族衣装（中丈スカート型／スカート丈がふくらはぎ中部まで）：県内複数郷鎮に分布しており、双江鎮、水口鎮などが代表的です。特色ある村落：肇興鎮；従江県のミャオ族衣装（中丈スカート型・短丈スカート型が主流）：地域特色と支族差異を併せ持ちます。中丈スカート型：斗里鎮／加勉郷、短丈スカート型：大塘村・堯等村；榕江県ミャオ族衣装（多様なスタイルを含む）：中丈スカート型：擺貝式：興華郷擺貝村、滾仲式：平江郷滾仲村、短丈スカート型：興華郷／八開鎮、特殊支族：朗洞鎮卡寨村",
      description: "ミャオ族の衣装は、支族や地域によって多様なスタイルを形成しています。湖南省西部型と貴州省の各支系はそれぞれ特徴があり、蝋染めや刺繍などの工芸技術を用い、自然と歴史を象徴します。例えば台江県の「着ている歴史の本」、丹寨県の百鳥衣は鳥トーテムへの崇拝を表し、関嶺県の衣装には民族移動の記憶が込められ、納雍県箐苗の頭飾りには古代の氏族徽章が残されています。これらはミャオ族の文化、信仰、伝統工芸を生き生きさせています。",
      content: "ミャオ族の衣装は、支族や地域によって多様なスタイルを形成しています。湖南省西部型と貴州省の各支系はそれぞれ特徴があり、蝋染めや刺繍などの工芸技術を用い、自然と歴史を象徴します。例えば台江県の「着ている歴史の本」、丹寨県の百鳥衣は鳥トーテムへの崇拝を表し、関嶺県の衣装には民族移動の記憶が込められ、納雍県箐苗の頭飾りには古代の氏族徽章が残されています。これらはミャオ族の文化、信仰、伝統工芸を生き生きさせています。",
      coverImage: `${IMAGE_BASE_URL}gheritage/23.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/23.png`,
        `${IMAGE_BASE_URL}gheritage/24.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n13",
      title: "苗族鼓藏节",
      level: "国家级",
      language: "zh-CN",
      category: "传统节庆",
      region: "榕江县（核心分布区）兴华乡摆贝苗寨、平江乡滚仲村；从江县（月亮山腹地神秘传承区）加鸠镇加牙苗寨、加勉乡党翁村；黎平县（边缘分布与跨区域联动）南部苗族村寨",
      description: "榕江苗族鼓藏节系国家级非遗，苗族最隆重祭祖盛典，每13年举办、持续三年。含杀牛祭祖、跳木鼓舞等仪式，祭祀祖先及自然神，祈愿五谷丰登、人畜兴旺，承载苗族历史记忆与民族精神，是文化传承重要载体。",
      content: "榕江苗族鼓藏节系国家级非遗，苗族最隆重祭祖盛典，每13年举办、持续三年。含杀牛祭祖、跳木鼓舞等仪式，祭祀祖先及自然神，祈愿五谷丰登、人畜兴旺，承载苗族历史记忆与民族精神，是文化传承重要载体。",
      coverImage: `${IMAGE_BASE_URL}gheritage/25.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/25.png`,
        `${IMAGE_BASE_URL}gheritage/26.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n13-en",
      title: "Guzang Festival of the Miao Ethnic Group",
      level: "National",
      language: "en-US",
      category: "Traditional Festival",
      region: "Rongjiang County (Core Area): Baibei Miao Village, Xinghua Township; Gunzhong Village, Pingjiang Township; Congjiang County (Mystical Heritage in Moon Mountain): Jiaya Miao Village, Jiajiu Town; Dangweng Village, Jiamian Township; Liping County (Peripheral Distribution and Cross-regional Linkage): Southern Miao Villages",
      description: "As a triennial National ICH event, this 13-year-cycle ancestral worship involves bull sacrifices and wooden-drum dances, petitioning deities for agricultural prosperity—a core vehicle for Miao spiritual continuity.",
      content: "As a triennial National ICH event, this 13-year-cycle ancestral worship involves bull sacrifices and wooden-drum dances, petitioning deities for agricultural prosperity—a core vehicle for Miao spiritual continuity.",
      coverImage: `${IMAGE_BASE_URL}gheritage/25.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/25.png`,
        `${IMAGE_BASE_URL}gheritage/26.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n13-ja",
      title: "ミャオ族鼓蔵祭（グーザンさい）",
      level: "国家級",
      language: "ja-JP",
      category: "伝統祭礼",
      region: "榕江県（中核分布地域）興華郷擺貝ミャオ寨／平江郷滾仲村；従江県（月亮山奥地神秘伝承地域）加鳩鎮加牙ミャオ寨／加勉郷党翁村；黎平県（周辺分布・越境連動地域）南部ミャオ族村落",
      description: "榕江ミャオ族鼓蔵節（こぞうせつ）は国家級無形文化遺産に指定され、ミャオ族が13年に一度、3年にわたって行う最も盛大な祖先祭祀の節です。牛で祖先を祀る儀式や木太鼓の舞を踊るなどの伝統儀礼を通じ、祖先や自然の神々へ、五穀豊穣や人畜の繁栄を祈ります。この節はミャオ族の歴史的記憶と民族精神を脈々と伝え、民族文化継承の担い手として重要な役割を果たしています。",
      content: "榕江ミャオ族鼓蔵節（こぞうせつ）は国家級無形文化遺産に指定され、ミャオ族が13年に一度、3年にわたって行う最も盛大な祖先祭祀の節です。牛で祖先を祀る儀式や木太鼓の舞を踊るなどの伝統儀礼を通じ、祖先や自然の神々へ、五穀豊穣や人畜の繁栄を祈ります。この節はミャオ族の歴史的記憶と民族精神を脈々と伝え、民族文化継承の担い手として重要な役割を果たしています。",
      coverImage: `${IMAGE_BASE_URL}gheritage/25.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/25.png`,
        `${IMAGE_BASE_URL}gheritage/26.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n14",
      title: "苗族栽岩习俗",
      level: "国家级",
      language: "zh-CN",
      category: "传统规约",
      region: "榕江县兴华乡摆贝苗寨、平江镇高鸟苗寨、古州镇高懂村",
      description: "苗族栽岩是议榔制习惯法的载体，通过无文字口头规约约束行为，以竖石象征法规不可违。涵盖个人至多寨联合议定，维护社会秩序，兼具历史研究价值，是苗族传统治理重要形式。",
      content: "苗族栽岩是议榔制习惯法的载体，通过无文字口头规约约束行为，以竖石象征法规不可违。涵盖个人至多寨联合议定，维护社会秩序，兼具历史研究价值，是苗族传统治理重要形式。",
      coverImage: `${IMAGE_BASE_URL}gheritage/27.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/27.png`,
        `${IMAGE_BASE_URL}gheritage/28.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n14-en",
      title: "Rock Planting of the Miao Ethnic Group",
      level: "National",
      language: "en-US",
      category: "Traditional Regulation",
      region: "Rongjiang County: Baibei Miao Village, Xinghua Township; Gaoniao Miao Village, Pingjiang Town; Gaodong Village, Guzhou Town",
      description: "This Miao customary law system uses erected stones (Zaiyan) as immutable legal symbols. Governing individual to inter-village affairs through oral codes, it preserves preliterate jurisprudence models with unique ethnological value.",
      content: "This Miao customary law system uses erected stones (Zaiyan) as immutable legal symbols. Governing individual to inter-village affairs through oral codes, it preserves preliterate jurisprudence models with unique ethnological value.",
      coverImage: `${IMAGE_BASE_URL}gheritage/27.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/27.png`,
        `${IMAGE_BASE_URL}gheritage/28.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "n14-ja",
      title: "ミャオ族岩据え習俗（ザイガンしゅうぞく）",
      level: "国家級",
      language: "ja-JP",
      category: "伝統規範",
      region: "榕江県興華郷擺貝ミャオ寨／平江鎮高鳥ミャオ寨／古州鎮高懂村",
      description: "ミャオ族の「栽岩（さいがん）」は議榔制（ぎろうせい）という慣習法の具現形態で、文字でなく口頭規約によって人々の行動を規制し、地面に立てた石が法規の不可侵性を象徴しています。個人から村々に至る共同議定を含め、社会秩序の維持を図るとともに歴史研究の価値を兼ね備えてミャオ族伝統的な管理の重要形態です。",
      content: "ミャオ族の「栽岩（さいがん）」は議榔制（ぎろうせい）という慣習法の具現形態で、文字でなく口頭規約によって人々の行動を規制し、地面に立てた石が法規の不可侵性を象徴しています。個人から村々に至る共同議定を含め、社会秩序の維持を図るとともに歴史研究の価値を兼ね備えてミャオ族伝統的な管理の重要形態です。",
      coverImage: `${IMAGE_BASE_URL}gheritage/27.png`,
      images: [
        `${IMAGE_BASE_URL}gheritage/27.png`,
        `${IMAGE_BASE_URL}gheritage/28.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    }
    
  ],
  
  // 省级非遗数据
  provincial: [
    {
      _id: "p1",
      title: "侗族河边腔",
      level: "省级",
      language: "zh-CN",
      category: "传统口头文学",
      region: "黎平县、从江县",
      description: "侗族河歌，又称侗族河边腔，侗语称嘎孖或者嘎尼阿，属侗族无伴奏音乐小歌类中的歌调之一，是侗族青年男女在劳动之余，行歌坐夜、寻求伴侣和老年人在劝世训诫时演唱的一种歌调。",
      content: "侗族河歌，又称侗族河边腔，侗语称嘎孖或者嘎尼阿，属侗族无伴奏音乐小歌类中的歌调之一，是侗族青年男女在劳动之余，行歌坐夜、寻求伴侣和老年人在劝世训诫时演唱的一种歌调。",
      coverImage: `${IMAGE_BASE_URL}heritage/1.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/1.png`,
        `${IMAGE_BASE_URL}heritage/2.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p1-en",
      title: "Riverside Chant of the Dong Ethnic Group (Dong Hebianqiang)",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Oral Literature",
      region: "Liping County, Congjiang County",
      description: "As a sub-genre of the Xiaoge (unaccompanied folk songs) tradition of the Dong ethnic group, Dong Riverside Songs, also known as Dong Hebianqiang (Riverside Chant), are performed by Dong youth during post-labor leisure hours at nighttime social gatherings for courtship purposes, as well as by elders offering didactic parables through song.",
      content: "As a sub-genre of the Xiaoge (unaccompanied folk songs) tradition of the Dong ethnic group, Dong Riverside Songs, also known as Dong Hebianqiang (Riverside Chant), are performed by Dong youth during post-labor leisure hours at nighttime social gatherings for courtship purposes, as well as by elders offering didactic parables through song.",
      coverImage: `${IMAGE_BASE_URL}heritage/1.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/1.png`,
        `${IMAGE_BASE_URL}heritage/2.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p1-ja",
      title: "トン族河辺調（かへんちょう）",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な口承文学",
      region: "黎平県、従江県",
      description: "トン族河歌、別名「トン族河辺調」は、現地語で「ガー・マー（嘎孖）」または「ガー・ニア（嘎尼阿）」と呼ばれる無伴奏声楽「小歌（シャオガー）」の一種です。労働の余暇に若い男女が夜通し歌を交わして伴侶を探す恋愛儀礼で用いられるだけでなく、年長者が人生訓を説く際にも歌われる独特の歌唱様式です。",
      content: "トン族河歌、別名「トン族河辺調」は、現地語で「ガー・マー（嘎孖）」または「ガー・ニア（嘎尼阿）」と呼ばれる無伴奏声楽「小歌（シャオガー）」の一種です。労働の余暇に若い男女が夜通し歌を交わして伴侶を探す恋愛儀礼で用いられるだけでなく、年長者が人生訓を説く際にも歌われる独特の歌唱様式です。",
      coverImage: `${IMAGE_BASE_URL}heritage/1.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/1.png`,
        `${IMAGE_BASE_URL}heritage/2.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p2",
      title: "苗族刺绣",
      level: "省级",
      language: "zh-CN",
      category: "传统技艺",
      region: "黎平县、从江县、榕江县",
      description: "苗族刺绣具有传承历史文化的作用，主要表现在刺绣的图案上。几乎每一个刺绣图案纹样都有一个来历或传说，都深含民族的文化，都是民族情感的表达，是苗族历史与生活的展示。",
      content: "苗族刺绣具有传承历史文化的作用，主要表现在刺绣的图案上。几乎每一个刺绣图案纹样都有一个来历或传说，都深含民族的文化，都是民族情感的表达，是苗族历史与生活的展示。",
      coverImage: `${IMAGE_BASE_URL}heritage/3.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/3.png`,
        `${IMAGE_BASE_URL}heritage/4.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p2-en",
      title: "Miao Embroidery",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Skill",
      region: "Liping County, Congjiang County, Rongjiang County",
      description: "Miao embroidery serves as a vital medium for cultural transmission, with its historical narratives encoded in intricate patterns. Nearly every motif carries a legend or origin story rooted in Miao cosmology, collectively embodying the ethnic group's collective memory, emotional expressions, and visual chronicles of their history and daily life.",
      content: "Miao embroidery serves as a vital medium for cultural transmission, with its historical narratives encoded in intricate patterns. Nearly every motif carries a legend or origin story rooted in Miao cosmology, collectively embodying the ethnic group's collective memory, emotional expressions, and visual chronicles of their history and daily life.",
      coverImage: `${IMAGE_BASE_URL}heritage/3.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/3.png`,
        `${IMAGE_BASE_URL}heritage/4.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p2-ja",
      title: "ミャオ族伝統刺繍（でんしゅうししゅう）",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な工芸技術",
      region: "黎平県、従江県、榕江県",
      description: "ミャオ族伝統刺繍は、歴史文化の継承機能を有する貴重な民族芸術です。その特徴は刺繍文様に顕著に表れており、ほぼ全ての図柄に深遠な物語や言い伝えが込められております。一つ一つの文様が民族の精神世界を体現するだけでなく、ミャオ族の生活史を彩る生きた文化遺産ともなっております。",
      content: "ミャオ族伝統刺繍は、歴史文化の継承機能を有する貴重な民族芸術です。その特徴は刺繍文様に顕著に表れており、ほぼ全ての図柄に深遠な物語や言い伝えが込められております。一つ一つの文様が民族の精神世界を体現するだけでなく、ミャオ族の生活史を彩る生きた文化遺産ともなっております。",
      coverImage: `${IMAGE_BASE_URL}heritage/3.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/3.png`,
        `${IMAGE_BASE_URL}heritage/4.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p3",
      title: "苗族招龙节",
      level: "省级",
      language: "zh-CN",
      category: "传统节庆",
      region: "榕江县",
      description: "苗族招龙节是苗族地区特有的一种民俗活动，和苗家鼓藏节一样时隔13年过一次。苗族同胞把龙视为兴风降雨的神灵，作为消灾免难，祈祷来年，吉祥如意，风调雨顺，五谷丰登，幸福安康，发富发贵之要意。",
      content: "苗族招龙节是苗族地区特有的一种民俗活动，和苗家鼓藏节一样时隔13年过一次。苗族同胞把龙视为兴风降雨的神灵，作为消灾免难，祈祷来年，吉祥如意，风调雨顺，五谷丰登，幸福安康，发富发贵之要意。",
      coverImage: `${IMAGE_BASE_URL}heritage/5.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/5.png`,
        `${IMAGE_BASE_URL}heritage/6.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p3-en",
      title: "Miao Dragon Summoning Festival",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Festival",
      region: "Rongjiang County",
      description: "Held every 13 years—akin to the Miao Guzang Festival—this ritual is unique to Miao communities. The Miao people revere the dragon as a divine entity governing wind and rain. The ceremony symbolizes prayers for disaster prevention, future prosperity, agricultural abundance, communal well-being, and the fulfillment of auspicious aspirations.",
      content: "Held every 13 years—akin to the Miao Guzang Festival—this ritual is unique to Miao communities. The Miao people revere the dragon as a divine entity governing wind and rain. The ceremony symbolizes prayers for disaster prevention, future prosperity, agricultural abundance, communal well-being, and the fulfillment of auspicious aspirations.",
      coverImage: `${IMAGE_BASE_URL}heritage/5.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/5.png`,
        `${IMAGE_BASE_URL}heritage/6.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p3-ja",
      title: "ミャオ族龍神招き祭り（りゅうじんよびまつり）",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な祭り",
      region: "榕江県",
      description: "ミャオ族龍神招き祭りは、中国貴州省を中心としたミャオ族居住地に伝わる特殊な民俗儀礼で、ミャオ族のコーザン節（牯臧節）と同様に13年に一度の周期で行われてす。ミャオ族の人々は龍神を風雨を司る神聖な存在として崇め、この祭礼を通じて災厄を祓い、来る年の吉祥如意（きっしょうにょい）、五穀豊穣（ごこくほうじょう）、家族の平安、そして繁栄を祈願する重要な宗教儀式です。",
      content: "ミャオ族龍神招き祭りは、中国貴州省を中心としたミャオ族居住地に伝わる特殊な民俗儀礼で、ミャオ族のコーザン節（牯臧節）と同様に13年に一度の周期で行われてす。ミャオ族の人々は龍神を風雨を司る神聖な存在として崇め、この祭礼を通じて災厄を祓い、来る年の吉祥如意（きっしょうにょい）、五穀豊穣（ごこくほうじょう）、家族の平安、そして繁栄を祈願する重要な宗教儀式です。",
      coverImage: `${IMAGE_BASE_URL}heritage/5.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/5.png`,
        `${IMAGE_BASE_URL}heritage/6.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p4",
      title: "侗族摔跤节",
      level: "省级",
      language: "zh-CN",
      category: "传统节庆",
      region: "黎平县、从江县、榕江县",
      description: "摔跤节是贵州黎平县坑洞、四寨、构洞村 一带侗族人民的传统节日。节日源于对祖先的一位打虎英雄的纪念，传说已有千年的历史。",
      content: "摔跤节是贵州黎平县坑洞、四寨、构洞村 一带侗族人民的传统节日。节日源于对祖先的一位打虎英雄的纪念，传说已有千年的历史。",
      coverImage: `${IMAGE_BASE_URL}heritage/7.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/7.png`,
        `${IMAGE_BASE_URL}heritage/8.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p4-en",
      title: "Dong Wrestling Festival",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Festival",
      region: "Liping County, Congjiang County, Rongjiang County",
      description: "Centered in the villages of Kengdong, Sizhai, and Goudong in Liping County, Guizhou, this millennium-old tradition honors a legendary tiger-slaying ancestor. The festival blends athletic competition with ancestral veneration, reflecting Dong cultural values of heroism and communal bonding.",
      content: "Centered in the villages of Kengdong, Sizhai, and Goudong in Liping County, Guizhou, this millennium-old tradition honors a legendary tiger-slaying ancestor. The festival blends athletic competition with ancestral veneration, reflecting Dong cultural values of heroism and communal bonding.",
      coverImage: `${IMAGE_BASE_URL}heritage/7.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/7.png`,
        `${IMAGE_BASE_URL}heritage/8.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p4-ja",
      title: "トン族組技祭（くみわざさい）",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な祭り",
      region: "黎平県、従江県、榕江県",
      description: "トン族組技祭は、中国貴州省黎平県の坑洞（ケンドン）・四寨（スージャイ）・構洞（ゴウドン）村周辺に伝承されるトン族の伝統行事です。この祭事は、祖先の虎退治の英雄を称える儀礼に由来し、千年以上の伝統を有するとされる民族の記憶継承儀礼です。",
      content: "トン族組技祭は、中国貴州省黎平県の坑洞（ケンドン）・四寨（スージャイ）・構洞（ゴウドン）村周辺に伝承されるトン族の伝統行事です。この祭事は、祖先の虎退治の英雄を称える儀礼に由来し、千年以上の伝統を有するとされる民族の記憶継承儀礼です。",
      coverImage: `${IMAGE_BASE_URL}heritage/7.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/7.png`,
        `${IMAGE_BASE_URL}heritage/8.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p5",
      title: "蓝靛靛染工艺",
      level: "省级",
      language: "zh-CN",
      category: "传统手工技艺",
      region: "黎平县、榕江县",
      description: "贵州广大布依族、苗族都喜欢种植蓝靛和进行蓝靛染。据史料记载，贵州的布依族、苗族的先人在明以前就已经掌握了靛染技艺。用蓝靛草加工成蓝靛，用蓝靛作染料，用土碱、烧酒、石灰、牛皮胶作辅料，经过手工操作，把布染成月白、月蓝、蓝、深蓝、浅灰、深灰、青等色。",
      content: "贵州广大布依族、苗族都喜欢种植蓝靛和进行蓝靛染。据史料记载，贵州的布依族、苗族的先人在明以前就已经掌握了靛染技艺。用蓝靛草加工成蓝靛，用蓝靛作染料，用土碱、烧酒、石灰、牛皮胶作辅料，经过手工操作，把布染成月白、月蓝、蓝、深蓝、浅灰、深灰、青等色。",
      coverImage: `${IMAGE_BASE_URL}heritage/9.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/9.png`,
        `${IMAGE_BASE_URL}heritage/10.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p5-en",
      title: "Indigo Dyeing",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Craftmanship",
      region: "Liping County, Rongjiang County",
      description: "The Bouyei and Miao ethnic groups in Guizhou love to grow indigo plants and engage in indigo dyeing. According to historical records, the ancestors of the Bouyei and Miao ethnic groups in Guizhou had already mastered the indigo dyeing technique before the Ming Dynasty. Indigo plants are processed into indigo, which is used as a dye. With native alkali, distilled liquor, lime, and cowhide glue as auxiliary materials, through manual operations, the cloth is dyed into colors such as pale blue, light blue, blue, dark blue, light gray, dark gray, and blackish blue.",
      content: "The Bouyei and Miao ethnic groups in Guizhou love to grow indigo plants and engage in indigo dyeing. According to historical records, the ancestors of the Bouyei and Miao ethnic groups in Guizhou had already mastered the indigo dyeing technique before the Ming Dynasty. Indigo plants are processed into indigo, which is used as a dye. With native alkali, distilled liquor, lime, and cowhide glue as auxiliary materials, through manual operations, the cloth is dyed into colors such as pale blue, light blue, blue, dark blue, light gray, dark gray, and blackish blue.",
      coverImage: `${IMAGE_BASE_URL}heritage/9.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/9.png`,
        `${IMAGE_BASE_URL}heritage/10.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p5-ja",
      title: "藍染め工芸",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な手工芸技術",
      region: "黎平県、榕江県",
      description: "貴州省におけるプイ族、ミャオ族の多くは藍染めのために藍草を栽培する。史料に記載されたように、プイ族、ミャオ族の祖先が明の時代よりも前から藍染めの技法を既に把握していた。藍草から青藍色を取って染料にし、他の材料として土法アルカリ、焼酎、石灰、牛皮膠などを用い、手作業によって布を薄い白、薄い青、藍、青藍色、灰色、濃い灰色、青などに染めるのだ。",
      content: "貴州省におけるプイ族、ミャオ族の多くは藍染めのために藍草を栽培する。史料に記載されたように、プイ族、ミャオ族の祖先が明の時代よりも前から藍染めの技法を既に把握していた。藍草から青藍色を取って染料にし、他の材料として土法アルカリ、焼酎、石灰、牛皮膠などを用い、手作業によって布を薄い白、薄い青、藍、青藍色、灰色、濃い灰色、青などに染めるのだ。",
      coverImage: `${IMAGE_BASE_URL}heritage/9.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/9.png`,
        `${IMAGE_BASE_URL}heritage/10.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p6",
      title: "四十八寨侗族服饰",
      level: "省级",
      language: "zh-CN",
      category: "民俗",
      region: "黎平县、榕江县",
      description: "四十八寨侗族服饰，传承于贵州省黎平县和榕江县的接边地区。基本内容分为两上装和下装两大块：上装——分为青色、朱红色，自制侗布两种，配披肩，左右手为统袖，齐腋下，花绫块，系月带。下装——分为百缀裙（前后两块相围），前围腰（齐小腿），后围腰（齐臀部略下）。绑腿、无跟翘光布鞋。整个盛装穿戴显得华丽富贵，实为侗族女装之佳品。",
      content: "四十八寨侗族服饰，传承于贵州省黎平县和榕江县的接边地区。基本内容分为两上装和下装两大块：上装——分为青色、朱红色，自制侗布两种，配披肩，左右手为统袖，齐腋下，花绫块，系月带。下装——分为百缀裙（前后两块相围），前围腰（齐小腿），后围腰（齐臀部略下）。绑腿、无跟翘光布鞋。整个盛装穿戴显得华丽富贵，实为侗族女装之佳品。",
      coverImage: `${IMAGE_BASE_URL}heritage/11.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/11.png`,
        `${IMAGE_BASE_URL}heritage/12.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p6-en",
      title: "The Dong ethnic group's costumes from Forty-eight Villages Style",
      level: "Provincial",
      language: "en-US",
      category: "Customs",
      region: "Liping County, Rongjiang County",
      description: "The Dong ethnic group's costumes from Forty-eight Villages Style are passed down in the border regions between Liping County and Rongjiang County, Guizhou Province. These costumes include two parts: the upper and lower garments. Upper garments: There are two styles of self-made Dong cloth upper garments, in cyan and vermilion. The upper garment comes with short sleeves. It is accessorized with a shawl, adorned with patterns of flowered silk pieces, and fastened with a belt. Lower garments: They include a patchwork skirt (surrounded by two pieces, one in the front and one at the back), a front apron (reaching the lower legs), a back apron (slightly below the buttocks), leggings, and backless fabric-covered shoes with upturned head. When the whole festive attire is worn, it looks magnificent and luxurious, truly a fine example of Dong women's clothing.",
      content: "The Dong ethnic group's costumes from Forty-eight Villages Style are passed down in the border regions between Liping County and Rongjiang County, Guizhou Province. These costumes include two parts: the upper and lower garments. Upper garments: There are two styles of self-made Dong cloth upper garments, in cyan and vermilion. The upper garment comes with short sleeves. It is accessorized with a shawl, adorned with patterns of flowered silk pieces, and fastened with a belt. Lower garments: They include a patchwork skirt (surrounded by two pieces, one in the front and one at the back), a front apron (reaching the lower legs), a back apron (slightly below the buttocks), leggings, and backless fabric-covered shoes with upturned head. When the whole festive attire is worn, it looks magnificent and luxurious, truly a fine example of Dong women's clothing.",
      coverImage: `${IMAGE_BASE_URL}heritage/11.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/11.png`,
        `${IMAGE_BASE_URL}heritage/12.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p6-ja",
      title: "四十八寨トン族衣装",
      level: "省級",
      language: "ja-JP",
      category: "民俗",
      region: "黎平県、榕江県",
      description: "四十八寨トン族の服と飾りは、貴州省黎平県と榕江県の境界地域に伝承されたものです。主に上着と下半身のズボン、スカートという二つに分かれます。上着は手織りの生地が青と朱に分かれ、左腕も右腕も長く弛めた袖は脇下並みで、肩掛けを乗せて、刺繡の柄をつけ、胴体は帯締めで固める。下半身のプリーツスカートは前後二枚で、正面は脛並み、後ろは太ももの半ばくらいになります。腿は布で纏われ、ヒールなしの光布の靴は頭が跳ねています。華やかな服装を全て身に着ければ、栄華を極めてトン族女装の最高傑作だと言っても過言ではありません。",
      content: "四十八寨トン族の服と飾りは、貴州省黎平県と榕江県の境界地域に伝承されたものです。主に上着と下半身のズボン、スカートという二つに分かれます。上着は手織りの生地が青と朱に分かれ、左腕も右腕も長く弛めた袖は脇下並みで、肩掛けを乗せて、刺繡の柄をつけ、胴体は帯締めで固める。下半身のプリーツスカートは前後二枚で、正面は脛並み、後ろは太ももの半ばくらいになります。腿は布で纏われ、ヒールなしの光布の靴は頭が跳ねています。華やかな服装を全て身に着ければ、栄華を極めてトン族女装の最高傑作だと言っても過言ではありません。",
      coverImage: `${IMAGE_BASE_URL}heritage/11.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/11.png`,
        `${IMAGE_BASE_URL}heritage/12.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p7",
      title: "苗族蜡染技艺",
      level: "省级",
      language: "zh-CN",
      category: "传统技艺",
      region: "黎平县、榕江县",
      description: "榕江蜡染，古称蜡缬，用蜡把花纹点绘在麻、丝、棉、毛等织物上，然后放入染料缸中浸染，有蜡的地方染不上颜色，除去蜡即现出美丽的花纹，俗称蜡染。与绞缬（扎染）、夹缬（镂空印花）并称为我国古代三大印花技艺。",
      content: "榕江蜡染，古称蜡缬，用蜡把花纹点绘在麻、丝、棉、毛等织物上，然后放入染料缸中浸染，有蜡的地方染不上颜色，除去蜡即现出美丽的花纹，俗称蜡染。与绞缬（扎染）、夹缬（镂空印花）并称为我国古代三大印花技艺。",
      coverImage: `${IMAGE_BASE_URL}heritage/13.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/13.png`,
        `${IMAGE_BASE_URL}heritage/14.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p7-en",
      title: "Batik of the Miao Ethnic Group",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Skill",
      region: "Liping County, Rongjiang County",
      description: "Rongjiang batik involves using wax to paint patterns on fabrics such as hemp, silk, cotton and wool. Then, the fabrics are immersed in a dye vat. The areas with wax will not be dyed, and after removing the wax, beautiful patterns will appear. Together with tie-dyeing and stenciled printing, it is known as the three major printing techniques in ancient China.",
      content: "Rongjiang batik involves using wax to paint patterns on fabrics such as hemp, silk, cotton and wool. Then, the fabrics are immersed in a dye vat. The areas with wax will not be dyed, and after removing the wax, beautiful patterns will appear. Together with tie-dyeing and stenciled printing, it is known as the three major printing techniques in ancient China.",
      coverImage: `${IMAGE_BASE_URL}heritage/13.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/13.png`,
        `${IMAGE_BASE_URL}heritage/14.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p7-ja",
      title: "ミャオ族ろうけつ染め技術",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な工芸技術",
      region: "黎平県、榕江県",
      description: "榕江ろうけつ染めは、昔は「蝋纈（ろうけち）」とも呼ばれていた伝統技法です。溶かした蝋で麻・絹・綿・毛などの布地に絵を描いてから、藍甕に浸して染めます。蝋で塗られた所は染料が付けられないため、蝋を剥いたら美しい柄が出来上がるのです。「絞纈（絞り染め）」、「夾纈（型紙を使った板締め染め）」そしてこの「ろうけつ染め」は、中国古代において三大の柄染め技法と誇り高く呼ばれています。",
      content: "榕江ろうけつ染めは、昔は「蝋纈（ろうけち）」とも呼ばれていた伝統技法です。溶かした蝋で麻・絹・綿・毛などの布地に絵を描いてから、藍甕に浸して染めます。蝋で塗られた所は染料が付けられないため、蝋を剥いたら美しい柄が出来上がるのです。「絞纈（絞り染め）」、「夾纈（型紙を使った板締め染め）」そしてこの「ろうけつ染め」は、中国古代において三大の柄染め技法と誇り高く呼ばれています。",
      coverImage: `${IMAGE_BASE_URL}heritage/13.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/13.png`,
        `${IMAGE_BASE_URL}heritage/14.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p8",
      title: "侗族哆耶——踩歌堂",
      level: "省级",
      language: "zh-CN",
      category: "传统音乐",
      region: "黎平县、从江县、榕江县",
      description: "侗族哆耶——踩歌堂是贵州省侗族地区最具代表性的传统歌舞形式之一，集歌、舞、乐于一体，承载着侗族的历史记忆、文化信仰与社交功能。",
      content: "侗族哆耶——踩歌堂是贵州省侗族地区最具代表性的传统歌舞形式之一，集歌、舞、乐于一体，承载着侗族的历史记忆、文化信仰与社交功能。",
      coverImage: `${IMAGE_BASE_URL}heritage/15.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/15.png`,
        `${IMAGE_BASE_URL}heritage/16.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p8-en",
      title: "Doye of the Dong Ethnic Group (Singing and Dancing Party)",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Music",
      region: "Liping County, Congjiang County, Rongjiang County",
      description: "Doye(a kind of singing and dancing party) of the Dong ethnic group is one of the most representative traditional forms of song and dance in the Dong ethnic areas of Guizhou Province. It integrates singing, dancing and music, carrying the historical memories, cultural beliefs and social functions of the Dong ethnic group.",
      content: "Doye(a kind of singing and dancing party) of the Dong ethnic group is one of the most representative traditional forms of song and dance in the Dong ethnic areas of Guizhou Province. It integrates singing, dancing and music, carrying the historical memories, cultural beliefs and social functions of the Dong ethnic group.",
      coverImage: `${IMAGE_BASE_URL}heritage/15.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/15.png`,
        `${IMAGE_BASE_URL}heritage/16.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p8-ja",
      title: "トン族集団歌舞儀式『ドゥエ（踩歌堂）』",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な音楽",
      region: "黎平県、従江県、榕江県",
      description: "貴州省トン族地方で最も代表的な伝統芸能の一つは「ドイエ―踩歌堂」です。歌・舞踊・音楽をすべて揃えた芸能は、トン族の歴史的な記憶、文化的な信仰そして社交機能を受け継いだのです。",
      content: "貴州省トン族地方で最も代表的な伝統芸能の一つは「ドイエ―踩歌堂」です。歌・舞踊・音楽をすべて揃えた芸能は、トン族の歴史的な記憶、文化的な信仰そして社交機能を受け継いだのです。",
      coverImage: `${IMAGE_BASE_URL}heritage/15.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/15.png`,
        `${IMAGE_BASE_URL}heritage/16.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p9",
      title: "羊(牛)瘪制作技艺",
      level: "省级",
      language: "zh-CN",
      category: "传统技艺",
      region: "黎平县、从江县、榕江县",
      description: "羊瘪或牛瘪（biě），又被称为百草汤，它是在宰杀牛羊时，将其胃液取出并过滤干净，在烹制牛羊肉将熟时，放入适量。烹制好的瘪是黄绿色，入口微苦，有健胃、祛热和助消化的功效，被黔东南少数民族视为待客上品。",
      content: "羊瘪或牛瘪（biě），又被称为百草汤，它是在宰杀牛羊时，将其胃液取出并过滤干净，在烹制牛羊肉将熟时，放入适量。烹制好的瘪是黄绿色，入口微苦，有健胃、祛热和助消化的功效，被黔东南少数民族视为待客上品。",
      coverImage: `${IMAGE_BASE_URL}heritage/17.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/17.png`,
        `${IMAGE_BASE_URL}heritage/18.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p9-en",
      title: "Chevon/Beef Tripe Hot Pot with Herbal Flavor",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Skill",
      region: "Liping County, Congjiang County, Rongjiang County",
      description: "Chevon/Beef Tripe Hot Pot with Herbal Flavor (Yang Bie or Niu Bie), also known as 'Soup of Hundred Herbs'. After sheep or cattle are slaughtered, their gastric juices are taken out and filtered thoroughly. Then, when the chevon or beef is almost cooked, an appropriate amount of the filtered gastric juice is added. The well-cooked tripe hot pot is yellowish-green in color. It has a slightly bitter taste when eaten and has the effects of strengthening the stomach, reducing internal heat, and aiding digestion. It is regarded as a top-quality dish for entertaining guests by the ethnic minorities in Qiandongnan.",
      content: "Chevon/Beef Tripe Hot Pot with Herbal Flavor (Yang Bie or Niu Bie), also known as 'Soup of Hundred Herbs'. After sheep or cattle are slaughtered, their gastric juices are taken out and filtered thoroughly. Then, when the chevon or beef is almost cooked, an appropriate amount of the filtered gastric juice is added. The well-cooked tripe hot pot is yellowish-green in color. It has a slightly bitter taste when eaten and has the effects of strengthening the stomach, reducing internal heat, and aiding digestion. It is regarded as a top-quality dish for entertaining guests by the ethnic minorities in Qiandongnan.",
      coverImage: `${IMAGE_BASE_URL}heritage/17.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/17.png`,
        `${IMAGE_BASE_URL}heritage/18.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p9-ja",
      title: "羊（牛）ビエ料理製作技法",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な工芸技術",
      region: "黎平県、従江県、榕江県",
      description: "羊ビエ「牛ビエ」は「百草のスープ」とも呼ばれています。羊や牛を解体する時に第四胃からまだ消化し切れなかった植物の液を取って濾過し、羊・牛肉を煮込んでから適度に入れます。出来上がったスープは黄っぽい緑色で微かな苦みがあり、健胃・解熱・消化促進という効果を持ち、貴州省黔東南の少数民族は客人をもてなす最高の一品とされます。",
      content: "羊ビエ「牛ビエ」は「百草のスープ」とも呼ばれています。羊や牛を解体する時に第四胃からまだ消化し切れなかった植物の液を取って濾過し、羊・牛肉を煮込んでから適度に入れます。出来上がったスープは黄っぽい緑色で微かな苦みがあり、健胃・解熱・消化促進という効果を持ち、貴州省黔東南の少数民族は客人をもてなす最高の一品とされます。",
      coverImage: `${IMAGE_BASE_URL}heritage/17.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/17.png`,
        `${IMAGE_BASE_URL}heritage/18.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p10",
      title: "瑶族盘王节",
      level: "省级",
      language: "zh-CN",
      category: "民俗",
      region: "从江县、榕江县",
      description: "盘王节又叫盘王还愿，是瑶族人民纪念其始祖盘王的盛大节日。主要有三项内容：请神、娱神、送神。盘王节是瑶族传统宗教的祭祀大典，其规模大，仪式复杂、持续时间长，节日的宗教神圣功能突出，具有文化人类学、宗教学的价值。",
      content: "盘王节又叫盘王还愿，是瑶族人民纪念其始祖盘王的盛大节日。主要有三项内容：请神、娱神、送神。盘王节是瑶族传统宗教的祭祀大典，其规模大，仪式复杂、持续时间长，节日的宗教神圣功能突出，具有文化人类学、宗教学的价值。",
      coverImage: `${IMAGE_BASE_URL}heritage/19.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/19.png`,
        `${IMAGE_BASE_URL}heritage/20.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p10-en",
      title: "The Panwang Festival of the Yao Ethnic Group",
      level: "Provincial",
      language: "en-US",
      category: "Customs",
      region: "Congjiang County, Rongjiang County",
      description: "The Panwang Festival, also known as redeeming vows to King Panhu, is a grand festival for the Yao people to commemorate their ancestor, King Panhu. There are mainly three parts of the festival: inviting the gods, entertaining the gods, and sending off the gods. The Panwang Festival is a grand sacrificial ceremony of the traditional religion of the Yao ethnic group. It is large in scale, with complex rituals, and lasts for a long time. The religious and sacred functions of the festival are prominent, and it has the values in cultural anthropology and religious studies.",
      content: "The Panwang Festival, also known as redeeming vows to King Panhu, is a grand festival for the Yao people to commemorate their ancestor, King Panhu. There are mainly three parts of the festival: inviting the gods, entertaining the gods, and sending off the gods. The Panwang Festival is a grand sacrificial ceremony of the traditional religion of the Yao ethnic group. It is large in scale, with complex rituals, and lasts for a long time. The religious and sacred functions of the festival are prominent, and it has the values in cultural anthropology and religious studies.",
      coverImage: `${IMAGE_BASE_URL}heritage/19.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/19.png`,
        `${IMAGE_BASE_URL}heritage/20.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p10-ja",
      title: "ヤオ族盤王祭",
      level: "省級",
      language: "ja-JP",
      category: "民俗",
      region: "従江県、榕江県",
      description: "「盤王祭」は「盤王願解き」とも呼ばれ、ヤオ族が始祖の盤王を祀る大事な祭礼です。儀式は「神招き・神遊び・神送り」という三つ段階で構成され、「盤王祭」はヤオ族伝統宗教の祭祀大典です。複雑な儀式、大規模、長時間、節の日は宗教的聖性が著しく、文化人類学的・宗教学的な研究価値を兼ね備えています。",
      content: "「盤王祭」は「盤王願解き」とも呼ばれ、ヤオ族が始祖の盤王を祀る大事な祭礼です。儀式は「神招き・神遊び・神送り」という三つ段階で構成され、「盤王祭」はヤオ族伝統宗教の祭祀大典です。複雑な儀式、大規模、長時間、節の日は宗教的聖性が著しく、文化人類学的・宗教学的な研究価値を兼ね備えています。",
      coverImage: `${IMAGE_BASE_URL}heritage/19.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/19.png`,
        `${IMAGE_BASE_URL}heritage/20.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p11",
      title: "瑶族长鼓舞",
      level: "省级",
      language: "zh-CN",
      category: "传统舞蹈",
      region: "从江县",
      description: "瑶族长鼓舞有多种表演套路，或专门表现造屋动作，或在舞蹈中融入动植物有趣的形态。瑶族长鼓舞多在瑶族传统节日及庆祝丰收、乔迁或婚礼喜庆的日子表演。",
      content: "瑶族长鼓舞有多种表演套路，或专门表现造屋动作，或在舞蹈中融入动植物有趣的形态。瑶族长鼓舞多在瑶族传统节日及庆祝丰收、乔迁或婚礼喜庆的日子表演。",
      coverImage: `${IMAGE_BASE_URL}heritage/21.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/21.png`,
        `${IMAGE_BASE_URL}heritage/22.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p11-en",
      title: "The long drum dance of the Yao ethnic group",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Dance",
      region: "Congjiang County",
      description: "The Yao ethnic group's long drum dance has a variety of performance routines. Some specifically depict the actions of building a house, while others incorporate the interesting forms of animals and plants into the dance. The Yao long drum dance is mostly performed on traditional Yao festivals and on days celebrating harvests, house relocations, or weddings.",
      content: "The Yao ethnic group's long drum dance has a variety of performance routines. Some specifically depict the actions of building a house, while others incorporate the interesting forms of animals and plants into the dance. The Yao long drum dance is mostly performed on traditional Yao festivals and on days celebrating harvests, house relocations, or weddings.",
      coverImage: `${IMAGE_BASE_URL}heritage/21.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/21.png`,
        `${IMAGE_BASE_URL}heritage/22.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p11-ja",
      title: "ヤオ族長鼓舞",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な踊り",
      region: "従江県",
      description: "ヤオ族の長鼓舞には多様なパフォーマンスで、家を建てる動きや動植物の形態などを舞踊に融合させました。表現の豊かな踊りはヤオ族の伝統的な祭りや豊作の祝い、新居または婚礼などの吉日で踊ります。",
      content: "ヤオ族の長鼓舞には多様なパフォーマンスで、家を建てる動きや動植物の形態などを舞踊に融合させました。表現の豊かな踊りはヤオ族の伝統的な祭りや豊作の祝い、新居または婚礼などの吉日で踊ります。",
      coverImage: `${IMAGE_BASE_URL}heritage/21.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/21.png`,
        `${IMAGE_BASE_URL}heritage/22.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p12",
      title: "侗族织锦技艺",
      level: "省级",
      language: "zh-CN",
      category: "传统技艺",
      region: "黎平县、从江县、榕江县",
      description: "侗族是我国最早从事纺织的少数民族之一，侗锦古称纶织，是侗族特有的传统手工艺。历史上，侗族没有自己的文字，侗族人便将自己族谱的历史、迁徙、信仰等情况汇集成各种图案和符号编织在布料上，形成一种技艺，世代传承。",
      content: "侗族是我国最早从事纺织的少数民族之一，侗锦古称纶织，是侗族特有的传统手工艺。历史上，侗族没有自己的文字，侗族人便将自己族谱的历史、迁徙、信仰等情况汇集成各种图案和符号编织在布料上，形成一种技艺，世代传承。",
      coverImage: `${IMAGE_BASE_URL}heritage/23.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/23.png`,
        `${IMAGE_BASE_URL}heritage/24.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p12-en",
      title: "The Craftsmanship of Brocade Weaving of the Dong Ethnic Group",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Craftsmanship",
      region: "Liping County, Congjiang County, Rongjiang County",
      description: "The Dong ethnic group is one of the ethnic minorities in China that engaged in textile production earliest. Dong brocade, known as \"Lunzhi\" in ancient times, is a unique traditional handicraft of the Dong people. In history, as the Dong ethnic group didn't have its own written language, the Dong people integrated the history of their family genealogies, migrations, beliefs and other situations into various patterns and symbols, which were then woven onto the fabric, forming a craftsmanship that has been passed down from generation to generation.",
      content: "The Dong ethnic group is one of the ethnic minorities in China that engaged in textile production earliest. Dong brocade, known as \"Lunzhi\" in ancient times, is a unique traditional handicraft of the Dong people. In history, as the Dong ethnic group didn't have its own written language, the Dong people integrated the history of their family genealogies, migrations, beliefs and other situations into various patterns and symbols, which were then woven onto the fabric, forming a craftsmanship that has been passed down from generation to generation.",
      coverImage: `${IMAGE_BASE_URL}heritage/23.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/23.png`,
        `${IMAGE_BASE_URL}heritage/24.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p12-ja",
      title: "トン族の紡織工芸技術",
      level: "省級",
      language: "ja-JP",
      category: "伝統工芸技術",
      region: "黎平県、従江県、榕江県",
      description: "トン族は中国の歴史において最も早く紡織に勤めた少数民族の一つです。トン錦は昔「ルン織」と呼ばれ、トン族独自の手工芸として受け継がれてきました。歴史上、トン族は自らの文字を持たなかったため、民族の系譜・移住の歴史・信仰体系などの情報をまとめて絵柄や記号に変換して織物に刺繍することにしました。これらの刺繍の技法が代々伝えてきました。",
      content: "トン族は中国の歴史において最も早く紡織に勤めた少数民族の一つです。トン錦は昔「ルン織」と呼ばれ、トン族独自の手工芸として受け継がれてきました。歴史上、トン族は自らの文字を持たなかったため、民族の系譜・移住の歴史・信仰体系などの情報をまとめて絵柄や記号に変換して織物に刺繍することにしました。これらの刺繍の技法が代々伝えてきました。",
      coverImage: `${IMAGE_BASE_URL}heritage/23.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/23.png`,
        `${IMAGE_BASE_URL}heritage/24.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p13",
      title: "侗族婚俗",
      level: "省级",
      language: "zh-CN",
      category: "民俗",
      region: "黎平县、榕江县",
      description: "侗族婚俗是侗族传统文化的重要组成部分，以自由恋爱、集体参与、仪式繁复为特征，体现了侗族社会的家族观念、伦理道德与生态智慧。其核心流程包括行歌坐月、提亲定礼、拦门酒与哭嫁、不落夫家、回门宴等。侗族婚俗不仅是婚姻仪式，更是社区协作、文化传承的载体。",
      content: "侗族婚俗是侗族传统文化的重要组成部分，以自由恋爱、集体参与、仪式繁复为特征，体现了侗族社会的家族观念、伦理道德与生态智慧。其核心流程包括行歌坐月、提亲定礼、拦门酒与哭嫁、不落夫家、回门宴等。侗族婚俗不仅是婚姻仪式，更是社区协作、文化传承的载体。",
      coverImage: `${IMAGE_BASE_URL}heritage/25.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/25.png`,
        `${IMAGE_BASE_URL}heritage/26.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p13-en",
      title: "The Marriage Customs of the Dong Ethnic Group",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Custom",
      region: "Liping County, Rongjiang County",
      description: "The marriage customs of the Dong ethnic group are an important part of the traditional culture of the Dong people. Characterized by \"free love, collective participation in wedding, and elaborate rituals\", they reflect the family values, ethics, and ecological wisdom of the Dong society. The core processes include antiphonal serenading of love songs at night, marriage proposal and betrothal gifts, barrier gate grain liquor ceremony and Kujia (wedding lament), the practice of not living with the husband's family until the bride get pregnant, and the bride returning-home banquet. The marriage customs of the Dong ethnic group are not only marriage ceremonies but also carriers of community cooperation and cultural inheritance.",
      content: "The marriage customs of the Dong ethnic group are an important part of the traditional culture of the Dong people. Characterized by \"free love, collective participation in wedding, and elaborate rituals\", they reflect the family values, ethics, and ecological wisdom of the Dong society. The core processes include antiphonal serenading of love songs at night, marriage proposal and betrothal gifts, barrier gate grain liquor ceremony and Kujia (wedding lament), the practice of not living with the husband's family until the bride get pregnant, and the bride returning-home banquet. The marriage customs of the Dong ethnic group are not only marriage ceremonies but also carriers of community cooperation and cultural inheritance.",
      coverImage: `${IMAGE_BASE_URL}heritage/25.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/25.png`,
        `${IMAGE_BASE_URL}heritage/26.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p13-ja",
      title: "トン族の婚姻習俗",
      level: "省級",
      language: "ja-JP",
      category: "民俗",
      region: "黎平県、榕江県",
      description: "トン族の婚姻習俗は伝統文化を構成する大事な一環として、「自由恋愛」「集団参加」「儀式繁雑」という特徴があり、トン族社会における家族観念・倫理道徳・生態的知恵を具体化にしたものです。「歩きながら歌いかける（行歌坐月）」、「提親して結納を決める（提亲定礼」、「扉阻みのお酒（欄門酒）」、「慟哭しながら嫁を送る（哭嫁）」、「すぐに同棲せず（不落夫家）」と「夫を連れて実家に帰って宴をすること（回門宴）」などが定番の行事となります。この風習は単なる婚姻儀礼だけでなく、村々の協働そして文化伝承の媒介でもあります。",
      content: "トン族の婚姻習俗は伝統文化を構成する大事な一環として、「自由恋愛」「集団参加」「儀式繁雑」という特徴があり、トン族社会における家族観念・倫理道徳・生態的知恵を具体化にしたものです。「歩きながら歌いかける（行歌坐月）」、「提親して結納を決める（提亲定礼」、「扉阻みのお酒（欄門酒）」、「慟哭しながら嫁を送る（哭嫁）」、「すぐに同棲せず（不落夫家）」と「夫を連れて実家に帰って宴をすること（回門宴）」などが定番の行事となります。この風習は単なる婚姻儀礼だけでなく、村々の協働そして文化伝承の媒介でもあります。",
      coverImage: `${IMAGE_BASE_URL}heritage/25.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/25.png`,
        `${IMAGE_BASE_URL}heritage/26.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p14",
      title: "水族马尾绣",
      level: "省级",
      language: "zh-CN",
      category: "传统美术",
      region: "榕江县",
      description: "水族马尾绣是以马尾作为刺绣材料的刺绣技艺与方法，是水族妇女飞针走线的智慧结晶与艺术瑰宝。水族马尾绣图案丰富，具有美学价值、历史价值、社会价值等，同时也是研究水族历史与文化的活态史料。水族马尾绣分布在黔东南州的榕江县、雷山县部分地区的水族村寨，辐射到黔南地区。水族马尾绣工艺有自己独特的制作技艺与方法，具体分为六个步骤：一是绕马尾线；二是固定框架图案；三是填心；四是镶边；五是订金线；六是装订。",
      content: "水族马尾绣是以马尾作为刺绣材料的刺绣技艺与方法，是水族妇女飞针走线的智慧结晶与艺术瑰宝。水族马尾绣图案丰富，具有美学价值、历史价值、社会价值等，同时也是研究水族历史与文化的活态史料。水族马尾绣分布在黔东南州的榕江县、雷山县部分地区的水族村寨，辐射到黔南地区。水族马尾绣工艺有自己独特的制作技艺与方法，具体分为六个步骤：一是绕马尾线；二是固定框架图案；三是填心；四是镶边；五是订金线；六是装订。",
      coverImage: `${IMAGE_BASE_URL}heritage/27.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/27.png`,
        `${IMAGE_BASE_URL}heritage/28.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p14-en",
      title: "The horsetail embroidery of the Shui ethnic group",
      level: "Provincial",
      language: "en-US",
      category: "Traditional Fine Arts",
      region: "Rongjiang County",
      description: "The horsetail embroidery of the Shui ethnic group is an embroidery technique that uses horsetail hair as the embroidery material. It is the crystallization of the wisdom and artistic treasure of Shui women's needlework. The patterns of Shui horsetail embroidery are rich and possess aesthetic value, historical value, social value, etc. At the same time, it serves as living historical materials for studying the history and culture of the Shui ethnic group. Shui horsetail embroidery is distributed in the Shui ethnic villages in some areas of Rongjiang County and Leishan County in Qiandongnan Prefecture, and has an influence that extends to the Qiannan region. The craftsmanship of Shui horsetail embroidery has its own unique techniques and methods, which are specifically divided into six steps: first, winding the horsetail thread; second, tracing the outlines of the pattern; third, filling the pattern; fourth, trimming edges with colourful threads; fifth, adorn with golden threads; and sixth, binding.",
      content: "The horsetail embroidery of the Shui ethnic group is an embroidery technique that uses horsetail hair as the embroidery material. It is the crystallization of the wisdom and artistic treasure of Shui women's needlework. The patterns of Shui horsetail embroidery are rich and possess aesthetic value, historical value, social value, etc. At the same time, it serves as living historical materials for studying the history and culture of the Shui ethnic group. Shui horsetail embroidery is distributed in the Shui ethnic villages in some areas of Rongjiang County and Leishan County in Qiandongnan Prefecture, and has an influence that extends to the Qiannan region. The craftsmanship of Shui horsetail embroidery has its own unique techniques and methods, which are specifically divided into six steps: first, winding the horsetail thread; second, tracing the outlines of the pattern; third, filling the pattern; fourth, trimming edges with colourful threads; fifth, adorn with golden threads; and sixth, binding.",
      coverImage: `${IMAGE_BASE_URL}heritage/27.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/27.png`,
        `${IMAGE_BASE_URL}heritage/28.png`
      ],
      batch: "First Batch",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    },
    {
      _id: "p14-ja",
      title: "スイ族の馬尾刺繍（マーウェイししゅう）",
      level: "省級",
      language: "ja-JP",
      category: "伝統的な美術",
      region: "榕江県",
      description: "水族の馬尾刺繍は、馬の尾の毛を材料とした刺繍技法です。水族の女性が長年培った手さばきでチクチク仕上げ、正に知恵と芸術の結晶です。馬尾刺繍の絵柄は多様で、美学的、歴史的、社会的な価値を兼ね備え、水族文化について様々な研究の支えとなる生き生き史料です。馬尾刺繍は貴州省黔東南州の榕江県、雷山県のスイ族集落に散在し、黔南地区にも広がっています。水族の马尾刺繍には、独特の制作技法が受け継がれ、主に6段階に分かれています。まずは马尾の毛を纏うことから始まり、次に図案の骨組みを固定します。その後、模様の間に空いている所を馬尾の毛で纏って埋める。さらに、縁取り、金糸を縫い込み、最後は丁寧に仕上げます。",
      content: "水族の馬尾刺繍は、馬の尾の毛を材料とした刺繍技法です。水族の女性が長年培った手さばきでチクチク仕上げ、正に知恵と芸術の結晶です。馬尾刺繍の絵柄は多様で、美学的、歴史的、社会的な価値を兼ね備え、水族文化について様々な研究の支えとなる生き生き史料です。馬尾刺繍は貴州省黔東南州の榕江県、雷山県のスイ族集落に散在し、黔南地区にも広がっています。水族の马尾刺繍には、独特の制作技法が受け継がれ、主に6段階に分かれています。まずは马尾の毛を纏うことから始まり、次に図案の骨組みを固定します。その後、模様の間に空いている所を馬尾の毛で纏って埋める。さらに、縁取り、金糸を縫い込み、最後は丁寧に仕上げます。",
      coverImage: `${IMAGE_BASE_URL}heritage/27.png`,
      images: [
        `${IMAGE_BASE_URL}heritage/27.png`,
        `${IMAGE_BASE_URL}heritage/28.png`
      ],
      batch: "第一批",
      year: "2006",
      createTime: "2006-05-20",
      views: 0
    }
  ]
};

export default heritageData; 