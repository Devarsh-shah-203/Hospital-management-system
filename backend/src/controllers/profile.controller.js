import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { getMyProfileService,updateMyProfileService} from "../services/profile.service.js";

export const getMyProfile = asyncHandler(async (req, res) => {
  const profile = await getMyProfileService(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      profile,
      "Profile fetched successfully"
    )
  );
});



export const updateMyProfile = asyncHandler(async (req, res) => {
  const profile = await updateMyProfileService(
    req.user._id,
    req.body
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      profile,
      "Profile updated successfully"
    )
  );
});