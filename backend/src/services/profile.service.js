import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getMyProfileService = async (userId) => {
    const user = await User.findById(userId).select(
      "-password -refreshToken -resetPasswordToken"
    );
  
    if (!user) {
      throw new ApiError(404, "User not found");
    }
  
    if (user.role === "PATIENT") {
      return {
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role: user.role,
        createdAt: user.createdAt,
      };
    }
  
    return {
      _id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      role: user.role,
      specialization: user.specialization,
      department: user.department,
      experience: user.experience,
      workingHours: user.workingHours,
      consultationDuration: user.consultationDuration,
      workingDays: user.workingDays,
      isAvailable: user.isAvailable,
      createdAt: user.createdAt,
    };
  };

  
  export const updateMyProfileService = async (userId, data) => {
    const user = await User.findById(userId);
  
    if (!user) {
      throw new ApiError(404, "User not found");
    }
  
    // Common fields
    if (data.username !== undefined) user.username = data.username;
    if (data.phone !== undefined) user.phone = data.phone;
  
    // Doctor-only fields
    if (user.role === "DOCTOR") {
      if (data.specialization !== undefined)
        user.specialization = data.specialization;
  
      if (data.department !== undefined)
        user.department = data.department;
  
      if (data.experience !== undefined)
        user.experience = data.experience;
  
      if (data.consultationDuration !== undefined)
        user.consultationDuration = data.consultationDuration;
  
      if (data.workingHours !== undefined)
        user.workingHours = data.workingHours;
  
      if (data.workingDays !== undefined)
        user.workingDays = data.workingDays;
  
      if (data.isAvailable !== undefined)
        user.isAvailable = data.isAvailable;
    }
  
    await user.save();
  
    // Return only the fields appropriate for the user's role
    if (user.role === "PATIENT") {
      return {
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    }
  
    return {
      _id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      role: user.role,
      specialization: user.specialization,
      department: user.department,
      experience: user.experience,
      workingHours: user.workingHours,
      consultationDuration: user.consultationDuration,
      workingDays: user.workingDays,
      isAvailable: user.isAvailable,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  };