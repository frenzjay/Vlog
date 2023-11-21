document.querySelectorAll('.video a').forEach(function(videoLink) {
 videoLink.addEventListener('click', function(event) {
   event.preventDefault();
   var date = this.getAttribute('data');
   window.location.href = '/view/' + date;
 });
});

var frnz = [
   "Behind this smile is a lot of hard work and stress, but I’m always thankful for everything I have and everyone around me.",
   "Vloggers don’t just create a good video. They inspire people by putting themselves out there.",
   "Your work does not define you, and you do not have to live under the burden of an unsatisfying job. Vlogging can be a fun, creative way to make a living and offers freedom and fulfilment.",
   "Vloggers are the voice of the people today, but not many people understand how much these social media movie stars influence the world.",
   "Vloggers are the new generation of media. Not only do they hold a great deal of power on the internet, but their influence over consumers in today’s world can’t be denied.",
   "Vloggers are the voice of their local communities and beyond. They inspire change, open conversation, and make a difference in their family, community, and the world.",
   "Vloggers are people who are motivated to share their passions and experiences with the world. They are so committed that they devote their time, energy, and money, all for the sake of vlogging.",
   "Vloggers are the new generation of world travellers. They’re making their mark by toeing the line between fashion and fame while inspiring others to do their best.",
   "Vlogging is not just a profession. It is the future of journalism. It is the cure for loneliness. It is the hope for the hopeless.",
   "Vloggers are the voice of their local communities and beyond. They inspire change, open conversation, and make a difference in their family, community, and the world."
];

var randomFrnz = frnz[Math.floor(Math.random() * frnz.length)];
document.getElementById('frnz').innerText = randomFrnz;
