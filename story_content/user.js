window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        return false;
    }
}, true);
}

window.Script2 = function()
{
  const player = GetPlayer();

const data = "Tangea is a thriving continent dominated by four different landscapes with very different economic drivers.   Marhav has the biggest population, with an industrialised economy and a busy seaport where the bulk of trade takes place.   Towering above Marhav are the mountains that characterise the highlands of Serrania, a beautiful and inspiring state where the source of the River Elven is also located.  Serrania uses its ample water and lofty hills to generate power and for tourism, but it is the least populous state. The River Elven wends its way through the mountains into Lembah, a rich fertile valley state that contains much of Tangeas agricultural production.  However,  the geology of the area also means that it generates significant revenue from mining operations, with a focus on lithium, zinc and copper.   This verdant land is stark contrast to Orken,  a desert ecosystem renowned for its diverse flora and fauna. But the main driver of Orkens ecosystem is its scientific research centred around the city of Andeo, where industry, education and research come together to drive innovation, especially in the area of biotechnology. Marhav is a populous and industrialized state with a focus on engineering and manufacturing. The capital of Marhav is Marhaven, where most of the population is located.  Marhavs total population is around 44 million people, with 80% located in and around Marhaven. Marhaven is built around a very busy seaport.  Marhaven is strategically positioned along two international shipping routes. Marhavens port is also the host for an active fishing fleet. Marhavs fish market is seen as a provider of high quality fresh fish and seafood to international markets and is highly sought after. Orken comprises a large arid desert environment, although the main city, Andeo, sits within the Tangenian Floristic Domain, a diverse ecosystem that contains some unique flora and fauna.   Andeo has grown rapidly over the past 20 years and is now home to around 6 million people, the lions share of Orkens total population of 8 million. Orken is known as the Education State. It has established itself as an international Center of Excellence for learning and research, with a particular focus on science, especially biotechnology.   Further, tax advantageous terms have attracted some of the biggest pharmaceutical and technology giants to Andeo.    Reflecting both the Citys position at the nexus of biotechnology and industry and the theme of its beautiful architecture and landscaping, Andeos nickname is Metatrons  Cube. Serrania is the highland region of Tangea.   Fringed by mountains on both sides, Serrania has a relatively low population of around 5 million people.  It is renowned for the beauty of its landscape, with lakes and rivers winding through the highveldt.  Serrania supplies water to Marhav from its extensive supplies. In addition, it successfully generates around 35% portion of Tangeas power needs through two hydropower plants, one utilising impoundment and one using a diversion scheme.  Lembah is known as the Garden of Tangea.  This fertile valley provides for a rich source of food production, as well as homes for approximately 10 million people. Lembah is dominated by the seasonal flooding of the Elven, the large river that bisects the State.  Tangea comprises four states. Tangea operates as a confederation of the four states.   It is governed by a Federal Council comprised of 8 Federal Councillors, who operate as a council of equals.  The Federal Council is comprised of:  (need pictures for the people below) Four state heads (Secretaries of State), one for each state Four ministers with responsibility for a portfolio:Minister for Finance and Industry Minister for Health and Agriculture Minister for Defence and Security Minister for Science and Education Secretaries of State are elected at state level.Ministers are elected at federal level, with all Tangeans voting.  For international relations,  Tangea is represented by a Prime Councillor. This title is passed between the states on a defined rotational schedule every three years.   The Prime Councillor is currently held by the Secretary of State for Orken, but is due to pass to Serrania in 6 months. In addition, Tangea is a direct democracy, so in additional to electing government representatives, Tangeans also have the opportunity to vote on specific issues. Lembah is a thriving state with two main economic drivers – agriculture and mining.   Agriculture is the biggest employer, with both arable and pastoral agricultural activity generating high quality food production for both domestic consumption and some international exports. Mining is also a major contributor to the Tangean economy. Our white gold (or lithium) deposits alongside mining of zinc and copper enable us to address rising global demand.   It can be difficult to balance these two industries, which are in close proximity with each other, where interests arent always aligned. Falling productivity in our agricultural sector here in Lembah is a concern amongst the population, with some suggesting that chemical and metal run off from mining may be contributing to this decline.   I am doing all I can to make sure that BOTH industries are successful and sustainable and good for EVERYONE in Lembah. Simply put, Serrania is one of the most beautiful places in the world – and its my responsibility to keep it that way.   I am focused on retaining Serranias ecological balance and preserving the inspiring landscape of mountains, lakes and distant sea. Serrania will be assuming the Prime Councillor role in six months. That will provide a platform for promoting Serrania to the world, with the aim of boosting tourism and sharing more of the spectacular vistas that Serrania has to offer.  Serrania isnt as strong financially as the other states, so a stronger tourism industry can provide welcome incremental revenue.  I know there is some interest in surveying the western range of the Tangean mountains for possible mineral deposits – but given the problems that mining has caused for Lembah, both with water and soil  I think the risks are too high. Marhavs economy is booming, driven by both the demands our growing population and international demand for our exports, including the excellent fish and seafood from our fishing fleet.  We are investing in enhancing our infrastructure to support population growth, which we expect to continue.  An increasing population is important to support growth in our economy, to create a virtuous circle.   Thats why Marhav is investing in both utilities and housing. We are building 10,000 affordable homes in Marhaven. We are upgrading our nuclear power station with the latest technology so we can safely increase output. And we are also upgrading our water treatment and transport facilities to meet increasing demand. As the biggest state in Tangea, Marhav plays a leading role in Tangeas future prosperity and I want to make sure we make the right choices to assure our future success. As the current Prime Councillor, I have been focused on using the role to strengthen Tangeas international connections with both governments and international businesses.  We have forged significant partnerships with life sciences companies like Takeda, Astra Zeneca and Novartis and leading technology organizations including Google, Microsoft, Huawei and Samsung. Orkens centre of excellence for science and technology has become a beacon for organizations like these.  Metratrons Cube is establishing itself as a world leader in research and education, with particular expertise in biotechnology.  We are partnering with researchers, scientists and industry to progress innovation in areas such as green hydrogen as an energy source, combining our ample solar power with enzymatic catalysts to increase outputs and shape green hydrogen at scale.   I am committed to continuing to enable Tangea to lead innovation on the world stage, with Orken as a renowned core for generating new thinking and ideas application. Its my job to ensure the safety and well being of all Tangeans.   That means two things. Firstly, it is about ensuring homeland security, which includes keeping our people safe and ensuring food and energy security, by ensuring we are self reliant.  Secondly,  I seek to keep our borders secure, both sea and land.  While we have a strong defence force,  it is also my job to make sure we have the right alliances with our neighbours in the region.  Our mining interests sometimes mean that those neighbours are more willing to engage.With the centre of excellence in science and education in Orken,  Tangea is a great place to take on this Ministry.   Our influence and reputation as a world leader in innovation – especially in biotechnology – is attracting the best scientists and researchers, who in turn drive more innovation and more industry interest.  Its a virtuous circle I am keen to advance science led innovations in any field but I am particularly excited about green hydrogen.  I am currently brokering our participation into an international consortium with China, Japan, Singapore, Australia and New Zealand, to be based here in Metratons Cube.  This consortium is an opportunity to accelerate the development of green hydrogen as an energy source that can be used at scale,  using biotechnology to accelerate artificial photosynthesis.  This will truly put us on the world stage.  Tangea has a reputation for high standards in food and agricultural production.  I have been striving to ensure we maintain those standards despite some challenges in the industry.    An investigation into declining food production is currently looking at the role that contaminants in the water may be playing.  If we have a better sense of what the issues are, we can take the right action to restore production levels.   Our advanced science in biotechnology has the possibility to offer real solutions that will not only enable us to address our challenges, but apply innovative methods that will enable us to take our agricultural industry to new levels of excellence and quality. As the Minister for Finance and Industry,  I need to assure Tangeas financial success.  The key is to ensure that we have multiple sectors that are resilient and complementary, providing a stable base for our economy.   Our agriculture and fisheries are vital the mining sector provides a robust base while our innovations in biotechnology and energy offer future possibilities for sustained success.I m aware that GDP per capita has been declining over the past few years, but the economics during and post COVID have been challenging for all countries, who are also experiencing increasing inflation.   As I look ahead, I know that Tangea has laid the foundations for the future.   But we will need to push through on all our economic development opportunities, from scaling up innovations to drawing on all of our natural resources.";

//You should change the following 3 variables. Make sure that the text is enclosed by quotation marks.
const systemRequest = "data-" + data + "please generate insight to my question based on this data only. If the provided data is not sufficient, reply with - No information available. Do not write any extra information. My question - "
const userInputVariable = "my_quest";
const aiOutputVariable = "response";

const userEntry = player.GetVar(userInputVariable)
const auth = "Bearer " + player.GetVar("token");

function sendRequest() {
    fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": systemRequest
              },
              {
                "role": "user",
                "content": userEntry
              }
            ]
        })
    }).then(response => {
        return response.json()
    }).then(data=>{
        console.log(data)
        let aiText = data.choices[0].message.content
        player.SetVar(aiOutputVariable, aiText)
    }).catch(error => {
            console.log("Error: " + error)
        });
}
sendRequest()
}

