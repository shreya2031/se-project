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
      'https://soundcloud.com/ab-roke/luka-chuppi-duniyaa-full-video-song-kartik-aaryan-kriti-sanon-akhil-dhvani-b-vubey',
      'https://soundcloud.com/user-988035447/justin-bieber-yummy',
      'https://soundcloud.com/maheshprasad/aaluma-doluma-vedhalam-anirudh-ajith?in=thyshaant-palachandiran/sets/tamil-songs',
      'https://soundcloud.com/dualipa/levitating-feat-dababy',
      'https://soundcloud.com/o-uzhan-g-n-415529706/jalebi-baby',
      'https://soundcloud.com/praveen-kumar-409724148/thangamey-anirudh-ravichander',
      'https://soundcloud.com/majorlazer/major-lazer-dj-snake-lean-on-feat-mo?in=user-610681392/sets/summer-2k17',
      'https://soundcloud.com/adnan-saif-1/g-phaad-ke-happy-ending?in=naheed-tariq-384721662/sets/taylor-swift',
      'https://soundcloud.com/adeerosny/ratta-maar-student-of-the-year?in=user-920027825/sets/bollywood-melodies',
      'https://soundcloud.com/trapclouds/david-guetta-bebe-rexha-j-balvin-say-my-name?in=user-662133413/sets/english-songs',
      'https://soundcloud.com/user-651585236/champesaave-nannu-nenu-local?in=shreyas-ramnath/sets/telugu-latest-melodies',
      'https://soundcloud.com/marshmellomusic/happier-ft-bastille',
      'https://soundcloud.com/user-713826249/01-samajavaragamana',
      'https://soundcloud.com/iamtrevordaniel/falling',
      'https://soundcloud.com/zayma-asif/rehnuma-rocky-handsome-shreya-ghoshal?in=raina-haute-couture/sets/arman-malik-songs',
      'https://soundcloud.com/deepali-dhanotia/heropanti-rabba-full-audio-song-mohit-chauhan-tiger-shroff-kriti-sanon?in=user-920027825/sets/bollywood-melodies',
      'https://soundcloud.com/praveen-kumar-409724148/neeyum-naanum-anirudh-ravichander-neeti-mohan',
      'https://soundcloud.com/vinay-vadloori/undiporaadhey',
      'https://soundcloud.com/nada-zaki-22/demi-lavato-heart-attack-mp3?in=naheed-tariq-384721662/sets/taylor-swift',
      'https://soundcloud.com/sohaib-hassan-8/halka-halka-sunidhi-chauhan-amit-trivedi-divya-kumar-aishwarya-fanney-khan?in=sapna-rajeev/sets/bollywood-melodies',
      'https://soundcloud.com/prodbypana/heartbreak-anniversary',
      'https://soundcloud.com/illeniumofficial/the-chainsmokers-dont-let-me-down-illenium-remix?in=naheed-tariq-384721662/sets/taylor-swift',
      'https://soundcloud.com/kidg_prod/gnash-i-hate-you-i-love-you?in=user-662133413/sets/english-songs',
      'https://soundcloud.com/farhan5430/aye-mere-humsafar?in=raina-haute-couture/sets/arman-malik-songs',
      'https://soundcloud.com/shohab-shah/chalte-chalte-atif-aslam?in=raina-haute-couture/sets/arman-malik-songs',
      'https://soundcloud.com/sohaib-hassan-8/tere-jaisa-satyameva-jayate-arko-tulsi-kumar-john-abraham-aisha-sharma?in=raina-haute-couture/sets/arman-malik-songs',
      'https://soundcloud.com/user-492941325/afeemi?in=sapna-rajeev/sets/bollywood-melodies',
      'https://soundcloud.com/raghu-s-2/1-manam-kanulanu-thake?in=v-kae-v-k/sets/telugu-songs',
      'https://soundcloud.com/mozzamali/tu-hai-k-nai?in=user-920027825/sets/bollywood-melodies',
      'https://soundcloud.com/prodbypana/heartbreak-anniversary',
      'https://soundcloud.com/dashing-r/teri-meri-bodyguard?in=raina-haute-couture/sets/arman-malik-songs',
      'https://soundcloud.com/mariagomezmg/granade-ariana-grande?in=naheed-tariq-384721662/sets/taylor-swift',
      'https://soundcloud.com/asim-pk/taylor-swift-love-story-live-from-new-york-city',
      'https://soundcloud.com/astronaut5/dupa-lipa-new-rules?in=user-662133413/sets/english-songs',
      'https://soundcloud.com/trapclouds/david-guetta-bebe-rexha-j-balvin-say-my-name?in=user-662133413/sets/english-songs',
      'https://soundcloud.com/user-582140399/bulleya-ae-dil-hai-mushkil-dj-mastro?in=naheed-tariq-384721662/sets/taylor-swift',
      'https://soundcloud.com/ihjiiimvu/sorry-justin-bieber?in=user-662133413/sets/english-songs',
      'https://soundcloud.com/tamil-geethams/yethi-yethi?in=pbizzr/sets/harris-jayaraj-hits',
      'https://soundcloud.com/akshay-se/kalyaana_vayasu',
      'https://soundcloud.com/prodbypana/heartbreak-anniversary',
      'https://soundcloud.com/jagadeswaran/01-ola-olaala-ala-karunya-ranina-reddy?in=shreyas-ramnath/sets/telugu-latest-melodies',
      'https://soundcloud.com/djvanic/vanic-aquilo-losing-you?in=1234567890221/sets/rain-songs',
      'https://soundcloud.com/telugu-prapancham/01-yemito-andala-rakshasi-2012',
      'https://soundcloud.com/wearebigbeat/galantis-runaway-ui-speaker-of-the-houses-big-beat-5th-anniversary-remix?in=1234567890221/sets/rain-songs',
      'https://soundcloud.com/khadeer-shaik/2-yenno-yenno-320kbps-songsp',
      'https://soundcloud.com/djvanic/vanic-aquilo-losing-you?in=1234567890221/sets/rain-songs',
      'https://soundcloud.com/preet-sidhu-1/ambarsariya-fukrey',
      'https://soundcloud.com/mp3newsongs/the-life-of-ram-96-2018',
      'https://soundcloud.com/vinay-vadloori/undiporaadhey',
      'https://soundcloud.com/user-713826249/tharagathi-gadhi?in=user-721806512/sets/songs',
      'https://soundcloud.com/user-743487256-305254187/isongsinfo-01-ninnila?in=user-721806512/sets/songs',
      'https://soundcloud.com/kshmr/echo',
      'https://soundcloud.com/user-944260877/kar-gayi-chull-kapoor-and-sons',
      'https://soundcloud.com/vinay-vadloori/kadalalle',
      'https://soundcloud.com/mdshoaib-320956336/cham-cham',
      'https://soundcloud.com/independiente/travis-why-does-it-always-rain',
      'https://soundcloud.com/desimelodies/tum-hi-ho',
      'https://soundcloud.com/tamilsongsforyou/munbe-vaa',
      'https://soundcloud.com/croft-287659816/it-aint-me-kygo-croft-remix',
      'https://soundcloud.com/dondiablo/chainsmokers-coldplay-something-just-like-this-don-diablo-remix',
      'https://soundcloud.com/venigallavenkatesh/ramuloo-ramula-allu-arjun-ala-vaikunthapurramuloo-venigalla-venkatesh',
      'https://soundcloud.com/gotyoucovered/ed-sheeran-castle-on-the-hill-live',
      'https://soundcloud.com/sangeet-kumar-1/ilahi-yeh-jawaani-hai-deewani',
      'https://soundcloud.com/marckinchen/chris-malinchak-so-good-to-me-mk-remix',
      'https://soundcloud.com/margibmusic/hoyna-mia',
      'https://soundcloud.com/omar-mushtaq/abhi-toh-party-shuru-hui-hai-khubsurat-2014-badshah-astha-lyrics',
      'https://soundcloud.com/mettamusicman/here-comes-the-sun-the-beatles',
      'https://soundcloud.com/musicbyrahul/donu-donu-trap-remix-maari-tamil-trap-mix',
      'https://soundcloud.com/designer_rimmi/chittiyan-kalaiyan-mp3-download',
      'https://soundcloud.com/kristine-alfuerto-borgo-os/colbie-caillat-brighter-than',
      'https://soundcloud.com/joyal-joseph-524950714/sets/kaathale-96',
      ' https://soundcloud.com/dj-regard-1/jay-sean-ride-it-regard-remix',
