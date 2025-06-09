// 足球比赛相关数据结构
export interface MatchTeam {
  name: string;
  logo: string;
  score?: number;
}

export interface MatchSchedule {
  id: number;
  round: string;
  homeTeam: MatchTeam;
  awayTeam: MatchTeam;
  date: string;
  time: string;
  venue: string;
  ticketInfo?: string;
  broadcastChannel?: string;
}

export interface MatchHighlight {
  id: number;
  title: string;
  type: 'interview' | 'highlight' | 'report';
  matchInfo: {
    homeTeam: string;
    awayTeam: string;
    score?: string;
    date: string;
  };
  coverImage: string;
  content: string;
  videoUrl?: string;
  images?: string[];
  tags: string[];
  publishDate: string;
}

export interface FootballData {
  schedules: MatchSchedule[];
  highlights: MatchHighlight[];
}

// 多语言数据
export const footballData = {
  zh: {
    schedules: [
      {
        id: 1,
        round: '小组赛第一轮',
        homeTeam: {
          name: '丹寨雄鹰队',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/danzhai.png',
          score: 3
        },
        awayTeam: {
          name: '从江猎豹队',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/congjiang.png',
          score: 1
        },
        date: '2024-03-15',
        time: '15:30',
        venue: '丹寨县民族体育场',
        ticketInfo: '门票：30元/人',
        broadcastChannel: '贵州体育频道'
      },
      {
        id: 2,
        round: '小组赛第二轮',
        homeTeam: {
          name: '黎平雷霆队',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/liping.png'
        },
        awayTeam: {
          name: '榕江火箭队',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/rongjiang.png'
        },
        date: '2024-03-22',
        time: '19:30',
        venue: '黎平县全民健身中心',
        ticketInfo: '门票：40元/人',
        broadcastChannel: '黔东南体育'
      }
    ],
    highlights: [
      {
        id: 1,
        title: '精彩绝伦！丹寨雄鹰3:1力克从江猎豹',
        type: 'highlight',
        matchInfo: {
          homeTeam: '丹寨雄鹰队',
          awayTeam: '从江猎豹队',
          score: '3-1',
          date: '2024-03-15'
        },
        coverImage: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1.png',
        content: '在2024贵州村超联赛小组赛首轮比赛中，丹寨雄鹰队主场迎战从江猎豹队。比赛第23分钟，雄鹰队10号杨飞突破防线率先破门。随后猎豹队7号李强一记远射扳平比分。下半场雄鹰队连入两球，最终以3:1取得开门红。全场比赛精彩纷呈，双方球员展现出高超的技术和顽强的意志。',
        videoUrl: 'https://video.gzfootball.com/match1/highlight.mp4',
        images: [
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1-1.png',
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1-2.png'
        ],
        tags: ['精彩进球', '技术突破', '团队配合', '开门红'],
        publishDate: '2024-03-15'
      },
      {
        id: 2,
        title: '赛前特辑：黎平雷霆VS榕江火箭，谁将笑到最后？',
        type: 'report',
        matchInfo: {
          homeTeam: '黎平雷霆队',
          awayTeam: '榕江火箭队',
          date: '2024-03-22'
        },
        coverImage: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2.png',
        content: '本周五晚，2024贵州村超联赛小组赛第二轮将迎来一场焦点之战。黎平雷霆队将在主场迎战榕江火箭队。两支球队在去年的对决中贡献了令人难忘的比赛，火箭队以4:3险胜。今年雷霆队引进了新的外援，实力大增，而火箭队在预选赛中展现出强大的攻击力。这场比赛必将再次点燃球迷的激情！',
        images: [
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2-1.png',
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2-2.png'
        ],
        tags: ['赛前预热', '焦点之战', '强强对话', '传统德比'],
        publishDate: '2024-03-20'
      }
    ]
  },
  en: {
    schedules: [
      {
        id: 1,
        round: 'Group Stage Round 1',
        homeTeam: {
          name: 'Danzhai Eagles',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/danzhai.png',
          score: 3
        },
        awayTeam: {
          name: 'Congjiang Leopards',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/congjiang.png',
          score: 1
        },
        date: '2024-03-15',
        time: '15:30',
        venue: 'Danzhai Ethnic Sports Stadium',
        ticketInfo: 'Tickets: ¥30/person',
        broadcastChannel: 'Guizhou Sports Channel'
      },
      {
        id: 2,
        round: 'Group Stage Round 2',
        homeTeam: {
          name: 'Liping Thunder',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/liping.png'
        },
        awayTeam: {
          name: 'Rongjiang Rockets',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/rongjiang.png'
        },
        date: '2024-03-22',
        time: '19:30',
        venue: 'Liping Fitness Center',
        ticketInfo: 'Tickets: ¥40/person',
        broadcastChannel: 'Qiandongnan Sports'
      }
    ],
    highlights: [
      {
        id: 1,
        title: 'Spectacular! Danzhai Eagles Triumph 3-1 Over Congjiang Leopards',
        type: 'highlight',
        matchInfo: {
          homeTeam: 'Danzhai Eagles',
          awayTeam: 'Congjiang Leopards',
          score: '3-1',
          date: '2024-03-15'
        },
        coverImage: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1.png',
        content: 'In the opening round of the 2024 Guizhou Village Super League group stage, Danzhai Eagles hosted Congjiang Leopards. Eagles\' No.10 Yang Fei broke through the defense to score first in the 23rd minute. Leopards\' No.7 Li Qiang equalized with a long-range shot. The Eagles scored twice in the second half to secure a 3-1 victory. The match showcased excellent technical skills and strong determination from both teams.',
        videoUrl: 'https://video.gzfootball.com/match1/highlight.mp4',
        images: [
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1-1.png',
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1-2.png'
        ],
        tags: ['Goals', 'Skills', 'Teamwork', 'Opening Win'],
        publishDate: '2024-03-15'
      },
      {
        id: 2,
        title: 'Pre-match Special: Liping Thunder vs Rongjiang Rockets - Who Will Prevail?',
        type: 'report',
        matchInfo: {
          homeTeam: 'Liping Thunder',
          awayTeam: 'Rongjiang Rockets',
          date: '2024-03-22'
        },
        coverImage: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2.png',
        content: 'This Friday night will feature a crucial match in Round 2 of the 2024 Guizhou Village Super League group stage. Liping Thunder will host Rongjiang Rockets. Last year\'s encounter was unforgettable, with the Rockets winning 4-3. This year, Thunder has strengthened their squad with new signings, while the Rockets have shown impressive attacking prowess in the qualifiers. This match promises to ignite the passion of football fans once again!',
        images: [
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2-1.png',
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2-2.png'
        ],
        tags: ['Preview', 'Key Match', 'Rivalry', 'Derby'],
        publishDate: '2024-03-20'
      }
    ]
  },
  ja: {
    schedules: [
      {
        id: 1,
        round: 'グループステージ第1節',
        homeTeam: {
          name: '丹寨イーグルス',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/danzhai.png',
          score: 3
        },
        awayTeam: {
          name: '従江レパーズ',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/congjiang.png',
          score: 1
        },
        date: '2024-03-15',
        time: '15:30',
        venue: '丹寨民族スポーツスタジアム',
        ticketInfo: 'チケット：30元/人',
        broadcastChannel: '貴州スポーツチャンネル'
      },
      {
        id: 2,
        round: 'グループステージ第2節',
        homeTeam: {
          name: '黎平サンダー',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/liping.png'
        },
        awayTeam: {
          name: '榕江ロケッツ',
          logo: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/teams/rongjiang.png'
        },
        date: '2024-03-22',
        time: '19:30',
        venue: '黎平フィットネスセンター',
        ticketInfo: 'チケット：40元/人',
        broadcastChannel: '黔東南スポーツ'
      }
    ],
    highlights: [
      {
        id: 1,
        title: '圧巻！丹寨イーグルス、従江レパーズを3-1で撃破',
        type: 'highlight',
        matchInfo: {
          homeTeam: '丹寨イーグルス',
          awayTeam: '従江レパーズ',
          score: '3-1',
          date: '2024-03-15'
        },
        coverImage: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1.png',
        content: '2024貴州村スーパーリーグのグループステージ第1節で、丹寨イーグルスがホームで従江レパーズと対戦。23分、イーグルスの10番楊飛が守備を突破して先制ゴール。その後レパーズの7番李強がロングシュートで同点に追いつく。後半、イーグルスが立て続けに2得点を挙げ、3-1で開幕戦を勝利で飾った。両チームが高い技術力と強い意志を見せた素晴らしい試合だった。',
        videoUrl: 'https://video.gzfootball.com/match1/highlight.mp4',
        images: [
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1-1.png',
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/match1-2.png'
        ],
        tags: ['ゴール', '技術', 'チームワーク', '開幕戦勝利'],
        publishDate: '2024-03-15'
      },
      {
        id: 2,
        title: '試合前特集：黎平サンダー対榕江ロケッツ、勝利を掴むのは？',
        type: 'report',
        matchInfo: {
          homeTeam: '黎平サンダー',
          awayTeam: '榕江ロケッツ',
          date: '2024-03-22'
        },
        coverImage: 'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2.png',
        content: '今週金曜日の夜、2024貴州村スーパーリーググループステージ第2節の注目カードが実現する。黎平サンダーがホームで榕江ロケッツと対戦。昨年の対戦では、ロケッツが4-3の接戦を制した。今年、サンダーは新たな外国人選手を獲得して戦力を強化、一方のロケッツは予選で強力な攻撃力を見せている。この試合は間違いなくファンの情熱を再び呼び起こすだろう！',
        images: [
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2-1.png',
          'https://imagevsl1.oss-cn-chengdu.aliyuncs.com/gfootball/highlights/preview2-2.png'
        ],
        tags: ['プレビュー', '注目カード', 'ライバル対決', 'ダービー'],
        publishDate: '2024-03-20'
      }
    ]
  }
}; 