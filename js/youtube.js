
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        //<div id="player"></div> 에 사용했던 플레이어임.
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8', //최초 재생 할 유튜브 영상 ID
          playerVars: {
            autoplay: true, //자동재생 유무
            loop: true, //반복재생유무
            playlist: 'An6LvWQuj_8'
          },
          events: {
            onReady: function (event) {
              event.target.mute() //음소거
            }
          }
        });
      }