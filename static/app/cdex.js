console.log("loading cdexApp");


var GLOBS = {};   // hacky global for passing stuff around

var recognizing = false;
var create_email = false;
var final_transcript = '';
var ignore_onend;
var start_timestamp;
var recognition = new webkitSpeechRecognition();

var updateInterval;

var two_line = /\n\n/g;
var one_line = /\n/g;
var current_style;
var first_char = /\S/;

var ids = [];

var cdexApp = angular.module('cdexApp', [
  'ngRoute' // add controllers here
]);
var langs =
    [['Afrikaans',       ['af-ZA']],
        ['Bahasa Indonesia',['id-ID']],
        ['Bahasa Melayu',   ['ms-MY']],
        ['Català',          ['ca-ES']],
        ['Čeština',         ['cs-CZ']],
        ['Deutsch',         ['de-DE']],
        ['English',         ['en-AU', 'Australia'],
            ['en-CA', 'Canada'],
            ['en-IN', 'India'],
            ['en-NZ', 'New Zealand'],
            ['en-ZA', 'South Africa'],
            ['en-GB', 'United Kingdom'],
            ['en-US', 'United States']],
        ['Español',         ['es-AR', 'Argentina'],
            ['es-BO', 'Bolivia'],
            ['es-CL', 'Chile'],
            ['es-CO', 'Colombia'],
            ['es-CR', 'Costa Rica'],
            ['es-EC', 'Ecuador'],
            ['es-SV', 'El Salvador'],
            ['es-ES', 'España'],
            ['es-US', 'Estados Unidos'],
            ['es-GT', 'Guatemala'],
            ['es-HN', 'Honduras'],
            ['es-MX', 'México'],
            ['es-NI', 'Nicaragua'],
            ['es-PA', 'Panamá'],
            ['es-PY', 'Paraguay'],
            ['es-PE', 'Perú'],
            ['es-PR', 'Puerto Rico'],
            ['es-DO', 'República Dominicana'],
            ['es-UY', 'Uruguay'],
            ['es-VE', 'Venezuela']],
        ['Euskara',         ['eu-ES']],
        ['Français',        ['fr-FR']],
        ['Galego',          ['gl-ES']],
        ['Hrvatski',        ['hr_HR']],
        ['IsiZulu',         ['zu-ZA']],
        ['Íslenska',        ['is-IS']],
        ['Italiano',        ['it-IT', 'Italia'],
            ['it-CH', 'Svizzera']],
        ['Magyar',          ['hu-HU']],
        ['Nederlands',      ['nl-NL']],
        ['Norsk bokmål',    ['nb-NO']],
        ['Polski',          ['pl-PL']],
        ['Português',       ['pt-BR', 'Brasil'],
            ['pt-PT', 'Portugal']],
        ['Română',          ['ro-RO']],
        ['Slovenčina',      ['sk-SK']],
        ['Suomi',           ['fi-FI']],
        ['Svenska',         ['sv-SE']],
        ['Türkçe',          ['tr-TR']],
        ['български',       ['bg-BG']],
        ['Pусский',         ['ru-RU']],
        ['Српски',          ['sr-RS']],
        ['한국어',            ['ko-KR']],
        ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
            ['cmn-Hans-HK', '普通话 (香港)'],
            ['cmn-Hant-TW', '中文 (台灣)'],
            ['yue-Hant-HK', '粵語 (香港)']],
        ['日本語',           ['ja-JP']],
        ['Lingua latīna',   ['la']]];


var words = [];
var markers = {
    "markers": [
        {
            "key": "transition",
            "search": [ "for example", "when", "because", "so", "hello", "test", "what"],
            "position": ["start"],
            "score": 10
        },
        {
            "key": "fanboys",
            "search": [ "great", "wonderful", "what", "improve", "fan", "play", "where"],
            "position": ["start"],
            "score": 20
        },
        {
            "key": "vocabulary",
            "search": [
                "for", "and", "nor", "but", "or", "yet", "so"
            ],
            "position": ["middle"],
            "score": 30
        },

        {
            "key": "precision",
            "search": [
                "lots", "about", "how", "if"
            ],
            "position": ["anywhere"],
            "score": 50
        },
        {
            "key": "caution",
            "search": [
                "for", "thing", "like", "you know", "good", "umm", "just is"
            ],
            "position": ["anywhere"],
            "score": -5
        }

    ]
}



cdexApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/top', {
        templateUrl: 'app/partials/top.html',
        controller: 'TopController'
      }).

      when('/topics', {
        templateUrl: 'app/partials/topics.html',
        controller: 'EventsController'
      }).

      when('/prompt', {
        templateUrl: 'app/partials/prompt.html',
        controller: 'PromptController'
      }).

      when('/parser', {
        templateUrl: 'app/partials/parser.html',
        controller: 'ParserController'
      }).

      when('/results', {
        templateUrl: 'app/partials/results.html',
        controller: 'ResultsController'
      }).

      when('/notebook', {
        templateUrl: 'app/partials/notebook.html',
        controller: 'NotebookController'
      }).

      when('/skills', {
        templateUrl: 'app/partials/skills.html',
        controller: 'SkillsController'
      }).

      when('/chat', {
        templateUrl: 'app/partials/chat.html',
        controller: 'ChatController'
      }).

      when('/admin', {
        templateUrl: 'app/partials/admin.html',
        controller: 'AdminController'
      }).

      otherwise({
        redirectTo: '/top'
      });
  }]);

