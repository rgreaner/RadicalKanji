import axios from 'axios';

export default {
    getKanjis: function() {
        return axios.get("/api/kanji"); 
    },

    getKanji: function(id) {
        return axios.get("/api/kanji/" + id);
    },

    saveKanji: function(kanjiData) {
        return axios.post("/api/kanji", kanjiData);
    }
};