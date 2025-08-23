import { GApps } from "./gappData"

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