import express from "express";
import tvShow from "../model/tvShow.js";

const route2 = express.Router();

route2.get("/alltvShows", async (req, res) => {
    try {
        const allShows = await tvShow.find();
        res.status(200).json(allShows);
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});
route2.put("/update/:show_id", async (req, res) => {
    try {
        const updateShow = await tvShow.findOneAndUpdate(
            { showID: req.params.show_id },
            { title: req.body.title }
        );
        return res
            .status(200)
            .json({ success:true,show: updateShow, message: "title updated" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});
route2.post("/create", async (req, res) => {
    try {
        const newShow = req.body;
        const addShow = await new tvShow(newShow);
        addShow.save();
        return res
            .status(200)
            .json({ success:true,message: "tvShow is created successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});
route2.delete("/delete/:show_id", async (req, res) => {
    try {
        const deleteShow = await tvShow.findByIdAndDelete(req.params.show_id);
        return res
            .status(200)
            .json({ success:true,show: deleteShow, message: "removed successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

export default route2;
