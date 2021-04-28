import './App.css';
import React, { useState } from 'react';
import { Component } from 'react'
import ReactPlayer from 'react-player'
import { Image } from 'semantic-ui-react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Progress } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

const NavComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="vert-align">
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" style={{color: "white"}}>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/" style={{color: "white"}}>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Sahithi-Venkatesan/se-project" style={{color: "white"}}>GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText style={{color: "white"}}>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>  
  );
}

const ProgressBar = (props) => {
  return (
    <div>
      <Progress color="info"/>
    </div>
  );
};


class App extends Component {
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
    loop: false
  }

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

  render () {
    const { url, playing, controls, light, volume, muted, loop, played, loaded, playbackRate, pip } = this.state

    return (
      <div className='app'>
          <div className="stickyheader">
            <NavComponent sticky="top"/>
          </div>
          <div className="stickycontent">
            <div className="inner">
         <Container fluid="fluid">
         <div><br></br><br></br><br></br></div>
         <h3>Featured this week</h3>
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
           <div><br></br></div>
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
              onDuration={this.handleDuration}/><b>Wafa Na Raas Aye</b><br></br>Jubin Nautiyal, Meet Bros</Col>
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
              onDuration={this.handleDuration} /><b>Bedroom</b><br></br>JJ Lin [feat. Anne-Marie]</Col>
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
              onDuration={this.handleDuration} /><b>Blue</b><br></br>Taeoxo</Col>
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
              onDuration={this.handleDuration} /><b>Inna Mylu</b><br></br>Britto Michael, Sivakarthikeyan</Col>
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
              onDuration={this.handleDuration} /><b>Tum Pe Hum Tho</b><br></br>Raj Barman, Raghav Sachar</Col>
           </Row>
           <div><br></br><br></br></div>
           <h3>Trending Now</h3>
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
              <div><br></br><br></br></div>
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
           <div><br></br><br></br></div>
            <h3>You might also like</h3>
            <Row>
             <Col> <ReactPlayer
             ref={this.ref}
             className='react-player'
             width='200px'
             height='200px'
             url={url[20]}
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
             onDuration={this.handleDuration}/><b>Willow</b><br></br>Taylor Swift</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[21]}
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
              onDuration={this.handleDuration} 
              /><b>Positions</b><br></br>Ariana Grande</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[22]}
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
              onDuration={this.handleDuration} /><b>Heartbreak Anniversary</b><br></br>Giveon</Col>
              <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[23]}
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
              onDuration={this.handleDuration} /><b>Drake</b><br></br>What's Next</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[24]}
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
              onDuration={this.handleDuration} /><b>Gossebumps</b><br></br>Travis Scott</Col>
           </Row>
           <div><br></br></div>
           <Row>
             <Col> <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[25]}
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
              onDuration={this.handleDuration}/><b>Drivers License</b><br></br>Olivia Rodrigo</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[26]}
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
              onDuration={this.handleDuration} /><b>Good Old Days ft.Kesha</b><br></br>Macklemore</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[27]}
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
              onDuration={this.handleDuration} /><b>Runaway</b><br></br>Aurora</Col>
              <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[28]}
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
              onDuration={this.handleDuration} /><b>Dynamite</b><br></br>BTS</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[29]}
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
              onDuration={this.handleDuration} /><b>Rain on Me</b><br></br>Ariana Grande, Lady Gaga</Col>
           </Row>
           <div><br></br><br></br><br></br></div>
            <h3>Hot Hits India</h3>
            <Row>
             <Col> <ReactPlayer
             ref={this.ref}
             className='react-player'
             width='200px'
             height='200px'
             url={url[30]}
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
             onDuration={this.handleDuration}/><b>Lut Gaye</b><br></br>Jubin Nautiyal, Manoj Muntashir</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[31]}
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
              onDuration={this.handleDuration} /><b>Brown Munde</b><br></br>AP Dhillon, Gurinder Gill, Shinda Kahlon, Gmnixr</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[32]}
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
              onDuration={this.handleDuration} /><b>Nadiyon Paar</b><br></br>Shamur, Sachin Jigar, Rashmeet Kaur, IP Singh</Col>
              <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[33]}
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
              onDuration={this.handleDuration} /><b>Dil Mein Ho Tum</b><br></br>Armaan Malik</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[34]}
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
              onDuration={this.handleDuration} /><b>Agar Tum Saath Ho</b><br></br>Arijit Singh, Alka Yagnik</Col>
           </Row>
           <div><br></br></div>
           <Row>
             <Col> <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[35]}
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
              onDuration={this.handleDuration}/><b>Enjoy Enjaami</b><br></br>Arivu, Santhosh Narayanan, Arivu</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[36]}
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
              onDuration={this.handleDuration} /><b>Khairiyat</b><br></br>Arijit Singh</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[37]}
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
              onDuration={this.handleDuration} /><b>Tujhe Kitna Chahne Lage Hum</b><br></br>Arijit Singh</Col>
              <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[38]}
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
              onDuration={this.handleDuration} /><b>Buttabomma</b><br></br>Armaan Malik</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[39]}
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
              onDuration={this.handleDuration} /><b>Liggi</b><br></br>Ritviz</Col>
           </Row>
           <div><br></br></div>
           <Row>
             <Col> <ReactPlayer
             ref={this.ref}
             className='react-player'
             width='200px'
             height='200px'
             url={url[40]}
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
             onDuration={this.handleDuration}/><b>Waalian</b><br></br>Harnoor</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[41]}
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
              onDuration={this.handleDuration} /><b>Vaathi Coming</b><br></br>Anirudh Ravichander, Gana Balachander</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[42]}
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
              onDuration={this.handleDuration} /><b>Ghungroo</b><br></br>Shilpa rao, Arijit Singh</Col>
              <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[43]}
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
              onDuration={this.handleDuration} /><b>Tu Hi Yaar Mera</b><br></br>Neha Kakkar, Arijit Singh, Rochak Kohli</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[44]}
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
              onDuration={this.handleDuration} /><b>Saiyaan Ji</b><br></br>Yo Yo Honey Singh, Neha Kakkar</Col>
           </Row>
           <div><br></br></div>
           <Row>
             <Col> <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[45]}
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
              onDuration={this.handleDuration}/><b>Hawayein</b><br></br>Arijit Singh</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[46]}
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
              onDuration={this.handleDuration} /><b>Saranga Dariya</b><br></br>Mangli</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[47]}
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
              onDuration={this.handleDuration} /><b>Shayad</b><br></br>Arijit Singh</Col>
              <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[48]}
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
              onDuration={this.handleDuration} /><b>Chitti</b><br></br>Ram Miriyala</Col>
             <Col><ReactPlayer
              ref={this.ref}
              className='react-player'
              width='200px'
              height='200px'
              url={url[49]}
              
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
              onDuration={this.handleDuration} /><b>Duniyaa</b><br></br>Ahil, Dhvani Bhanushali</Col>
              
           </Row>
         </Container >
          <table >
            <tbody>
              <tr>
                <th>Controls</th>
                <td>
                  <button onClick={this.handleStop}>Stop</button>
                  <button onClick={this.handlePlayPause}>{playing ? 'pause' : 'play'}&#9654;&#65039;</button>
                  <button onClick={this.handleClickFullscreen}>Fullscreen</button>
                  {light &&
                    <button onClick={() => this.player.showPreview()}>Show preview</button>}
                  {ReactPlayer.canEnablePIP(url) &&
                    <button onClick={this.handleTogglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</button>}
                </td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>
                  <button onClick={this.handleSetPlaybackRate} value={1}>1x</button>
                  <button onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                  <button onClick={this.handleSetPlaybackRate} value={2}>2x</button>
                </td>
              </tr>
              <tr>
                <th>Seek</th>
                <td>
                  <Progress min={0} max={0.999999} value={played} />
                  <input
                    type='range' min={0} max={0.999999} step='any'
                    value={played}
                    onSeekStart={this.handleSeek}
                    onSeekEnd={this.handleSeekEnd}
                    onMouseDown={this.handleSeekMouseDown}
                    onChange={this.handleSeekChange}
                    onMouseUp={this.handleSeekMouseUp}
                  />
                </td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>
                  <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                </td>
              </tr>
              <tr>
              </tr>
              <tr>
                <th>Played</th>
                <td><progress max={1} value={played} /></td>
              </tr>
              <tr>
                <th>Loaded</th>
                <td><progress max={1} value={loaded} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
       
        <div class="stickyfooter">
          <br></br>
          <Col className="prog_bar" xs="auto">
          <Progress min={0} max={0.999999} value={played} color="dark"/> 
          </Col>
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
         
          
        </div>
      </div>
    )
  }
}

export default App;
