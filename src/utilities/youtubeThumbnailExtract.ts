//https://www.youtube.com/watch?v=0a_00nJ_Y88
//https://img.youtube.com/vi/0a_00nJ_Y88/hqdefault.jpg

const newImgUrl = (id: string) => {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

export const youtubeThumbnailExtract = (url: string) => {
  if (!url) return;

  if (url.includes("youtu.be")) {
    const videoId = url.split("be/")[1];
    return newImgUrl(videoId);
  } else if (url.includes("watch?v=")) {
    const videoId = url.split("v=")[1];
    return newImgUrl(videoId);
  }
};
