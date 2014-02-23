console.log("loading cdexApp");


var GLOBS = {};   // hacky global for passing stuff around

var recognizing = false;
var create_email = false;
var final_transcript = '';
var show_transcript = '';
var interim_transcript = '';
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

      when('/prompt-text', {
        templateUrl: 'app/partials/prompt-text.html',
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
  GLOBS.score = 0;
  GLOBS.max_score = 100;
  $scope.GLOBS = GLOBS;

  for(var i=1;i<=3; i++) {
    div = "#topic" + i;
    console.log(div);
    $(div).hide(0);
    $(div).delay(i*100).slideDown(500);
  }

});

cdexApp.controller('ResultsController', function ($scope) {

  $scope.GLOBS = GLOBS;
  $scope.score = GLOBS.score || 10;
  $scope.max_score = GLOBS.max_score || 100;
  $scope.pct_score = 100.0 * $scope.score / $scope.max_score;

  var rank = Math.round($scope.pct_score / 10);

  if (rank > 8) {
    msg = "Excellent!";
  } else if(rank > 5) {
    msg = "Pretty good!";    
  } else if(rank > 3) {
    msg = "try harder!";    
  } else {
    msg = "Hmm... not too good :(";
  }

  console.log($scope.score + "/" + $scope.max_score + " : " + $scope.pct_score );
  console.log("rank:" + rank);
  
  $scope.resultMsg = msg;

  $("#scorebox").hide(0);
  $("#scorebox").width($scope.pct_score + "%");

  $("#scorebox").delay(250).show(1000);

  // $scope.blob = GLOBS.blob;   // persist VTT
  console.log(GLOBS.blob);
  $("#vtt-out").html(GLOBS.blob);

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
    GLOBS.score = 0;
});


// function parseAll(blob) {
//   res = {
//     html: "<span>some text</span>",
//     score: 10
//   }
//   console.log(markers);
//   return res;
// }

// function parseBad(blob) {
  
// }


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

function micImage(src) {
    $("#start_img").attr('src', src );
}

function recordStartup() {
  console.log('recordStartup');
  $("#showAllowHint").hide(0);

    // init words
    var i;
    words = [];
    for(i = 0; i < markers.length; i++) {
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
        console.log("recognition.onstart");
        $("#showAllowHint").hide(200);

        recognizing = true;
        // showInfo('info_speak_now');
        micImage('/img/mic-animate.gif');
    };

    recognition.onerror = function(event) {
        if (event.error == 'no-speech') {
            micImage('../../img/mic.gif');
            showInfo('info_no_speech');
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            micImage("/img/mic.gif");
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
        micImage('/img/mic.gif');
        if (!final_transcript) {
            showInfo('info_start');
            return;
        }
        // showInfo('');
        // if (window.getSelection) {
        //     window.getSelection().removeAllRanges();
        //     var range = document.createRange();
        //     range.selectNode(document.getElementById('final_span'));
        //     window.getSelection().addRange(range);
        // }
        // if (create_email) {
        //     create_email = false;
        //     createEmail();
        // }
    };

    recognition.onresult = function(event) {
        interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
                console.log("isFinal:", final_transcript);
                scanText(final_transcript);
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        console.log("onresult: ", interim_transcript, " | ", final_transcript);

        // final_transcript = capitalize(final_transcript);
        //var find = 'Hello';
        //var tmpstr = '<span class="red">'+find+'</span>';
        //final_transcript =  replaceAll(find, tmpstr, final_transcript);
        // final_span.innerHTML = "<H3>"+linebreak(final_transcript) +"</H3>" ;
        // final_span.innerHTML = linebreak(final_transcript);

        // if (interim_transcript=='') {
        //     console.log("final:", final_transcript);
        // }

        interim_vtt.innerHTML = linebreak(interim_transcript);

    };
    }
}


function replaceAll(find, replace, str) {
    // return str.replace(new RegExp(find, 'g'), replace);
    var res = str.replace(find, replace);
    return res;
}


function addWord(el) {
    $("#vtt-out").append(el);
}

function scoreBoard(w, data) {
    GLOBS.score += data['score'];
    console.log("score:");
    console.log(data);
    $("#scoreTextId").html(GLOBS.score);

    // updatebar
    var box = $("#" + data['key']);
    var pct = box.pct || 0;
    console.log(pct);
    pct += data['score'];
    box.css("width", pct + "%");

}


function scanWord(w) {
    // w = w.trim();  //TODO
    var r = $("<span class='vtt1'> " + w + " </span> ");  //note the space

    for (var i=0; i< markers.length; i++) {
        data = markers[i];
        var tgtWords = data['search'];
        // console.log(data);
        // console.log(tgtWords, w);
        if (tgtWords.indexOf(w) != -1) {
            scoreBoard(w, data);
            r.addClass(data['klass']);
        }
    }
    return r;
}

function scanText(raw_text) {
    console.log(raw_text);
    var words = raw_text.split(" ");
    console.log(words);
    var out = _.map(words, scanWord);

    $("#vtt-out").empty();
    _.each(out, addWord);

    console.log(out);
}


