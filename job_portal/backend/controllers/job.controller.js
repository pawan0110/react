import { Job } from "../models/job.model.js";

// Create a new job
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;

    const userId = req.id; // from auth middleware

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newJob = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: salary,
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId, // ✅ lowercase
      created_by: userId,
    });

    return res.status(201).json({
      message: "New job created successfully",
      newJob,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

// Get all jobs
// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });

    // ✅ Always return 200, even if no jobs found
    return res.status(200).json({
      jobs,
      success: true,
      message: jobs.length ? "Jobs fetched successfully" : "No jobs found",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};


// Get job by ID
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const foundJob = await Job.findById(jobId).populate("company", "name logo");

    if (!foundJob) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({ job: foundJob, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

// Get jobs created by admin
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId }).populate({
      path:'company',
      createdAt:-1
    });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }

    return res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};
