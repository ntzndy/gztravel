// 添加CDN基础URL配置
const IMAGE_BASE_URL = "https://imagevsl1.oss-cn-chengdu.aliyuncs.com/";

export const cultureData = {
  zh: {
    ethnicCultures: [
      {
        id: 'n1',
        name: '侗族木构建筑营造技艺',
        description: '侗族鼓楼与花桥为独特木构建筑，鼓楼集塔阁亭于一体，花桥以杉木穿榫工艺建造，运用杠杆原理。匠人以竹尺"匠杆"及符号体系设计，师徒传承。',
        image: `${IMAGE_BASE_URL}gheritage/1.png`,
        highlights: ['传统技艺', '木构建筑', '鼓楼建造', '花桥工艺'],
        region: '黎平县、从江县、榕江县'
      },
      {
        id: 'n2',
        name: '瑶族医药（药浴疗法）',
        description: '瑶族药浴源自贵州从江，以草药煮水浸浴，祛风除湿、活血排毒，为百年传统养生秘方，绿色无副作用，亟待保护传承。',
        image: `${IMAGE_BASE_URL}gheritage/3.png`,
        highlights: ['传统医药', '药浴疗法', '养生文化', '民族医学'],
        region: '从江县、黎平县'
      },
      {
        id: 'n3',
        name: '侗族大歌',
        description: '侗族大歌"嘎老"源于宋代，以多声部合唱为特色，含鼓楼大歌、声音大歌等类型，承载侗族历史、婚俗与文化。',
        image: `${IMAGE_BASE_URL}gheritage/5.png`,
        highlights: ['传统音乐', '多声部合唱', '民族文化', '历史传承'],
        region: '黎平县、从江县、榕江县'
      },
      {
        id: 'n6',
        name: '侗戏',
        description: '侗戏起源于清嘉庆年间，由吴文彩基于侗族叙事歌与汉族说唱创立，流行于黔湘桂侗寨。融合多剧种元素，曲调丰富，表演朴实，代表剧目《珠郎娘美》。',
        image: `${IMAGE_BASE_URL}gheritage/11.png`,
        highlights: ['传统戏剧', '民族表演', '文化融合', '口传艺术'],
        region: '黎平县、从江县、榕江县'
      },
      {
        id: 'n7',
        name: '侗族萨玛节',
        description: '侗族萨玛节是贵州榕江等地祭祀大祖母萨玛的传统节日，体现母系遗风。农历正月/二月全寨祭"然萨"，妇女为主绕寨歌舞"多耶"，祈求安康丰收。',
        image: `${IMAGE_BASE_URL}gheritage/13.png`,
        highlights: ['传统节庆', '祭祀文化', '民族信仰', '歌舞艺术'],
        region: '黎平县、从江县、榕江县'
      },
      {
        id: 'n8',
        name: '侗族款约',
        description: '贵州省黎平县侗族款约是侗族传统社会组织形式，以民主协商制定民间规约维系社会秩序，具有原始氏族特征。款约由群众商定、款首监督执行。',
        image: `${IMAGE_BASE_URL}gheritage/15.png`,
        highlights: ['民俗文化', '社会组织', '民主协商', '传统治理'],
        region: '黎平县、从江县、榕江县'
      }
    ],
    villageFootball: [
      {
        id: 1,
        title: '榕江（三宝侗寨）和美乡村足球超级联赛',
        description: '贵州"村超"火遍全网，展现了乡村足球的魅力和少数民族地区的文化活力。',
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=400&fit=crop',
        date: '2024年夏季',
        location: '贵州榕江',
        participants: '20支村队',
        features: ['民族歌舞表演', '特色美食展示', '传统服饰秀', '全民参与']
      },
      {
        id: 2,
        title: '丹寨万达小镇村超友谊赛',
        description: '在美丽的丹寨万达小镇举办的村级足球比赛，融合了苗族文化元素。',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
        date: '2024年春季',
        location: '贵州丹寨',
        participants: '12支村队',
        features: ['苗族文化展示', '手工艺品展销', '民族美食节', '文化交流']
      }
    ],
    touristSpots: [
      {
        id: 1,
        name: '黄果树瀑布',
        description: '中国最大的瀑布，也是世界著名大瀑布之一，被誉为"中华第一瀑"。',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: '贵州安顺',
        rating: 4.8,
        type: '自然景观',
        highlights: ['壮观瀑布', '彩虹奇观', '喀斯特地貌', '民族风情']
      },
      {
        id: 2,
        name: '荔波小七孔',
        description: '世界自然遗产地，被誉为"地球上的绿宝石"，拥有原始的自然风光。',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop',
        location: '贵州荔波',
        rating: 4.7,
        type: '自然景观',
        highlights: ['喀斯特森林', '湖光山色', '古桥文化', '生态旅游']
      }
    ]
  },
  en: {
    ethnicCultures: [
      {
        id: 'n1',
        name: 'The Craftsmanship of Dong Ethnic Group\'s Wooden Architecture',
        description: 'Exemplifying unique timber-framed architecture, Dong Drum Towers integrate pagoda, pavilion, and tower designs, while Flower Bridges are constructed using fir-wood mortise-tenon joints based on lever mechanics.',
        image: `${IMAGE_BASE_URL}gheritage/1.png`,
        highlights: ['Traditional Craftsmanship', 'Wooden Architecture', 'Drum Tower', 'Bridge Building'],
        region: 'Liping County, Congjiang County, Rongjiang County'
      },
      {
        id: 'n2',
        name: 'The Herbal Medicine of the Yao Ethnic Group (Yaoyu Herbal Bath Therapy)',
        description: 'Originating in Congjiang, Guizhou, this centennial wellness tradition involves medicinal herb decoctions for rheumatism relief and detoxification.',
        image: `${IMAGE_BASE_URL}gheritage/3.png`,
        highlights: ['Traditional Medicine', 'Herbal Bath', 'Wellness Culture', 'Ethnic Medicine'],
        region: 'Congjiang County, Liping County'
      },
      {
        id: 'n3',
        name: 'Grand Song of the Dong Ethnic Group',
        description: 'Documented since the Song Dynasty, this a cappella tradition features multipart harmonies with subtypes like Drum Tower Grand Songs and Nature Sound Songs.',
        image: `${IMAGE_BASE_URL}gheritage/5.png`,
        highlights: ['Traditional Music', 'Multipart Harmony', 'Cultural Heritage', 'Historical Legacy'],
        region: 'Liping County, Congjiang County, Rongjiang County'
      },
      {
        id: 'n6',
        name: 'Dong Opera',
        description: 'Dong Opera originated in the Jiaqing Emperor period of the Qing Dynasty, founded by Wu Wencai, combining narrative songs of Dong people and Han raps, featuring rich tunes and simple performances.',
        image: `${IMAGE_BASE_URL}gheritage/11.png`,
        highlights: ['Traditional Drama', 'Ethnic Performance', 'Cultural Fusion', 'Oral Art'],
        region: 'Liping County, Congjiang County, Rongjiang County'
      },
      {
        id: 'n7',
        name: 'Sama Worship Festival of the Dong Ethnic Group',
        description: 'A traditional festival honoring Great Grandmother Sama, reflecting matriarchal practices. The whole village participates in "Ransa" worship, with women performing "Duoye" dances.',
        image: `${IMAGE_BASE_URL}gheritage/13.png`,
        highlights: ['Traditional Festival', 'Worship Culture', 'Ethnic Beliefs', 'Song and Dance'],
        region: 'Liping County, Congjiang County, Rongjiang County'
      },
      {
        id: 'n8',
        name: 'Regulations and Practices of the Dong Ethnic Group',
        description: 'As a traditional self-governance mechanism with clan democracy features, this oral legal system involves community-negotiated codes enforced by Kuan leaders.',
        image: `${IMAGE_BASE_URL}gheritage/15.png`,
        highlights: ['Folk Culture', 'Social Organization', 'Democratic Consultation', 'Traditional Governance'],
        region: 'Liping County, Congjiang County, Rongjiang County'
      }
    ],
    villageFootball: [
      {
        id: 1,
        title: 'Rongjiang (Sanbao Dong Village) Harmonious Village Soccer Super League',
        description: 'Guizhou "Village Super League" has gone viral, showcasing the charm of village soccer and the cultural vitality of ethnic minority areas.',
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=400&fit=crop',
        date: 'Summer 2024',
        location: 'Rongjiang, Guizhou',
        participants: '20 Village Teams',
        features: ['Ethnic Dance Show', 'Local Food Fair', 'Traditional Costume Show', 'Public Participation']
      },
      {
        id: 2,
        title: 'Danzhai Wanda Town Village Soccer Friendly Match',
        description: 'A village-level soccer match held in the beautiful Danzhai Wanda Town, incorporating Miao cultural elements.',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
        date: 'Spring 2024',
        location: 'Danzhai, Guizhou',
        participants: '12 Village Teams',
        features: ['Miao Culture Show', 'Handicraft Fair', 'Ethnic Food Festival', 'Cultural Exchange']
      }
    ],
    touristSpots: [
      {
        id: 1,
        name: 'Huangguoshu Waterfall',
        description: "China's largest waterfall and one of the world's famous waterfalls, known as 'China's First Waterfall'.",
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: 'Anshun, Guizhou',
        rating: 4.8,
        type: 'Natural Landscape',
        highlights: ['Magnificent Waterfall', 'Rainbow View', 'Karst Landscape', 'Ethnic Culture']
      },
      {
        id: 2,
        name: 'Libo Small Seven-Hole',
        description: 'A World Natural Heritage site, known as the "Green Gem on Earth", featuring pristine natural scenery.',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop',
        location: 'Libo, Guizhou',
        rating: 4.7,
        type: 'Natural Landscape',
        highlights: ['Karst Forest', 'Lakes & Mountains', 'Ancient Bridge', 'Eco Tourism']
      }
    ]
  },
  ja: {
    ethnicCultures: [
      {
        id: 'n1',
        name: 'トン族木造建築構築技術',
        description: '侗族の鼓楼と花橋は独特な木造建築です。鼓楼は塔、楼閣、亭という三者を含めます。花橋は杉で貫きほぞ工法により建てられ、梃子の原理を活用しました。',
        image: `${IMAGE_BASE_URL}gheritage/1.png`,
        highlights: ['伝統工芸', '木造建築', '鼓楼建設', '花橋技術'],
        region: '黎平県、従江県、榕江県'
      },
      {
        id: 'n2',
        name: 'ヤオ族医薬（薬浴療法）',
        description: 'ヤオ族薬浴療法は、中国貴州省従江県に伝承される伝統医療技法です。天然の薬草を煎じた湯に浸かることで、風邪を治し、湿気を取り除き、血行を促し、毒を解けるという百年にわたり受け継がれてきました。',
        image: `${IMAGE_BASE_URL}gheritage/3.png`,
        highlights: ['伝統医学', '薬浴療法', '養生文化', '民族医学'],
        region: '従江県、黎平県'
      },
      {
        id: 'n3',
        name: 'トン族大歌',
        description: 'トン族の大歌「嘎老」（ガーラオ）は宋から歌い始め、多声部の合唱という特色を持ち、鼓楼大歌や声音大歌などの形を含めます。',
        image: `${IMAGE_BASE_URL}gheritage/5.png`,
        highlights: ['伝統音楽', '多声部合唱', '民族文化', '歴史伝承'],
        region: '黎平県、従江県、榕江県'
      },
      {
        id: 'n6',
        name: 'トン劇',
        description: 'トン族の演劇は清の嘉慶年間からはじめ、呉文彩という人がトン族の叙事歌と漢族の語り物を基に作り、複数の劇種の要素を融合し、曲調が豊かで、演技は素朴です。',
        image: `${IMAGE_BASE_URL}gheritage/11.png`,
        highlights: ['伝統演劇', '民族芸能', '文化融合', '口承芸術'],
        region: '黎平県、従江県、榕江県'
      },
      {
        id: 'n7',
        name: 'トン族サマ祭り',
        description: 'トン族のサマ祭りは、大祖母サマを祀る伝統的な祭りで、母系社会の名残りを表しています。旧暦の正月または二月に村全体で「然サ」を祀り、女性たちが主体となって「多耶」を踊ります。',
        image: `${IMAGE_BASE_URL}gheritage/13.png`,
        highlights: ['伝統祭礼', '祭祀文化', '民族信仰', '歌舞芸能'],
        region: '黎平県、従江県、榕江県'
      },
      {
        id: 'n8',
        name: '規約習俗（トン族カンヤク）',
        description: 'トン族の「款約」は伝統的な社会組織形態で、民主的な話し合いによって民間の規約を制定し、社会秩序を維持するもので、原始的な氏族の特徴を持っています。',
        image: `${IMAGE_BASE_URL}gheritage/15.png`,
        highlights: ['民俗文化', '社会組織', '民主協議', '伝統統治'],
        region: '黎平県、従江県、榕江県'
      }
    ],
    villageFootball: [
      {
        id: 1,
        title: '榕江（三宝トン族村）和美村サッカースーパーリーグ',
        description: '貴州の"村超"がインターネットで話題となり、村のサッカーの魅力と少数民族地域の文化的活力を示しています。',
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=400&fit=crop',
        date: '2024年夏',
        location: '貴州榕江',
        participants: '20村チーム',
        features: ['民族舞踊公演', '特色料理展示', '伝統衣装ショー', '住民参加']
      },
      {
        id: 2,
        title: '丹寨ワンダータウン村サッカー親善試合',
        description: '美しい丹寨ワンダータウンで開催される村レベルのサッカー試合で、ミャオ族の文化要素を取り入れています。',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
        date: '2024年春',
        location: '貴州丹寨',
        participants: '12村チーム',
        features: ['ミャオ族文化展示', '工芸品展示販売', '民族料理祭り', '文化交流']
      }
    ],
    touristSpots: [
      {
        id: 1,
        name: '黄果樹の滝',
        description: '中国最大の滝であり、世界的に有名な大滝の一つで、「中国第一の滝」として知られています。',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        location: '貴州安順',
        rating: 4.8,
        type: '自然景観',
        highlights: ['壮大な滝', '虹の景観', 'カルスト地形', '民族文化']
      },
      {
        id: 2,
        name: '荔波小七孔',
        description: '世界自然遺産に登録され、「地球の緑の宝石」と称される原始的な自然景観を有しています。',
        image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop',
        location: '貴州荔波',
        rating: 4.7,
        type: '自然景観',
        highlights: ['カルスト森林', '湖と山の景色', '古橋文化', 'エコツーリズム']
      }
    ]
  }
}; 