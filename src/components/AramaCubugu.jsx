import searchIcon from "../assets/search.svg";

export default function AramaCubugu({ aramaMetni, setAramaMetni }) {
    const handleArama = (e) => {
        localStorage.setItem("aramaMetni", e.target.value);
        setAramaMetni(e.target.value);
    }

    return (
        <div className="group/arama flex flex-2/3 items-center gap-2 rounded-tl-full bg-[#09080d]/80 py-2 pr-4 pl-6 shadow-md ring-1 ring-white/85 transition-all duration-200 focus-within:ring-[#7a50f5]/70 hover:ring-[#7a50f5]/70">
            <input
                type="text"
                placeholder="Kitap ara..."
                className="peer/arama w-full px-4 py-2 text-white/85 outline-none placeholder:text-[#7a50f5]/70"
                value={aramaMetni}
                onChange={handleArama}
            />
            <img
                src={searchIcon}
                alt="search"
                className="w-6 transition-all duration-200 group-hover/arama:rotate-180 peer-focus/arama:rotate-180"
            />
        </div>
    );
}
