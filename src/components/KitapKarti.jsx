import halfStarIcon from "../assets/half-star.svg";
import starIcon from "../assets/star.svg";

export default function KitapKarti({
    kitap: { id, baslik, yazar, kategori, resim },
    favorideMi,
    addFavori,
    removeFavori,
}) {
    return (
        <div className="flex w-full max-w-56 gap-0.5 bg-[#09080d]/50 shadow-md">
            <div className="flex flex-col overflow-hidden rounded-l-md ring-1 ring-white/85">
                <div className="flex flex-1 flex-col items-center gap-2 px-2 py-4">
                    <img
                        src={resim}
                        alt={baslik}
                        className="h-48 w-32 rounded-md"
                    />
                    <h2 className="line-clamp-1 text-center text-lg font-bold text-white/85">
                        {baslik}
                    </h2>
                    <p className="text-center">
                        <span className="text-red-500">{yazar}</span> tarafından
                    </p>
                </div>
                <button
                    className={`flex w-full cursor-pointer items-center justify-center gap-2 p-2 transition duration-300 ${favorideMi ? "bg-amber-400 text-amber-50 hover:bg-amber-300" : "bg-amber-50 text-amber-900 hover:bg-amber-200"}`}
                    onClick={() =>
                        favorideMi ? removeFavori(id) : addFavori(id)
                    }
                >
                    <img
                        src={favorideMi ? starIcon : halfStarIcon}
                        alt="star"
                        className="size-6"
                    />
                    {favorideMi ? "Favorilerden Çıkar" : "Favorilere Ekle"}
                </button>
            </div>
            <div className="flex items-center justify-center rounded-r-md bg-white p-0.5 text-gray-950 ring-1 ring-white/85">
                <span
                    className="text-xl font-bold uppercase"
                    style={{
                        writingMode: "vertical-rl",
                        textOrientation: "upright",
                    }}
                >
                    {kategori}
                </span>
            </div>
        </div>
    );
}
