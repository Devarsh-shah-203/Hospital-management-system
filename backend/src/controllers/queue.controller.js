import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  createQueueEntryService,
  getMyQueueService,
} from "../services/queue.service.js";


export const getMyQueue = asyncHandler(async (req, res) => {
  const queue = await getMyQueueService(req.user.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      queue,
      "Queue fetched successfully"
    )
  );
});