const Footer = () => {

//The input field should be aligned and centered horizontally with the btn.

//The "Navigate" section should be viewed as a column, aligned vertically.

//In the section following the <hr/> tag, the content should be aligned horizontally and spaced out.

    return (
    <>
    <footer>
        <div>
            <h2>Stay Connected</h2>
            <p>Subscribe to get all our latest updates, which include promotional offers and more!</p>
            <label>
                <input type="text" placeholder="Your email address" />
            </label>
            <button type="submit">Subscribe</button>
        </div>
        <div className="footer-navigate">
            <h2>Navigate</h2>
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Frequently Asked Questions</li>
                <li>Terms and Conditions</li>
                <li>Our Brands</li>
            </ul>
        </div>
        <div>
            <h2>"Insert 5 imgs of the most popular/intriguing brands from our data"</h2>
            <h2>and more! "Link this text to the page with all of the brands"</h2>
        </div>
        <hr style={{color: "white"}}/>
        <div>
        <h1>E-WEAR <br/> EMPORIUM</h1>
        <h2>A local brand based in Montreal, QC</h2>
        </div>
    </footer>
    </>
    )
}; 

export default Footer;