import axios from 'axios';

export default {
    getKanjis: function(res) {
        console.log("here we are in the getKanji function")
		return axios.get("/api/kanji")
        .then(response => {
		console.log(response); 
        console.log("here we are in the .then of .get")
		})
		.catch(err => console.log(err))
    },

    getKanji: function(id) {
        return axios.get("/api/kanji/" + id);
    },

    saveKanji: function(kanjiData) {
        return axios.post("/api/kanji", kanjiData);
    }
};