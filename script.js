const batteryLevel =document.querySelector(".batteryLevel");
const charging = document.querySelector(".charging");
const chargeTime = document.querySelector(".chargeTime");
const dischargeTime = document.querySelector(".dischargeTime");

//battery API
const battery = ()=>{
  if("getBattery" in navigator){
    navigator.getBattery().then((battery)=>{
        function updtAll(){
            updateChrgInfo();
            updtLevelChange();
            updtDisChargeInfo();
            updtChargTime();
        }
        updtAll()
        //battery charging change
        battery.addEventListener('chargingChange',()=>{
            console.log(updateChrgInfo());
        });
function updateChrgInfo(){
    const isCharging =battery.charging ? "YES" : "NO";
    charging.innerHTML=isCharging;
}
        //charging time
        battery.addEventListener('chargingtimeChange',()=>{
            updtChargTime();
        });
        function updtChargTime(){
            console.log(battery.chargingTime);
            chargeTime.innerHTML=battery.chargingTime;
        }
        //discharging time
        battery.addEventListener('dischargingtimeChange',()=>{
            updtDisChargeInfo();
        });
        function updtDisChargeInfo(){
            console.log(battery.dischargingTime);
            dischargeTime.innerHTML=battery.dischargingTime + " seconds";
        }
        //battery level changing
        battery.addEventListener('levelChange',()=>{
            updtLevelChange();
        })
        function updtLevelChange(){
            const level = battery.level * 100 +"%";
            batteryLevel.innerHTML=level;
        }
        //battery status
    })
  }
}
battery();