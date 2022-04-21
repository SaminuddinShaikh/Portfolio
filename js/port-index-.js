var cards = [{
    "projectlogo": "img/netflix-icon.png",
    "projectlink": "https://github.com/SaminuddinShaikh/NetflixClone.github.io.git  ",
    "githublogo": "img/git-caard-logo.png",
    "githublink": "https://github.com/SaminuddinShaikh",
    "protitle": "Netflix clone",
    "titlelink": "https://saminuddinshaikh.github.io/NetflixClone.github.io",
    "prodis": "Made a clone of netflix website which is responsive in all display sizes"
},
{
    "projectlogo": "img/apple-logo-black.png",
    "projectlink": "https://github.com/SaminuddinShaikh/appleWebsiteClone.github.io.git",
    "githublogo": "img/git-caard-logo.png",
    "githublink": "https://github.com/SaminuddinShaikh",
    "protitle": "Apple website",
    "titlelink": "https://saminuddinshaikh.github.io/appleWebsiteClone.github.io",
    "prodis": "Made a clone of  website apple which is responsive in all display sizes"
},
{
    "projectlogo": "img/byetcode-logo.png",
    "projectlink": "#",
    "githublogo": "img/git-caard-logo.png",
    "githublink": "#",
    "protitle": "Byetcode",
    "titlelink": "#",
    "prodis": "Making a clone of netflix website which is responsive in a;; display sizes"
},
{
    "projectlogo": "img/fi-logo.png",
    "projectlink": "#",
    "githublogo": "img/git-caard-logo.png",
    "githublink": "#",
    "protitle": "F1 2021 standings",
    "titlelink": "#",
    "prodis": "Making a clone of netflix website which is responsive in a;; display sizes"
},
{
    "projectlogo": "img/netflix-icon.png",
    "projectlink": "#",
    "githublogo": "img/git-caard-logo.png",
    "githublink": "#",
    "protitle": "Netflix clone",
    "titlelink": "#",
    "prodis": "Making a clone of netflix website which is responsive in a;; display sizes"
}
];

var cardscroll = document.querySelector('.card-scrol');

for (i = 0; i < cards.length; i++) {
    var cardjasan = createprojectcard(cards[i].projectlogo, cards[i].projectlink, cards[i].githublogo, cards[i].githublink, cards[i].protitle, cards[i].titlelink, cards[i].prodis);
    cardscroll.appendChild(cardjasan);
}

function createprojectcard(pi, pl, gi, gl, t, tl, d) {

    var projecticon = document.createElement('img');
    projecticon.classList.add('project-icon');
    projecticon.src = pi;

    var projectLinkico = document.createElement('a');
    projectLinkico.href = pl;
    projectLinkico.appendChild(projecticon);


    var githubicon = document.createElement('img');
    githubicon.classList.add('github-icon');
    githubicon.src = gi;

    var gitlinkico = document.createElement('a');
    gitlinkico.href = gl;
    gitlinkico.appendChild(githubicon);

    var projectheadderDiv = document.createElement('div');
    projectheadderDiv.classList.add('projcet-header');

    projectheadderDiv.appendChild(projectLinkico);
    projectheadderDiv.appendChild(gitlinkico);

    var titleh6 = document.createElement('h6');
    titleh6.classList.add('pro-title-font');
    titleh6.innerText = t;

    var titlelink = document.createElement('a');
    titlelink.classList.add('link-style');
    titlelink.appendChild(titleh6);
    titlelink.href = tl;

    var projecttitleDiv = document.createElement('div');
    projecttitleDiv.classList.add('project-title');
    projecttitleDiv.appendChild(titlelink);

    var disp = document.createElement('p');
    disp.innerText = d;

    var projectdisDiv = document.createElement('div');
    projectdisDiv.classList.add('project-discription');
    projectdisDiv.appendChild(disp);

    var projectcardDiv = document.createElement('div');
    projectcardDiv.classList.add('project-card');


    projectcardDiv.appendChild(projectheadderDiv);
    projectcardDiv.appendChild(projecttitleDiv);
    projectcardDiv.appendChild(projectdisDiv);

    return projectcardDiv;
}