function moives(title, year, genre){
    this.title = title;
    this.year = year;
    this.genre = genre;
}


// 작은 아씨들
function click_btn_1() {
    //객체 생성
    var movie_1 = new moives("작은 아씨들", 1995, "가족/드라마");

    var title = document.getElementById("title");
    var year = document.getElementById("year");
    var genre = document.getElementById("genre");
    title.innerHTML = movie_1.title;
    year.innerHTML = movie_1.year;
    genre.innerHTML = movie_1.genre;
    
}

// 이상한 나라의 앨리스
function click_btn_2() {
    //객체 생성
    var movie_2 = new moives("이상한 나라의 앨리스", 2010, '판타지/어드벤처');

    var title = document.getElementById("title");
    var year = document.getElementById("year");
    var genre = document.getElementById("genre");
    title.innerHTML = movie_2.title;
    year.innerHTML = movie_2.year;
    genre.innerHTML = movie_2.genre;
}

// 님아 그 강을 건너지 마오
function click_btn_3() {
    //객체 생성
    var movie_3 = new moives("님아 그 강을 건너지 마오", 2014, '다큐멘터리/드라마');

    var title = document.getElementById("title");
    var year = document.getElementById("year");
    var genre = document.getElementById("genre");
    title.innerHTML = movie_3.title;
    year.innerHTML = movie_3.year;
    genre.innerHTML = movie_3.genre;
}
