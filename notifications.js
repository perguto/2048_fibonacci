const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
		debugger
      registerNotification();
    }
  });
})

let games=['asf','fasdf,','asfdfadf']
function registerNotification() {
  const notifTitle = 'Play 2584 plz'
  const notifBody = `It is very gud gam`;
  const notifImg = './rock_face.webp';
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle);
  setTimeout(registerNotification, 
	  // 3*60**2*1000 // every 3 hours
	  1000
  );
}
