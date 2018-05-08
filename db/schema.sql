DROP DATABASE IF EXISTS radicalKanji_db;
CREATE DATABASE radicalKanji_db;

use radicalKanji_db;

CREATE TABLE user (
        userName VARCHAR (255),
        password VARCHAR (255),
    kanjiLearned Integer,
);

CREATE TABLE kanji (
        meaning VARCHAR (255),
      kanjiLook VARCHAR (255),
     kanjiStory VARCHAR (255),
    kanjiStroke VARCHAR (255)
);
