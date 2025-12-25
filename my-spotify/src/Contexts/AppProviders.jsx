import { StrictMode } from "react";
import { DataProvider } from "./DataContext";
import { AudioProvider } from "./AudioContext";
import { QueueProvider } from "./QueueContext";
import { PlayingViewProvider } from "./PlayingViewContext";
import { LyricsProvider } from "./LyricsContext";
import { ColorProvider } from "./ColorContext";
import { ActiveSongBgProvider } from "./ActiveSongBgContext";
import { BarProvider } from "./BarContext";

const AppProviders = ({ children }) => {
  return (
    <StrictMode>
      <DataProvider>
        <AudioProvider>
          <QueueProvider>
            <PlayingViewProvider>
              <LyricsProvider>
                <ColorProvider>
                  <ActiveSongBgProvider>
                    <BarProvider>{children}</BarProvider>
                  </ActiveSongBgProvider>
                </ColorProvider>
              </LyricsProvider>
            </PlayingViewProvider>
          </QueueProvider>
        </AudioProvider>
      </DataProvider>
    </StrictMode>
  );
};


export default AppProviders;