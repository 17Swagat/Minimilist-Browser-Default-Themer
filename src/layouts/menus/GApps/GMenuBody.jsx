import GAppsIcons from "../../../assets/icons/google_apps"

const GApps = [
    { name: "Search", icon: GAppsIcons.gsearch, url: "https://www.google.com" },
    { name: "Gemini", icon: GAppsIcons.gemini, url: "https://gemini.google.com/app" },
    { name: "Gmail", icon: GAppsIcons.gmail, url: "https://mail.google.com" },
    { name: "Drive", icon: GAppsIcons.drive, url: "https://drive.google.com" },
    { name: "Youtube", icon: GAppsIcons.youtube, url: "https://www.youtube.com" },
    { name: "YTMusic", icon: GAppsIcons.ytmusic, url: "https://music.youtube.com" },
    { name: "Keep", icon: GAppsIcons.keeps, url: "https://keep.google.com" },
    { name: "Forms", icon: GAppsIcons.forms, url: "https://docs.google.com/forms" },
    { name: "Slides", icon: GAppsIcons.slides, url: "https://docs.google.com/presentation" },
    { name: "Tasks", icon: GAppsIcons.tasks, url: "https://tasks.google.com" },
    { name: "Maps", icon: GAppsIcons.maps, url: "https://www.google.com/maps" },
    { name: "Calendar", icon: GAppsIcons.calendar, url: "https://calendar.google.com" },
    { name: "Earth", icon: GAppsIcons.earth, url: "https://earth.google.com" },
    { name: "Books", icon: GAppsIcons.books, url: "https://books.google.com" },
    { name: "Docs", icon: GAppsIcons.docs, url: "https://docs.google.com/document" },
    { name: "Finance", icon: GAppsIcons.finance, url: "https://finance.google.com" },
    { name: "Forms", icon: GAppsIcons.forms, url: "https://docs.google.com/forms" },
    { name: "Keeps", icon: GAppsIcons.keeps, url: "https://keep.google.com" },
    { name: "Maps", icon: GAppsIcons.maps, url: "https://www.google.com/maps" },
    { name: "Meet", icon: GAppsIcons.meet, url: "https://meet.google.com" },
    { name: "News", icon: GAppsIcons.news, url: "https://news.google.com" },
    { name: "Password", icon: GAppsIcons.password, url: "https://passwords.google.com" },
    { name: "Photos", icon: GAppsIcons.photos, url: "https://photos.google.com" },
    { name: "Scholar", icon: GAppsIcons.scholar, url: "https://scholar.google.com" },
    { name: "Sheets", icon: GAppsIcons.sheets, url: "https://docs.google.com/spreadsheets" },
    { name: "Shopping", icon: GAppsIcons.shopping, url: "https://shopping.google.com" },
    { name: "Sites", icon: GAppsIcons.sites, url: "https://sites.google.com" },
    { name: "Translate", icon: GAppsIcons.translate, url: "https://translate.google.com" },
    { name: "Webstore", icon: GAppsIcons.webstore, url: "https://chrome.google.com/webstore" },
    { name: "Travel", icon: GAppsIcons.travel, url: "https://www.google.com/travel" },
    { name: "Blogger", icon: GAppsIcons.blogger, url: "https://www.blogger.com" }
];

export function GMenu_Body() {
    return (
        <div className="w-full h-full grid grid-cols-3 sm:grid-cols-4 gap-4 p-4
          ">
            {
                GApps.map((app) => (
                    <div
                        key={app.name}
                        className="flex flex-col justify-center items-center cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-200"
                        onClick={() => window.open(app.url, "_blank")}
                    >
                        <img
                            src={app.icon}
                            alt={`${app.name} icon`}
                            className="w-14 h-14 mb-2"
                        />
                        <span className="text-white text-center">
                            {app.name}
                        </span>
                    </div>
                ))}
        </div>)
}