
const AllImages = () => {
    console.log('key', import.meta.env.VITE_API_KEY);
    return (
        <div className="flex justify-start gap-4">
            <a>All</a>
            <a>Photos</a>
            <a>Videos</a>
            <a>Freebies</a>
            <a>360</a>
        </div>
    );
};

export default AllImages;