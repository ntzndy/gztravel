-- 数据插入脚本
USE travel_community;

-- 插入用户数据
INSERT INTO users (id, username, email, password, avatar, bio, location, followers_count, following_count, posts_count, likes_count) VALUES
(1, '小红薯用户', 'user1@example.com', 'password123', 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=150&h=150&fit=crop&crop=face', '热爱生活 | 美食探索者 | 旅行达人 ✨', '上海，中国', 1234, 567, 2, 5678),
(2, '美食探索家', 'foodie@example.com', 'password123', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', '专业美食博主，分享各地美食文化', '广州，中国', 2345, 432, 1, 256),
(3, '旅行达人', 'traveler@example.com', 'password123', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', '走遍天下，记录美好瞬间', '成都，中国', 3456, 654, 1, 342),
(4, '时尚博主', 'fashion@example.com', 'password123', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face', '时尚达人，分享穿搭心得', '北京，中国', 4567, 765, 1, 189),
(5, '健身教练', 'fitness@example.com', 'password123', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', '专业健身教练，倡导健康生活', '深圳，中国', 2109, 543, 1, 98),
(6, '摄影爱好者', 'photographer@example.com', 'password123', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', '用镜头记录世界的美好', '杭州，中国', 1876, 432, 1, 203);

-- 插入标签数据
INSERT INTO tags (name, posts_count) VALUES
('咖啡', 1), ('下午茶', 1), ('生活方式', 1),
('烘焙', 1), ('甜品', 1), ('DIY', 1),
('旅行', 1), ('日落', 1), ('海边', 1),
('穿搭', 1), ('时尚', 1), ('简约风', 1),
('瑜伽', 1), ('健身', 1), ('早晨', 1),
('摄影', 1), ('夜景', 1), ('城市', 1);

-- 插入帖子数据
INSERT INTO posts (id, user_id, content, location, likes_count, comments_count, created_at) VALUES
(1, 1, '今天的下午茶时光 ☕️ 在这家咖啡店发现了超好喝的手冲咖啡，环境也很棒！推荐给大家～', '上海静安区', 128, 23, DATE_SUB(NOW(), INTERVAL 2 HOUR)),
(2, 2, '周末自制的芝士蛋糕 🍰 第一次做居然成功了！口感超级绵密，奶香浓郁，家人都说好吃～', '广州天河区', 256, 45, DATE_SUB(NOW(), INTERVAL 4 HOUR)),
(3, 3, '海边日落真的太美了 🌅 这次旅行收获满满，心情都变得特别好！', '三亚海棠湾', 342, 67, DATE_SUB(NOW(), INTERVAL 6 HOUR)),
(4, 4, '今日穿搭分享 ✨ 简约风格也可以很有质感，关键在于颜色搭配和剪裁！', '北京朝阳区', 189, 34, DATE_SUB(NOW(), INTERVAL 8 HOUR)),
(5, 5, '早晨瑜伽练习 🧘‍♀️ 每天给自己一点时间静心，身体和心灵都会感谢你！', '深圳南山区', 98, 18, DATE_SUB(NOW(), INTERVAL 10 HOUR)),
(6, 6, '夜晚城市灯火 🌃 用相机记录下这个城市最美的瞬间，每一个光点都有故事～', '杭州西湖区', 203, 41, DATE_SUB(NOW(), INTERVAL 12 HOUR));

-- 插入帖子图片数据
INSERT INTO post_images (post_id, image_url, sort_order) VALUES
(1, 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop', 0),
(2, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', 0),
(3, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop', 0),
(4, 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop', 0),
(5, 'https://images.unsplash.com/photo-1506629905607-ce9fd2c2702d?w=400&h=400&fit=crop', 0),
(6, 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop', 0);

-- 插入帖子标签关联数据
INSERT INTO post_tags (post_id, tag_id) VALUES
(1, 1), (1, 2), (1, 3),  -- 咖啡、下午茶、生活方式
(2, 4), (2, 5), (2, 6),  -- 烘焙、甜品、DIY
(3, 7), (3, 8), (3, 9),  -- 旅行、日落、海边
(4, 10), (4, 11), (4, 12), -- 穿搭、时尚、简约风
(5, 13), (5, 14), (5, 15), -- 瑜伽、健身、早晨
(6, 16), (6, 17), (6, 18); -- 摄影、夜景、城市

-- 插入民族文化数据
INSERT INTO ethnic_cultures (name, description, image_url, region, highlights) VALUES
('苗族文化', '苗族是一个历史悠久的民族，以其精美的银饰、绚丽的服装和独特的歌舞文化而闻名。', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop', '贵州、湖南、云南', '["银饰工艺", "苗族歌舞", "传统服饰", "芦笙节"]'),
('侗族文化', '侗族以其独特的建筑艺术——风雨桥和鼓楼，以及美妙的侗族大歌而著称于世。', 'https://images.unsplash.com/photo-1585068529053-1d4e24a6e2b6?w=600&h=400&fit=crop', '贵州、广西、湖南', '["侗族大歌", "风雨桥", "鼓楼建筑", "织锦技艺"]'),
('布依族文化', '布依族有着丰富的民间文学和音乐传统，其蜡染技艺和民族服饰独具特色。', 'https://images.unsplash.com/photo-1578662994442-48f60103fc96?w=600&h=400&fit=crop', '贵州、云南', '["蜡染工艺", "山歌对唱", "传统节庆", "民族服饰"]');

-- 插入主理人数据
INSERT INTO guides (name, ethnicity, avatar, cover_image, bio, rating, review_count, experience_years, languages, specialties, personality, availability, contact) VALUES
('阿雅', '苗族', 'https://images.unsplash.com/photo-1494790108755-2616b612c03c?w=200&h=200&fit=crop&crop=face', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop', '大家好！我是阿雅，一个土生土长的苗族姑娘。从小在西江千户苗寨长大，对苗族文化有着深厚的感情和了解。我热爱分享我们民族的传统文化，会带你体验最地道的苗族生活！', 4.9, 156, 5, '["中文", "苗语", "英语"]', '["民族文化", "传统手工艺", "苗寨深度游"]', '["热情开朗", "文化底蕴深厚", "摄影达人"]', '每周二、四、六', 'WeChat: miaoya2024'),
('小龙', '侗族', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', 'https://images.unsplash.com/photo-1585068529053-1d4e24a6e2b6?w=800&h=400&fit=crop', '我是小龙，来自美丽的肇兴侗寨。作为侗族大歌的传承人，我最喜欢用歌声为大家介绍我们的家乡。侗族的鼓楼、风雨桥都有着深厚的文化内涵，让我带你走进侗族的建筑艺术世界！', 4.8, 89, 3, '["中文", "侗语"]', '["侗族大歌", "建筑文化", "生态旅游"]', '["幽默风趣", "歌声动人", "生态环保"]', '每周一、三、五、日', 'WeChat: dongxiaolong'),
('美玲', '布依族', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop', '我是美玲，布依族的蜡染艺术传承人。我热爱大自然，也热爱我们布依族的传统手工艺。我会带你欣赏贵州的自然美景，同时学习我们民族独特的蜡染技艺，让你的旅程充满艺术气息！', 4.7, 124, 4, '["中文", "布依语", "英语"]', '["蜡染工艺", "自然景观", "民族服饰"]', '["细心贴心", "手工艺高手", "自然爱好者"]', '每周一、二、四、六', 'WeChat: buyimeiling');

-- 插入旅游路线数据
INSERT INTO routes (guide_id, title, duration, price, highlights, itinerary) VALUES
(1, '西江千户苗寨深度文化体验', '2天1夜', 688.00, '["苗族银饰制作", "传统歌舞表演", "苗族美食品尝", "吊脚楼住宿体验"]', '["第一天：苗寨探索 + 银饰制作体验", "第二天：传统歌舞学习 + 美食制作"]'),
(1, '黔东南民族风情之旅', '3天2夜', 1288.00, '["多民族文化体验", "侗族大歌欣赏", "风雨桥参观", "特色民宿"]', '["第一天：西江苗寨文化体验", "第二天：肇兴侗寨探访", "第三天：从江鼓楼建筑艺术"]'),
(2, '侗族建筑艺术探索', '1天', 368.00, '["鼓楼文化讲解", "风雨桥历史", "侗族大歌表演", "传统建筑工艺"]', '["上午：鼓楼建筑艺术讲解", "下午：风雨桥文化探索 + 侗族大歌欣赏"]'),
(2, '黎平侗乡生态之旅', '2天1夜', 888.00, '["原始森林徒步", "侗族村寨体验", "生态农业参观", "夜听侗族大歌"]', '["第一天：森林徒步 + 村寨文化体验", "第二天：生态农业 + 传统手工艺学习"]'),
(3, '黄果树瀑布 + 蜡染体验', '1天', 458.00, '["黄果树瀑布观光", "蜡染工艺学习", "布依族服饰试穿", "特色午餐"]', '["上午：黄果树瀑布观光摄影", "下午：蜡染工艺体验 + 民族服饰试穿"]'),
(3, '荔波小七孔自然探秘', '2天1夜', 988.00, '["小七孔景区游览", "原始森林探索", "野生动植物观察", "篝火晚会"]', '["第一天：小七孔景区深度游览", "第二天：原始森林探秘 + 布依族文化体验"]');

-- 插入旅游景点数据
INSERT INTO tourist_spots (name, description, image_url, location, rating, type, highlights) VALUES
('黄果树瀑布', '中国最大的瀑布，也是世界著名大瀑布之一，被誉为"中华第一瀑"。', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', '贵州安顺', 4.8, '自然景观', '["壮观瀑布", "彩虹奇观", "喀斯特地貌", "民族风情"]'),
('荔波小七孔', '世界自然遗产地，被誉为"地球上的绿宝石"，拥有原始的自然风光。', 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop', '贵州荔波', 4.7, '自然景观', '["喀斯特森林", "湖光山色", "古桥文化", "生态旅游"]'),
('西江千户苗寨', '世界最大的苗族聚居村寨，保存最完整的苗族"原始生态"文化。', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop', '贵州雷山', 4.6, '文化景观', '["苗族文化", "吊脚楼建筑", "民族歌舞", "银饰工艺"]'),
('肇兴侗寨', '全国最大的侗族村寨之一，被誉为"侗乡第一寨"。', 'https://images.unsplash.com/photo-1585068529053-1d4e24a6e2b6?w=600&h=400&fit=crop', '贵州黎平', 4.5, '文化景观', '["侗族大歌", "鼓楼建筑", "风雨桥", "传统村落"]');

-- 插入村超比赛数据
INSERT INTO village_football (title, description, image_url, date, location, participants, features) VALUES
('榕江（三宝侗寨）和美乡村足球超级联赛', '贵州"村超"火遍全网，展现了乡村足球的魅力和少数民族地区的文化活力。', 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=400&fit=crop', '2024年夏季', '贵州榕江', '20支村队', '["民族歌舞表演", "特色美食展示", "传统服饰秀", "全民参与"]'),
('丹寨万达小镇村超友谊赛', '在美丽的丹寨万达小镇举办的村级足球比赛，融合了苗族文化元素。', 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop', '2024年春季', '贵州丹寨', '12支村队', '["苗族文化展示", "手工艺品展销", "民族美食节", "文化交流"]');

-- 插入一些点赞数据（示例）
INSERT INTO likes (user_id, post_id) VALUES
(2, 1), (3, 1), (4, 1), (5, 1), (6, 1),
(1, 2), (3, 2), (4, 2), (5, 2), (6, 2),
(1, 3), (2, 3), (4, 3), (5, 3), (6, 3),
(1, 4), (2, 4), (3, 4), (5, 4), (6, 4),
(1, 5), (2, 5), (3, 5), (4, 5), (6, 5),
(1, 6), (2, 6), (3, 6), (4, 6), (5, 6);

-- 插入一些预订数据（示例）
INSERT INTO bookings (guide_id, route_id, customer_name, customer_phone, travel_date, people_count, total_price, message, status) VALUES
(1, 1, '张三', '13800138001', '2024-03-15', 2, 1376.00, '希望能深度体验苗族文化', 'confirmed'),
(2, 3, '李四', '13800138002', '2024-03-20', 4, 1472.00, '对侗族建筑很感兴趣', 'pending'),
(3, 5, '王五', '13800138003', '2024-03-25', 3, 1374.00, '想学习蜡染技艺', 'confirmed');

COMMIT;