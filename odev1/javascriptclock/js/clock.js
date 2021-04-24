  let userName = document.querySelector("#myName");
  let myName = prompt('Adınız Nedir?');

      // isim bilgisi boş olursa veya vazgece basılır ise sayfayı yenile
  if(myName == null || myName == ""){
      alert('Lutfen bos bırakmayınız! Yada isim girdikten sonra tamam a basmayı unutmayınız..')
      location.reload();    
      // isim yazıldı ise ismi ekrana bastır
  }else{
      // innerHTML yerine textContent kullanıldı. Hem performans için daha
      //iyi hemde XSS (Cross Site Scripting) olası bir saldırıyı önler
    userName.textContent = `${myName}!`;
    userName.style.color = 'red';
    
  }
  /* showTime Fonsiyonu */
  function showTime() {
    let date  = new Date();
    let year  = date.getFullYear();
    let day   = date.getDay();
    let hours = date.getHours();
    let min   = date.getMinutes();
    let sec   = date.getSeconds();
   
    
      // Sayı ile alınan gün değeri string olarak gösterildi
      switch(day){
        case 1:
              day = 'Pazartesi';
                break;
        case 2:
              day = 'Salı';
                break;
        case 3:
              day = 'Çarşamba';
                break;
        case 4:
              day = 'Perşembe';
                break;
        case 5:
              day = 'Cuma'
                break;
        case 6:
              day = 'Cumartesi'
                break;
        case 7:
              day = 'Pazar'
                break;        
    }
    // saat dakika yada saniye 10 dan kucuk ise basına '0' kondu.
    hours = hours < 10 ? "0" + hours : hours;
    min   = min < 10 ? "0" + min : min;
    sec   = sec < 10 ? "0" + sec : sec;
    // Sayfada nasıl gösterileceği belirlendi
    let clock = hours + ":" + min + ":" + sec + " " + day + " " + year;
    document.querySelector("#myClock").textContent = clock;
     
  setTimeout(showTime, 1000);
  }
  showTime();
   