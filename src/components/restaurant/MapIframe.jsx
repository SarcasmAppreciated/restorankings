function MapIframe({name, address}) {
    const API_KEY = "AIzaSyBnqey4RiuVvC7Gvd_HgubzSHnggkvAJIc";
    return (
        <iframe
            width="600"
            height="450"
            style={{border: "0", width: "600px", height: "450px", marginTop: "20px"}}
            loading="lazy"
            allowFullscreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${name},${address}`}>
        </iframe>
    )
}

export default MapIframe;