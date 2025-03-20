import React from 'react';
import { useNavigate } from 'react-router-dom';
import video1 from './assets/video.mp4';
import r from './assets/r.png';
import b from './assets/b.png';

const Frontpage = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleClick = () => {
    navigate('/', { state: { scrollToNotes: true } }); // Pass state to Home
  };

  return (
    <div>
      <div className="relative min-h-[100vh] flex flex-col items-center text-white">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={video1} type="video/mp4" />
        </video>
        <main className="relative flex flex-col items-center text-center mt-50 px-4 z-10">
          <h1 className="text-6xl font-bold">Seamless Notes</h1>
          <h1 className="text-6xl font-bold mt-2 text-gray-300">Synced for Life</h1>
          <p className="text-gray-400 mt-4 max-w-lg">
            SyncNotes is a smart note-making platform where users can create, save, edit, share, and manage their notes seamlessly.
          </p>
          <button
            className="mt-8 px-6 py-3 bg-neutral-800 text-white text-lg font-medium rounded-lg relative overflow-hidden shadow-xl transition-transform transform hover:scale-105"
            onClick={handleClick} // Navigate on click
          >
            <span className="absolute inset-0 bg-neutral-600 blur-2xl opacity-50"></span>
            <span className="relative">✨ Start taking notes</span>
          </button>
        </main>
      </div>
      <div className="flex flex-col w-[100%] items-center justify-center gap-10 pt-30 bg-black text-white">
        
        <div className='flex flex-col items-center gap-20 md:flex-row md:place-content-between w-[80%] mb-10'>
        <div className="max-w-sm text-center md:text-left">
          <h2 className="text-4xl font-bold leading-15">Easy to Save Files and Bookmark Work</h2>
          <p className="mt-4 text-lg leading-10 text-gray-300">
            With SyncNote, students can upload their notes and bookmark resources for easy access later.
          </p>
        </div>
        
        {/* Rocket Image */}
        <div className="relative rounded-full drop-shadow-[0_0_4em_#646cffaa]">
          <img
            src={r}
            alt="Rocket Icon"
            className="w-[260px] drop-shadow-glow"
          />
        </div>
        </div>
        <div className='flex flex-col-reverse items-center gap-20 md:flex-row  md:place-content-between w-[80%] mb-30'>
        <div className="relative rounded-full drop-shadow-[0_0_4em_#646cffaa]">
          <img
            src={b}
            alt="Book Icon"
            className="w-40 md:w-52 drop-shadow-glow"
          />
        </div>
        <div className="max-w-sm text-center md:text-left">
          <h2 className="text-4xl leading-15 font-bold">Share your notes and help others</h2>
          <p className="mt-4 text-lg leading-10 text-gray-300">
            With SyncNote, students can share their notes globally and support others in studying smarter.
          </p>
        </div>
        
        </div>

      </div>
    </div>
  );
};

export default Frontpage;
