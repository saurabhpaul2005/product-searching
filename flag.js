let mainFrame = document.getElementById("main-frame");
   mainFrame.classList = "border-1 flex";

let indiaFlag = document.createElement("div");
indiaFlag.classList = "border-2 w-31 m-1";

let orangeStrap = document.createElement("div");
orangeStrap.classList= "h-10 w-30.4 bg-orange-500   ";

let whiteStrap = document.createElement("div");
whiteStrap.classList= "h-10 w-30.4 justify-items-center";

let greenStrap = document.createElement("div");
greenStrap.classList = "h-10 w-30.4 bg-green-500";

let blueDics = document.createElement("div");
blueDics.classList= "bg-blue-700 w-10 h-10 rounded-full";
whiteStrap.appendChild(blueDics);

let my = document.createElement("div");
my.classList= "bg-blue-500 w-6 h-6 rounded-full";
whiteStrap.appendChild(my);

indiaFlag.appendChild(orangeStrap);
indiaFlag.appendChild(whiteStrap);
indiaFlag.appendChild(greenStrap);

// let japanFlag = document.createElement("div");
// japanFlag.classList =
//   "border-2 w-31 h-31 justify-items-center content-center m-2";

// let redDics = document.createElement("div");
// redDics.classList = "bg-red-700 w-10 h-10 rounded-full";
// japanFlag.appendChild(redDics);

// let banglaFlag = document.createElement("div");
// banglaFlag.classList =
//   "border-2 w-31 h-31 justify-items-center content-center m-2 bg-green-800";

// let red2Dics = document.createElement("div");
// red2Dics.classList = "bg-red-700 w-10 h-10 rounded-full";
// banglaFlag.appendChild(red2Dics);

// let rusFlag = document.createElement("div");
// rusFlag.classList = "border-2 w-31 m-2";

// let white2Strap = document.createElement("div");
// white2Strap.classList = "h-10 w-30 justify-items-center";

// let blueStrap = document.createElement("div");
// blueStrap.classList = "h-10 w-30 bg-blue-600";

// let redStrap = document.createElement("div");
// redStrap.classList = "h-10 w-30 bg-red-500";

// rusFlag.appendChild(white2Strap);
// rusFlag.appendChild(blueStrap);
// rusFlag.appendChild(redStrap);

mainFrame.appendChild(indiaFlag);
// mainFrame.appendChild(japanFlag);
// mainFrame.appendChild(banglaFlag);
// mainFrame.appendChild(rusFlag);