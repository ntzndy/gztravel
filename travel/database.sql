-- 创建数据库
CREATE DATABASE travel_community CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE travel_community;

-- 用户表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    bio TEXT,
    location VARCHAR(100),
    followers_count INT DEFAULT 0,
    following_count INT DEFAULT 0,
    posts_count INT DEFAULT 0,
    likes_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 帖子表
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    content TEXT,
    location VARCHAR(100),
    likes_count INT DEFAULT 0,
    comments_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 帖子图片表
CREATE TABLE post_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    sort_order INT DEFAULT 0,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

-- 标签表
CREATE TABLE tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    posts_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 帖子标签关联表
CREATE TABLE post_tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE,
    UNIQUE KEY unique_post_tag (post_id, tag_id)
);

-- 民族文化表
CREATE TABLE ethnic_cultures (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    region VARCHAR(100),
    highlights JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 主理人表
CREATE TABLE guides (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    ethnicity VARCHAR(50),
    avatar VARCHAR(255),
    cover_image VARCHAR(255),
    bio TEXT,
    rating DECIMAL(2,1) DEFAULT 5.0,
    review_count INT DEFAULT 0,
    experience_years INT DEFAULT 0,
    languages JSON,
    specialties JSON,
    personality JSON,
    availability VARCHAR(100),
    contact VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 旅游路线表
CREATE TABLE routes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    guide_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    duration VARCHAR(50),
    price DECIMAL(10,2),
    highlights JSON,
    itinerary JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (guide_id) REFERENCES guides(id) ON DELETE CASCADE
);

-- 旅游景点表
CREATE TABLE tourist_spots (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    location VARCHAR(100),
    rating DECIMAL(2,1) DEFAULT 5.0,
    type VARCHAR(50),
    highlights JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 村超比赛表
CREATE TABLE village_football (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    date VARCHAR(50),
    location VARCHAR(100),
    participants VARCHAR(100),
    features JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 点赞表
CREATE TABLE likes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_post_like (user_id, post_id)
);

-- 预订表
CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    guide_id INT NOT NULL,
    route_id INT NOT NULL,
    customer_name VARCHAR(50) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    travel_date DATE NOT NULL,
    people_count INT NOT NULL,
    total_price DECIMAL(10,2),
    message TEXT,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (guide_id) REFERENCES guides(id),
    FOREIGN KEY (route_id) REFERENCES routes(id)
);