// ------Heart-----

let clicked = {};
function heartClick(id) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", function () {
    if (!clicked[id]) {
      let heart = parseInt(document.getElementById("heart-number").innerText);
      updatedHeart = heart + 1;
      document.getElementById("heart-number").innerText = updatedHeart;
      btn.style.color = "red";
      clicked[id] = true;
    } else {
      let heart = parseInt(document.getElementById("heart-number").innerText);
      updatedHeart = heart - 1;
      document.getElementById("heart-number").innerText = updatedHeart;
      btn.style.color = "";
      clicked[id] = false;
    }
  });
}

heartClick("heart-btn");
heartClick("heart-btn2");
heartClick("heart-btn3");
heartClick("heart-btn4");
heartClick("heart-btn5");
heartClick("heart-btn6");
heartClick("heart-btn7");
heartClick("heart-btn8");
heartClick("heart-btn9");

// ---function for alert

function alerted(id1, id2) {
  const forAlert1 = document.getElementById(id1).innerText;
  const forAlert2 = document.getElementById(id2).innerText;
  alert(forAlert1 + " is : " + forAlert2);
  return;
}

// --------------call---------------

const callHistoryData = [];

function forCall(id, id1, id2) {
  document.getElementById(id).addEventListener("click", function () {
    let coin = parseInt(document.getElementById("coin-number").innerText);

    let needCoin = 20;
    
    if (coin < needCoin) {
      alert("Insufficient Coin");
      return;
    }

    let updatedCoin = coin - needCoin;

    document.getElementById("coin-number").innerText = updatedCoin;

    alerted(id1, id2);

    // ----------for call history---------->

    const historyData = {
      name: document.getElementById(id1).innerText,
      number: document.getElementById(id2).innerText,
      date: new Date().toLocaleTimeString(),
    };
    callHistoryData.push(historyData);

    const callHistoryContainer = document.getElementById(
      "call-history-container"
    );
    callHistoryContainer.innerText = "";

    for (const historyData of callHistoryData) {
      const div = document.createElement("div");
      div.innerHTML = `
                <div
            class=" flex justify-between items-center bg-[#fafafa] mb-4 p-3 rounded-[8px]"
          >
            <div>
              <h1 class="font-[600] inter">${historyData.name}</h1>
              <p class="text-[#5c5c5c]">${historyData.number}</p>
            </div>
            <p>${historyData.date}</p>
          </div>
      `;
      callHistoryContainer.appendChild(div);
    }

    // -------for clear ----

    document.getElementById("clear-btn").addEventListener("click", function () {
      callHistoryData.length = 0;
      document.getElementById("call-history-container").innerText = "";
    });
  });
}

forCall(
  "call-btn1",
  "national-emergency-number",
  "national-emergency-number-call",
  "national-emergency-number",
  "national-emergency-number-call"
);
forCall("call-btn2", "police-helpline-number", "police-helpline-number-call");
forCall("call-btn3", "fire-service-number", "fire-service-number-call");
forCall("call-btn4", "ambulance-service", "ambulance-service-call");
forCall("call-btn5", "women&child-helpline", "women&child-helpline-call");
forCall(
  "call-btn6",
  "anti-corruption-helpline",
  "anti-corruption-helpline-call"
);
forCall("call-btn7", "electricity-helpline", "electricity-helpline-call");
forCall("call-btn8", "brac-helpline", "brac-helpline-call");
forCall(
  "call-btn9",
  "bangladesh-railway-helpline",
  "bangladesh-railway-helpline-call"
);

// ---------------Copy Section--------------

function forCopy(id1, id2, id3) {
  document.getElementById(id1).addEventListener("click", function () {
    // increasing count of copy
    let copyCount = parseInt(document.getElementById("copy-number").innerText);
    updatedCopyCount = copyCount + 1;
    document.getElementById("copy-number").innerText = updatedCopyCount;

    // ----copy the number----
    let copyText = document.getElementById(id3).innerText;
    let copyName = document.getElementById(id2).innerText;
    navigator.clipboard.writeText(copyText);
    alert("The number of " + copyName + " has been Copied : " + copyText);
  });
  return;
}
forCopy(
  "copy-btn1",
  "national-emergency-number",
  "national-emergency-number-call"
);
forCopy("copy-btn2", "police-helpline-number", "police-helpline-number-call");
forCopy("copy-btn3", "fire-service-number", "fire-service-number-call");
forCopy("copy-btn4", "ambulance-service", "ambulance-service-call");
forCopy("copy-btn5", "women&child-helpline", "women&child-helpline-call");
forCopy(
  "copy-btn6",
  "anti-corruption-helpline",
  "anti-corruption-helpline-call"
);
forCopy("copy-btn7", "electricity-helpline", "electricity-helpline-call");
forCopy("copy-btn8", "brac-helpline", "brac-helpline-call");
forCopy(
  "copy-btn9",
  "bangladesh-railway-helpline",
  "bangladesh-railway-helpline-call"
);
