import { Company } from "../models/company.model.js";
import getDatauri from "../utils/datauri.js";
import cloudinary from "../utils/cloudnary.js";

// Register Company
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required.",
        success: false,
      });
    }

    let existingCompany = await Company.findOne({ name: companyName });
    if (existingCompany) {
      return res.status(400).json({
        message: "You can't register the same company.",
        success: false,
      });
    }

    const company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully.",
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// Get All Companies by User
export const getCompany = async (req, res) => {
  try {
    const userId = req.id;

    // Use the correct field name in the query
    const companies = await Company.find({ userId });

    if (!companies || companies.length === 0) {
      return res.status(200).json({
        message: "No companies found",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// Get Company by ID
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// Update Company Info
// Update Company Info
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const  file = req.file;
    const fileUri = getDatauri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;

    // collect update fields
    const updateData = { name, description, website, location, logo };

    // ✅ check if a file was uploaded
    if (req.file) {
      console.log("📂 File uploaded:", req.file.originalname);

    }

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated",
      company,
      success: true,
    });
  } catch (error) {
    console.error("❌ updateCompany error:", error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};

