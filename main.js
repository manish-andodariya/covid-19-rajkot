const india_case = document.querySelector(".cases-india"), india_state_case = document.querySelector(".cases-india-state"), guj_cases = document.querySelector(".cases-gujarat"), rr_text = document.querySelector(".rr-text"), rr_style = document.querySelector(".rr-style"), dr_text = document.querySelector(".dr-text"), dr_style = document.querySelector(".dr-style"); var india_api = { url: "https://api.rootnet.in/covid19-in/stats/latest", method: "GET", timeout: 0 }; $.ajax(india_api).done(function (t) { document.querySelector(".loder").style.display = "none", document.querySelector(".content").style.display = "block"; var e = t.data.summary; india_case.innerHTML = "", india_case.innerHTML += ` <table class="table-responsive">\n              <tr>\n                <td class="left">Active Cases</td>\n                <td class="right">${e.total - e.discharged - e.deaths}</td>\n              </tr>\n              <tr>\n                <td class="left">Total Cases</td>\n                <td class="right">${e.total}</td>\n              </tr>\n              \x3c!--tr>\n                <td class="left">Confirmed Cases Indian</td>\n                <td class="right">${e.confirmedCasesIndian}</td>\n              </tr>\n              <tr>\n                <td class="left">Confirmed Cases Foreign</td>\n                <td class="right">${e.confirmedCasesForeign}</td>\n              </tr--\x3e\n              <tr>\n                <td class="left">Discharged</td>\n                <td class="right">${e.discharged}</td>\n              </tr>\n              <tr>\n                <td class="left">Deaths</td>\n                <td class="right">${e.deaths}</td>\n              </tr>\n              </table>`; const a = 100 * e.discharged / e.total; rr_text.innerHTML = `${a.toFixed(2) + "%"}`, rr_style.style.width = a.toFixed(2) + "%"; const s = 100 * e.deaths / e.total; dr_text.innerHTML = `${s.toFixed(2) + "%"}`, dr_style.style.width = s.toFixed(2) + "%"; var n = t.data.regional; india_state_case.innerHTML = ""; for (var d = 0, r = n.length; d < r; d++)india_state_case.innerHTML += ` <table class="table-responsive">\n         <thead>\n         <tr>\n             <th colspan="3" class="state-head">${n[ d ].loc}</th>\n         </tr>\n       </thead>\n\n       <tbody>\n       <tr>\n           <td class="left">Active Casess</td>\n           <td class="right">${n[ d ].totalConfirmed - n[ d ].discharged - n[ d ].deaths}</td>\n         </tr>\n         <tr>\n           <td class="left">Confirmed</td>\n           <td class="right">${n[ d ].totalConfirmed}</td>\n         </tr>\n         <tr>\n           <td class="left">Discharged</td>\n           <td class="right">${n[ d ].discharged}</td>\n         </tr>\n         <tr>\n           <td class="left">Deaths</td>\n           <td class="right">${n[ d ].deaths}</td>\n         </tr>\n       </tbody>\n             </table>`; }); var guj_api = { url: "https://api.covid19india.org/state_district_wise.json", method: "GET", timeout: 0 }; $.ajax(guj_api).done(function (t) { for (z in guj_cases.innerHTML = "", t.Gujarat.districtData) guj_cases.innerHTML += ` <table class="table-responsive">\n        <thead>\n        <tr>\n            <th colspan="3" class="state-head">${z}</th>\n        </tr>\n      </thead>\n        <tr>\n          <td class="left">Active</td>\n          <td class="right">${t.Gujarat.districtData[ z ].active}</td>\n        </tr>\n        <tr>\n          <td class="left">Confirmed</td>\n          <td class="right">${t.Gujarat.districtData[ z ].confirmed}</td>\n        </tr>\n        <tr>\n          <td class="left">Discharged</td>\n          <td class="right">${t.Gujarat.districtData[ z ].recovered}</td>\n        </tr>\n        <tr>\n          <td class="left">Deaths</td>\n          <td class="right">${t.Gujarat.districtData[ z ].deceased}</td>\n        </tr>\n        </table>`; });