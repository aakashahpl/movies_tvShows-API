import express from "express";
import movie from "../model/movie.js";
import bodyParser from "body-parser";
const route1 = express.Router();

route1.get("/allMovies", async (req, res) => {
    try {
        const allMovies = await movie.find();
        res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});
route1.put("/update/:movie_id", async (req, res) => {
    try {
        const updateMovie = await movie.findOneAndUpdate(
            { movie_id: req.params.movie_id },
            { title: req.body.title }
        );
        return res
            .status(200)
            .json({ success:true,movie: updateMovie, message: "title updated" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});
route1.post("/create", async (req, res) => {
    try {
        const newMovie = req.body;
        console.log("hello");
        console.log(req.body);
        const addMovie = await new movie(newMovie);
        addMovie.save();
        return res
            .status(200)
            .json({ success:true,message: "movie is created successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});
route1.delete("/delete/:movie_id", async (req, res) => {
    try {
        const deleteMovie = await movie.findByIdAndDelete(req.params.movie_id);
        return res
            .status(200)
            .json({ success:true,movie: deleteMovie, message: "removed successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

export default route1;
