import React from "react";
import SearchBar from "../components/SearchBar";
import Nav from "../layout/Nav";
import Dashes from "../assets/Vector.png";
import vodafone from "../assets/logo/vodafone-2017-logo.svg";
import intel from "../assets/logo/intel-3.svg";
import tesla from "../assets/logo/tesla-9 1.svg";
import amd from "../assets/logo/amd-logo-1.svg";
import talkit from "../assets/logo/talkit 1.svg";
import { category } from "../global/constants";
import { icons } from "../global/imageUtil";


const Home: React.FC = () => {
    return (
        <>
            <div className="bg-customGray1 pb-10">
                <Nav />
                <section className="flex justify-center flex-col px-16 mt-8">
                    <h1 className="text-5xl text-textDarkBlue1 leading-tight">Discover <br /> more than <br /> <span className="text-textBlue2">5000+ Placements</span></h1>
                    <img src={Dashes} alt="line" className="w-96"/>
                    <p className="opacity-70 text-sm text-textGray3 w-4/12 my-3">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                    <SearchBar />
                    <p className="text-xs text-textBlack1 mt-3 opacity-70">Popular : <a href="#">UI Designer</a>, <a href="#">UX Researcher</a>, <a href="#">Admin</a></p>
                </section>
            </div>
            <section className="px-16 pb-10">
                <div>
                    <p className="my-7 text-xs opacity-50">Some of the companies we connect you with</p>
                    <div className="flex justify-between">
                        <img src={vodafone} alt="logo" className="w-32"/>
                        <img src={intel} alt="logo" className="w-16"/>
                        <img src={tesla} alt="logo" className="w-28"/>
                        <img src={amd} alt="logo" className="w-16"/>
                        <img src={talkit} alt="logo" className="w-16"/>
                    </div>
                </div>
            </section>
            <section className="px-16 mt-8 pb-10">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl text-textDarkBlue1">Explore by <span className="text-textBlue2">category</span></h2>
                    <div className="flex gap-2">
                        <p className="text-xs text-textBlue1 cursor-pointer">Show all</p>
                        <img src={icons.arrowRightBlue} alt="arrow" className="w-2"/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mt-5">
                    {category.map((item, index) => (
                        <div key={index} className="flex flex-col my-5 p-4 border w-56 cursor-pointer hover:scale-105">
                            <img src={item.img} alt="icon" className="w-8"/>
                            <h4 className="font-semiboldtext-base text-textDarkBlue1 mt-3 mb-2">{item.name}</h4>
                            <div className="flex gap-2 items-center">
                                <p className="text-xs opacity-50">Explore category</p>
                                <img src={icons.arrowRight} alt="arrow" className="w-2"/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;