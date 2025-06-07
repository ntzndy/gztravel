// 贵州旅游与本地特色 mock 帖子数据
const mockPosts = [
  {
    id: 1,
    title: '夜宿西江千户苗寨，感受苗族风情',
    content: '在西江千户苗寨住了一晚，夜色下的苗寨灯火通明，民族歌舞表演太震撼了！推荐大家一定要体验苗家长桌宴，和当地人一起跳舞喝米酒，真的很难忘。',
    user: {
      name: '不吃香菜',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop'],
    tags: ['贵州', '苗寨', '民族文化', '长桌宴'],
    likes: 188,
    comments: 2,
    timeAgo: '1小时前',
    commentList: [
      {
        id: 1,
        user: {
          name: '小王同学',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
        },
        content: '苗寨的夜景真的很美，羡慕你！',
        time: '50分钟前'
      },
      {
        id: 2,
        user: {
          name: '奶茶三分甜',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
        },
        content: '长桌宴好有氛围，想去体验！',
        time: '20分钟前'
      }
    ]
  },
  {
    id: 2,
    title: '贵阳青云市集的宝藏咖啡店',
    content: '贵阳青云市集的咖啡小店，老板是本地人，手冲咖啡和酸汤鱼都很有特色，环境文艺又安静。适合一个人发呆，也适合和朋友小聚。',
    user: {
      name: '猫猫头',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    images: ['https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop'],
    tags: ['贵阳', '咖啡店', '市集', '美食'],
    likes: 102,
    comments: 1,
    timeAgo: '2小时前',
    commentList: [
      {
        id: 1,
        user: {
          name: '健身小熊',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
        },
        content: '下次去贵阳一定要打卡！',
        time: '1小时前'
      }
    ]
  },
  {
    id: 3,
    title: '黄果树瀑布的壮观与苗银体验',
    content: '黄果树瀑布真的太壮观了！水雾扑面而来，拍照超级出片。景区内的苗族银饰体验也很有趣，手工制作过程很有意思。',
    user: {
      name: '小王同学',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    images: ['https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop'],
    tags: ['黄果树瀑布', '贵州', '自然风光', '银饰体验'],
    likes: 245,
    comments: 0,
    timeAgo: '3小时前',
    commentList: []
  },
  {
    id: 4,
    title: '镇远古镇民宿体验',
    content: '在镇远古镇的民宿住了两晚，推窗就是舞阳河。晚上沿河散步，古镇夜景美到不想回家。民宿老板还推荐了很多本地小吃。',
    user: {
      name: '奶茶三分甜',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
    },
    images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop'],
    tags: ['镇远古镇', '民宿', '夜景', '贵州'],
    likes: 167,
    comments: 1,
    timeAgo: '5小时前',
    commentList: [
      {
        id: 1,
        user: {
          name: '摄影路人甲',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        },
        content: '古镇的夜色真的很有味道！',
        time: '2小时前'
      }
    ]
  },
  {
    id: 5,
    title: '贵阳肠旺面初体验',
    content: '第一次在贵阳吃到正宗肠旺面，辣椒香气十足，配上一杯酸梅汤，完美！小店老板很热情，还教我怎么吃才地道。',
    user: {
      name: '健身小熊',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop'],
    tags: ['贵阳', '肠旺面', '美食', '小吃'],
    likes: 134,
    comments: 0,
    timeAgo: '7小时前',
    commentList: []
  },
  {
    id: 6,
    title: '安顺屯堡非遗地戏体验',
    content: '在安顺的屯堡村落体验了一次地戏面具彩绘，感受到非遗文化的魅力。村里老人很热情，讲了很多屯堡故事。',
    user: {
      name: '摄影路人甲',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    images: ['https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop'],
    tags: ['安顺', '屯堡', '非遗', '地戏'],
    likes: 156,
    comments: 0,
    timeAgo: '9小时前',
    commentList: []
  }
];

export default mockPosts; 