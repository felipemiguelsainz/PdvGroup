function Footer () {
    return(
        <>
            <div className="containerFooter">
                <div className="sectionLinks">
                    <ul>
                        <li>Home</li>
                        <li>Company</li>
                        <li>Servicios</li>
                    </ul>
                </div>
                <div className="sectionMap">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117908.65994728275!2d-58.417528579446774!3d-34.63838124155138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1648582160951!5m2!1ses-419!2sar"
                    width="600"
                    height="250"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default Footer;