type RecentImage = {
  id: number;
  imageUrl?: string;
  time: string;
  species: string;
};

const RecentImageCard: React.FC<{ image: RecentImage }> = ({ image }) => (
  <div className="flex w-[140px] flex-col items-center rounded-xl bg-white p-2 shadow">
    <img
      src={
        image.imageUrl || "https://via.placeholder.com/140x100.png?text=Bird"
      }
      alt={`Seen at ${image.time}`}
      className="h-[100px] w-full rounded-md object-cover"
    />
    <div className="mt-2 text-center">
      <p className="text-sm font-semibold text-gray-700">{image.species}</p>
      <p className="text-xs text-gray-400">{image.time}</p>
    </div>
  </div>
);

export default RecentImageCard;
