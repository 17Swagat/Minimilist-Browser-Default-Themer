import { useState, useEffect} from 'react';

// TODO: "To completely understand what this component is doing."
export function WebShortcutLinksButton({
    siteName = 'Website', 
    siteUrl = 'https://example.com', 
    siteFavicon = null // We'll handle this internally now
}) {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentFaviconUrl, setCurrentFaviconUrl] = useState('');
    const [fallbackAttempt, setFallbackAttempt] = useState(0);

    const openUrlInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    // High-quality icon sources - these are crisp vector/high-res images
    const getHighQualityIcons = (url, siteName) => {
        const domain = getDomainName(url).toLowerCase();
        const name = siteName.toLowerCase();
        
        // Custom high-quality sources for popular sites
        const customIcons = {
            'google.com': [
                'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg',
                'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
                'https://logo.clearbit.com/google.com'
            ],
            'youtube.com': [
                'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
                'https://logo.clearbit.com/youtube.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg'
            ],
            'github.com': [
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
                'https://logo.clearbit.com/github.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg'
            ],
            'whatsapp.com': [
                'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
                'https://logo.clearbit.com/whatsapp.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg'
            ],
            'facebook.com': [
                'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
                'https://logo.clearbit.com/facebook.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg'
            ],
            'twitter.com': [
                'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
                'https://logo.clearbit.com/twitter.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg'
            ],
            'x.com': [
                'https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg',
                'https://logo.clearbit.com/x.com'
            ],
            'instagram.com': [
                'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg',
                'https://logo.clearbit.com/instagram.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg'
            ],
            'linkedin.com': [
                'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
                'https://logo.clearbit.com/linkedin.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg'
            ],
            'stackoverflow.com': [
                'https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg',
                'https://logo.clearbit.com/stackoverflow.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stackoverflow.svg'
            ],
            'reddit.com': [
                'https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg',
                'https://logo.clearbit.com/reddit.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reddit.svg'
            ],
            'discord.com': [
                'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843dcf5_icon_clyde_black_RGB.svg',
                'https://logo.clearbit.com/discord.com',
                'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg'
            ]
        };

        // Return custom icons if available
        if (customIcons[domain]) {
            return customIcons[domain];
        }

        // Fallback to generic high-quality sources
        return [
            `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=256`, // {Free I suppose!!}
            `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${domain.replace('.com', '').replace('.', '')}.svg`,
            `https://icons.duckduckgo.com/ip3/${domain}.ico`,
            `https://logo.clearbit.com/${domain}`,
            `${url}/favicon.ico`
        ];
    };

    // Initialize favicon URL with validation
    useEffect(() => {
        const initializeFavicon = () => {
            let initialUrl = '';
            
            if (siteFavicon && siteFavicon.trim() !== '') {
                initialUrl = siteFavicon.trim();
            } else {
                const sources = getHighQualityIcons(siteUrl, siteName);
                initialUrl = sources[0];
            }
            
            // Validate URL before setting
            if (initialUrl && isValidUrl(initialUrl)) {
                setCurrentFaviconUrl(initialUrl);
            } else {
                // Skip to fallback if initial URL is invalid
                setImageError(true);
                setIsLoading(false);
            }
        };
        
        initializeFavicon();
    }, [siteFavicon, siteUrl, siteName]);

    // URL validation helper
    const isValidUrl = (url) => {
        if (!url || url.trim() === '') return false;
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleImageLoad = (event) => {
        // Additional check for empty/invalid images
        const img = event.target;
        if (img.naturalWidth === 0 || img.naturalHeight === 0) {
            handleImageError();
            return;
        }
        setIsLoading(false);
    };

    const handleImageError = () => {
        const faviconSources = siteFavicon && siteFavicon.trim() !== '' ? 
            [siteFavicon, ...getHighQualityIcons(siteUrl, siteName)] : 
            getHighQualityIcons(siteUrl, siteName);
        
        const nextAttempt = fallbackAttempt + 1;
        
        // Find next valid URL
        let nextValidUrl = null;
        for (let i = nextAttempt; i < faviconSources.length; i++) {
            const url = faviconSources[i];
            if (url && url.trim() !== '' && isValidUrl(url)) {
                nextValidUrl = url;
                setFallbackAttempt(i);
                break;
            }
        }
        
        if (nextValidUrl) {
            setCurrentFaviconUrl(nextValidUrl);
            setIsLoading(true);
        } else {
            setImageError(true);
            setIsLoading(false);
        }
    };

    // Get domain name for fallback
    const getDomainName = (url) => {
        try {
            return new URL(url).hostname.replace('www.', '');
        } catch {
            return siteName;
        }
    };

    // Get first letter for fallback
    const getInitial = () => {
        return siteName.charAt(0).toUpperCase();
    };

    return (
        <div 
            className="group relative w-24 h-24 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95"
            onClick={() => openUrlInNewTab(siteUrl)}
        >
            {/* Main Container */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                
                {/* Favicon Container */}
                <div className="relative w-full h-16 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    )}
                    
                    {!imageError && currentFaviconUrl ? (
                        <img 
                            src={currentFaviconUrl} 
                            alt={`${siteName} favicon`}
                            className={`w-10 h-10 object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={{
                                imageRendering: 'crisp-edges',
                                WebkitImageRendering: '-webkit-optimize-contrast',
                                msInterpolationMode: 'nearest-neighbor'
                            }}
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg shadow-sm">
                            {getInitial()}
                        </div>
                    )}
                </div>
                
                {/* Website Name */}
                <div className="w-full h-8 px-2 flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800">
                    <span className="text-white text-xs font-medium text-center leading-tight truncate">
                        {siteName}
                    </span>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );
}


export function AddNewWebShortcutLinkButton({onClick}) {
    return (
        <div className="w-[100px] h-[100px] rounded-2xl bg-red-500 flex justify-center items-center text-9xl active:bg-yellow-400 transition 0.3s ease select-none" onClick={onClick}> + </div>
    );
}