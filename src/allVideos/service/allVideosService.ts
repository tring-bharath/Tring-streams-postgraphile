import { AppDataSource } from "../../data-source"
import { videos } from "../entities/videos"

export const updateViewsService = async (id: any) => {
    const videoRepo = AppDataSource.getRepository(videos);
    const video = await videoRepo.findOne({ where: { id } });
    if (!video) {
        throw new Error("No video Found")
    }
    video.views = video.views + 1;
    videoRepo.save(video);
    return "views updated"
}