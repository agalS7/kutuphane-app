import categoryIcon from "../assets/category.svg";

export default function KategoriFiltre({
    kategori,
    handleKategori,
    kategoriler,
}) {
    return (
        <div className="group/filtre flex flex-1/3 items-center gap-2 bg-[#09080d]/80 py-2 shadow-md ring-1 ring-white/85 transition-all duration-200 focus-within:ring-[#7a50f5]/70 hover:ring-[#7a50f5]/70 sm:pr-6 sm:pl-4">
            <img
                src={categoryIcon}
                alt="category"
                className="hidden w-6 transition-all duration-200 group-hover/filtre:rotate-180 sm:block"
            />
            <select
                value={kategori}
                onChange={handleKategori}
                className="w-full cursor-pointer px-4 py-2 text-white/85 outline-none"
            >
                <option value="all" className="bg-[#09080d] text-white/85">
                    Hepsi
                </option>
                {kategoriler.map((kategori) => (
                    <option
                        key={kategori}
                        value={kategori}
                        className="bg-[#09080d] text-white/85"
                    >
                        {kategori}
                    </option>
                ))}
            </select>
        </div>
    );
}
