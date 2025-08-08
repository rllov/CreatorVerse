import React from "react";
import CreatorCard from "../components/CreatorCard"; // Adjust the path based on your project structure

const Home = ({ creators = [] }) => {
  return (
    <>
      <header className="h-[600px] bg-[url('https://creatorverse-production.up.railway.app/static/media/banner.de5659898d3bfc5eb8ea.jpg')] bg-cover bg-center border-b-[2px] border-[rgb(66,74,89)] text-center pt-[8em] flex flex-col items-center justify-center text-white">
        <h1 className="text-[8vw] font-[700] leading-[1em] uppercase text-white mb-[3rem]">
          CreatorVerse
        </h1>
        <nav className="flex items-center justify-center w-full px-4">
          <ul className="flex list-none m-0 p-0">
            <li className="mx-2 flex justify-center">
              <a
                href="/creators"
                className="flex items-center justify-center bg-[rgb(81,133,180)] text-white font-[700] text-[20px] uppercase tracking-[1.3px] h-[3em] rounded-[3px] border border-transparent hover:underline w-[15em] p-2"
              >
                View All Creators
              </a>
            </li>
            <li className="mx-2 flex justify-center">
              <a
                href="/new"
                className="flex items-center justify-center bg-[rgb(81,133,180)] text-white font-[700] text-[20px] uppercase tracking-[1.3px] h-[3em] rounded-[3px] border border-transparent hover:underline w-[15em] p-2"
              >
                Add a Creator
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex mt-[50px] pt-[20px] pb-[20px] justify-center">
        <section
          className="p-[10px] flex flex-row flex-wrap justify-center"
          style={{ marginBottom: `calc(1rem * 4)` }}
        >
          {creators.length === 0 ? (
            <h3 className="text-[1.6vw] font-[700] mb-[18px] leading[1em] text-center text-uppercase text-[rgb(81,133,180)]">
              No Creators Yet
            </h3>
          ) : (
            creators.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