'https://soundcloud.com/deanlewisofficial/be-alright',
'https://soundcloud.com/lo-freq-1/beat-of-my-heart-feat-love' , 
'https://soundcloud.com/lo-freq-1/are-you-with-me' ,
'https://soundcloud.com/wozinho/topic-breaking-me-ft-a7s-wozinho-remix' ,
'https://soundcloud.com/theneighbourhood/sweater-weather-1' ,
 'https://soundcloud.com/search?q=lost%20on%20you%20-LP' , 
'https://soundcloud.com/sarah-m-108087489/travis-scott-hvme-goosebumps' ,
'https://soundcloud.com/daminkerton/travis-scott-butterfly-effect' , 
'https://soundcloud.com/nfrealmusic/time-extended' ,
'https://soundcloud.com/search?q=darkhaast%20arijit%20singh' ,
'https://soundcloud.com/user-81674968/burna-boy-on-the-low-4' ,

'https://soundcloud.com/tina-basetia/mar-jayian-official-song-vicky-donor-exclusive' ,
 'https://soundcloud.com/hetp70/yeh-dooriyan-love-aaj-kal-slowed-reverbed' , 
'https://soundcloud.com/jasmine-thompson/last-christmas' ,
'https://soundcloud.com/amandawelton/let-it-go-frozen' ,
'https://soundcloud.com/nada-zaki-22/demi-lavato-heart-attack-mp3' ,  
'https://soundcloud.com/cheatcodesmusic/no-promises-feat-demi-lovato' , 
'https://soundcloud.com/batshitcat/enigma-sadness-part-1-2-3' , 
'https://soundcloud.com/musicplug300/doja-cat-kiss-me-more-ft-sza?in_system_playlist=charts-top%3Arbsoul%3Aae' ,  
'https://soundcloud.com/r-sh-kh-n-fr-d/sunny-sunny-ft-yo-yo-honey' ,  
'https://soundcloud.com/youngblood-pranav/zara-zara-x-cradle-vaseegara' ,  
'https://soundcloud.com/haya-rajpoot/gerau-dilwale' ,  
'https://soundcloud.com/jahangir-khan-970060329/sets/roses-imanbek' , 
'https://soundcloud.com/jashn/rum-and-whisky-dj-virtual' , 
'https://soundcloud.com/user-396339773/sets/sunset-lover' , 
'https://soundcloud.com/ingzamoraventura/stereo-love-edward-maya-ft' , 
'https://soundcloud.com/erloonsouza/she-wolf-falling-to-pieces' , 
'https://soundcloud.com/jahseh-onfroy/wanna-grow-old-i-wont-let-go-feat-jimmy-levy' ,  
'https://soundcloud.com/calvinharris/calvin-harris-summer-extended' ,  
'https://soundcloud.com/chrislake/calvin-harris-disciples-how-deep-is-your-love-chris-lake-remix' ,   
'https://soundcloud.com/r3hab/calvin-harris-this-is-what-you-came-for-r3hab-henry-fong-remix' ,
'https://soundcloud.com/gummybearintl/blue-da-ba-dee' , 
'https://soundcloud.com/fabiana-claudia/50-shades-of-grey-trailer-song-crazy-in-love-beyonce-cover' , 
'https://soundcloud.com/emily-rose-321620515/i-hate-you-i-love-you-nightcore-lyrics' , 
'https://soundcloud.com/renita-wulandari-isma-dinata/linkin-park-numb' , 
'https://soundcloud.com/jamesattibond/sets/rihanna-kanye-west-jay-z-run' , 
'https://soundcloud.com/will-post/wonderlust' , 
'https://soundcloud.com/jahseh-onfroy/whoa-mind-in-awe' , 
'https://soundcloud.com/user-236586846/sets/trampolinezayn-and-shaed' , 
'https://soundcloud.com/beyhive123/beyonce-halo-live' , 
'https://soundcloud.com/dj-catomix/minimix-wake-me-up-avici-dj' , 
'https://soundcloud.com/liluzivert/p2' , 
'https://soundcloud.com/alecbenjamin/let-me-down-slowly-feat-alessia-cara' , 
'https://soundcloud.com/martingarrix/itnol' , 
'https://soundcloud.com/dancepointmusic/martin-garrix-id-creamfields-2017-fl-studio-remake-free-flp' ,
'https://soundcloud.com/iamtrevordaniel/falling' , 
 'https://soundcloud.com/cloudjm5t/death-bed-coffe-for-your-head-powfu-remix' , 
