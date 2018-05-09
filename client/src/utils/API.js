import axios from 'axios';

export default {
    getKanjis: function(res) {
        console.log("here we are in the getKanji function")
		return axios.get("/api/kanji")
        
    },

    getKanji: function(id) {
        return axios.get("/api/kanji/" + id);
    },

    saveKanji: function(kanjiData) {
        return axios.post("/api/kanji", kanjiData);
    }
};