cdexApp.factory('EventService', function ($http) {
  var EventService = {};

  EventService.async = function () {

    var promise = $http.get('/json/events.json')
      .then(function (response) {
        console.log(response);
        return response.data;
      });

    return promise;
  };
  return EventService;
})


cdexApp.controller('TopController', function ($scope) {
  $scope.message = 'top page';

  // TODO better way to persist data across URLs
  GLOBS.state = "top";
  GLOBS.score = 7;
  GLOBS.max_score = 10;
  $scope.GLOBS = GLOBS;

  for(var i=1;i<=3; i++) {
    div = "#topic" + i;
    console.log(div);
    $(div).hide(0);
    $(div).delay(i*100).slideDown(500);
  }

});

cdexApp.controller('ResultsController', function ($scope) {
  $scope.message = 'results';
  $scope.GLOBS = GLOBS;
  var score = GLOBS.score || 1;
  var max_score = GLOBS.max_score || 1;
  var pct = (100.0 * score) / max_score;
  console.log(score + "/" + max_score + " : " + pct );
  
  $("#scorebox").hide(0);
  $("#scorebox").width(pct + "%");

  $("#scorebox").delay(250).show(1000);
});

cdexApp.controller('SkillsController', function ($scope) {  
});

cdexApp.controller('ChatController', function ($scope) {  
});

cdexApp.controller('NotebookController', function ($scope) {  
});

cdexApp.controller('AdminController', function ($scope) {
});

cdexApp.controller('PromptController', function ($scope) {
  $scope.GLOBS = GLOBS;
  $scope.topic = "Sleep Deprivation";
  $scope.intro = "are you sleep deprived? Tell us about it!";
});


cdexApp.directive('cxNavBarItem', function ($location) {
  return {
    scope: {
      cxHref: '@'
    },
    restrict: 'A',
    transclude: true,
    template: '<a href="{{ cxHref }}" ng-transclude></a>',

    link: function (scope, element, attrs, controller) {
      scope.$on('$routeChangeSuccess', function (event, current, previous) {
        var pathLevel = attrs.cxNavBarItem || 1,
          // this var finds what the path is at the level specified
          pathToCheck = $location.path().split('/')[pathLevel],
          // this var finds grabs the same level of the href attribute
          tabLink = element.find('a').attr('href').split('/')[pathLevel];

        if (pathToCheck === tabLink) {
          element.addClass("active");
        }
        else {
          element.removeClass("active");
        }
      })
    }
  }
})


//// parser page

cdexApp.controller('ParserController', function ($scope) {
    console.log("ParserController.init");
    recordStartup();
    $scope.GLOBS = GLOBS;
  // $scope.message = 'parsing!';
  // $scope.blob = parseAll("");
});


function parseAll(blob) {
  res = {
    html: "<span>some text</span>",
    score: 10
  }
  console.log(markers);
  return res;
}

function parseBad(blob) {
  
}


///////////////////

function updateCountry() {
    for (var i = select_dialect.options.length - 1; i >= 0; i--) {
        select_dialect.remove(i);
    }
    var list = langs[select_language.selectedIndex];
    for (var i = 1; i < list.length; i++) {
        select_dialect.options.add(new Option(list[i][1], list[i][0]));
    }
    select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}


function recordStartup() {
  console.log('recordStartup');
    var i;
    // init words
    words = [];
    for(i = 0; i < markers.markers.length; i++) {
        words.push([])
    }

  ids = [
      "transitionID", "fanboysID", "academicID", "precisionID"
  ];
  for ( i = 0; i < langs.length; i++) {
      select_language.options[i] = new Option(langs[i][0], i);
  }
  select_language.selectedIndex = 6;
  updateCountry();
  select_dialect.selectedIndex = 6;
  
  if (!('webkitSpeechRecognition' in window)) {
      upgrade();
  } else {
    start_button.style.display = 'inline-block';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
        recognizing = true;
        showInfo('info_speak_now');
        start_img.src = '../../img/mic-animate.gif';
    };

    recognition.onerror = function(event) {
        if (event.error == 'no-speech') {
            start_img.src = '../../img/mic.gif';
            showInfo('info_no_speech');
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            start_img.src = '../../img/mic.gif';
            showInfo('info_no_microphone');
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            if (event.timeStamp - start_timestamp < 100) {
                showInfo('info_blocked');
            } else {
                showInfo('info_denied');
            }
            ignore_onend = true;
        }
    };

    recognition.onend = function() {
        recognizing = false;
        if (ignore_onend) {
            return;
        }
        start_img.src = '../../img/mic.gif';
        if (!final_transcript) {
            showInfo('info_start');
            return;
        }
        showInfo('');
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
            var range = document.createRange();
            range.selectNode(document.getElementById('final_span'));
            window.getSelection().addRange(range);
        }
        if (create_email) {
            create_email = false;
            createEmail();
        }
    };

    recognition.onresult = function(event) {
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        final_transcript = capitalize(final_transcript);
        //var find = 'Hello';
        //var tmpstr = '<span class="red">'+find+'</span>';
        //final_transcript =  replaceAll(find, tmpstr, final_transcript);
        final_span.innerHTML ="<H3>"+linebreak(final_transcript) +"</H3>" ;
        interim_span.innerHTML = linebreak(interim_transcript);
        if (final_transcript || interim_transcript) {
            showButtons('inline-block');
        }


    };
}
}


