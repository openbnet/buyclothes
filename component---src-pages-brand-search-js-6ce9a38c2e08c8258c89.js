(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,a,t){"use strict";t.r(a);t(82),t(75);var n=t(7),r=t.n(n),o=t(0),i=t.n(o),s=t(148),l=(t(164),function(e){return console.log(e),i.a.createElement("section",{className:"style1 search-bar"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Accepted Brands List"),i.a.createElement("input",{type:"text",placeholder:"Brand Name",onChange:e.brand})))}),c=(t(54),t(223),t(52),t(226),function(e){return i.a.createElement("div",{className:"brands-list"},i.a.createElement("h3",{className:"name"},e.item))}),u=function(e){var a,t=e,n=(new RegExp("/^d/","g"),"#"==t.group?t.items.filter(function(e){return e.match(/^\d/)}):t.items.filter(function(a){return a.startsWith(e.group)})),r=n.map(function(e,a){return i.a.createElement(c,{key:a,item:e})});return a=n.length?i.a.createElement("div",{className:"grid-wrapper"},i.a.createElement("div",{className:"col-1"},i.a.createElement("h1",null,e.group)),i.a.createElement("div",{className:"col-4"},r)):null,i.a.createElement("div",{className:"brand-group"},a)},m=function(e){var a,t=e;return a=t.items.length?i.a.createElement("div",{className:"row grid-wrapper"},i.a.createElement("div",{className:"col-6"},i.a.createElement(u,{group:"#",items:t.items}),i.a.createElement(u,{group:"A",items:t.items}),i.a.createElement(u,{group:"B",items:t.items}),i.a.createElement(u,{group:"C",items:t.items}),i.a.createElement(u,{group:"D",items:t.items}),i.a.createElement(u,{group:"E",items:t.items}),i.a.createElement(u,{group:"F",items:t.items}),i.a.createElement(u,{group:"G",items:t.items}),i.a.createElement(u,{group:"H",items:t.items}),i.a.createElement(u,{group:"I",items:t.items}),i.a.createElement(u,{group:"J",items:t.items}),i.a.createElement(u,{group:"K",items:t.items}),i.a.createElement(u,{group:"L",items:t.items})),i.a.createElement("div",{className:"col-6"},i.a.createElement(u,{group:"M",items:t.items}),i.a.createElement(u,{group:"N",items:t.items}),i.a.createElement(u,{group:"O",items:t.items}),i.a.createElement(u,{group:"P",items:t.items}),i.a.createElement(u,{group:"Q",items:t.items}),i.a.createElement(u,{group:"R",items:t.items}),i.a.createElement(u,{group:"S",items:t.items}),i.a.createElement(u,{group:"T",items:t.items}),i.a.createElement(u,{group:"U",items:t.items}),i.a.createElement(u,{group:"V",items:t.items}),i.a.createElement(u,{group:"W",items:t.items}),i.a.createElement(u,{group:"X",items:t.items}),i.a.createElement(u,{group:"Y",items:t.items}),i.a.createElement(u,{group:"Z",items:t.items}))):i.a.createElement("div",{className:"grid-wrapper no-result"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h2",null,"Sorry No Result"))),i.a.createElement("div",null,a)},d=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){return i.a.createElement("section",{id:"footer"},i.a.createElement("div",{className:"grid-wrapper"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h3",null,"Did not see brands on the list?",i.a.createElement("span",null,i.a.createElement("a",{href:"#"}," Let us know!"))))))},a}(i.a.Component),p=t(232),h=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={keyword:"",brands:p.brandNames,filtered:[]},a.getBrand=function(e){a.state.keyword=e.target.value;var t=a.state.brands.filter(function(e){return e.toLowerCase().indexOf(a.state.keyword.toLowerCase())>-1});a.setState({filtered:t})},a}return r()(a,e),a.prototype.render=function(){return i.a.createElement("div",{id:"brandsearch-page"},i.a.createElement("section",{className:"main style1 box-1"},i.a.createElement("div",{className:"grid-wrapper"},i.a.createElement("div",{className:"col-6"},i.a.createElement("p",{className:"hashtag"},"#SGFashionForGood")),i.a.createElement("div",{className:"col-6"},i.a.createElement(s.Link,{to:"index.html#contact-us",className:"contact-us-btn button"},"Contact Us!")))),i.a.createElement("section",{id:"search-bar"},i.a.createElement("div",{className:"grid-wrapper"},i.a.createElement("div",{className:"col-12"},i.a.createElement(l,{brand:this.getBrand})))),i.a.createElement("section",{className:"brand-list"},i.a.createElement(m,{items:0===this.state.filtered.length&&0===this.state.keyword.length?this.state.brands:this.state.filtered})),i.a.createElement(d,null))},a}(o.Component);a.default=h},143:function(e,a,t){"use strict";var n=t(33);a.__esModule=!0,a.withPrefix=p,a.navigateTo=a.replace=a.push=a.navigate=a.default=void 0;var r=n(t(150)),o=n(t(151)),i=n(t(7)),s=n(t(49)),l=n(t(50)),c=n(t(4)),u=n(t(0)),m=t(15),d=t(148);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},f=function(e){function a(a){var t;t=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(t)),"defaultGetProps",function(e){return e.isCurrent?{className:[t.props.className,t.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},t.props.style,t.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),t.state={IOSupported:n},t.handleRef=t.handleRef.bind((0,s.default)((0,s.default)(t))),t}(0,i.default)(a,e);var t=a.prototype;return t.componentDidUpdate=function(e,a){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},t.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},t.handleRef=function(e){var a,t,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(a=e,t=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(a),n.disconnect(),t())})})).observe(a))},t.render=function(){var e=this,a=this.props,t=a.to,n=a.getProps,i=void 0===n?this.defaultGetProps:n,s=a.onClick,l=a.onMouseEnter,c=(a.activeClassName,a.activeStyle,a.ref,a.innerRef,a.state),h=a.replace,f=(0,r.default)(a,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(t);return u.default.createElement(m.Link,(0,o.default)({to:g,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,d.parsePath)(t).pathname)},onClick:function(a){return s&&s(a),0!==a.button||e.props.target||a.defaultPrevented||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||(a.preventDefault(),y(t,{state:c,replace:h})),!0}},f))},a}(u.default.Component);f.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=f;a.default=g;var y=function(e,a){window.___navigate(p(e),a)};a.navigate=y;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};a.push=v;a.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};a.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},150:function(e,a){e.exports=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}},151:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}e.exports=t},223:function(e,a,t){"use strict";var n=t(6),r=t(28),o=t(224),i="".startsWith;n(n.P+n.F*t(225)("startsWith"),"String",{startsWith:function(e){var a=o(this,e,"startsWith"),t=r(Math.min(arguments.length>1?arguments[1]:void 0,a.length)),n=String(e);return i?i.call(a,n,t):a.slice(t,t+n.length)===n}})},224:function(e,a,t){var n=t(76),r=t(27);e.exports=function(e,a,t){if(n(a))throw TypeError("String#"+t+" doesn't accept regex!");return String(r(e))}},225:function(e,a,t){var n=t(3)("match");e.exports=function(e){var a=/./;try{"/./"[e](a)}catch(t){try{return a[n]=!1,!"/./"[e](a)}catch(e){}}return!0}},226:function(e,a,t){var n=t(5),r=t(227),o=t(25).f,i=t(230).f,s=t(76),l=t(231),c=n.RegExp,u=c,m=c.prototype,d=/a/g,p=/a/g,h=new c(d)!==d;if(t(16)&&(!h||t(17)(function(){return p[t(3)("match")]=!1,c(d)!=d||c(p)==p||"/a/i"!=c(d,"i")}))){c=function(e,a){var t=this instanceof c,n=s(e),o=void 0===a;return!t&&n&&e.constructor===c&&o?e:r(h?new u(n&&!o?e.source:e,a):u((n=e instanceof c)?e.source:e,n&&o?l.call(e):a),t?this:m,c)};for(var f=function(e){e in c||o(c,e,{configurable:!0,get:function(){return u[e]},set:function(a){u[e]=a}})},g=i(u),y=0;g.length>y;)f(g[y++]);m.constructor=c,c.prototype=m,t(18)(n,"RegExp",c)}t(81)("RegExp")},227:function(e,a,t){var n=t(11),r=t(228).set;e.exports=function(e,a,t){var o,i=a.constructor;return i!==t&&"function"==typeof i&&(o=i.prototype)!==t.prototype&&n(o)&&r&&r(e,o),e}},228:function(e,a,t){var n=t(11),r=t(10),o=function(e,a){if(r(e),!n(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,a,n){try{(n=t(19)(Function.call,t(229).f(Object.prototype,"__proto__").set,2))(e,[]),a=!(e instanceof Array)}catch(e){a=!0}return function(e,t){return o(e,t),a?e.__proto__=t:n(e,t),e}}({},!1):void 0),check:o}},229:function(e,a,t){var n=t(80),r=t(51),o=t(35),i=t(78),s=t(26),l=t(77),c=Object.getOwnPropertyDescriptor;a.f=t(16)?c:function(e,a){if(e=o(e),a=i(a,!0),l)try{return c(e,a)}catch(e){}if(s(e,a))return r(!n.f.call(e,a),e[a])}},230:function(e,a,t){var n=t(79),r=t(53).concat("length","prototype");a.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},231:function(e,a,t){"use strict";var n=t(10);e.exports=function(){var e=n(this),a="";return e.global&&(a+="g"),e.ignoreCase&&(a+="i"),e.multiline&&(a+="m"),e.unicode&&(a+="u"),e.sticky&&(a+="y"),a}},232:function(e){e.exports={brandNames:["3.1 Phillip Lim","360Cashmere","3x1","69","7 For All Mankind","A Détacher","A.L.C.","A.P.C.","About Arianne","Ace & Jig","Acne Studios","Adam Selman","Add","Adeam","Adidas Originals by Alexander Wang","adidas Y-3","Adrienne Landau","AG Adriano Goldschmied","Akris","Akris Punto","Alaïa","Alexa Chung","ALEXANDER McQUEEN","McQ Alexander McQueen","ALEXANDER WANG","T BY ALEXANDER WANG","Alexandre Birman","Alexandre Vauthier","Alexis","Alice + Olivia","alice McCALL","Allen Edmonds","AllSaints","Altuzarra","Ancient Greek Sandals","Anine Bing","Ann Demeulemeester","Anthony Vaccarello","Anti Social Social Club","Anya Hindmarch","Apiece Apart","Aquatalia","Aquazzura","ATP Atelier","Attico","Autumn Cashmere","Balenciaga","Balmain","Pierre Balmain","BAPE","Barbour","Barton Perreira","Bec & Bridge","Belstaff","Billionaire Boys Club","Bionda Castana","Black Crane","BLK DNM","BOSS Hugo Boss","HUGO Hugo Boss","Bottega Veneta","Boutique Moschino","Brian Atwood","Brock Collection","Brother Vellies","Brunello Cucinelli","Building Block","Burberry","Burberry Brit","Burberry London","Burberry Prorsum","Buscemi","By Far","By Malene Birger","Calvin Klein 205W39NYC","Calvin Klein Collection","Canada Goose","Carolina Herrera","Caroline Constas","Caron Callahan","Carven","CASTAÑER","Cedric Charlier","CÉLINE","CHANEL","Charlotte Olympia","Chloé","See by Chloé","Christian Louboutin","Christopher Kane","Cinq à Sept","Citizens of Humanity","Clare V.","Clover Canyon","Clyde","Collina Strada","Comme des Garçons","PLAY Comme des Garçons","Common Projects","Courrèges","Creatures of Comfort","Creatures of The Wind","Cult Gaia","Current Elliott","Cushnie et Ochs","Cutler and Gross","Del Toro","Delpozo","Derek Lam","Derek Lam 10 Crosby","Diane von Furstenberg","Dion Lee","Dior","Dior Homme","Dita","DÔEN","Dolce & Gabbana","Dorateymur","Dover Street Market","Draper James","Dries Van Noten","Dsquared2","Eckhaus Latta","Edie Parker","EDUN","Eileen Fisher","Elizabeth and James","Ellery","Emilio Pucci","Engineered Garments","Equipment","Erdem","Ermenegildo Zegna","Eskandar","Etro","F.R.S. For Restless Sleepers","Faithfull the Brand","Fausto Puglisi","Fear of God","Feit","Fendi","Fenty Puma by Rihanna","Filson","Fiorentini + Baker","For Love & Lemons","FRAME","Frye","Gabriela Hearst","Ganni","Gentle Monster","Giambattista Valli","Giamba","Gianvito Rossi","Giorgio Armani","Armani Collezioni","Emporio Armani","Giuseppe Zanotti","GIVENCHY","Golden Goose","Gosha Rubchinskiy","Goyard","Gray Matters","GRLFRND","GUCCI","HATCH","Haute Hippie","Hellessy","Helmut Lang","HELMUT Helmut Lang","Henrik Vibskov","Hermès","Herve Leger","HUNTER","HVN","Ilana Kohn","Illesteva","Incotex","Intentionally Blank","INTERMIX","IRO","Isabel Marant","Étoile Isabel Marant","Isabella Oliver","Issa","Issey Miyake","Pleats Please","Ivan Grundahl","J Brand","J. Mendel","J.W. Anderson","Jacquemus","Jason Wu","Jean Paul Gaultier","Jenni Kayne","Jérôme Dreyfuss","Jesse Kamm","Jil Sander","Jimmy Choo","Johanna Ortiz","John Varvatos","Joie","Jonathan Simkhai","JOSEPH","Joshua Sanders","Judith Leiber","Junya Watanabe","Kara","Karen Walker","Kate Spade","KENZO","Khaite","Kris Van Assche","Ksubi","L'Agence","L.K. Bennett","Lacausa","Lanvin","Lauren Manoogian","Lela Rose","Lemaire","Lemlem","Linda Farrow","Loeffler Randall","Loewe","LOQ","Loro Piana","Louis Vuitton","LPA","M.i.H. Jeans","M2Malletier","Mackage","Magda Butrym","Maison Martin Margiela","MM6 Maison Martin Margiela","Maiyet","Maje","Malia Mills","Manolo Blahnik","Mansur Gavriel","Mara Hoffman","Marc Jacobs","Marc by Marc Jacobs","Marchesa","Mari Giudicelli","Marissa Webb","Markus Lupfer","Marni","Martiniano","Mary Katrantzou","Mary Katrantzou x adidas Originals","Maryam Nassir Zadeh","MaxMara","MCM","Michael Kors Collection","Miista","Milly","Missoni","M Missoni","Miu Miu","Moncler","Moncler Gamme Bleu","Moncler Gamme Rouge","Moncler Grenoble","Monique Lhuillier","Monse","Moschino","Love Moschino","Moschino Cheap & Chic","Moschino Couture","Moscot","Mother","Mother of Pearl","Mr & Mrs Italy","MSGM","Mulberry","Mykita","Nancy Gonzalez","Nancy Stella Soto","Nanushka","Narciso Rodriguez","Nicholas","Nicholas Kirkwood","Nicole Saldana","Nili Lotan","Nina RicciOAMC","No. 6","Norse Projects","Nour Hammour","NSF","N°21","OAMC","Off-White","OHNE TITEL","Oliver Peoples","Olympia Le-Tan","Opening Ceremony","Organic by John Patrick","Orseund Iris","Oscar de la Renta","Osman","Outdoor Voices","PAIGE","Palace Skateboards","Parker","Patagonia","Paul Andrew","Paula Cademartori","Pedro Garcia","Persol","Peter Pilotto","Petersyn","Pierre Hardy","Prabal Gurung","Prada","Prada Sport","Preen by Thornton Bregazzi","Proenza Schouler","Public School","R13","Rachel Antonoff","Rachel Comey","Rachel Craven","Rachel Zoe","Raf Simons","adidas by Raf Simons","rag & bone","Rails","Ralph Lauren Collection","Ralph Lauren Black Label","Ralph Lauren Purple Label","Raquel Allegra","Ray-Ban","RE/DONE","Realisation Par","Rebecca Minkoff","Rebecca Taylor","Reformation","Reiss","Rejina Pyo","Repetto","Retrosuperfuture","Rick Owens","Rick Owens DRKSHDW","Rick Owens Lilies","Rixo London","Robert Clergerie","Roberto Cavalli","Roger Vivier","Roksanda","Roland Mouret","Ronny Kobo","Torn by Ronny Kobo","Rosetta Getty","Rosie Assoulin","Ryan Roche","Sacai","Sacai Luck","Saint Laurent","Yves Saint Laurent","Sally Lapointe","Saloni","Salvatore Ferragamo","Samuji","Sandro","Sandy Liang","Sarah Flint","Sea NY","Self-Portrait","Séraphine","Shaina Mote","Shrimps","Simon Miller","Simone Rocha","SJP by Sarah Jessica Parker","Solace London","Sonia Rykiel","Sophia Webster","Sophie Hulme","St. Agni","St. John","Staud","Stella McCartney","adidas by Stella McCartney","Steven Alan","Stone Cold Fox","Stuart Weitzman","SUNO","Supreme","Tabitha Simmons","Tamara Mellon","Ted Baker","Thakoon","Thakoon Addition","The Kooples","The Row","Theory","Theyskens' Theory","Thierry Lasry","Thom Browne","Tibi","TOD'S","TOM FORD","Tomas Maier","Tome","Tory Burch","Trademark","Trina Turk","Tucker","Tularosa","Tumi","Ulla Johnson","Undercover","Valentino","RED Valentino","Vanessa Seward","VEDA","Veronica Beard","Versace","Vetements","Victoria Beckham","Vilshenko","Vince","Vionnet","Visvim","Vivetta","Vivienne Westwood","Vivienne Westwood Anglomania","Woman by Common Projects","Y/Project","Yohji Yamamoto","Yuul Yie","Yves Salomon","Army by Yves Salomon","Zac Posen","Zac Zac Posen","Zadig & Voltaire","Zero + Maria Cornejo","Zimmermann"]}}}]);
//# sourceMappingURL=component---src-pages-brand-search-js-6ce9a38c2e08c8258c89.js.map