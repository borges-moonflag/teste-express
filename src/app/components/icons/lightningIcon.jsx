export default function LightningIcon({className, rectColor, rectHover, pathColor, pathHover}) {
    return (
        <>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<rect width="50" height="50" rx="25" className={`${rectColor} ${rectHover} transition-colors duration-300`}/>
<path d="M25.9375 15.1476C25.9375 13.4988 23.7148 12.9741 22.9774 14.4488L17.1137 26.1763C16.5942 27.2152 17.3497 28.4376 18.5112 28.4376H24.0625V34.8525C24.0625 36.5013 26.2851 37.026 27.0225 35.5513L32.8862 23.8238C33.4057 22.7849 32.6502 21.5626 31.4887 21.5626H25.9375V15.1476Z" className={`${pathColor} ${pathHover} transition-colors duration-300`}/>
</svg>
        </>
    )
}