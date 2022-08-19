// Code from nut

const amount = 2;
function CheckPointListFunction(amount){
    const CheckPointList = [];
    for (let i = 0; i < amount; i ++){
        // console.log(i + 1);
        CheckPointList.push({
            isChecked: false,
            isGotReward: false,
            isHaveReward: false,
            voucherGuidelines: i + 1,
        });
    }
    for (let i = amount; i < 5; i++){
        // console.log(i + 1);
        CheckPointList.push({
            isChecked: true,
            isGotReward: false,
            isHaveReward: false,
            voucherGuidelines: i + 1,
        });
    }
    return CheckPointList;
    // console.log(x);
}