function upgrade() {
    start_button.style.visibility = 'hidden';
    showInfo('info_upgrade');
}


function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

function capitalize(s) {
    return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

function createEmail() {
    var n = final_transcript.indexOf('\n');
    if (n < 0 || n >= 80) {
        n = 40 + final_transcript.substring(40).indexOf(' ');
    }
    var subject = encodeURI(final_transcript.substring(0, n));
    var body = encodeURI(final_transcript.substring(n + 1));
    window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
}

function copyButton() {
    if(final_transcript) {  // write to local storage
        if(typeof(Storage) !== "undefined") {
            console.log("write to local storage");
            localStorage.setItem("contentText", final_transcript);
        }
    }
    if (recognizing) {
        recognizing = false;
        window.clearInterval(updateInterval);  // stop updating store and formt
        recognition.stop();
    }
    updateScore();
    goResults();
}

function goResults() {
    //TODO - fix navigation
    // $location.path('/results');
    window.location.href = '#results';

}

function emailButton() {
    if (recognizing) {
        create_email = true;
        recognizing = false;
        recognition.stop();
    } else {
        createEmail();
    }
    email_button.style.display = 'none';
    email_info.style.display = 'inline-block';
    showInfo('');
}
function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function updateScore() {
    var score = 0;
    var j = 0;
    var colorClass = ["greenH", "greenH", "yellowH",  "yellowH", "redH"];
    for(var data in markers.markers) {
        var s = markers.markers[data];
        var search = [];
        search = s.search;
        for(var i = 0; i < search.length; i++) {
            var find = search[i];
            if(final_transcript.search(find) !== -1) {

                if(newword(j, find)===true) {
                    updateBar(j);
                }
                score += parseInt(s.score);
                var tmpstr = '<span class='+colorClass[j]+'>'+find+'</span>';
                final_transcript =  replaceAll(find, tmpstr, final_transcript);
            }
        }
        j++;
    }
    GLOBS.score = score;
    var scoreText = document.getElementById("scoreTextId");
    scoreText.innerHTML= "<h4>Score: <br/>  "+score+"</h4>";
}


function newword(indx, find) {
    for(var i = 0; i < words[indx].length; i++) {
        if(words[indx][i].localeCompare(find) === 0) {
            return false;
        }
    }
    words[indx].push(find);
    return true;
}
function updateBar(indx) {
    var keyID = markers.markers[indx].key;
    var varid ="#"+ keyID;
    if(words[indx].length < 11) {
        var value = words[indx].length+"0%";
    console.log("WIDTH = "+value);
    $(varid).css("width", value);
    }
}


function startButton(event) {
    if (recognizing) {
        window.clearInterval(updateInterval);  // stop updating store and format

        recognition.stop();
        return;
    }
    for(var i = 0; i < markers.markers.length; i++) {
        var varid = "#"+markers.markers[i].key;
        $(varid).css("width", "5%");
    }
    updateInterval = setInterval(function() {updateScore()}, 1000);  // start formating and updating score
    final_transcript = '';
    recognition.lang = select_dialect.value;
    recognition.start();
    ignore_onend = false;
    final_span.innerHTML = '';
    interim_span.innerHTML = '';
    start_img.src = '../../img/mic-slash.gif';
    showInfo('info_allow');
    showButtons('none');
    start_timestamp = event.timeStamp;
}

function showInfo(s) {
    if (s) {
        for (var child = info.firstChild; child; child = child.nextSibling) {
            if (child.style) {
                child.style.display = child.id == s ? 'inline' : 'none';
            }
        }
        info.style.visibility = 'visible';
    } else {
        info.style.visibility = 'hidden';
    }
}

function showButtons(style) {
    if (style == current_style) {
        return;
    }
    current_style = style;
    copy_button.style.display = style;
    email_button.style.display = style;
    copy_info.style.display = 'none';
    email_info.style.display = 'none';
}


function appendItem(key, data) {
    var t = data.constructor, tmp;
    switch(t) {
        case Array:
            tmp = localStorage.getItem(key);
            tmp = (tmp === null) ? [] : JSON.parse(tmp);
            tmp.push(data);
            localStorage.setItem(key, JSON.stringify(tmp));
            break;
        case String:
            break;
    }
}

