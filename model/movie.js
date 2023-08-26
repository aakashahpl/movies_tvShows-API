import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  movie_id: {
    type: String,
    required: true,
    minLength: 1,
  },
  title: {
    type: String,
    required: true,
    minLength: 2,
  },

  directors: {
    type: String,
    required: true,
    minLength: 2,
  },
  producers: {
    type: String,
    required: true,
    minLength: 2,
  },
  languages:{
    type: String,
    required: true,
    minLength: 2,
  },
  release_date:{
    type: String,
    required: true,
    minLength: 2,
  },
  genres:{
    type: [String],
    required: true,
    minLength: 2,
  }
});


const movieModel = mongoose.model("movie",movieSchema);

export default movieModel;