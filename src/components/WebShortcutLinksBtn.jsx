export function WebShortcutLinksButton() {
    return (
        <div className="w-[100px] h-[100px] rounded-2xl bg-green-300"></div>
    );
}


export function AddNewWebShortcutLinkButton({onClick}) {
    return (
        <div className="w-[100px] h-[100px] rounded-2xl bg-red-500 flex justify-center-safe items-center-safe text-6xl active:bg-yellow-400 transition 0.3s ease" onClick={onClick}> + </div>
    );
}