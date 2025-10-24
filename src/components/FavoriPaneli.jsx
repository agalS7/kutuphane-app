import * as motion from "motion/react-client";

export default function FavoriPaneli({ kitaplar, favoriler, removeFavori }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 },
            }}
            className="flex-1/3 rounded-br-xl bg-[#09080d]/80 shadow-md ring-1 ring-white/85"
        >
            <h2 className="bg-amber-50 p-3 text-center text-2xl font-extrabold text-amber-950">
                FAVORİLER{" "}
                <span className="bg-linear-to-r from-violet-500 to-blue-600 bg-clip-text text-transparent">
                    [{favoriler.length}]
                </span>
            </h2>
            <div className="mt-4 flex flex-col gap-4 px-4 py-8">
                {favoriler.length === 0
                    ? "Favori kitap yok."
                    : favoriler.map((kitap_id) => {
                          const kitap = kitaplar.find(
                              (kitap) => kitap.id === kitap_id,
                          );
                          return (
                              <div
                                  key={kitap_id}
                                  className="flex justify-between gap-2 rounded-md bg-black/50"
                              >
                                  <div className="flex items-center gap-2 p-1">
                                      <img
                                          src={kitap.resim}
                                          alt={kitap.baslik}
                                          className="h-16 w-12 rounded-md"
                                      />
                                      <h3 className="line-clamp-1 text-lg font-bold text-white/85">
                                          {kitap.baslik}
                                      </h3>
                                  </div>
                                  <button
                                      onClick={() => removeFavori(kitap_id)}
                                      className="cursor-pointer rounded-md bg-linear-to-r from-red-500 to-red-950 p-2 text-white/85 transition duration-200 hover:to-red-700 hover:text-white"
                                  >
                                      Kaldır
                                  </button>
                              </div>
                          );
                      })}
            </div>
        </motion.div>
    );
}
