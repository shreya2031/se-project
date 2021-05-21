import React from "react";
import ReactPlayer from 'react-player'
import '../App.css';
import { Image } from 'semantic-ui-react'
import { Progress } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
);

//this is my api key
const API_KEY = "47c86db9f4798a79773bbfdb1b6b61f6";
//const API_KEY = "341f92eb4b0f3362758044610e9758b5";
//const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";
//initalizes component

class Weather extends React.Component {
  //old way
  //constructor() {
  //   this.getWeather = this.getWeather.bind(this);
  // }

  state = {
    url: [ 
      'https://soundcloud.com/thechemicalbrothers/the-darkness-that-you-fear-1',
      'https://soundcloud.com/red-line-music-company-india/seeti_maar-radhe',
      'https://soundcloud.com/wittlowry/put-me-first-feat-josh-golden',
      'https://soundcloud.com/rohit-singh-613323043/jee-ni-karda-from-sardar-ka',
      'https://soundcloud.com/theweeknd/the-weeknd-ariana-grande-save',
      'https://soundcloud.com/officialspeedrecords/wafa-na-raas-aayee',
      'https://soundcloud.com/jj-lin-official/track-7',
      'https://soundcloud.com/taeoxo/blue',
      'https://soundcloud.com/jenakan-jeyarajah/lift-inna-mylu-sivakarthikeyankavin',
      'https://soundcloud.com/inderveer-singh-237716693/tum-pe-hum-toh-bole-chudiyan-nawazuddin-siddiqui-tamannaah-bhatia',
      'https://soundcloud.com/seif-rafik-921090088/astronaut-in-the-ocean',
      'https://soundcloud.com/theweeknd/blinding-lights',
      'https://soundcloud.com/tonesandi-music/dance-monkey',
      'https://soundcloud.com/joey-dougherty-442864431/shawn-mendes-camila-cabello-senorita-joey-doc-remix',
      'https://soundcloud.com/blackstarmot/justin-bieber-peaches-feat-daniel-caesar-giveon',
      'https://soundcloud.com/r3hab/the-chainsmokers-halsey-closer-r3hab-remix-1',
      'https://soundcloud.com/nocopyrightmusiic/1368_faded',
      'https://soundcloud.com/jhuneabecovers/memories-maroon-5',
      'https://soundcloud.com/dualipa/levitating-feat-dababy',
      'https://soundcloud.com/edsheeran/shape-of-you',
      'https://soundcloud.com/user-825379895/taylor-swift-willow',
      'https://soundcloud.com/officialjadalee/positions-ariana-grande',
      'https://soundcloud.com/tran5luc3nt_trtl/heartbreak-anniversary-slowed',
      'https://soundcloud.com/octobersveryown/drake-whats-next',
      'https://soundcloud.com/nghtmre/goosebumps-nghtmre-remix',
      'https://soundcloud.com/albertrosenbackup/olivia-rodrigo-drivers-license-albert-rosen-remix-2',
      'https://soundcloud.com/macklemore/good-old-days-ft-kesha',
      'https://soundcloud.com/auroraaksnes/runawaysingle?in_system_playlist=charts-top%3Apop%3Ain',
      'https://soundcloud.com/wellaonthebeat/bts-dynamite-side-b-ver',
      'https://soundcloud.com/ladygaga/rain-on-me-purple-disco',
      'https://soundcloud.com/desimelodies/lut-gaye',
      'https://soundcloud.com/officialspeedrecords/brown-munde',
      'https://soundcloud.com/celebrity-hub/nadiyon-paar-let-the-music',
      'https://soundcloud.com/sohaib-hassan-8/dil-mein-ho-tum-by-armaan-malik-emraan-hashmi-cheat-india',
      'https://soundcloud.com/chandra-mohan-mishra-743588254/agar-tum-saath-ho',
      'https://soundcloud.com/vijayakumar-mayuooran/dhee-ft-arivu-enjoy-enjaami-prod-santhosh-narayanan-audiotrimmercom',
      'https://soundcloud.com/ahsan-bin-saif/khairiyat-arjit-singh',
      'https://soundcloud.com/web-tafri/tujhe-kitna-chahne-lage',
      'https://soundcloud.com/user-713826249/buttabomma',
      'https://soundcloud.com/user-128952576/liggi-ritviz-8d-track',
      'https://soundcloud.com/harnoorhere/waalian-by-harnoor',
      'https://soundcloud.com/user-372843377/vaathi-coming-starmusiq-top',
      'https://soundcloud.com/sho-soft19/ghungroo-war-mp3',
      'https://soundcloud.com/hammad-javed-302364557/tu-hi-yaar-mera',
      'https://soundcloud.com/desimelodies/saiyaan-ji',
      'https://soundcloud.com/siddharth-rajpurohit-318820092/hawayein-jab-harry-met-sejal',
      'https://soundcloud.com/user-888293352/saranga-dariya-love-story-new-movie-dj-song-2021-rs-dj-production-sircilla',
      'https://soundcloud.com/prinka-parm-90882925/shayad-love-aaj-kal-2-arijit-1',
      'https://soundcloud.com/telugu-dj-songs-offical/chitti-2021-new-movie-jathiratnalu-dj-song-my-style-dandiya-mix-dj-bunny-x-dj-raju-asp-medak',
      'https://soundcloud.com/ab-roke/luka-chuppi-duniyaa-full-video-song-kartik-aaryan-kriti-sanon-akhil-dhvani-b-vubey'
    ] ,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  //method to get the weather
  //asynx await
  getWeather = async e => {
    //stops page refresh when Get Weather button is clicked
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //async await
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`
    );
    //converts api_call to readable format for program,
    //in this case its json
    const data = await api_call.json();

    //this prevents the user from hitting submit without
    //filling out the form
    if (city && country) {
      console.log(data);
      //set values of state
      this.setState({
        //these values are found from calling the api_call
        //which is the data constant
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        //these values are found from calling the api_call
        //which is the data constant
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values!"
      });
    }
  };
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleStop = () => {
    this.setState({ url: null, playing: false })
  }

  handleToggleControls = () => {
    const url = this.state.url
    this.setState({
      controls: !this.state.controls,
      url: null
    }, () => this.load(url))
  }

  handleToggleLight = () => {
    this.setState({ light: !this.state.light })
  }

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handleEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({ pip: true })
  }

  handleDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({ pip: false })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }
  renderLoadButton = (url) => {
    return (
      <button onClick={() => this.load(url)}>
      </button>
    )
  }

  ref = player => {
    this.player = player
  }
  //built in react method that returns jsx

  render() {
    const { url, playing, controls, light, volume, muted, loop, played, loaded, playbackRate, pip } = this.state
    return (
      //babble converts this to html
      //getWeather is a prop that is equal to this.methodName
      <div className="app">
        <div className="stickycontent">
                <div className="inner">
             <Container fluid="fluid">
              <form onSubmit={this.getWeather}>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>
              </form>
                  {this.state.city && this.state.country && (
                      <p className="weather-key">
                        Location:{" "}
                        <span className="weather-value">
                          {" "}
                          {this.state.city}, {this.state.country}
                        </span>
                      </p>
                    )}
                    {this.state.description && (
                      <p className="weather-key">
                        Description: <span className="weather-value"> {this.state.description}</span>
                      </p>
                    )}
                    {//<p className="weather-error">test</p>
                    this.state.error && <p className="weather-error">{this.state.error}</p>}
                  {this.state.temperature && (
                  <div>
                  <span className="weather-value">Temperature: {Math.round((this.state.temperature - 32)*5/9)}&#176;C</span>
                  {
                                (((this.state.temperature - 32)*5/9) < 29 && this.state.description == "clear sky") ? (
                                  <ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[1]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} />
                                  ) : ('')
                                }

                  {
                                (((this.state.temperature - 32)*5/9) > 30 ) ? (
                                  <ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[2]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} />
                                  ) : ('')
                                }

                        {
                                (  (((this.state.temperature - 32)*5/9) > 30 ) && this.state.description == "heavy intensity rain") ? (
                     <div>             
                <Row>
                 <Col> <ReactPlayer
                 ref={this.ref}
                 className='react-player'
                 width='200px'
                 height='200px'
                 url={url[0]}
                 pip={pip}
                 playing={playing}
                 controls={controls}
                 light={true}
                 loop={loop}
                 playbackRate={playbackRate}
                 volume={volume}
                 muted={muted}
                 onReady={() => console.log('onReady')}
                 onStart={() => console.log('onStart')}
                 /*onPlay={this.handlePlay}*/
                 onEnablePIP={this.handleEnablePIP}
                 onDisablePIP={this.handleDisablePIP}
                 onPause={this.handlePause}
                 onBuffer={() => console.log('onBuffer')}
                 onSeek={e => console.log('onSeek', e)}
                 onEnded={this.handleEnded}
                 onError={e => console.log('onError', e)}
                 onProgress={this.handleProgress}
                 onDuration={this.handleDuration}/>
                 <b>The Darkness That You Fear</b><br></br>The Chemical Brothers</Col>         
                 <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[1]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Seeti Maar</b><br></br>Devi Sri Prasad</Col>           
                 <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[2]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Put Me First</b><br></br>Wittlowry ft. Josh Golden</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[3]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Jee Ni Karda</b><br></br>Tanishk Bagchi</Col>
                 <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[4]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Save Your Tears</b><br></br>The Weeknd, Ariana Grande</Col>
               </Row>
               <Row>
               <Col> <ReactPlayer
               ref={this.ref}
               className='react-player'
               width='200px'
               height='200px'
               url={url[5]}
               pip={pip}
               playing={playing}
               controls={controls}
               light={true}
               loop={loop}
               playbackRate={playbackRate}
               volume={volume}
               muted={muted}
               onReady={() => console.log('onReady')}
               onStart={() => console.log('onStart')}
               /*onPlay={this.handlePlay}*/
               onEnablePIP={this.handleEnablePIP}
               onDisablePIP={this.handleDisablePIP}
               onPause={this.handlePause}
               onBuffer={() => console.log('onBuffer')}
               onSeek={e => console.log('onSeek', e)}
               onEnded={this.handleEnded}
               onError={e => console.log('onError', e)}
               onProgress={this.handleProgress}
               onDuration={this.handleDuration}/>
               <b>The Darkness That You Fear</b><br></br>The Chemical Brothers</Col>         
               <Col><ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[6]}
                pip={pip}
                playing={playing}
                controls={controls}
                light={true}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                /*onPlay={this.handlePlay}*/
                onEnablePIP={this.handleEnablePIP}
                onDisablePIP={this.handleDisablePIP}
                onPause={this.handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={this.handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration} /><b>Seeti Maar</b><br></br>Devi Sri Prasad</Col>           
               <Col><ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[7]}
                pip={pip}
                playing={playing}
                controls={controls}
                light={true}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                /*onPlay={this.handlePlay}*/
                onEnablePIP={this.handleEnablePIP}
                onDisablePIP={this.handleDisablePIP}
                onPause={this.handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={this.handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration} /><b>Put Me First</b><br></br>Wittlowry ft. Josh Golden</Col>
                <Col><ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[8]}
                pip={pip}
                playing={playing}
                controls={controls}
                light={true}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                /*onPlay={this.handlePlay}*/
                onEnablePIP={this.handleEnablePIP}
                onDisablePIP={this.handleDisablePIP}
                onPause={this.handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={this.handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration} /><b>Jee Ni Karda</b><br></br>Tanishk Bagchi</Col>
               <Col><ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[9]}
                pip={pip}
                playing={playing}
                controls={controls}
                light={true}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                /*onPlay={this.handlePlay}*/
                onEnablePIP={this.handleEnablePIP}
                onDisablePIP={this.handleDisablePIP}
                onPause={this.handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={this.handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration} /><b>Save Your Tears</b><br></br>The Weeknd, Ariana Grande</Col>
             </Row></div>
                                ) : ('')
                                }
                  </div>
                  )}

                  <h4>You might also like</h4>
                  <Row>
               <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[10]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Astronaut In The Ocean</b><br></br>Seif Rafik</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[11]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Blinding Lights</b><br></br>The Weeknd</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[12]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Dance Monkey</b><br></br>Tones and I</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[13]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Senorita Joey Doc Remix</b><br></br>Joey Dougherty</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[14]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Peaches</b><br></br>Justin Bieber</Col>
                  </Row>
                  <div><br></br></div>
                  <Row>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[15]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Closer R3hab Remix</b><br></br>R3hab</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[16]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Faded</b><br></br>Alan Walker</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[17]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Memories</b><br></br>Maroon 5</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[18]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Levitating</b><br></br>Dua Lipa ft. Dababy</Col>
                  <Col><ReactPlayer
                  ref={this.ref}
                  className='react-player'
                  width='200px'
                  height='200px'
                  url={url[19]}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={true}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  /*onPlay={this.handlePlay}*/
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration} /><b>Shape Of You</b><br></br>Ed Sheeran</Col>
               </Row>
                  <br></br><br></br>
                  </Container>
                  </div>
                </div>
                  <div class="stickyfooter">
              <OverlayTrigger placement="right"
                trigger="click"
                overlay={
                <Popover>
                  <Popover.Content>
                  <input id="vol" type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange}/> 
                  </Popover.Content>
                </Popover>
                }
              >
              <Button variant="outline-dark" size="sm"><Image src='vol.png' /></Button>
              </OverlayTrigger>
              <Button id="play" variant="secondary" onClick={this.handlePlayPause}><FontAwesomeIcon icon={playing ? faPause : faPlay} /></Button>
              <Col className="prog_bar" sm="12" md={{ size: 8, offset: 2 }} fluid="xl">
              <Progress min={0} max={0.999999} value={played} color="dark" style={{"width":"100%"}} fluid={true}/> 
              </Col>
             <br></br>
            </div>
            
               
                </div>
             
    );
  }
}

export default Weather;