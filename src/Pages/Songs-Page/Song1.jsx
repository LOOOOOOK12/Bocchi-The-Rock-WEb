
function Song1({ name, cover, alt, song, lyrics, albumBackGround}) {

  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <img src={albumBackGround} alt="" className="absolute brightness-[.4] h-full w-full object-cover -z-10"/>
      <div className="flex flex-col items-center justify-center p-9 rounded-[2.5rem] backdrop-blur-md gap-5 ">
        <div className='h-80 w-80'>
          <img className="h-full w-full rounded-[2.5rem]" src={cover} alt={alt} />
        </div>
        <a className="text-3xl font-semibold" href={lyrics} target="_blank"><h2>{name}</h2></a>
          <audio controls className="w-full">
          <source src={song} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default Song1;