// function updateScore(raw_text) {
//     var score = 0;
//     var j = 0;
//     var colorClass = ["greenH", "greenH", "yellowH",  "yellowH", "redH"];
//     for(var data in markers) {
//         var s = markers[data];
//         // console.log(s);
//         var search = [];
//         search = s.search;
//         for(var i = 0; i < search.length; i++) {
//             var find = search[i];
//             if (final_transcript.search(find) != -1) {
//                 if(newword(j, find)===true) {
//                     updateBar(j);
//                 }
//                 score += parseInt(s.score);
//                 // var tmpstr = '<span class='+colorClass[j]+'>'+find+'</span>';
//                 var tmpstr = "<b>" + find + "</b>";
//                 var display_transcript =  replaceAll(find, tmpstr, final_transcript);
//             }
//         }
//         j++;
//     }
//     GLOBS.score = score;
//     GLOBS.display_transcript = display_transcript;
//     var scoreText = document.getElementById("scoreTextId");
//     scoreText.innerHTML= "<h4>Score: <br/>  "+score+"</h4>";

//     console.log(display_transcript);

//     $("#vtt-out").html(display_transcript);

// }

// function newword(indx, find) {
//     for(var i = 0; i < words[indx].length; i++) {
//         if(words[indx][i].localeCompare(find) === 0) {
//             return false;
//         }
//     }
//     words[indx].push(find);
//     return true;
// }

// function updateBar(indx) {
//     var keyID = markers[indx].key;
//     var varid ="#"+ keyID;
//     if(words[indx].length < 11) {
//         var value = words[indx].length+"0%";
//     console.log("WIDTH = "+value);
//     $(varid).css("width", value);
//     }
// }


function showAllow(f) {
    for(var i=0;i<3;i++) {
        $('#showAllowHint').fadeTo('fast',0).fadeTo('fast',1).delay(i*10);
    }
    
}

function startButton(event) {
    showAllow(true);
    if (recognizing) {
        window.clearInterval(updateInterval);  // stop updating store and format

        recognition.stop();
        return;
    }
    for(var i = 0; i < markers.length; i++) {
        var varid = "#"+markers[i].key;
        $(varid).css("width", "5%");
    }

    ///THIS is where we start
    // updateInterval = setInterval(function() {updateScore()}, 1000);  // start formating and updating score

    final_transcript = '';
    recognition.lang = select_dialect.value;
    recognition.start();
    ignore_onend = false;
    // final_span.innerHTML = '';
    $("#vtt-out").html("----");
    interim_vtt.innerHTML = '';
    micImage('/img/mic-slash.gif');
    // showInfo('info_allow');
    // showButtons('none');
    start_timestamp = event.timeStamp;
}

//TODO - remove
function showInfo(s) {
    // info.style.visibility = 'visible';
}

// function showButtons(style) {
//     if (style == current_style) {
//         return;
//     }
//     current_style = style;
//     copy_button.style.display = style;
//     // email_button.style.display = style;
//     // copy_info.style.display = 'none';
//     // email_info.style.display = 'none';
// }


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

function upgrade() {
    start_button.style.visibility = 'hidden';
    showInfo('info_upgrade');
}


function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

function checkIt() {
    goResults();
}

// function capitalize(s) {
//     return s.replace(first_char, function(m) { return m.toUpperCase(); });
// }

// function createEmail() {
//     var n = final_transcript.indexOf('\n');
//     if (n < 0 || n >= 80) {
//         n = 40 + final_transcript.substring(40).indexOf(' ');
//     }
//     var subject = encodeURI(final_transcript.substring(0, n));
//     var body = encodeURI(final_transcript.substring(n + 1));
//     window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
// }

// function copyButton() {
//     if(final_transcript) {  // write to local storage
//         if(typeof(Storage) !== "undefined") {
//             console.log("write to local storage");
//             localStorage.setItem("contentText", final_transcript);
//         }
//     }
//     if (recognizing) {
//         recognizing = false;
//         window.clearInterval(updateInterval);  // stop updating store and formt
//         recognition.stop();
//     }
//     updateScore();
//     goResults(final_transcript);
// }

function goResults() {
    console.log("final_transcript:", final_transcript);
    GLOBS.blob = $("#vtt-out").html();
    //TODO - fix navigation
    // $location.path('/results');
    window.location.href = '#results';
}


// function emailButton() {
//     if (recognizing) {
//         create_email = true;
//         recognizing = false;
//         recognition.stop();
//     } else {
//         createEmail();
//     }
//     email_button.style.display = 'none';
//     email_info.style.display = 'inline-block';
    // showInfo('');
// }




