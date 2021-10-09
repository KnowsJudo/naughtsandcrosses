import { UserContext } from 'client/context';
import { IWinningTeam } from 'client/context/user-context/types';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../winning-message/winning-message.scss';

export const WinningMessage: React.FC<IWinningTeam> = (props) => {
  const { state, setUserWin } = useContext(UserContext);
  const [image, setImage] = useState<string>('solitaire');
  const [displayImage, setDisplayImage] = useState<string[]>([]);

  useEffect(() => {
    state.user && props.winningTeam === state.user.team
      ? setImage('solitaire')
      : setImage('white guy blinking');
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${image}&limit=10&offset=0&rating=g&lang=en`,
      )
      .then((res) =>
        setDisplayImage(
          res.data.data.map((img: any) => img.images.preview.mp4),
        ),
      )
      .catch((error) => {
        throw new Error(error);
      });
  }, [image]);

  const resetGame = () => {
    // setUserWin(undefined);
    props.setGameRunning(true);
  };

  return (
    <div>
      {state.user && (
        <div className="winning-div">
          {state.user.team === props.winningTeam ? (
            <h2>{state.user.username} Wins!</h2>
          ) : (
            <h2>'You Lose LoOoooOL!'</h2>
          )}
          <br />
          {displayImage.map((url: string) => (
            <video width="40%" height="40%" autoPlay loop src={url} key={url} />
          ))}
          <button
            onClick={() => {
              resetGame();
            }}
          >
            NEW GAME
          </button>
        </div>
      )}
    </div>
  );
};
