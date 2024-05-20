import { DallE } from "../../models/Prompt/dallePrompt.model.js";

// create dalle prompt
export const createDallE = async (req, res) => {
    try {
        const newPrompt = new DallE(req.body);
        const savePrompt = await newPrompt.save();
        return res.status(200).json(savePrompt);
    } catch (error) {
        return res.status(500).json({ msg: `Failed to create dalle prompt ${error}` })
    }
}

//get all prompts
export const getAllDallE = async (req, res) => {
    try {
        const dallPrompt = await DallE.find();
        return res.status(200).json(dallPrompt);
    } catch (error) {
        return res.status(500).json({ msg: `Failed to get dallPrompts ${error}` })
    }
}

//get single prompt
export const getSingleDallE = async (req, res) => {
    const id = req.params.id;
    try {
        const dallPrompt = await DallE.findById(id);
        return res.status(200).json(dallPrompt);
    } catch (error) {
        return res.status(500).json({ msg: `Failed to get single dalle prompt` })
    }
}

//update single prompt
export const updateDallE = async (req, res) => {
    const id = req.params.id;
    try {
        const updatePrompt = await DallE.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(updatePrompt);
    } catch (error) {
        res.status(500).json({ msg: `Failde to update dalle prompt:${error}` })
    }
}

//delete single prompt
export const deleteDallE = async (req, res) => {
    const id = req.params.id;
    try {
        await DallE.findByIdAndDelete(id);
        return res.status(200).json({ msg: "Dalle prompt has been deleted successfully" })
    } catch (error) {

    }
}