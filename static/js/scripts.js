var mainTemp = ""
var handTemp = ""
var obj = {}
var textTranslations = {
    "gun-transport": [
        "A person intending to transport firearms, gas weapons or ammunition is obliged to inform the carrier's representative at the airport of departure about this fact in order to declare this fact. A passenger carrying a firearm and / or ammunition is asked to go to a special room in order to check the firearm and the documents in it (a firearms license, and in international traffic - also a consent for its export issued by a Police authority or a certificate issued by the Polish Consul and the European Charter Weapons ).It should be noted that the firearms transported by air should be unloaded and secured, and the ammunition should be packed in such a way that it cannot hit the cartridge primer. Firearms, gas guns or ammunition shall be placed in checked baggage or suitable as checked baggage, which is transported on board an aircraft under the constant supervision of the Border Guard.",
        "Osoba zamierzająca przewieźć broń palną, broń gazową lub amunicję jest obowiązana o tym fakcie poinformować przedstawiciela przewoźnika na lotnisku wylotu w celu zadeklarowania tego faktu. Pasażer przewożący broń palną i/lub amunicję poproszony jest o przejście do specjalnego pomieszczenia, celem sprawdzenia broni oraz posiadanych dokumentów (pozwolenie na broń, a w ruchu międzynarodowym – również zgodę na jej wywóz wydaną przez organ Policji lub zaświadczenie wydane przez Konsula RP oraz „Europejską Kartę Broni”). Należy zaznaczyć, że broń przewożona drogą lotniczą powinna być rozładowana i zabezpieczona, a amunicja zapakowana w sposób uniemożliwiający uderzenie w spłonkę naboju. Broń palną, broń gazową lub amunicję umieszcza się w bagażu rejestrowanym lub nadaje się jako bagaż rejestrowany, który jest transportowany na pokład statku powietrznego pod stałym nadzorem Straży Granicznej. "
    ],
    "security-control": [
        "Luggage is subject to restrictions in terms of weight, size and content. The carrier has the right to set its own restrictions regarding, for example, the number or size of the luggage. Not all items can be shipped by air. Some of them must only be carried in main baggage, as they cannot be carried on board the aircraft in hand baggage. The list of permitted items and items prohibited for transport by air can be found on this website. During the security check of hand luggage, prohibited items are removed to special containers. If there are doubts as to whether a given item can be taken with us, it is better to leave it at home or in main luggage. All passengers undergo security screening at the airport in order to ensure an adequate level of security and safety in air transport. It consists of preventing from bringing on board the plane dangerous items that may pose a threat to air traffic.",
        "Bagaż podlega ograniczeniom, zarówno jeśli chodzi o wagę, rozmiar, jak i zawartość. Przewoźnik ma prawo do ustalenia własnych ograniczeń dotyczących np. liczby lub wielkości przewożonego bagażu. Nie wszystkie przedmioty mogą być transportowane drogą lotniczą. Niektóre z nich należy przewozić tylko w bagażu rejestrowanym, gdyż nie można ich wnieść na pokład samolotu w bagażu podręcznym. Lista przedmiotów dozwolonych oraz przedmiotów zabronionych do transportu drogą lotniczą, znajduje się w naszej wyszukiwarce. W trakcie kontroli bezpieczeństwa bagażu podręcznego, przedmioty zabronione są usuwane do specjalnych pojemników. Jeśli zachodzą wątpliwości czy dany przedmiot możemy zabrać ze sobą, lepiej pozostawić go w domu lub nadać w bagażu rejestrowanym. Kontroli bezpieczeństwa na lotnisku poddawani są wszyscy pasażerowie w celu zapewnienia odpowiedniego poziomu ochrony i bezpieczeństwa w transporcie lotniczym. Polega ona na niedopuszczeniu do wniesienia na pokład samolotu przedmiotów niebezpiecznych, mogących stanowić zagrożenie w ruchu lotniczym. Pasażer jest dopuszczany do kontroli bezpieczeństwa po okazaniu karty pokładowej, czyli tzw. boarding`u, a czasami również, w zależności od wymogów firm dokonujących tej kontroli, dokumentu tożsamości: dowodu osobistego lub paszportu. "
    ],
    "unattended-luggage": [
        "Remember to not leave your luggage unattended. Any luggage without visible supervision is treated by airport services as a potential threat, which is associated with the initiation of appropriate security procedures, such as evacuation of the port and the need to recognize the luggage by pyrotechnic specialists. These procedures are time consuming and can even result in flight delays. Packages and luggage of unknown contents should not be taken from strangers. Requests to 'carry something' should be denied. If you encounter a suspicious proposal, notify the airport services immediately. If you notice luggage or any other item / package unattended, immediately notify the appropriate services responsible for ensuring safety and public order at the airport. There is a 500 PLN fine for leaving the luggage unattended.",
        "Należy pamiętać, aby nigdy nie pozostawiać bagażu bez opieki. Każdy bagaż bez widocznego nadzoru, traktowany jest przez służby lotniskowe jako potencjalne zagrożenie, co wiąże się ze wszczęciem odpowiednich procedur bezpieczeństwa, takich jak ewakuacja portu i konieczność rozpoznania bagażu przez specjalistów pirotechników. Procedury te są czasochłonne i mogą mieć wpływ nawet na opóźnienia lotów. Nie należy brać od nieznajomych osób pakunków i bagażu o nieznanej zawartości. Należy odmawiać prośbom o „przewiezienie czegoś”. W przypadku spotkania się z podejrzaną propozycją, należy natychmiast powiadomić służby lotniskowe. W przypadku zauważenia bagażu lub innego przedmiotu/pakunku bez opieki natychmiast powiadomić właściwe służby odpowiedzialne za zapewnienie bezpieczeństwa i porządku publicznego na lotnisku. Pozostawienie bagażu bez opieki jest karane mandatem karnym do 500 zł. "
    ],
}
var headerTranslation = [
    ["Search Bar", "Wyszukiwarka"],
    ["Security Control", "Kontrola bezpieczeństwa"],
    ["Unattended Luggage", "Bagaż bez opieki"],
    ["Gun Transport", "Przewóz broni"]
]
var language = "pl"
$(document).ready(function () {
    $("#mainBody").addClass("blur")
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 0, function () {
                window.location.hash = hash;
            });
        }
    });
    $.ajax({
        url: "https://packyourbag.pl/getItemData",
        type: "POST",
        success: function (data) {
            obj = JSON.parse(data)
            areItemsReady = true
            $("#search")
                .autocomplete({
                    source: Object.keys(obj)
                })
                .on("focus", function () {
                    mainTemp = $("#mainCheck").attr("src")
                    handTemp = $("#handCheck").attr("src")
                    $("#mainCheck").attr("src", "https://thumbs.gfycat.com/FaintSpicyAnnashummingbird-small.gif")
                    $("#handCheck").attr("src", "https://thumbs.gfycat.com/FaintSpicyAnnashummingbird-small.gif")
                })
                .on("keydown", function (e) {
                    if (e.keyCode == 8 || e.keyCode == 46) {
                        mainTemp = $("#mainCheck").attr("src")
                        handTemp = $("#handCheck").attr("src")
                        $("#mainCheck").attr("src", "https://thumbs.gfycat.com/FaintSpicyAnnashummingbird-small.gif")
                        $("#handCheck").attr("src", "https://thumbs.gfycat.com/FaintSpicyAnnashummingbird-small.gif")
                    }
                })
                .on("blur", function () {
                    $("#mainCheck").attr("src", mainTemp)
                    $("#handCheck").attr("src", handTemp)
                })
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });
    var textAppearing
    $(".warning").on("mouseover", function () {
        $(this).removeClass("warningBackSlideAnim")
        $(this).addClass("warningSlideAnim")
        $(this).css("background-image", "none")
        textAppearing = setTimeout(() => {
            $(this).text("Wykaz ma charakter wyłącznie informacyjny i jego przeznaczeniem jest ułatwienie pasażerom odbycia podróży. Prosimy pamiętać, że operator kontroli dokonuje decyzji o dopuszczeniu przedmiotu na pokład i pasażer ponosi odpowiedzialność za swoje mienie.")
        }, 1000)
    })
    $(".warning").on("mouseout", function () {
        $(this).removeClass("warningSlideAnim")
        $(this).addClass("warningBackSlideAnim")
        clearInterval(textAppearing)
        $(this).empty()
        $(this).css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/OOjs_UI_icon_info.svg/1200px-OOjs_UI_icon_info.svg.png)")

    })
    $("#overlayButton").click(()=>{
        $("#overlay").addClass("overlayDisappear")
        setTimeout(()=>{
            $("#mainBody").removeClass("blur")
            $("#overlay").css("display","none")
        },500)
    })

})
function getImageExtension(name) {
    return $.ajax({
        url: "https://packyourbag.pl/images",
        type: "POST",
        data: {
            "image": name
        },
        success: function (data) {
            return JSON.parse(data)
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });
}
var wasInSearch = false
var searchedValue = ""
var linkToAccepted = "/gfx/ok.png"
var linkNotAccepted = "/gfx/x.png"
var linkConditionally = "/gfx/warning.png"
var areItemsReady = false
var firstSearch = true

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault()
        sendEnteredPhrase()
    }
}
function changeToEng() {
    language = "eng"
    $.ajax({
        url: "/eng",
        type: "POST",
        success: function (data) {
            obj = JSON.parse(data)
            areItemsReady = true
            $("#search")
                .autocomplete({
                    source: Object.keys(obj)
                })
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });
    $("input").attr("placeholder", "What do you want to put in your luggage?")
    $(".warning").off("mouseover")
    $(".warning").on("mouseover", function () {
        $(this).removeClass("warningBackSlideAnim")
        $(this).addClass("warningSlideAnim")
        $(this).css("background-image", "none")
        textAppearing = setTimeout(() => {
            $(this).text("The list is for information only and is intended to assist passengers in their travel. Please note that the inspection operator decides to allow the item on board and the passenger is responsible for their property.")
        }, 1000)
    })
    $("#mainPrompt").text("Main Luggage")
    $("#handPrompt").text("Hand Luggage")
    $("#unattended-luggage-text").text(textTranslations["unattended-luggage"][0])
    $("#gun-transport-text").text(textTranslations["gun-transport"][0])
    $("#security-control-text").text(textTranslations["security-control"][0])
    for (let i = 0; i < 4; i++) {
        $(".headerElem")[i].text = headerTranslation[i][0]
        if (i != 0) $(".articleHeader")[i - 1].innerText = headerTranslation[i][0]
    }
}
changeToPl = () => {
    $.ajax({
        url: "/getItemData",
        type: "POST",
        success: function (data) {
            obj = JSON.parse(data)
            areItemsReady = true
            $("#search")
                .autocomplete({
                    source: Object.keys(obj)
                })
        },
        error: function (xhr, status, error) {
            console.log(xhr);
        },
    });
    $("input").attr("placeholder", "Co chcesz umieścić w swoim bagażu?")
    $(".warning").off("mouseover")
    $(".warning").on("mouseover", function () {
        $(this).removeClass("warningBackSlideAnim")
        $(this).addClass("warningSlideAnim")
        $(this).css("background-image", "none")
        textAppearing = setTimeout(() => {
            $(this).text("Wykaz ma charakter wyłącznie informacyjny i jego przeznaczeniem jest ułatwienie pasażerom odbycia podróży. Prosimy pamiętać, że operator kontroli dokonuje decyzji o dopuszczeniu przedmiotu na pokład i pasażer ponosi odpowiedzialność za swoje mienie.")
        }, 1000)
    })
    $("#mainPrompt").text("Bagaż Główny")
    $("#handPrompt").text("Bagaż Podręczny")
    $("#unattended-luggage-text").text(textTranslations["unattended-luggage"][1])
    $("#gun-transport-text").text(textTranslations["gun-transport"][1])
    $("#security-control-text").text(textTranslations["security-control"][1])
    for (let i = 0; i < 4; i++) {
        $(".headerElem")[i].text = headerTranslation[i][1]
        if (i != 0) $(".articleHeader")[i - 1].innerText = headerTranslation[i][1]
    }
}
async function sendEnteredPhrase() {
    var enteredPhrase = document.getElementById("search").value
    var imageExtension = await getImageExtension(enteredPhrase)
    imageExtension = JSON.parse(imageExtension).extension
    if (areItemsReady) {
        
        if (firstSearch) {
            checkIfBanned(enteredPhrase)
            if(imageExtension!="none"){$("#luggageImage").attr("src","gfx/itemImages/" + enteredPhrase + "." + imageExtension)
            $("#luggageImage").addClass("luggageAppearAnim")}
        }
        else {
            $("#main").addClass("colorChangeAnim")
            $("#hand").addClass("colorChangeAnim")
            setTimeout(() => {
                checkIfBanned(enteredPhrase)
                if(imageExtension!="none"){
                    $("#luggageImage").attr("src","gfx/itemImages/" + enteredPhrase + "." + imageExtension)
                $("#luggageImage").addClass("luggageAppearAnim")
                }
                
            }, 500)
            setTimeout(() => {
                $("#main").removeClass("colorChangeAnim").removeClass("luggageAppearAnim")
                $("#hand").removeClass("colorChangeAnim").removeClass("luggageAppearAnim")
            }, 1000)

        }
    }
    else {
        alert("pliki nie gotowe")
    }
}
function checkIfBanned(enteredPhrase) {
    for (key in obj) {
        if (enteredPhrase.toLowerCase() == key.toLowerCase()) {
            wasInSearch = true

            if (obj[key].glowny) {
                changePrompt("main", "accepted")
            }
            else {
                changePrompt("main", "rejected")
            }
            if (obj[key].podreczny && obj[key].conditionally) {
                changePrompt("hand", "conditionally")
            }
            else if (obj[key].podreczny) {
                changePrompt("hand", "accepted")
            }
            else {
                changePrompt("hand", "rejected")
            }
        }
    }
    if (wasInSearch) {
        if (firstSearch) {
            $(".warning").addClass('fadeOutAnim')
            $("#navbar").addClass('topNavbar')
            setTimeout(() => {
                $("#luggage").css('display', 'flex')
                $("#main").addClass("luggageAppearAnim")
                $("#hand").addClass("luggageAppearAnim")
                $(".warning").css("display", "none")
            }, 1000)
            firstSearch = false
        }
    }
    else {
        alert("Brak w bazie")
    }
    wasInSearch = false
}
function changePrompt(type, decision) {
    if (decision == "accepted") {
        document.getElementById(type).style.backgroundColor = "rgba(0,255,0,0.7)"
        document.getElementById(type + "Check").setAttribute("src", linkToAccepted)
        if (type == "hand") {
            handTemp = linkToAccepted
        }
        else {
            mainTemp = linkToAccepted
        }
        document.getElementById("handInfo").innerText = ""
    }
    else if (decision == "conditionally") {
        document.getElementById(type).style.backgroundColor = "rgba(255,255,0,0.7)"
        document.getElementById(type + "Check").setAttribute("src", linkConditionally)
        if (type == "hand") {
            handTemp = linkConditionally
        }
        else {
            mainTemp = linkConditionally
        }
        if (language == "eng") $("#handInfo").text("Allowed only in 100ml containers")
        else $("#handInfo").text("Tylko w pojemnikach do 100ml")
        $("#mainInfo").text("Tylko w pojemnikach do 100ml")

    }
    else {
        document.getElementById(type).style.backgroundColor = "rgba(255,0,0,0.7)"
        document.getElementById(type + "Check").setAttribute("src", linkNotAccepted)
        if (type == "hand") {
            handTemp = linkNotAccepted
        }
        else {
            mainTemp = linkNotAccepted
        }
        document.getElementById("handInfo").innerText = ""
    }
}

