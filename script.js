async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/series?apikey=c8d502e1-af35-4fa4-9ee6-451f7e59d60a&offset=0&search=")
    .then(res => res.json())
    .then(data => {
        if(data.status != "success")return;

        const matchesList = data.data;

        if(!matchesList)return [];

        const relevantData = matchesList.map(match => `${match.name}, ${match.startDate} - ${match.endDate}`)

        // console.log({relevantData});
        for (let i = 0; i < 25; i++) {
            console.log(
                relevantData[i]
            );
        }


    })
}

getMatchData();