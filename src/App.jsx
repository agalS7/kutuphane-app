import logo from "./assets/mini_kutuphane.png";
import githubLogo from "./assets/github.svg";
import { useState } from "react";
import KitapListe from "./components/KitapListe";
import FavoriPaneli from "./components/FavoriPaneli";

const kitaplar = [
    {
        id: 1001,
        baslik: "Neuromancer",
        yazar: "William Gibson",
        kategori: "Bilim Kurgu",
        resim: "/covers/neuromancer.jpg",
    },
    {
        id: 1002,
        baslik: "Snow Crash",
        yazar: "Neal Stephenson",
        kategori: "Bilim Kurgu",
        resim: "/covers/snow_crash.jpg",
    },
    {
        id: 1003,
        baslik: "Do Androids Dream of Electric Sheep?",
        yazar: "Philip K. Dick",
        kategori: "Bilim Kurgu",
        resim: "/covers/androids.png",
    },
    {
        id: 1004,
        baslik: "Life 3.0: Being Human in the Age of Artificial Intelligence",
        yazar: "Max Tegmark",
        kategori: "Teknoloji",
        resim: "/covers/life30.jpg",
    },
    {
        id: 1005,
        baslik: "Homo Deus: A Brief History of Tomorrow",
        yazar: "Yuval Noah Harari",
        kategori: "Teknoloji",
        resim: "/covers/homo_deus.jpg",
    },
    {
        id: 1006,
        baslik: "The Circle",
        yazar: "Dave Eggers",
        kategori: "Teknoloji",
        resim: "/covers/circle.jpg",
    },
    {
        id: 1007,
        baslik: "Clean Code: A Handbook of Agile Software Craftsmanship",
        yazar: "Robert C. Martin",
        kategori: "Programlama",
        resim: "/covers/clean_code.jpg",
    },
    {
        id: 1008,
        baslik: "1984",
        yazar: "George Orwell",
        kategori: "Klasik Roman",
        resim: "/covers/1984.jpg",
    },
    {
        id: 1009,
        baslik: "Suç ve Ceza",
        yazar: "Fyodor Dostoyevski",
        kategori: "Klasik Roman",
        resim: "/covers/suc_ceza.jpg",
    },
];

const kategoriler = [...new Set(kitaplar.map((kitap) => kitap.kategori))];

export default function App() {
    const [aramaMetni, setAramaMetni] = useState(
        localStorage.getItem("aramaMetni") || "",
    );
    const [kategori, setKategori] = useState(
        localStorage.getItem("kategori") || "all",
    );
    const [favoriler, setFavoriler] = useState(
        localStorage.getItem("favoriler")
            ? JSON.parse(localStorage.getItem("favoriler"))
            : [],
    );

    const filteredKitaplar = kitaplar.filter(
        (kitap) =>
            (kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
                kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase())) &&
            (kategori === "all" || kitap.kategori === kategori),
    );

    const handleKategori = (e) => {
        localStorage.setItem("kategori", e.target.value);
        setKategori(e.target.value);
    };

    const addFavori = (kitap_id) => {
        const newFavoriler = [...favoriler, kitap_id];
        setFavoriler(newFavoriler);
        localStorage.setItem("favoriler", JSON.stringify(newFavoriler));
    };

    const removeFavori = (kitap_id) => {
        const newFavoriler = favoriler.filter((id) => id !== kitap_id);
        setFavoriler(newFavoriler);
        localStorage.setItem("favoriler", JSON.stringify(newFavoriler));
    };

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-4 z-50 mx-8 my-4 flex items-center gap-8">
                <div className="flex flex-1 items-center justify-center gap-8 rounded-full bg-[#09080d]/80 py-2 shadow-md backdrop-blur-sm">
                    <img src={logo} alt="logo" className="w-48" />
                </div>
                <a
                    href="https://github.com/agalS7/kutuphane-app"
                    target="_blank"
                >
                    <img src={githubLogo} alt="github" className="size-10" />
                </a>
            </header>
            <div className="container mx-auto my-8 flex flex-1 flex-col items-stretch gap-1 px-4 sm:flex-row">
                <KitapListe
                    kitaplar={filteredKitaplar}
                    {...{
                        kategoriler,
                        handleKategori,
                        aramaMetni,
                        kategori,
                        favoriler,
                        setAramaMetni,
                        addFavori,
                        removeFavori,
                    }}
                />
                <FavoriPaneli {...{ favoriler, removeFavori, kitaplar }} />
            </div>
            <footer className="relative p-6 text-center text-lg text-white/85 shadow-md ring-1 ring-white/85">
                <div className="absolute inset-0 bg-[url('/agals_banner.jpg')] bg-cover bg-center bg-no-repeat opacity-20" />
                <div className="relative z-10">
                    Ramazan "agalS" Bodur tarafından ❤️'le geliştirildi
                </div>
            </footer>
        </div>
    );
}
