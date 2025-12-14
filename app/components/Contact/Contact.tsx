import locationImg from "../../../public/location2.png";

export default function Products() {
  return (
    <div className="contact_page">
      <div className="location_image">
        <img src={locationImg} alt="Our location" />
      </div>
      <div className="contact_details">
        <div className="Adress">Jan van Cuijkstraat 11, 5821BR Vierlingsbeek, Holandia (nie "Nibylandia" - Holandia !!!)</div>
        <div className="payment">
          <p>Możeta płacić tylko gotówkom lub przelewym.</p>
          <p>Numer kunta bynkowego</p>
          <p>10 1010 2200 3456 9876 1010</p>
        </div>
      </div>
    </div>
  );
}
