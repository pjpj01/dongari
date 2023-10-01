import HeaderComponent from "../components/HeadComponent/HeadComponent";
import CalendarComponent from "../components/CalendarComponent/CalenderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";


function BookingPage() {
  return (
    <div>
      <HeaderComponent headerText="시설대관" bannerText="시설대관" />
      <CalendarComponent></CalendarComponent>
      <FooterComponent/>

    </div>
  );
}

export default BookingPage;
