import CoreFeatures from "../../../components/homepages/section-2/features.jsx";
import HeaderMain from "../../../components/homepages/section-3/HeaderMain.jsx";
import HostingPlans from "../../../components/homepages/section-1/HostingPlans.jsx";
import DataCenterArea from "../../../components/homepages/section-4/DataCenters.jsx";
import FaqSection from "../../../components/homepages/section-5/FaqSection.jsx";
import LatestNews from "../../../components/homepages/section-6/LatestNews.jsx";
import LetsLaunch from "../../../components/homepages/section-7/LetsLaunch.jsx";

export const Home = () => {
   
    return (
        <div>
            <HostingPlans/>
            <CoreFeatures/>
            <HeaderMain/>
            <DataCenterArea/>
            <FaqSection/>
            <LatestNews/>
            <LetsLaunch/>
        </div>
    )
}