

export default function Card({ name = "DefaultName", role = "DefaultRole", hex = "#351f7e" }) {
    return (
      <>


    <div className= "Cardbackground4oneColor" style={{ backgroundColor: hex}}>
    <div className="textbackgroundforoneColor ">
        <p> {name}</p>
        <p> {hex}</p>
        <p> {role}</p>
        </div>
        </div>
    
      </>
    );
  }