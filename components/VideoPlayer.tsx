import { Video, CloudinaryContext } from "cloudinary-react";

const VideoPlayer = () => {
	return (
		<CloudinaryContext cloud_name="builder9977">
			<div>
				<Video
					autoPlay
					muted
					loop
					playsInline
					className="z-0 absolute left-0 top-0 w-full h-3/5 object-cover"
					publicId="vid_builder"
				/>
			</div>
		</CloudinaryContext>
	);
};

export default VideoPlayer;
