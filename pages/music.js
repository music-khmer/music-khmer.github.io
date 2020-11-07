import Head from 'next/head';

import MusicPlayList from '../components/MusicPlayList';

export default function Music() {
    const title = "Khmer Music Player";
    const description = "Khmer Music Player App";
    const source = "music/perfect--ed-sheeran.mp3";

    return (
        <div className="container">
            <Head>
                <title>{title}</title>
                {description && <meta title='description' content={description}/>}
            </Head>
            <div className="music-container">
                <MusicPlayList />
            </div>
        </div>
    );
}