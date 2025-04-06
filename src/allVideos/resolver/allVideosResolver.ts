import { updateViewsService } from "../service/allVideosService";

export const allVideosResolver = {
    Mutation:
    {
        updateViews: async (_: any, args: any) => {
            return updateViewsService(args.videoId);
        }
    }
}