window.Script3 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script4 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script5 = function()
{
  const player = GetPlayer();

const data = "Tangea is a thriving continent dominated by four different landscapes with very different economic drivers.   Marhav has the biggest population, with an industrialised economy and a busy seaport where the bulk of trade takes place.   Towering above Marhav are the mountains that characterise the highlands of Serrania, a beautiful and inspiring state where the source of the River Elven is also located.  Serrania uses its ample water and lofty hills to generate power and for tourism, but it is the least populous state. The River Elven wends its way through the mountains into Lembah, a rich fertile valley state that contains much of Tangeas agricultural production.  However,  the geology of the area also means that it generates significant revenue from mining operations, with a focus on lithium, zinc and copper.   This verdant land is stark contrast to Orken,  a desert ecosystem renowned for its diverse flora and fauna. But the main driver of Orkens ecosystem is its scientific research centred around the city of Andeo, where industry, education and research come together to drive innovation, especially in the area of biotechnology. Marhav is a populous and industrialized state with a focus on engineering and manufacturing. The capital of Marhav is Marhaven, where most of the population is located.  Marhavs total population is around 44 million people, with 80% located in and around Marhaven. Marhaven is built around a very busy seaport.  Marhaven is strategically positioned along two international shipping routes. Marhavens port is also the host for an active fishing fleet. Marhavs fish market is seen as a provider of high quality fresh fish and seafood to international markets and is highly sought after. Orken comprises a large arid desert environment, although the main city, Andeo, sits within the Tangenian Floristic Domain, a diverse ecosystem that contains some unique flora and fauna.   Andeo has grown rapidly over the past 20 years and is now home to around 6 million people, the lions share of Orkens total population of 8 million. Orken is known as the Education State. It has established itself as an international Center of Excellence for learning and research, with a particular focus on science, especially biotechnology.   Further, tax advantageous terms have attracted some of the biggest pharmaceutical and technology giants to Andeo.    Reflecting both the Citys position at the nexus of biotechnology and industry and the theme of its beautiful architecture and landscaping, Andeos nickname is Metatrons  Cube. Serrania is the highland region of Tangea.   Fringed by mountains on both sides, Serrania has a relatively low population of around 5 million people.  It is renowned for the beauty of its landscape, with lakes and rivers winding through the highveldt.  Serrania supplies water to Marhav from its extensive supplies. In addition, it successfully generates around 35% portion of Tangeas power needs through two hydropower plants, one utilising impoundment and one using a diversion scheme.  Lembah is known as the Garden of Tangea.  This fertile valley provides for a rich source of food production, as well as homes for approximately 10 million people. Lembah is dominated by the seasonal flooding of the Elven, the large river that bisects the State.  Tangea comprises four states. Tangea operates as a confederation of the four states.   It is governed by a Federal Council comprised of 8 Federal Councillors, who operate as a council of equals.  The Federal Council is comprised of:  (need pictures for the people below) Four state heads (Secretaries of State), one for each state Four ministers with responsibility for a portfolio:Minister for Finance and Industry Minister for Health and Agriculture Minister for Defence and Security Minister for Science and Education Secretaries of State are elected at state level.Ministers are elected at federal level, with all Tangeans voting.  For international relations,  Tangea is represented by a Prime Councillor. This title is passed between the states on a defined rotational schedule every three years.   The Prime Councillor is currently held by the Secretary of State for Orken, but is due to pass to Serrania in 6 months. In addition, Tangea is a direct democracy, so in additional to electing government representatives, Tangeans also have the opportunity to vote on specific issues. Lembah is a thriving state with two main economic drivers – agriculture and mining.   Agriculture is the biggest employer, with both arable and pastoral agricultural activity generating high quality food production for both domestic consumption and some international exports. Mining is also a major contributor to the Tangean economy. Our white gold (or lithium) deposits alongside mining of zinc and copper enable us to address rising global demand.   It can be difficult to balance these two industries, which are in close proximity with each other, where interests arent always aligned. Falling productivity in our agricultural sector here in Lembah is a concern amongst the population, with some suggesting that chemical and metal run off from mining may be contributing to this decline.   I am doing all I can to make sure that BOTH industries are successful and sustainable and good for EVERYONE in Lembah. Simply put, Serrania is one of the most beautiful places in the world – and its my responsibility to keep it that way.   I am focused on retaining Serranias ecological balance and preserving the inspiring landscape of mountains, lakes and distant sea. Serrania will be assuming the Prime Councillor role in six months. That will provide a platform for promoting Serrania to the world, with the aim of boosting tourism and sharing more of the spectacular vistas that Serrania has to offer.  Serrania isnt as strong financially as the other states, so a stronger tourism industry can provide welcome incremental revenue.  I know there is some interest in surveying the western range of the Tangean mountains for possible mineral deposits – but given the problems that mining has caused for Lembah, both with water and soil  I think the risks are too high. Marhavs economy is booming, driven by both the demands our growing population and international demand for our exports, including the excellent fish and seafood from our fishing fleet.  We are investing in enhancing our infrastructure to support population growth, which we expect to continue.  An increasing population is important to support growth in our economy, to create a virtuous circle.   Thats why Marhav is investing in both utilities and housing. We are building 10,000 affordable homes in Marhaven. We are upgrading our nuclear power station with the latest technology so we can safely increase output. And we are also upgrading our water treatment and transport facilities to meet increasing demand. As the biggest state in Tangea, Marhav plays a leading role in Tangeas future prosperity and I want to make sure we make the right choices to assure our future success. As the current Prime Councillor, I have been focused on using the role to strengthen Tangeas international connections with both governments and international businesses.  We have forged significant partnerships with life sciences companies like Takeda, Astra Zeneca and Novartis and leading technology organizations including Google, Microsoft, Huawei and Samsung. Orkens centre of excellence for science and technology has become a beacon for organizations like these.  Metratrons Cube is establishing itself as a world leader in research and education, with particular expertise in biotechnology.  We are partnering with researchers, scientists and industry to progress innovation in areas such as green hydrogen as an energy source, combining our ample solar power with enzymatic catalysts to increase outputs and shape green hydrogen at scale.   I am committed to continuing to enable Tangea to lead innovation on the world stage, with Orken as a renowned core for generating new thinking and ideas application. Its my job to ensure the safety and well being of all Tangeans.   That means two things. Firstly, it is about ensuring homeland security, which includes keeping our people safe and ensuring food and energy security, by ensuring we are self reliant.  Secondly,  I seek to keep our borders secure, both sea and land.  While we have a strong defence force,  it is also my job to make sure we have the right alliances with our neighbours in the region.  Our mining interests sometimes mean that those neighbours are more willing to engage.With the centre of excellence in science and education in Orken,  Tangea is a great place to take on this Ministry.   Our influence and reputation as a world leader in innovation – especially in biotechnology – is attracting the best scientists and researchers, who in turn drive more innovation and more industry interest.  Its a virtuous circle I am keen to advance science led innovations in any field but I am particularly excited about green hydrogen.  I am currently brokering our participation into an international consortium with China, Japan, Singapore, Australia and New Zealand, to be based here in Metratons Cube.  This consortium is an opportunity to accelerate the development of green hydrogen as an energy source that can be used at scale,  using biotechnology to accelerate artificial photosynthesis.  This will truly put us on the world stage.  Tangea has a reputation for high standards in food and agricultural production.  I have been striving to ensure we maintain those standards despite some challenges in the industry.    An investigation into declining food production is currently looking at the role that contaminants in the water may be playing.  If we have a better sense of what the issues are, we can take the right action to restore production levels.   Our advanced science in biotechnology has the possibility to offer real solutions that will not only enable us to address our challenges, but apply innovative methods that will enable us to take our agricultural industry to new levels of excellence and quality. As the Minister for Finance and Industry,  I need to assure Tangeas financial success.  The key is to ensure that we have multiple sectors that are resilient and complementary, providing a stable base for our economy.   Our agriculture and fisheries are vital the mining sector provides a robust base while our innovations in biotechnology and energy offer future possibilities for sustained success.I m aware that GDP per capita has been declining over the past few years, but the economics during and post COVID have been challenging for all countries, who are also experiencing increasing inflation.   As I look ahead, I know that Tangea has laid the foundations for the future.   But we will need to push through on all our economic development opportunities, from scaling up innovations to drawing on all of our natural resources.";

//You should change the following 3 variables. Make sure that the text is enclosed by quotation marks.
const systemRequest = "data-" + data + "please generate insight to my question based on this data only. If the provided data is not sufficient, reply with - No information available. Do not write any extra information. My question - "
const userInputVariable = "my_quest";
const aiOutputVariable = "response";

const userEntry = player.GetVar(userInputVariable)
const auth = "Bearer " + player.GetVar("token");

function sendRequest() {
    fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": systemRequest
              },
              {
                "role": "user",
                "content": userEntry
              }
            ]
        })
    }).then(response => {
        return response.json()
    }).then(data=>{
        console.log(data)
        let aiText = data.choices[0].message.content
        player.SetVar(aiOutputVariable, aiText)
    }).catch(error => {
            console.log("Error: " + error)
        });
}
sendRequest()
}

window.Script6 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script7 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script8 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script9 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script10 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script11 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script12 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script13 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script14 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script15 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script16 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script17 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script18 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script19 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script20 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script21 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script22 = function()
{
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        return false;
    }
}, true);
}

window.Script23 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script24 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script25 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script26 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script27 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script28 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script29 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script30 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script31 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script32 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

window.Script33 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script34 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

};
