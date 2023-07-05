INSERT INTO users (id, name, username, email, password, type, address)
VALUES
    ('11','Herry','herry.11' ,'herry.11@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'Tokyo'),
    ('12','Mitchel','mitchel.12', 'mitchel.12@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'Sydney'),
    ('13','Ahmed','ahmed.13', 'ahmed.13@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'Perth'),
    ('14','Abdullah','abdullah.14', 'abdullah.14@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'London'),
    ('15','Rahul','rahul.15', 'rahul.15@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'Singapore'),
    ('16','Mohib','mohib.16', 'mohib.16@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'Singapore'),
    ('17','Robert','robert.17', 'robert.17@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'Mumbai'),
    ('18','natasha','natasha.18', 'natasha.18@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'Mosco'),
    ('19','kamala','kamala.19', 'kamala.19@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','instructor', 'Maxico'),
    ('20','Tim','tim.20', 'tim.20@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe', 'instructor', 'Yorkshire');


INSERT INTO instructors (id, created_by, user_id, qualification)
VALUES
    ('1','1', '11','MSc Computer Science'),
    ('2','1', '12','MBBS'),
    ('3','2', '13','Phd Physics'),
    ('4','2', '14','MSc Electrical Engineering'),
    ('5','3', '15','MBA'),
    ('6','4', '16','MSc Data Science'),
    ('7','5', '17','MSc Biotechnology'),
    ('8','5', '18','MSc Quatum Physics'),
    ('9','7', '19','Doctor of Physiotherapy'),
    ('10','8', '20','Doctor of Psychology');