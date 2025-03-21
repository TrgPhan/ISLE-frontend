type HandsModule = {
    Hands: any;
    Camera: any;
    Draw: any;
} | null;

export const loadHandsModule = async (): Promise<HandsModule> => {
    if (typeof window !== "undefined") {
        const { Hands } = await import("@mediapipe/hands");
        const { Camera } = await import("@mediapipe/camera_utils");
        const Draw = await import("@mediapipe/drawing_utils");
        return { Hands, Camera, Draw };
    }
    return null;
};