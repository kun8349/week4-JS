//第一階段
//printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」6
//printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」22
//printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」26
//printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」28
//printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」34
//printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」41
//printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }
let bmiHistoryData = {
    count:0,
    bmi:0,
    state:'過重',
    color:'澄色'
};


let printBmi = function(heigh,weigh){
    let bmi = (weigh/Math.pow(heigh,2)*10000).toFixed(2);
    
    if(bmi < 18.5){
        console.log(`您的體重${bmiStatesData.overThin.state},健康指數為${bmiStatesData.overThin.color}`)
        bmiHistoryData.count += 1;
        bmiHistoryData.bmi = bmi;
        bmiHistoryData.state= bmiStatesData.overThin.state;
        bmiHistoryData.color= bmiStatesData.overThin.color;
    }else if(bmi >= 18.5 && bmi < 24){
        console.log(`您的體重${bmiStatesData.normal.state},健康指數為${bmiStatesData.normal.color}`)
        bmiHistoryData.count += 1;
        bmiHistoryData.bmi= bmi;
        bmiHistoryData.state= bmiStatesData.normal.state;
        bmiHistoryData.color= bmiStatesData.normal.color;
    }else if(bmi >= 24 && bmi < 27){
        console.log(`您的體重${bmiStatesData.overWeight.state},健康指數為${bmiStatesData.overWeight.color}`)
        bmiHistoryData.count += 1;
        bmiHistoryData.bmi= bmi;
        bmiHistoryData.state= bmiStatesData.overWeight.state;
        bmiHistoryData.color= bmiStatesData.overWeight.color;
    }else if(bmi >= 27 && bmi < 30){
        console.log(`您的體重${bmiStatesData.mildFat.state},健康指數為${bmiStatesData.mildFat.color}`)
        bmiHistoryData.count += 1;
        bmiHistoryData.bmi= bmi;
        bmiHistoryData.state= bmiStatesData.mildFat.state;
        bmiHistoryData.color= bmiStatesData.mildFat.color;
    }else if(bmi >= 30 && bmi < 35){
        console.log(`您的體重${bmiStatesData.moderateFat.state},健康指數為${bmiStatesData.moderateFat.color}`)
        bmiHistoryData.count += 1;
        bmiHistoryData.bmi= bmi;
        bmiHistoryData.state= bmiStatesData.moderateFat.state;
        bmiHistoryData.color= bmiStatesData.moderateFat.color;
    }else if(bmi >= 35){
        console.log(`您的體重${bmiStatesData.severeFat.state},健康指數為${bmiStatesData.severeFat.color}`)
        bmiHistoryData.count += 1;
        bmiHistoryData.bmi= bmi;
        bmiHistoryData.state= bmiStatesData.severeFat.state;
        bmiHistoryData.color= bmiStatesData.severeFat.color;
    }else{
        console.log('您的數值輸入錯誤，請重新輸入')
    }
    
    return bmiHistoryData;
}
let showHistoryData = function(){
        console.log(`您總共計算${bmiHistoryData.count}次 BMI 紀錄，最後一次 BMI 指數為${bmiHistoryData.bmi}，體重${bmiHistoryData.state}！健康指數為${bmiHistoryData.color}！`);
}
console.log(printBmi(178, 20));
console.log(printBmi(178, 70));
console.log(printBmi(178, 85));

console.log(showHistoryData());

