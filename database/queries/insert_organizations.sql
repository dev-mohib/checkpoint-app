INSERT INTO users (id, name, username, email, password, type, address)
VALUES
    ('1','John','john.1', 'john.1@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'New York'),
    ('2','Jane','jane.2', 'jane.2@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'London'),
    ('3','Michael','michael.3', 'michael.3@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'Paris'),
    ('4','Emily','emily.4', 'emily.4@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'Singapore'),
    ('5','David','david.5', 'david.5@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'Karachi'),
    ('6','Sarah','sarah.6', 'sarah.6@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'Mumbai'),
    ('7','Christopher','christopher.7', 'christopher.7@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'Washinton'),
    ('8','Olivia','olivia.8', 'olivia.8@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'Birminghum'),
    ('9','Daniel','daniel.9', 'daniel.9@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe','organization', 'Lahore'),
    ('10','Sophia','sophia.1', 'sophia.10@example.com', '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe', 'organization', 'New Delhi');


INSERT INTO organizations (id, name, user_id, logo)
VALUES
    ('1','John Org', '1','/laptop.jpg'),
    ('2','Jane Org', '2','/laptop.jpg'),
    ('3','Michael Org', '3','/laptop.jpg'),
    ('4','Emily Org', '4','/laptop.jpg'),
    ('5','David Org', '5','/laptop.jpg'),
    ('6','Sarah Org', '6','/laptop.jpg'),
    ('7','Christopher Org', '7','/laptop.jpg'),
    ('8','Olivia Org', '8','/laptop.jpg'),
    ('9','Daniel Org', '9','/laptop.jpg'),
    ('10','Sophia Org', '10','/laptop.jpg');