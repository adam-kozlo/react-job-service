import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";

const HomePage = () => {
    return (
        <>
            <Hero title = 'Become a developer' subtitle = 'The best one ...' />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage;