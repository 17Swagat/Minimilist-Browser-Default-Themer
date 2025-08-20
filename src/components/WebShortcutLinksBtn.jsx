export function WebShortcutLinksButton(
    key_,
    siteName = '', 
    siteUrl = '', 
    siteFavicon = '') {

    const openUrlInNewTab = (url) =>{
        window.open(url, '_blank', 'noopener', 'noreferrer');
    }

    return (
        <div key={key_} className="w-[100px] h-[100px] rounded-2xl bg-green-300" onClick={()=>openUrlInNewTab(siteUrl)}>
            
            {/* FavIcon Website */}
            <div className="w-full h-2/3 bg-amber-500">
                <img src={siteFavicon} alt={``} className="w-full h-full object-cover " />
            </div>
            
            {/* Website Name */}
            <div className="w-full h-1/3 bg-amber-900">
                <span className="text-white">{siteName}</span>
            </div>
        </div>
    );
}

export function AddNewWebShortcutLinkButton({onClick}) {
    return (
        <div className="w-[100px] h-[100px] rounded-2xl bg-red-500 flex justify-center-safe items-center-safe text-6xl active:bg-yellow-400 transition 0.3s ease select-none" onClick={onClick}> + </div>
    );
}