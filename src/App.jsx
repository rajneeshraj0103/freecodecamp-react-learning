import {useState} from "react";

const IMAGE_URLS = [
  "https://static-task-assets.react-formula.com/711612.jpg",
  "https://static-task-assets.react-formula.com/607528.jpg",
  "https://static-task-assets.react-formula.com/714109.jpg",
  "https://static-task-assets.react-formula.com/331987.jpg",
  "https://static-task-assets.react-formula.com/990651.jpg",
];

const App = () => {

  const [imageIdx, setImageIdx] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="text-center text-cyan-400 text-2xl">
        Dog {imageIdx + 1}
      </div>
      <div className="text-center text-red-400 text-2xl">
        { imageIdx === 0 && (
          <div className="text-center text-red-400 text-2xl">
            This is the first image. You cannot go back from here.
          </div>
        )}

        { imageIdx === IMAGE_URLS.length - 1 && (
          <div className="text-center text-red-400 text-2xl">
            This is the last image.You cannot go beyond this.
            </div>
          )}
       </div>

      <div className="flex justify-center items-center">
        {imageIdx > 0 && (
          <button 
          className="bg-orange-400 rounded-full w-8 h-8 text-orange-100"
          onClick={() => {
            if(imageIdx > 0){
              setImageIdx(imageIdx - 1);
            }
          }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        )
        }
        <img
        className="m-8 rounded-lg w-[200px] h-[300px] object-cover"
        src={IMAGE_URLS[imageIdx]}
      />

      {imageIdx < IMAGE_URLS.length - 1 && (
        <button
        className="bg-orange-400 rounded-full w-8 h-8 text-orange-100"
        onClick={() => {
          if (imageIdx < IMAGE_URLS.length - 1) {
            setImageIdx(imageIdx + 1);
          }
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      )
      }  
      </div>
    </div>
  );
};

export default App;
