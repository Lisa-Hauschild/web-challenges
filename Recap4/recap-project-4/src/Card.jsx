

export default function Card({ name = "DefaultName", role = "DefaultRole", hex = "#351f7e" }) {
    return (
      <>


    <span className= "Cardbackground4oneColor" style={{ backgroundColor: hex}}>
    <span className="textbackgroundforoneColor ">
        <p>Colorname: {name}</p>
        <p>Hexvalue: {hex}</p>
        <p>Role: {role}</p>
        </span>
        </span>
    
      </>
    );
  }