'https://soundcloud.com/tonesandi-music/dance-monkey' ,   
 'https://soundcloud.com/hammad-javed-302364557/tu-hi-yaar-mera' , 
'https://soundcloud.com/l-u-4/selena-gomez-a-year-without' , 
 'https://soundcloud.com/hiramabif/justin-bieber-by-sara-11' , 
 'https://soundcloud.com/moshiurasif/tip-tip-barsa-paani-reprise' , 
 'https://soundcloud.com/behzad-83/dharia-sugar-brownies' ,
 'https://soundcloud.com/bennyblanco/eastside' , 
'https://soundcloud.com/magnace/david-guetta-justin-bieber-2u-magnace-remix' , 
'https://soundcloud.com/partha-das-841639278/post-malone-swae-lee-sunflower-spider-man-into-the-spider-verse ' , 
'https://soundcloud.com/charlieputh/attention-acoustic-official-audio' , 
'https://soundcloud.com/mazine3/mar-jawan-full-song-high' , 
'https://soundcloud.com/himadripatel'

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
        description: data.weather[0].main,
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
        <div className="stickycontent-weather">
                <div className="inner-weather">
             <Container fluid="fluid">
               <p className="weather-catchy">Groove to your favorite songs on the go!</p>
               
              <form onSubmit={this.getWeather} className="form-weather">
                <input type="text" name="city" placeholder="City..." className="searchTerm1"/>
                <input type="text" name="country" placeholder="Country..." className="searchTerm2"/><br></br>
                <button className="weather-button">Get Songs!</button><br></br><br></br><br></br>
              </form>
              
              <div id="div-id">
                
                    {//<p className="weather-error">test</p>
                    this.state.error && <p className="weather-error">{this.state.error}</p>}
                  {this.state.temperature && (
                  <div>
                  <p className="weather-info typewriter-text">&#9925; Weather in {this.state.city}, {this.state.country} is {this.state.description} {Math.round((this.state.temperature - 32)*5/9)}&#176;C </p>
                  {
                  (((this.state.temperature - 32)*5/9) <= 10  && (this.state.description =="Clear" || this.state.description =="clear sky")) ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[120]}
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
                    onDuration={this.handleDuration}/><b>Regard it</b><br></br>Jay Sean</Col>         
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[121]}
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
                     onDuration={this.handleDuration} /><b>Be Alright</b><br></br>Dean Lewis</Col>           
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[122]}
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
                     onDuration={this.handleDuration} /><b>Beat of my heart</b><br></br>Lost Frequencies</Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[123]}
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
                     onDuration={this.handleDuration} /><b>Are you with me </b><br></br>Lost Frequency </Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[124]}
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
                     onDuration={this.handleDuration} /><b>Breaking me </b><br></br>A7S</Col>
                  </Row>
                  <div><br></br></div>
                  <Row>
                    <Col> <ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[125]}
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
                     onDuration={this.handleDuration}/><b>Sweater Weather</b><br></br>Neighbourhood</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[126]}
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
                     onDuration={this.handleDuration} /><b>Lost In you </b><br></br>LP</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[127]}
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
                     onDuration={this.handleDuration} /><b>goosebumps</b><br></br>Travis Scott ft.HVME</Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[128]}
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
                     onDuration={this.handleDuration} /><b>Butterfly Effect</b><br></br>Travis Scott</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[129]}
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
                     onDuration={this.handleDuration} /><b>Time</b><br></br>NF</Col>
                     </Row>
                     </Container>
                                  ) : ('')
                  }
                  {
                  (((this.state.temperature - 32)*5/9) <= 10   && (this.state.description =="Clouds" || this.state.description =="broken clouds" || this.state.description =="scattered clouds" || this.state.description =="few clouds" || this.state.description =="overcast clouds"))  ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[130]}
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
                    onDuration={this.handleDuration}/><b>Darkhaast </b><br></br>Arijit Singh</Col>         
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[131]}
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
                     onDuration={this.handleDuration} /><b>On the low</b><br></br>Burna Boy</Col>           
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[132]}
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
                     onDuration={this.handleDuration} /><b>Mar -Jayian </b><br></br>Sunidhi Chauhan and Vishal Dadlani</Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[133]}
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
                     onDuration={this.handleDuration} /><b>Dooriyan</b><br></br>Mohit Chauhan & Pritam</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[134]}
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
                     onDuration={this.handleDuration} /><b>Last Christmas I gave you my heart </b><br></br>Wham!</Col>
                  </Row>
                  <div><br></br></div>
                  <Row>
                    <Col> <ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[135]}
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
                     onDuration={this.handleDuration}/><b>Let it go -Frozen- </b><br></br> Idian Menzel</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[136]}
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
                     onDuration={this.handleDuration} /><b> Heart Attack</b><br></br>Demi Lovato</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[137]}
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
                     onDuration={this.handleDuration} /><b>Promises</b><br></br>Demi lavato</Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[138]}
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
                     onDuration={this.handleDuration} /><b>Sadness</b><br></br>Enigma</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[139]}
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
                     onDuration={this.handleDuration} /><b>Kiss me more</b><br></br>Doja Cat, SZA</Col>
                     </Row>
                     </Container>
                                  ) : ('')
                  }
                  {
                  (((this.state.temperature - 32)*5/9) <= 10   && this.state.description =="Thunderstorm") ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[140]}
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
                    onDuration={this.handleDuration}/><b>Sunny Sunny </b><br></br>YO YO Honey singh</Col>         
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[141]}
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
                     onDuration={this.handleDuration} /><b>Vaseegara</b><br></br>Lost Stories</Col>           
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[142]}
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
                     onDuration={this.handleDuration} /><b>Gerua </b><br></br>Arijit singh</Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[143]}
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
                     onDuration={this.handleDuration} /><b>Roses </b><br></br>Imanbek</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[144]}
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
                     onDuration={this.handleDuration} /><b>Rum and Whisky</b><br></br>Akshay Verma </Col>
                  </Row>
                  <div><br></br></div>
                  <Row>
                    <Col> <ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[145]}
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
                     onDuration={this.handleDuration}/><b>SunSet Lover </b><br></br>Petit Buiscuit</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[146]}
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
                     onDuration={this.handleDuration} /><b>Stereo Love</b><br></br>Edwardmaya</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[147]}
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
                     onDuration={this.handleDuration} /><b>She Wolf</b><br></br>Sia &David Guetta</Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[148]}
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
                     onDuration={this.handleDuration} /><b>Wanna grow old</b><br></br>XXXTentacion</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[149]}
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
                     onDuration={this.handleDuration} /><b>Outside </b><br></br>Calvin Harris </Col>
                     </Row>
                     </Container>
                                  ) : ('')
                  }
                  {
                  (((this.state.temperature - 32)*5/9) <= 10  && (this.state.description =="Drizzle" || this.state.description =="light rain" || this.state.description =="Snow")) ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[150]}
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
                    onDuration={this.handleDuration}/> <b>How deep is your love </b><br></br>Calvin Harris</Col>         
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[151]}
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
                     onDuration={this.handleDuration} /><b>This is what you came for </b><br></br>Calvin Harris</Col>           
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[152]}
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
                     onDuration={this.handleDuration} /><b>Blue da ba dee </b><br></br>Eiffel </Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[153]}
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
                     onDuration={this.handleDuration} /><b>Crazy in love</b><br></br>Beyonce</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[154]}
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
                     onDuration={this.handleDuration} /><b>I hate you , I love you</b><br></br>Emileee</Col>
                  </Row>
                  <div><br></br></div>
                  <Row>
                    <Col> <ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[155]}
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
                     onDuration={this.handleDuration}/><b>Numb</b><br></br>Linkin Park</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[156]}
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
                     onDuration={this.handleDuration} /><b> RUN </b><br></br>Kanye West</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[157]}
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
                     onDuration={this.handleDuration} /><b>WonderLust</b><br></br>Will Post </Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[158]}
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
                     onDuration={this.handleDuration} /><b>WHOA </b><br></br>XXXTentacion</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[159]}
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
                     onDuration={this.handleDuration} /><b>Trampoline</b><br></br>Zayn ,SHAED</Col>
                     </Row>
                     </Container>
                                  ) : ('')
                  }
                  {
                  (((this.state.temperature - 32)*5/9) <= 10  && this.state.description =="Rain") ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[160]}
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
                    onDuration={this.handleDuration}/> <b>Halo</b><br></br>Beyonce</Col>         
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[161]}
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
                     onDuration={this.handleDuration} /><b>Wake me up</b><br></br>AVICI</Col>           
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[162]}
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
                     onDuration={this.handleDuration} /><b>P2</b><br></br>Lil Uzi Vert</Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[163]}
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
                     onDuration={this.handleDuration} /><b>Let me down slowly</b><br></br>Alesia Cara & Alec Benjamin </Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[164]}
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
                     onDuration={this.handleDuration} /><b>In the name of love</b><br></br>Martin Garrix & Bebe Rexha </Col>
                  </Row>
                  <div><br></br></div>
                  <Row>
                    <Col> <ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[165]}
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
                     onDuration={this.handleDuration}/><b>Forever</b><br></br>Martin Garrix</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[166]}
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
                     onDuration={this.handleDuration} /><b>Falling</b><br></br>Trevor Daniel</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[167]}
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
                     onDuration={this.handleDuration} /><b>Coffee for your head </b><br></br>Powfu</Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[168]}
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
                     onDuration={this.handleDuration} /><b>Dance Monkey </b><br></br>Tones&I</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[169]}
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
                     onDuration={this.handleDuration} /><b>Tu hi yaar mera </b><br></br>Arijit Singh</Col>
                     </Row>
                     </Container>
                                  ) : ('')
                  }

                  {
                  (((this.state.temperature - 32)*5/9) >= 10 && ((this.state.temperature - 32)*5/9)<=20 && (this.state.description =="Drizzle" || this.state.description =="light rain" || this.state.description =="Rain") ) ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[170]}
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
                    onDuration={this.handleDuration}/> <b>Year without Rain </b><br></br>Selena Gomez</Col>         
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[171]}
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
                     onDuration={this.handleDuration} /><b>EENIE minie </b><br></br>Justin Beiber</Col>           
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[172]}
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
                     onDuration={this.handleDuration} /><b>tip tip barsa paani </b><br></br>Alka&Udit  </Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[173]}
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
                     onDuration={this.handleDuration} /><b>Sugar and brownies</b><br></br>DHARIA</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[174]}
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
                     onDuration={this.handleDuration} /><b>Eastside</b><br></br>Benny Blanco</Col>
                  </Row>
                  <div><br></br></div>
                  <Row>
                    <Col> <ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[175]}
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
                     onDuration={this.handleDuration}/><b>2U</b><br></br>David Guetta &Justin Beiber</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[176]}
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
                     onDuration={this.handleDuration} /><b> Sunflower </b><br></br>Post Malone &Swa Lae</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[177]}
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
                     onDuration={this.handleDuration} /><b>Attention </b><br></br>Charlie Puth </Col>
                     <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[178]}
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
                     onDuration={this.handleDuration} /><b>Mar-Jawaan </b><br></br>Shruti Pathak, Salim Merchant</Col>
                    <Col><ReactPlayer
                     ref={this.ref}
                     className='react-player'
                     width='200px'
                     height='200px'
                     url={url[179]}
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
                     onDuration={this.handleDuration} /><b>Pani Da Rang</b><br></br>Ayushmann Khurrana & Yami Gautam</Col>
                     </Row>
                     </Container>
                                  ) : ('')
                  }

                  {
                  (((this.state.temperature - 32)*5/9) >= 20 && ((this.state.temperature - 32)*5/9)<25  && (this.state.description =="Clear")) ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[50]}
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
                     url={url[51]}
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
                     url={url[52]}
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
                     url={url[53]}
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
                     url={url[54]}
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
                     url={url[55]}
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
                     url={url[56]}
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
                     url={url[57]}
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
                     url={url[58]}
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
                     url={url[59]}
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
                     </Container>
                                  ) : ('')
                                }
              
                  {
                  (((this.state.temperature - 32)*5/9) >= 20 && ((this.state.temperature - 32)*5/9)<25  && (this.state.description =="Clouds"))  ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[60]}
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
                     url={url[61]}
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
                     url={url[62]}
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
                     url={url[63]}
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
                     url={url[64]}
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
                     url={url[65]}
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
                     url={url[66]}
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
                     url={url[67]}
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
                     url={url[68]}
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
                     url={url[69]}
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
                     </Container>
                                  ) : ('')
                  }
                  {
                  (((this.state.temperature - 32)*5/9) >= 25 && ((this.state.temperature - 32)*5/9)<=30  && (this.state.description =="Thunderstorm" || this.state.description =="Rain" )) ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[70]}
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
                     url={url[71]}
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
                     url={url[72]}
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
                     url={url[73]}
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
                     url={url[74]}
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
                     url={url[75]}
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
                     url={url[76]}
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
                     url={url[77]}
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
                     url={url[78]}
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
                     url={url[79]}
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
                     </Container>
                                  ) : ('')
                  }
                  {
                  (((this.state.temperature - 32)*5/9) >= 25 && ((this.state.temperature - 32)*5/9)<30 && (this.state.description =="Drizzle" || this.state.description =="Clouds") ) ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[80]}
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
                     url={url[81]}
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
                     url={url[82]}
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
                     url={url[83]}
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
                     url={url[84]}
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
                     url={url[85]}
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
                     url={url[86]}
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
                     url={url[87]}
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
                     url={url[88]}
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
                     url={url[89]}
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
                     </Container>
                                  ) : ('')
                  }
                  {
                  (((this.state.temperature - 32)*5/9) >= 25 && ((this.state.temperature - 32)*5/9)<30 && (this.state.description =="Clear")) ? (
                    <Container fluid="fluid">
                    <Row>
                    <Col> <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='200px'
                    height='200px'
                    url={url[90]}
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
                     url={url[91]}
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
                     url={url[92]}
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
                     url={url[93]}
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
                     url={url[94]}
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
                     url={url[95]}
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
                     url={url[96]}
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
                     url={url[97]}
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
                     url={url[98]}
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
                     url={url[99]}
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
                     </Container>
                                  ) : ('')
                  }
              {
              (((this.state.temperature - 32)*5/9) >= 30 && ((this.state.temperature - 32)*5/9)<35 && (this.state.description =="Clouds" || this.state.description =="Drizzle")) ? (
                <div>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[100]}
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
                onDuration={this.handleDuration} /><b>Echo</b><br></br>Armaan Malik, Eric Nam, KSHMR</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[101]}
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
                onDuration={this.handleDuration} /><b>Kar Gayi Chull</b><br></br>Fazilpuria, Badshah, Sukriti Kakar, Neha Kakkar</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[102]}
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
                onDuration={this.handleDuration} /><b>Kadalalle</b><br></br>Sid Sriram, Aishwarya Ravichandran</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[103]}
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
                onDuration={this.handleDuration} /><b>Cham Cham</b><br></br>Monali Thakur, Meet Bros</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[104]}
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
                onDuration={this.handleDuration} /><b>Why does it always rain on me?</b><br></br>Travis</Col>
                </Row><br></br>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[105]}
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
                onDuration={this.handleDuration} /><b>Tum Hi Ho</b><br></br>Arijit Singh</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[106]}
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
                onDuration={this.handleDuration} /><b>Munbe Vaa</b><br></br>Shreya Ghoshal,Naresh Iyer</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[107]}
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
                onDuration={this.handleDuration} /><b>It aint me</b><br></br>Kygo, Selena Gomez</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[108]}
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
                onDuration={this.handleDuration} /><b>Something just like this</b><br></br>The Chainsmokers, Coldplay</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[109]}
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
                onDuration={this.handleDuration} /><b>Ramuloo Ramulaa</b><br></br>Mangli, Anurag Kulkarni</Col>
                </Row>
                </div>
                ) : ('')
              }
              {
              (((this.state.temperature - 32)*5/9) >= 30 && ((this.state.temperature - 32)*5/9)<35 && (this.state.description =="Clear")) ? (
                <div>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[110]}
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
                onDuration={this.handleDuration} /><b>Castle on the hill</b><br></br>Ed Sheeran</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[111]}
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
                onDuration={this.handleDuration} /><b>Ilahi</b><br></br>Arijit Singh</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[112]}
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
                onDuration={this.handleDuration} /><b>So good to me</b><br></br>Chris Malinchak</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[113]}
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
                onDuration={this.handleDuration} /><b>Hoyna Hoyna</b><br></br>Inno Genga, Anirudh Ravichander</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[114]}
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
                onDuration={this.handleDuration} /><b>Abhi toh party shuru hui hai</b><br></br>Badshah, Astha gill</Col>
                </Row><br></br>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[115]}
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
                onDuration={this.handleDuration} /><b>Here comes the sun</b><br></br>The Beatles</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[116]}
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
                onDuration={this.handleDuration} /><b> Don'u Don'u Don'u</b><br></br>Alisha Thomas, Anirudh Ravichander</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[117]}
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
                onDuration={this.handleDuration} /><b>Chittiyan Kalaiyan</b><br></br>Meet Bros, Kanika Kapoor</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[118]}
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
                onDuration={this.handleDuration} /><b>Brighter than the sun</b><br></br>Colbie Caillat</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[119]}
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
                onDuration={this.handleDuration} /><b>Kaathale Kaathale</b><br></br>Govind Vasantha, Chinmayi</Col>
                </Row>
                </div>
                ) : ('')
              }
              {
              (((this.state.temperature - 32)*5/9) >= 35 && ((this.state.temperature - 32)*5/9)<40 && (this.state.description =="Clouds" || this.state.description =="Drizzle" || this.state.description =="Rain" || this.state.description =="Thunderstorm")) ? (
                <div>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[100]}
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
                onDuration={this.handleDuration} /><b>Echo</b><br></br>Armaan Malik, Eric Nam, KSHMR</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[101]}
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
                onDuration={this.handleDuration} /><b>Kar Gayi Chull</b><br></br>Fazilpuria, Badshah, Sukriti Kakar, Neha Kakkar</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[102]}
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
                onDuration={this.handleDuration} /><b>Kadalalle</b><br></br>Sid Sriram, Aishwarya Ravichandran</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[103]}
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
                onDuration={this.handleDuration} /><b>Cham Cham</b><br></br>Monali Thakur, Meet Bros</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[104]}
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
                onDuration={this.handleDuration} /><b>Why does it always rain on me?</b><br></br>Travis</Col>
                </Row><br></br>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[105]}
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
                onDuration={this.handleDuration} /><b>Tum Hi Ho</b><br></br>Arijit Singh</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[106]}
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
                onDuration={this.handleDuration} /><b>Munbe Vaa</b><br></br>Shreya Ghoshal,Naresh Iyer</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[107]}
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
                onDuration={this.handleDuration} /><b>It aint me</b><br></br>Kygo, Selena Gomez</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[108]}
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
                onDuration={this.handleDuration} /><b>Something just like this</b><br></br>The Chainsmokers, Coldplay</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[109]}
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
                onDuration={this.handleDuration} /><b>Ramuloo Ramulaa</b><br></br>Mangli, Anurag Kulkarni</Col>
                </Row>
                </div>
                ) : ('')
              }
              {
              (((this.state.temperature - 32)*5/9) >= 35 && ((this.state.temperature - 32)*5/9)<40 && (this.state.description =="Clear")) ? (
                <div>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[110]}
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
                onDuration={this.handleDuration} /><b>Castle on the hill</b><br></br>Ed Sheeran</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[111]}
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
                onDuration={this.handleDuration} /><b>Ilahi</b><br></br>Arijit Singh</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[112]}
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
                onDuration={this.handleDuration} /><b>So good to me</b><br></br>Chris Malinchak</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[113]}
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
                onDuration={this.handleDuration} /><b>Hoyna Hoyna</b><br></br>Inno Genga, Anirudh Ravichander</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[114]}
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
                onDuration={this.handleDuration} /><b>Abhi toh party shuru hui hai</b><br></br>Badshah, Astha gill</Col>
                </Row><br></br>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[115]}
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
                onDuration={this.handleDuration} /><b>Here comes the sun</b><br></br>The Beatles</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[116]}
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
                onDuration={this.handleDuration} /><b> Don'u Don'u Don'u</b><br></br>Alisha Thomas, Anirudh Ravichander</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[117]}
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
                onDuration={this.handleDuration} /><b>Chittiyan Kalaiyan</b><br></br>Meet Bros, Kanika Kapoor</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[118]}
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
                onDuration={this.handleDuration} /><b>Brighter than the sun</b><br></br>Colbie Caillat</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[119]}
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
                onDuration={this.handleDuration} /><b>Kaathale Kaathale</b><br></br>Govind Vasantha, Chinmayi</Col>
                </Row>
                </div>
                ) : ('')
              }
              {
              (((this.state.temperature - 32)*5/9) >= 35 && ((this.state.temperature - 32)*5/9)<40 && (this.state.description =="Clouds" || this.state.description =="Drizzle" || this.state.description =="Rain" || this.state.description =="Thunderstorm")) ? (
                <div>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[100]}
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
                onDuration={this.handleDuration} /><b>Echo</b><br></br>Armaan Malik, Eric Nam, KSHMR</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[101]}
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
                onDuration={this.handleDuration} /><b>Kar Gayi Chull</b><br></br>Fazilpuria, Badshah, Sukriti Kakar, Neha Kakkar</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[102]}
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
                onDuration={this.handleDuration} /><b>Kadalalle</b><br></br>Sid Sriram, Aishwarya Ravichandran</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[103]}
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
                onDuration={this.handleDuration} /><b>Cham Cham</b><br></br>Monali Thakur, Meet Bros</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[104]}
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
                onDuration={this.handleDuration} /><b>Why does it always rain on me?</b><br></br>Travis</Col>
                </Row><br></br>
                <Row>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[105]}
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
                onDuration={this.handleDuration} /><b>Tum Hi Ho</b><br></br>Arijit Singh</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[106]}
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
                onDuration={this.handleDuration} /><b>Munbe Vaa</b><br></br>Shreya Ghoshal,Naresh Iyer</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[107]}
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
                onDuration={this.handleDuration} /><b>It aint me</b><br></br>Kygo, Selena Gomez</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[108]}
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
                onDuration={this.handleDuration} /><b>Something just like this</b><br></br>The Chainsmokers, Coldplay</Col>
                <Col>
                <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='200px'
                height='200px'
                url={url[109]}
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
                onDuration={this.handleDuration} /><b>Ramuloo Ramulaa</b><br></br>Mangli, Anurag Kulkarni</Col>
                </Row>
                </div>
                ) : ('')
              }
                  </div>
                  )}
                  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  </div>
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
              
              <input
                        type='range' min={0} max={0.999999} step='any'
                        value={played}
                        onSeekStart={this.handleSeek}
                        onSeekEnd={this.handleSeekEnd}
                        onMouseDown={this.handleSeekMouseDown}
                        onChange={this.handleSeekChange}
                        onMouseUp={this.handleSeekMouseUp}
                        style={{"width":"100%"}} fluid={true}
                        color="dark"
                      />
              </Col>
             <br></br>
            </div>
            
               
                </div>
             
    );
  }
}

export default Weather;
