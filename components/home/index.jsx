import WeeklyProducts from "./weeklyProducts";
import SummerSale from "./summerSale";
import SpecialFeatures from "./specialFeatures";
import MostPremiumWatch from "./mostPremiumWatch";
import Slider from "./slider";
import HotOffer from "./hotOffer";
import AllProduct from "./allProduct";
import Upcoming from "./upcoming";
import OurHappyCustomer from "./happyCustomer";

const HomgePage = () => {
  return (
    <>
      <Slider />
      <HotOffer/>
      {/* <WeeklyProducts /> */}
      <SummerSale />
      <AllProduct/>
      <Upcoming/>
      <SpecialFeatures />
      <MostPremiumWatch />
      <OurHappyCustomer/>
    </>
  );
};

export default HomgePage;