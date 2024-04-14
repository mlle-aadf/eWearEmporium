const Footer = () => {

//The input field should be aligned and centered horizontally with the btn.

//The "Navigate" section should be viewed as a column, aligned vertically.

//In the section following the <hr/> tag, the content should be aligned horizontally and spaced out.

    return (
    <>
    <hr/>
    <footer>
        <div className="footer-pt1">
        <div className="colOne">
            <h2>Stay Connected</h2>
            <p>Subscribe to get all our latest updates, which include promotional offers and more!</p>
            <label>
                <input type="text" placeholder="Your email address" />
            </label>
            <button type="submit">Subscribe</button>
        </div>
        <div className="colTwo">
            <h2>Navigate</h2>
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Frequently Asked Questions</li>
                <li>Terms and Conditions</li>
                <li>Our Brands</li>
            </ul>
        </div>
        <br/>
        <div>
            <p>"Insert 5 imgs of the most popular/intriguing brands from our data"</p>
            <p>and more! "Link this text to the page with all of the brands"</p>
        </div>
        </div>
        <hr style={{color: "black"}}/>
        <br/>
        <div className="brand-info">
                <h1 className="brand-text1">E-WEAR <br/> EMPORIUM</h1>
                <h2 className="brand-text2">A local brand based in Montreal, QC</h2>
        </div>
        <br/>
    </footer>
    </>
    )
}; 

export default Footer;