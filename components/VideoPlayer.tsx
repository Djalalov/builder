import { Video, CloudinaryContext } from "cloudinary-react";

const VideoPlayer = () => {
	return (
		<CloudinaryContext cloud_name="builder9977">
			<div>
				<Video
					autoPlay
					loop
					playsInline
					className="z-0 absolute left-0 top-0 w-full h-1/2 object-cover"
					publicId="vid_builder"
				/>
			</div>
		</CloudinaryContext>
	);
};

export default VideoPlayer;
