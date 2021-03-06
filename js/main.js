var portfolioInfo = {
    'memoryMatch': {
        'title': 'Memory Match',
        'short_description': "An elemental version of the classic, memory match game.",
        'tech_description': "The game is written in Javascript, with JQuery events and DOM manipulation. I used Object Oriented Programming to split up the functionality of the different parts of the game. The game object handles the logic such as telling the card object when to flip over, when the Cow object needs to produce methane gas, and the game stats when to add, subtract, or use a resource. It also instructs the Curium countdown object to start counting down or make the cow neon. Since there are many complicated parts to the game, creating seperate objects helped to keep the code organized and readable. I used Flask to serve the different pages, and plan to incorporate a leaderboard model in the next version.",
        'other_description': "I wanted to create a game in which the user passively learns about elements of the periodic table. The player must find all the element matches before losing all three lives. However, the game board can change based on finding molecule combinations. For example, Hydrogen and Chlorine create hydrochloric acid, which causes the player to loose a life. The game incorporate animated effects, countdowns, and board shuffles. I was inspired to create a science game based on my background of being a science teacher. The periodic table is iconic to science, and I wanted to create a game where people could learn some information about elements and molecules by playing a fun game.",
        'technologies': 'Python, Flask, Heroku, Jinja2, HTML, CSS, JavaScript, jQuery, Git',
        'liveSiteUrl': 'https://memorymatch-flask.herokuapp.com/',
        'githubUrl': 'https://github.com/andreasandpiper/flask-memorymatch',
        'imageSrc': 'img/images/elementGame.jpg'
    },
    'findFlix': {
        'title': 'FindFlix',
        'short_description': "A web application that helps users watch the latest movie trailers and find nearby theatres",
        // 'tech_description': "The website uses HTML and CSS to style the page and elements while using flex-box to create responsive containers for posters. The ",
        // 'other_description': "The Hawk and Heron was inspired by my need to create a simple website to display my crafts. The focus of the website is to display images of products and provide links to social media pages.",
        // 'technologies': 'HTML, CSS, Bootstrap, Jekyll, Liquid templating, GitHub Pages',
        'liveSiteUrl': 'http://kuroash.com/FindFlix',
        'githubUrl': 'https://github.com/kur0a5h/FindFlix',
        'imageSrc': 'img/findflix_preview.png'
    },
    'sgt': {
        'title': 'Student Grade Table',
        'short_description': "A content management system that allows users to create, update and delete student grade information in a database",
        // 'tech_description': "I used Wordpress as the CMS, Content Management System so others could also contribute content to the website. I incorporated a child theme to customize the CSS and add additional features to the homepage. I added the static background and sponsors bar using a php file. I currently maintain the website by updating content when needed and performing backups of the website.",
        // 'other_description': "Mountain biking is a big part of my life, and I am involved with the local group in Santa Barbara, updating their website and email and social media marketing. One of the projects was to build a new website to promote the building of pumptracks in the community. ",
        // 'technologies': 'CSS, HTML, Wordpress, sFTP',
        'liveSiteUrl': 'http://www.kuroash.com/Student-Grade-Table',
        'githubUrl': 'https://github.com/kur0a5h/Student-Grade-Table',
        'imageSrc': 'img/sgt_preview.png'
    },
    'bookBird': {
        'title': 'BookBird',
        'short_description': "A mobile first application that helps university students sell their used textbooks",
        // 'tech_description': "Beets and Eats uses data from GoogleMaps, Ticketmaster and Yelp to populate a map with restaurants and bars surrounding a desired event venue. We used AJAX to make cross-origin requests and passed specific data such as a zip code for the location. To use the application, users enter a location and date in which we request information from Ticketmaster to populate a list of all the events occuring on the specified date. When users click on the event, the website scrolls automatically to the map, which becomes populated with nearby restaurants and lounges from the Yelp API. We used closures to encapsulate data for each element on the page so when it is clicked, it shows the correct data. Users can click on the icons to learn more about each location. ",
        // 'other_description': "The project was accomplished during a 2 day Hackathon. The initial preparation was creating quick wireframes and a SCRUM list of all the desired features. We created a repository on GitHub, and included a Javascript file incorporating JSDocs to specify the location and description for each function to be written. Once set up, we delegated tasks and a sprint using Meistertask. We used Git as version control, and worked off of a development branch with seperate branches for each feature. By using these task managing systems, we were able to produce a functioning and appealing web application!",
        // 'technologies': 'HTML, CSS, JQuery, AJAX, Google Maps API, Yelp API, Ticketmaster API, Bootstrap',
        'liveSiteUrl': 'http://www.bookbird.store',
        'githubUrl': 'https://github.com/Jsalisbury3/BookBird',
        'imageSrc': 'img/bookbird_preview.png'
    },
    'closeyourtabs': {
        'title': 'Close Your Tabs',
        'short_description': "A Chrome extension to keep tabs on your tabs.",
        'tech_description': "Close Your Tabs incorporates a React website, Node.js Javascript environment with mySQL database, and a Chrome extension. The three components join together to create a system to keep track of the current tabs in a Chrome browser session and access those tabs on a different browser or device. The extension uses Chrome Platform APIs to listen for events within the browser, such as creating a new tab, moving a tab, deleting a tab, etc. The extension popup displays the all the current tabs and color codes them according to the time elapsed since last accessed. We used Google Oauth and passport for user authentication and cookie sessions. The extension is able to know if a user is logged in by injecting content scripts into the website to listen for the user’s actions within the website. This also enables injecting scripts to allow the user to manipulate their tabs in the browser from within the website. The extension communicates with the remote server using XHR requests.",
        'other_description': "The idea for Close Your Tabs spawned from observing developers with “mountains” of tabs, in which titles can become difficult to read when searching for a particular website open. My contribution was developing the extension and writing the FAQ React component as well as UI/UX design for the project. We used Agile methodologies to create an increasingly more complex product and Git as version control. Meistertask was the central hub for delegating tasks, reporting bugs, and keeping track of excel sheets and API documentation we created.",
        'technologies': 'Javascript, ReactJS, Chrome Extension, Chrome Platform API, XMLHTTPRequests, HTML5, CSS3, Node, MySQL, Google OAuth, Axios ',
        'liveSiteUrl': 'https://chrome.google.com/webstore/detail/close-your-tabs/nlgenhmcakjpnmgnplkiomeiniklmfkc',
        'githubUrl': 'https://github.com/andreasandpiper/closeyourtabs-chrome-extension',
        'imageSrc': 'img/images/closeyourtabs.jpg'
    }
}
$(document).ready(function() {


    /* Scroll about me button to profile page */
    $('.hire-me').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300);
        return false;
    });
    
    $('.navbar-nav > li > a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300);
        $('.navbar-collapse').removeClass('in');
        $('.navbar-collapse').attr('aria-expanded', false);
        return false;
    })
    $(window).on('scroll', function () {
        $('.navbar-collapse').removeClass('in');
        $('.navbar-collapse').attr('aria-expanded', false);
        return false;
    })

    /* For Bootstrap current state on portfolio sorting */

    $('ul.nav-pills li a').click(function(e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

    /* portfolio mixitup */

    $(window).load(function() {
        var $container = $('.grid-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.grid-controls li a').click(function() {
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });


    /* Magnific Popup */
    $('.grid-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });

    /* Charts*/

    $('.chart').waypoint(function() {
        $(this).easyPieChart({
            barColor: '#3498db',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });


    /* VEGAS Home Slider */
	
	    $('#page-welcome').vegas({
        slides: [
            { src: 'img/slider/IMG_0459.jpg' },
            { src: 'img/slider/queen_marie.JPG' },
            { src: 'img/slider/long_beach.JPG' },
			{ src: 'img/slider/04.jpg' }
        ],
    overlay: true

});

    $("#vegas-next").click(function() {
        $('#page-welcome').vegas('next');
    });
    $("#vegas-prev").click(function() {
       $('#page-welcome').vegas('previous');
    });

    $('.overlay').on('click', showProjectInfo)

});
function showProjectInfo() {
    var projectInfo = $(this).closest('.portfolio-div').attr('data-title');
    var project =  portfolioInfo[projectInfo];
    var projectTitle = project.title;
    var projectImage = project.imageSrc;
    var projectTech = project.technologies;
    var liveLink = project.liveSiteUrl;
    var gitHubLink = project.githubUrl;
    var general_desc = project.short_description;
    var tech_desc = project.tech_description;
    var other_desc = project.other_description;
    $("#portfolioModal").find('.modal-title').text(projectTitle);
    $("#portfolioModal").find('.modal-body img').attr('src', projectImage);
    $("#portfolioModal").find('.modal-body span:last-child').html(projectTech);
    $("#portfolioModal").find('.modal-body .live').attr('href', liveLink);
    $("#portfolioModal").find('.modal-body .github').attr('href', gitHubLink);
    $("#portfolioModal").find('.modal-subtitle').text(general_desc);
    $("#portfolioModal").find('div.description > p:nth-child(2)').text(tech_desc);
    $("#portfolioModal").find('.modal-body .description p:last-child').text(other_desc);

    if (gitHubLink === '') {
        $("#portfolioModal").find('.modal-body .github').hide();
        $("#portfolioModal").find('div.modal-body span:first-child').hide();
    } else {
        $("#portfolioModal").find('.modal-body .github').show();
    }
    $('#portfolioModal').modal('show');
}
