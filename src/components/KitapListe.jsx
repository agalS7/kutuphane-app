import AramaCubugu from "./AramaCubugu";
import KategoriFiltre from "./KategoriFiltre";
import KitapKarti from "./KitapKarti";
import * as motion from "motion/react-client";

export default function KitapListe({
    kitaplar,
    kategoriler,
    handleKategori,
    aramaMetni,
    kategori,
    favoriler,
    setAramaMetni,
    addFavori,
    removeFavori,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
            }}
            className="flex flex-2/3 flex-col"
        >
            <div className="flex w-full gap-0.5">
                <AramaCubugu {...{ aramaMetni, setAramaMetni }} />
                <KategoriFiltre
                    {...{ handleKategori, kategori, kategoriler }}
                />
            </div>
            <div className="mt-1 grid flex-1 grid-cols-1 place-items-center justify-items-center gap-4 bg-[#09080d]/80 px-4 py-8 shadow-md ring-1 ring-white/85 sm:grid-cols-2 lg:grid-cols-3">
                {kitaplar.map((kitap) => (
                    <KitapKarti
                        key={kitap.id}
                        favorideMi={favoriler.includes(kitap.id)}
                        {...{ kitap, addFavori, removeFavori }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
