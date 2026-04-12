interface VideoTitleProps {
  title: string;
  overview: string;
}

const VideoTitle = ({title ,overview}: VideoTitleProps) => {
    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="w-1/3 py-6 text=lg ">{overview}</p>
            <div>
                <button className="rounded-lg p-4 px-12 text-2xl text-white bg-gray-500/50">▶Play</button>
                <button className="bg-gray-500/50 rounded-lg p-4 px-12 mx-2 text-2xl text-white">More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;