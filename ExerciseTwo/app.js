const countriesData =  [
    {
    country:"US",
    languages: ["en"]
    },
    {
    country:"BE",
    languages: ["nl","fr","de"]
    },
    {
    country:"NL",
    languages: ["nl","fy"]
    },
    {
    country:"DE",
    languages: ["de"]
    },
    {
    country:"ES",
    languages: ["es"]
    }
];

const deSpeakers = [];
const mostLangs = [];
const repeatedLangs = [];
let numberOfLangs;
let countriesNumber;
let allLangs = [];
let mostLangsDe = {
    country:"",
    languages: [""]
};
let mostLangsWorld = {
    country:"",
    languages: [""]
};

const countriesCounter = () => {
    res = Number(countriesData.length);
    console.log(`There are ${res} countries`);
    return res;
};

const highestNumberLangsDe = () => {
    countriesData.forEach((index) => {
        index.languages.forEach((value) => {
            if (value === 'de') {
                deSpeakers.push(index);
            };
            deSpeakers.sort((a,b) => {
                if (a.languages.length > b.languages.length) {
                    if (a.languages.length > mostLangsDe.languages.length) {
                        mostLangsDe = a; 
                    };
                }; 

                if (a.languages.length < b.languages.length) {
                    if (b.languages.length > mostLangsDe.languages.length) {
                        mostLangsDe = b; 
                    };
                };
            });
        });
    });
    
    console.log(`The country that speaks German and has the most official languages is ${mostLangsDe.country}`);  
    return mostLangsDe;
};

const allOfficialLangs = () => {
    countriesData.forEach((index) => {
        index.languages.forEach((value) => {
            repeatedLangs.push(value);
        });
        allLangs = [...new Set(repeatedLangs)];
        numberOfLangs = Number(allLangs.length);
    });
    
    console.log(`There are ${numberOfLangs} languages spoken in the world.`);
    return numberOfLangs;
};

const highestNumberLangs = () => {
    countriesData.forEach((index) => {
        mostLangs.push(index);
    });

    mostLangs.sort((a,b) => {
        if (a.languages.length > b.languages.length) {
            if (a.languages.length > mostLangsWorld.languages.length) {
                mostLangsWorld = a; 
            };
        }; 
        if (a.languages.length < b.languages.length) {
            if (b.languages.length > mostLangsWorld.languages.length) {
                mostLangsWorld = b; 
            };
        };
    });
    console.log(`The country that has more official languages is ${mostLangsWorld.country}`);
    return mostLangsWorld;
};

const mostCommonLang = arr => {
    const count = {};
    let res = [];
    arr.forEach(el => {
       count[el] = (count[el] || 0) + 1;
    });

    res = Object.keys(count).reduce((acc, value, index) => {
       if (!index || count[value] > count[acc[0]]) {
          return [value];
       };
       if (count[value] === count[acc[0]]) {
          acc.push(value);
       };
       return acc;
    }, []);
  
    if (res.length > 1) {
        console.log(`There are ${res.length} most common languages in the world, these languages are ${res}`);
        return res;
    };

    console.log(`The world's most common language is ${res}`);
    return res;
};



countriesCounter();
highestNumberLangsDe();
allOfficialLangs();
highestNumberLangs();
mostCommonLang(repeatedLangs);