var markers = [
        {
            "key": "transition",
            "search": [ 
                "for example", "in my opinion", "in my experience", "my perspective", "my point of view", "based on", "according to", "as a result", "therefore", "in conclusion", "to conclude", "one reason", "first", "second", "third", "lastly", "firstly", "one could argue", "for instance", "to illustrate", "in the text", "in addition", "additionally", "also", "i think", "i believe", "personally"
            ],
            "position": ["start"],
            "score": 10,
            "klass": "transition10"
        },

        {
            "key": "fanboys",
            "search": [
                "for", "and", "nor", "but", "or", "yet", "so", "because"
            ],
            "position": ["middle"],
            "score": 20,
            "klass": "fanboys"
        },

        {
            "key": "vocabulary",
            "search": [ "great", "wonderful", "improve", "exhausted", "sleepwalking", "slurred" ],
            "position": ["start"],
            "score": 10,
            "klass": "precision10"
        },

        {
            "key": "precision",
            "search": [
                "exactly", "precisely", "specifically", "approximately"
            ],
            "position": ["anywhere"],
            "score": 30,
            "klass": "precision30"
        },

        {
            "key": "caution",
            "search": [
                "for", "you know", "good", "umm", "just", "kind of", "err", "kinda", "sort of", "cool"
            ],
            "position": ["anywhere"],
            "score": -10,
            "klass": "caution10"
        },

        {
            "key": "caution",
            "search": [
                "thing", "like", "whatever", "sometime", "dunno", "sorta"
            ],
            "position": ["anywhere"],
            "score": -20,
            "klass": "caution20"
        },

        {
            "key": "vocabulary",
            "search": [
                  "abbreviate", "abstract", "according", "acronym", "address", "affect", "alter", "always", "analogy", "analysis", "analyze", 
                  "annotate", "anticipate", "application", "apply", "approach", "appropriate", "approximate", "argue", "argument", "arrange", 
                  "articulate", "aspects", "assemble", "assert", "assess", "associate", "assume", "assumption", "audience", "authentic", "background", 
                  "body", "brainstorm", "brief", "calculate", "caption", "category", "cause", "character", "characteristic", "characterize", "chart", "chronology", 
                  "citation", "cite", "claim", "clarify", "class", "clue", "code", "coherent", "common", "compare", "compile", "complement", "complete", "compose", "composition", "conceive", "concise", "conclude", "conclusion", "concrete", "conditions", "conduct", "confirm", "consequence", "consider", "consist", "consistent", "consistently", "constant", "constitutes", "consult", "contend", "context", 
                  "continuum", "contradict", "control", "convert", "convey", "copy", "correlate", "correspond", "credible", "credit", "criteria", "critique", "crucial", "cumulative", "debate", "deduce", "defend", "define", "demand", "demonstrate", "depict", "derive", "describe", "detail", "detect", "determine", "develop", "devise", "diction", "differentiate", "dimension", "diminish", "direct", "discipline", "discover", "discriminate", "discuss", "distinguish", "domain", "draft", "draw", "edit", "effect", "elements", "emphasize", "employ", "equal", "equivalent", "essay", "essential", "establish", "estimate", "evaluate", "event", "evidence", "exaggerate", "examine", "example", "excerpt", "exclude", "exercise", "exhibit", "explain", "explore", "expository", "extract", "fact", "factor", "feature", "figurative", "figure", "focus", "footer", "foreshadow", "form", "format", "former", "formulate", "fragment", "frame", "frequently", "general", "genre", "graph", "graphic", "header", "heading", "highlight", "hypothesize", "identify", "illustrate", "imitate", "imply", "inclined", "include", "incorporate", "indicate", "indirect", "infer", "influence", "inform", "inquire", "instructions", "integrate", "intent", "intention", "interact", "intermittent", "interpret", "introduce", "introduction", "invariably", "investigate", "involve", "irony", "irrelevant", "isolate", "italics", "judge", "key", "label", "likely", "list", "literal", "locate", "logical", "main", "margin", "mean", "measure", "metaphor", "method", "model", "modify", "monitor", "motivation", "narrative", "narrator", "never", "notation", "note", "notice", "objective", "observe", "occur", "opinion", "oppose", "optional", "order", "organize", "origins", "outline", "pace", "paraphrase", "participation", "passage", "pattern", "perform", "perspective", "persuade", "place", "plagiarism", "plan", "plausible", "plot", "point", "point of view", "portray", "possible", "preclude", "predict", "prefix", "prepare", "presume", "preview", "previous", "primary", "prior", "probably", "procedure", "process", "produce", "profile", "project", "prompt", "proofread", "property", "propose", "prose", "prove", "purpose", "quotation", "quote", "rank", "rare", "rarely", "reaction", "recall", "reduce", "refer", "reflect", "regular", "relate", "relationship", "relevant", "rephrase", "report", "represent", "representative", "request", "require", "requisite", "respond", "responsible", "restate", "results", "reveal", "review", "revise", "root", "rule", "scan", "score", "sequence", "series", "set", "setting", "show", "signal", "significance", "simile", "skim", "solve", "source", "spatial", "specific", "speculate", "stance", "standard", "state", "statement", "strategy", "structure", "study", "style", "subject", "subjective", "subsequent", "substitute", "succinct", "suggest", "sum", "summarize", "summary", "support", "survey", "symbolize", "synonym", "synthesize", "table", "technique", "term", "test", "theme", "thesis", "timeline", "tone", "topic", "trace", "trait", "transition", "translate", "typically", "unique", "utilize", "valid", "variation", "vary", "verify", "viewpoint", "voice"
                  ],
                  "position": ["anywhere"],
                  "score": 30,
                  "klass": "precision30"
        }

    ]

