const TopButton = () => {

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      } 

    return(
        <button style={ButtonStyle} onClick={topFunction}>↑</button>
    )

}

export default TopButton

const ButtonStyle = {
    height: "40px",
    width: "40px",
    border: "none",
    borderRadius: "50px",
    backgroundColor: "var(--third-color)",
    position: "fixed",
    bottom: "5%",
    right: "10%",
    color: "white",
}