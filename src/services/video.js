import api from "./api";

export const createVideo = async (videoData) => {
  try {
    const response = await api.post("/videos", videoData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getVideos = async () => {
  try {
    const response = await api.get("/videos");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getVideo = async (videoId) => {
  try {
    const response = await api.get(`/videos/${videoId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateVideo = async (videoId, videoData) => {
  try {
    const response = await api.patch(`/videos/${videoId}`, videoData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    await api.delete(`/videos/${videoId}`);
  } catch (error) {
    throw error.response.data;
  }
};

export const uploadVideo = async (videoFile) => {
  try {
    const formData = new FormData();
    formData.append("file", {
      uri: videoFile.uri,
      type: videoFile.type,
      name: videoFile.name,
    });

    const response = await api.post(`/videos/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.streaming_url;
  } catch (error) {
    throw error.response.data;
  }
};

export const createEpisode = async (videoId, episodeData) => {
  try {
    const response = await api.post(`/videos/${videoId}/episodes`, episodeData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getEpisodes = async (videoId) => {
  try {
    const response = await api.get(`/videos/${videoId}/episodes`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getEpisode = async (videoId, episodeId) => {
  try {
    const response = await api.get(`/videos/${videoId}/episodes/${episodeId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateEpisode = async (videoId, episodeId, episodeData) => {
  try {
    const response = await api.patch(
      `videos/${videoId}/episodes/${episodeId}`,
      episodeData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteEpisode = async (videoId, episodeId) => {
  try {
    await api.delete(`/videos/${videoId}/episodes/${episodeId}`);
  } catch (error) {
    throw error.response.data;
  }
};

export const createReview = async (videoId, reviewData) => {
  try {
    const response = await api.post(`/videos/${videoId}/reviews`, reviewData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getReviews = async (videoId) => {
  try {
    const response = await api.get(`/videos/${videoId}/reviews`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getReview = async (videoId, episodeId) => {
  try {
    const response = await api.get(`/videos/${videoId}/reviews/${episodeId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateReview = async (videoId, episodeId, reviewData) => {
  try {
    const response = await api.patch(
      `videos/${videoId}/reviews/${episodeId}`,
      reviewData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteReview = async (videoId, episodeId) => {
  try {
    await api.delete(`/videos/${videoId}/reviews/${episodeId}`);
  } catch (error) {
    throw error.response.data;
  }
};
