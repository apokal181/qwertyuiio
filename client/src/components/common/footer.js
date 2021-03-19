import React from 'react'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container" >
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>1-342-429-1234</li>
                            <li>Ukraine, Zaporizhzhya</li>
                            <li>Zaporiz'ka street</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>LUL</h4>
                        <ul className="list-unstyled">
                            <li>ONE MEMES</li>
                            <li>ONE MEMES</li>
                            <li>ONE MEMES</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>XD</h4>
                        <ul className="list-unstyled">
                            <li>123</li>
                            <li>123</li>
                            <li>123</li>
                        </ul>
                    </div>

                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} ZALUPA INC | All right reserver | Terms Of Service | Privacy
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;