const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
const audio = $('#audio');
const cdThumb = $('.cdthumb__img');
const cdThumbName = $('.cdthumb__name h3');
const cdThumbArtist = $('.cdthumb__name p');
const controlBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn=$('.btn-next');
const prevBtn=$('.btn-prev');
const randomBtn=$('.btn-random');
const repeatBtn=$('.btn-repeat');
const playlist = $('.playlist__table-item')
const app ={
    currentIndex:0,
    isPlaying:false,
    isRandom:false,
    isRepeat: false,
    songs: [
        {
        name: "Click Pow Get Down",
        singer: "Raftaar x Fortnite",
        path: "./assets/sounds/song2.mp3",
        image: "https://350927.smushcdn.com/1388247/wp-content/uploads/2020/11/Unknown-Album-Cover-PP1.jpg?lossy=0&strip=1&webp=1"
        ,album: "Click Pow"
        },
        {
        name: "Tu Phir Se Aana",
        singer: "Raftaar x Salim Merchant x Karma",
        path: "./assets/sounds/song3.mp3",
        image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
            ,album: "Click Pow"
        },
        {
        name: "Naachne Ka Shaunq",
        singer: "Raftaar x Brobha V",
        path:
            "./assets/sounds/song4.mp3",
        image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        ,album: "Click Pow"
        },
        {
        name: "Mantoiyat",
        singer: "Raftaar x Nawazuddin Siddiqui",
        path: "./assets/sounds/song5.mp3",
        image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
            ,album: "Click Pow"
        },
        {
        name: "Aage Chal",
        singer: "Raftaar",
        path: "./assets/sounds/song6.mp3",
        image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
            ,album: "Click Pow"
        },
        {
        name: "Feeling You",
        singer: "Raftaar x Harjas",
        path: "./assets/sounds/song8.mp3",
        image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
            ,album: "Feeling You"
        },
        {
            name: "Click Pow Get Down",
            singer: "Raftaar x Fortnite",
            path: "./assets/sounds/song2.mp3",
            image: "https://350927.smushcdn.com/1388247/wp-content/uploads/2020/11/Unknown-Album-Cover-PP1.jpg?lossy=0&strip=1&webp=1"
            ,album: "Feeling You"

            },
            {
            name: "Tu Phir Se Aana",
            singer: "Raftaar x Salim Merchant x Karma",
            path: "./assets/sounds/song3.mp3",
            image:
                "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
            ,album: "Feeling You"

            },
            {
            name: "Naachne Ka Shaunq",
            singer: "Raftaar x Brobha V",
            path:
                "./assets/sounds/song4.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
            ,album: "Feeling You"

            },
            {
            name: "Mantoiyat",
            singer: "Raftaar x Nawazuddin Siddiqui",
            path: "./assets/sounds/song5.mp3",
            image:
                "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
            ,album: "Feeling You"

            },
            {
            name: "Aage Chal",
            singer: "Raftaar",
            path: "./assets/sounds/song6.mp3",
            image:
                "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
            ,album: "Feeling You"

            },
            {
            name: "Feeling You",
            singer: "Raftaar x Harjas",
            path: "./assets/sounds/song8.mp3",
            image:
                "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
            ,album: "Feeling You"

            },
            {
                name: "Click Pow Get Down",
                singer: "Raftaar x Fortnite",
                path: "./assets/sounds/song2.mp3",
                image: "https://350927.smushcdn.com/1388247/wp-content/uploads/2020/11/Unknown-Album-Cover-PP1.jpg?lossy=0&strip=1&webp=1"
                ,album: "Feeling You"
    
                },
                {
                name: "Tu Phir Se Aana",
                singer: "Raftaar x Salim Merchant x Karma",
                path: "./assets/sounds/song3.mp3",
                image:
                    "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
                ,album: "Feeling You"
    
                },
                {
                name: "Naachne Ka Shaunq",
                singer: "Raftaar x Brobha V",
                path:
                    "./assets/sounds/song4.mp3",
                image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
                ,album: "Feeling You"
    
                },
                {
                name: "Mantoiyat",
                singer: "Raftaar x Nawazuddin Siddiqui",
                path: "./assets/sounds/song5.mp3",
                image:
                    "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
                ,album: "Feeling You"
    
                },
                {
                name: "Aage Chal",
                singer: "Raftaar",
                path: "./assets/sounds/song6.mp3",
                image:
                    "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
                ,album: "Feeling You"
    
                },
                {
                name: "Feeling You",
                singer: "Raftaar x Harjas",
                path: "./assets/sounds/song8.mp3",
                image:
                    "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
                ,album: "Feeling You"
    
                },
            {
            name: "Feeling You",
            singer: "Raftaar x Harjas",
            path: "./assets/sounds/song8.mp3",
            image:
                "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
            ,album: "Feeling You"

            },
            {
                name: "Click Pow Get Down",
                singer: "Raftaar x Fortnite",
                path: "./assets/sounds/song2.mp3",
                image: "https://350927.smushcdn.com/1388247/wp-content/uploads/2020/11/Unknown-Album-Cover-PP1.jpg?lossy=0&strip=1&webp=1"
                ,album: "Feeling You"
    
                },
                {
                name: "Tu Phir Se Aana",
                singer: "Raftaar x Salim Merchant x Karma",
                path: "./assets/sounds/song3.mp3",
                image:
                    "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
                ,album: "Feeling You"
    
                },
                {
                name: "Naachne Ka Shaunq",
                singer: "Raftaar x Brobha V",
                path:
                    "./assets/sounds/song4.mp3",
                image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
                ,album: "Feeling You"
    
                },
                {
                name: "Mantoiyat",
                singer: "Raftaar x Nawazuddin Siddiqui",
                path: "./assets/sounds/song5.mp3",
                image:
                    "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
                ,album: "Feeling You"
    
                },
                {
                name: "Aage Chal",
                singer: "Raftaar",
                path: "./assets/sounds/song6.mp3",
                image:
                    "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
                ,album: "Feeling You"
    
                }
    ],
    render:function(){
        const htmls =this.songs.map((song,index)=>{
            return`
            <tr class="song ${index === this.currentIndex ? 'active':''}" data-index="${index}">
            <td>${index+1}</td>
            <td>${song.name}</td>
            <td>${song.singer}</td>
            <td>${song.album}</td>
          </tr>`    
        });
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function(){
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },
   
    loadCurrentSong: function(){
       
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        cdThumbName.textContent = this.currentSong.name
        cdThumbArtist.textContent = this.currentSong.singer
        audio.src = this.currentSong.path
        
    },
    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex > this.songs.length -1){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
     },
     prevSong: function(){
        this.currentIndex--
        if(this.currentIndex < 0){
         this.currentIndex = this.songs.length -1;
        }
        this.loadCurrentSong()
     },
     playRandomSong: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length);
        }while(newIndex === this.currentIndex)
        console.log(newIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong()
     },
    handleEvent: function(){
        const _this=this

        //xử lý khi click vào nút play
        controlBtn.onclick = function(){
            if(_this.isPlaying) {
                _this.isPlaying = false;
                audio.pause();
            }else {
                _this.isPlaying = true;
                audio.play();
            }
        } 
        // Khi bài hát được play       

        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing')
        }
        //Khi bài hát được pause
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing')

        }
        //xử lý tua
        audio.ontimeupdate= function(){
            if(audio.currentTime) {
                const progressPercent=audio.currentTime/audio.duration *100;
                progress.value=progressPercent;                

            }
        }
        progress.oninput=function(e) {
            const seekTime=audio.duration*e.target.value/100;
            audio.currentTime=seekTime;
        }

        //xử lý bấm next song
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
            _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToView()
        }

        //xử lý khi bấm pre song

        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToView()
        }

        //Khi random Song
        
        randomBtn.onclick = function(){
            _this.isRandom=!_this.isRandom
                randomBtn.classList.toggle('active',_this.isRandom)
           
        }
        //Khi kết thúc bài hát 
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{
                nextBtn.click()
            }
        }

        //Khi repeat song
        repeatBtn.onclick = function(){
            _this.isRepeat =!_this.isRepeat;
            repeatBtn.classList.toggle('active',_this.isRepeat)


        }
        //Khi click bài hát
        console.log(playlist)
        playlist.onclick = function(e){
            let songNode=e.target.closest('.song:not(.active)');
            console.log(songNode)
                //Xử lí khi click vào nodeSong
                if(songNode) {
                    console.log(songNode.getAttribute('data-index'))
                    _this.currentIndex=Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                    _this.render();
            }
        }

    },
    scrollToView:function() {
        setTimeout(function() {
            $('.song.active').scrollIntoView({
                behavior:'smooth',
                block:'end'
            });

        },200)
    },
    start: function() {
        this.defineProperties()
        this.render();
        this.handleEvent();
        this.loadCurrentSong()
    },
}
app.start();