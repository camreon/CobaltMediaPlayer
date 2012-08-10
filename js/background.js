var defaultPlaylist = new Array();
defaultPlaylist.push({duration:"296", file:"http://www.youtube.com/watch?v=3JC27eE-BPw&feature=youtube_gdata", image:"http://i.ytimg.com/vi/3JC27eE-BPw/0.jpg", title:"梁靜茹 - 愛久見人心 完整CD版"});

if(localStorage["playlist"] != undefined) {
	
	//parse default playlist
	var jsonObj = JSON.parse(localStorage["playlist"]);
	defaultPlaylist = new Array();
	for(var i = 0; i < jsonObj.length; i++) {
		if(jsonObj[i].image == null || jsonObj[i].duration == null || jsonObj[i].duration == undefined || jsonObj[i].duration == undefined) {
			defaultPlaylist.push({file:jsonObj[i].file, title:jsonObj[i].title});		
		} else {
			defaultPlaylist.push({duration:jsonObj[i].duration, file:jsonObj[i].file, image:jsonObj[i].image, title:jsonObj[i].title});
		}
		
	}
	defaultPlaylist = defaultPlaylist
}

//setup jwplayer(playlist)
jwplayer("container").setup({
	flashplayer: "https://b8ddc7bd-a-62cb3a1a-s-sites.googlegroups.com/site/armchipsolution/zi-liao-ye/code-1/player54-yt-as3.swf?attachauth=ANoY7cqDUeZ7j0MvM9aRWx6-CUoPX1Qw5e-9hVfN3tTmrT84AixqwZkm9Cx8XIuP5iI2XDDUsOF-ebBLdx2X121VdYlMUqrXO6fZ8iAV5k0KuV9VaohV1E5BZpJArDGsRaVZpD1-WZYVHaHGIHuq4uPZ3OdKuYQldYKiJrbdvD0bU6nPtPzg5--2h5fyAP8NrS8io8U6ErOOCz1VaoOiWp5TFFAgFx0l2yy8sSBpxxpVr34Arhc6hmo5hLYR9eoKHU0usz6Umyra&attredirects=0",
	playlist: defaultPlaylist,
	height: 360,
	width: 720,
	events: {
		onBufferChange: function() { updatePlaylistItem(); },
		onComplete: function() { playNextCheck(); },
		onPlaylist: function() { updatePlaylist(); },
		onError: function() { onError(); }
	}
});
